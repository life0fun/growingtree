;; datomic data accessor
(ns growingtree-server.datomic.assign
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint :refer [pprint]]
            [clojure.data.json :as json]
            [io.pedestal.service.log :as log])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.family :as family]
            [growingtree-server.datomic.dbschema :as dbschema]
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
    [(:type ?e ?val) [?e :question/type ?val]]
    [(:content ?e ?val) [?e :question/content ?val]]  ; (fulltext $ [])

    [(:course ?e ?val) [?e :question/origin ?val]]
    [(:lecture ?e ?val) [?e :question/origin ?val]]
    [(:assignment ?e ?val) [?e :question/origin ?val]]
  ])

; rule name is the parent of navpath [:parent 1 :assignment] [:child 1 :assignment]
(def get-assignment-by
  '[[(:all ?e ?val) [?e :assignment/author]]   ; select all assignment that has author
    [(:title ?e ?val) [?e :assignment/title ?val]]
    [(:status ?e ?val) [?e :assignment/status ?val]]
    [(:end ?e ?val) [?e :assignment/end ?val]]

    [(:parent ?e ?val) [?e :assignment/author ?val]]
    [(:child ?e ?val) [?e :assignment/person ?val]]

    [(:question ?e ?val) [?e :assignment/origin ?val]]
    [(:lecture ?e ?val) [?e :assignment/origin ?val]]
    [(:course ?e ?val) [?e :assignment/origin ?val]]
  ])


(def get-answer-by
  '[[(:all ?e ?val) [?e :answer/title]]   ; select all answer that has title
    [(:title ?e ?val) [?e :answer/title ?val]]
    [(:author ?e ?val) [?e :answer/author ?val]]
    [(:origin ?e ?val) [?e :answer/origin ?val]]
    [(:score ?e ?val) [?e :answer/score ?val]]

    [(:assignment ?e ?val) [?e :answer/origin ?val]]
    [(:question ?e ?val) [?e :answer/origin ?val]]
    [(:lecture ?e ?val) [?e :answer/origin ?val]]
    [(:course ?e ?val) [?e :answer/origin ?val]]
  ])


;;==================================================================================
; create question
;;==================================================================================
; this map between course map to entity attr

; find all assignment
(defn find-question
  "find all question by query path "
  [qpath]
  (let [projkeys (keys (dissoc question-schema :question/lecture :question/author))
        question (->> (util/get-qpath-entities qpath get-question-by)
                      (map #(select-keys % projkeys) )
                      (map #(util/add-upvote-attr %) )
                      (map #(util/add-numcomments-attr %) )
                      (map #(util/add-navpath % qpath) )
                 )
        ]
    (log/info "find-question " projkeys question)
    (doseq [e question]
      (log/info "question --> " e))
    question
    ))


; the enum must be fully qualified, :question.subject/math
; {:question/author "bb", :question/origin 17592186045430, :author "rich-dad", :thing-type :question }
(defn create-question
  "create question with details"
  [details]
  (let [author-id (:db/id (find-by :person/title (:author details)))
        entity (-> details
                (select-keys (keys question-schema))
                (assoc :question/author author-id)
                (util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (log/info "create question author " author-id " entity " entity)
    (log/info "create question trans " trans)
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
; find all assignment
(defn find-assignment
  "find all assignment by query path "
  [qpath]
  (let [projkeys (keys assignment-schema)
        assignments (->> (util/get-qpath-entities qpath get-assignment-by)
                      (map #(select-keys % projkeys) )
                      (map #(util/add-upvote-attr %) )
                      (map #(util/add-numcomments-attr %) )
                      (map #(util/add-navpath % qpath) )
                    )
        ]
    (doseq [e assignments]
      (prn "assignment --> " e))
    assignments))


; tagsInput sep is , weto assign to group, the :assignment/person is a list of name, separated by comma.
; "fun math,rich-baby", we need split and strip it.
(defn create-assignment
  "new assignment form the submitted form data"
  [details]
  (prn "create-assignment " details)
  (let [author-id (:db/id (dbconn/find-by :person/title (:author details)))
        ; this find all children whose parent is author-id,
        person (util/tagsInputs (:assignment/person details))
        person-id (->> (map #(family/get-person-by-title %) person)
                       (map :db/id )
                       (filter identity))
        ; use mapcat as group person is ref many.
        group-person (->> (mapcat #(family/get-group-members %) person)
                          (map :db/id )
                          (filter identity))
        all-person (set (concat person-id group-person))

        entity (fn [person-id]
                (-> details
                  (select-keys (keys assignment-schema))
                  (assoc :assignment/author author-id)
                  (assoc :assignment/person person-id)
                  (util/to-datomic-attr-vals)
                  (assoc :db/id (d/tempid :db.part/user))))

        assigns (map entity all-person)
        trans (submit-transact assigns)  ; transaction is a list of assigns
      ]
    (newline)
    (prn author-id "create assignment to " person " " all-person " assigns " assigns)
    (prn "create assignment trans " trans)
    assigns))


;;================================================================================
;; answer
;;================================================================================
(defn create-answer
  "submit an answer to an assignment"
  [details]
  (let [author-id (:db/id (dbconn/find-by :person/title (:author details)))
        ; this find all children whose parent is author-di
        entity (-> details
                (select-keys (keys answer-schema))
                (assoc :answer/author author-id)
                (util/to-datomic-attr-vals)
                (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn author-id " create answer entity " entity)
    (prn "create answer trans " trans)
    entity))


; find all answer
(defn find-answer
  "find all answer by query path "
  [qpath]
  (prn "find-answer " qpath " result " (util/get-qpath-entities qpath get-answer-by))
  (let [projkeys (keys answer-schema)
        answers (->> (util/get-qpath-entities qpath get-answer-by)
                      (map #(select-keys % projkeys) )
                      (map #(util/add-upvote-attr %) )
                      (map #(util/add-numcomments-attr %) )
                      (map #(util/add-navpath % qpath) )
                    )
        ]
    (doseq [e answers]
      (prn "answer --> " e))
    answers))


; create a grade with 2 steps, update answer score, and add comments to the answer.
(defn create-grade
  "submit an grade to an assignment"
  [details]
  (let [author-id (:db/id (dbconn/find-by :person/title (:author details)))
        answer-id (:grade/origin details)
        score (:grade/score details)
        comments (:grade/comments details)

        grade-e (-> {:answer/score score}
                    (select-keys (keys answer-schema))
                    (util/to-datomic-attr-vals)
                    (assoc :db/id answer-id)
                )
        comments-e (-> {:comments/title comments}
                       (assoc :comments/author author-id)
                       (assoc :comments/origin answer-id)
                       (assoc :comments/thingroot answer-id)
                       (util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                       (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [grade-e comments-e])  ; transaction is a list of entity
      ]
    (newline)
    (prn " create grade entity " grade-e " comments " comments-e)
    (prn "create grade trans for both answer and comments " trans)
    grade-e))
