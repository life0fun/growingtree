(ns growingtree-server.datomic.shoutout
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

(declare shoutout-of)
(declare populate-shoutout-refed-entity)
(declare populate-like-refed-entity)


; schema attr-name value type map for parent schema and child schema
(def shoutout-schema (assoc (list-attr :shoutout) :db/id :db.type/id))


; rule set for get shoutout by.
(def get-shoutout-by
  '[[(:all ?e ?val) [?e :shoutout/author]]   ; select all
    [(:author ?e ?val) [?e :shoutout/author ?val]]
    [(:origin ?e ?val) [?e :shoutout/origin ?val]]
    [(:thingroot ?e ?val) [?e :shoutout/thingroot ?val]]
    [(:title ?e ?val) [?e :shoutout/title ?val]]
    [(:url ?e ?val) [?e :shoutout/url ?val]]

    [(:child ?e ?val) [?e :shoutout/author ?val]]
    [(:parent ?e ?val) [?e :shoutout/author ?val]]
    [(:group ?e ?val) [?e :shoutout/group ?val]]

    ; all shoutout whose origin point to this shoutout
    [(:shoutout ?e ?val) [?e :shoutout/origin ?val]]
  ])


;;==============================================================
; for shoutout query, always
;;==============================================================
(defn populate-shoutout-refed-entity
  [entity]
  (let [projkeys (keys shoutout-schema)]
    (as-> entity e
      (select-keys e projkeys)
      (util/assoc-refed-many-entities :shoutout/author e)
      (util/assoc-refed-entity :shoutout/origin e)
      (util/add-upvote-attr e)
      (util/ref->dbid e :shoutout/thingroot)
      (util/get-entity-attr-tx e :shoutout/title))
    ))


; [:group 17592186045438 :shoutout
(defn query-shoutout
  "query shoutout by path, [:child 1 :shoutout] or [:child 1 :shoutout 2 :shoutout]"
  [navpath]
  (let [qpath (take-last 3 navpath)
        shoutout (->> (util/get-qpath-entities qpath get-shoutout-by)
                      (map populate-shoutout-refed-entity)
                      (map #(util/add-navpath % navpath)))
       ]
    (log/info "query-shoutout " navpath shoutout)
    shoutout))


; concat the shoutout of shoutout by [:course 1 :shoutout 2 :shoutout]
(defn shoutout-of
  "give a shoutout, find all shoutout whose origin point to this shoutout"
  [shoutout]
  (when-not (nil? shoutout)
    (let [navpath (concat (:navpath shoutout) [:shoutout])
          shoutout-of (query-shoutout navpath)]
      (log/info "shoutout-of " navpath shoutout-of)
      shoutout-of)))


; [:child 17592186045427 :shoutout]
(defn find-shoutout
  "find all shoutout by query path"
  [qpath]
  (let [; iteratively apply a fn to a coll. result is a new lazy sequence.
        ; (iterate f x), ret a lazy sequence of x, (f x), (f (f x)), mapcat to get one list.
        topshoutout (query-shoutout qpath)
        shoutout (->> (iterate (fn [shoutouts] (mapcat #(shoutout-of %) shoutouts)) topshoutout)
                      (take 3)  ; how many levels of recursive shoutout tree
                      (apply concat))
       ]
    (doseq [e shoutout]
      (log/info "shoutout --> " e ))
    shoutout))


;
; for now, all courses are created and lectured by person
(defn create-shoutout
  "create a shoutout with details "
  [details]
  (log/info "creating shoutout " details)
  (let [shoutid (or (:shoutout/id details) (d/tempid :db.part/user))
        entity (-> details
                   (select-keys (keys shoutout-schema))
                   (util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                   (assoc :db/id shoutid))
        group-id (when (:shoutout/group details)
                    (:db/id (dbconn/find-by :group/title (:shoutout/group details))))
        entity (if group-id 
                  (assoc entity :shoutout/group group-id)
                  entity)
        trans (submit-transact [entity])  ; transaction is a list of entity
       ]
    (log/info "create shoutout entity " entity " trans " trans)
    [entity]))

