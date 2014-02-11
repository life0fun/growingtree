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
; the value for each sublink is thing class selector hide or not.
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

    :course {:title "" :author ""
             :lecture "" :add-lecture " hide"
             :comments ""
             :enrollment "" :enroll ""
             :upvote "" :like "" :share ""
            }

    :lecture {:title "" :author ""
              :course ""
              :question "" :add-question " hide"
              :comments ""
              :upvote "" :like "" :share ""
             }

    :question {:title ""
               :lecture ""
               :assignment ""
               :similar ""
               :comments ""
               :upvote "" :like "" :share ""
               :assignto ""
              }

    :assignment {:title "" :author ""
                 :question "" :hint "" :similar ""
                 :answer "" :submit-answer ""
                 :comments ""
                 :upvote "" :like "" :share ""
                }

    :comments {:reply "" :reply-form ""
               :upvote "" :like "" :share ""
              }

    :group {:title "" :author ""
            :group-members "" :join-group ""
            :activity "" :add-activity " hide"
            :upvote "" :like "" :share ""
           }

    :answer {:title ""
             :grade ""
             :assignment ""
             :question ""
             :comments ""
             :upvote "" :like "" :share ""
            }

    :like {:origin "" :upvote ""
            :title "" :author ""
          }

    :timeline { :origin "" :details ""
                :title "" :author ""
              }
  })


; thumbnail jpg, ref to images at assets/images/
; thing-template-value calls this to give value to :thumbhref.
(def thing-thumbnail
  {
    :parent "parent.jpg"
    :child "child.jpg"
    :course "course.jpg"
    :lecture "lecture.jpg"
    :question "question.jpg"
    :assignment "homework.jpg"
    :answer "answer.jpg"
    :comments "comments.jpg"
    :like "like.jpg"
    :timeline "timeline.jpg"
    :group "group.jpg"
  })


;;===============================================================
; xpath selector for inline form
;;===============================================================

; form selector with wrapper div class by form-name - thing-id, form id is name
(defn div-form-clz
  [thing-id form-name]
  (let [form-clz (str form-name "-" thing-id)
        form-path (str "//div[@class='" form-clz "']/form[@id='" form-name "']")]
    form-path))


(defn div-form-sel
  [thing-id form-name]
  (let [form-path (div-form-clz thing-id form-name)]
    (dx/xpath form-path)))


; selector for input id name with form name cl
(defn div-form-input-sel
  [thing-id form-name field-name]
  (let [form-path (div-form-clz thing-id form-name)
        timefields #{"start" "end"}
        timefield? (contains? timefields (last (clojure.string/split field-name #"-")))
        input-sel (if timefield?
                    (str form-path "/div[@id='" (str field-name "-picker") "']/input[@id='" field-name"']")
                    (str form-path "/input[@id='" field-name "']"))]
    (dx/xpath input-sel)))


; selector for textarea input with id name under form class name
(defn div-form-textarea-sel
  [thing-id form-name field-name]
  (let [form-path (div-form-clz thing-id form-name)
        textarea-sel (str form-path "/textarea[@id='" field-name"']")]
    (dx/xpath textarea-sel)))


; dom selector for upvote arrow up div, ret the upvote dom element
; somehow I could not get the first arg of dx/xpath work, full path with thing-id.
; can not re-use div form sel as it is div div. div needs double //div
(defn div-div-clz-sel
  [thing-id clz]
  (let [thing-node (dom/by-id (str thing-id))
        xpath (str "//div[@id='" thing-id "']//div[@class='" clz "']")
       ]
    (-> thing-node
        (dx/xpath xpath))))

; ------------------------------------------------------------------
; dom add class to thing node
; ------------------------------------------------------------------
(defn thing-node-add-class
  "add a class to thing node"
  [thing-id clz]
  (let [thing-node (dom/by-id (str thing-id))]
    (.log js/console (str "thing node " thing-id " add class " clz))
    (dom/add-class! thing-node clz)))

;;===============================================================
; get thing-map attr, attr passed in as string
;;===============================================================
(defn thing-attr-val
  [thing-map thing-type attr]
  (cond
    (= :parent thing-type) ((keyword (str "person/" attr)) thing-map)
    (= :child thing-type) ((keyword (str "person/" attr)) thing-map)
    :else ((keyword (str (name thing-type) "/" attr)) thing-map)))


; thing nav link class selector includes thing-id, called in thing-node-html.
(defn thing-nav-link-class
  [thing-id sublink-meta]
  (reduce
    (fn [tot [attr-key hide]]
      (merge tot (thing-nav-link-sel thing-id attr-key hide)))
    {}
    sublink-meta))


; thing nav sublink is [enroll-class = enroll-1234], setted above.
; class selector for sublink assignto-class, enroll-class
(defn thing-nav-link-sel
  "ret the class selector for thing nav sublink transkey"
  [thing-id link-key hide]
  (let [k (keyword (str (name link-key) "-class"))
        clz (str (name link-key) "-" thing-id hide)]
    (hash-map k clz)))


;;====================================================================
; toggle to display nav-subthing or add-subthing for one sub-link.
; called when value a node, return class for template to show whether
;;====================================================================
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
; get the parent node of a thing node at certain render path
; rpath [:filtered :course 1 :comemnts 2 :comments 3]
;;=============================================================================
(defn thing-node-parent
  [rpath]
  (let [parent-id (first (take-last 3 rpath))
        thing-type (first (take-last 2 rpath))
        tree-div (str (name thing-type) "-tree")
        xpath (str "//div[@id='" parent-id "']//div[@id='" tree-div "']")
       ]
    (.log js/console (str "thing node parent " xpath))
    (-> (dom/by-id (str parent-id))
        (dx/xpath xpath))))


;;=============================================================================
;; generate thing template based on thing type, and attach template to render path.
;; when rendering node-create with thing-type and id, ret thing node div html
;; [:node-create [:main :all 0 :parent 17592186045505] :map]
;; [:node-create [:main :parent 1 :child 17592186045505] :map]
;; render-path = [:main :all 0 :parent 17592186045498]
;;        [:header :parent 17592186045498] [:header :course 17592186045425]
;;        [:filtered :course 17592186045428 :lecture 17592186045430]
;;        [:details :course 17592186045425 :title 17592186045425]
;;=============================================================================
(defmulti thing-node-html
  (fn [render-path render thing-idx]  ; the last segment of path
    (second (reverse render-path))))


; generated template html is attached to render path, and updatable from render-path
; make child div unique with template child form id that includes thing-id
(defmethod thing-node-html
  :default
  [rpath render thing-idx]
  (let [thing-id (last rpath)
        thing-type (second (reverse rpath))
        ; slice templ thing-parent, thing-child, from app templates
        templ ((keyword (str "thing-" (name thing-type))) templates)
        ; add the rendered template attached to rpath node
        html (templates/add-template render rpath templ)

        ; all sublink class selector with thing-id is defined in thing-nav-link-class
        actionkeys (thing-type thing-nav-actionkey) ; all sublink meta
        ; make unique child div with child form id template that includes thing-id
        templ-map (merge {:id thing-id
                          :rank (str thing-idx)
                          :thumbhref (thing-type thing-thumbnail)
                          :child-form-id (str "child-form-" thing-id)
                         }
                         (thing-nav-link-class thing-id actionkeys))
        thing-div (html templ-map)
        ]
    (.log js/console (str "thing-node-html :default " rpath " " templ-map))
    thing-div))


; for details by title, show course template from newthing.html
; [:details :lecture 17592186045430 :title 17592186045430]
(defmethod thing-node-html
  :title
  [rpath render thing-idx]
  (let [thing-id (last rpath)
        thing-type (second rpath)   ; [thing-type 1 :title 1]
        ; slice templ from newthing form for title.
        templ ((keyword (str (name thing-type) "-form")) templates)
        ; add the rendered template attached to rpath node
        html (templates/add-template render rpath templ)

        ; id must not be only thing-id, thing entry div already took it.
        templ-map {:id (str "details-" thing-id)}
        thing-div (html templ-map)
        ]
    (.log js/console (str "thing-node-html :title " rpath " " thing-type))
    thing-div))


; render path [:details :parent 1 :person 1]
(defmethod thing-node-html
  :person
  [rpath render thing-idx]
  (let [thing-id (last rpath)
        thing-type (second rpath) ; [parent/child 1 :person 1]
        ; slice templ thing-parent, thing-child, from app templates
        templ ((keyword (str (name thing-type) "-form")) templates)
        ; add the rendered template attached to rpath node
        html (templates/add-template render rpath templ)

        templ-map {:id (str "details-" thing-id)}
        thing-div (html templ-map)
        ]
    (.log js/console (str "thing-node-html :person " rpath " " thing-type))
    thing-div))


;;===========================================================================
; value a node [:value [:filtered :co] nil {thing-map},  dispatch by thing-type
;;===========================================================================
(defmulti thing-value-view
  (fn [r rpath qpath thing-map input-queue]
    (second (reverse rpath))))


; multi fn of thing template value assemble value for each thing type
; rpath [:header :group 1] qpath [:group 1 :group-members]
(defmethod thing-value-view
  :default
  [r rpath qpath thing-map input-queue]
  (.log js/console (str "thing-value-view " rpath qpath))
  (let [thing-id (last rpath)
        thing-type (second (reverse rpath))
        ; use qpath to toggle list thing and add-thing transkey, for qpath next thing only.
        nav-add-clz (toggle-nav-add-subthing-class thing-id thing-type qpath)
        ; get template value for the thing-type
        thing-val (thing-template-value thing-type thing-map)
        thing-view (merge thing-val nav-add-clz)
       ]
    (.log js/console (str "thing value view template :default " rpath " new-value " thing-map))
    thing-view))

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
;
; XXX All template values must be *STRING*, convert int to string.
;;===========================================================================

; for each thing type, ret the template value that is used for instatiate template.
(defmulti thing-template-value
  (fn [thing-type thing-map]
    thing-type))


(defmethod thing-template-value
  :default
  [thing-type thing-map]
  (let [author-attr (util/thing-attr-keyword thing-type "author")
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :thing-content (thing-attr-val thing-map thing-type "content")
           :entryhref "javascript:void(0);"
           :author-name (get-in thing-map [author-attr 0 :person/title])
           :author-class (get-in thing-map [author-attr 0 :person/title])
           :id-author (str thing-id "-author")
           :upvote (str (thing-attr-val thing-map thing-type "upvote"))
           :numcomments (str (thing-attr-val thing-map thing-type "numcomments") " comments")
           :start (util/format-time (thing-attr-val thing-map thing-type "start"))
           :phone (first (thing-attr-val thing-map thing-type "phone"))
           :email (first (thing-attr-val thing-map thing-type "email"))
          }
       ]
    value-map))

; template value for each thing type varies greatly, default can not  capture
(defmethod thing-template-value
  :course
  [thing-type thing-map]
  (let [thing-id (:db/id thing-map)
        upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        ; we need have attr keyword for get-in of :ref :many attr value
        author-attr (util/thing-attr-keyword thing-type "author")
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :thing-content (thing-attr-val thing-map thing-type "content")
           :entryhref "javascript:void(0);"
           :title-id (str thing-id "-title")
           :author-name (get-in thing-map [author-attr 0 :person/title])
           :author-class (get-in thing-map [author-attr 0 :person/title])
           :id-author (str thing-id "-author")
           :upvote upvotes
           :start (util/format-time (thing-attr-val thing-map thing-type "start"))
           :numcomments (str (thing-attr-val thing-map thing-type "numcomments") " comments")
          }

       ]
    value-map))


; template value for each thing type varies greatly, default can not  capture
(defmethod thing-template-value
  :lecture
  [thing-type thing-map]
  (let [thing-id (:db/id thing-map)
        upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        author-attr (util/thing-attr-keyword thing-type "author")
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :thing-content (thing-attr-val thing-map thing-type "content")
           :entryhref "javascript:void(0);"
           :title-id (str (:db/id thing-map) "-title")
           :author-name (get-in thing-map [author-attr 0 :person/title])
           :author-class (get-in thing-map [author-attr 0 :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :upvote upvotes
           :numcomments (str (thing-attr-val thing-map thing-type "numcomments") " comments")
           :seqno (thing-attr-val thing-map thing-type "seqno")
           :start (util/format-time (thing-attr-val thing-map thing-type "start"))
           :end (util/format-time (thing-attr-val thing-map thing-type "end"))
          }
       ]
    value-map))


; template value for each thing type varies greatly, default can not  capture
(defmethod thing-template-value
  :question
  [thing-type thing-map]
  (let [upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        author-attr (util/thing-attr-keyword thing-type "author")
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :thing-content (thing-attr-val thing-map thing-type "content")
           :entryhref "javascript:void(0);"
           :title-id (str (:db/id thing-map) "-title")
           :author-name (get-in thing-map [author-attr 0 :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :upvote upvotes
           :numcomments (str (thing-attr-val thing-map thing-type "numcomments") " comments")
           :difficulty (str (thing-attr-val thing-map thing-type "difficulty"))
          }
       ]
    value-map))


; assignment focus on start/end, does not have difficulty.
(defmethod thing-template-value
  :assignment
  [thing-type thing-map]
  (let [upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        author-attr (util/thing-attr-keyword thing-type "author")
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :thing-content (thing-attr-val thing-map thing-type "content")
           :entryhref "javascript:void(0);"
           :title-id (str (:db/id thing-map) "-title")
           :author-name (get-in thing-map [author-attr :person/title]) ; author is ref one for assignment
           :author-class (get-in thing-map [author-attr :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :upvote upvotes
           :numcomments (str (thing-attr-val thing-map thing-type "numcomments") " comments")
           :start (util/format-time (thing-attr-val thing-map thing-type "start"))
           :end (util/format-time (thing-attr-val thing-map thing-type "end"))
          }
       ]
    value-map))


; template value for :answer
(defmethod thing-template-value
  :answer
  [thing-type thing-map]
  (let [origin-title (-> (get-in thing-map [:answer/origin])
                         (util/thing-val-by-name "title")
                         (second)) ; value is the second of kv vector
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :entryhref "javascript:void(0);"
           :origin-title origin-title
           :author-name (get-in thing-map [:answer/author :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :start (util/format-time (:answer/start thing-map))
           :thumbhref (thing-type thing-thumbnail)
           :upvote (str (thing-attr-val thing-map thing-type "upvote"))
           :numcomments (str (thing-attr-val thing-map thing-type "numcomments") " comments")
           :score (str (or (:answer/score thing-map) 0))
          }
        ]
    (.log js/console (str "answer template value " value-map))
    value-map))


(defmethod thing-template-value
  :comments
  [thing-type thing-map]
  (let [upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        origin-title (-> (get-in thing-map [:comments/origin])
                         (util/thing-val-by-name "title")
                         (second)) ; value is the second of kv vector
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :thumbhref (thing-type thing-thumbnail)
           :entryhref "javascript:void(0);"
           :upvote upvotes
           :comments-time "  6 hours"
           :author-name (get-in thing-map [:comments/author :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :origin-title "We do not need this if we organize comment tree hierarchy"}
        ]
    value-map))


(defmethod thing-template-value
  :group
  [thing-type thing-map]
  (let [upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        author-attr (util/thing-attr-keyword thing-type "author")
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :entryhref "javascript:void(0);"
           :thumbhref (thing-type thing-thumbnail)
           :title-id (str (:db/id thing-map) "-title")
           :author-name (get-in thing-map [author-attr 0 :person/title])
           :author-class (get-in thing-map [author-attr 0 :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :upvote upvotes
          }
       ]
    value-map))


(defmethod thing-template-value
  :like
  [thing-type thing-map]
  (let [upvotes (str (thing-attr-val thing-map thing-type "upvote"))
        origin-title (-> (get-in thing-map [:like/origin])
                         (util/thing-val-by-name "title")
                         (second)) ; value is the second of kv vector
        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :entryhref "javascript:void(0);"
           :upvote upvotes
           :comments-time "  12 hours"
           :author-name (get-in thing-map [:like/person 0 :person/title])
           :id-author (str (:db/id thing-map) "-author")
           :origin-title origin-title}
        ]
    (.log js/console (str "template value " origin-title))
    value-map))

; --------------------------------------------------------------------------
; timeline thing map defed in timeline util tx-timeline.
; --------------------------------------------------------------------------
(defmethod thing-template-value
  :timeline
  [thing-type thing-map]
  (.log js/console (str "timeline template value " thing-type (thing-attr-val thing-map thing-type "txtime") thing-map))
  (let [origin-title (-> (get-in thing-map [:timeline/origin])
                         (util/thing-val-by-name "title")
                         (second)) ; value is the second of kv vector

        value-map
          {:thing-title (thing-attr-val thing-map thing-type "title")
           :entryhref "javascript:void(0);"
           ;:txtime (util/format-time (thing-attr-val thing-map thing-type "txtime"))
           :txtime (thing-attr-val thing-map thing-type "txtime")
           :author-name (get-in thing-map [:timeline/author])
           :id-author (str (:db/id thing-map) "-author")
           :origin-title origin-title
           :type (:timeline/type thing-map)
           :thumbhref ((keyword (:timeline/type thing-map)) thing-thumbnail)
          }
        ]
    (.log js/console (str "template value " value-map))
    value-map))


; --------------------------------------------------------------------------
; search thing map defed in timeline search-result
; --------------------------------------------------------------------------
(defmethod thing-template-value
  :search
  [thing-type thing-map]
  (let [origin-title (-> (get-in thing-map [:search/origin])
                         (util/thing-val-by-name "title")
                         (second)) ; value is the second of kv vector
        value-map
          {:origin-title origin-title
           :entryhref "javascript:void(0);"
           :type (:search/type thing-map)
           :text (:search/text thing-map)
           :searchkey (:search/searchkey thing-map)
           :thumbhref ((keyword (:search/type thing-map)) thing-thumbnail)
          }
        ]
    (.log js/console (str "template value " origin-title))
    value-map))


; --------------------------------------------------------------------------
; thing details value, we are using newthings form
; this is deprecated as we template placeholder field to show entries.
; --------------------------------------------------------------------------
(defmethod thing-template-value
  :title
  [thing-type thing-map]
  (let [value-map {} ]
    (.log js/console (str " Deprecated template value " thing-type thing-map))
    value-map))


;;===========================================================================
; show add comments input box, trigger by thing data emitter [:setup :x 1 :comments]
; form id is the thing-id this comment's origin and thingroot
;;===========================================================================
(defn add-comments-form
  [render rpath ]
  (let [thing-id (last (butlast rpath))
        container-div (dom/by-id "add-comments") ; template "thing-details"
        ; add the rendered template attached to rpath node
        html (templates/add-template render rpath (:comments-form templates))
        thing-div (html {:id (str "add-comments-" thing-id)})
       ]
    (.log js/console (str "display add comemnts form "))
    (dom/append! container-div thing-div)
    ; ret the form for events-on :submit,
    (dom/by-class "add-comments-form")  ; form selector is only by-class
    ))
