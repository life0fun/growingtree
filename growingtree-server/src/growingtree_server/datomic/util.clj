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
            [io.pedestal.service.log :as log]
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
(declare next-thing-by-origin)


; distinct-by a collect by the result of apply f to the tuple in the collection.
; step fn to apply fn to head of coll step-by-step.
; step hd with cons hd to the ret of its.
(defn distinct-by
  [f coll]
  (let [step 
          (fn step [[hd & xs] seen]
            (if hd
              (let [result (f hd)]
                (if (contains? seen result)
                  ; skip current hd, conti step rest will ret a sub lazy-seq, 
                  ; will be cons to prev lazy-seq in prev iteration.
                  (step xs seen)  
                  (lazy-seq (cons hd (step xs (conj seen result))))))
              (empty coll)))

        step1 (fn step1 [xs seen]
                (lazy-seq
                  ((fn [[x :as xs] seen]
                    (when-let [s (seq xs)]
                      (let [fx (f x)]
                        (if (contains? seen fx) 
                          (recur (rest s) seen)
                          (cons x (step (rest s) (conj seen fx)))))))
                 xs seen)))]
    (step coll #{}))
  )

(defn distinct-by-loop
  [f coll]
  (loop [[hd & xs] coll seen #{} result (empty coll)]
    (if hd
      (let [fresult (f hd)]
        (if (contains? seen fresult)
          (recur xs seen result)
          (recur xs (conj seen fresult) (conj result hd))))
      result)))

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
; convert epoch to datetime #inst. string to long.
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
; thing-type is rule name.
; qpath is [:all 0 :child] or [:parent 1 :child] or [:parent 1 :parent]
; when rule-name is :all, arg-val, which is eid, does not matter.
; for entity origin ref type to itself, e.g, comments can be made to comments,
; XXX Note we get-entity touch each entity to eagerly realize all attributes of entity.
; ============================================================================
; rule-set is list of [rule-head=(rule-name rule-arg*) rule-body=[where clause]]
(defn get-entities-by-rule
  "get entities by arg-val and rule-name, rule-set, for each tuple, touch to realize
   all attrs called directly for comments comments case"
  [rule rule-set arg-vals]  ; when rule is :all, arg-vals no effect.
  ; (log/info "get-entities-by-rule " rule " " arg-vals)
  (let [rule-args (nnext rule)
        q (-> (into '[:find ?e :in $ %] rule-args)  ; we need to conj rule-args
              (conj :where rule))
        ; arg-vals is a list of arg values.
        eids (apply d/q q (get-db) rule-set arg-vals)  ; normally, arg-vals is thing-id
        ; touch entity to realize/materialize all attributes.
        entities (map (comp get-entity first) eids)
       ]
    ; (log/info "get-entities-by-rule " entities)
    entities))


; called from each find-thing, qpath = [:all 0 :assignment], [:question 1 :assignment]
; Leaf thing, assignment, answer, only have :origin ref back to things they pointed to.
; for leaf thing origin query, e.g, question of assignment, or assignment of answer,
(defn get-qpath-entities
  "ret a list of entities by qpath and rule-set, formulate query rules from qpath"
  [qpath rule-set]
  (let [[thing-type eid nxt-thing-type] (take-last 3 qpath)  ; [:course 1 :comments 2 :comments]
        e (get-entity eid)   ; we have thing-id, get thing entity
        nxt-thing-val (next-thing-by-origin e thing-type nxt-thing-type)
        rule [thing-type '?e '?val]  ; rule is rule-name=thing-type and rule-args
        ; rule (list thing-type '?e '?val)  ; rule is rule-name=thing-type and rule-args
       ]
    (cond
      ; for comments of comments, query directly. (:comments 1 :comments)
      (and (= thing-type :comments) (= nxt-thing-type :comments))
        (get-entities-by-rule rule rule-set [eid]) ; thing-type is rule name.

      ; head thing [:course 1 :course], however, comments can ref to comments.
      (= thing-type nxt-thing-type) [e]

      ; for leaf things, they have :origin outbound ref to thing they attached to.
      ; to find nxt-thing-type of leaf thing, it's either nxt-thing-type by name, or its :origin ref.
      (and (seq nxt-thing-val)  ;nil pun seq
           (= nxt-thing-type (dbconn/entity-keyword (first nxt-thing-val)))) ; [:answer 1 :assignment]
        (map (comp get-entity :db/id) nxt-thing-val)

      ; entity does not have nxt-thing-type, nxt-thing-type is inbound to entity from target [:course 1 :lectures]
      ; [:child 1 :assignment], :child is the rule-name of assignment rule-set for :assignment/person = :child
      :else
        (get-entities-by-rule rule rule-set [eid]))))  ; thing-type is rule name.


; find entity's thing-type/nxt-thing attr. If entity is leaf thing, find its thing-type/origin attr.
; e.g, assignment/question is actually reprented by assignment/origin.
; ret a vector of entities as the value is :ref :many.
(defn next-thing-by-origin
  "ret a vector of entities of thing's attr, or the entity refred by origin
   origin :ref can be :one or :many, need to set? check"
  [e thing-type nxt-thing-type]
  (let [nxt-thing-val (->> (keyword (str (name thing-type) "/" (name nxt-thing-type)))
                           (get e))
        origin-thing-val (->> (keyword (str (name thing-type) "/" (name :origin)))
                              (get e))
       ]
    (log/info "next-thing-by-origin" thing-type nxt-thing-val " origin " origin-thing-val)
    (if nxt-thing-val
      (vector nxt-thing-val)  ; ret a list of matching entities
      ; origin :ref can be :one or :many, always ret a list.
      (if (and origin-thing-val (not (set? origin-thing-val)))
        (vector origin-thing-val)
        origin-thing-val)
      )))

; ============================================================================
; get the entitry for ref-ed attribute. 
; we touched the entity to realize all its attrs.
; assoc touched entity to the passed in entity.
; ============================================================================
(defn assoc-refed-entity
  [ref-attr entity]
  ; (log/info "assoc-ref-entity " ref-attr entity)
  (let [ref-id (get-in entity [ref-attr :db/id])
        ref-e (dbconn/get-entity ref-id)]
    (assoc entity ref-attr ref-e)))


(defn get-entities
  [attr attr-val]
  (let [entities (dbconn/find-entities attr attr-val)]
    (log/info "util get-entities " entities)
    entities))


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
; get author entity, if author ref entity is not set, convert to set.
; :course/author #{{:db/id 17592186045419}}
; ============================================================================
(defn get-author-entity
  [attr entity]
  (let [author-ids (as-> (attr entity) aid 
                      (if-not (set? aid) 
                        (conj #{} aid)
                        aid))
        author-entities (map #(dbconn/get-entity (:db/id %)) author-ids)
       ]
    (log/info "get author name " author-ids author-entities)
    (assoc entity attr (set author-entities))))

(defn assoc-refed-many-entities
  [attr entity]
  (let [refed-ids (as-> (attr entity) eids 
                      (if-not (set? eids) 
                        (conj #{} eids)
                        eids)
                      (remove nil? eids) ; remove nil steps.
                    )

        refed-entities (map #(dbconn/get-entity (:db/id %)) refed-ids)
       ]
    (log/info "get refed many entities " refed-ids refed-entities)
    (assoc entity attr (set refed-entities))))

; get :thing-type/person entity in each thing-type
; :assign/person {:db/id 12345}
(defn get-person-entity
  [attr entity]
  (let [person-id (attr entity)  ; entity always has :db/id{:db/id 1234}
        person-entity (dbconn/get-entity (:db/id person-id))]
    (log/info "get person name " person-id person-entity)
    (assoc entity attr person-entity)
  ))


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
    (log/info "add upvote attr " thing-id " count " upvotes " entity " upvote-attr)
    ;(assoc-in entity [upvote-attr] (if (zero? upvotes) (rand-int 100) upvotes))
    (assoc-in entity [upvote-attr] upvotes)
    ))


; ============================================================================
; get no of comments for certain entity, and add it as upvote attr to the entity
; ============================================================================
(defn numcomments
  [thing-id]
  (let [origin (->> (dbconn/find-eids :comments/origin thing-id)
                    (map first))
        thingroot (->> (dbconn/find-eids :comments/thingroot thing-id)
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
    (log/info "get-entity-attr-tx " eid " transaction time" txtm)
    (assoc-in entity [:comments/txtime] txtm)))

