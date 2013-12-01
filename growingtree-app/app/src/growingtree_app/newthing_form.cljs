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
;; create new thing form submit handler, dispatch on thing type
;;==================================================================================

(defmulti submit-fn
  (fn [thing-type domform messages]
    thing-type))


;;==================================================================================
;; course template, refer to newthing.html for page element
;;==================================================================================
(defmethod submit-fn
  :course
  [type form messages]
  (.log js/console "submit-fn for " type)
  (fn [_]
    (let [
          input-fields [:title :author :type :content :url :email :comments]
          input-fieldname (map #(str (name type) "-" (name %)) input-fields)
          input-domids (map #(dom/by-id %) input-fieldname)
          input-vals (map #(.-value %) input-domids)
          details (zipmap input-fields input-vals)

          ; title (dom/by-id "course-title")
          ; title-val (.-value title)
          ; details {:title title-val}
          ]
      (.log js/console (str "submit-handler " type " val " details))
      (dom/destroy! form)
      (msgs/fill :creatething messages {:details details}))))

