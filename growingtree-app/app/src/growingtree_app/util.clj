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
