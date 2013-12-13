;; datomic data accessor
(ns growingtree-server.datomic.util
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Date Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long to-date from-date]])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]))


; for enum value, :parent/status, the value is keyword :parent.status/active
; (namespace :parent.status/active) = "parent.status"
; (name :parent.status/active) = "active"
; (keyword (str entity-name "." attr "/" enum-str))
; :type :course.type/math, 


;
; datomic #inst type is java Date class, not DateTime.
; 
;  (.toDate (clj-time.format/parse (clj-time.format/formatters :date-time) "2012-09-11T11:51:26.00Z"))
;  (from-long 893462400000)  -> Joda DateTime object.
;  (to-date (from-long (to-long (now))))
;
;  (read-string "#inst \"2012-09-11T11:51:26.00Z\"") 
;   #inst "2012-09-11T11:51:26.000-00:00" 
;  (read-string (pr-str '#inst "2012-09-11T11:51:26.00Z")) 
;   #inst "2012-09-11T11:51:26.000-00:00" 
;
;  (read-string (str "#inst " (pr-str "2012-09-11T11:51:26.00Z")))
;

; query for transaction timestamp when entity inserted.
; (q '[:find ?time :in $ [?eid] :where [?event :event/id ?eid ?tx][?tx :db/txInstant ?time]] (db conn) [entity-id])
;
;; util fns for attr convertion between map and entity attr.


; convert unix mills to Date object as the value to #inst attr.
; clj-time expect unix offset in mills, moment().unix() only get seconds.
(defn mills-date [mills] (to-date (from-long mills)))

(defn attr-date
  "coerce the map entry to :instant java.util.Date"
  [k v]
  (let [[type card] (type-card k)]
    (if (= :db.type/instant type)
      [k (mills-date (* 1000 v))]
      [k v])))

; go through each map entry, if type is :instant, convert mills to date
(defn entity-date
  [entity]
  (reduce (fn [tot [k v]]
            (into tot (vector (attr-date k v))))
          {} entity))



(defn entity-value-vec
  "reduce to a list of tuple while convert hash set to vector"
  [entity ks]
  (reduce (fn [tot curk]
            (let [curv (curk entity)
                  curtype (type curv)]
              (prn "entity value vec " curk curv curtype tot)
              (cond
                ; hashset #{} to vector []
                (= clojure.lang.PersistentHashSet curtype)
                  (conj tot (vec curv))
                ; instant to unix epoch
                (= java.util.Date curtype) 
                  (conj tot (to-long (from-date curv))) ; conver to epoch
                ; default use value
                :else (conj tot curv))))
          []
          ks))


(defn entity-value
  "convert tuple hash set to vector"
  [entity]
  (reduce (fn [tot [k v]]
            (let [curtype (type v)]
              (prn "entity value vec " k v curtype tot)
              (cond
                ; hashset #{} to vector []
                (= clojure.lang.PersistentHashSet curtype)
                  (conj tot (vec v))
                ; instant to unix epoch
                (= java.util.Date curtype) 
                  (conj tot (to-long (from-date v))) ; conver to epoch
                ; default use value
                :else (conj tot v))))
          {}
          entity))

; convert entity attr values to value map
(defn entity-value-map
  "convert entity attr values to value map based on entity key attr map"
  [entity entity-key-attr-map]
  (let [val-keys (vals entity-key-attr-map)
        attr-vals (entity-value-vec entity val-keys)]
    (zipmap (keys entity-key-attr-map)
            attr-vals)))


; convert a value map to entity attr value
(defn entity-attr-value
  "convert entity value map to attr value"
  [valmap entity-key-attr-map]
  (let [entity-attr (-> valmap   ; rename keys from val map to entity attr
                    (set/rename-keys entity-key-attr-map)
                    (select-keys (vals entity-key-attr-map)))]
    entity-attr))



