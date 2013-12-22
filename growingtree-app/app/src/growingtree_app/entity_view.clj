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

(declare toggle-nav-add-subthing-class)

; Load templates macro.
(def templates (html-templates/growingtree-app-templates))

(defn parent-class [thing-id] (str "parent-" thing-id))
(defn child-class [thing-id] (str "child-" thing-id))
(defn add-child-class [thing-id] (str "add-child-" thing-id))
(defn course-class [thing-id] (str "course-" thing-id))
(defn lecture-class [thing-id] (str "lecture-" thing-id))
(defn add-lecture-class [thing-id] (str "add-lecture-" thing-id))
(defn question-class [thing-id] (str "question-" thing-id))
(defn add-question-class [thing-id] (str "add-question-" thing-id))
(defn assignment-class [thing-id] (str "assignment-" thing-id))
(defn add-assignment-class [thing-id] (str "add-assignment-" thing-id))
(defn comments-class [thing-id] (str "comments-" thing-id))
(defn add-comments-class [thing-id] (str "add-comments-" thing-id))
(defn share-class [thing-id] (str "share-" thing-id))
(defn answer-class [thing-id] (str "answer-" thing-id))
(defn add-answer-class [thing-id] (str "add-answer-" thing-id))
(defn follower-class [thing-id] (str "follower-" thing-id))
(defn add-follower-class [thing-id] (str "add-follower-" thing-id))
(defn schoolclass-class [thing-id] (str "schoolclass-" thing-id))
(defn add-schoolclass-class [thing-id] (str "add-schoolclass-" thing-id))
(defn like-class [thing-id] (str "like-" thing-id))
(defn add-like-class [thing-id] (str "like-" thing-id))
(defn enrollment-class [thing-id] (str "enrollment-" thing-id))
(defn add-enrollment-class [thing-id] (str "add-enrollment-" thing-id))
(defn activity-class [thing-id] (str "activity-" thing-id))
(defn add-activity-class [thing-id] (str "add-activity-" thing-id))

(defn schedule-class [thing-id] (str "schedule-" thing-id))

(defn assignto-class [thing-id] (str "assignto-" thing-id))
(defn assign-form-class [thing-id] (str "assign-form-" thing-id))
(defn assignto-name-class [thing-id] (str "assignto-name-" thing-id))
(defn assignto-hint-class [thing-id] (str "assignto-hint-" thing-id))
(defn submit-class [thing-id] (str "submit-" thing-id))


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
; get thing-map attr, attr passed in as string
;;===============================================================
(defn thing-attr-val
  [thing-type thing-map attr]
  (cond 
    (= :parent thing-type) ((keyword (str "person/" attr)) thing-map)
    (= :child thing-type) ((keyword (str "person/" attr)) thing-map)
    :else ((keyword (str (name thing-type) "/" attr)) thing-map)))


; get thing template map
(defn thing-template-class
  [thing-id sublink-meta]
  (reduce 
    (fn [tot [attr-key hide]]
      (let [k (keyword (str (name attr-key) "-class")) 
            clz (str (name attr-key) "-" thing-id hide)]
        (assoc-in tot [k] clz)))
    {}
    sublink-meta))

;;===============================================================
; toggle to display whether nav-subthing or add-subthing. 
; return class for template to show whether 
;;===============================================================
(defn toggle-nav-add-subthing-class
  [thing-id thing-type qpath]
  (when-let [nxt-thing-type (last qpath)]
    (let [nmsp (keyword (str (name thing-type)))
          ; hide nav subthing
          nav-key (keyword (str (name nxt-thing-type) "-class"))
          nav-clz (str (name nxt-thing-type) "-" thing-id " hide")

          add-key (keyword (str "add-" (name nxt-thing-type) "-class"))
          add-clz (str "add-" (name nxt-thing-type) "-" thing-id)

          nav-add-clz (hash-map nav-key nav-clz add-key add-clz)
         ]
      (.log js/console "toggle nav add subthing " nav-key nav-clz add-key add-clz)
      nav-add-clz)))

;;===============================================================
;; generate thing template based on thing type
;; when rendering node-create with thing-type and id, ret thing node div html
;; [:node-create [:main :all 0 :parent 17592186045505] :map]
;; [:node-create [:main :parent 1 :child 17592186045505] :map]
;; path = [:main :all 0 :parent 17592186045498]
;;        [:header :parent 17592186045498]
;;        [:filtered :course 17592186045428 :lecture 17592186045430]
;;===============================================================

; action key for each thing nav sublink type
(def thing-nav-actionkey
  {
    :parent {:child "" :add-child " hide" :assignment "" :like ""
             :comments "" :follow "" :group "" :add-group " hide"
             :activity "" }

    :child {:parent "" :add-parent " hide" :assignment "" :like ""
            :comments "" :follow "" :schoolclass "" :add-schoolclass " hide"
            :activity "" }

    :course {:lecture "" :add-lecture " hide" 
             :question "" :add-question " hide" 
             :comments "" :add-comments " hide" 
             :enrollment "" :add-enrollment " hide" 
             :schedule "" :like "" :share "" :assignto "" :assign-form ""}

    :lecture {:course "" 
             :question "" :add-question " hide" 
             :comments "" :add-comments " hide" 
             :enrollment "" :add-enrollment " hide" 
             :schedule "" :like "" :share "" :assignto "" :assign-form ""}
    
    :question {:lecture "" :similar ""
               :question "" :add-question " hide" 
               :comments "" :add-comments " hide" 
               :like "" :share "" :assignto "" :assign-form ""}

    :assignment {:question "" :hint "" :similar ""
                 :answer "" :add-answer " hide" 
                 :comments "" :add-comments " hide" 
                 :like "" :share "" }
  })

(defmulti thing-node-html
  (fn [path render]  ; the last segment of path
    (second (reverse path))))

(defmethod thing-node-html
  :default
  [path render]
  (let [thing-id (last path)
        thing-type (second (reverse path))
        templ ((keyword (str "thing-" (name thing-type))) templates)
        ; make a template attached to path node
        html (templates/add-template render path templ)
        
        actionkeys (thing-type thing-nav-actionkey)
        templ-map (merge {:id :thing-id} 
                          (thing-template-class thing-id actionkeys))
        thing-div (html templ-map)
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
                         :comments-class (comments-class thingid)
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
                         :comments-class (comments-class thingid)
                         :submit-class (submit-class thingid)
                         :share-class (share-class thingid)})
        ]
    (.log js/console (str "thing-node-html " path))
    thing-div))


;;===========================================================================
; xhr response data stored into [:data navpath], thing data emitter
; [:node-create render-path :map] [:value render-path entity-map]
; we have created thing node, now value thing node and return thing-view
; rpath = [:main :all 0 :course 17592186045425]
;        [:header :parent 17592186045498]
;        [:filtered :course 17592186045428 :lecture 17592186045430]
; qpath is nav to next thing, used for enable add subthing.
; thing-map is db entity {:db/id 17592186045425, :course/url "math.com/Math-I", 
; :course/author [{:person/lname "rich", :person/title "rich-dad",}] 
;;===========================================================================
; dispatch by thing-type
(defmulti thing-value-view
  (fn [r rpath qpath thing-map input-queue]
    (second (reverse rpath))))

; return thing value view based on passed in thing-map
(defmethod thing-value-view
  :default
  [r rpath qpath thing-map input-queue]
  (let [thing-id (last rpath)
        thing-type (second (reverse rpath))
        
        nav-add-clz (toggle-nav-add-subthing-class thing-id thing-type qpath)
        thing-view (merge 
                      {:thing-entry-title (thing-attr-val thing-type thing-map "title")
                       :thumbhref "thumbhref" 
                       :entryhref rpath
                      }
                      nav-add-clz)
                    ]
    (.log js/console (str "update thing node value " rpath " new-value " thing-map))
    thing-view))

; (defmethod thing-value-view
;   :course
;   [r rpath qpath thing-map input-queue]
;   (let [thing-id (last rpath)
;         thing-type (second (reverse rpath))
;         nmsp (keyword (str (name thing-type)))
;         thing-view {:thing-entry-title (thing-attr-val thing-type thing-map "title")
;                     :thumbhref "thumbhref" 
;                     :entryhref rpath
;                     :add-lecture-class (str (add-lecture-class thingid) " hide")
;                    }]
;     (.log js/console (str "update thing node value " rpath " new-value " thing-map))
;     thing-view))


