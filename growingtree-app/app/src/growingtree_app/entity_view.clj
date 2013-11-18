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
  [value-map]
  (hash-map :id (:db/id value-map)
            :title (:parent/fname value-map)
            :gender (:parent/gender value-map)
            :popularity (:parent/popularity value-map)))

(defn child-view-value
  "ret a view map for child entity"
  [value-map]
  (hash-map :id (:db/id value-map)
            :title (:child/fname value-map)
            :gender (:child/gender value-map)
            :popularity (:child/popularity value-map)))

(defn course-view-value
  "ret a view map for course entity"
  [value-map]
  (hash-map :id (:db/id value-map)
            :title (:course/title value-map)
            :popularity (:course/popularity value-map)))


(defn lecture-view-value
  "ret a view map for lecture entity"
  [value-map]
  (hash-map :id (:db/id value-map)
            :title (:lecture/topic value-map)
            :uri (:lecture/videouri value-map)
            :popularity (:lecture/popularity value-map)))


(defn homework-view-value
  "ret a view map for lecture entity"
  [value-map]
  (hash-map :id (:db/id value-map)
            :title (:homework/content value-map)
            :content (:homework/content value-map)
            :popularity (:homework/popularity value-map)))


(defn assignment-view-value
  "ret a view map for lecture entity"
  [value-map]
  (hash-map :id (:db/id value-map)
            :title (:assignment/homework value-map)
            :content (:assignment/lecture value-map)
            :popularity (:assignment/popularity value-map)))


(defn view-value
  "map entity value vectors to view value vector based on thing type"
  [path value-map]
  (let [type (last path)]  ; nav type is plural, db schema is singular
    (case type
      :parents (parent-view-value value-map)
      :children (child-view-value value-map)
      :courses (course-view-value value-map)
      :lectures (lecture-view-value value-map)
      :homeworks (homework-view-value value-map)
      :assignments (assignment-view-value value-map)
      "default"))) 
