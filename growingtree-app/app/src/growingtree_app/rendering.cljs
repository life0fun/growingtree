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

; pad time with leading 0 for single digit.
(defn- format-time [d]
  (let [pad (fn [n] (if (< n 10) (str "0" n) (str n)))]
    (str (pad (.getHours d)) ":"
         (pad (.getMinutes d)) ":"
         (pad (.getSeconds d)))))


; render converts node in nested map to dom element. The root node []
; is configured when we created the render.
; render fn has 3 args, render, render op and a transmitter to sends
; data back to app. Render op is specified by transforms in emitter.
; transforms say part of UI should do X and render trigger X on events.
; (defn enable-x [r [transform-enable path transform-name messages] d]
;
; new-id can be used to create the id for the new dom element.
; add-template attaches dynamic template div subtree to dom.
(defn render-home-page [r [_ path] transmitter]
  (let [parent (render/get-parent-id r path)
        id (render/new-id! r path)
        html (templates/add-template r path (:home-page templates))]
    ; invoke reted html fn to gen html and attach to dom using domina.
    (dom/append! (dom/by-id parent) (html {:id id}))))

; create a top course node, attach to toprows div.
(defn create-course-node [r [_ path] d]
  (let [id (render/new-id! r path)
        html (templates/add-template r path (:toprow-node templates))]
    (templates/prepend-t r [:course] {:toprows (html {:id id :text "learning clojure"})})))

; use framework update-t to update dom upon new courselectures list recved.
(defn update-courselectures [r [_ path old new] transmitter]
  (let [id (render/get-id r path)
        msg (assoc new :id (:id new) :time (format-time (:time new)))]
    ; set data under [:course :courselectures] to new msg map
    (templates/update-t r path {:lectures msg}))) 


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


; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [[:node-create  [:course] render-home-page]
   [:node-destroy [:course] auto/default-exit]
   [:node-create  [:course :*] create-course-node] 
   [:value [:course :courselectures] update-courselectures]])
