;; datomic data accessor
(ns growingtree-server.datomic.dda
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [clj-redis.client :as redis])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn]
            [growingtree-server.datomic.family :as family]
            [growingtree-server.datomic.course :as course]
            [growingtree-server.datomic.assign :as assign]
            [growingtree-server.datomic.comments :as comments]
            [growingtree-server.datomic.timeline :as timeline]
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
; with the map structure, which will be conver to [:db/add eid att val],
; or explicitly with the list structure.
; note that clj nil is an illegal value for db attribute. Need to convert it.
;
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
; (map (fn [id] (d/t
;   (-> (d/entity db 17592186045476) :child/_parent))
;
; (d/q '[:find ?e :in $ ?x :where [?e :child/parent ?x]] db (:db/id p))


; create attr schema thru conn
(defn create-schema
  "create schema with connection to db"
  []
  (dbconn/create-schema))


; list all install-ed attrs in db
(defn list-attr
  "list attibutes in db"
  ([]
    (dbconn/list-attr))
  ([attr]
    (if attr
      (dbconn/list-attr attr)
      (dbconn/list-attr))))


;;==============================================================
; get details of individual entity
;;==============================================================

; show entity by id
(defn show-entity-by-id
  "show all attrs and values of the entity by id"
  [eid]
  (dbconn/show-entity-by-id eid))


; [:timeline 1 :title]
(defn find-entity-by-id
  "find individual entity by its id"
  [eid qpath]
  (let [entity (dbconn/get-entity eid)
        thing-type (dbconn/entity-keyword entity)
        schema (dbconn/get-schema thing-type)
        ; replace thing type with entity's type
        navpath (concat [thing-type] (rest qpath))
        e (-> entity
              (select-keys (keys schema))
              (util/add-navpath navpath))
       ]
    (prn "find-entity-by-id " qpath navpath)
    e))


; find all entities by specific attribute and vaule
(defn find-entities
  "find entities by specific attribute and value"
  [attr val]
  (dbconn/find-entities attr val))


(defn find-entity-attr
  "find outbound refed entity of courrent entity"
  [eid ref-attr]
  (let [e (dbconn/get-entity eid)
        e-type (dbconn/entity-keyword e)
        ref-e ((keyword (str (name e-type) "/" ref-attr)) e)
        ref-ids (->> (if (set? ref-e) ref-e (vector ref-e))
                          (map :db/id ))
       ]
    (prn "find entity attr " ref-ids)
    ref-ids))


;;==============================================================
; get login user by name
;;==============================================================
(defn find-user
  "find or create login user"
  [details]
  (family/find-user details))


;;==============================================================
;; family related, should use multi-method to dispatch
;;==============================================================
; :find rets entity id, find all person's pid and name.
(defn find-person
  "find all parents with all children"
  [qpath]
  (family/find-person qpath))


(defn create-family
  "create a family with either or both parent name and child name"
  [qpath]
  (prn "create-family called " qpath))


; :find rets entity id, find all parent's pid and name.
(defn find-parent
  "find all parents with all children"
  [qpath]
  (family/find-parent qpath))

(defn create-parent
  "create an parent from new thing form submission"
  ([]
    (family/create-parent))

  ([details]
    (family/create-parent details)))


; list all children, to find one entity with id, use (get-entity id)
(defn find-child
  "find all children who has parents"
  [qpath]
  (family/find-child qpath))


(defn create-child
  "create a child from new thing form submission"
  [details]
  (family/create-child details))



; (defn find-parent
;   "find parent by child id, id could be child name or child entity id"
;   [cidstr & args]
;   (family/find-parent cidstr args))


; ; find parent of a child
; (defn find-parent-by-cid
;   "find the parent of a child by its id, the passed cid is number"
;   [cid]
;   (family/find-parent-by-cid cid))


; ; search all fname and lname to check whether there is a match
; (defn find-parent-by-cname
;   "find the parent of a child by its name"
;   [clname cfname]
;   (family/find-parent-by-cname clname cfname))


; ; find a person by name, use set/union as sql union query.
; (defn find-by-name
;   "find a person by either first name or last name"
;   [pname]
;   (family/find-by-name pname))


;;==============================================================
; group and group activity/event
;;==============================================================
(defn find-group
  "find group by subject, ret a list of group entity"
  [qpath]
  (family/find-group qpath))


; create a group
(defn create-group
  "create a group with details"
  [details]
  (family/create-group details))


; join a group
(defn join-group
  "join a group with details"
  [details]
  (family/join-group details))


(defn find-group-members
  "find group members "
  [qpath]
  (family/find-group-members qpath))

; create a group
(defn find-activity
  "find activity from group with details"
  [details]
  (family/find-activity details))

; create a group
(defn create-activity
  "create a activity with details"
  [details]
  (family/create-activity details))


(defn find-activity-members
  "find activity activity members from qpath"
  [qpath]
  (family/find-activity-members qpath))


;;==============================================================
;; course related, should use multi-method to dispatch
;;==============================================================
; find a course
(defn find-course
  "find course by subject, ret a list of course entity"
  [qpath]
  (course/find-course qpath))


; create question to be assigned
(defn create-course
  "create a course "
  ([]
    (create-course {:title "aa", :author "bb", :type "Math", :content "",
                    :url "", :email "", :comments "", :user "rich"}))

  ([details]
    (course/create-course details)))


; --------------------------------------------------------------------
(defn find-lecture
  "find all lectures, ret a vector of lecture entities"
  [qpath]
  (course/find-lecture qpath))


; create an online course
(defn create-lecture
  "create a course lecture for certain course id"
  [details]
  (course/create-lecture details))


; --------------------------------------------------------------------
(defn find-enrollment
  "find enrollment for a course, or a lecture"
  [qpath]
  (course/find-enrollment qpath))


(defn create-enrollment
  "create an enrollment to a course or lecture"
  [details]
  (course/create-enrollment details))


;;==============================================================
;; question related, should use multi-method to dispatch
;;==============================================================

(defn find-question
  "find question by subject"
  [qpath]
  (assign/find-question qpath))


; create question to be assigned
(defn create-question
  "create a question"
  ([]
    (create-question {:title "aa", :author "bb", :type "Math", :content "cc",
                      :url "dd", :difficulty "4", :comments "ff", :user "rich"}))

  ([details]
    (assign/create-question details)))


(defn inc-question-popularity
  "increase question popularity"
  []
  (assign/inc-question-popularity))


;;==============================================================
; assignment
;;==============================================================

; :find rets entity id, find all assignments
(defn find-assignment
  "find all assignments by query path"
  [qpath]
  (assign/find-assignment qpath))


; create an assignment for any question that
(defn create-assignment
  "create an assignment from a question to a child"
  ([]
    (assign/create-assignment))

  ([details]
    (assign/create-assignment details)))


;;==============================================================
; answer and grade
;;==============================================================
; submit an answer to an assignment
(defn create-answer
  "submit an answer to an assignment"
  [details]
  (assign/create-answer details))


; find all answers
(defn find-answer
  "find all answers"
  [qpath]
  (assign/find-answer qpath))


(defn create-grade
  "submit an answer to an assignment"
  [details]
  (assign/create-grade details))


;;==============================================================
;; comment related, should use multi-method to dispatch
;;==============================================================
; make a comment on any eid
(defn create-comments
  "create a comment on an assignment"
  [details]
  (comments/create-comments details))

; list all comments
(defn find-comments
  "find comments by query path"
  [qpath]
  (comments/find-comments qpath))

;;==============================================================
; like, create like, or add user to like ref person.
; find all likes of certain
;;==============================================================
(defn create-like
  "create a like from new thing form submission"
  [details]
  (comments/create-like details))

; find a course
(defn find-like
  "find like with query path"
  [qpath]
  (comments/find-like qpath))


;;==============================================================
;; timeline related, should use multi-method to dispatch
;;==============================================================
; list an entity attribute's timeline
(defn find-timeline
  "list an entity's attribute's timeline "
  [qpath details]
  (timeline/find-timeline qpath details))

;;==============================================================
; fulltext search
;;==============================================================
(defn search
  "conduct fulltext search"
  [qpath details]
  (timeline/search-fulltext qpath details))


