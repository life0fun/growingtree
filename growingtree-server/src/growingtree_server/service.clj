(ns growingtree-server.service
  (:require [io.pedestal.service.http :as bootstrap]
            [io.pedestal.service.http.route :as route]
            [io.pedestal.service.http.route.definition :refer [defroutes]]
            [io.pedestal.service.http.body-params :as body-params]
            [ring.util.response :as ring-response]
            [io.pedestal.service.http.servlet :as ps]
            [io.pedestal.service.log :as log]
            ;; the impl dependencies will go away
            [io.pedestal.service.impl.interceptor :as interceptor]
            [io.pedestal.service.interceptor :refer [definterceptor handler]]
            [io.pedestal.service.http.impl.servlet-interceptor :as servlet-interceptor]
            [io.pedestal.service.http.ring-middlewares :as middlewares]
            ;; these next two will collapse to one
            [io.pedestal.service.http.route :as route]
            [io.pedestal.service.http.route.definition :refer [defroutes]]
            [io.pedestal.service.http.sse :refer :all]
            [ring.util.mime-type :as ring-mime]
            [ring.middleware.session.cookie :as cookie])
  ; load peer lib to access to datomic db layer
  (:require [growingtree-server.peer :as peer]))


;
; Route handler get Ring request map and return Ring response map.
;
; (defroutes routes
;       [[["/order"
;           ^:interceptor [verify-request]
;           {:get o/list-orders
;            :post [:make-an-order o/create-order]}
;           ["/:id"
;             ^:interceptors [o/verify-order-ownership o/load-order-from-db]
;             {:get o/view-order
;             :put o/update-order}]]]])
;


; url-for generate URL from route fully qualified keyword or route name.
(declare url-for)

; store subscribe user id map to SSE context in atom {}
(def ^{:doc "Map of subscriber IDs to SSE contexts"} subscribers (atom {}))

; create schema
(defn create-schema
  []
  (peer/init-db))

; gen uuid session id
(defn- gen-session-id [] (.toString (java.util.UUID/randomUUID)))

; session intercept to extract cookie.
(definterceptor session-interceptor
  (middlewares/session {:store (cookie/cookie-store)}))


; wrap each request into sse-context map, and store user-id in request cookie.
(defn context-key
  "Return context-key, the user id, for a given sse context, sse-context is a map"
  [sse-context]
  (get-in sse-context [:request :cookies "user-id" :value]))


(defn- session-from-request                               
  "Extract the session id from a request."                
  [request]                                               
  (get-in request [:cookies "user-id" :value])) 


(defn add-subscriber
  "Add to concurrent hashmap quick lookup of user-id to user sse-contexst"
  [sse-context]
  (swap! subscribers assoc (context-key sse-context) sse-context))


(defn remove-subscriber
  "Remove `context` from subscribers map and end the event stream."
  [context]
  (log/info :msg "removing subscriber")
  (swap! subscribers dissoc (context-key context))
  (end-event-stream context))


(defn send-to-subscriber
  "Send `msg` as event to event stream represented by `context`. If
  send fails, removes `context` from subscribers map."
  [context msg]
  (try
    (log/info :msg "calling event sending fn")
    ; sse event data wraped inside "msg" key
    (send-event context "msg" msg)
    (catch java.io.IOException ioe
      (log/error :msg "Exception from event send"
                 :exception ioe)
      (remove-subscriber context))))


(defn send-to-subscribers
  "Send `msg` to all event streams in subscribers map."
  [msg]
  (log/info :msg "sending to all subscribers")
  (doseq [sse-context (vals @subscribers)]
    (send-to-subscriber sse-context msg)))


;
; redirect request to this interceptor, so we hold on the request waiting and send SSE thru.
; (ring-response/redirect (url-for ::wait-for-events))
(def ^{:doc "Interceptor used to add subscribers."}
  wait-for-events (sse-setup add-subscriber))


(defn publish
  "Terminal interceptor for publishing msg to subscribers."
  [{msg-data :edn-params :as request}]
  (log/info :message "publishing msg"
            :request request
            :msg-data msg-data)
  (when msg-data
    ;; pr-str won't be needed in the future
    (send-to-subscribers (pr-str msg-data)))
  (ring-response/response ""))


; find session id from request cookie, and update client's merged cookie.
(defn subscribe
  [request]
  (let [session-id (or (get-in request [:cookies "user-id" :value])
                       (gen-session-id))
        cookie {:user-id {:value session-id :path "/"}}]
    (prn "get /msgs ends with subscribe here...")   
    (-> (ring-response/redirect (url-for ::wait-for-events)) ; namespaced keyword for route.
        (update-in [:cookies] merge cookie))))


;; - - - - - - - route handler - - - - - - - 
;; route interceptor can be defined by
;;  1. fn accept ring request map and rets ring response map.
;;  2. interceptor defined by io.pedestal.service.interceptor/handler
;;  3. interceptor defined by defhandler macro. both accept a req map and ret a map.
;;
;; segments of a route URL path can be parameterized by prepending : to seg name.
;; the path parameters are parsed and added to the request's param map.
;;  ["/hello/:who" {:get hello-who}]  (get-in req [:path-params :who])
;;
;; curl --cookie-jar /tmp/x --location localhost:8080/api/courses
;; post handler get a app.messages as arg, have topic and type keys. 
;;    [{msg-data :edn-params :as request}]
;; when posting to api, use app.messages and ct application/edn
;; curl --data \
;;   "{:io.pedestal.app.messages/topic [:other-counters] \
;;     :io.pedestal.app.messages/type :swap \
;;     :value 42}" \
;;   --header "Content-Type:application/edn" \
;;   http://localhost:8080/msgs 
;;
;; it has been benchmarked that sending json is more efficient than edn, albeit edn
;; let you tag attributes. the content type is application/json or application/edn.
;; To send json, instantiate a json-response in route handler and ret that response obj.
;;      jsonresp (bootstrap/json-response things)
;;
;; to send edn, set content-type to application/edn
;;   (-> (ring-response/response things)
;;     (ring-response/content-type "application/edn"))))
;; 

(defn about-page
  [request]
  (ring-response/response (format "Clojure %s" (clojure-version))))

(defn home-page
  [request]
  (ring-response/response "Hello, Growing Tree !"))


;;==================================================================================
; GET request to get all things without post any filters
; this fn is deprecated as nav path for all things is [:all 0 :parent]
;;==================================================================================
(defn get-all-things
  "get things by type, ret from peer a list of thing in a new line sep string"
  [req]
  ; path segment in req contains request params
  (let [type (get-in req [:path-params :thing])
        things (peer/get-things (keyword type) [])  ;qpath is null
        result {:status 200 :data things}
        jsonresp (bootstrap/json-response result)] ; conver to keyword for query
    (newline)
    (println "service get peer get-all-things " (count things) type things)
    jsonresp))
    ; (-> (ring-response/response things)
    ;     (ring-response/content-type "application/edn"))))


;;==================================================================================
; POST filter from nav path to get things within parent.
;;==================================================================================
(defn get-things
  "get things by type, ret from peer a list of thing in a new line sep string"
  [{postdata :edn-params :as request}]
  (let [type (get-in request [:path-params :thing])
        path (:path postdata)
        thing-type (:thing-type postdata)
        things (peer/get-things thing-type path)
        result {:status 200 :data things}
        jsonresp (bootstrap/json-response result)]
    (newline)  
    (println (str "service got peer get-things " type thing-type path (:db/id (first things)) things))
    jsonresp))


;------------------------------------------------------------------------------------
; destruct edn-params as request params and post body data is a clj map. frame does json transcoding.
  ; :request-method :post,
  ; :query-string nil,
  ; :content-type "application/edn",
  ; :edn-params
  ; {:action :create-assignment,
  ;  :hwid 17592186045483,
  ;  :toid "jerry",
  ;  :hint "use fraction",
  ;  :user "rich"},
  ; :path-info "/api/assignments",
  ; :uri "/api/assignments",
;------------------------------------------------------------------------------------

;;==================================================================================
; POST form details to add a particular thing
; postdata is body when xhr-request on api service side
;;==================================================================================
(defn add-thing
  "add a thing upon post request, request contains http post data"
  [{postdata :edn-params :as request}]
  (let [;resp (bootstrap/json-print {:result msg-data})
        type (get-in request [:path-params :thing])  ; /api/:thing
        added-things (peer/add-thing (keyword type) (:details postdata))
        result {:status 200 :data added-things}
        jsonresp (bootstrap/json-response result)
        ]
    (log/info :message "received message" :request request :msg-data postdata)
    (prn "service got peer adding thing done " added-things)
    jsonresp))


;;==================================================================================
;; define routing table with verb map and route interceptor
;;==================================================================================
(defroutes routes
  [[["/" {:get home-page}
     ;; Set default interceptors for /about and any other paths under /
     ^:interceptors [(body-params/body-params) bootstrap/html-body]
     ["/msgs" {:get subscribe :post publish}
        "/events" {:get wait-for-events}]   ; define the route for later url-for redirect
     ["/about" {:get about-page}]
     ["/api/:thing" {:get get-all-things :post get-things}]
     ["/add/:thing" {:post add-thing}]
    ]]])


; url-for convert route interceptor to URL with defined routing table.
;; You can use this fn or a per-request fn via io.pedestal.service.http.route/url-for
(def url-for (route/url-for-routes routes))

;; Consumed by growingtree-server.server/create-server
(def service {:env :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; :bootstrap/interceptors []
              ::bootstrap/routes routes

              ;; Uncomment next line to enable CORS support, add
              ;; string(s) specifying scheme, host and port for
              ;; allowed source(s):
              ;;
              ;; "http://localhost:8080"
              ;;
              ;;::bootstrap/allowed-origins ["scheme://host:port"]

              ;; Root for resource interceptor that is available by default.
              ::bootstrap/resource-path "/public"

              ;; Either :jetty or :tomcat (see comments in project.clj
              ;; to enable Tomcat)
              ;;::bootstrap/host "localhost"
              ::bootstrap/type :jetty
              ::bootstrap/port 8080})
