;; datomic data accessor
(ns growingtree-server.datomic.dda
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [clj-redis.client :as redis])    ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn]
            [growingtree-server.datomic.family :as family]
            [growingtree-server.datomic.course :as course]
            [growingtree-server.datomic.assign :as assign]
            [growingtree-server.datomic.comment :as comment]
            [growingtree-server.datomic.timeline :as timeline]))
  
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
; (map (fn [id] (d/touch (d/entity db (:db/id id)))) 
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


; show entity by id
(defn show-entity-by-id
  "show all attrs and values of the entity by id"
  [eid]
  (dbconn/show-entity-by-id eid))

; get entity by attribute and vaule
(defn find-entity
  "get entity by attribute and value"
  [attr val]
  (dbconn/find-entity attr val))

;;==============================================================
;; family related, should use multi-method to dispatch
;;==============================================================
(defn add-family
  "insert two parents with two children"
  [name]
  (family/add-family name))


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
(defn find-children
  "find all children who has parents"
  [qpath]
  (family/find-children qpath))



(defn insert-child
  "insert a children to parent by parent id, pid must be num, not string"
  [pid]  ; passed in pid is a num
  (family/insert-child pid))


; [:db/add entity-id attribute value]
(defn link-parent-child
  "link child to parent by parent id and child id"
  [pid cid]
  (family/link-parent-child pid cid))


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
;; timeline related, should use multi-method to dispatch
;;==============================================================
; list an entity attribute's timeline
(defn timeline
  "list an entity's attribute's timeline "
  [eid attr]
  (timeline/timeline eid attr))


; list a person's all transaction timeline
(defn person-timeline
  "list a person's transaction timeline"
  [eid]
  (timeline/person-timeline eid))


;;==============================================================
;; course related, should use multi-method to dispatch
;;==============================================================
; create homework to be assigned
(defn create-course
  "create a course "
  ([]
    (create-course {:title "aa", :author "bb", :type "Math", :content "", 
                    :url "", :email "", :comments "", :user "rich"}))

  ([details]
    (course/create-course details)))


; create course and lecture together
(defn create-course-and-lecture
  "create a course, and a batch of lecture in one transaction"
  []
  (course/create-course-and-lecture))


; the enum must be fully qualified, :homework.subject/math
(defn create-course-coding
  "create a simple math course and lectures"
  []
  (course/create-course-coding))

; create an online course
(defn create-lecture
  "create a course lecture for certain course id"
  [cid]
  (course/create-lecture cid))


; find a course
(defn find-course
  "find course by subject, ret a list of course entity"
  [qpath]
  (course/find-course qpath))


(defn find-lecture
  "find all lectures, ret a vector of lecture entities"
  [qpath]
  (course/find-lecture qpath))


; linking a lecture to a course, ref attr's val is numeric id value.
(defn add-course-lecture
  "adding a lecture to a course by setting ref attr with id numeric value"
  [cid lid]
  (course/add-course-lecture cid lid))


; retract the lecture from a course
(defn rm-course-lecture
  "remove a lecture from a course by setting ref attr with id numeric value"
  [cid lid]
  (course/rm-course-lecture cid lid))


;;==============================================================
;; homework related, should use multi-method to dispatch
;;==============================================================
; create homework to be assigned
(defn create-homework
  "create a homework"
  ([]
    (create-homework {:title "aa", :author "bb", :type "Math", :content "cc", 
                      :url "dd", :difficulty "4", :comments "ff", :user "rich"}))

  ([details]
    (assign/create-homework details)))


(defn find-homework
  "find homework by subject"
  []
  (assign/find-homework))


(defn inc-homework-popularity
  "increase homework popularity"
  []
  (assign/inc-homework-popularity))


;;==============================================================
; assignment 
;;==============================================================
; create an assignment for any homework that 
(defn create-assignment
  "create an assignment from a homework to a child"
  ([]
    (assign/create-assignment))

  ([details]
    (assign/create-assignment details)))



; :find rets entity id, find all assignments
(defn find-assignment
  "find all assignments by query path"
  [qpath]
  (assign/find-assignment qpath))


;;==============================================================
; answer 
;;==============================================================
; submit an answer to an assignment
(defn submit-answer
  "submit an answer to an assignment"
  [assid authorid]
  (assign/submit-answer assid authorid))


; find all answers
(defn find-answer
  "find all answers"
  []
  (assign/find-answer))


;;==============================================================
;; comment related, should use multi-method to dispatch
;;==============================================================
; make a comment on any eid
(defn fake-comment
  "fake a comment on an assignment"
  []
  (comment/fake-comment))

; list all comments
(defn find-comment
  "find a comment"
  []
  (comment/find-comment))

