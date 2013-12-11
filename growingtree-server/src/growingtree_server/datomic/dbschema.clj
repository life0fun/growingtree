(ns growingtree-server.datomic.dbschema
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [datomic.api :as d]
            [datomic-schema.schema :refer :all :as dschema]))

; The data model in datomic is represented by entity. Everything is entity.
; A table is an entity, each column is an entity, and each tuple row is an entity.

; For parent table, it is a parent entity with many attributes.
; The name attribute of parent, or name column, is an entity. it has its own id and its attribute identifier is :parent/name. The type of the attr is string. so primitive string text is stored. and it cardi is one.
; For children attribute of parent, it has its own id and iden is :parent/children. The type of the attr is ref, so a list of children ids are stored here, and the cardi is many.

;
; datomic db stores are repr by datoms. Each datom is an addition or retraction
; of a relation between an entity, an attribute, a value, and a transaction.
; db schema defines all the attributes that can be associated with entities.
; schema does not tell which attributes link to which entities. App wires them up !
; 
; schema attributes is the same data model for app, so no ORM needed.
; Every attributes is defined by three required attributes.
;   :db/ident - unique name in :<namespace>/<name>
;   :db/valueType - [:db.type/string, boolean, long, ref, instant(time) ]
;   :db/cardinality - attribute values, :db.cardinality/one, many, 
;   :db/unique - like pk, implies :db/index. possible values are
;     :db.unique/value no upsert. :db.unique/identity upsert merge temp id to db value.
;   :db/index 
;   :db/fulltext
;   :db/noHistory - default we store store all past value.
;
; attr can also be refed by var in query. [[?e ?attr] [?attr :id/ident ?attr-name]]
;  (d/q '[:find ?atn :where [?ref ?attr] [?attr :db/ident ?atn]] db)
;  (d/q '[:find ?atn :where [?ref :parent/fname] [?ref ?attr] [?attr :db/ident ?atn]] db)
;
; all defined attributes in :db.install/attribute, query by ident, list all.
; (q '[:find ?e :in $ ?attr :where [?e :db/ident ?attr]] (db conn) :parent/status)
; (q '[:find ?e :in $ ?attr :where [?e :db/ident ?attr]] (db conn) :db.part/app)
; (q '[:find ?attr :where [_ :db.install/attribute ?attr]] (d/db conn)) 
; (:db/ident (d/entity (d/db conn) 78))  ; to print entity ident
; or with npm install datomicism -g
; 
; using datomic-schema to define attr, the tempid set by {:db/id (d/tempid :db.part/db)
; whe inserting, temporary ids with the same partition and negative number value are 
; mapped to the same entity id. 
;   {:db/id #db/id[:db.part/user -1000460], :district/name "Greater Duwamish"}
;
; all the :ref :many attribute stores clojure.lang.MapEntry. use :db/id to get the id.
; 
; To check particular attri, (d/entid db :parent/child), then lein run show-entity
;
; how can we do compound unique key ?
; :db/unique implies :db/index. 
; :db.unique/value - attempts to insert a duplicate value for a different entity id will fail
; :db.unique/identity - attr val unique to each entity and "upsert" is enabled; merge.


; (dschema/build-parts) and (dschema/build-schema) turns all your defparts and defschemas 
; into a nice long list of datomic schema transactions. 
; To build specific schema, use (dschema/generate-schema group1 group2) 
;

;
; as a restful service, everything should be json string. 
; do not use URI. you can always URI.parse string to URI.
;

; app partition
(defpart app)

; for enum value in datomic is represented as entity with :db/ident attribute.
; :db/ident :homework/type == :db/ident :homework.type/math
(def person-status [:pending :active :inactive :cancelled])
(def child-grade [:first :second :third :fourth :fifth :sixth :seventh :freshman :junior :senior])
(def thing-type [:math :science :reading :coding :art :gym :reporting :game :sports])
(def course-schedule [:M :T :W :TH :F :SA :S])
(def assignment-type [:homework :course])
(def assignment-status [:pending :active :overdue :cancelled])
(def digit-type [:call :sms :mms :app :browse :game :stream :download :lock :study])

(defschema parent
  (part app)
  (fields
    [name :string :indexed :fulltext "user name, default as first name"]
    [lname :string :indexed :fulltext]
    [children :ref :many "a list of parent's children"]
    [status :enum person-status "person status, pending, active, etc"]
    [age :long]
    [address :string :fulltext]
    [gender :keyword "use :M and :F repr gender string"]
    [openid :string :many :fulltext " facebook url, linkedin url, im ids"]
    [groups :ref :many " social groups the user is in "]
    [email :string :many :indexed :fulltext]
    [phone :string :many :indexed :fulltext]
    [contacts :ref :many "contact list of the peroson"]
    [location :ref :many "location list of a person, most recent"]
    [popularity :long "persons popularity"]
    [followers :ref :many "the follower of the parent"]
    [friends :ref :many "a list of friends"]  ; the friends of parents
    [assignments :ref :many "all assignments this parent created to children"]
    [likes :ref :many "what homework the parent liked"]
    [comments :ref :many "can not personal attack on parent"]))

; children namespace with all attributes
(defschema child
  (part app)
  (fields
    [name :string :indexed :fulltext "user name, default as first name"]
    [lname :string :indexed :fulltext]
    [parents :ref :many "a list of kids parents"] ;
    [status :enum person-status "person status, pending, active, etc"]
    [age :long]
    [address :string :fulltext]
    [gender :keyword "use :M and :F repr gender string"]
    [openid :string :many :fulltext " facebook url, linkedin url, im ids"]
    [groups :ref :many " social groups the user is in "]
    [email :string :many :indexed :fulltext]
    [phone :string :many :indexed :fulltext]
    [contacts :ref :many "list of contact of the peroson"]
    [location :ref :many "location list of a person, most recent"]
    [popularity :long "persons popularity"]
    [followers :ref :many "the follower"]
    [friends :ref :many "a list of kids friends, as followers"]
    [courses :ref :many "a list of courses the child taken"]
    [lectures :ref :many "a list of lectures the child taken"]
    [assignments :ref :many "list of assignments to child"]
    [likes :ref :many "what homework the kid liked"]
    [classmates :ref :many "classmate of the kid"]
    [activities :ref :many "kids digital activities, ref to activity entity "]
    [grade :enum child-grade "the grade the kid is in"]
    [comments :ref :many "can we comment child's performance by authorities ?"]))


(defschema group
  (part app)
  (fields
    [title :string :fulltext " the title "]
    [author :ref :many "the admin, organizer of the group"]
    [type :enum thing-type "learning type of the group"]
    [likes :long "who likes"]
    [url :string "url of the group"]
    [wiki :string]
    [activities :ref :many "all activities the group has done"]
    [comments :ref :many "course comments"]))


; online streaming a course, each course repr one section of 
(defschema course
  (part app)
  (fields
    [title :string :fulltext]
    [author :ref :many "the author, teacher of the course"]
    [type :enum thing-type "course type, math, art, reading, etc"]
    [content :string :fulltext "content of the course, what it covers"]
    [references :string :fulltext "references, brief content"]
    [lectures :ref :many "all the lectures on this course"]
    [likes :long "who likes"]
    [url :string "content url of the course, can be video, audio, weburl"]
    [wiki :string "the discussion group, wiki and url"]
    [email :string :many "group email"]
    [credit :long "the credit of the course"]
    [grading :string "how the grading policy"]
    [comments :ref :many "course comments"]))

; lectures for a course, each course must have 1+ lectures
(defschema lecture
  (part app)
  (fields
    [title :string :fulltext "the title of the lecture"]
    [author :ref :many "the author, teacher of the course"]
    [type :enum thing-type "course type, math, art, reading, etc"]
    [content :string :fulltext "all related content"]
    [references :string :fulltext "references, brief content"]
    [course :ref :one "the course of this lecture"]
    [seqno :string :one "lecture sequence number, 1a, 1b, 2a, 2b, etc"]
    [date :instant :one "the date time the lecture scheduled"]
    [likes :long "who likes"]
    [url :string "the content url, include slides, handouts"]
    [homework :ref :many "the homework of the lecture"]
    [video :string "the video url"]
    [wiki :string "the discussion group, wiki and url"]
    [deliverable :string "which homework to due, any labs"]
    [comments :ref :many "feedback comments to the lecture"]))

; so questions or github project or online streaming course lecture
(defschema homework
  (part app)
  (fields
    [title :string :indexed :fulltext]
    [author :ref :many "the author of the homework"]
    [type :enum thing-type "homework type, math, art, reading, etc"]
    [content :string :fulltext]
    [lecture :ref :many "which course lecture this homework related to"]
    [likes :long "who likes"]
    [url :string "url of the homework, if any"]
    [difficulty :long "difficulty level, 5 star"]
    [solved :long "how many kids solved the problem in total"]
    [topanswers :ref :many "a list of top answers"]
    [comments :ref :many "comments for the homework"]))  ; a list of answers with 


(defschema assignment
  (part app)
  (fields
    [title :string :fulltext "the title of the assignment"]
    [author :ref :one "assignment created from who"]
    [homework :ref :one "assignment always comes from homework"]
    [priority :long :one "the priority of the assignment"]
    [assignee :ref :one "make one assignment to one child, one to one mapping"]
    [status :enum assignment-status "status of assignment"]
    [tag :string :many "the tag to the assignment"]
    [hint :string :many "hints to the assignment"]
    [related :ref :many "similar or related assignment"]
    [watcher :ref :many "watchers of the assignment"]
    [answer :ref :many "a list of answers to the assignment"]
    [comments :ref :many "the comments tree for the answer"]
    [start :instant "starting time of the assignment"]
    [due :instant "due time"]))


(defschema answer
  (part app)
  (fields
    [title :string :fulltext " the answer to the assignment"]
    [author :ref :one "the author of this answer"]
    [assignment :ref :one "one answer to one child assignment"]
    [homework :ref :one "can answer a homework without being assigned"]
    [score :long "score of the answer"]
    [likes :long "who likes"]
    [submittime :instant "the submit time"]
    [comments :ref :many "the comments tree for the answer"]))


; comment tree models conversation, engaging all participants, most important part!
(defschema comments
  (part app)
  (fields
    [title :string :fulltext "the title of the comment"] 
    [author :ref :one "the author of the comments"]
    [thingid :ref :one "the thing id this comment made to"]
    [likes :long "how many likes"]))


; activity, links two entity
(defschema activity
  (part app)
  (fields
    [title :string :one "activity content"]
    [author :ref :indexed :one "who created the activity"]
    [type :enum thing-type "the type of the activity"]
    [content :string :fulltext]
    [likes :long "how many likes"]
    [members :ref :many "member of this activity"]
    [tag :string :many :fulltext]
    [digittype :enum digit-type "digit activity type"]
    [appname :string :one "the app name"]
    [message :string :many "message content"]
    [origin :ref :one "origin entity"]
    [target :ref :many "target entity"]
    [start :instant "start time of activity"]
    [end :instant "end time of activity"]))


; (defn create-schema
;   "create schema using datomic-schema in db connection"
;   []
;   ; turn all defparts macro statement into schema transaction
;   (submit-transact (dschema/build-parts d/tempid))
;   ; turn all defschema macro statement into schema transaction
;   (submit-transact (dschema/build-schema d/tempid)))


