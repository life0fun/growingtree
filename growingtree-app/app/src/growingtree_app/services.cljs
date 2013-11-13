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
;; we convert response data to cljs.core.PersistentVector and store i



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


; create a fn to handle query response, inject data into input-queue
; as json is more efficient than edn, we use json-response at server side.
; we will dispatch msg to path node accordingly.
; server always sends map lazy list, becomes cljs.core.PersistentVector here.
(defn response-handler
  "request response handle, close over thing type and input queue to put json back "
  [type input-queue]
  (fn [response]
    (let [body (:body response)
          bodyjson (JSON/parse body)  ; parse json to js object.
          ; parse to cljs.core.Vector data structre. We only need one parse to data structure here.
          things-vec (js->clj bodyjson :keywordize-keys true)  
          title (aget bodyjson 0 "course/overview")
          ;title2 (aget bodyjson 1 "course/overview")
          title2 ((keyword "course/title") (first things-vec))
          ;thing-map (r/read-string body)  ; convert string into cljs.core.PersistentHashMap
          ; need cljs version of read-string
          ;title ((keyword "course/title") thing-map)
          ]
      (.log js/console (str "response body " body))
      (.log js/console "title " title title2 " js->clj " things-vec)
      ;(.log js/console (str "PersistentHashMap " thing-map))
      ;(.log js/console (str "app service handle query response title " title " " body))
      (p/put-message input-queue
                     {msg/topic [:all]  ; target function is all things.
                      msg/type :set-all      ; set all thing target type
                      :type type        ; set thing type
                      :data things-vec  ; store cljs.core.Vector into path node
                      :id (util/random-id)}))))

;
; services-fn consume effect queue msg from app behavior and xhr post to server.
; pr-str is used to convert map data structure to json string for RESTFul.
(defn services-fn
  "service fn takes msg out of effect queue and post to back-end"
  [message input-queue] ; input queue is where ret result should be injected to.
  ; ensure msg wrap/unwrap keys match.
  (when-let [msg (:out-message message)]  ; get only the out-message key
    (let [req-body (pr-str msg)    ; string print msg
          type (msg/type message)  ; msg type, the category user clicked on sidebar
          resp-handle (response-handler type input-queue)]  ; json response handler
      (.log js/console (str "service-fn consume effect queue msg/type" type " " req-body))
      ; dispatch on case
      (case type
        :subscribe (xhr-request "/msgs" "GET" "" xhr-log xhr-log)
        :category (xhr-request "/msgs" "POST" req-body xhr-log xhr-log)  ; log as callback
        :parents (xhr-request "/api/parents" "GET" req-body resp-handle xhr-log) 
        :courses (xhr-request "/api/courses" "GET" req-body resp-handle xhr-log) 
        "default")
      (str "Send to Server: " (pr-str message)) )))


; received server send event 
(defn received-sse
  "recvd sse, put it into received inbound path node in app input queue"
  [app e]
  ; read event data with cljs reader, need cljs version of read-string
  (let [data (r/read-string (.-data e))]  ; access cljs object attr by .-symbol
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