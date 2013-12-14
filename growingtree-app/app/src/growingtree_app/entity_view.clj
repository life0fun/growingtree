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
              [growingtree-app.selector :as sel]
              [growingtree-app.util :as util])
    (:require-macros [growingtree-app.html-templates :as html-templates]))


; this module defines how entity attributes maps to view map.
; for example, view div title maps fname of parents, and course title for course.

; Load templates macro.
(def templates (html-templates/growingtree-app-templates))


(def children-prefix "children-")

(def assignto "assignto-")
(def assign-form "assign-form-")
(def assignto-name "assignto-name-")
(def assignto-hint "assignto-hint-")

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
    (.log js/console (str "thing-node-html " path))
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
                         :comments-class (str "comments-" thingid)
                         :share-class (str "share-" thingid)
                         :assignto-class (str assignto thingid)
                         :assign-form-class (str assign-form thingid)
                         :enroll-class (str "enroll-" thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
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
                         :comments-class (str "comments-" thingid)
                         :assignto-class (str assignto thingid)
                         :assign-form-class (str assign-form thingid)
                         :share-class (str "share-" thingid)
                         :enroll-class (str "enroll-" thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
    thing-div))


;; ------------------------------------------------------------------------
;; instantiate homework thing template and gen html for rendering
;; shall use selector for hardcoded dom class name
;; ------------------------------------------------------------------------
(defmethod thing-node-html
  :homeworks
  [path render] 
  (let [thingid (last path)
        templ (:thing-homework templates)
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :lectures-class (str "lectures-" thingid)
                         :comments-class (str "comments-" thingid)
                         :share-class (str "share-" thingid)
                         :assignto-class (str assignto thingid)
                         :assign-form-class (str assign-form thingid)
                         })
        ]
    (.log js/console (str "thing-node-html " path thingid))
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
    (.log js/console (str "thing-node-html " path))
    thing-div))



;;===============================================================
;; ret a view map for thing type
;;===============================================================
(defmulti thing-view
  (fn [path entity]
    (second (reverse path))))  


(defmethod thing-view
  :parents
  [path entity]
  (assoc entity :title (:parent/name entity)))


(defmethod thing-view
  :children
  [path entity]
  (assoc entity :title (:child/name entity)))


(defmethod thing-view
  :courses
  [path entity]
  (assoc entity :title (:course/title entity)))


(defmethod thing-view
  :lectures
  [path entity]
  (assoc entity :title (:lecture/title entity)))


(defmethod thing-view
  :homeworks
  [path entity]
  (assoc entity :title (:homework/title entity)))


; embeded ref object can be de-refed directly.
(defmethod thing-view
  :assignments
  [path entity]
  (let [hmwk (:assignment/homework entity)
        ident (util/thing-ident hmwk)
        titlekey (keyword (str (name ident) "/title"))
        title (titlekey hmwk)
        ]
    (assoc entity :title title)))

