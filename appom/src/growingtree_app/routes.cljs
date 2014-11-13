(ns growingtree-app.routes
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [growingtree-app.history :as growingtree-history]
            [growingtree-app.utils :as utils])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  ; import only for goog Uir and Jsonp
  (:import [goog Uri History]
           [goog.net Jsonp]))


; only when html5 history not support
; (secretary/set-config! :prefix "#")


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


; swap path into js/history using push-state. 
(defn set-window-href!
  [title path]
  (swap! growingtree-history/state growingtree-history/push-state! "" path)
  )

;
; goog.events/listen on el upon event type, put events into chann.
(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))


; listen NAVIGATE event in goog.History, match url to sectrary router matcher, invoke dispatcher.
; secretary client side named route matcher match url and dispatch ui click event to control chan. 
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
    (defroute v1-filter-things "/v1/:head/:id/:filtered"
      [head id filtered]
      (.log js/console (pr-str "matching filtered things route " head id filtered))
      ; (thing-nodes! app controls-ch (utils/safe-sel thing-type))
      )
    )
  ;; This triggers the dispatch on the above routes, when a deep link URL is provided.
  (let [history (goog.History. false nil history-el)
        navigation (listen history goog.history.EventType/NAVIGATE)  ; navigation event chan.
       ] 
    (doto history
      (.setEnabled true))

    ; go async execute body of processing of navigation event from chan, secretary dispatch.
    ; (goog.events/listen history-el goog.history.EventType.NAVIGATE, #(sec/dispatch! (.-token %)))
    (go (while true
      (let [token (.-token (<! navigation))
            url (growingtree-history/current-state)]
        (.log js/console (pr-str "dispatch goog.history navigation token " token " url " url))
        (secretary/dispatch! token))))

    ; now hook any click event, push state 
    ; (events/listen js/document "click" 
    ;   (fn [e]
    ;     (let [path (.getPath (.parse goog.Uri (.-href (.-target e))))
    ;           title (.-title (.-target e))]
    ;       (when-not (empty? path)
    ;         (.log js/console (pr-str "clicked " path  " " title))
    ;         (swap! growingtree-history/state growingtree-history/push-state! title path)
    ;         (.preventDefault e)
    ;         ))))
    ))



; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; generate route url
(defn v1-all-things-route
  [nav-path]
  (v1-all-things {:thing-type (name (get-in nav-path [:body 1 2]))}))


(defn v1-filter-things-route
  [nav-path]
  (v1-filter-things 
    {:head (name (get-in nav-path [:body 1 0]))
     :id (get-in nav-path [:body 1 1])
     :filtered (name (get-in nav-path [:body 1 2]))
    }))

