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
; a map of thing type to a map of entity attribute, form dom id
; refer to newthing.html for dom elements
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
  [thing-type form messages]
  (fn [e]
    (let [type-attr (get thing-type-attr thing-type)
          input-fields (keys type-attr)
          input-vals (->> (vals type-attr)
                          (map #(dom/by-id %))
                          (map #(.-value %)))
          nmsp (namespace (first input-fields))
          details (-> (zipmap input-fields input-vals)
                      ; transform parent status and gender
                      (util/update-enum nmsp "status" false)
                      (util/update-enum nmsp "gender" false)
                      ; transform thing type enum
                      (util/update-enum nmsp "type" false)
                      )
         ]
      (.log js/console (str thing-type " new form submitted details " details))
      (dom/destroy! form)
      (msgs/fill :create-thing messages {:details details}))))


;;================================================================================
; display add new thing template inside filtered thing
; path is [:nav :course 1 :add-lecture]
;;================================================================================
(defn add-thing-form
  "instantiate new thing form for thing-type, return div code to be appended to parent"
  [new-thing-type r path]
  (let [thing-type (last path)
        id (render/new-id! r path)   ; new id for []
        
        templ (new-thing-type templates)
        html (templates/add-template r path templ)
        divcode (html {:id id})
       ]
    (.log js/console (str "add thing form at " path " type " new-thing-type))
    divcode))


;
; handle new thing form from nav filtered thing div.
(defn enable-submit-new-thing-form 
  [thing-type path input-queue]
  (let [form (dom/by-class (str (name thing-type) "-form"))
        messages {msgs/topic [:submit thing-type]
                  msgs/type :submit
                  (msgs/param :details) {}
                 }
        btn-cancel (-> form 
                       (dx/xpath "//button[@id='cancel']"))
        submit-fn (submit-fn thing-type form messages)]
    (.log js/console (str "enable submit form " thing-type " path " path))
    (de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))
    (events/send-on :submit form input-queue submit-fn)
    ))