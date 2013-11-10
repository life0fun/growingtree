(ns growingtree-server.datomic.dbschema
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [datomic.api :as d]
            [datomic-schema.schema :refer :all :as dschema]))

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
; app partition
(defpart app)

; for enum value in datomic is represented as entity with :db/ident attribute.
; :db/ident :homework/subject == :db/ident :homework.subject/math
(def person-status [:pending :active :inactive :cancelled])
(def child-grade [:first :second :third :fourth :fifth :sixth :seventh :freshman :junior :senior])
(def subject [:math :science :reading :coding :art :gym :reporting :game])
(def course-schedule [:M :T :W :TH :F :SA :S])
(def assignment-type [:homework :course])
(def assignment-status [:pending :active :overdue :cancelled])
(def activity-type [:call :sms :mms :app :url :download :lock])

(defschema parent
  (part app)
  (fields
    [fname :string :indexed :fulltext]
    [lname :string :indexed :fulltext]
    [status :enum person-status "person status, pending, active, etc"]
    [age :long]
    [address :string :fulltext]
    [gender :keyword "use M and F repr gender string"]
    [email :string :many :indexed :fulltext]
    [phone :string :many :indexed :fulltext]
    [contacts :ref :many "contact list of the peroson"]
    [location :ref :many "location list of a person, most recent"]
    [popularity :long "persons popularity"]
    [followers :ref :many "the follower of the parent"]
    [child :ref :many "a list of parent's children"]
    [assignment :ref :many "all assignments this parent created to children"]
    [likes :ref :many "what homework the parent liked"]
    [friends :ref :many "a list of friends of parents"]  ; the friends of parents
    [comments :ref :many "can not personal attack on parent"]))

; children namespace with all attributes
(defschema child
  (part app)
  (fields
    [fname :string :indexed :fulltext]
    [lname :string :indexed :fulltext]
    [status :enum person-status "person status, pending, active, etc"]
    [age :long]
    [address :string :fulltext]
    [gender :keyword "use :M and :F repr gender string"]
    [email :string :many :indexed :fulltext]
    [phone :string :many :indexed :fulltext]
    [contacts :ref :many "list of contact of the peroson"]
    [location :ref :many "location list of a person, most recent"]
    [popularity :long "persons popularity"]
    [parent :ref :many "a list of kids parents"] ;
    [friends :ref :many "a list of kids friends, as followers"]
    [classmates :ref :many "classmate of the kid"]
    [grade :enum child-grade "the grade the kid is in"]
    [activities :ref :many "kids digital activities, ref to activity entity "]
    [assignments :ref :many "list of assignments to child"]
    [likes :ref :many "what homework the kid liked"]
    [comments :ref :many "can we comment child's performance by authorities ?"]))


; online streaming a course, each course repr one section of 
(defschema course
  (part app)
  (fields
    [subject :enum subject "course subject, math, art, reading, etc"]
    [title :string :fulltext " the title "]
    [credit :long "the credit of the course"]
    [overview :string :fulltext "overview of the course, what it covers"]
    [materials :string :fulltext "materials, brief content"]
    [contenturi :uri "content uri of the course, can be video, audio, weburl"]
    [author :ref :many "the author, teacher of the course"]
    [grading :string "how the grading policy"]
    [lectures :ref :many "all the lectures on this course"]
    [comments :ref :many "course comments"]))

; lectures for a course, each course must have 1+ lectures
(defschema lecture
  (part app)
  (fields
    [course :ref :one "the course of this lecture"]
    [seqno :string :one "lecture sequence number, 1a, 1b, 2a, 2b, etc"]
    [date :instant :one "the date time the lecture scheduled"]
    [topic :string :fulltext "the topic of the lecture"]
    [content :string :fulltext "all related content"]
    [contenturi :uri "the content uri, include slides, handouts"]
    [deliverable :string "which homework to due, any labs"]
    [videouri :uri "the video uri"]
    [wiki :uri "the discussion group, wiki and uri"]
    [readings :uri "the reading assignment for the topic"]
    [homework :ref :many "the homework of the lecture"]
    [comments :ref :many "feedback comments to the lecture"]))

; so questions or github project or online streaming course lecture
(defschema homework
  (part app)
  (fields
    [subject :enum subject "homework subject, math, art, reading, etc"]
    [title :string :indexed :fulltext]
    [content :string :fulltext]
    [author :ref :many "the author of the homework"]
    [uri :uri "uri of the homework, if any"]
    [lecture :ref :many "which course lecture this homework related to"]
    [difficulty :long "difficulty level, 5 star"]
    [popularity :long "how many people like this assignment "]
    [solved :long "how many kids solved the problem in total"]
    [topanswers :ref :many "a list of top answers"]
    [comments :ref :many "comments for the homework"]))  ; a list of answers with 


(defschema assignment
  (part app)
  (fields
    [homework :ref :one "one assignment to one child at a time. batch assignment later"]
    [lecture :ref :one "one assignment to one child to take the course"]
    [type :enum assignment-type "solve a homework or take a course"]
    [from :ref :one "assignment created from who"]
    [to :ref :many "make one assignment to one child, or many children ?"]
    [status :enum assignment-status "status of assignment"]
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
    [assignment :ref :one "one answer to one child assignment"]
    [author :ref :one "the author of this answer"]
    [answer :string :fulltext " the answer to the assignment"]
    [score :long "score of the answer"]
    [completetime :instant "the submit time"]
    [comments :ref :many "the comments tree for the answer"]))


; comment tree models conversation, engaging all participants, most important part!
(defschema comments
  (part app)
  (fields
    [author :ref :one "the author of the comments"]
    [content :string :fulltext "the body of a comment"]
    [comments :ref :one "which comments this comment is to, ref to comments itself"]
    [subject :ref :one "the subject comments made to, ref to person, homework, course, lecture entity"]
    [upvotes :long "how many upvotes"]))


; activity, links two entity
(defschema activity
  (part app)
  (fields
    [author :ref :indexed :one "who created the activity"]
    [name :string :one "activity name"]
    [type :enum activity-type "activity type"]
    [url :string :many "the url downloaded"]
    [appname :string :one "the app name"]
    [message :string :many "message content"]
    [from :ref :one "origin entity"]
    [to :ref :many "target entity"]
    [start :instant "start time of activity"]
    [end :instant "end time of activity"]))


(defn entity-attr
  "display all attributes of an entity by its id, passed in eid is in a list [eid]"
  [db eid]
  (let [e (d/entity db (first eid))
        attrs (keys e)
        tostr (reduce (fn [o c] (str o " " c "=" (c e))) (str (first eid) " = ") attrs)]
    ;(pprint/pprint tostr)
    tostr))


(defn create-schema
  "create schema using datomic-schema in db connection"
  [dbconn]
  ; turn all defparts macro statement into schema transaction
  (d/transact dbconn (build-parts d/tempid))
  ; turn all defschema macro statement into schema transaction
  (d/transact dbconn (build-schema d/tempid)))


(defn list-attr
  "list all attributes for ident, if no ident, list all"
  ([db]  ; db is (d/db conn)
    (let [eid (d/q '[:find ?attr :where [_ :db.install/attribute ?attr]] db)]
      (prn "list all attr " eid)
      (map (partial entity-attr db) eid)))
  ([db ident]
    (let [eid (d/q '[:find ?e :in $ ?attr :where [?e :db/ident ?attr]] db ident)]
      (map (partial entity-attr db) eid))))


