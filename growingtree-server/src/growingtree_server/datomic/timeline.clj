;; datomic data accessor
(ns growingtree-server.datomic.timeline
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbdata :as dbdata])
  (:import [java.io FileReader]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis])    ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]]))


; http://blog.datomic.com/2013/05/a-whirlwind-tour-of-datomic-query_16.html
;
; time travel as transaction is also an entity.
; given an atom, there are 3 time-related pieces
;   1. the transaction entity that created the datom
;   2. the relative time, t, (d/tx->t txid)
;   3. the clock time, :db/txInstant of the transaction
; the optional 4th args is ?tx, which give you back the transaction entity for the datom.
;
; transaction entity has [txid #inst "2013-10-"], attached as timestamp to each attr change.
; can not reverse lookup of what entities this transaction involves.
;
; to find the timestamp of an attribute value, find the transaction that create it.
; (def txid (->> (d/q '[:find ?tx :in $ ?e :where [?e :parent/child _ ?tx]] db id) ffirst))
;
; Given a tx id, the d/tx->t fn ret relative time to be used as happened before.
; Getting a Tx instant, (-> (d/entity (d/db conn) txid) :db/txInstant)
;   => #inst "2013-02-20T16:27:11.788-00:00"
; (d/as-of db (txid) to going back in Time.
; (def older-db (d/as-of db (dec txid)))
; (:parent/child (d/entity older-db id))
;
; timeline query across all time
;   (def hist (d/history db))
;   (->> (d/q '[:find ?tx ?v ?op :in $ ?e ?attr :where [?e ?attr ?v ?tx ?op]] 
;               hist 17592186045703 :parent/fname) (sort-by first))
;


; list all transaction
(defn all-transactions
  "list all transactions "
  [db since]
  (let [alltxs (reverse (sort 
              (d/q '[:find ?e ?when 
                     :where [?e :db/txInstant ?when]] db)))]
    (prn alltxs)
    alltxs))


; find the timeline of an attribute of 
(defn timeline
  "list a timeline of an attribute of the entity"
  [db eid attr]
  (let [hist (d/history db)
        txhist (->> (d/q '[:find ?tx ?v ?op 
                           :in $ ?e ?attr
                           :where [?e ?attr ?v ?tx ?op]]
                      hist 
                      eid 
                      attr)
                  (sort-by first))  ; sort by tx time
        ]
    (prn txhist)
    txhist))


; list all transaction of a person
(defn person-timeline
  "list a person's all activities with a time range"
  [pid]
  (let [attrs [:parent/child :child/parent :homework/author :course/author
               :assignment/by :assignment/to :comments/autho
               :answer/child :comments/author :activities/child]
        all (clojure.set/union (map #(timeline pid %) attrs))]
    (prn all)))
