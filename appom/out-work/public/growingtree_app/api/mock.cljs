(ns growingtree-app.api.mock
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.utils :as utils :refer [mprint]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))


(defn random-message [api-ch channel]
  (put! api-ch [:channel-activity-received (mock-data/random-thing channel true)]))

(defn send-user-message! [api-key message]
  (mprint "Send a message to the server"))

(defn destroy-channel! [api-ch channel-id]
  (go (<! (async/timeout 2500))
      (put! api-ch [:channel-remotely-destroyed channel-id])))
