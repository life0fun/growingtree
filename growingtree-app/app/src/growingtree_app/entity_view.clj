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
    (:require [domina :as dom]
              [domina.css :as dc]
              [domina.events :as de]
              [io.pedestal.app.render.push :as render]
              [io.pedestal.app.render.events :as events]
              [io.pedestal.app.render.push.templates :as templates]
              [io.pedestal.app.protocols :as p]
              [io.pedestal.app.messages :as msgs]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.render.push.handlers :as h]
              [io.pedestal.app.render.push.handlers.automatic :as auto]
              [growingtree-app.selector :as sel])
    (:require-macros [growingtree-app.html-templates :as html-templates]))


; this module defines how entity attributes maps to view map.
; for example, view div title maps fname of parents, and course title for course.

; Load templates macro.
(def templates (html-templates/growingtree-app-templates))


;;===============================================================
;; generate thing template based on thing type
;; when rendering node-create with thing-type and id, ret thing node div html
;; [:node-create [:main :all 0 :parents 17592186045505] :map]
;; [:node-create [:main :parents 1 :children 17592186045505] :map]
;; path = (:main :all 0 :parents 17592186045498) or 
;;        (:header :parents 17592186045498)
;;===============================================================
(defmulti thing-node-html
  (fn [path render]  ; the last segment of path
    (second (reverse path))))  


; dispatch by thing type, type is plural b/c sidebar list item name is plura.
(defmethod thing-node-html
  :parents
  [path render]
  (let [thingid (last path)
        templ (:thing-parent templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :children-class (str "children-" thingid)
                         :assignments-class (str "like-" thingid)
                         :likes-class (str "likes-" thingid)
                         :comments-class (str "comments-" thingid)
                         :followers-class (str "followers-" thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
    thing-div))


(defmethod thing-node-html
  :children
  [path render]
  (let [thingid (last path)
        templ (:thing-child templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :parents-class (str "parents-" thingid)
                         :courses-class (str "courses-" thingid)
                         :assignments-class (str "assignments-" thingid)
                         :comments-class (str "comments-" thingid)
                         :classmates-class (str "classmates-" thingid)})
        ]
    (.log js/console "thing-node-html " path)
    thing-div))


(defmethod thing-node-html
  :courses
  [path render]
  (let [thingid (last path)
        templ (:thing-course templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :lectures-class (str "lectures-" thingid)
                         :assignto-class (str "assignto-" thingid)
                         :comments-class (str "comments-" thingid)
                         :share-class (str "share-" thingid)
                         :enroll-class (str "enroll-" thingid)})
        ]
    (.log js/console "thing-node-html " path)
    thing-div))


(defmethod thing-node-html
  :lectures
  [path render]
  (let [thingid (last path)
        templ (:thing-lecture templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :homeworks-class (str "homeworks-" thingid)
                         :assignto-class (str "assignto-" thingid)
                         :comments-class (str "comments-" thingid)
                         :share-class (str "share-" thingid)
                         :enroll-class (str "enroll-" thingid)})
        ]
    (.log js/console "thing-node-html " path)
    thing-div))


(defmethod thing-node-html
  :homeworks
  [path render] 
  (let [thingid (last path)
        templ (:thing-homework templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :assignto-class (str "assignto-" thingid)
                         :comments-class (str "comments-" thingid)
                         :lectures-class (str "lectures-" thingid)
                         :share-class (str "share-" thingid)})
        ]
    (.log js/console "thing-node-html " path)
    thing-div))



(defmethod thing-node-html
  :assignments
  [path render]
  (let [thingid (last path)
        templ (:thing-assignment templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :answers-class (str "answers-" thingid)
                         :comments-class (str "comments-" thingid)
                         :submit-class (str "submit-" thingid)
                         :share-class (str "share-" thingid)})
        ]
    (.log js/console "thing-node-html " path)
    thing-div))



;;===============================================================
;; ret a view map for parent entity
;;===============================================================
(defn parent-view-value
  "ret a view map for parent entity"
  [value-map]
  (.log js/console "parent view value " (:name value-map) value-map)
  (assoc value-map :title (:name value-map)))

(defn child-view-value
  "ret a view map for child entity"
  [value-map]
  (assoc value-map :title (:name value-map)))

(defn course-view-value
  "ret a view map for course entity"
  [value-map]
  value-map)


(defn lecture-view-value
  "ret a view map for lecture entity"
  [value-map]
  value-map)


(defn homework-view-value
  "ret a view map for lecture entity"
  [value-map]
  value-map)


(defn assignment-view-value
  "ret a view map for lecture entity"
  [value-map]
  value-map)


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

