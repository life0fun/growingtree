(ns growingtree-app.controllers.api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [growingtree-app.mock-data :as mock-data])
  )


(declare append-activity-to-channel)
(declare append-thing-node)
(declare drop-old-activity-from-channel)


(defn append-activity-to-channel [state channel-id activity]
  (update-in state [:channels channel-id :activities] (comp (partial sort-by :created_at) conj) activity))

; append thing-node to thing type.
(defn append-thing-node [state type thing-node]
  (update-in state [:things type :things] (comp (partial sort-by :created_at) conj) thing-node))

(defn drop-old-activity-from-channel [state channel-id message-limit]
  (update-in state [:channels channel-id :activities] (partial take-last message-limit)))

