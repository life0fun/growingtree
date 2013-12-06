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
  [thing-type msg-topic msg-type input-queue]
  (fn [response]
    ; parse response body into json and convert json to cljs PersistentVector
    (when-let [body (:body response)] ; only when we have valid body
      (.log js/console "xhr response body " thing-type body)
      (let [bodyjson (JSON/parse body)  
            ; parse js json object to cljs.core.PersisitentVector data structre.
            result (js->clj bodyjson :keywordize-keys true)
            status (:status result)
            things-vec (:data result)
            ]
        (.log js/console (str "response tuples " thing-type msg-topic msg-type things-vec))
        (p/put-message input-queue
                       {msgs/topic msg-topic  ; store vec in [:all :parent]
                        msgs/type msg-type
                        :thing-type thing-type        ; set thing type
                        :data things-vec  ; store cljs.core.PersistVector into path node
                        })))))


;
; services-fn consume effect queue msgs from app behavior and xhr post to server.
; pr-str is used to convert map data structure to edn string for RESTFul request.
; the message must contain the behavior's transformer's msg/topic and msg/type for data
(defn services-fn
  "service fn takes msgs out of effect queue and post to back-end"
  [message input-queue] ; input queue is where ret result should be injected to.
  ; ensure msgs wrap/unwrap keys match.
  (when-let [body ((msgs/param :body) message)]
    (let [;body (pr-str body)  ; do not need to convert body to json string
          thing-type (msgs/type message)
          msg-topic (:msg-topic body)
          msg-type (:msg-type body)
          resp-handle (response-handler thing-type msg-topic msg-type input-queue)]  ; json response handler
      (.log js/console (str "service-fn consume effect thing type" thing-type " " body))
      ; dispatch on case, 
      (case thing-type
        ;; sse subscribe and publish
        :subscribe (xhr-request "/msgs" "GET" "" xhr-log xhr-log)
        :publish (xhr-request "/msgs" "POST" body xhr-log xhr-log)  ; log as callback

        ; plural keyword for GET request
        :parents (xhr-request "/api/parents" "GET" body resp-handle xhr-log) 
        :children (xhr-request "/api/children" "GET" body resp-handle xhr-log)
        :courses (xhr-request "/api/courses" "GET" body resp-handle xhr-log) 
        :lectures (xhr-request "/api/lectures" "GET" body resp-handle xhr-log)
        :homeworks (xhr-request "/api/homeworks" "GET" body resp-handle xhr-log)
        :assignments (xhr-request "/api/assignments" "GET" body resp-handle xhr-log) 

        ;; msg type for actionbar assignment is :assign, post data to create-assignment
        :assign (xhr-request "/api/assignment" "POST" body resp-handle xhr-log)
        
        ; type:course {:user "rich" :title "aa", :author "bb", :type "Math", :content "cc", ...}
        :course (xhr-request "/api/course" "POST" body resp-handle xhr-log)
        :homework (xhr-request "/api/homework" "POST" body resp-handle xhr-log)

        ;:xpath (xhr-request (str "/api/xpath/" (:target body)) "GET" body resp-handle xhr-log)
        :xpath (request-xpath body input-queue)

        "default")
      (str "Send to Server: " body))))



; request xpath data, body is {:target :children, :qpath (:parents 17592186045501)} 
(defn request-xpath
  [body input-queue]
  (let [msg-topic (:msg-topic body)
        msg-type (:msg-type body)
        thing-type (:target body)
        qpath (:qpath body)
        xpath (str "/api/xpath/" (name thing-type))
        xdata-resp (response-handler thing-type msg-topic msg-type input-queue)]
    (.log js/console (str "app service request xpath " thing-type msg-topic msg-type body))
    (xhr-request xpath "POST" body xdata-resp xhr-log)))



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