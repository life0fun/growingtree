(ns growingtree-app.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.api.mock :as api]
            [growingtree-app.components.app :as app]
            [growingtree-app.controllers.controls :as controls-con]
            [growingtree-app.controllers.post-controls :as controls-pcon]
            [growingtree-app.controllers.api :as api-con]
            [growingtree-app.controllers.post-api :as api-pcon]
            [growingtree-app.datetime :as dt]
            [growingtree-app.api.kandan :as kandan-api]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.routes :as routes]
            [growingtree-app.useful :as useful :refer [ffilter]]
            [growingtree-app.utils :as utils :refer [mprint]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  (:use-macros [dommy.macros :only [sel sel1]]))

(enable-console-print!)

; control chan as data flow object connecting components.
; api chan for api request handling.
(def controls-ch (chan))
(def api-ch (chan))

; global app state wrapped inside atom, state include control and api chan, 
; core passes data flow chan to sub components, and loop processing events from chan.
(def app-state
  (atom (mock-data/initial-state {:controls controls-ch
                                  :api      api-ch})))

;; :state-history is a vector of vectors, where the inner
;; vector is the same shape as the messages played
(def history
  (atom []))

(defn filtered-message? [message]
  (get #{:credit-card-updated} message))

(defn update-history! [history channel message]
  (let [m (first message)
        record (if (filtered-message? m) m message)]
    (swap! history conj [channel record])))


; create app component on DOM target app div with app state.
(defn main [target state]
  (let [comms   (:comms @state)
        history (or history (atom []))]
    ; we need route ui click event to control chan, and process control chan inside main comp.
    (routes/define-routes! state (.getElementById js/document "history-container"))

    ; create app component, which in turn create all sub components, and start dom state updating. 
    (om/root app/app state {:target target   ; target is app dom dom element, <div id='app'/>
                            :opts {:comms comms}})
    
    ; chan msg vec, [message-type nav-path], [:tab-selected [:parents]]
    ; mostly, conj state nav-path with nav-path, trigger re-render app and main_area.
    (go (while true
          (alt!
            (:controls comms) 
              ([v]   ; [:tab-selected [:parents]], first is msg, rest is nav-path.
                (print "controls chan event: " (pr-str v))
                (when utils/logging-enabled?
                  (mprint "Controls Verbose: " (pr-str v)))
                ; each event, first global state update. then action taken.
                (let [previous-state @state]
                  (update-history! history :controls v)
                  ; update state with selected state id. will cause re-render of app
                  (swap! state (partial controls-con/control-event target (first v) (last v)))
                  (controls-pcon/post-control-event! target (first v) (last v) previous-state @state)))
            ; cljs-ajax [:api-data {:nav-path nav-path :things-vec things-vec}]
            (:api comms) 
              ([v]
                (when utils/logging-enabled?
                    (mprint "API Verbose: " (pr-str v)))
                (print "api event " v) ; thing-vec
                (let [previous-state @state
                      things-vec (:things-vec (last v))]
                  (print "things-vec " things-vec)
                  (update-history! history :api v)
                  (swap! state (partial api-con/api-event target (first v) (last v)))
                  (api-pcon/post-api-event! target (first v) (last v) previous-state @state)))
            (async/timeout 30000) 
              (mprint (pr-str @history)))))
    ))

; setup main component with app state
(defn setup! []
  (let [comms (:comms @app-state)]
    ; app-state is cursor to atom, pass to main as cursor to om/root
    (main (. js/document (getElementById "app")) app-state)
    (when (:restore-state? utils/initial-query-map)
      (put! (:controls comms) [:state-restored]))
    (when (:kandan-client? utils/initial-query-map)
      (let [api-key       (:kandan-api-key utils/initial-query-map)
            kandan-client (kandan-api/make-client api-key "http://localhost:3000/remote/faye")
            channels      (:kandan-channels utils/initial-query-map)]
        (put! (:controls comms) [:api-key-updated api-key])
        (doseq [channel channels]
          (kandan-api/subscribe! kandan-client (str "/channels/" channel) (:api comms)))))))

(set! (.-onload js/window) setup!)

;; Local dev tooling
(defn ^:export send-async-message [ch-name message data]
  (put! (get-in @app-state [:comms (keyword ch-name)]) [(keyword message) (js->clj data :keywordize-keys true)]))

(defn ^:export remove-channel! [channel-id]
  (put! (get-in @app-state [:comms :controls]) [:channel-remotely-destroyed channel-id]))

(comment
  ;; Uncomment to have random messages send
  (js/setInterval #(api/random-thing (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 2500))
