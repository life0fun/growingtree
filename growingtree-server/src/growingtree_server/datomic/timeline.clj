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
(def person-inbound-attrs
  [;:family/parent :family/child 
   :follow/person :follow/followee
   :schoolclass/person 
   :group/author :group/person
   :comments/author :like/person
   :activity/author :activity/person
   :course/author :lecture/author :question/author 
   :enrollment/person :answer/author
   :assignment/author :assignment/person 
  ])


(def fulltext-attrs
  [
   :person/title :person/lname :person/email :person/address
   :group/title 
   :comments/title :like/title
   :activity/content :activity/tag
   :location/title :location/address
   :course/title :course/content :course/reference
   :lecture/title :lecture/content :lecture/reference
   :question/title :question/content
   :assignment/title 
   :enrollment/title :enrollment/content 
   :answer/title :answer/content
  ])


(defn author-inbound-tx
  "find timeline of one attr for a person"
  [author-id author attr]
  (let [;txhist (entity-inbound-tx author-id attr)
        txhist (->> (entity-inbound-tx author-id attr)
                    (map #(util/tx-timeline %))
                    (map #(assoc-in % [:timeline/author] author))
                )

       ]
    (doseq [e txhist]
      (prn "attr timeline " e))
    txhist))

; for now, find all inbound tx for current user
(defn find-timeline
  "find timeline of an author"
  [qpath details]
  (let [author (:author details)
        author-id (:db/id (find-by :person/title author))
        timelines (->> (mapcat #(author-inbound-tx author-id author %) 
                               person-inbound-attrs)
                       (sort-by :timeline/txtime))
       ]
    (doseq [e timelines]
      (prn "timeline --> " e))
    timelines))



; list an entity attribute's tx history
(defn entity-attr-timeline
  "list an entity's attribute's tx history "
  [eid attr]
  (let [txhist (entity-attr-tx eid attr)]
    (doseq [e txhist]
      (prn "timeline --> " e))))


;;===========================================================================
; full text search for fulltext attr contains the keyword
;;===========================================================================
(defn search-result
  "convert search result [eid key text] to :search entity"
  [[eid searchkey text :as result]]
  (let [entity (get-entity eid)
        result-map {:db/id (:db/id entity)
                    :search/origin entity
                    :search/type (name (entity-keyword entity))
                    :search/text text
                    :search/searchkey searchkey
                    :navpath [:all 0 :search (:db/id entity)]
                   }
       ]
    (prn "search result entity " result-map)
    result-map))


(defn search-fulltext
  "search a fulltext attr with the keyword"
  [qpath details]
  (let [searchkey (:searchkey details)
        entities (->> (mapcat #(fulltext-attr % searchkey) 
                              fulltext-attrs)
                      (map #(search-result %)))
       ]
    (doseq [e entities]
      (prn "fulltext --> " e))
    entities))



