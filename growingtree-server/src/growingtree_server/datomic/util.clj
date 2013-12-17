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


; ============================================================================
; coerce datomic entity attribute value to entity key value
; actually, we do not need this, framework already handles it.
; ============================================================================
(defn to-entity-key-vals
  "coerce "
  [entity ks]
  (reduce (fn [tot curk]
            (let [curv (curk entity)
                  curtype (type curv)]  ; get the type of entity attribute
              (prn "to entity key vals " curk curv curtype tot)
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


; ============================================================================
; coerce inserted details key value map to datomic entity attribute values.
; ============================================================================
(defn to-datomic-attr-vals
  "coerce details value map to datomic db schema attr type values"
  [details]
  (reduce (fn [tot [k v]]
            (let [[type card] (attr-type-card k)]  ; use dbconn schema query
              (cond
                ; for instant data type, convert from epoch to java.util.Date
                (= :db.type/instant type)
                  (into tot (vector [k (mills-date (* 1000 v))]))

                ; for number type, read-string to convert it.
                (= :db.type/long type)
                  (into tot (vector [k (read-string v)]))

                :else 
                  (into tot (vector [k v])))))
          {}
          details))


; ============================================================================
; get entities by qpath, formulate query rules from qpath
; qpath is [:all 0 :child] or [:parent 1 :child] or [:parent 1 :parent]
; ============================================================================
(defn get-entities-by-rule
  "get entities by qpath and rule-set, formulate query rules from qpath"
  [qpath rule-set]
  (if (= (first qpath) (last qpath))
    (let [eid (second qpath)
          e (d/entity db eid)]
      [e])
    (let [thing-id (second qpath)
          rule-name (first qpath)
          rule (list rule-name '?e '?val)
          q (conj '[:find ?e :in $ % ?val :where ] rule)
          eids (d/q q (get-db) rule-set thing-id)
          entities (map (comp get-entity first) eids)  ; touch to not lazy.
          ]
      entities)))



