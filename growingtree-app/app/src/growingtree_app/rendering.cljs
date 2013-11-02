(ns growingtree-app.rendering
  (:require [domina :as dom]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.messages :as msgs]
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
(defn render-home-page 
  [r [_ path] transmitter]
  (let [parent (render/get-parent-id r path)  ; root of top level is [], maps to div id=content
        id (render/new-id! r path)  ; top level nodes maps to dom div id=root
        html (templates/add-template r path (:home-page templates))] ; [:nav] node contains homepage template
    ; invoke reted html fn to gen html and attach to dom using domina.
    (dom/append! (dom/by-id parent) (html))
  ))


; gen a dom render id for this newly created node and append it as the child of
; top level [:course] path node.
(defn create-course-node 
  [r [_ path] d]
  (let [parent (render/get-parent-id r path)
        id (render/new-id! r path)  ; gen a domRender id for this 
        html (templates/add-template r path (:toprow-node templates))
        ]
    ;(templates/prepend-t r [:course] 
    ;                     {:toprows (html {:id id :text "learning clojure is fun"})})
    (dom/append! (dom/by-id "toprow-list") (html {:id id :text "learning clojure from dom"}))
  ))

; use framework update-t to update dom upon new courselectures list recved.
(defn update-courselectures 
  [r [_ path old new] transmitter]
  (let [id (render/get-id r path)
        msg (assoc new :id (:id new) :time (format-time (:time new)))]
    ; set data under [:course :courselectures] to new msg map
    (templates/update-t r path {:lectures msg})))


; associate sidebar click event to fill msg of set course filter msg to update data model.
(defn course-filtered-transforms 
  [r [_ path transfn msg] d]
  (let [m (msgs/fill :set-course-filter 
                      msg {:filtered {:key :subject :value "function"}})]
    (events/send-on :click (dom/by-id "sidenav-parents") d m)))

  
; update the list of filtered course
(defn render-course-filtered
  [r [_ path old new] transmitter]
  (let [id (render/new-id! r path)
        html (templates/add-template r path (:toprow-node templates))
        htmltext (html {:id id :text (:value new)})]  ; div field content:text
    (templates/prepend-t r [:course] {:toprows htmltext})))


; wire click event on nav sidebar to send nav category path node
(def category-transforms
  (fn [r [_ p k message] inq]
    (events/send-on :click (dom/by-id "sidenav-courses") inq
                    (msgs/fill :set-nav-category message {:category :courses})))
  )

; when user click nav sidebar, create new template attach to path node [:nav :category]
; and attach to toprow-list dom 
(defn render-nav-category
  [r [_ path oldv newv] transmitter]
  (let [;cat (:value newv)
        parent (render/get-parent-id r path)
        id (render/new-id! r path)  ; gen a domRender id for this 
        html (templates/add-template r path (:toprow-node templates))
       ]
    (. js/console (log "render-nav-category " ))
    ;(templates/prepend-t r [:course] 
    ;                     {:toprows (html {:id id :text "learning clojure is fun"})})
    (dom/append! (dom/by-id "toprow-list") (html {:id id :text "learning clojure from dom"}))
  ))

; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [[:node-create  [:nav] render-home-page]
   ;[:node-create  [:course] render-home-page]
   ;[:node-destroy [:course] auto/default-exit]
   ;[:node-create  [:course :*] create-course-node]
   
   [:transform-enable [:course :filtered] course-filtered-transforms]
   [:value [:course] render-course]
   [:value [:course :filtered] render-course-filtered]
   
   ; wire sidebar nav click to send this transform, and render value changed.
   [:transform-enable [:nav :category] category-transforms]
   [:value [:nav :category] render-nav-category]
  ])
