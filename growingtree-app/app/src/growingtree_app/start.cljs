(ns growingtree-app.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [growingtree-app.behavior :as behavior]
            [growingtree-app.rendering :as rendering]))

;; In this namespace, the application is built and started.

(defn create-app [render-config]
  (let [; app is a record which implements the Receiver protocol.
        app (app/build behavior/growingtree-app)

        ; create render to map UI data to DOM. A renderer function
        ; takes two arguments: the app model deltas and input queue.
        render-fn (push-render/renderer "content" render-config render/log-fn)
        
        ;; This application does not yet have services, but if it did,
        ;; this would be a good place to create it.
        ;; services-fn (fn [message input-queue] ...)

        app-model (render/consume-app-model app render-fn)]

        ;; If services existed, configure the application to send all
        ;; effects there.
        ;; (app/consume-effects app services-fn)

        ;; Start the application
        (app/begin app)
    
        ;; Send a message to the application so that it does something.
        (p/put-message (:input app) 
                       {msg/type :set-value 
                        msg/topic [:greeting] :value "Hello Growing!"})


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
