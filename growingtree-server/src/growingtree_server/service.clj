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
            [ring.middleware.session.cookie :as cookie]))


; store subscribe user id map to SSE context in atom {}
(def ^{:doc "Map of subscriber IDs to SSE contexts"} subscribers (atom {}))


; wrap each request into sse-context map, and store user-id in request cookie.
(defn context-key
  "Return context-key, the user id, for a given sse context, sse-context is a map"
  [sse-context]
  (get-in sse-context [:request :cookies "user-id" :value]))


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


; gen uuid session id
(defn- gen-session-id [] (.toString (java.util.UUID/randomUUID)))

(declare url-for)

; find session id from request cookie, and update client's merged cookie.
(defn subscribe
  [request]
  (let [session-id (or (get-in request [:cookies "user-id" :value])
                       (gen-session-id))
        cookie {:user-id {:value session-id :path "/"}}]
    (-> (ring-response/redirect (url-for ::wait-for-events))
        (update-in [:cookies] merge cookie))))


; session intercept to extract cookie.
(definterceptor session-interceptor
  (middlewares/session {:store (cookie/cookie-store)}))

(defn about-page
  [request]
  (ring-response/response (format "Clojure %s" (clojure-version))))

(defn home-page
  [request]
  (ring-response/response "Hello, Growing Tree !"))

(defroutes routes
  [[["/" {:get home-page}
     ;; Set default interceptors for /about and any other paths under /
     ^:interceptors [(body-params/body-params) bootstrap/html-body]
     ["/msgs" {:get subscribe :post publish}
        "/events" {:get wait-for-events}]
     ["/about" {:get about-page}]]]])

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
