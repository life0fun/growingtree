(ns growingtree-app.newthing-form
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
            [growingtree-app.util :as util]
            [growingtree-app.entity-view :as entity-view]
            [growingtree-app.selector :as sel]))


;; this ns contains code for handling ui event for newthing template.
;; see newthing.html for the template definition and db schema for attrs.

;;==================================================================================
; a map of thing type to a map of entity attribute, form dom id
; refer to newthing.html for dom elements
;;==================================================================================
(def thing-type-attr
  {
    :parent {:parent/name "parent-name"
             :parent/lname "parent-lname"
             :parent/gender "parent-type"
             :parent/address "parent-address"
             :parent/email "parent-email"
             :parent/phone "parent-phone"
             :parent/status "parent-status"
             :parent/openid "parent-url"
             :parent/children "parent-child"
            }

    :child {:child/name "child-name"
             :child/lname "child-lname"
             :child/gender "child-type"
             :child/address "child-address"
             :child/email "child-email"
             :child/phone "child-phone"
             :child/status "child-status"
             :child/openid "child-url"
            }

    :course {:course/title "course-title"
             :course/author "course-author"
             :course/type "course-type"
             :course/content "course-content" 
             :course/url "course-url"
             :course/email "course-email"
            }

    :homework {:homework/title "homework-title" 
               :homework/author "homework-author"
               :homework/type "homework-type"
               :homework/content "homework-content"
               :homework/url "homework-url"
               :homework/difficulty "homework-difficulty"
              }

    :group {:group/title "group-title"
            :group/author "group-author"
            :group/type "group-type"
            :group/url "group-url"
            :group/wiki "group-wiki"
           }
  })



;;==================================================================================
;; submt fn for new thing form save btn, called from submit action transoform event
;;==================================================================================
(defn submit-fn
  [thing-type form messages]
  (.log js/console "new thing form submit-fn " thing-type)
  (fn [e]
    (let [type-attr (get thing-type-attr thing-type)
          input-fields (keys type-attr)
          input-vals (->> (vals type-attr)
                          (map #(dom/by-id %))
                          (map #(.-value %)))
          details (-> (zipmap input-fields input-vals)
                      ; transform parent status and gender
                      (util/update-enum thing-type "status" true)
                      (util/update-enum thing-type "gender" false)
                      ; transform thing type enum
                      (util/update-enum thing-type "type" true)
                      )
         ]
      (.log js/console (str "new form submitted details " details))
      (dom/destroy! form)
      (msgs/fill :create-thing messages {:details details}))))


