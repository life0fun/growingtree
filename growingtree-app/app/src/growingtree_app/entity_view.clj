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
; for example, view div title maps fname of persontitleand course title for course.

; Load templates macro.
(def templates (html-templates/growingtree-app-templates))

(defn parent-class [thing-id] (str "parent-" thing-id))
(defn child-class [thing-id] (str "child-" thing-id))
(defn course-class [thing-id] (str "course-" thing-id))
(defn lecture-class [thing-id] (str "lecture-" thing-id))
(defn question-class [thing-id] (str "question-" thing-id))
(defn assignment-class [thing-id] (str "assignment-" thing-id))
(defn comment-class [thing-id] (str "comments-" thing-id))
(defn share-class [thing-id] (str "share-" thing-id))
(defn answer-class [thing-id] (str "answer-" thing-id))
(defn follower-class [thing-id] (str "follower-" thing-id))
(defn classmate-class [thing-id] (str "classmate-" thing-id))
(defn like-class [thing-id] (str "like-" thing-id))
(defn enroll-class [thing-id] (str "enroll-" thing-id))
(defn schedule-class [thing-id] (str "schedule-" thing-id))

(defn assignto-class [thing-id] (str "assignto-" thing-id))
(defn assign-form-class [thing-id] (str "assign-form-" thing-id))
(defn assignto-name-class [thing-id] (str "assignto-name-" thing-id))
(defn assignto-hint-class [thing-id] (str "assignto-hint-" thing-id))
(defn submit-class [thing-id] (str "submit-" thing-id))

(defn add-child-class [thing-id] (str "add-child-" thing-id))
(defn add-lecture-class [thing-id] (str "add-lecture-" thing-id))
(defn add-question-class [thing-id] (str "add-question-" thing-id))
(defn add-comment-class [thing-id] (str "add-comment-" thing-id))

;;===============================================================
; xpath selector for assign to form
;;===============================================================
(defn assignto-sel
  [thing-id]
  (assignto-class thing-id))

(defn assign-form-sel
  [thing-id]
  (let [assignform (assign-form-class thing-id)]
    (str "//div[@class='" assignform "']/form[@id='assign-form']")))

(defn assign-input-sel
  [thing-id field-name]
  (let [form-sel (assign-form-sel thing-id)]
    (str form-sel "/input[@id='" field-name"']")))


(defn add-lecture-sel
  [thing-id]
  (add-lecture-class thing-id))


(defn add-question-sel
  [thing-id]
  (add-question-class thing-id))


;;===============================================================
;; generate thing template based on thing type
;; when rendering node-create with thing-type and id, ret thing node div html
;; [:node-create [:main :all 0 :parent 17592186045505] :map]
;; [:node-create [:main :parent 1 :child 17592186045505] :map]
;; path = (:main :all 0 :parent 17592186045498) or 
;;        (:header :parent 17592186045498)
;;===============================================================
(defmulti thing-node-html
  (fn [path render]  ; the last segment of path
    (second (reverse path))))


; dispatch by thing type, type is plural b/c sidebar list item name is plura.
(defmethod thing-node-html
  :parent
  [path render]
  (let [thingid (last path)
        templ (:thing-parent templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :children-class (child-class thingid) 
                         :assignments-class (assignment-class thingid)
                         :likes-class (like-class thingid)
                         :comments-class (comment-class thingid)
                         :followers-class (follower-class thingid)})
        ]
    (.log js/console (str "thing-node-html " path html))
    thing-div))


(defmethod thing-node-html
  :child
  [path render]
  (let [thingid (last path)
        templ (:thing-child templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :parents-class (parent-class thingid)
                         :courses-class (course-class thingid)
                         :assignments-class (assignment-class thingid)
                         :comments-class (comment-class thingid)
                         :classmates-class (classmate-class thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
    thing-div))


(defmethod thing-node-html
  :course
  [path render]
  (let [thingid (last path)
        templ (:thing-course templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :lectures-class (lecture-class thingid)
                         :add-lecture-class (add-lecture-class thingid)
                         :comments-class (comment-class thingid)
                         :share-class (share-class thingid)
                         :assignto-class (assignto-class thingid)
                         :assign-form-class (assign-form-class thingid)
                         :enroll-class (enroll-class thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
    thing-div))


(defmethod thing-node-html
  :lecture
  [path render]
  (let [thingid (last path)
        templ (:thing-lecture templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :questions-class (question-class thingid)
                         :add-question-class (add-question-class thingid)
                         :schedule-class (schedule-class thingid)
                         :comments-class (comment-class thingid)
                         :assignto-class (assignto-class thingid)
                         :assign-form-class (assign-form-class thingid)
                         :share-class (share-class thingid)
                         :enroll-class (enroll-class thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
    thing-div))


;; ------------------------------------------------------------------------
;; instantiate question thing template and gen html for rendering
;; shall use selector for hardcoded dom class name
;; ------------------------------------------------------------------------
(defmethod thing-node-html
  :question
  [path render] 
  (let [thingid (last path)
        templ (:thing-question templates)
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :lectures-class (lecture-class thingid)
                         :comments-class (comment-class thingid)
                         :share-class (share-class thingid)
                         :assignto-class (assignto-class thingid)
                         :assign-form-class (assign-form-class thingid)
                         })
        ]
    (.log js/console (str "thing-node-html " path thingid))
    thing-div))


(defmethod thing-node-html
  :assignment
  [path render]
  (let [thingid (last path)
        templ (:thing-assignment templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        thing-div (html {:id thingid 
                         :answers-class (answer-class thingid)
                         :comments-class (comment-class thingid)
                         :submit-class (submit-class thingid)
                         :share-class (share-class thingid)})
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
  :parent
  [path entity]
  (assoc entity :title (:person/title entity)))


(defmethod thing-view
  :child
  [path entity]
  (assoc entity :title (:person/title entity)))


(defmethod thing-view
  :course
  [path entity]
  (assoc entity :title (:course/title entity)))


(defmethod thing-view
  :lecture
  [path entity]
  (assoc entity :title (:lecture/title entity)))


(defmethod thing-view
  :question
  [path entity]
  (assoc entity :title (:question/title entity)))


; embeded ref object can be de-refed directly.
(defmethod thing-view
  :assignment
  [path entity]
  (let [hmwk (:assignment/question entity)
        ident (util/thing-ident hmwk)
        titlekey (keyword (str (name ident) "/title"))
        title (titlekey hmwk)
        ]
    (assoc entity :title title)))

