(ns growingtree-server.peer
  (:require [clojure.string :as str]
            [clojure.pprint :refer :all])
  (:import [java.io FileReader]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis]) ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format]
            [clj-time.local])
  (:require [cheshire.core :refer :all])  ; json converter
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


;
; after create db with uri, create schema first.
(defn init-db
  []
  (dda/create-schema))


(defn add-family
  []
  (dda/add-family))


(defn get-all-parents
  "no filter, ret a list of all parent names str joined with new line"
  []
  (let [parents (dda/list-parent)
        names (str/join "\n" (map :parent/fname parents))]
    (prn "get all parent name " names)
    names))


(defn get-all-courses
  "no filter, ret a list of all course titles str joined with new line"
  []
  (let [courses (dda/find-course)]
    (prn "get courses by subject " courses)
    (generate-string (first courses))))


(defn get-things
  "get a list of things based thing type"
  [type]  ; type must be keyword when calling.
  (prn "get things " type)
  (case type
    :parents (get-all-parents)
    :courses (get-all-courses)
    "default"))







