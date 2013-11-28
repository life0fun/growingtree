(ns growingtree-app.services
  (:require [clojure.string :as str]
            [cljs.reader :as r]
            [io.pedestal.app.net.xhr :as xhr]
            [io.pedestal.app.protocols :as p]
            [io.pedestal.app.messages :as msgs]
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
;;
;; when response is edn, read-string to parse to cljs.core.PersistentHashMap
;; convert cljs object to cljs data structre, use js->cljs
;;    (js->cljs (JSON/parse (:body response)) :keywordize-keys true)
;; 
;; access json object, (aget jsonobject "key-name")
;; access cljs persistentMap, ((keyword "course/title") cljs.core.PersistentHashMap)
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


; create a fn to handle query response, inject json array data into input-queue
; as json is more efficient than edn, we use json-response at server side.
; we will dispatch msgs to path node accordingly.
; server always sends list of things, parse to cljs.core.PersistentVector.
(defn response-handler
  "handle RESTful json array response close over thing type and input queue"
  [type input-queue]
  (fn [response]
    (when-let [body (:body response)] ; only when we have valid body
      (.log js/console "xhr response body " body)
      (let [; parse json strig to js object.
            bodyjson (JSON/parse body)  
            ; parse js json object to cljs.core.Vector data structre.
            result (js->clj bodyjson :keywordize-keys true)
            status (:status result)
            things-vec (:data result)
            ;things-vec (js->clj data :keywordize-keys true)
            ]
        (.log js/console "response things tuples " things-vec)
        (p/put-message input-queue
                       {msgs/topic [:all]  ; store data into [:all]
                        msgs/type :set-all-things    ; set all things msgs type
                        :type type        ; set thing type
                        :data things-vec  ; store cljs.core.Vector into path node
                        :id (util/random-id)})))))


;
; services-fn consume effect queue msgs from app behavior and xhr post to server.
; pr-str is used to convert map data structure to edn string for RESTFul request.
(defn services-fn
  "service fn takes msgs out of effect queue and post to back-end"
  [message input-queue] ; input queue is where ret result should be injected to.
  ; ensure msgs wrap/unwrap keys match.
  (when-let [body (pr-str (:body message))]
    (let [type (msgs/type message)  ; msgs type, the type user clicked on sidebar
          resp-handle (response-handler type input-queue)]  ; json response handler
      (.log js/console (str "service-fn consume effect queue type" type " " body))
      ; dispatch on case
      (case type
        :subscribe (xhr-request "/msgs" "GET" "" xhr-log xhr-log)
        :publish (xhr-request "/msgs" "POST" body xhr-log xhr-log)  ; log as callback
        :parents (xhr-request "/api/parents" "GET" body resp-handle xhr-log) 
        :children (xhr-request "/api/children" "GET" body resp-handle xhr-log)
        :courses (xhr-request "/api/courses" "GET" body resp-handle xhr-log) 
        :lectures (xhr-request "/api/lectures" "GET" body resp-handle xhr-log)
        :homeworks (xhr-request "/api/homeworks" "GET" body resp-handle xhr-log)
        :assignments (xhr-request "/api/assignments" "GET" body resp-handle xhr-log) 

        ;; post data to create thing
        :assign (xhr-request "/api/assignments" "POST" body resp-handle xhr-log)
        "default")
      (str "Send to Server: " body))))


; received server send event 
(defn received-sse
  "recvd sse, put it into received inbound path node in app input queue"
  [app e]
  ; read event data with cljs reader, need cljs version of read-string
  (let [data (r/read-string (.-data e))]  ; access cljs object attr by .-symbol
    (.log js/console e)  ; take a log
    (p/put-message (:input app)
                   {msgs/topic [:inbound]
                    msgs/type :received
                    :text data   ; wrap json string to map
                    :id (util/random-id)})))


; Service type is the interface that receives back-end SSE event. 
; The /msgs endpoint is channel to receive SSE. After receiving SSE data,
; convert data into [:inbound] :received msgs into (:input app) queue.
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