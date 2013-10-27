(ns growingtree-app.rendering
  (:require [domina :as dom]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.render.push.handlers :as h]
            [io.pedestal.app.render.push.handlers.automatic :as auto])
  (:require-macros [growingtree-app.html-templates :as html-templates]))

; Load templates.
(def templates (html-templates/growingtree-app-templates))

; render config dispatch app model delta to render fn.
; render fn has 3 args, render, render op and a transmitter to sends
; data back to app. Render op is specified by transforms in emit.
; transforms say part of UI should do X and render trigger X on events.
; (defn enable-x [r [transform-enable path transform-name messages] d]
; render converts node in nested map to dom element. The root node []
; is configured when we created the render.
; new-id can be used to create the id for the new dom element.
; add-template attaches dynamic template div subtree to dom, ret a fn.
(defn render-index-page [r [_ path] transmitter]
  (let [parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path)
        html (templates/add-template r path (:index-page templates))]
    ; invoke reted html fn to gen html and attach to dom using domina.
    (dom/append! (dom/by-id parent) (html {:id id :message ""}))))


; render-message use framework update-t to update dom element value.
(defn render-message [renderer [_ path _ new-value] transmitter]
  (templates/update-t renderer path {:message new-value}))


; Use the `new-id!` function to associate a new id to the
; given path. With two arguments, this function will generate
; a random unique id. With three arguments, the given id will
; be associated with the given path.
(defn add-template [r [_ path :as delta] input-queue]      
  (let [parent (render/get-parent-id renderer path)
        id (render/new-id! r path)
        lectures (templates/add-template r path (:lecture-page templates))]
    ; template id set to div filed id
    (dom/append! (dom/by-id parent) (lectures {:id id}))))


; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [[:node-create  [:greeting] render-index-page]
   [:node-create  [:course] render-index-page]   ; at course page
   [:node-destroy   [:greeting] d/default-exit] 
   [:value [:greeting] render-message]])
