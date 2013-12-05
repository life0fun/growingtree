(ns growingtree-server.xpathqrule
  (:require [clojure.string :as str]
            [clojure.pprint :refer :all])
  (:import [java.io FileReader]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis]) ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format]
            [clj-time.local]))  ; datomic data accessor

; this ns defines mapping from xpath to query rules.

(def path-rule-map 
  {
    (str [:parents :children]) '[[?e :child/parent ?p]]
  })


(defmulti getrules
  (fn [target xpath]
    target))


; all rules for getting child entity
(defmethod getrules 
  :child
  [target xpath]
  (let [pathkeys (str (reduce conj [] (take-nth 2 xpath)))  ; convert to string
        rules (get path-rule-map pathkeys)]  ; take every second item from xpath
    (prn "xpathqrule get rules " target xpath pathkeys rules)
  ))