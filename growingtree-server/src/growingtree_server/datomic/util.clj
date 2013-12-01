;; datomic data accessor
(ns growingtree-server.datomic.util
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d]))


;; util fns for attr convertion between map and entity attr.

(defn select-values [map ks]
  (reduce #(conj %1 (%2 map)) [] ks))

; convert hash set to vec as cljs no hash set
(defn select-values [map ks]
  (reduce (fn [tot curk]
            (let [curv (curk map)]
              (if (= clojure.lang.PersistentHashSet (type curv))
                (conj tot (vec curv))
                (conj tot curv))))
          []
          ks))

(defn select-values-nonil [m ks] 
  (reduce #(if-let [v (%2 m)] (conj %1 v) %1) [] ks))