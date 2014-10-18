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
;           ^:interceptor [ verify-request load-order-from-db ]
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

; create db schema by calling peer init-db.
(defn create-schema []
  (peer/init-db))

; gen uuid session id
(defn- gen-session-id [] (.toString (java.util.UUID/randomUUID)))

; session intercept to extract cookie.
; An interceptor is one instance of an Interceptor record or a map with
; :enter, :leave, :pause, :resume, and :error keys.
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
;; -------------------------------------------------------------------------------
;; for xhr/request from pedestal app, request body was edn encoded, hence under :end-params key.
;; destrcture [{reqbody :edn-params :as request}], request context map still :as request.
;;

(defn about-page
  [request]
  (ring-response/response (format "Clojure %s" (clojure-version))))

(defn home-page
  [request]
  (ring-response/response "Hello, Growing Tree !"))


;;==================================================================================
; get login user, returned user has :error and :user and :error key
;;==================================================================================
; postdata {:thing-type :login, :path [:login 0 :login], :qpath nil, 
;           :post-data {:body [:login [:login 0 :login]], :data {:type :login, :name "rich-son", :pass "rich"}}}}
(defn get-signup-login
  "get signup or login user info"
  [{postbody :edn-params :as request}]  ; post data under :edn-params key :as request
  (log/info "get-signup-login " postbody)
  (let [user (peer/get-user (get-in postbody [:post-data :data]))
        result (-> user
                   (assoc :status (if-not (:error user) 200 404))
                   (merge (select-keys postbody [:thing-type :path])))
        endresp (bootstrap/edn-response result) 
       ]
    (log/info "service peer get-login-user " result)
    endresp))


;;==================================================================================
; Ajax post API handler of get-things. postbody is request :params in cljs-ajax.
; postbody {:thing-type :path :qpath :post-data}
; :thing-type :group-members, :path [:group 1 :group-members],
; :post-data is nav-path, from get-filter-things-msg, {:body [:filter-things []] :data {}}
; json response {"thing-type" "login", "path" ["login" 0 "login"], "status" 200, ...}
; edn response {:thing-type :lecture :path [:course 1 :lecture]}
;;==================================================================================
(defn get-things
  "get things by type, ret from peer a list of thing in a new line sep string"
  [{postbody :edn-params :as request}] ; post data under :edn-params key :as request
  ; path segment in req contains request params, /api/:thing, /api/:course
  (log/info "get-things " postbody)
  (let [type (get-in request [:path-params :thing])  ; type is path param /api/:thing
        path (:path postbody)   ; effect msg body, [:group 1 :group-members],
        thing-type (:thing-type postbody)
        things (peer/get-things thing-type path (:post-data postbody))
        result {:status 200 :data things}
        ednresp (bootstrap/edn-response result)
       ]
      (log/info "service peer/get-things ret: " type thing-type path result)
    ednresp))


; postbody is cljs-ajax request map :params slot, {:thing-type :path :qpath :post-data}
; post-data is nav-path, defined in get-search-msg, {:body [:search-things []] :data {}}
(defn search-thing
  "search things based on keyword defined in request :params :path, or :post-data"
  [{postbody :edn-params :as request}]   ; :path-params {:thing "group"}
  (log/info "search-thing " (:post-data postbody) (get-in request [:path-params :thing]) postbody)
  (let [
        post-data (:post-data postbody)
        path (get-in post-data [:body 1]) 
        things (peer/get-things :search path post-data)
        result {:status 200 :data things}
        jsonresp (bootstrap/edn-response result)
       ]
    (log/info "peer search thing done: res " result " " jsonresp)
    jsonresp))

;------------------------------------------------------------------------------------
; destruct edn-params as request params and post body data is a clj map. frame does json transcoding.
  ; :request-method :post,
  ; :query-string nil,
  ; :content-type "application/edn",
  ; :path-params {:thing "course"}  path segment
  ; :path-info "/api/assignments",
  ; :uri "/api/assignments",
  ; :edn-params {:details {:title ... :content ... :author 123 :type "math"} }
;------------------------------------------------------------------------------------

;;==================================================================================
; POST add-thing, request's :edn-params = postbody, :path-params /add/:thing
; request is formed in cljs-ajax with :format :edn and param {:thign-type :path :post-data}
; :edn-params {:thing-type :path :qpath :post-data {:title "aa", :content "", :type "math"}
; For add-thing, type is taken from /add/:thing => lecture.
; postbody {:thing-type nil, :path nil, :qpath nil, :post-data {:lecture/content "c",..}
;;==================================================================================
(defn add-thing
  "add a thing upon post request, request contains http post data"
  [{postbody :edn-params :as request}]   ; :path-params {:thing "group"}
  (log/info "add-thing " postbody)  ; for add-thing, :path and :qpath are nil.
  (let [;resp (bootstrap/json-print {:result msg-data})
        path (:path postbody)
        type (get-in request [:path-params :thing])  ; /api/:thing
        added-things (peer/add-thing (keyword type) (:post-data postbody))
        result {:status 200 :data (map #(dissoc % :db/id) added-things)}  ; data is [{:course/author ...} {}]
        ; jsonresp (bootstrap/json-response result)
        jsonresp (bootstrap/edn-response result)
       ]
    (log/info "peer adding thing done " type " res " result " " jsonresp)
    jsonresp))

;;==================================================================================
; define routing table with verb map and a list of route interceptors to invoke on request.
; Each route table is a vector of route vectors. [ [:app-name [nested route vectors]] ]
; Nested route vector contain path and verb map {:get/:post destination-interceptor}
; Interceptor can be Ring hdl takes Ring request map and ret Ring resp map, or a vector of Ring handler.
; Every route incl an interceptor vector marked with ^:interceptors [] to be executed.
; [[["/order"  ^:interceptors [verify-request] ^:constraints {:user-id #"[0-9]+"}
;    {:get list-orders :post create-order}
;    ["/:id"  ^:constraints {:user-id #"[0-9]+"} ^:interceptors [verify-order-ownership load-order-from-db]
;    {:get view-order :post [:make-an-order o/create-order]}]]]]
;;==================================================================================
(defroutes routes
  [[["/" {:get home-page}
     ; set common intermediate interceptors before reach dest interceptor
     ^:interceptors [(body-params/body-params) bootstrap/html-body session-interceptor]
     ["/msgs" {:get subscribe :post publish}
        "/events" {:get wait-for-events}]   ; define the route for later url-for redirect
     ["/about" {:get about-page}]
     ["/login" {:post get-signup-login}]
     ["/api/:thing" {:post get-things}]
     ["/add/:thing" {:post add-thing}]
     ["/search/:thing" {:post search-thing}]
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

              ; resource path for webapp assets, resource/public ln to 
              ; public -> ../../growingtree-app/out/public
              ; ::bootstrap/resource-path "/public"
              ::bootstrap/resource-path "/appom"

              ;; Either :jetty or :tomcat (see comments in project.clj
              ;; to enable Tomcat)
              ; ::bootstrap/host "elephant-dev.locationlabs.com"
              ::bootstrap/host "localhost"
              ::bootstrap/type :jetty
              ::bootstrap/port 9090})
