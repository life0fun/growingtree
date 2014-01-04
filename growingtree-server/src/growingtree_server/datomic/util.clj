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


; forward declarations
(declare wildcard-origin-ref-entity)


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
; XXX need to make sure value is already long, before doing read-string
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

                ; for number type, read-string to convert it, only when val type is String.
                (and (= :db.type/long type) (= java.lang.String (type v))) 
                  (into tot (vector [k (read-string v)]))

                :else 
                  (into tot (vector [k v])))))
          {}
          details))


; ============================================================================
; get entities by qpath, formulate query rules from qpath
; qpath is [:all 0 :child] or [:parent 1 :child] or [:parent 1 :parent]
; for entity origin ref type to itself, e.g, comments can be made to comments,
; use this fn to query.
; ============================================================================
(defn get-entities-by-rule-query
  "get entities by qpath and rule-set, called directly for comments comments case"
  [qpath rule-set]
  (prn "get entities by rule query " qpath)
  (let [thing-id (second qpath)
        rule-name (first qpath)
        rule (list rule-name '?e '?val)
        q (conj '[:find ?e :in $ % ?val :where ] rule)
        eids (d/q q (get-db) rule-set thing-id)
        entities (map (comp get-entity first) eids)  ; touch to not lazy.
       ]
    entities))


; in case like assignment can be created by course or lecture, in assignment schema,
; it only has :origin ref back to either course or lecture. 
; if query course by assignment, or query lecture by assignment, we need to not only
; check direct attr name, but also origin ref for those cases.
; add origin type to diff thing created from different origin type, maybe ?
(defn get-entities-by-rule
  "ret a list of entities by qpath and rule-set, formulate query rules from qpath"
  [qpath rule-set]
  (prn "get entities by rule " qpath)
  (let [qpath (take-last 3 qpath)  ; only take the last 3 segment in query path
        ;[:question 17592186045429 :assignment]
        eid (second qpath)
        src (first qpath)
        dst (last qpath)
        e (get-entity eid)
        origin-e (wildcard-origin-ref-entity e src dst)]
    (prn "orgin entity vec " origin-e)
    (when (seq origin-e)
      (prn "entity origin namespace " (entity-keyword (first origin-e)) " dst " dst " origin " (first origin-e)))
    (cond
      ; head thing [:course 1 :course], however, comments can ref to comments.
      (= src dst) [e]

      ; entity has a ref named origin, which is the wildcard ref to parent thing
      ; make sure that refed entity is the dst of qpath, then we can ret entity directly.
      (and (seq origin-e)  ;nil punning when seq
           (= dst (entity-keyword (first origin-e))))  ; origin really point to dst
        (map (comp get-entity :db/id) origin-e)

      ; perform the real query
      :else (get-entities-by-rule-query qpath rule-set))))


; either entity has the attr directly, or entity has :origin reference back
; to the entity we want to find. 
; we 
(defn wildcard-origin-ref-entity
  "ret a vector of entities of the required attr, or the origin ref entity
   as some origin :ref :one, some origin :ref :many, need to set? check"
  [e e-ns attr]
  (let [e-attr (keyword (str (name e-ns) "/" (name attr)))
        e-attr-val (e-attr e)
        e-origin (keyword (str (name e-ns) "/" (name :origin)))
        e-origin-val (e-origin e)
        origin-val-type (set? e-origin)
       ]
    (prn "wildcard origin ref entity " e-ns e-attr e-attr-val " origin ref " e-origin e-origin-val)
    (if e-attr-val
      (vector e-attr-val)  ; ret a list of matching entities
      ; some origin :ref :one, some are :ref :many, always ret a list.
      (if (and e-origin-val (not (set? e-origin-val)))
        (vector e-origin-val)
        e-origin-val)
      )))


; ============================================================================
; (json-response result) convert entity to json string, including outbound refs.
; However, the :db/id of outbound refs got dropped during json stringify.
; for those ref attr where we need its :db/id, replace refed entity with :db/id
; ============================================================================
(defn ref->dbid
  [entity ref-attr]
  (update-in entity [ref-attr] (fn [refed-e] (:db/id refed-e))))


; ============================================================================
; add navpath for each entity, so it knows who is its parent in the display tree
; this must be the last to execute as it added non-namespaced attr to thing.
; ============================================================================
(defn add-navpath
  [entity navpath]
  (let [thing-id (:db/id entity)  ; just append thing-id to the end of navpath
        navpath (vec (concat navpath [thing-id]))
       ]
    (assoc-in entity [:navpath] navpath)))

; ============================================================================
; get no of likes for certain entity, and add it as upvote attr to the entity
; ============================================================================
(defn upvotes
  [thing-id]
  (let [like-entity (dbconn/find-by :like/origin thing-id)
        likes (count (:like/person like-entity))
       ]
    likes))

; assoc upvote val to each entity so we can show upvotes for each entity
(defn add-upvote-attr
  [entity]
  (let [thing-id (:db/id entity)
        upvotes (upvotes thing-id)
        thing-type (entity-keyword entity)
        upvote-attr (keyword (str (name thing-type) "/" "upvote"))]
    (prn "upvotes for thing " thing-id " count " upvotes " entity " upvote-attr)
    (assoc-in entity [upvote-attr] (if (zero? upvotes) (rand-int 100) upvotes))))


; ============================================================================
; for timeline query, we got [?tx ?e ?v ?op]
; resolve tx entity to date time and entity to its value
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
                  :navpath [:all 0 :timeline (:db/id entity)]  ; [ :all 0 :timeline 1 ]
                 }
       ]
    (prn "tx timeline entity " (entity-keyword entity)  timeline)
    timeline))
