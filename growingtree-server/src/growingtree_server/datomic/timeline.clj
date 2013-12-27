;; datomic data accessor
(ns growingtree-server.datomic.timeline
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
; entity-id can be used at both side of the datom, e.g., give a parent entity id,
;   (d/q '[:find ?e :in $ ?attr :where [17592186045703 ?attr ?e] [...] ] db :parent/child)
;   (d/q '[:find ?e :in $ ?attr :where [?e ?attr 17592186045703] [...] ] db :child/parent)
; query :where takes a vardic list, not a list of list.
;

; Everything is entity and querable in datomic, including transaction and schema.
;
; Given any datom, there are three time-related pieces of data you can request: 
;   the transaction entity tx that created the datom
;   the relative time, t of the transaction
;   the clock time :db/txInstant of the transaction

; The transaction *entity* is available as a 4th optional arg of any data pattern. 
;   :where [?e ?attr ?v ?tx ?op]] 
; given a transction id, d/tx->t, tx to time, ret relative time when transaction happened.
;   (d/tx->t txid)
; for wall time,  :db/txInstant property of the transaction entity:
;   (d/entity (d/db conn) txid) :db/txInstant)
;
; tx entity, relative time t = (d/tx->t tx), and wall time, (:db/txInstant (d/entity tx))

; Time travel, d/as-of take a tx id, and show the snapshot of 
;   (def older-db (d/as-of db (dec txid)))
;

; history query with (d/history db)
; 

;first, a list of ref attributes that ref to a person entity
(def ref-attrs-person
  [;:family/parent :family/child 
   :follow/person :follow/followee
   :schoolclass/person 
   :group/author :group/person
   :comments/author :like/person
   :activity/author :activity/person
   :course/author :lecture/author :question/author :enrollment/person :answer/author
   :assignment/author :assignment/person 
  ])

; query all the tx of an attr that person participate
(defn person-tx-at-attr
  [pid attr]
  (let [txhist (entity-tx-at-attr pid attr)]
    (prn "person tx at attr " pid attr txhist)
    txhist))


; list an entity attribute's timeline
(defn timeline
  "list an entity's attribute's timeline "
  [eid attr]
  (let [txhist (entity-attr-tx eid attr)]
    (doseq [t txhist]
      (show-entity-by-id (first t))
      (show-entity-by-id (second t)))))


(defn attr-timeline
  "find timeline of one attr for a person"
  [author-id author attr]
  (let [timelines (->> (entity-tx-at-attr author-id attr)
                       (map #(util/tx-timeline %))
                       (map #(assoc-in % [:timeline/author] author))
                  )

       ]
    (doseq [e timelines]
      (prn "attr timeline " e))
    timelines))


(defn find-timeline
  "find timeline by query path"
  [qpath details]
  (let [author (:author details)
        author-id (:db/id (find-by :person/title author))
        timelines (mapcat #(attr-timeline author-id author %) [:like/person :comments/author])
       ]
    (doseq [e timelines]
      (prn "timeline --> " e))
    timelines))


; list all transaction of a person
(defn- person-activities
  "list a person's all activities with a time range"
  [pid]
  (let [attrs [:parent/child :child/parent :homework/author :course/author
               :assignment/by :assignment/to :comments/autho
               :answer/child :comments/author :activities/child]
        all (clojure.set/union (map #(timeline pid %) attrs))]
    (prn all)))


; list a person's all transaction timeline
(defn person-timeline
  "list a person's transaction timeline"
  [eid]
  (let [txhist (person-activities eid)]
    (doseq [t txhist]
      (prn t)
      (show-entity-by-id (first t)))))




