;; datomic data accessor
(ns growingtree-server.datomic.util
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Date Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json]
            [datomic.api :as d])
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


; ============================================================================
; convert unix mills to Date object as the value to #inst attr.
; clj-time expect unix offset in mills, moment().unix() only get seconds.
; ============================================================================
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


; ============================================================================
; coerce entity attr value
; ============================================================================
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


; Deprecated, framework already convert hashset to vector during json.
(defn entity-value
  "convert tuple hash set to vector"
  [entity]
  (reduce (fn [tot [k v]]
            (let [curtype (type v)]
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


; ============================================================================
; get entities by qpath, formulate query rules from qpath
; qpath is [:all 0 :children] or [:parent 1 :children] or [:parents 1 :parents]
; ============================================================================
(defn get-entities-by-rule
  "get entities by qpath and rule-set, formulate query rules from qpath"
  [qpath rule-set]
  (if (= (first qpath) (last qpath))
    (let [eid (second qpath)
          e (d/entity db eid)]
      [e])
    (let [pid (second qpath)
          rule-name (first qpath)  ; parent thing type is rule name
          parent-rule (list rule-name '?e '?val)
          q (conj '[:find ?e :in $ % ?val :where ] parent-rule)
          eids (d/q q (get-db) rule-set pid)
          entities (map (comp get-entity first) eids)  ; touch to not lazy.
          ]
      entities)))



