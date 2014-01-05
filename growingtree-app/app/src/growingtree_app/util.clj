; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns ^:shared growingtree-app.util
    (:require [io.pedestal.app.util.platform :as platform]))

(defn random-id []
  (str (.getTime (platform/date)) "-" (rand-int 1E6)))


; map f to every nth element of a sequence
(defn map-every-nth [f coll n]
  (map-indexed #(if (zero? (mod %1 n)) (f %2) %2) coll))


; pad time with leading 0 upon single digit.
(defn pad-time 
  "pad time with leading 0 upon single digit"
  [d]
  (let [pad (fn [n] (if (< n 10) (str "0" n) (str n)))]
    (str (pad (.getHours d)) ":"
         (pad (.getMinutes d)) ":"
         (pad (.getSeconds d)))))

; format a unix epoch time of long, in seconds, which we get from (.unix (js/moment))
; back to moment object, and format to readable
; moment constructor takes 
(defn format-time
  [unix-epoch]
  (let [m (js/moment (* 1000 unix-epoch))
        time-str (.format m)]
    time-str))

; ret the keyword for thing attr
(defn thing-attr-keyword
  [thing-type attr-name]
  (keyword (str (name thing-type) "/" attr-name)))


; get the namespace of thing 
(defn thing-ident
  "get thing type of the entity, the namespace, or ident of entity. remove :db/id"
  [entity]
  (let [e (dissoc entity :db/id)  ; remove :db/id
        ident (keyword (namespace (ffirst e)))]
    ident))


; update enum, only update when enum key present.
; thing-val = {:course/title "aa", :course/author "bb", :course/type "math" }
(defn update-enum
  "update in status enum value from string to keyword"
  [thing-val thing-type keyname enum]
  (let [schema-key (keyword (str (name thing-type) "/" keyname))]
    (if (contains? thing-val schema-key)
      (let [enum-key (str (name thing-type) "." keyname)
            enum-fn (fn [v & args] (keyword (str enum-key "/" v)))
            new-val (if enum
                      (-> thing-val
                          (update-in [schema-key] enum-fn))
                      (-> thing-val
                          (update-in [schema-key] keyword)))
            ]
        new-val)  ; return updated new val if value map contains schema key
      thing-val)))


; convert time stamp field to unix epoch
; start time format 2013-02-08 09:30
(defn update-time
  "update in time value from string to keyword"
  [thing-map thing-type keyname]
  (let [schema-key (keyword (str (name thing-type) "/" keyname))]
    (if (contains? thing-map schema-key)
      (let [update-fn (fn [v & args] (.unix (js/moment v)))
            new-map (-> thing-map
                        (update-in [schema-key] update-fn))
            ]
        new-map)  ; return updated new val if value map contains schema key
      thing-map)))
  

; get thing value from thing map by name of the attr, regardless of its namespace.
; e.g., get title from any of namespace, :course/title, :lecture/title, etc
(defn thing-val-by-name
  "get thing val by name, within any namespace"
  [thing-map attr-name]
  ; map entry after filter rets [key val] vector
  (-> (filter (fn [entry]
                (= (name (key entry)) attr-name))
              thing-map)
      (first)))  ; filter ret a list



