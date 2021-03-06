(ns growingtree-server.datomic.dbschema
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [datomic.api :as d]
            [datomic-schema.schema :refer :all :as dschema]))

; The data model in datomic is represented by entity. Everything is entity.
; A table is an entity, each column is an entity, and each tuple row is an entity.

; schema attributes are entities with associated attributes.
; schema attributes are defined using built-in system attributes.
; A table schema is a collection of attributes grouped within the same namespace. :person/name.
; Every new attr defined by 3 required attributes, :db/ident, :db/valueType, :db/cardinality.

; :db.part/db is a system entity, with eid 0.
; every attribute must be installed to the ref of :db.install/attribute of system *entity* :db.part/db.
; every partition must be installed to the ref of :db.install/partition of system *entity* :db.part/db.

; [:db/add :db.part/db :db.install/partition #db/id[:db.part/db -1]]]
; [{:db/id #db/id[:db.part/db], :db/ident :communities, :db.install/_partition :db.part/db}]

; (d/transact conn '[{:db/id #db/id[:db.part/db] :db.install/_attribute :db.part/db
;                     :db/ident :shoutout/tag :db/valueType :db.type/string
;                     :db/cardinality :db.cardinality/one :db/fulltext true :db/index true}])

; :db/ident specify a keyword name of an attribut. d/entid ret the id for the keyword.
;  (d/touch (d/entity db (d/entid db :db.part/db)))
;  (d/entid db :parent/child)
;  (d/entid db :db.part/db)
;  (d/ident db eid)
;  (d/ident db 1)  :db/add
;  (d/ident db 2)  :db/retract
;  (d/ident db 3)  :db.part/tx
;  (d/ident db 4)  :db.part/user

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
; Optional attributes
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
; to alter schema, 2 ways, rename an entity, or altering schema attributes.
; [{:db/id :person/name :db/ident :person/full-name}]
; [{:db/id :person/favorite-food :db/cardinality :db.cardinality/many :db.alter/_attribute :db.part/db}


; app partition
(defpart app)

; for enum value in datomic is represented as entity with :db/ident attribute.
; :db/ident :question/type == :db/ident :question.type/math
(def person-type [:parent :child :teacher])
(def person-status [:pending :active :inactive :cancelled])
(def classof [:first :second :third :fourth :fifth :sixth :seventh :freshman :junior :senior])
(def thing-type [:math :science :reading :coding :art :gym :reporting :game :sports])
(def course-schedule [:monday :tuesday :wednesday :thursday :friday :saturday :sunday])
(def assignment-type [:question :course])
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
    [url :string :many :fulltext " facebook url, linkedin url, im ids"]
    [email :string :many :indexed :fulltext "unique identify of the person"]
    [im :string :many :fulltext "im ids"]
    [phone :string :many :indexed :fulltext "use phone # or use email address ?"]
    [age :long]
    [address :string :fulltext]
    [gender :keyword "use :M and :F repr gender string"]
    [contact :string :fulltext "contact names and phone number"]
    [occupation :string :many :fulltext "parent's occupation"]
    [popularity :long "persons popularity"]
  ))


(defschema family
  (part app)
  (fields
    [title :string :unique-value :indexed "name of the family, uniquely identify the family ?"]
    [parent :ref :many :indexed "parent of a family"]
    [child :ref :many :indexed "child of a family"]
    [address :string "address of the family"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema follow
  (part app)
  (fields
    [title :string "the name of follow, why follow"]
    [followee :ref :one :indexed "person being followed"]
    [person :ref :many :indexed "all followers"]
  ))


(defschema school
  (part app)
  (fields
    [title :string :unique-value "school name"]
    [district :string "school district"]
    [rate :float "rate of school"]
    [address :string "school address"]
    [teacher :ref :many "all school teacher staff"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema schoolclass
  (part app)
  (fields
    [title :string :unique-value "schoolclass name"]
    [school :ref :one "which school"]
    [classof :keyword "key from classof keyword first grade, second grade"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
    [teacher :ref :many "teacher of the schoolclass"]
    [person :ref :many "child student"]
    [classroom :string "classroom"]
  ))


(defschema group
  (part app)
  (fields
    [title :string :fulltext :unique-value " the unique group title "]
    [author :ref :many :indexed "the admin, organizer of the group"]
    [type :keyword "learning type of the group, from thing-type"]
    [person :ref :many "person in the group"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


; group activity, or user phone usage activity.
(defschema activity
  (part app)
  (fields
    [title :string :one :unique-value "activity content"]
    [author :ref :one :indexed "who created the activity"]
    [type :keyword "the thing-type of the activity"]
    [origin :ref :one "the group that this activity belongs to"]
    [target :ref :many "target entity, not sure about this"]
    [content :string :fulltext]
    [tag :string :many :fulltext]
    [person :ref :many "person of this activity"]
    [location :string "where the activity will be held"]
    [digittype :keyword "digit activity type"]
    [appname :string :one "the app name"]
    [message :string :many "message content"]
    [start :long "start time of activity"]
    [end :long "end time of activity"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema location
  (part app)
  (fields
    [title :string :fulltext "the title of the location"] 
    [address :string :fulltext "the address of the location"]
    [latlng :double :many "the latlng of the location in a vector"]
    [person :ref :many :indexed " persons in this location"]
    [start :long "start time at this location"]
    [end :long "end time at this location"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema course
  (part app)
  (fields
    [title :string :fulltext]
    [author :ref :many :indexed "the author, teacher of the course"]
    [type :keyword "course type, math, art, reading, etc"]
    [content :string :fulltext "content of the course, what it covers"]
    [reference :string :fulltext "references, brief content"]
    [prerequisite :ref :many "the prerequisite courses"]
    [credit :long "the credit of the course"]
    [grading :string "how the grading policy"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


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
    [video :string "the video url"]
    [deliverable :string "which question to due, any labs"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema enrollment
  (part app)
  (fields
    [title :string :fulltext " the title enrollment of the enrollment"]
    [content :string :fulltext " the content of the enrollment"]
    [course :ref :one :indexed "the course of this enrollment"]
    [lecture :ref :one :indexed "normally all course lectures, but you can enroll to a lecture, if needed"]
    [person :ref :many :indexed "a list of persons in the enrollment"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


; so questions or github project or online streaming course lecture
(defschema question
  (part app)
  (fields
    [title :string :indexed :fulltext]
    [content :string :fulltext]
    [author :ref :many :indexed "the author of the question"]
    [status :keyword "closed, no editable, etc."]
    [type :keyword " thing-type question type, math, art, reading, etc"]
    [origin :ref :many :indexed "which course lecture this question related to"]
    [tag :string :many "the tag to the question"]
    [difficulty :long "difficulty level, 5 star"]
    [hint :string :many "hints to the question"]
    [related :ref :many "similar or related question"]
    [watcher :ref :many "watchers of the question"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema assignment
  (part app)
  (fields
    [title :string :fulltext "the title of the assignment"]
    [author :ref :one :indexed "assignment created from who"]
    [origin :ref :one :indexed "which origin assignment comes from, question, course"]
    [priority :long "the priority of the assignment"]
    [person :ref :one :indexed "make one assignment to one child, one to one mapping"]
    [type :keyword " assignment-type origin type of assignment, "]
    [status :keyword " assignment-status status of assignment"]
    [tag :string :many "the tag to the assignment"]
    [hint :string :many "hints to the assignment"]
    [related :ref :many "similar or related assignment"]
    [watcher :ref :many "watchers of the assignment"]
    [start :long "starting time of the assignment"]
    [end :long "due time"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


(defschema answer
  (part app)
  (fields
    [title :string :fulltext " the title answer of the answer"]
    [content :string :fulltext " the content of the answer"]
    [author :ref :one :indexed "the author of this answer"]
    [origin :ref :one :indexed "one answer to one question, assignment"]
    [score :long "score of the answer"]
    [start :long "the submit time"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))

; learning progress tracker. Each step in progress is a progress task.
(defschema progress
  (part app)
  (fields
    [title :string :fulltext " the name of progress"]
    [author :ref :one :indexed " the author of the progress"]
    [origin :ref :one :indexed " the course, thing that needs to be progressed"]
    [steps :ref :many "a list of tasks during progressing"]
  ))

(defschema progressstep
  (part app)
  (fields
    [title :string :fulltext " the name of step"]
    [origin :ref :one :indexed " the progress this step belongs to"]
    [start :long "starting time of the step"]
    [end :long "the finished time of step"]
    [status :string "percentage of progression in string format"]
    [order :string "the order this step in the progression"]
  ))


(defschema like
  (part app)
  (fields
    [title :string :fulltext :unique-value " the title of like "]
    [origin :ref :one :indexed "the origin thing this like is to"]
    [person :ref :many "person who like this thing"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


; comment tree, thingroot is the root of thing this comments tree.
; origin is the direct parent this comment.
(defschema comments
  (part app)
  (fields
    [title :string :fulltext "the title of the comments"] 
    [author :ref :one :indexed "the author of the commentss"]
    [thingroot :ref :one :indexed "the thingroot id this comments made to"]
    [origin :ref :one :indexed "the parent origin id this comment made to"]
    [url :string "url of the thing"]
    [email :string :indexed "uniquely identifier"]
    [wiki :string "wiki page of the thing"]
  ))


; shoutout, datomic does not support blob, so how to store img and videos ?
; thingroot is thing's id this shoutout made to. origin is origin shoutout id if retweeted.
(defschema shoutout
  (part app)
  (fields
    [title :string :fulltext "the title of the shoutout"] 
    [author :ref :one :indexed "the author of the shoutout"]
    [contenturl :string "url to the content, img, videos"]
    [thingroot :ref :one :indexed "the thingroot id this shoutout made to"]
    [origin :ref :one :indexed "the origin shoutout id, if this is a retweet"]
    [group :ref :many :indexed "which groups this group chat belongs to"]
    [tag :string :fulltext :indexed "uniquely identifier"]
  ))


; (defn create-schema
;   "create schema using datomic-schema in db connection"
;   []
;   ; turn all defparts macro statement into schema transaction
;   (submit-transact (dschema/build-parts d/tempid))
;   ; turn all defschema macro statement into schema transaction
;   (submit-transact (dschema/build-schema d/tempid)))


