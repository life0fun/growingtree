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
; Deprecated !
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


;;===========================================================================
;; get all things multi method, return data is thing-vec. [{tuple1} {tuple2}]
;; (defmulti name docstring? attr-map? dispatch-fn & options)
;;===========================================================================
; defmulti needs a name and a dispatch fn, which rets value for dispatching
(defmulti get-things
  (fn [thing-type qpath] 
    thing-type))


(defmethod get-things
  :parent
  [type qpath]
  (let [parents (dda/find-parent qpath)]
    (prn "peer dda find parent " qpath parents)
    parents))


(defmethod get-things
  :child
  [type qpath]
  (let [children (dda/find-child qpath)]
    (prn "peer dda find children " qpath children)
    children))


(defmethod get-things
  :course
  [type qpath]
  (let [courses (dda/find-course qpath)]
    (prn "peer get all courses " qpath courses)
    courses))


(defmethod get-things
  :lecture
  [type qpath]
  (let [lectures (dda/find-lecture qpath)]
    (prn "peer get all lectures " qpath lectures)
    lectures))


(defmethod get-things
  :homework
  [type qpath]
  (let [homeworks (dda/find-homework qpath)]
    (prn "peer get all homeworks " qpath homeworks)
    homeworks))


(defmethod get-things
  :assignment
  [type qpath]
  (let [assignments (dda/find-assignment qpath)]
    (prn "peer get all assignments " qpath assignments)
    assignments))



;;======================================================
;; add things multi method
;; watch non ref-ed attr entity. :transact/bad-data Unable to resolve entity: rich
;;======================================================
(defmulti add-thing
  (fn [type details]
    type))


; add family
(defmethod add-thing
  :parent
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-parent details)
       ]
    (prn "peer add parent " type " details " details " result " result)
    result))


(defmethod add-thing
  :child
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-child details)
       ]
    (prn "peer add child " type " details " details " result " result)
    result))

(defmethod add-thing
  :family
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-family details)
       ]
    (prn "peer add family " type " details " details " result " result)
    result))

; watch non ref-ed attr entity. :transact/bad-data Unable to resolve entity: rich
(defmethod add-thing
  :assignment
  [type details]
  (let [author (:author details)
        result (dda/create-assignment details)
        ]  
    (newline)
    (prn "peer add thing " type " details " details " result " result)
    result))


;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"} 
(defmethod add-thing
  :course
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-course details)
       ]
    (prn "peer add thing " type " author " author " details " details " result " result)
    result))

;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"} 
(defmethod add-thing
  :homework
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-homework details)
       ]
    (prn "peer add thing " type " details " details " result ")
    details))



