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


; A user's timeline means find all entities created by a user, or find entity attributes
; updated by the user.
; first, list all attrs that ref to person.
; for each attr, find all entities that has this attribute
; for each entity, find the transaction that set the value to cur user
; Note that a user can create a group, and then join a group.
; you get different transaction, but both transactions origin is the same group entity,
; just different transaction time.

; a list of attributes that ref to a person, we need to find all entities that have
; attributes that ref to a person, then filter those who person attr is user.
(def person-attrs
  [;:family/parent :family/child
   :follow/person :follow/followee
   :schoolclass/person
   :group/author ;:group/person
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


(defn attr-refto-user-tx
  "find transaction entity of all entities that refto user"
  [author-id author attr]
  (let [;txhist (entity-inbound-tx author-id attr)
        txhist (->> (dbconn/attr-val-tx attr author-id)  ; find all trans entity set attr to val
                    (map #(util/tx-timeline %))   ; format to :timeline/attr
                    (map #(assoc-in % [:timeline/author] author))
                )

       ]
    (doseq [e txhist]
      (prn attr " " author-id " txhist " e))
    txhist))


; find all entities that has author/person attributes with value to user id.
; [:parent 17592186045419 :timeline]
(defn find-timeline
  "find timeline of a user"
  [qpath details]
  (let [author (:author details)
        author-id (:db/id (find-by :person/title author))
        user-id (second qpath)
        user (:person/title (dbconn/get-entity user-id))
        timelines (->> (mapcat #(attr-refto-user-tx user-id user %)
                               person-attrs)
                       (map #(util/add-navpath % qpath) )
                       (sort-by :timeline/txtime)
                       (reverse ))
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



