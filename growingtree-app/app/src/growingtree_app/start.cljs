(ns growingtree-app.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [growingtree-app.behavior :as behavior]
            [growingtree-app.services :as services]
            [growingtree-app.rendering :as rendering]))


;; In start namespace, the application is built and started.

(defn init-app-data-model
  "inject msg to input queue for behavior to create data model. normally not needed."
  [app]
  (p/put-message (:input app) 
                 {msg/type :create-app
                  msg/topic [:app]}))

; put msg into effect queue to trigger consume-fn send get request to /msgs api
(defn subscribe-to-msgs
  "put msg into effect queue to trigger consume-fn send get request to /msgs api"
  [app]
  (.log js/console "subscribe to msgs upon starting, directly inject msg to output queue")
  (p/put-message (:output app)   ; effect queue is output queue.
                 {msg/topic [:server]
                  msg/type :subscribe
                  (msg/param :body) {:out-message :subscribe}}))


; fake user clicked nav course side bar
(defn bootstrap-login
  [app]
  (p/put-message (:input app) 
                 {msg/type :login
                  msg/topic [:login :name]
                  (msgs/param :details) {}}))


; create app with render-fn to consume app model msg delta.
(defn create-app [render-config]
  (let [app (app/build behavior/growingtree-app)
        ; render fn maps app model root to DOM div id="content"
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)

    ; first, subscribe to server bcast msgs, inject msg to :effect queue directly
    ;(subscribe-to-msgs app)

    ; init app data model if needed. Normal emitter :init will do this
    ;(init-app-data-model app)
    
    {:app app :app-model app-model}))

; set up service to consume effect queue
(defn setup-services 
  [app ->services services-fn]
  (app/consume-effects (:app app) services-fn)
  (p/start (->services (:app app))))


(defn ^:export main []
  ;; config/config.edn refers to this namespace as a main namespace
  ;; for several aspects. A main namespace must have a no argument
  ;; main function. To tie into tooling, this function should return
  ;; the newly created app.
  (doto (create-app (rendering/render-config))
    (setup-services services/->Services services/services-fn)))
