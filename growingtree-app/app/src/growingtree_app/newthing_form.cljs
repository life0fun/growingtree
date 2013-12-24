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
      (.log js/console (str "toggle hide link clicked " clz))
      (if hidden
        (dom/remove-class! form "hide")
        (dom/add-class! form "hide")))))


; toggle to display new thing form, and enable submit button.
(defn toggle-add-thing-form-fn
  "return an event handler fn that toggen hide css class of the form"
  [add-thing-type r path override-map input-queue]
  (fn [_] 
    (let [parent-div-id "new-subthing"
          parent (dom/by-id parent-div-id)
          nchild (count (dom/children (dx/xpath (str "//div[@id='" parent-div-id "']"))))
          add-thing-form (add-thing-form add-thing-type r path)  ; add lecture
          ]
      (.log js/console (str add-thing-type " link clicked " nchild))
      (if (= nchild 0)
        (dom/append! parent add-thing-form)
        (dom/destroy-children! parent))

      ; enable event must live outside the same block of dom append displaying form.
      (if (= nchild 0)
        (do
          (handle-add-thing-submit add-thing-type path override-map input-queue)
          (handle-add-thing-cancel add-thing-type)))
    )))


;;==================================================================================
; submit-fn uses this map to id dom input fields and collect input value to entity attr.
; form dom id refer to newthing.html for dom elements
;;==================================================================================
(def thing-type-attr
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
                      (-> (entity-view/assign-input-sel thing-id "assignto-name")
                          (dx/xpath)))
                 :assignment/hint 
                    (fn [thing-id]
                      (-> (entity-view/assign-input-sel thing-id "assignto-hint")
                          (dx/xpath)))
                 :assignment/end 
                    (fn [thing-id]
                      (-> (entity-view/assign-input-sel thing-id "assignto-end")
                          (dx/xpath)))
                }

    :group {:group/title "group-title"
            :group/author "group-author"
            :group/type "group-type"
            :group/url "group-url"
            :group/email "group-email"
            :group/wiki "group-wiki"
           }
  })


;;==================================================================================
;; submt fn for new thing form save btn, called from submit action transoform event
;;==================================================================================
(defn submit-fn
  [add-thing-type form override-map messages]
  (fn [e]
    (let [ ; input-field defined in thing type attr map
          type-attr (get thing-type-attr add-thing-type)
          input-fields (keys type-attr)
          input-vals (->> (vals type-attr)
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
; handle add thing form submit
;--------------------------------------------------------------------
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
; inline form submit handling
; inline form needs thing-id to id dom element.
;--------------------------------------------------------------------
(defn inline-form-submit-fn
  [add-thing-type thing-id form override-map messages]
  (fn [e]
    (let [type-attr (get thing-type-attr add-thing-type)
          input-fields (keys type-attr)
          input-vals (->> (vals type-attr)
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
        (.log js/console (str add-thing-type " override-map" override-map))
        (.log js/console (str add-thing-type " inline form details " details))
        ((toggle-hide-fn form) nil)  ; hide the form
        (msgs/fill :create-thing messages {:details details}))))


; handle inline form submit
(defn handle-inline-form-submit
  ([add-thing-type thing-id form override-map input-queue]
    (let [messages [{msgs/topic [:create add-thing-type]
                     msgs/type :create-thing
                     (msgs/param :details) {}}] ]
      (handle-inline-form-submit add-thing-type thing-id form messages 
                                 override-map input-queue)))
  
  ([add-thing-type thing-id form messages override-map input-queue]
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

