;; datomic data accessor
(ns growingtree-server.datomic.timeline
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json]
            [io.pedestal.service.log :as log])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as api])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]
            [growingtree-server.datomic.util :as util]
            [growingtree-server.datomic.family :as family]
            [growingtree-server.datomic.course :as course]
            [growingtree-server.datomic.assign :as assign]
            [growingtree-server.datomic.comments :as comments]
            ))


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
; given a transction id, api/tx->t, tx to time, ret relative time when transaction happened.
;   (api/tx->t txid)
; for wall time,  :db/txInstant property of the transaction entity:
;   (api/entity (api/db conn) txid) :db/txInstant)
;
; tx entity, relative time t = (api/tx->t tx), and wall time, (:db/txInstant (api/entity tx))

; Time travel, api/as-of take a tx id, and show the snapshot of
;   (def older-db (api/as-of db (dec txid)))
;

; history query with (api/history db)


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
   :answer/title :answer/content
  ])


; ============================================================================
; for timeline query, we got [?tx ?e ?v ?op]
; resolve tx entity to date time and entity to its value
; wrap origin entity into :timeline/origin key
; ============================================================================
(defn tx-timeline
  [[txid eid v op :as txhist]]
  (let [txtm (:db/txInstant (get-entity txid) )
        entity (get-entity eid)
        timeline {:db/id (:db/id entity)
                  :timeline/type (name (entity-keyword entity))
                  :timeline/txtime txtm
                  :timeline/origin entity
                  :timeline/value v
                  :timeline/add op
                 }
       ]
    (log/info "tx timeline entity " (entity-keyword entity)  timeline)
    timeline))

; go through every person-attrs, like :course/author, :answer/author, :follow/person,
; find all transactions that update any person-attrs with value equal to author id
; 17592186045419 "rich-dad" :follow/person
(defn person-attr-tx
  "find all transaction entities that refto user"
  [author-id author author-attr]
  (log/info "person-attr-tx " author-id author author-attr)
  (let [txhist (->> (dbconn/attr-val-tx author-attr author-id)  ; find all trans entity set attr to val
                    (map #(tx-timeline %))   ; format to :timeline/attr
                    (map #(assoc-in % [:timeline/author] author))
                )

       ]
    (doseq [e txhist]
      (log/info "perons-attr-tx " author-attr " " author-id " txhist " e))
    txhist))


; ============================================================================
; find all entities that has author/person attributes with value to the user.
; qpath [:child 17592186045427 :timeline]
; nav-path {:body [:filter-things [:child 17592186045427 :timeline]], :data {:pid 17592186045427}}}
; when clicking from thing-view [:parent 17592186045419 :timeline]
; XXX list all transactions for all users.
(defn find-timeline
  "find timeline of a user with qpath has user id"
  [qpath nav-path]
  (log/info "find-timeline " qpath " nav-path " nav-path)
  (let [user-id (get-in nav-path [:data :pid])
        user (:person/title (dbconn/get-entity user-id))
        timelines (->> (mapcat #(person-attr-tx user-id user %)
                               person-attrs)
                       (map #(util/add-navpath % qpath) )
                       (sort-by :timeline/txtime)
                       (reverse ))
       ]
    (doseq [e timelines]
      (log/info "timeline --> " e))
    timelines))


; list an entity attribute's tx history
(defn entity-attr-timeline
  "list an entity's attribute's tx history "
  [eid attr]
  (let [txhist (entity-attr-tx eid attr)]
    (doseq [e txhist]
      (log/info "timeline --> " e))))


;;===========================================================================
; for each searched out entity, need get all nested props.
;;===========================================================================
(defn populate-entity-outbound-ref
  [entity]
  (let [entity-type (entity-keyword entity)]
    (case entity-type
      :person (family/populate-person-refed-entity entity)
      :group (family/populate-group-refed-entity entity)
      :activity (family/populate-activity-refed-entity entity)
      :course (course/populate-course-refed-entity entity)
      :lecture (course/populate-lecture-refed-entity entity)
      :enrollment (course/get-course-enrollment-person entity)
      :question (assign/populate-question-refed-entity entity)
      :assignment (assign/populate-assignment-refed-entity entity)
      :answer (assign/populate-answer-refed-entity entity)
      :comments (comments/populate-comments-refed-entity entity)
      :like (comments/populate-like-refed-entity entity))
  ))

(defn search-result
  "convert search result [eid key text] to :search entity"
  [[eid searchkey text :as result]]
  (let [entity (get-entity eid)
        entity-type (entity-keyword entity)
        result-map {:db/id (:db/id entity)
                    :search/origin (populate-entity-outbound-ref entity)
                    :search/type (name entity-type)
                    :search/text text
                    :search/searchkey searchkey
                    :navpath [:all 0 :search (:db/id entity)]
                   }
       ]
    (log/info "search result entity " result-map)
    result-map))

;;===========================================================================
; full text search for fulltext attr contains the keyword
; qpath [:all-things 0 "math"], data: {:body [:search-things []] :data {::thing-type :searchkey}}
;;===========================================================================
(defn search-fulltext
  "search a fulltext attr with the keyword"
  [qpath filter-data]
  (log/info "search-fulltext " qpath " filter-data " filter-data)
  (let [searchkey (last qpath)
        ; map search fulltext attr to all fulltext attrs
        entities (->> (mapcat #(search-fulltext-attr % searchkey) fulltext-attrs)
                      (util/distinct-by first)
                      (map #(search-result %)))
       ]
    (doseq [e entities]
      (log/info "search fulltext --> " e))
    entities))



