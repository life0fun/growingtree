;; datomic data accessor
(ns growingtree-server.datomic.course
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json]
            [io.pedestal.service.log :as log])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.family :as family]
            [growingtree-server.datomic.dbschema :as dbschema]
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


(declare create-lecture)
(declare create-course-coding)
(declare find-progress)

(declare populate-course-refed-entity)
(declare populate-lecture-refed-entity)
(declare populate-course-enrollment-refed-entity)
(declare populate-person-enrollment-refed-entity)
(declare populate-progress-refed-entity)

; schema attr-name value type map for parent schema and child schema
(def course-schema (assoc (list-attr :course) :db/id :db.type/id))
(def lecture-schema (assoc (list-attr :lecture) :db/id :db.type/id))
(def enrollment-schema (assoc (list-attr :enrollment) :db/id :db.type/id))
(def progress-schema (assoc (list-attr :progress) :db/id :db.type/id))
(def progressstep-schema (assoc (list-attr :progressstep) :db/id :db.type/id))


; course does not have lecture, use in-bound query from lecture to course.
; [ rule head = (rule-name rule-arg*)  rule-body = [where clause] ]
(def get-course-by
  '[[(:all ?e ?val) [?e :course/title]]   ; select all
    [(:author ?e ?val) [?e :course/author ?val]]

    [(:type ?e ?val) [?e :course/type ?val]]
    [(:content ?e ?val) [?e :course/content ?val]]
    [(:title ?e ?val) [?e :course/title ?val]]

    [(:lecture ?e ?val) [?e :lecture/course ?val]]
    [(:question ?e ?val) [?e :question/origin ?val]]
    [(:assignment ?e ?val) [?e :assignment/origin ?val]]
  ])


; rule set for get parent by. rule name is the parent thing type.
(def get-lecture-by
  '[[(:all ?e ?val) [?e :lecture/title]]   ; select all
    [(:title ?e ?val) [?e :lecture/title ?val]]
    [(:author ?e ?val) [?e :lecture/author ?val]]
    [(:type ?e ?val) [?e :lecture/type ?val]]
    [(:start ?e ?val) [?e :lecture/start ?val]]
    [(:content ?e ?val) [?e :lecture/content ?val]]

    [(:course ?e ?val) [?e :lecture/course ?val]]
    [(:question ?e ?val) [?e :question/origin ?val]]
    [(:assignment ?e ?val) [?e :assignment/origin ?val]]
    [(:asnswer ?e ?val) [?e :asnswer/origin ?val]]
  ])


; given a course entity, populate progress entity that origin to the course.
; assoc progress entity to pseudo :course/progress attr.
(defn populate-course-progress
  [entity author]
  (let [course-id (:db/id entity)
        progress (find-progress :course course-id author)
        ]
    (assoc entity :course/progress progress)))


(defn populate-course-refed-entity
  [entity author]
  (let [projkeys (keys course-schema)]
      (as-> entity e
        (select-keys e projkeys)
        (populate-course-progress e author)
        (util/assoc-refed-many-entities :course/author e)
        (util/add-upvote-attr e)
        (util/add-numcomments-attr e))
  ))


; find a course, thread thru project keys, and fill :course/likes
; details {:body [:all-things [:all 0 :course]], :data {:author "rich-dad"}}}
(defn find-course
  "find course by query path"
  [qpath details]
  (let [author (get-in details [:data :author])
        author "rich-son"
        courses (->> (util/get-qpath-entities qpath get-course-by)
                     (map #(populate-course-refed-entity % author) )
                     (map #(util/add-navpath % qpath) ))  ; :qpath ["all" 0 "course" 17592186045425],
        ]
    (doseq [e courses]
      (log/info "course --> " e))
    courses))


; for now, all courses are created and lectured by person
(defn create-course
  "create a course with details "
  [details]
  (let [author-name (or (:course/author details) (:author details))
        author-id (:db/id (find-by :person/title author-name))
        entity (-> details
                   (select-keys (keys course-schema))
                   (assoc :course/author author-id)  ; replace input :course/author
                   (util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                   (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (log/info "create course entity " (:author details) author-id entity)
    [entity]))


;;===============================================================
; lecture
;;===============================================================
; find a course
(defn find-lecture
  "find lecture by query path "
  [qpath]
  (let [lectures (->> (util/get-qpath-entities qpath get-lecture-by)
                      (map populate-lecture-refed-entity)
                      (map #(util/add-navpath % qpath) ))
        ]
    (doseq [e lectures]
      (log/info"lecture --> " e))
    lectures))


(defn populate-lecture-refed-entity
  [entity]
  (let [projkeys (keys lecture-schema)]
      (as-> entity e
        (select-keys e projkeys)
        (util/assoc-refed-many-entities :lecture/author e)
        (util/add-upvote-attr e)
        (util/add-numcomments-attr e))
  ))


(defn get-lecture-ids-by-course-id
  "get lecture by course"
  [course-id]
  (let [entities (dbconn/find-eids :lecture/course course-id)]
    (log/info "get lecture by course id "(map first entities))
    (map first entities)))


; for now, all courses are created and lectured by person
(defn create-lecture
  "create a lecture with details "
  [details]
  (let [author-id (:db/id (find-by :person/title (:author details)))
        course (:lecture/course details)
        course-id (if (= java.lang.String (type course))
                    (:db/id (find-by :course/title (:lecture/course details)))
                    course)

        entity (-> details
                   (select-keys (keys lecture-schema))
                   (assoc :lecture/author author-id)  ; replace input :lecture/author
                   (assoc :lecture/course course-id)  ; replace input :lecture/author
                   ;(util/to-datomic-attr-vals)   ; coerce to datomic value for insertion
                   (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (log/info "create lecture entity " author-id course-id entity)
    (log/info "submit create lecture trans " trans)
    [entity]))


;;===================================================================================
; enrollment
; to un-enroll, [:db/retract entity-id attribute value]
; [:db.fn/retractEntity entity-id], retract entity recursively retract inbound refs.
;;===================================================================================
; rule set for get parent by. rule name is the parent thing type.
(def get-enrollment-by
  '[[(:all ?e ?val) [?e :enrollment/title]]   ; select all
    [(:title ?e ?val) [?e :enrollment/title ?val]]
    [(:course ?e ?val) [?e :enrollment/course ?val]]
    [(:lecture ?e ?val) [?e :enrollment/lecture ?val]]
    [(:parent ?e ?val) [?e :enrollment/person ?val]]
    [(:child ?e ?val) [?e :enrollment/person ?val]]
  ])


; for course, enrollment can be attendee of a course; for person, find courses he enrolled into.
; for [:course 1 :enrollment], we should show attendee of the course
; however, for [:child 1 :enrollment], we should show course, not attendee.
(defn find-enrollment
  "find all person that enrolls to the course by query path "
  [qpath]
  (log/info "find enrollment " qpath " entities: " (util/get-qpath-entities qpath get-enrollment-by))
  (let [result (if (#{:parent :child} (first qpath))
                (->> (util/get-qpath-entities qpath get-enrollment-by)
                     (map populate-person-enrollment-refed-entity)
                     (map #(util/add-navpath % qpath) ))
                (->> (util/get-qpath-entities qpath get-enrollment-by)
                     ; use mapcat to concat list of person in a enrollment group.
                     (mapcat populate-course-enrollment-refed-entity)
                     (map #(util/add-navpath % qpath) )))
        ]
    (doseq [e result]
      (log/info "enrollment --> " e))
    result))


; course enrollments outbound refed entity contains a set of person,
; map rets a list, need to be mapcat-ed.
(defn populate-course-enrollment-refed-entity
  [entity]
  (let [person-keys (keys (assoc (list-attr :person) :db/id :db.type/id))]
    (log/info "populate-course-enrollment-refed-entity " entity)
    (as-> entity e
      (:enrollment/person e)  ; enrollment person set -> e
      (filter identity e)     ; filter nil in person set
      (map (comp get-entity :db/id) e)  ; person id to person entity 
      (map #(select-keys % person-keys) e))  ; 
  ))

; one person enrollment contains one person one course entity.
(defn populate-person-enrollment-refed-entity
  [entity]
  (let [course-keys (keys (assoc (list-attr :course) :db/id :db.type/id))]
    (log/info "populate-person-enrollment-refed-entity " entity)
    (as-> entity e
      ((comp get-entity :db/id identity :enrollment/course) e)
      (populate-course-refed-entity e))
  ))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; for now, all courses are created and lectured by person
; using cond-> threading, the same as threading to anonymous (-> state (#(if true (inc %) %))
(defn create-enrollment
  "create a enrollment with details "
  [details]
  (log/info "create-enrollment " details  "schema " (keys enrollment-schema))
  (let [course-id (:enrollment/course details)
        ; automatically enroll to all lectures in course
        ; lecture-id (:enrollment/lecture details)
        enrollment (if course-id
                      (dbconn/find-by :enrollment/course course-id))
                      ; (dbconn/find-by :enrollment/lecture lecture-id))
        enrollment-id (if enrollment 
                        (:db/id enrollment) 
                        (d/tempid :db.part/user))
        lecture-id (into #{} (get-lecture-ids-by-course-id course-id))
        person (util/tagsInputs (:enrollment/person details))
        person-id (->> (map #(family/get-person-by-title %) person)
                       (map :db/id )
                       (filter identity))
        group-person (->> (mapcat #(family/get-group-members %) person)
                          (map :db/id )
                          (filter identity))
        all-person (set (concat person-id group-person))
        entity (fn [person-id]
                (cond-> {:db/id enrollment-id
                         :enrollment/person person-id
                         :enrollment/title (:enrollment/title details)
                         :enrollment/content (:enrollment/content details)
                         :enrollment/url (:enrollment/url details)
                         :enrollment/email (:enrollment/email details)}
                        ; using cond-> expr test/form pairs. if predicate is true, exec, continue.
                        lecture-id (assoc :enrollment/lecture lecture-id)
                        course-id (assoc :enrollment/course course-id)
                  ))
        enrolls (map entity all-person)
        trans (submit-transact enrolls)  ; transaction is a list of entity
      ]
    (log/info "create enrollment " enrolls " trans " trans)
    enrolls))


;;===================================================================================
; progress rule-set. Note progress always carry author-id filter.
; we have two rules share the same name :title. The :title rule will be true
; if _either_ of the :title rule is true. this is logic OR.
;;===================================================================================
; rule set for get parent by. rule name is the parent thing type.
(def get-progress-by
  '[[(:all ?e ?val) [?e :progress/title]]   ; rule-name :all = thing-type.
    [(:author ?e ?val) [?e :progress/author ?val]]
    [(:title ?e ?t ?aid) [(fulltext $ :progress/title ?t) [[?e ?text]]]
                         [?e :progress/author ?aid]]
    [(:title ?e ?t ?aid) [(fulltext $ :progressstep/title ?val) [[?t ?text]]]
                         [?t :origin ?e]  ; output to ?t
                         [?e :progress/author ?aid]]
    [(:course ?e ?cid ?aid) [?e :progress/origin ?cid]
                            [?e :progress/author ?aid]]
  ])

; one person enrollment contains one person one course entity.
(defn populate-progress-refed-entity
  [entity]
  (let [projkeys (keys progress-schema)]
    (log/info "populate-progress-refed-entity " entity)
    (as-> entity e
      (select-keys e projkeys)
      (util/assoc-refed-many-entities :progress/author e)
      (util/assoc-refed-many-entities :progress/steps e)  ; touch to get its attrs
      (util/add-upvote-attr e)
    )
  ))

; for course, progress can be attendee of a course; for person, find courses he enrolled into.
; for [:course 1 :progress], we should show attendee of the course
; however, for [:child 1 :progress], we should show course, not attendee.
(defn find-progress
  "find all person that enrolls to the course by query path "
  ([qpath details]
    (log/info "find progress " qpath " details " details)
    (let [[rule-name course-id _] qpath
          author (get-in details [:data :author])]
      (find-progress rule-name course-id author)))

  ([rule-name course-id author]
    (let [rule (list rule-name '?e '?cid '?aid)
          author-id (if (= java.lang.String (class author))
                      (:db/id (family/get-person-by-title author))
                      author)
          rule-args [17592186045484 17592186045427]  ; [course-id, author-id]
          rule-args [course-id author-id]  ; [course-id, author-id]
          result (->> (util/get-entities-by-rule rule get-progress-by rule-args)
                    (map populate-progress-refed-entity))
        ]
    (doseq [e result]
      (log/info "progress --> " e))
    result))
  )

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; {:db/id , :progress/tasks #db/id[:db.part/user -1000000], :progress/origin , :progress/author 17592186045427, :progress/title "progression of flute 101"}}
; when progress :db/id nil, populate all attrs. For update progress task, populate ONLY tasks id.
(defn upsert-progress
  [progress task-id]
  (let [author-id (:db/id (find-by :person/title (:progress/author progress)))
        course-id (:progress/origin progress)
        progress-id (:db/id progress)
        ; populate only progress/tasks when inserting tasks.
        progress (if progress-id
                    (-> {:progress/tasks task-id}
                        (assoc :db/id progress-id))
                    ; populate all progress attrs when insert a new progress.
                    (-> progress
                      (assoc :progress/tasks task-id)
                      (assoc :progress/author author-id)
                      (assoc :db/id (d/tempid :db.part/user))))
       ]
    (log/info "upsert-progress " progress)
    progress))


; {:progressstep/origin {:db/id nil ? :progress/origin 17592186045484, :progress/author "", :progress/title "progression of flute 101"}, 
;  :progressstep/start 1412473718, :progressstep/title "Grade I", :progressstep/author "rich-son", :progressstep/status "half"}
(defn create-progress
  "create a progress with details "
  [details]
  (log/info "create-progress " details  "schema " (keys progress-schema))
  (let [task-id (d/tempid :db.part/user)
        ; from progressstep/origin, we get the progress entity.
        progress (as-> (:progressstep/origin details) p
                       (upsert-progress p task-id))
        progress-step (-> (dissoc details :progressstep/origin)
                          (select-keys (keys progressstep-schema))
                          (assoc :progressstep/origin (:db/id progress))
                          (assoc :db/id task-id))
        inc-rank [:inc-rank (:db/id progress-step) (:db/id progress)
                             :progress/steps :progressstep/order]
        trans (submit-transact [progress-step progress inc-rank])
       ]
    (log/info "create progress " progress " task " progress-step)
  ))