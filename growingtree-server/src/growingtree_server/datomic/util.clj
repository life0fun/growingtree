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
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]
            [io.pedestal.service.log :as log]))


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
(declare leaf-thing-origin)


; ============================================================================
; convert unix mills to Date object as the value to #inst attr.
; clj-time expect unix offset in mills, moment().unix() only get seconds.
; ============================================================================
(defn mills-date [mills] (to-date (from-long mills)))


; tagsInput box delimiter is comma, we need to string split and trim
(defn tagsInputs
  "get a tagsInput input text sep by comma, ret a list of values cleaned"
  [input-text]
  (->> (clojure.string/split input-text #",")
       (map clojure.string/trim )))


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
            (let [[attr-type card] (attr-type-card k)]  ; use dbconn schema query
              (cond
                ; for instant data type, convert from epoch to java.util.Date
                (= :db.type/instant attr-type)
                  (into tot (vector [k (mills-date (* 1000 v))]))

                ; for number type, read-string to convert it, only when val type is String.
                (and (= :db.type/long attr-type) (= java.lang.String (type v)))
                  (into tot (vector [k (read-string v)]))

                :else
                  (into tot (vector [k v])))))
          {}
          details))


; ============================================================================
; get entities by qpath, formulate query rules from qpath
; qpath is [:all 0 :child] or [:parent 1 :child] or [:parent 1 :parent]
; for entity origin ref type to itself, e.g, comments can be made to comments,
; XXX Note we touch each entity to eagerly realize all attributes of entity.
; ============================================================================
; rule-set is list of [rule-head=(rule-name rule-arg*) rule-body=[where clause]]
(defn get-entities-by-rule
  "get entities by arg-val and rule-name, rule-set, for each tuple, touch to realize
   all attrs called directly for comments comments case"
  [rule-name rule-set arg-val]
  (let [;thing-id (second qpath)
        ;rule-name (first qpath)
        rule (list rule-name '?e '?val)  ; rule-head specify which rule-body to pick
        q (conj '[:find ?e :in $ % ?val :where ] rule)
        eids (d/q q (get-db) rule-set arg-val)  ; normally, arg-val is thing-id
        ; touch entity to realize/materialize all attributes.
        entities (map (comp get-entity first) eids)
       ]
    entities))


; this is the query processing, transform to query plan with some specialities.
; Leaf thing, assignment, answer, only have :origin ref back to things they pointed to.
; for leaf thing origin query, e.g, question of assignment, or assignment of answer,
(defn get-qpath-entities
  "ret a list of entities by qpath and rule-set, formulate query rules from qpath"
  [qpath rule-set]
  (let [qpath (take-last 3 qpath)  ; [:course 1 :comments 2 :comments]
        ;[:question 1 :assignment] [:course 1 :comments 2 :comments]
        [thing-type eid attr] qpath  ; qpath is thing thing-id attr
        e (get-entity eid)   ; we have thing-id, get thing entity
        attr-val (leaf-thing-origin e thing-type attr)
       ]
    (cond
      ; for comments of comments, query directly. (:comments 1 :comments)
      (and (= thing-type :comments) (= attr :comments))
        (get-entities-by-rule thing-type rule-set eid)

      ; head thing [:course 1 :course], however, comments can ref to comments.
      (= thing-type attr) [e]

      ; for leaf things, they have :origin outbound ref to thing they attached to.
      ; to find attr of leaf thing, it's either attr by name, or its :origin ref.
      (and (seq attr-val)  ;nil pun seq
           (= attr (dbconn/entity-keyword (first attr-val)))) ; [:answer 1 :assignment]
        (map (comp get-entity :db/id) attr-val)

      ; entity does not have attr, attr is inbound to entity from target [:course 1 :lectures]
      :else
        (get-entities-by-rule thing-type rule-set eid))))


; find an attr of a thing, either find the attr by its name directly. If thing does not have
; attr, try to find its origin ref, as attr could be repr-ed by origin.
(defn leaf-thing-origin
  "ret a vector of entities of thing's attr, or the entity refred by origin
   origin :ref can be :one or :many, need to set? check"
  [e thing-type attr]
  (let [e-attr (keyword (str (name thing-type) "/" (name attr)))
        e-attr-val (e-attr e)
        e-origin (keyword (str (name thing-type) "/" (name :origin)))
        e-origin-val (e-origin e)
        origin-val-type (set? e-origin)
       ]
    (prn "leaf-thing-origin" thing-type e-attr e-attr-val " origin " e-origin-val)
    (if e-attr-val
      (vector e-attr-val)  ; ret a list of matching entities
      ; origin :ref can be :one or :many, always ret a list.
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
; add :navpath for each entity, so it knows who is its parent in the display tree
; the thing-map must be a map after select-key schema. Raw datomic datom entity not working!!!
; this must be the last to execute as it added non-namespaced attr to thing.
; ============================================================================
(defn add-navpath
  [thing-map qpath]
  (let [thing-id (:db/id thing-map)  ; just append thing-id to the end of navpath
        thing-type (dbconn/entity-keyword thing-map)
        navpath (vec (concat qpath [thing-id]))
        ;navpath (vec (concat (butlast qpath) [thing-type thing-id]))
        nthing (assoc-in thing-map [:navpath] navpath)
       ]
    nthing))


; ============================================================================
; add title to 
; :course/author #{{:db/id 17592186045419}}
; ============================================================================
(defn get-author-name
  [attr entity]
  (let [author-ids (attr entity)
        author-titles (map #(dbconn/get-entity (:db/id %)) author-ids)
       ]
    (assoc entity attr (set author-titles))))

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
    (prn "add upvote attr " thing-id " count " upvotes " entity " upvote-attr)
    ;(assoc-in entity [upvote-attr] (if (zero? upvotes) (rand-int 100) upvotes))
    (assoc-in entity [upvote-attr] upvotes)
    ))


; ============================================================================
; get no of comments for certain entity, and add it as upvote attr to the entity
; ============================================================================
(defn numcomments
  [thing-id]
  (let [origin (->> (dbconn/find-entities :comments/origin thing-id)
                    (map first))
        thingroot (->> (dbconn/find-entities :comments/thingroot thing-id)
                        (map first))
        numcomments (count (distinct (concat origin thingroot)))
       ]
    ;(prn "num comments " origin thingroot)
    numcomments))

; assoc numcomments val to each entity so we can show upvotes for each entity
(defn add-numcomments-attr
  [entity]
  (let [thing-id (:db/id entity)
        numcomments (numcomments thing-id)
        thing-type (entity-keyword entity)
        numcomments-attr (keyword (str (name thing-type) "/" "numcomments"))]
    (prn "add numcomments " thing-id " count " numcomments " entity " numcomments-attr)
    (assoc-in entity [numcomments-attr] numcomments)
    ))

; ============================================================================
; get tx timestamp, #inst "2014-01-08T21:07:24.366-00:00"
; ============================================================================
(defn get-entity-attr-tx
  [entity]
  (let [eid (:db/id entity)
        [txid eid v op] (first (dbconn/entity-attr-tx eid :comments/title)) ; latest on top
        txtm (:db/txInstant (get-entity txid))]
    (prn "get-entity-attr-tx " eid " " txtm)
    (assoc-in entity [:comments/txtime] txtm)))


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
                 }
       ]
    (prn "tx timeline entity " (entity-keyword entity)  timeline)
    timeline))
