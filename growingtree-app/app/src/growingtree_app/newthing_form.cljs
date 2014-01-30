(ns growingtree-app.newthing-form
  (:require [cljs.reader]
            [domina :as dom]
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
; (defn toggle-hide-fn
;   "return an event handler fn that toggen hide css class of the form"
;   [form clz]
;   (fn [_] 
;     (let [hidden (dom/has-class? form "hide")]
;       (.log js/console (str "toggle hide link clicked " clz hidden))
;       (if hidden
;         (dom/remove-class! form "hide")
;         (dom/add-class! form "hide"))
;       ; ret whether we displayed the form
;       (not hidden))))


;;==================================================================================
; thing input map template thing-form input field template id, id value, and placeholder prompts.
; each thing-type has a map of inputs, key is datum attribute, value is a fn that rets
; a vector of value, [input-temp-name input-id input-prompt :input-type]
;;==================================================================================
(def thing-input-map
  {
    :parent {:person/title (fn [_] ["person-title" "person-title" "name" :text])
             :person/lname (fn [_] ["person-lname" "person-lname" "last name" :text])
             :person/address (fn [_] ["person-address" "person-address" "address" :text])
             :person/email (fn [_] ["person-email" "person-email" "user@email.com" :tag])
             :person/phone (fn [_] ["person-phone" "person-phone" "123-456-789" :tag])
             :person/status (fn [_] ["person-status" "person-status" "active" :enum])
             :person/url (fn [_] ["person-url" "person-url" "url..." :tag])
             :person/gender (fn [_] ["person-type" "person-type" "Male" :enum])
            }

    :child { :person/title (fn [_] ["person-title" "person-title" "name" :text])
             :person/lname (fn [_] ["person-lname" "person-lname" "last name" :text])
             :person/address (fn [_] ["person-address" "person-address" "address" :text])
             :person/email (fn [_] ["person-email" "person-email" "user@email.com" :tag])
             :person/phone (fn [_] ["person-phone" "person-phone" "123-456-789" :tag])
             :person/status (fn [_] ["person-status" "person-status" "active" :enum])
             :person/url (fn [_] ["person-url" "person-url" "url..." :tag])
             :person/gender (fn [_] ["person-type" "person-type" "Male" :enum])
            }

    :course {:course/title (fn [_] ["course-title" "course-title" "title of course" :text])
             :course/author (fn [_] ["course-author" "course-author" "offer by..." :tag])
             :course/type (fn [_] ["course-type" "course-type" "type of course" :enum])
             :course/content (fn [_] ["course-content" "course-content" "content..." :text]) 
             :course/url (fn [_] ["course-url" "course-url" "url..." :tag])
             :course/email (fn [_] ["course-email" "course-email" "user@email.com" :tag])
            }

    :lecture {:lecture/title (fn [_] ["lecture-title" "lecture-title" "title..." :text])
             :lecture/author (fn [_] ["lecture-author" "lecture-author" "offered by.." :tag])
             :lecture/course (fn [_] ["lecture-course" "lecture-course" "course of lecture" :tag])
             :lecture/type (fn [_] ["lecture-type" "lecture-type" "lecture type" :enum])
             :lecture/content (fn [_] ["lecture-content" "lecture-content" "content..." :text]) 
             :lecture/start (fn [_] ["lecture-start" "lecture-start" "start at..." :datetime])
             :lecture/end (fn [_] ["lecture-end" "lecture-end" "end at ..." :datetime])
             :lecture/seqno (fn [_] ["lecture-seqno" "lecture-seqno" "sequence No." :tag])
             :lecture/url (fn [_] ["lecture-url" "lecture-url" "url..." :tag])
             :lecture/email (fn [_] ["lecture-email" "lecture-email" "lecture@email.com" :tag])
             :lecture/wiki (fn [_] ["lecture-wiki" "lecture-wiki" "wiki link" :tag])
            }

    :question {:question/title (fn [_] ["question-title" "question-title" "title of question" :text])
               :question/author (fn [_] ["question-author" "question-author" "asked by..." :tag])
               :question/type (fn [_] ["question-type" "question-type" "question type" :enum])
               :question/content (fn [_] ["question-content" "question-content" "content.." :text])
               :question/url (fn [_] ["question-url" "question-url" "url..." :tag])
               :question/difficulty (fn [_] ["question-difficulty" "question-difficulty" "difficulty" :text])
               :question/tag (fn [_] ["question-tag" "question-tag" "tags..." :tag])
              }

    :enrollment {:enrollment/person 
                    (fn [thing-id]
                      ["enrollment-name" (str "enrollment-name-" thing-id) "student name" :tag])
                 :enrollment/remarks 
                    (fn [thing-id]
                      ["enrollment-remarks" (str "enrollment-remarks-" thing-id) "remarks" :text])
                }

    :assign {:assignment/person
              (fn [thing-id]
                ["assign-name" (str "assign-name-" thing-id) "assign to..." :tag])
                      
             :assignment/hint 
              (fn [thing-id]
                ["assign-hint" (str "assign-hint-" thing-id) "hint..." :text])

             :assignment/end 
               (fn [thing-id]
                  ["assign-end" (str "assign-end-" thing-id) "due at ..." :datetime])

            :assignment/picker-end
               (fn [thing-id]
                  ["picker-assign-end" (str "picker-assign-end-" thing-id) "due at ..." :datetime])
            }

    :answer {:answer/title
              (fn [thing-id]
                ["answer-title" (str "answer-title-" thing-id) "my answer is..." :text])
            }

    :grade {:grade/score
              (fn [thing-id]
                ["grade-score" (str "grade-score-" thing-id) "100/100" :text])

            :grade/comments
              (fn [thing-id]
                ["grade-comments" (str "grade-comments-" thing-id) "comments..." :text])
           }


    :group {
            :group/title (fn [_] ["group-title" "group-title" "title of group" :text])
            :group/author (fn [_] ["group-author" "group-author" "admin of group" :tag])
            :group/type (fn [_] ["group-type" "group-type" "type of group" :enum])
            :group/url (fn [_] ["group-url" "group-url" "url of group" :tag])
            :group/email (fn [_] ["group-email" "group-email" "email of group" :tag])
            :group/wiki (fn [_] ["group-wiki" "group-wiki" "wiki of group" :tag])
          }

    :comments {:comments/title 
                (fn [thing-id]  ; input field id is comments-title
                  ["comments-title" (entity-view/div-form-textarea-sel thing-id "reply-form" "comments-title") "comments..." :text])
              }
  })



; when displaying thing details, use set-value to set the text value in each input
; input field id is the key of thing-details-view.
(defn set-input-value
  [thing-type thing-details-view]
  (doseq [k (keys thing-details-view)]
    (.log js/console (str "set-input-val " k (k thing-details-view)))
    (dom/set-value! (dx/xpath (str "//input[@id='" (name k) "']"))
                    (k thing-details-view))
    ))
 

;;================================================================================
; template input id fields with thing-id when displaying add thing form 
;;================================================================================
; append thing-id to input id only when thing-id is not nil. 
(defn add-thing-input-id
  [add-thing-type thing-id]
  (let [input-vec (->> (add-thing-type thing-input-map)
                       (vals)
                       (map #(% thing-id)))
       ]
    (reduce
      (fn [tot [input-name input-id prompts]]
        (assoc tot (keyword input-name) input-id))
        {}
        input-vec)))


;;================================================================================
; a mapping for datetimepicker id for each new thing type
(def thing-datetimepicker
  {
    :lecture [(fn [_] "lecture-start-picker")
              (fn [_] "lecture-end-picker")]
    
    ; create assign form
    :assign [ (fn [thing-id] (str "picker-assign-end-" thing-id)) ]
  })


; invoke js datetimepicker fn so that so that picker btn is responsible.
(defn add-thing-datetimepicker
  [thing-type thing-id]
  (when-let [picker-id-fns (thing-type thing-datetimepicker)]
    (doseq [id-fn picker-id-fns]
      (.log js/console "add thing datetimepick " (id-fn thing-id))
      (js/datetimepicker (id-fn thing-id)))))


;;================================================================================
; from thing-input-map, get input value vector with input name,id,prompt, type.
; filter out :tag type and project 2nd and 3rd column, which is div id and prompts.
;;================================================================================
; (["course-title" "course-title" "title of course"] ["course-author" "course-author" "offer by..."] ...)
(defn add-thing-tagsInput 
  [add-thing-type thing-id]
  (let [tags-input-map 
          (->> (add-thing-type thing-input-map)
               (vals)
               (map #(% thing-id)) ; [[input-name1 input-id1 prompt1 :type] ...]
               (filter #(= (last %) :tag) )
               (mapcat #((juxt second (fn [v] (nth v 2))) %) ) ; the 2nd and 3rd column
               (apply hash-map)
            )
        ]
    (.log js/console (str "tags-input-map " tags-input-map ))
    (doseq [[input-id prompt] tags-input-map]
      (js/tagsInput input-id prompt))))


;;================================================================================
; display add thing template inside filtered thing
; path is [:nav :course 1 :add-lecture] [:nav :course 2 :enroll]
;;================================================================================
(defn add-thing-form-id
  [add-thing-type thing-id]
  (if (and thing-id 
           (not (js/isNaN (js/parseInt thing-id 10))))
    (str (name add-thing-type) "-" thing-id)
    (str (name add-thing-type) "-form")))


(defn add-thing-form
  "instantiate new thing form for thing-type, return div code to be appended to parent"
  [add-thing-type thing-id r navpath]
  (let [form ((keyword (str (name add-thing-type) "-form")) templates)
        html (templates/add-template r navpath form)
        form-val (merge {:id (add-thing-form-id add-thing-type thing-id)}
                        (add-thing-input-id add-thing-type thing-id))
        divcode (html form-val)
       ]
    (.log js/console (str "add-thing-form navpath " navpath " type " add-thing-type " " form-val))
    divcode))


;--------------------------------------------------------------------------------
; toggle fn to display new thing form, and handle add thing submit.
; navpath is [:course 1 :add-lecture]
;--------------------------------------------------------------------------------
(defn toggle-add-thing-form-fn
  "return an event handler fn that toggen hide css class of the form"
  [add-thing-type r navpath parent-div-id override-map input-queue]
  (fn [_] 
    (let [;newthing-div "new-subthings"    ; div defined in thing details
          thing-id (second (reverse navpath))
          parent-div (dom/by-id parent-div-id)
          nchild (count (dom/children (dx/xpath (str "//div[@id='" parent-div-id "']"))))
          add-thing-form (add-thing-form add-thing-type thing-id r navpath)
          ]
      (.log js/console (str add-thing-type " link clicked nchild " nchild navpath " " parent-div-id))

      ; remove all children of all child-form when change.
      (when (= nchild 0)
        (dom/destroy-children! (dom/by-class "child-form")))

      (if (= nchild 0)
        (dom/append! parent-div add-thing-form)
        (dom/destroy-children! parent-div))

      ; enable event must live outside the same block of dom append displaying form.
      (if (= nchild 0)
        (do
          (handle-add-thing-submit add-thing-type navpath override-map input-queue)
          (handle-add-thing-cancel add-thing-type)
          ; should do this after form being added to dom.
          (add-thing-datetimepicker add-thing-type thing-id)
          (add-thing-tagsInput add-thing-type thing-id)
        ))
    )))

;;==================================================================================
;; submt fn for new thing form save btn, called from submit action transoform event
;;==================================================================================
(defn submit-fn
  [add-thing-type navpath form override-map messages input-queue]
  (fn [e]
    (let [thing-id (second (reverse navpath)) ; navpath [:course 1 :add-lecture] [:lecture 2 :enroll]
          ; input-field defined in thing type attr map
          input-map (get thing-input-map add-thing-type)
          input-fields (keys input-map)
          input-vals (->> (vals input-map)
                          (map #(% thing-id))  ; [input-name input-id prompt]
                          (map #(dom/by-id (second %)))   
                          (map #(.-value %)))
          details (-> (zipmap input-fields input-vals)
                      ; transform parent status and gender
                      (util/update-enum add-thing-type "status" false)
                      (util/update-enum add-thing-type "gender" false)
                      ; transform thing type enum
                      (util/update-enum add-thing-type "type" false)
                      (util/update-time add-thing-type "start" false)
                      (util/update-time add-thing-type "end" false)
                      ; required for post-submit-thing dispatch
                      (assoc :thing-type add-thing-type) 
                      (merge override-map))
          newthing-msgs (msgs/fill :create-thing messages {:details details})
         ]
      ;(.log js/console (str add-thing-type " inputs " input-fields input-vals))
      (.log js/console (str add-thing-type " add new thing submitted " navpath " " details))
      (dom/destroy! (dom/by-id (add-thing-form-id add-thing-type thing-id)))
      (dom/destroy-children! (dom/by-class "child-form"))
      (de/prevent-default e)
      
      ; inject newthing msg before refresh msg
      (doseq [m newthing-msgs]
        (p/put-message input-queue m))
      
      ; refresh by re-sending the nav path, navpath (:question 1 :assignto)
      (util/refresh-nav-path add-thing-type navpath input-queue)
    )))


;--------------------------------------------------------------------
; when form submitted, we instantiate create-thing msg, collect input fields.
; message is :create-thing thing-type, path is render path, only for logging. 
; submit-fn use thing-input-map to collect input field and ret filled msgs.
; navpath [:course 1 :add-lecture] [:lecture 17592186045430 :enroll]
;--------------------------------------------------------------------
; handle add thing form cancel
(defn handle-add-thing-cancel
  [add-thing-type]
  (let [form (dom/by-class (str (name add-thing-type) "-form"))
        btn-cancel (-> form 
                       (dx/xpath "//button[@id='cancel']"))]
    (.log js/console (str "enable add thing form cancel " add-thing-type))
    (de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))))


; navpath [:course 1 :add-lecture] [:lecture 17592186045430 :enroll]
(defn handle-add-thing-submit
  ([add-thing-type navpath override-map input-queue]
    (let [messages [{msgs/topic [:create add-thing-type]
                     msgs/type :create-thing
                     (msgs/param :details) {}}] ]
      (handle-add-thing-submit add-thing-type navpath messages 
                               override-map input-queue)))
  
  ([add-thing-type navpath messages override-map input-queue]
    (let [thing-id (second (reverse navpath))
          form (dom/by-class (str (name add-thing-type) "-form"))
          submit-fn (submit-fn add-thing-type navpath form override-map 
                               messages input-queue)
          ]
      (.log js/console (str "enable add thing form submit " add-thing-type navpath))
      ;(events/send-on :submit form input-queue submit-fn)
      (de/listen! form :submit submit-fn)
      ))
  )


;--------------------------------------------------------------------
; inline form submit fn collect form input fields values and ret filled msg.
; input fields are mapped inside thing-input-map, thing-id suffixed for uniq.
; deprecated!!!
;--------------------------------------------------------------------
(defn inline-form-submit-fn
  [add-thing-type thing-id form override-map messages]
  (fn [e]
    (let [input-map (get thing-input-map add-thing-type)
          input-fields (keys input-map)
          input-vals (->> (vals input-map)
                          (map #(% thing-id))
                          (map #(dom/value (second %))))
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
        (.log js/console (str add-thing-type " inline-form-submit-fn details " details))
        ((util/toggle-hide-fn form nil) nil)  ; hide the inline form
        (msgs/fill :create-thing messages {:details details}) ; ret msg to be sent
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
          ; render path for current node is in (:rpath message)
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
; thing details view, called from render value-thing-details
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
    (.log js/console (str "thing details view default empty value " thing-view))
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
    (.log js/console (str "thing details view parent " thing-view))
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
    (.log js/console (str "thing details view course " thing-view))
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
    (.log js/console (str "thing details view lecture " thing-view))
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
    (.log js/console (str "thing details view question " thing-view))
    thing-view))


(defmethod thing-details-view
  :assignment
  [r rpath qpath thing-map input-queue]
  (let [thing-type (second rpath)
        thing-view {
          :assignment-title (get-in thing-map [:assignment/title])
          :assignment-author (get-in thing-map [:assignment/author :person/title]) ; one author for each assign
          :assignment-person (get-in thing-map [:assignment/person :person/title]) ; one author for each assign
          :assignment-origin (get-in thing-map [:assignment/origin :question/title])
          :assignment-start (util/format-time (get-in thing-map [:assignment/start]))
          :assignment-end (util/format-time (get-in thing-map [:assignment/end]))
          :assignment-type (get-in thing-map [:assignment/type])
          :assignment-hint (get-in thing-map [:assignment/hint])
          :assignment-priority (str (or (get-in thing-map [:assignment/priority]) "normal"))
          :assignment-tag (get-in thing-map [:assignment/tag])
        }
       ]
    (.log js/console (str "thing details view assignment " thing-view))
    thing-view))
