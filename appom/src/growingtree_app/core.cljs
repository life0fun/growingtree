(ns growingtree-app.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.api.mock :as api]
            [growingtree-app.components.login :as login]
            [growingtree-app.components.app :as app]
            [growingtree-app.controllers.controls :as controls]
            [growingtree-app.controllers.post-controls :as controls-post]
            [growingtree-app.controllers.api :as api-con]
            [growingtree-app.controllers.post-api :as api-post]
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


; conj nav-path into window location history
(defn update-history! [history channel message]
  (let [m (first message)
        record (if (filtered-message? m) m message)]
    (swap! history conj [channel record])))


; app similar to mvc view fn where $el = el, and all event and render logic in function.
; app component ref to global state for state monitoring and rendering 
(defn main [el state]
  (let [comms (:comms @state)
        history (or history (atom []))]
    ; we need route ui click event to control chan, and process control chan inside main comp.
    (routes/define-routes! state (.getElementById js/document "history-container"))

    ; create app component, which in turn create all sub components, and start dom state updating. 
    ; (om/root app/app state {:target el   ; must have :target slot point to app dom element, $el
    ;                         :opts {:comms comms}})
    (om/root login/login state {:target el   ; app dom element, $el
                                :opts {:comms comms}})
    
    ;
    ; chan msg vec, [msg-type msg-data]. msg-data is nav path.
    ; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
    ; {:body [:filter-things [:group 1 :activity]], :data {:pid 1}}
    ; :add-thing [:lecture {:lecture/type :math, :lecture/course 1, }]
    ; refer to global state :nav-path for msg-data format. conj msg-data to state nav-path prop.
    ;
    (go (while true  ; looping channel msg.
      (alt!
        (:controls comms) 
          ([v]   ; [:all-things [:parent]], first is msg, rest is nav-path.
            (when utils/logging-enabled? (mprint "Controls Verbose: " (pr-str v)))
            ; each event [msg-type msg-data]
            (let [previous-state @state
                  msg-type (first v)
                  msg-data (last v)
                 ]
              ; (update-history! history :controls v)

              ; first, control event just append msg-data to nav-path.
              (swap! state (partial controls/control-event el msg-type msg-data))
              ; second, for :add-thing or :get, post-controller take nav-path and ajax to back-end.
              (controls-post/post-control-event! el msg-type msg-data previous-state @state)
              ))
        ; server data from cljsajax, (put! api-ch [:api-data {data-path main-path :things-vec (vec things-vec)}])
        (:api comms)
          ([v]
            (when utils/logging-enabled? (mprint "API Verbose: " (pr-str v)))
            (let [previous-state @state
                  msg-type (first v)
                  msg-data (last v)
                  things-vec (:things-vec msg-data)]
              ; (.log js/console (pr-str "api chan event : type " msg-type " data " msg-data))
              ; api-event process api-data, api-success, and api-error.
              (swap! state (partial api-con/api-event el msg-type msg-data))
              ; post-api-event do nothing for now.
              (api-post/post-api-event! el msg-type msg-data previous-state @state)))
        (async/timeout 30000) 
        (mprint (pr-str @history)))))
    ))

; called upon page onload, setup main component with app state
(defn init-state! []
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

; upon page onload, setup init app state.
(set! (.-onload js/window) init-state!)

;; Local dev tooling
(defn ^:export send-async-message [ch-name message data]
  (put! (get-in @app-state [:comms (keyword ch-name)]) [(keyword message) (js->clj data :keywordize-keys true)]))

(defn ^:export remove-channel! [channel-id]
  (put! (get-in @app-state [:comms :controls]) [:channel-remotely-destroyed channel-id]))

(comment
  ;; Uncomment to have random messages send
  (js/setInterval #(api/random-thing (get-in @app-state [:comms :api]) (rand-nth (keys (:channels @app-state)))) 2500))
