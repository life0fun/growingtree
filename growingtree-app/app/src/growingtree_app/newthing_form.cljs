(ns growingtree-app.newthing-form
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
            [growingtree-app.util :as util]
            [growingtree-app.entity-view :as entity-view]
            [growingtree-app.selector :as sel])
  (:require-macros [growingtree-app.html-templates :as html-templates]))

;; this ns contains code for handling ui event for newthing template.
;; see newthing.html for the template definition and db schema for attrs.

(def templates (html-templates/growingtree-app-templates))

;;==================================================================================
;; utility functions for toggle hide of form
;;==================================================================================
; too bad (dom/toggle-class! form "hide") is not available.
(defn toggle-hide-fn
  "return an event handler fn that toggen hide css class of the form"
  [form clz]
  (fn [_] 
    (let [hidden (dom/has-class? form "hide")]
      (.log js/console (str "toggle hide link clicked " clz hidden))
      (if hidden
        (dom/remove-class! form "hide")
        (dom/add-class! form "hide")))))


; toggle to display new thing form, and handle add thing submit.
(defn toggle-add-thing-form-fn
  "return an event handler fn that toggen hide css class of the form"
  [add-thing-type r path override-map input-queue]
  (fn [_] 
    (let [newthing-div "new-subthings"    ; div defined in thing details
          newthing (dom/by-id newthing-div)
          nchild (count (dom/children (dx/xpath (str "//div[@id='" newthing-div "']"))))
          add-thing-form (add-thing-form add-thing-type r path)  ; render path
          ]
      (.log js/console (str add-thing-type " link clicked div " nchild))
      (if (= nchild 0)
        (dom/append! newthing add-thing-form)
        (dom/destroy-children! newthing))

      ; enable event must live outside the same block of dom append displaying form.
      (if (= nchild 0)
        (do
          (handle-add-thing-submit add-thing-type path override-map input-queue)
          (handle-add-thing-cancel add-thing-type)))
    )))


;;==================================================================================
; submit-fn uses this map to id dom input fields and collect input value to entity attr.
; form dom id refer to newthing.html for dom elements
; within each type, key is entity attr, value is form input id to provide value to entity attr.
;;==================================================================================
(def thing-input-map
  {
    :parent {:person/title "person-name"
             :person/lname "person-lname"
             :person/address "person-address"
             :person/email "person-email"
             :person/phone "person-phone"
             :person/status "person-status"
             :person/url "person-url"
             :person/gender "person-type"
            }

    :child { :person/title "person-name"
             :person/lname "person-lname"
             :person/address "person-address"
             :person/email "person-email"
             :person/phone "person-phone"
             :person/status "person-status"
             :person/url "person-url"
             :person/gender "person-type"
            }

    :family {:family/title "family-name"
             :family/parent "family-parent"
             :family/child "family-child"
             :family/address "family-address"
             :family/email "family-email"
             :family/url "family-url"
            }

    :course {:course/title "course-title"
             :course/author "course-author"
             :course/type "course-type"
             :course/content "course-content" 
             :course/url "course-url"
             :course/email "course-email"
            }

    :lecture {:lecture/title "lecture-title"
             :lecture/author "lecture-author"
             :lecture/course "lecture-course"
             :lecture/type "lecture-type"
             :lecture/content "lecture-content" 
             :lecture/start "lecture-start"
             :lecture/end "lecture-end"
             :lecture/seqno "lecture-seqno"
             :lecture/url "lecture-url"
             :lecture/email "lecture-email"
             :lecture/wiki "lecture-wiki"
            }


    :question {:question/title "question-title" 
               :question/author "question-author"
               :question/type "question-type"
               :question/content "question-content"
               :question/url "question-url"
               :question/difficulty "question-difficulty"
               :question/tag "question-tag"
              }

    :assignment {:assignment/person 
                    (fn [thing-id]
                      (entity-view/div-form-input-sel thing-id "assign-form" "assignto-name"))
                      
                 :assignment/hint 
                    (fn [thing-id]
                      (entity-view/div-form-input-sel thing-id "assign-form" "assignto-hint"))

                 :assignment/end 
                    (fn [thing-id]
                      (entity-view/div-form-input-sel thing-id "assign-form" "assignto-end"))
                }

    :answer {:answer/title
                  (fn [thing-id]
                    (entity-view/div-form-textarea-sel thing-id "answer-form" "answer-title"))
            }

    :grade {:grade/score
                  (fn [thing-id]
                    (entity-view/div-form-input-sel thing-id "grade-form" "grade-score"))

            :grade/comments
                  (fn [thing-id]
                    (entity-view/div-form-input-sel thing-id "grade-form" "grade-comments"))
            }
                      
    :group {:group/title "group-title"
            :group/author "group-author"
            :group/type "group-type"
            :group/url "group-url"
            :group/email "group-email"
            :group/wiki "group-wiki"
           }

    :comments {:comments/title 
                  (fn [thing-id]  ; input field id is comments-title
                    (entity-view/div-form-textarea-sel thing-id "reply-form" "comments-title"))
              }
  })


;;==================================================================================
;; submt fn for new thing form save btn, called from submit action transoform event
;;==================================================================================
(defn submit-fn
  [add-thing-type form override-map messages]
  (fn [e]
    (let [ ; input-field defined in thing type attr map
          input-map (get thing-input-map add-thing-type)
          input-fields (keys input-map)
          input-vals (->> (vals input-map)
                          (map #(dom/by-id %))
                          (map #(.-value %)))
          details (-> (zipmap input-fields input-vals)
                      ; transform parent status and gender
                      (util/update-enum add-thing-type "status" false)
                      (util/update-enum add-thing-type "gender" false)
                      ; transform thing type enum
                      (util/update-enum add-thing-type "type" false)
                      (util/update-time add-thing-type "start" false)
                      (util/update-time add-thing-type "end" false)
                      (assoc :thing-type add-thing-type) ; required for post-submit-thing dispatch
                      (merge override-map))
         ]
      (.log js/console (str add-thing-type " override-map" override-map))
      (.log js/console (str add-thing-type " new form submitted details " details))
      (dom/destroy! form)
      (msgs/fill :create-thing messages {:details details}))))


;;================================================================================
; display add thing template inside filtered thing
; path is [:nav :course 1 :add-lecture]
;;================================================================================
(defn add-thing-form
  "instantiate new thing form for thing-type, return div code to be appended to parent"
  [add-thing-type r path]
  (let [thing-type (last path)
        id (render/new-id! r path)   ; new id for []
        
        templ (add-thing-type templates)
        html (templates/add-template r path templ)
        divcode (html {:id id})
       ]
    (.log js/console (str "add thing form at " path " type " add-thing-type))
    divcode))


;--------------------------------------------------------------------
; when form submitted, we instantiate create-thing msg, collect input fields.
; message is :create-thing thing-type, path is render path, only for logging. 
; submit-fn use thing-input-map to collect input field and ret filled msgs.
;--------------------------------------------------------------------
; invoke js datetimepicker fn so that so that picker btn is responsible.
(defn add-thing-datetimepicker
  [add-thing-type]
  (doseq [p (add-thing-type entity-view/create-thing-datetimepicker)]
    (js/datetimepicker p)))


(defn handle-add-thing-submit
  ([add-thing-type path override-map input-queue]
    (let [messages [{msgs/topic [:create add-thing-type]
                     msgs/type :create-thing
                     (msgs/param :details) {}}] ]
      (handle-add-thing-submit add-thing-type path messages 
                               override-map input-queue)))
  
  ([add-thing-type path messages override-map input-queue]
    (let [form (dom/by-class (str (name add-thing-type) "-form"))
          submit-fn (submit-fn add-thing-type form override-map messages)]

      
      (.log js/console (str "enable add thing form submit " add-thing-type path))
      (add-thing-datetimepicker add-thing-type)
      (handle-add-thing-submit form input-queue submit-fn)))

  ([form input-queue submit-fn]
    (events/send-on :submit form input-queue submit-fn)))


; handle add thing form cancel
(defn handle-add-thing-cancel
  [add-thing-type]
  (let [form (dom/by-class (str (name add-thing-type) "-form"))
        btn-cancel (-> form 
                       (dx/xpath "//button[@id='cancel']"))]
    (.log js/console (str "enable add thing form cancel path " path))
    (de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))))
  

;--------------------------------------------------------------------
; inline form submit fn collect form input fields values and ret filled msg.
; input fields are mapped inside thing-input-map, thing-id suffixed for uniq.
;--------------------------------------------------------------------
(defn inline-form-submit-fn
  [add-thing-type thing-id form override-map messages]
  (fn [e]
    (let [input-map (get thing-input-map add-thing-type)
          input-fields (keys input-map)
          input-vals (->> (vals input-map)
                          (map #(% thing-id))
                          (map #(dom/value %)))
          details (-> (zipmap input-fields input-vals)
                      ; transform parent status and gender
                      (util/update-enum add-thing-type "status" false)
                      (util/update-enum add-thing-type "gender" false)
                      ; transform thing type enum
                      (util/update-enum add-thing-type "type" false)
                      (util/update-time add-thing-type "start" false)
                      (util/update-time add-thing-type "end" false)
                      (assoc :thing-type add-thing-type) ; required for post-submit-thing dispatch
                     (merge override-map))
          ]
        (.log js/console (str add-thing-type " override-map" override-map " " details))
        ((toggle-hide-fn form) nil)  ; hide the form
        (msgs/fill :create-thing messages {:details details})
    )))


; handle inline form submit
(defn handle-inline-form-submit
  ([add-thing-type thing-id form override-map input-queue]
    (let [messages [{msgs/topic [:create add-thing-type]
                     msgs/type :create-thing
                     (msgs/param :details) {}}] ]
      (handle-inline-form-submit add-thing-type 
                                 thing-id 
                                 form 
                                 messages 
                                 override-map 
                                 input-queue)))
  
  ([add-thing-type thing-id form messages override-map input-queue]
    ; create inline form submit-fn closure of all args
    (let [submit-fn 
            (inline-form-submit-fn add-thing-type thing-id form override-map messages)]
      (.log js/console (str "enable add thing form submit " add-thing-type thing-id))
      (handle-inline-form-submit form input-queue submit-fn)))

  ([form input-queue submit-fn]
    (events/send-on :submit form input-queue submit-fn)))


;--------------------------------------------------------------------
; upvote like submission, need to pass in push render to update vote count.
; nav path is [:nav :parent 1], render path is [:main/:header/:filter]
;--------------------------------------------------------------------
(defn upvote-submit-fn
  [r thing-type messages input-queue]
  (fn [evt]
    (let [; create a like upon upvote click
          create-msgs [{msgs/topic [:create :like]
                        msgs/type :create-thing
                        (msgs/param :details) {}}]
          thing-map ((msgs/param :thing-map) (first messages))
          thing-id (:db/id thing-map)
          rpath ((msgs/param :rpath) (first messages))
          
          upvote (entity-view/thing-attr-val thing-map thing-type "upvote")
          thing-title (entity-view/thing-attr-val thing-map thing-type "title")
          details (-> {:like/origin thing-id
                       :like/title (str "liking " thing-title)
                       :like/person :current-user}
                  )
          new-msgs (msgs/fill :create-thing create-msgs {:details details})
          ]
      (.log js/console (str "upvote clicked inc "  upvote new-msgs))
      (templates/update-t r rpath {:upvote (str (inc upvote))})
      (doseq [m new-msgs]
        (p/put-message input-queue m)))))


;--------------------------------------------------------------------
; 
; nav path is [:nav :parent 1], render path is [:main/:header/:filter]
;--------------------------------------------------------------------
(defn thing-details-view
  [r rpath qpath thing-map input-queue]
  (prn "thing details view "))
