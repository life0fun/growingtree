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
              [domina.xpath :as dx]
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


;;==================================================================================
; action key for each thing nav sublink type,
; the value for each sublink is thing class hide or not.
; also used by thing-navpath-transforms to emit transform enable msg.
;;==================================================================================
(def thing-nav-actionkey
  {
    :parent {:child "" :add-child " hide" 
             :group "" :add-group " hide"
             :assignment "" :comments "" :activity "" 
             :upvote "" :like "" :follow "" 
            }

    :child {:parent "" :add-parent " hide" 
            :schoolclass "" :add-schoolclass " hide"
            :assignment "" :comments "" :activity ""
            :upvote "" :like "" :follow "" 
           }

    :course {:lecture "" :add-lecture " hide" 
             :question "" :add-question " hide" 
             :comments "" :add-comments " hide" 
             :enrollment "" :add-enrollment " hide" 
             :schedule "" 
             :upvote "" :like "" :share "" 
             :assignto "" :assign-form ""
            }

    :lecture {:course "" 
              :question "" :add-question " hide" 
              :comments "" :add-comments " hide" 
              :enrollment "" :add-enrollment " hide" 
              :schedule "" 
              :upvote "" :like "" :share "" 
              :assignto "" :assign-form ""
             }
    
    :question {:lecture "" :similar ""
               :question "" :add-question " hide" 
               :comments "" :add-comments " hide" 
               :upvote "" :like "" :share "" 
               :assignto "" :assign-form ""
              }

    :assignment {:question "" :hint "" :similar ""
                 :answer "" :add-answer " hide" 
                 :comments "" :add-comments " hide" 
                 :upvote "" :like "" :share "" 
                }
  })


;;===============================================================
; xpath selector for assign to form
;;===============================================================

; dom selector for assign form
(defn assign-form-sel
  [thing-id]
  (let [assignform (str "assign-form-" thing-id)]
    (str "//div[@class='" assignform "']/form[@id='assign-form']")))

; dom selector for individual input field within assign form
(defn assign-input-sel
  [thing-id field-name]
  (let [form-sel (assign-form-sel thing-id)]
    (str form-sel "/input[@id='" field-name"']")))


; dom selector for upvote arrow up div, ret the upvote dom element
; somehow I could not get the first arg of dx/xpath work, full path with thing-id.
(defn upvote-sel
  [thing-id]
  (let [thing-node (dom/by-id (str thing-id))
        ;xpath (str "//div[@class='arrow up']")
        xpath (str "//div[@id='" thing-id "']//div[@class='arrow up']")
       ]
    (-> thing-node
        (dx/xpath xpath))))


;;===============================================================
; get thing-map attr, attr passed in as string
;;===============================================================
(defn thing-attr-val
  [thing-map thing-type attr]
  (cond 
    (= :parent thing-type) ((keyword (str "person/" attr)) thing-map)
    (= :child thing-type) ((keyword (str "person/" attr)) thing-map)
    :else ((keyword (str (name thing-type) "/" attr)) thing-map)))


(defn thing-nav-link-sel
  "ret the class selector for thing nav sublink transkey"
  [thing-id link-key hide]
  (let [k (keyword (str (name link-key) "-class")) 
        clz (str (name link-key) "-" thing-id hide)]
    (hash-map k clz)))

; get thing template map from a meta map
(defn thing-template-class
  [thing-id sublink-meta]
  (reduce 
    (fn [tot [attr-key hide]]
      (merge tot (thing-nav-link-sel thing-id attr-key hide)))
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

;;=============================================================================
;; generate thing template based on thing type, and attach template to render path.
;; when rendering node-create with thing-type and id, ret thing node div html
;; [:node-create [:main :all 0 :parent 17592186045505] :map]
;; [:node-create [:main :parent 1 :child 17592186045505] :map]
;; render-path = [:main :all 0 :parent 17592186045498]
;;        [:header :parent 17592186045498]
;;        [:filtered :course 17592186045428 :lecture 17592186045430]
;;=============================================================================

(defmulti thing-node-html
  (fn [render-path render]  ; the last segment of path
    (second (reverse render-path))))

; generated template html is attached to render path, and updatable from render-path
(defmethod thing-node-html
  :default
  [rpath render]
  (let [thing-id (last rpath)
        thing-type (second (reverse rpath))
        ; slice templ thing-parent, thing-child, from app templates
        templ ((keyword (str "thing-" (name thing-type))) templates)
        ; add the rendered template attached to rpath node
        html (templates/add-template render rpath templ)
        
        actionkeys (thing-type thing-nav-actionkey)
        templ-map (merge {:id thing-id} 
                         (thing-template-class thing-id actionkeys))
        thing-div (html templ-map)
        ]
    (.log js/console (str "thing-node-html " rpath " " (keyword (str "thing-" (name thing-type)))))
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
        ; use qpath to toggle thing and add-thing transkey
        nav-add-clz (toggle-nav-add-subthing-class thing-id thing-type qpath)
        
        upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        thing-content {:thing-entry-title (thing-attr-val thing-map thing-type "title")
                       :thumbhref "thumbhref" 
                       :entryhref rpath
                       :rank "2"  ; not sure why values must be string.
                       :upvote upvotes
                      }
        thing-view (merge thing-content nav-add-clz)
        ]
    (.log js/console (str "update thing node value " rpath " ^ " upvotes " new-value " thing-map))
    thing-view))
