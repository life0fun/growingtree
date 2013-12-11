;; datomic data accessor
(ns growingtree-server.datomic.util
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
  (:require [datomic.api :as d]))


; for enum value, :parent/status, the value is keyword :parent.status/active
; (namespace :parent.status/active) = "parent.status"
; (name :parent.status/active) = "active"
; (keyword (str entity-name "." attr "/" enum-str))
; :type :course.type/math, 


;
; datomic #inst type is java Date class, not DateTime.
;  (.toDate (clj-time.format/parse (clj-time.format/formatters :date-time) "2012-09-11T11:51:26.00Z"))
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

(defn entity-values [entity ks]
  (reduce #(conj %1 (%2 entity)) [] ks))


(defn entity-values-nonil [entity ks] 
  (reduce #(if-let [v (%2 entity)] (conj %1 v) %1) [] ks))


; extract entity values, convert hash set #{} to vector
(defn entity-values [entity ks]
  "reduce to a list of value while convert hash set to vector"
  (reduce (fn [tot curk]
            (let [curv (curk entity)]
              (if (= clojure.lang.PersistentHashSet (type curv))
                (conj tot (vec curv))
                (conj tot curv))))
          []
          ks))


; convert entity attr values to value map
(defn entity-value-map
  "convert entity attr values to value map based on entity key attr map"
  [entity entity-key-attr-map]
  (let [val-keys (vals entity-key-attr-map)
        attr-vals (entity-values entity val-keys)]
    (zipmap (keys entity-key-attr-map)
            attr-vals)))



; convert a value map to entity attr value
(defn entity-attr-value
  "convert entity value map to attr value"
  [valmap entity-key-attr-map]
  (let [entity-attr (-> valmap   ; rename keys from val map to entity attr
                        (set/rename-keys entity-key-attr-map)
                        (select-keys (val entity-key-attr-map)))]
    entity-attr))