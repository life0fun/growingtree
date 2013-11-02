(ns growingtree-app.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [growingtree-app.behavior :as behavior]
            [growingtree-app.rendering :as rendering]))


;; In start namespace, the application is built and started.

; create app with render-fn to consume app model msg delta.
(defn create-app [render-config]
  (let [app (app/build behavior/growingtree-app)
        ; render fn maps app model root to DOM div id="content"
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    (app/begin app)

    ; send msg to bootstrap the app ! fake user clicked nav course
    (p/put-message (:input app) 
                   {msg/type :set-nav-category 
                    msg/topic [:nav :category]
                    :category :courses})

    {:app app :app-model app-model}))

; set up service to consume effect queue
;(defn setup-services [app ->services services-fn]
;  (app/consume-effects (:app app) services-fn)
;  (p/start (->services (:app app))))


(defn ^:export main []
  ;; config/config.edn refers to this namespace as a main namespace
  ;; for several aspects. A main namespace must have a no argument
  ;; main function. To tie into tooling, this function should return
  ;; the newly created app.
  (create-app (rendering/render-config)))
