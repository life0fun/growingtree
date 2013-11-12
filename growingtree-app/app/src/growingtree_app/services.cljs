(ns growingtree-app.services
  (:require [clojure.string :as str]
            [cljs.reader :as r]
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


; log fn for xhr request
(defn xhr-log
  "js console log the args"
  [args]
  (.log js/console (pr-str args))
  (.log js/console (:xhr args)))


; send xhr post to url api end-point
(defn xhr-request
  "send xhr request to back-end api url get or post with body, providing callback"
  [url method body on-success on-error]
  (xhr/request (gensym)
               url        ; api endpoint url
               :request-method method
               :headers {"Content-Type" "application/edn"}  ; content type must be edn
               :body body
               :on-success on-success
               :on-error on-error))


; create a fn to handle query result, inject data into input-queue
; we need to vary the input we inject to received inbound. If no change, no derived
; function got called.
(defn handle-query-response
  "make query result handling fn, inject data into input-queue"
  [input-queue]
  (fn [response]
    ; {:id G__16, :body "P-fname-...", :status 200, :headers 
    (let [body (:body response)
          items (str/split-lines body)]   ; only get the body of response
      (.log js/console (str "app service handle datomic query resp " body))
      (p/put-message input-queue
                     {msg/topic [:inbound]
                      msg/type :received
                      :text (rand-nth body)   ; wrap json string to map
                      :id (util/random-id)}))))

;
; services-fn consume effect queue msg from app behavior and xhr post to
; back-end server.
; pr-str is used to convert map data structure to json string for RESTFul.
(defn services-fn
  "service fn takes msg out of effect queue and post to back-end"
  [message input-queue] ; input queue is where ret result should be injected to.
  ; ensure msg wrap/unwrap keys match.
  (when-let [msg (:out-message message)]  ; get only the out-message key
    (let [req-body (pr-str msg)
          qhandle (handle-query-response input-queue)]  ; send msg json string directly
      (.log js/console (str "service-fn consume effect output q " req-body (msg/type message)))
      ; dispatch on case
      (case (msg/type message)
        :subscribe (xhr-request "/msgs" "GET" "" xhr-log xhr-log)
        :category (xhr-request "/msgs" "POST" req-body xhr-log xhr-log)  ; log as callback
        :query (xhr-request "/api/parents" "GET" req-body qhandle xhr-log) 
        "default")
      (str "Send to Server: " (pr-str message)) )))


; received server send event 
(defn received-sse
  "recvd sse, put it into received inbound path node in app input queue"
  [app e]
  (let [data (r/read-string (.-data e))]  ; read event data with cljs reader
    (.log js/console e)  ; take a log
    (p/put-message (:input app)
                   {msg/topic [:inbound]
                    msg/type :received
                    :text data   ; wrap json string to map
                    :id (util/random-id)})))


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
                         (fn [e] (received-sse app e))
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