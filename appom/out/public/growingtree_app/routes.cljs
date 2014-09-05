(ns growingtree-app.routes
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [goog.events :as events]
            [secretary.core :as sec :include-macros true :refer [defroute]]
            [growingtree-app.utils :as utils])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  (:import [goog History]))

(sec/set-config! :prefix "#")

(defn listen-once-for-app!
  [app pred on-loaded]
  (let [listener-id   (keyword (utils/uuid))
        sentinel      (fn [_ _ _ new-state]
                        (when (pred new-state)
                          (remove-watch app listener-id)
                          (on-loaded new-state)))]
    (if (pred @app)
      (on-loaded @app)
      (add-watch app listener-id sentinel))))


(defn open-to-channel!
  [app controls-ch channel-id]
  (.log js/console "channel route handle open-to-channel " channel-id)
  (listen-once-for-app! app
                        #(get-in % [:channels channel-id])
                        #(put! controls-ch [:all-things channel-id])))


; thing nodes of thing-type
(defn thing-nodes!
  [app controls-ch thing-type]
  (.log js/console "thing type thing-nodes " thing-type)
  (listen-once-for-app! app
                        #(get-in % [:things thing-type])
                        #(put! controls-ch [:all-things (vector thing-type)])))


; 
; secretary client side named route dispatch ui click event to control chan. 
(defn define-routes! 
  [app history-el]
  (let [controls-ch (get-in @app [:comms :controls])
        api-ch      (get-in @app [:comms :api])]
  
    (defroute v1-channel-link "/v1/channels/:channel-id"
      [channel-id]
      (open-to-channel! app controls-ch (utils/safe-sel channel-id)))
  
    ; all thing route matcher to its action.
    (defroute v1-all-things "/v1/:thing-type"
      [thing-type]
      (.log js/console (pr-str "matching all things route " thing-type))
      ; (thing-nodes! app controls-ch (utils/safe-sel thing-type))
      )

    ; filtered thing route match to its action.
    (defroute v1-filter-things "/v1/:parent/:id/:filtered"
      [parent id filtered]
      (.log js/console (pr-str "matching filtered things route " parent id filtered))
      ; (thing-nodes! app controls-ch (utils/safe-sel thing-type))
      )
    )
  ;; This triggers the dispatch on the above routes, when a deep link URL is provided.
  ;; goog.History(opt_invisible, opt_blankPageUrl, opt_input, opt_iframe)
  (let [history-el (goog.History. false nil history-el)]
    ; (goog.events/listen history-el "navigate" #(sec/dispatch! (.-token %)))
    (goog.events/listen history-el goog.history.EventType.NAVIGATE, #(sec/dispatch! (.-token %)))
    (doto history-el
      (.setEnabled true))))
