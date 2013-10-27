(ns growingtree-app.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [growingtree-app.behavior :as behavior]
            [growingtree-app.rendering :as rendering]))


;; In start namespace, the application is built and started.

; create app with render-fn to consume app model delta.
(defn create-app [render-config]
  (let [
        ;app is a record which implements the Receiver protocol.
        app (app/build behavior/growingtree-app)

        ;render-fn to consume app-model delta from UI to DOM.
        render-fn (push-render/renderer "content" render-config render/log-fn)
        
        app-model (render/consume-app-model app render-fn)]

    ; Start the application
    (app/begin app)
    
    ; send a msg to trigger
    (p/put-message (:input app) 
                   {msg/type :set-course 
                    msg/topic [] :value "Hello Course 1!"})


    ;; Returning the app and app-model from the main function allows
    ;; the tooling to add support for useful features like logging
    ;; and recording.
    {:app app :app-model app-model}))

(defn ^:export main []
  ;; config/config.edn refers to this namespace as a main namespace
  ;; for several aspects. A main namespace must have a no argument
  ;; main function. To tie into tooling, this function should return
  ;; the newly created app.
  (create-app (rendering/render-config)))
