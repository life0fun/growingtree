;; datomic data accessor
(ns growingtree-server.datomic.assign
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint :refer [pprint]]
            [clojure.data.json :as json])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]
            [growingtree-server.datomic.util :as util]))


;
; http://blog.datomic.com/2013/05/a-whirlwind-tour-of-datomic-query_16.html
; query API results as a list of fact tuples. Fact tuple is a list of entity Ids.
;   [ [tuple1...] [tuple2...] ]
;
; the intermediate value for joining are :db/id, can be in both [entity attr val] pos
; to join, the attribute col in tuple is the join col, and val.
;
; find ?e ret entity id, (d/touch(d/entity db) to convert to lazy entity.
;   (d/touch (d/entity db (ffirst (d/q '[:find ?e :where [?e :parent/fname]] db)))
;
;
; query stmt is a list, or a map, with :find :in :where seps query args.
;   [?a …]  collection   [ [?a ?b ] ]  relation
;   [(predicate ...)] [(function ...) bindings]
;
; a named rule is a list of clause [(community-type ?c ?t) [?c :community/type ?t]])]
; a set of rules is a list of rules. [[[rule1 ?c] [_ :x ?c]] [[rule2 ?d] [_ :x ?d]]]
; rules with the same name defined multiple times in rule set make rule OR.
;   [[northern ?c] (region ?c :region/ne)] 
;   [[northern ?c] (region ?c :region/n)]
; Within the same rule, multiple tuples are AND.
;
;
; all eids must be number, use read-string to convert from command line. 
; all the :ref :many attribute stores clojure.lang.MapEntry. use :db/id to get the id.
; knowing entity id, query with (d/entity db eid). otherwise, [:find $t :where []]
; (d/entity db eid) rets the entity. entity is LAZY. attr only availabe when touch.
; To add data to a new entity, build a transaction using :db/add implicitly 
; with the map structure (or explicitly with the list structure), a temporary id, 
; and the attributes and values being added.
;
; #db/id[partition-name value*] : value is an optional negative number.
; all instances of the same temp id are mapped to the same actual entity id in a given transaction, 
; {:db/id entity-id attribute value attribute value ... }
; [:db/add entity-id attribute value]
; (d/transact conn [newch [:db/add pid :parent/child (:db/id newch)]]
; d/transact tx-data is a list of lists, each of which specifies a write operation
; for single write datom(map tuple), wrap with [datom-tuple]
; for a list of write datom tuple from map, use (vec ([] [])) to wrap them.
; (d/transact conn (vec (map make-attr (d/q '[:find ?e :where []))))
;
;
; In general, unique temporary ids are mapped to new entity ids.
; within the same transaction, the same tempid maps to the same real entity id.
; when one of the attribute is :db/unique :db.unique/identity, system will map to existing entity if matches or make a new.
; to add fact to existing entity, retrieve entity id the add using the entity id.
; adding entity ref, must specify an entity id(could be tempid) as the attribute's value.
; takes advantage of the fact that the same temporary id can be generated multiple times by 
; specifying the same partition and negative number; and that all instances of a given temporary id 
; within a transaction will resolve to a single entity id.
;
; (def e (d/entity (db conn) attr-id) gets all entity with ids
; (keys e) or (:parent/child (d/entity db 17592186045703))
; entity attr rets a map entry for all children. (:parent/child (d/entity db pid))
; 
; entity-id can be used at both side of the datom, e.g., give a parent entity id,
;   (d/q '[:find ?e :in $ ?attr :where [17592186045703 ?attr ?e] [...] ] db :parent/child)
;   (d/q '[:find ?e :in $ ?attr :where [?e ?attr 17592186045703] [...] ] db :child/parent)
; query :where takes a vardic list, not a list of list.
;

; outbound query and inbound query
; using parent id, get list of children
;   (:parent/child (d/entity db 17592186045476))
;
; inbound query(who refed me) is used for query another entity that refs this entity. 
; parent entity can be used to query all child entity that refs to this parent entity.
; use inbound query with convention is prefix attr name with _.
;   (:child/_parent (d/entity db 17592186045476))
; = (:parent/child (d/entity db 17592186045476))
;   (-> (d/entity db 17592186045476) :child/_parent)
; this reverse look-up might be time consuming, use explicit linking might be better.
;
; (map (fn [id] (d/touch (d/entity db (:db/id id)))) 
;   (-> (d/entity db 17592186045476) :child/_parent))
;
; (d/q '[:find ?e :in $ ?x :where [?e :child/parent ?x]] db (:db/id p))


;; this module contains database operations for task and assignment.

(declare inc-question-popularity)
(declare create-question-math)


; schema attr-name value type map for question schema and assignment schema
(def question-schema (assoc (list-attr :question) :db/id :db.type/id))
(def assignment-schema (assoc (list-attr :assignment) :db/id :db.type/id))
(def answer-schema (assoc (list-attr :answer) :db/id :db.type/id))


;---------------------------------------------------------------------------------
; rules to find all parent or child with the name, 
; for all rule lists with the same name, results are OR logic.
;---------------------------------------------------------------------------------
; rule set for get child by. rule name is the parent thing type.
(def get-question-by
  '[[(:all ?e ?val) [?e :question/content]]   ; select all question that has author
    [(:title ?e ?val) [?e :question/title ?val]]
    [(:author ?e ?val) [?e :question/author ?val]]
    [(:lecture ?e ?val) [?e :question/lecture ?val]]
    [(:type ?e ?val) [?e :question/type ?val]]
    [(:content ?e ?val) [?e :question/content ?val]]
  ])

(def get-assignment-by
  '[[(:all ?e ?val) [?e :assignment/author]]   ; select all assignment that has author
    [(:title ?e ?val) [?e :assignment/title ?val]]
    [(:author ?e ?val) [?e :assignment/author ?val]]
    [(:question ?e ?val) [?e :assignment/question ?val]]
    [(:assignee ?e ?val) [?e :assignment/assignee ?val]]
    [(:status ?e ?val) [?e :assignment/status ?val]]
    [(:due ?e ?val) [?e :assignment/due ?val]]
  ])


; ; get entities by qpath, formulate query rules from qpath
; ; qpath is [:all 0 :children] or [:parent 1 :children] or [:parents 1 :parents]
; (defn get-entities-by-rule
;   "get entities by qpath and rule-set, formulate query rules from qpath"
;   [qpath rule-set]
;   (if (= (first qpath) (last qpath))
;     (let [eid (second qpath)
;           e (d/entity db eid)]
;       [e])
;     (let [pid (second qpath)
;           rule-name (first qpath)  ; parent thing type is rule name
;           parent-rule (list rule-name '?e '?val)
;           q (conj '[:find ?e :in $ % ?val :where ] parent-rule)
;           eids (d/q q (get-db) rule-set pid)
;           entities (map (comp get-entity first) eids)
;           ]
;       (prn "get entities by rule " rule-name pid parent-rule q eids)
;       entities)))


;;==================================================================================
; create question
;;==================================================================================
; this map between course map to entity attr

; find all assignment
(defn find-question
  "find all question by query path "
  [qpath]
  (let [entities (util/get-entities-by-rule qpath get-question-by) ; a list of entity tuples
        projkeys (keys (dissoc question-schema :question/lecture :question/author))
        question (map #(select-keys % projkeys) entities)
        ]
    (prn projkeys question)
    (doseq [e question]
      (prn "question --> " e))
    question
    ))


; the enum must be fully qualified, :question.subject/math
(defn create-question
  "create question with details"
  [details]
  (let [author (dbconn/find-by :parent/name (:author details))  ; should be login name
        author-id (:db/id author)
        entity (-> details
                (select-keys (keys question-schema))
                (assoc :question/author author-id)
                (util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "create question entity " author-id " entity " entity)
    (prn "create question trans " trans)
    entity))

 
(defn inc-question-popularity
  "increase question popularity"
  []
  (let [hwids (find-question)
        incstmt (map #(incby-stmt % :question/popularity 1) hwids)]
    (prn "inc-question-popularity " incstmt)
    (submit-transact (vec incstmt))))


;;================================================================================
;; assignment
;;================================================================================
(defn create-assignment
  "new assignment form the submitted form data"
  [details]
  (let [author (dbconn/find-by :parent/name (:author details))  ; should be login name
        author-id (:db/id author)
        ; this find all children whose parent is author-di
        assignee-id (:db/id (dbconn/find-by :child/parents author-id))
        entity (-> details
                (select-keys (keys assignment-schema))
                (assoc :assignment/author author-id)
                (assoc :assignment/assignee assignee-id)
                (util/to-datomic-attr-vals) 
                (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "create assignment entity " author-id assignee-id " entity " entity)
    (prn "create assignment trans " trans)
    entity))


; find all assignment
(defn find-assignment
  "find all assignment by query path "
  [qpath]
  (let [entities (util/get-entities-by-rule qpath get-assignment-by) ; a list of entity tuples
        projkeys (keys (dissoc assignment-schema :assignment/assignee :assignment/author))
        assignments (map #(select-keys % projkeys) entities)
        ]
    (prn projkeys assignments)
    (doseq [e assignments]
      (prn "assignment --> " e))
    assignments))


;;================================================================================
;; answer 
;;================================================================================
(defn answer-attr
  "basic answer attr map"
  [assid authorid answer completetime]
  (let [m {:db/id (d/tempid :db.part/user)
          :answer/assignment assid
          :answer/author authorid
          :answer/answer answer
          :answer/completetime completetime}]
    (prn m)
    m))


; submit an answer to an assignment
(defn submit-answer
  "submit an answer to an assignment"
  [assid authorid]
  (let [asse (d/entity db assid)   ; reify ass entity
        hwe (->> asse :assignment/question :db/id (d/entity db))
        answ (str (:question/content hwe) " == " (rand-int 100))
        nowd (.toDate (clj-time/now))
        answmap (answer-attr assid authorid answ nowd)]
    (prn (d/touch asse))
    (prn (d/touch hwe))
    (prn answmap)
    (submit-transact [answmap])))


; find all answers
(defn find-answer
  "find all answers"
  []
  (let [ansid (d/q '[:find ?e :where [?e :answer/answer]] db)]
    (map (comp show-entity-by-id first) ansid)))
