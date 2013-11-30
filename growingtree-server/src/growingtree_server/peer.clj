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
; usage: data (map (partial entity->map coursekeys) courses)
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

; can ot de-ref children link, as it will cause infinite circular de-ref !
(defn get-all-parents
  "no filter, ret a list of all parents entity maps"
  []
  (let [parents (dda/list-parent)]
    (prn "peer get all parents " parents )
    ;(prn "get all parents data " data)
    parents))

; get all children
(defn get-all-children
  "no filter, ret all children that has parents"
  []
  (let [children (dda/find-children)]
    (prn "peer get all children " children )
    children))


; need to convert datomic EntityMap to simple map string so we can stream text json.
(defn get-all-courses
  "no filter, ret a list of all course titles"
  []
  (let [courses (dda/find-course)
        coursekeys [:db/id :course/title :course/overview :course/subject]
        ; a lazy map list will result in cljs.core.PersistentVector
        
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
        assignmentkeys [:db/id :assignment/homework :assignment/lecture :assignment/hint :assignment/answer]
        ; a lazy map list will result in cljs.core.PersistentVector
        data (map #(-> % (select-keys assignmentkeys)) assignments)
        ]
    ;(prn "all assignments " (select-keys (first assignments) [:assignment/homework]) data)
    (prn "all assignments " data)
    data))


(defn get-things
  "get a list of things based thing type"
  [type]  ; type must be keyword when calling.
  (prn "peer get things " type)
  (case type
    :parents (get-all-parents)
    :children (get-all-children)
    :courses (get-all-courses)
    :lectures (get-all-lectures)
    :homeworks (get-all-homeworks)
    :assignments (get-all-assignments)
    "default"))


;;======================================================
; type:newthing {:action :newthing, :type "course", :title "", :content "", :user "rich"} 
; add new things, subtype, eventually, should merge with add-things
(defmulti add-new-things
  (fn [new-thing-type details]
    new-thing-type))

(defmethod add-new-things
  :course
  [type details]
  (let [user (:user details)
        result (dda/add-family user)]
    (prn "adding new family " user " transact " result)
    result))


;; add things
(defmulti add-things 
  (fn [type data]
    type))

; watch non ref-ed attr entity. :transact/bad-data Unable to resolve entity: rich
(defmethod add-things
  :assignments
  [type data]
  (let [;user (:user data)
        ;to (:toid data)
        hwid (:hwid data)
        hint (:hint data)]
    (dda/create-assignment hwid {:hint hint})))


;; type:newthing {:action :newthing, :type "course", :title "", :content "", :user "rich"} 
(defmethod add-things
  :newthing
  [type data]
  (let [thing-type (keyword (:type data))  ; thing-type value is json string.
       ]
    (add-new-things thing-type data)))





