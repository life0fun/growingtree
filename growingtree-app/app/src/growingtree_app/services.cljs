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

;;
;; response from server can be either json string, or application/edn
;; xhr req response is text string. cljs.reader convert text into cljs.ocre.PersistentHashMap.
;; if it is edn, use cljs.reader/read-string to convert it to cljs persistentHashMap object.
;; to access keys in cljs object, use cljs.core.Keyword.
;; (.log js/console ((keyword "foo") (cljs.reader/read-string "{:foo :bar}")))
;; need to support lein cljsbuild clean, or will rm -fr out/
;; 
;; for json processing, https://github.com/yogthos/cljs-ajax/blob/master/src/ajax/core.cljs
;; when response is json string, parse to cljs object.
;;    bodyjson (JSON/parse (:body response))
;; when response is edn, read-string to parse to cljs.core.PersistentHashMap
;; convert cljs object to cljs data structre, use js->cljs
;;    (js-cljs (JSON/parse (:body response)) :keywordize-keys true)
;; 
;; access json object, (aget jsonobject "key-name")
;; access cljs persistentMap, ((keyword "course/title") cljsPersistentHashMap)
;;
;; for cljs map data structure, use (get-in data-map [attr nested-attr])
;; for cljs pure object, use variadic (aget object attr nested-attr)
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
    (let [body (:body response)
          bodyjson (JSON/parse body)
          bodymap (js->clj bodyjson :keywordize-keys true)
          title (aget bodyjson 0 "course/overview")
          title2 (aget bodyjson 1 "course/overview")
          ;title2 ((keyword "course/title") bodymap)
          ;thing-map (r/read-string body)  ; convert string into cljs.core.PersistentHashMap
          ; need cljs version of read-string
          ;title ((keyword "course/title") thing-map)
          ]
      (.log js/console (str "response body " body))
      (.log js/console "title " title title2 " js->clj " bodymap)
      ;(.log js/console (str "PersistentHashMap " thing-map))
      ;(.log js/console (str "app service handle query response title " title " " body))
      (p/put-message input-queue
                     {msg/topic [:inbound]
                      msg/type :received
                      :text title   ; wrap json string to map
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
      (.log js/console (str "service-fn consume effect queue " req-body  " msg/type" (msg/type message)))
      ; dispatch on case
      (case (msg/type message)
        :subscribe (xhr-request "/msgs" "GET" "" xhr-log xhr-log)
        :category (xhr-request "/msgs" "POST" req-body xhr-log xhr-log)  ; log as callback
        :parents (xhr-request "/api/parents" "GET" req-body qhandle xhr-log) 
        :courses (xhr-request "/api/courses" "GET" req-body qhandle xhr-log) 
        "default")
      (str "Send to Server: " (pr-str message)) )))


; received server send event 
(defn received-sse
  "recvd sse, put it into received inbound path node in app input queue"
  [app e]
  ; read event data with cljs reader, need cljs version of read-string
  (let [data (r/read-string (.-data e))]  ; access cljs object attr with symbol
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