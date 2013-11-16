; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns ^:shared growingtree-app.entity-view
    (:require [io.pedestal.app.util.platform :as platform]))


; this module defines how entity attributes maps to view map.
; for example, view div title maps fname of parents, and course title for course.


; ret a view map for parent entity
(defn parent-view-value
  "ret a view map for parent entity"
  [value-vec]
  (hash-map :title (map :parent/fname value-vec)
            :gender (map :parent/gender value-vec)
            :popularity (map :parent/popularity value-vec)))

(defn child-view-value
  "ret a view map for child entity"
  [value-vec]
  (hash-map :title (map :child/fname value-vec)
            :gender (map :child/gender value-vec)
            :popularity (map :child/popularity value-vec)))

(defn course-view-value
  "ret a view map for course entity"
  [value-vec]
  (hash-map :title (map :course/title value-vec)
            :popularity (map :course/popularity value-vec)))


(defn view-value
  "map entity value vectors to view value vector based on thing type"
  [path value-vec]
  (let [type (last path)]  ; nav type is plural, db schema is singular
    (case type
      :parents (parent-view-value value-vec)
      :children (child-view-value value-vec)
      :courses (course-view-value value-vec)
      "default"))) 
