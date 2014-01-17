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
        (dom/add-class! form "hide"))
      ; ret whether we displayed the form
      (not hidden))))


;;==================================================================================
; submit-fn uses this map to id dom input fields and collect input value to entity attr.
; form dom id refer to newthing.html for dom elements
; within each type, key is entity attr, value is form input id to provide value to entity attr.
;;==================================================================================
(def thing-input-map
  {
    :parent {:person/title "person-title"
             :person/lname "person-lname"
             :person/address "person-address"
             :person/email "person-email"
             :person/phone "person-phone"
             :person/status "person-status"
             :person/url "person-url"
             :person/gender "person-type"
            }

    :child { :person/title "person-title"
             :person/lname "person-lname"
             :person/address "person-address"
             :person/email "person-email"
             :person/phone "person-phone"
             :person/status "person-status"
             :person/url "person-url"
             :person/gender "person-type"
            }

    :family {:family/title "family-title"
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

    :enrollment {:enrollment/person 
                    (fn [thing-id]
                      (str "enrollment-name-" thing-id))
                 :enrollment/remarks 
                    (fn [thing-id]
                      (str "enrollment-remarks-" thing-id))
                }

    :assign {:assignment/person 
              (fn [thing-id]
                (str "assign-name-" thing-id))
                      
             :assignment/hint 
              (fn [thing-id]
                (str "assign-hint-" thing-id))

             :assignment/end 
               (fn [thing-id]
                  (str "assign-end-" thing-id))
            }

    :answer {:answer/title
              (fn [thing-id]
                (str "answer-title-" thing-id))
            }

    :grade {:grade/score
              (fn [thing-id]
                (str "grade-score-" thing-id))

            :grade/comments
              (fn [thing-id]
                (str "grade-comments-" thing-id))
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

; a mapping defines thing input field text value
(def thing-input-value
  {
    :person {:person-title "user name..."
             :person-lname "user last name..."
             :person-phone "user phone..."
             :person-email "user email..."
             :person-url   "user facebook id, twitter id, etc"
             :person-im "Instant Messenger Id"
             :person-address "users address "
             :person-status "active"
            }

    :parent {:person-title "user name..."
             :person-lname "user last name..."
             :person-phone "user phone..."
             :person-email "user email..."
             :person-url   "user facebook id, twitter id, etc"
             :person-im "Instant Messenger Id of the user"
             :person-address "users address "
             :person-status "active"
            }

    :child {:person-title "user name..."
             :person-lname "user last name..."
             :person-phone "user phone..."
             :person-email "user email..."
             :person-url   "user facebook id, twitter id, etc"
             :person-im "Instant Messenger Id"
             :person-address "users address "
             :person-status "active"
            }

    :course {:course-title "the title of course ..."
             :course-author "the author, default to current user"
             :course-content "brief content of the this course"
             :course-url "growingtrees.com"
             :course-email "course@group.growingtrees.com"
             :course-wiki "course/wiki"
            }

    :lecture {:lecture-title "the title of lecture ..."
             :lecture-author "the author, default to current user"
             :lecture-course "course title this lecture belong to, default to current course"
             :lecture-content "brief content of the this lecture"
             :lecture-start "hh:mm:ss MM/dd/yyyy"
             :lecture-end "hh:mm:ss MM/dd/yyyy"
             :lecture-seqno "lecture sequence No."
             :lecture-url "growingtrees.com"
             :lecture-email "lecture@group.growingtrees.com"
             :lecture-wiki "lecture/wiki"
            }

    :question {:question-title "the title of question ..."
             :question-author "the author, default to current user"
             :question-content "brief content of the this question"
             :question-url "growingtrees.com"
             :question-difficulty "question difficulty level"
             :question-tag "tags..."
            }

    :group {:group-title "the title of group ..."
             :group-author "the admin user of the group, default to current user" 
             :group-email "email for the group"
             :group-url "growingtrees.com/group"
             :group-wiki "group wiki page"
            }
  })


; a mapping for datetimepicker id for each new thing type
(def thing-datetimepicker
  {
    :lecture ["lecture-start-picker", "lecture-end-picker"]
  })


; a mapping of thing type to ids of thing tags input fields
; each map in the list entry key is input dom id, value is prompt text
(def thing-tagsinput
  {
    :parent [{"person-url" "url..."} {"person-email" "email..."} {"person-im" "jabber@..."}]
    :child [{"person-url" "url..."} {"person-email" "email..."} {"person-im" "jabber@..."}]
    :course [{"course-author" "author..."} {"course-url" "url..."} {"course-email" "email..."}]
    :lecture [{"lecture-author" "author..."} {"lecture-url" "url..."} {"lecture-email" "email..."}]
    :question [{"question-author" "author..."} {"question-tag" "tags..."}]
    :enrollment [{"enrollment-name" "attendee..."}]
  })


;;================================================================================
; get the create new thing form input ids
;;================================================================================
(defmulti add-thing-input-id
  (fn [add-thing-type thing-id]
    add-thing-type))


(defmethod add-thing-input-id
  :default
  [add-thing-type thing-id]
  {})


(defmethod add-thing-input-id
  :enrollment
  [add-thing-type thing-id]
  (let [input-ids ["enrollment-name" "enrollment-remarks"]]
    (reduce
      (fn [tot idname]
        (assoc tot (keyword idname) (str idname "-" thing-id)))
        {}
        input-ids)))


; add assignment use :assign as :assignment is for showing assignment details.
(defmethod add-thing-input-id
  :assign
  [add-thing-type thing-id]
  (let [input-ids ["assign-name" "assign-hint" "assign-end"]]
    (reduce 
      (fn [tot idname]
        (assoc tot (keyword idname) (str idname "-" thing-id)))
        {}
        input-ids)))


(defmethod add-thing-input-id
  :answer
  [add-thing-type thing-id]
  (let [input-ids ["answer-title"]]
    (reduce 
      (fn [tot idname]
        (assoc tot (keyword idname) (str idname "-" thing-id)))
        {}
        input-ids)))


(defmethod add-thing-input-id
  :grade
  [add-thing-type thing-id]
  (let [input-ids ["grade-score" "grade-comments"]]
    (reduce 
      (fn [tot idname]
        (assoc tot (keyword idname) (str idname "-" thing-id)))
        {}
        input-ids)))


; invoke js datetimepicker fn so that so that picker btn is responsible.
(defn add-thing-datetimepicker
  [thing-type]
  (doseq [p (thing-type thing-datetimepicker)]
    (js/datetimepicker p)))


(defn add-thing-tagsInput 
  [add-thing-type thing-id]
  (doseq [field (add-thing-type thing-tagsinput)]
    (let [[input-name prompt] (first (seq field))
          input-id (str input-name "-" thing-id)]
      (.log js/console (str "add-thing-tagsInput " add-thing-type " " input-id))
      (js/tagsInput input-id prompt))))


;;================================================================================
; display add thing template inside filtered thing
; path is [:nav :course 1 :add-lecture] [:nav :course 2 :enroll]
;;================================================================================
(defn add-thing-form
  "instantiate new thing form for thing-type, return div code to be appended to parent"
  [add-thing-type thing-id r rpath]
  (let [id (str (name add-thing-type) "-" thing-id)
        form ((keyword (str (name add-thing-type) "-form")) templates)
        html (templates/add-template r rpath form)
        form-val (merge {:id id}
                        (add-thing-input-id add-thing-type thing-id))
        divcode (html form-val)
       ]
    (.log js/console (str "add-thing-form rpath " rpath " type " add-thing-type))
    divcode))


; set the text in input placeholder
;(dom/set-value! (dx/xpath "//input[@id='person-title']") "hello")
(defn set-input-placeholder
  [thing-type value-map]
  (let [input-map (get thing-input-map thing-type)
        input-fields (keys input-map)
        input-ids (vals input-map)]
    (.log js/console (str "set input value " input-ids value-map))
    (doseq [input-id input-ids]
      (dom/set-value! (dx/xpath (str "//input[@id='" input-id "']"))
                      ((keyword input-id) value-map)))
    ))


; toggle to display new thing form, and handle add thing submit.
(defn toggle-add-thing-form-fn
  "return an event handler fn that toggen hide css class of the form"
  [add-thing-type r rpath parent-div-id override-map input-queue]
  (fn [_] 
    (let [;newthing-div "new-subthings"    ; div defined in thing details
          thing-id (second (reverse rpath))
          parent-div (dom/by-id parent-div-id)
          nchild (count (dom/children (dx/xpath (str "//div[@id='" parent-div-id "']"))))
          add-thing-form (add-thing-form add-thing-type thing-id r rpath)
          ]
      (.log js/console (str add-thing-type " link clicked div " nchild))
      (when (= nchild 0)
        (dom/destroy-children! (dom/by-class "child-form")))

      (if (= nchild 0)
        (dom/append! parent-div add-thing-form)
        (dom/destroy-children! parent-div))

      ; enable event must live outside the same block of dom append displaying form.
      (if (= nchild 0)
        (do
          (add-thing-datetimepicker add-thing-type)
          (add-thing-tagsInput add-thing-type thing-id)
          (handle-add-thing-submit add-thing-type rpath override-map input-queue)
          (handle-add-thing-cancel add-thing-type)))
    )))

;;==================================================================================
;; submt fn for new thing form save btn, called from submit action transoform event
;;==================================================================================
(defn submit-fn
  [add-thing-type rpath form override-map messages]
  (fn [e]
    (let [thing-id (second (reverse rpath))
          ; input-field defined in thing type attr map
          input-map (get thing-input-map add-thing-type)
          input-fields (keys input-map)
          input-vals (->> (vals input-map)
                          (map #(% thing-id))
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
      (.log js/console (str add-thing-type " inputs " input-fields input-vals))
      ;(.log js/console (str add-thing-type " new form submitted details " details))
      (dom/destroy-children! (dom/by-class "child-form"))
      (de/prevent-default e)
      (msgs/fill :create-thing messages {:details details}))))


;--------------------------------------------------------------------
; when form submitted, we instantiate create-thing msg, collect input fields.
; message is :create-thing thing-type, path is render path, only for logging. 
; submit-fn use thing-input-map to collect input field and ret filled msgs.
;--------------------------------------------------------------------
; handle add thing form cancel
(defn handle-add-thing-cancel
  [add-thing-type]
  (let [form (dom/by-class (str (name add-thing-type) "-form"))
        btn-cancel (-> form 
                       (dx/xpath "//button[@id='cancel']"))]
    (.log js/console (str "enable add thing form cancel " add-thing-type))
    (de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))))


; rpath [:nav :lecture 17592186045430 :enroll]
(defn handle-add-thing-submit
  ([add-thing-type rpath override-map input-queue]
    (let [messages [{msgs/topic [:create add-thing-type]
                     msgs/type :create-thing
                     (msgs/param :details) {}}] ]
      (handle-add-thing-submit add-thing-type rpath messages 
                               override-map input-queue)))
  
  ([add-thing-type rpath messages override-map input-queue]
    (let [thing-id (second (reverse rpath))
          form (dom/by-class (str (name add-thing-type) "-form"))
          submit-fn (submit-fn add-thing-type rpath form override-map messages)]
      (.log js/console (str "enable add thing form submit " add-thing-type rpath))
      (handle-add-thing-submit form input-queue submit-fn)))

  ([form input-queue submit-fn]
    (events/send-on :submit form input-queue submit-fn)))


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
; nav path is [:nav :parent 1], render path is [:main/:header/:filter]
;--------------------------------------------------------------------
; handle add thing form cancel
(defn handle-details-view-btn
  [thing-type]
  (let [form (dom/by-class (str (name thing-type) "-form"))
        btn-cancel (-> form 
                       (dx/xpath "//button[@id='cancel']"))
        btn-ok (-> form
                   (dx/xpath "//button[@id='submit']"))
        ]
    (.log js/console (str "handle detail view btns " thing-type))
    (de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))
    (de/listen! btn-ok :click (fn [e] (dom/destroy! form)))
    ))


;;==================================================================================
; thing details view
;;==================================================================================
(defmulti thing-details-view
  (fn [r rpath qpath thing-map input-queue]
    (second rpath)))


(defmethod thing-details-view
  :default
  [r rpath qpath thing-map input-queue]
  (let [thing-type (second (reverse rpath))
        thing-view {}
       ]
    (.log js/console (str "thing details view " thing-view))
    thing-view))


(defmethod thing-details-view
  :parent
  [r rpath qpath thing-map input-queue]
  (let [thing-type (second rpath)
        thing-view {
          :person-title (get-in thing-map [:person/title])
          :person-lname (get-in thing-map [:person/lname])
          :person-phone (get-in thing-map [:person/phone])
          :person-email (get-in thing-map [:person/email])
          :person-url (get-in thing-map [:person/url])
          :person-im (get-in thing-map [:person/im])
          :person-address (get-in thing-map [:person/address])
          :person-status (get-in thing-map [:person/status])
        }
       ]
    (.log js/console (str "thing details view " thing-view))
    thing-view))


(defmethod thing-details-view
  :course
  [r rpath qpath thing-map input-queue]
  (let [thing-type (second rpath)
        thing-view {
          :course-title (get-in thing-map [:course/title])
          :course-author (get-in thing-map [:course/author 0 :person/title])
          :course-content (get-in thing-map [:course/content])
          :course-url (get-in thing-map [:course/url])
          :course-email (get-in thing-map [:course/email])
          :course-wiki (get-in thing-map [:course/wiki])
        }
       ]
    (.log js/console (str "thing details view " thing-view))
    thing-view))


(defmethod thing-details-view
  :lecture
  [r rpath qpath thing-map input-queue]
  (let [thing-type (second rpath)
        thing-view {
          :lecture-title (get-in thing-map [:lecture/title])
          :lecture-author (get-in thing-map [:lecture/author 0 :person/title])
          :lecture-course (get-in thing-map [:lecture/course :course/title])
          :lecture-content (get-in thing-map [:lecture/content])
          :lecture-start (util/format-time (get-in thing-map [:lecture/start]))
          :lecture-end (util/format-time (get-in thing-map [:lecture/end]))
          :lecture-seqno (get-in thing-map [:lecture/seqno])
          :lecture-url (get-in thing-map [:lecture/url])
          :lecture-email (get-in thing-map [:lecture/email])
          :lecture-wiki (get-in thing-map [:lecture/wiki])
        }
       ]
    (.log js/console (str "thing details view " thing-view))
    thing-view))


(defmethod thing-details-view
  :question
  [r rpath qpath thing-map input-queue]
  (let [thing-type (second rpath)
        thing-view {
          :question-title (get-in thing-map [:question/title])
          :question-author (get-in thing-map [:question/author 0 :person/title])
          :question-content (get-in thing-map [:question/content])
          :question-url (get-in thing-map [:question/url])
          :question-difficulty (str (get-in thing-map [:question/difficulty]))
          :question-tag (get-in thing-map [:question/tag])
        }
       ]
    (.log js/console (str "thing details view " thing-view))
    thing-view))
