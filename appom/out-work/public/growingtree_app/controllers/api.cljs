(ns growingtree-app.controllers.api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]))

(defn append-activity-to-channel [state channel-id activity]
  (update-in state [:channels channel-id :activities] (comp (partial sort-by :created_at) conj) activity))

; append thing-node to thing type.
(defn append-thing-node [state type thing-node]
  (update-in state [:things type :things] (comp (partial sort-by :created_at) conj) thing-node))

(defn drop-old-activity-from-channel [state channel-id message-limit]
  (update-in state [:channels channel-id :activities] (partial take-last message-limit)))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
(defmulti api-event
  (fn [target message args state] message))

; api-data {:body [:all 0 :parent]}, :things-vec ({:person/url #{rich.com} ...}]
; api-data {:body [:course 1 :lecture], :things-vec [{:lecture/type :math, :lecture/numcomments 0, :lectu
; store into global state map with nav-path as map key and things-vec as value.
(defmethod api-event
  :api-data
  [target message api-data state]
  (let [things-vec (:things-vec api-data)
        pathseg (:body api-data)]
    (print "api-event assoc-in state api-data " api-data)
    (-> state
      (assoc-in [:nav-path-things pathseg] things-vec))))

(defmethod api-event :channel-activity-received
  [target message activity state]
  (let [message-limit (get-in state [:settings :message-limit])]
    (-> state
        (append-activity-to-channel (:channel-id activity) activity)
        (drop-old-activity-from-channel (:channel-id activity) message-limit))))

(defmethod api-event :channel-remotely-destroyed
  [target message channel-id state]
  (update-in state [:channels] dissoc channel-id))
