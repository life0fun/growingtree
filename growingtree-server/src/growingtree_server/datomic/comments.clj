;; datomic data accessor
(ns growingtree-server.datomic.comments
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json]
            [io.pedestal.service.log :as log])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]
            [growingtree-server.datomic.util :as util]))

;
; http://blog.datomic.com/2013/05/a-whirlwind-tour-of-datomic-query_16.html
; query API results as a list of fact tuples. Fact tuple is a list of entity Ids.
;   [ [tuple1...] [tuple2...] ]
;
; the intermediate value for joining are :db/id, can be in both [entity attr val] pos
; to join, the attribute col in tuple is the join col, and val.
;
; find ?e ret entity id, (d/touch(d/entity db) to convert to lazy entity.
;   (d/touch (d/entity db (ffirst (d/q '[:find ?e :where [?e :parent/fname]] db)))
;
;
; query stmt is a list, or a map, with :find :in :where seps query args.
;   [?a …]  collection   [ [?a ?b ] ]  relation
;   [(predicate ...)] [(function ...) bindings]
;
; a named rule is a list of clause [(community-type ?c ?t) [?c :community/type ?t]])]
; a set of rules is a list of rules. [[[rule1 ?c] [_ :x ?c]] [[rule2 ?d] [_ :x ?d]]]
; rules with the same name defined multiple times in rule set make rule OR.
;   [[northern ?c] (region ?c :region/ne)]
;   [[northern ?c] (region ?c :region/n)]
; Within the same rule, multiple tuples are AND.
;
;
; all eids must be number, use read-string to convert from command line.
; all the :ref :many attribute stores clojure.lang.MapEntry. use :db/id to get the id.
; knowing entity id, query with (d/entity db eid). otherwise, [:find $t :where []]
; (d/entity db eid) rets the entity. entity is LAZY. attr only availabe when touch.
; To add data to a new entity, build a transaction using :db/add implicitly
; with the map structure (or explicitly with the list structure), a temporary id,
; and the attributes and values being added.
;
; #db/id[partition-name value*] : value is an optional negative number.
; all instances of the same temp id are mapped to the same actual entity id in a given transaction,
; {:db/id entity-id attribute value attribute value ... }
; [:db/add entity-id attribute value]
; (d/transact conn [newch [:db/add pid :parent/child (:db/id newch)]]
; d/transact tx-data is a list of lists, each of which specifies a write operation
; for single write datom(map tuple), wrap with [datom-tuple]
; for a list of write datom tuple from map, use (vec ([] [])) to wrap them.
; (d/transact conn (vec (map make-attr (d/q '[:find ?e :where []))))
;
;
; In general, unique temporary ids are mapped to new entity ids.
; within the same transaction, the same tempid maps to the same real entity id.
; when one of the attribute is :db/unique :db.unique/identity, system will map to existing entity if matches or make a new.
; to add fact to existing entity, retrieve entity id the add using the entity id.
; adding entity ref, must specify an entity id(could be tempid) as the attribute's value.
; takes advantage of the fact that the same temporary id can be generated multiple times by
; specifying the same partition and negative number; and that all instances of a given temporary id
; within a transaction will resolve to a single entity id.
;
; (def e (d/entity (db conn) attr-id) gets all entity with ids
; (keys e) or (:parent/child (d/entity db 17592186045703))
; entity attr rets a map entry for all children. (:parent/child (d/entity db pid))
;
; entity-id can be used at both side of the datom, e.g., give a parent entity id,
;   (d/q '[:find ?e :in $ ?attr :where [17592186045703 ?attr ?e] [...] ] db :parent/child)
;   (d/q '[:find ?e :in $ ?attr :where [?e ?attr 17592186045703] [...] ] db :child/parent)
; query :where takes a vardic list, not a list of list.
;

; outbound query and inbound query
; using parent id, get list of children
;   (:parent/child (d/entity db 17592186045476))
;
; inbound query(who refed me) is used for query another entity that refs this entity.
; parent entity can be used to query all child entity that refs to this parent entity.
; use inbound query with convention is prefix attr name with _.
;   (:child/_parent (d/entity db 17592186045476))
; = (:parent/child (d/entity db 17592186045476))
;   (-> (d/entity db 17592186045476) :child/_parent)
; this reverse look-up might be time consuming, use explicit linking might be better.
;
; (map (fn [id] (d/touch (d/entity db (:db/id id))))
;   (-> (d/entity db 17592186045476) :child/_parent))
;
; (d/q '[:find ?e :in $ ?x :where [?e :child/parent ?x]] db (:db/id p))

(declare comments-of)
(declare populate-comments-refed-entity)
(declare populate-like-refed-entity)


; schema attr-name value type map for parent schema and child schema
(def like-schema (assoc (list-attr :like) :db/id :db.type/id))
(def comments-schema (assoc (list-attr :comments) :db/id :db.type/id))


(def get-like-by
  '[[(:all ?e ?val) [?e :like/origin]]   ; select all
    [(:origin ?e ?val) [?e :like/origin ?val]]
    [(:title ?e ?val) [?e :like/title ?val]]
    [(:url ?e ?val) [?e :like/url ?val]]

    ; can you like a person, you follow a person if you like her.
    [(:person ?e ?val) [?e :like/person ?val]]
    [(:child ?e ?val) [?e :like/person ?val]]
    [(:parent ?e ?val) [?e :like/person ?val]]

    [(:course ?e ?val) [?e :like/origin ?val]]
    [(:lecture ?e ?val) [?e :like/origin ?val]]
    [(:question ?e ?val) [?e :like/origin ?val]]
    [(:assignment ?e ?val) [?e :like/origin ?val]]
    [(:answer ?e ?val) [?e :like/origin ?val]]
    [(:group ?e ?val) [?e :like/origin ?val]]
    [(:activity ?e ?val) [?e :like/origin ?val]]
    [(:location ?e ?val) [?e :like/origin ?val]]
  ])


; rule set for get parent by. rule name is the parent thing type.
(def get-comments-by
  '[[(:all ?e ?val) [?e :comments/author]]   ; select all
    [(:author ?e ?val) [?e :comments/author ?val]]
    [(:origin ?e ?val) [?e :comments/origin ?val]]
    [(:thingroot ?e ?val) [?e :comments/thingroot ?val]]
    [(:title ?e ?val) [?e :comments/title ?val]]
    [(:url ?e ?val) [?e :comments/url ?val]]

    [(:child ?e ?val) [?e :comments/origin ?val]]
    [(:course ?e ?val) [?e :comments/origin ?val]]
    [(:lecture ?e ?val) [?e :comments/origin ?val]]
    [(:question ?e ?val) [?e :comments/origin ?val]]
    [(:assignment ?e ?val) [?e :comments/origin ?val]]
    [(:answer ?e ?val) [?e :comments/origin ?val]]
    [(:group ?e ?val) [?e :comments/origin ?val]]
    [(:activity ?e ?val) [?e :comments/origin ?val]]
    [(:location ?e ?val) [?e :comments/origin ?val]]

    ; all comments whose origin point to this comments
    [(:comments ?e ?val) [?e :comments/origin ?val]]
  ])


;;==============================================================
; for comments query, always
;;==============================================================
(defn populate-comments-refed-entity
  [entity]
  (let [projkeys (keys comments-schema)]
    (as-> entity e
      (select-keys e projkeys)
      (util/assoc-refed-many-entities :comments/author e)
      (util/assoc-refed-entity :comments/origin e)
      (util/add-upvote-attr e)
      (util/ref->dbid e :comments/thingroot)
      (util/get-entity-attr-tx e))
    ))

(defn query-comments
  "query comments by path, [:course 1 :comments] or [:course 1 :comments 2 :comments]"
  [navpath]
  (let [qpath (take-last 3 navpath)
        comments (->> (util/get-qpath-entities qpath get-comments-by)
                      (map populate-comments-refed-entity)
                      (map #(util/add-navpath % navpath)))
       ]
    comments))

; concat the comments of comments by [:course 1 :comments 2 :comments]
(defn comments-of
  "give a comments, find all comments whose origin point to this comments"
  [c]
  (when-not (nil? c)
    (let [navpath (concat (:navpath c) [:comments])
          comments (query-comments navpath)]
      comments)))


; [:course 17592186045425 :comments]
(defn find-comments
  "find all comments by query path"
  [qpath]
  (let [; iteratively apply a fn to a coll. result is a new lazy sequence.
        ; (iterate f x), ret a lazy sequence of x, (f x), (f (f x)), mapcat to get one list.
        comments (->> (iterate (fn [c] (mapcat #(comments-of %) c)) (query-comments qpath))
                      (take 3)  ; how many levels of recursive comments tree
                      (apply concat))
       ]
    (doseq [e comments]
      (log/info "comments --> " e ))
    comments))


; for now, all courses are created and lectured by person
(defn create-comments
  "create a comments with details "
  [details]
  (let [author-id (:db/id (find-by :person/title (:comments/author details)))
        entity (-> details
                   (select-keys (keys comments-schema))
                   (assoc :comments/author author-id)  ; append author-id to ref many person
                   (util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                   (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
       ]
    (log/info "create comments entity " author-id entity " trans " trans)
    [entity]))


;;==============================================================
; like, create like, or add user to like ref person.
; find all likes of certain
;;==============================================================
; find a course, thread thru project keys, and fill :course/likes
(defn find-like
  "find like by query path"
  [qpath]
  (let [likes (->> (util/get-qpath-entities qpath get-like-by)
                  (map populate-like-refed-entity)
                  (map #(util/add-navpath % qpath) ))
       ]
    (doseq [e likes]
      (log/info "like --> " e))
    likes))


; populate like refed outbound entity
(defn populate-like-refed-entity
  [entity]
  (let [projkeys (keys like-schema)]
    (as-> entity e
      (select-keys e projkeys))
    ))


; for now, all courses are created and lectured by person
(defn create-like
  "create a like with details "
  [details]
  (log/info "create like " details)
  (let [origin-id (:like/origin details)
        like-entity-id (or (:db/id (find-by :like/origin origin-id))
                        (d/tempid :db.part/user))
        entity (-> details
                  (select-keys (keys like-schema))
                  (assoc :db/id like-entity-id))
        trans (submit-transact [entity])  ; transaction is a list of entity
       ]
    (log/info "create like entity trans " trans)
    [entity]))

