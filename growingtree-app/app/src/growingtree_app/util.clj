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


; pad time with leading 0 upon single digit.
(defn format-time 
  "pad time with leading 0 upon single digit"
  [d]
  (let [pad (fn [n] (if (< n 10) (str "0" n) (str n)))]
    (str (pad (.getHours d)) ":"
         (pad (.getMinutes d)) ":"
         (pad (.getSeconds d)))))


; get the namespace of thing 
(defn thing-ident
  "get thing type of the entity, the namespace, or ident of entity. remove :db/id"
  [entity]
  (let [e (dissoc entity :db/id)  ; remove :db/id
        ident (keyword (namespace (ffirst e)))]
    ident))

; update enum, only update when enum key present.
; thing-val = {:course/title "aa", :course/author "bb", :course/type "math", }
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
        new-val)
      thing-val)))
    
