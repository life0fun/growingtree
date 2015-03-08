(ns growingtree-app.api.communicator
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as str]
            [cljs.reader :as r]
            [ajax.core :refer [GET POST]]
            [goog.structs.Map :as map]
            [cljs.core.match :refer-macros [match]]
            [taoensso.sente  :as sente  :refer (cb-success?)]
            [taoensso.sente.packers.transit :as sente-transit]
  ))

(def packer
  "Defines our packing (serialization) format for client<->server comms."
  (sente-transit/get-flexi-packer :json))


; dispatch event to either one of three chans deps on event type.
(defn make-handler
  "Create handler function for messages from WebSocket connection, wire channels and the
   start-function to call when the socket is established."
  [controls-chan api-chan stats-chan]
  (fn [{:keys [event]}]
    (match event
      [:chsk/state {:first-open? true}] 
        (do
          (.log js/console (pr-str "state event, WS connected"))
          (put! controls-chan [:connected]))
      [:chsk/recv  payload]
        (let [[msg-type msg] payload]
          (.log js/console (pr-str "state event, WS connected"))
          (case (keyword (namespace msg-type))
            :data   (put! api-chan payload)
            :stats   (put! stats-chan payload)
            :default (print "unmatched message" payload)))
      :else (print "Unmatched event: %s" event))))


(defn query-loop
  "Take command / query message off of channel, enrich payload with :uid of current
   WebSocket connection and send to server. Channel is injected when loop is started."
  [channel send-fn chsk-state]
  (go-loop []
    (let [[cmd-type payload] (<! channel)]
      (send-fn [cmd-type (assoc payload :uid (:uid @chsk-state))])
      (recur))))


(defn start-communicator
  "Start communicator by wiring channels."
  [controls-chan api-chan stats-chan]
  (let [ws (sente/make-channel-socket! "/chsk" {:packer packer :type :auto})
        {:keys [ch-recv send-fn state]} ws
        handler (make-handler controls-chan api-chan stats-chan)]
    (sente/start-chsk-router! ch-recv handler)
    (query-loop controls-chan send-fn state)))
