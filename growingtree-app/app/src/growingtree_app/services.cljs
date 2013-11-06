(ns growingtree-app.services
  (:require [cljs.reader :as r]
            [io.pedestal.app.net.xhr :as xhr]
            [io.pedestal.app.protocols :as p]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.util.log :as log]
            [growingtree-app.util :as util]))

;; The services namespace responsible for communicating with back-end
;; services. It receives messages from the application's behavior,
;; makes requests to services and sends responses back to the
;; behavior.
;;
;; (app/consume-effect app services-fn)
;;

; services-fn consume effect queue msg from app behavior and xhr post to
; back-end server.
(defn services-fn 
  [message queue]
  ; ensure msg wrap/unwrap keys match.
  (when-let [msg (:out-message message)]  ; get only the out-message key
    (let [body (pr-str {:text msg})  ; prn to a string, content type is edn string.
          log (fn [args]
                (.log js/console (pr-str args))
                (.log js/console (:xhr args)))]
      (xhr/request (gensym)
                   "/msgs"   ; always post to /msgs end-point at back-end
                   :request-method "POST"  ; post will cause server to publish
                   :headers {"Content-Type" "application/edn"}
                   :body body
                   :on-success log
                   :on-error log))
    (.log js/console (str "Send to Server: " (pr-str message)))))


; Service type is the interface that receives back-end SSE event. 
; The /msgs endpoint is channel to receive SSE. After receiving SSE data,
; convert data into [:inbound] :received msg into (:input app) queue.
(defrecord Services 
  [app]
  p/Activity
  (start [this]
    (let [source (js/EventSource. "/msgs")]  ; get SSE from server.
      (.addEventListener source
                         "msg"
                         (fn [e]
                           (let [data (r/read-string (.-data e))]
                             (.log js/console e)
                             ; send msg to :received :inbound transform.
                             (p/put-message (:input app)
                                            {msg/topic [:inbound]
                                             msg/type :received
                                             :text (:text data)  ; msg map has :text and :id key.
                                             :id (util/random-id)})))
                         false)
      (.addEventListener source
                         "open"
                         (fn [e]
                           (.log js/console e))
                         false)
      (.addEventListener source
                         "error"
                         (fn [e]
                           (.log js/console e))
                         false)
      (.log js/console source)))
  (stop [this]))