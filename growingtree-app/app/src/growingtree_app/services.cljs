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


;;==================================================================================
; services-fn consume effect queue msgs from app behavior and xhr post to server.
; pr-str is used to convert map data structure to edn string for RESTFul request.
; the message must contain the behavior's transformer's msg/topic and msg/type for data
;;==================================================================================
(defn services-fn
  "service fn takes msgs out of effect queue and post to back-end"
  [message input-queue]
  (when-let [body ((msgs/param :body) message)]
    (let [msg-type (msgs/type message)]
      ;(.log js/console (str "app service-fn consumes effect " msg-type body))
      ; dispatch on thing-type
      (case msg-type
        ;; sse subscribe and publish
        :subscribe (xhr-request "/msgs" "GET" "" xhr-log xhr-log)
        :publish (xhr-request "/msgs" "POST" body xhr-log xhr-log)

        :validate-login (validate-login body input-queue)
        
        :request-things (request-things body input-queue)
        :add-thing (add-thing body input-queue)

        "default"))))


; login user meta has :user :pass key
(defn validate-login
  [body input-queue]
  (let [{:keys [login pass]} body
        api (str "/login")
        resp 
          (fn [response]
            (when-let [body (:body response)] ; only when we have valid body
              (let [bodyjson (JSON/parse body)  
                    ; parse js json object to cljs.core.PersisitentVector data structre.
                    result (js->clj bodyjson :keywordize-keys true)
                    status (:status result)
                    user-data (:data result)  ; return full user data if good.
                    err (:error result)
                   ]
                (.log js/console (str "app service validate login resp " result))
                (if err
                  (p/put-message input-queue
                                 {msgs/topic [:login :error]
                                  msgs/type :set-login-error
                                  :login login
                                  :error err})

                  (p/put-message input-queue
                                 {msgs/topic [:user]
                                  msgs/type :set-user
                                  :user user-data})
                  ))))
       ]
    (.log js/console (str "app service validate login request " api body))
    (xhr-request api "POST" body resp xhr-log)))


;;==================================================================================
; return a fn to handle query response, inject json array data into input-queue.
; as json is more efficient than edn, we use json-response at server side.
; when create response handler closure, setup msg type/topic, data got delivered into
; app model directly. msg type/topic is setup in effect flow trigged by [:nav :path]
;
; server always deliver list of things, parse to cljs.core.PersistentVector.
; app model transformer has :thing-type / :data keys.
; msg-topic, type, details are setup inside effect request-navpath-thing and post-create-thing.
; for request-navpath-thing, details contains :path :qpath, for post-create-thing, not used for now
;;==================================================================================
(defn response-handler
  "dispatch RESTful json array response to app model set by effect nav path data"
  [thing-type msg-topic msg-type details input-queue]
  (fn [response]
    ; parse response body into json and convert json to cljs PersistentVector
    (when-let [body (:body response)] ; only when we have valid body
      ;(.log js/console (str "app service receive response : " body))
      (let [bodyjson (JSON/parse body)  
            ; parse js json object to cljs.core.PersisitentVector data structre.
            result (js->clj bodyjson :keywordize-keys true)
            status (:status result)
            things-vec (:data result)  ; alway ret a list of things
            dbid (:db/id (first things-vec))
            ]
        ;(.log js/console (str "xhr response tuples " dbid " type " thing-type msg-topic msg-type things-vec))
        (.log js/console (str "xhr response to input-queue " dbid " type " thing-type msg-topic msg-type))
        ; dispatch to different transformer in behavior directly.
        (p/put-message input-queue
                       {msgs/topic msg-topic  ; store vec in [:all :parent]
                        msgs/type msg-type
                        :thing-type thing-type    ; set thing type
                        :details details      ; for request, contains [:path :qpat]
                        :data things-vec})  ; store cljs.core.PersistVector into path node
      ))))


;;=======================================================================================
; request handler msg topic/type will dispatch msg to the right transformer.
; request body contains callback transformer msg and thing-type, query path, details.
; msg type topic is setup in effect flow when nav path changed. [:data nav-path]
;  /api/comments [:data :course 1 :comments] :set-thing-data :msg-topic [:data :course 1 :comments]
;;=======================================================================================
(defn request-things
  [body input-queue]
  (let [{:keys [msg-topic msg-type thing-type path details]} body
        api (str "/api/" (name thing-type))
        ; response handle is closured over callback msg transformer and details of qpath.
        resp (response-handler thing-type msg-topic msg-type details input-queue)]
    (.log js/console (str "app service request things " api msg-topic msg-type body))
    (xhr-request api "POST" body resp xhr-log)))


;;=======================================================================================
; add thing handler, post thing details to server to insert.
; api end point is /add/:thing, on server side, it {:path-params {:thing ...}
; body is details map that has :thing-type
;;=======================================================================================
(defn add-thing
  [body input-queue]
  (let [{:keys [msg-topic msg-type thing-type details]} body
        api (str "/add/" (name thing-type))  ; api is /add/:thing-type
        resp (response-handler thing-type msg-topic msg-type details input-queue)]
    (.log js/console (str "app service add thing " thing-type msg-topic msg-type body))
    (xhr-request api "POST" body resp xhr-log)))


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