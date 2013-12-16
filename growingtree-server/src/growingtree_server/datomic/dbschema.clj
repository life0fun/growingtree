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
(def person-type [:parent :child :teacher])
(def person-status [:pending :active :inactive :cancelled])
(def classof [:first :second :third :fourth :fifth :sixth :seventh :freshman :junior :senior])
(def thing-type [:math :science :reading :coding :art :gym :reporting :game :sports])
(def course-schedule [:monday :tuesday :wednesday :thursday :friday :saturday :sunday])
(def assignment-type [:homework :course])
(def assignment-status [:pending :active :overdue :cancelled])
(def digit-type [:call :sms :mms :app :browse :game :stream :download :lock :study])


; person namespace, different types of person, parent, child, teacher
(defschema person
  (part app)
  (fields
    [title :string :indexed :fulltext "person name, default as first name"]
    [lname :string :indexed :fulltext] 
    [type :keyword  " one of person-type, :parent, :child, :teacher :author"]
    [status :keyword "person-status keys, pending, active, etc"]
    [age :long]
    [address :string :fulltext]
    [gender :keyword "use :M and :F repr gender string"]
    [url :string :many :fulltext " facebook url, linkedin url, im ids"]
    [email :string :many :indexed :fulltext]
    [phone :string :many :indexed :fulltext]
    [contact :string :fulltext "contact names and phone number"]
    [occupation :string :many :fulltext "parent's occupation"]
    [popularity :long "persons popularity"]
  ))


(defschema family
  (part app)
  (fields
    [title :string "short description of the family"]
    [parent :ref :many :indexed "parent of a family"]
    [child :ref :many :indexed "child of a family"]
    [address :string "address of the family"]
  ))


(defschema follow
  (part app)
  (fields
    [title :string "the name of follow, why follow"]
    [followee :ref :one :indexed "person being followed"]
    [follower :ref :many :indexed "all followers"]
  ))


(defschema school
  (part app)
  (fields
    [title :string "school name"]
    [district :string "school district"]
    [rate :long "rate of school"]
    [address :string "school address"]
    [teacher :ref :many "all school teacher staff"]
  ))


(defschema schoolclass
  (part app)
  (fields
    [title :string "schoolclass name"]
    [school :ref :one "which school"]
    [classof :keyword "key from classof keyword first grade, second grade"]
    [teacher :ref :many "teacher of the schoolclass"]
    [child :ref :many "child student"]
    [classroom :string "classroom"]
  ))


(defschema group
  (part app)
  (fields
    [title :string :fulltext " the title "]
    [author :ref :many :indexed "the admin, organizer of the group"]
    [type :keyword "learning type of the group, from thing-type"]
    [person :ref :many "person in the group"]
    [url :string "url of the group"]
    [wiki :string]
  ))


(defschema like
  (part app)
  (fields
    [title :string :fulltext " the title of like "]
    [thing :ref :one :indexed "the thing this like is to"]
    [person :ref :many "person who like this thing"]
    [url :string "url of the like"]
    [wiki :string]
  ))


; comment tree models conversation, engaging all participants, most important part!
(defschema comment
  (part app)
  (fields
    [title :string :fulltext "the title of the comment"] 
    [author :ref :one :indexed "the author of the comments"]
    [thing :ref :one :indexed "the thing id this comment made to"]
    [source :ref :one :indexed "the parent source id this comment made to"]
  ))


; activity, links two entity
(defschema activity
  (part app)
  (fields
    [title :string :one "activity content"]
    [author :ref :one :indexed "who created the activity"]
    [type :keyword "the thing-type of the activity"]
    [content :string :fulltext]
    [location :string "where the activity will be held"]
    [person :ref :many "person of this activity"]
    [tag :string :many :fulltext]
    [digittype :keyword "digit activity type"]
    [appname :string :one "the app name"]
    [message :string :many "message content"]
    [origin :ref :one "origin entity"]
    [target :ref :many "target entity"]
    [start :long "start time of activity"]
    [end :long "end time of activity"]
  ))

; comment tree models conversation, engaging all participants, most important part!
(defschema location
  (part app)
  (fields
    [title :string :fulltext "the title of the location"] 
    [person :ref :many :indexed " persons in this location"]
    [start :long "start time at this location"]
    [end :long "end time at this location"]
  ))


; online streaming a course, each course repr one section of 
(defschema course
  (part app)
  (fields
    [title :string :fulltext]
    [author :ref :many :indexed "the author, teacher of the course"]
    [type :keyword "course type, math, art, reading, etc"]
    [content :string :fulltext "content of the course, what it covers"]
    [reference :string :fulltext "references, brief content"]
    [url :string "content url of the course, can be video, audio, weburl"]
    [wiki :string "the discussion group, wiki and url"]
    [email :string :many "group email"]
    [credit :long "the credit of the course"]
    [grading :string "how the grading policy"]
  ))

; lectures for a course, each course must have 1+ lectures
(defschema lecture
  (part app)
  (fields
    [title :string :fulltext "the title of the lecture"]
    [author :ref :many :indexed "the author, teacher of the course"]
    [course :ref :one :indexed "the course of this lecture"]
    [type :keyword " thing-type course type, math, art, reading, etc"]
    [content :string :fulltext "all related content"]
    [reference :string :fulltext "references, brief content"]
    [seqno :string :one "lecture sequence number, 1a, 1b, 2a, 2b, etc"]
    [start :long "the start time the lecture scheduled"]
    [end :long "the end time the lecture scheduled"]
    [url :string "the content url, include slides, handouts"]
    [video :string "the video url"]
    [wiki :string "the discussion group, wiki and url"]
    [deliverable :string "which homework to due, any labs"]
  ))

; so questions or github project or online streaming course lecture
(defschema homework
  (part app)
  (fields
    [title :string :indexed :fulltext]
    [author :ref :many :indexed "the author of the homework"]
    [type :keyword " thing-type homework type, math, art, reading, etc"]
    [content :string :fulltext]
    [source :ref :many :indexed "which course lecture this homework related to"]
    [url :string "url of the homework, if any"]
    [difficulty :long "difficulty level, 5 star"]
    [solved :long "how many kids solved the problem in total"]
  ))


(defschema assignment
  (part app)
  (fields
    [title :string :fulltext "the title of the assignment"]
    [author :ref :one :indexed "assignment created from who"]
    [source :ref :one :indexed "which source assignment comes from, homework, course"]
    [priority :long "the priority of the assignment"]
    [person :ref :one :indexed "make one assignment to one child, one to one mapping"]
    [type :keyword " assignment-type source type of assignment, "]
    [status :keyword " assignment-status status of assignment"]
    [tag :string :many "the tag to the assignment"]
    [hint :string :many "hints to the assignment"]
    [related :ref :many "similar or related assignment"]
    [watcher :ref :many "watchers of the assignment"]
    [start :long "starting time of the assignment"]
    [end :long "due time"]
  ))


(defschema answer
  (part app)
  (fields
    [title :string :fulltext " the answer to the assignment"]
    [author :ref :one :indexed "the author of this answer"]
    [source :ref :one :indexed "one answer to one child assignment"]
    [score :long "score of the answer"]
    [start :long "the submit time"]
  ))


; (defn create-schema
;   "create schema using datomic-schema in db connection"
;   []
;   ; turn all defparts macro statement into schema transaction
;   (submit-transact (dschema/build-parts d/tempid))
;   ; turn all defschema macro statement into schema transaction
;   (submit-transact (dschema/build-schema d/tempid)))


