;; datomic data accessor
(ns growingtree-server.datomic.course
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
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


(declare create-lecture)
(declare create-course-coding)


; schema attr-name value type map for parent schema and child schema
(def course-schema (assoc (list-attr :course) :db/id :db.type/id))
(def lecture-schema (assoc (list-attr :lecture) :db/id :db.type/id))
(def enrollment-schema (assoc (list-attr :enrollment) :db/id :db.type/id))


; course does not have lecture, use in-bound query from lecture to course.
(def get-course-by
  '[[(:all ?e ?val) [?e :course/title]]   ; select all 
    [(:author ?e ?val) [?e :course/author ?val]]
    [(:lecture ?e ?val) [?e :lecture/_course ?val]]
    [(:type ?e ?val) [?e :course/type ?val]]
    [(:content ?e ?val) [?e :course/content ?val]]
    [(:title ?e ?val) [?e :course/title ?val]]
  ])


; rule set for get parent by. rule name is the parent thing type.
(def get-lecture-by
  '[[(:all ?e ?val) [?e :lecture/title]]   ; select all
    [(:course ?e ?val) [?e :lecture/course ?val]]
    [(:title ?e ?val) [?e :lecture/title ?val]]
    [(:author ?e ?val) [?e :lecture/author ?val]]
    [(:type ?e ?val) [?e :lecture/type ?val]]
    [(:start ?e ?val) [?e :lecture/start ?val]]
    [(:content ?e ?val) [?e :lecture/content ?val]]
  ])


; find a course
(defn find-course
  "find course by query path"
  [qpath]
  (let [entities (util/get-entities-by-rule qpath get-course-by)
        projkeys (keys course-schema)  ; must select-keys from datum entity attributes
        courses (map #(select-keys % projkeys) entities)
       ]
    (doseq [e courses]
      (prn "course --> " e))
    courses))


; for now, all courses are created and lectured by person 
(defn create-course
  "create a course with details "
  [details]
  (let [author-id (:db/id (find-by :person/title (:author details)))
        entity (-> details
                   (select-keys (keys course-schema))
                   (assoc :course/author author-id)  ; replace input :course/author
                   (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "create course entity " author-id entity)
    (prn "submit course trans " trans)
    [entity]))



;;===============================================================
; lecture
;;===============================================================
; find a course
(defn find-lecture
  "find lecture by query path "
  [qpath]
  (let [entities (util/get-entities-by-rule qpath get-lecture-by)
        projkeys (keys lecture-schema)
        lectures (map #(select-keys % projkeys) entities)
        ]
    (doseq [e lectures]
      (prn "lecture --> " e))
    lectures))


; for now, all courses are created and lectured by person 
(defn create-lecture
  "create a lecture with details "
  [details]
  (let [author-id (:db/id (find-by :person/title (:author details)))
        course-id (:db/id (find-by :course/title (:lecture/course details)))
        entity (-> details
                   (select-keys (keys lecture-schema))
                   (assoc :lecture/author author-id)  ; replace input :lecture/author
                   (assoc :lecture/course course-id)  ; replace input :lecture/author
                   (assoc :db/id (d/tempid :db.part/user)))
        ;trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "create lecture entity " author-id course-id entity)
    ;(prn "submit lecture trans " trans)
    [entity]))


;;===============================================================
; enrollment
;;===============================================================

