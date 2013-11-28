(ns growingtree-server.peer
  (:require [clojure.string :as str]
            [clojure.pprint :refer :all])
  (:import [java.io FileReader]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis]) ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format]
            [clj-time.local])
  (:require [growingtree-server.datomic.dda :as dda])  ; datomic data accessor
  )


; (defn -main [& args]
;   (case (first args)
;     "help" (doall (map prn help-info))
;     "create-schema" (dda/create-schema)
;     "list-schema" (dda/list-attr (second args))
;     "show-entity" (dda/show-entity-by-id (read-string (last args)))
;     "list-parent" (dda/list-parent)
;     "add-family" (dda/add-family)
;     "insert-child" (dda/insert-child (read-string (last args)))
;     "find-children" (dda/find-children)
;     "find-parent" (dda/find-parent (second args) (last args))
;     "find-by-name" (dda/find-by-name (second args))
;     "timeline" (dda/timeline (read-string (second args)) (last args))
;     "person-timeline" (dda/person-timeline (read-string (second args)))
;     "create-homework" (dda/create-homework)
;     "find-homework" (dda/find-homework)
;     "create-assignment" (dda/create-assignment)
;     "find-assignment" (dda/find-assignment)
;     "fake-comment" (dda/fake-comment)
;     "find-comment" (dda/find-comment)
;     "find-answer" (dda/find-answer)
;     "submit-answer" (dda/submit-answer (read-string (second args)) (read-string (last args)))
;     "create-course-lecture" (dda/create-course-and-lecture)
;     "find-course" (dda/find-course)
;     "find-lecture" (dda/find-lecture)
;     "add-course-lecture" (dda/add-course-lecture (read-string (second args)) (read-string (last args)))
;     "rm-course-lecture" (dda/rm-course-lecture (read-string (second args)) (read-string (last args)))
;     (doall (map prn help-info))))


;; datomic EntityMap 
; query result is datomic entity, we touch the entity to get all entity entries.
; server route interceptor converts datomic entity to json string to sent to client.
; when json-response coerce datomic entity to json string, it recursively resolve each
; attribute. this will cause infinit loop when entity has bi-directional reference attributes.
; to avoid that, we need to only project none circular ref entity attributes.


;
; after create db with uri, create schema first.
(defn init-db
  []
  (dda/create-schema))


; project non-circular ref attrs of datomic entityMap to simple map to avoid infinit loop in json stringify
(defn entity->map 
  "given a list of attributes in convert-data, find their values from entity and put as map attr"
  [entity-keys entity]
  (reduce (fn [m attr]
            (if (keyword? attr)
              (if-let [v (attr entity)]
                (assoc m attr v)
                m)
              (let [[attr conv-fn] attr]
                (if-let [v (attr entity)]
                  (assoc m attr (conv-fn v))
                  m))))
          {}
          entity-keys))


;; -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

(defn add-family
  []
  (dda/add-family))

(defn get-all-parents
  "no filter, ret a list of all parents entity maps"
  []
  (let [parents (dda/list-parent)
        parentkey [:db/id :parent/fname :parent/lname :parent/age :parent/email]
        ;data (map (partial entity->map parentkey) parents)
        data (map #(-> % (select-keys parentkey)) parents)]
    (prn "get all parents entity " parents )
    (prn "get all parents data " data)
    data))

; get all children
(defn get-all-children
  "no filter, ret all children that has parents"
  []
  (let [children (dda/find-children)
        childrenkeys [:db/id :child/fname :child/lname :child/age]
        ;data (map (partial entity->map childrenkeys) children)
        data (map #(-> % (select-keys childrenkeys)) children)
        ]
    (prn "get all children map " data)
    data))


; need to convert datomic EntityMap to simple map string so we can stream text json.
(defn get-all-courses
  "no filter, ret a list of all course titles"
  []
  (let [courses (dda/find-course)
        coursekeys [:db/id :course/title :course/overview :course/subject]
        ; a lazy map list will result in cljs.core.PersistentVector
        ;data (map (partial entity->map coursekeys) courses)
        data (map #(-> % (select-keys coursekeys)) courses)
        ]
    (prn "all courses " data)
    data))


; need to convert datomic EntityMap to simple map string so we can stream text json.
(defn get-all-lectures
  "no filter, ret a list of all lecture titles"
  []
  (let [lectures (dda/find-lecture)
        lecturekeys [:db/id :lecture/topic :lecture/content]
        ; a lazy map list will result in cljs.core.PersistentVector
        ;data (map (partial entity->map lecturekeys) lectures)
        data (map #(-> % (select-keys lecturekeys)) lectures)
        ]
    (prn "all lectures " data)
    data))


(defn get-all-homeworks
  "no filter, ret a list of all homeworks"
  []
  (let [homeworks (dda/find-homework)
        homeworkkeys [:db/id :homework/title :homework/content]
        ; a lazy map list will result in cljs.core.PersistentVector
        ;data (map (partial entity->map homeworkkeys) homeworks)
        data (map #(-> % (select-keys homeworkkeys)) homeworks)
        ]
    (prn "all homeworks " data)
    data))


(defn get-all-assignments
  "no filter, ret a list of all assignments"
  []
  (let [assignments (dda/find-assignment)
        assignmentkeys [:db/id :assignment/homework :assignment/lecture]
        ; a lazy map list will result in cljs.core.PersistentVector
        ;data (map (partial entity->map assignmentkeys) assignments)
        data (map #(-> % (select-keys assignmentkeys)) assignments)
        ]
    (prn "all assignments " (select-keys (first assignments) [:assignment/homework]) data)
    data))


(defn get-things
  "get a list of things based thing type"
  [type]  ; type must be keyword when calling.
  (prn "get things " type)
  (case type
    :parents (get-all-parents)
    :children (get-all-children)
    :courses (get-all-courses)
    :lectures (get-all-lectures)
    :homeworks (get-all-homeworks)
    :assignments (get-all-assignments)
    "default"))







