(ns growingtree-app.core
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.api.mock :as api]
            [growingtree-app.components.login :as login]
            [growingtree-app.components.app :as app]
            [growingtree-app.controllers.states :as states]
            [growingtree-app.controllers.requester :as requester]
            [growingtree-app.controllers.api :as api-con]
            [growingtree-app.controllers.post-api :as api-post]
            [growingtree-app.datetime :as dt]
            [growingtree-app.api.kandan :as kandan-api]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.routes :as routes]
            [growingtree-app.useful :as useful :refer [ffilter]]
            [growingtree-app.utils :as utils :refer [mprint]]
            [growingtree-app.ui :as ui]
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


; after login succeed, detach login and show app.
(defn detach-login-show-app
  []
  (let [login-el (.getElementById js/document "login")]
    ; div id selector with string #div-id
    (ui/hide-div "#login")
    (ui/show-div "#app")
    (om/detach-root login-el)))


; - - - - - - - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - - 
; event drive state transition. Different msg-type updates diff state slots.
; - - - - - - - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - - 
; processing control event, transition state.
(defmulti process-control-event
  (fn [app-el state msg-type msg-data] msg-type))


; logged in, hide login div, detach render loop component.
(defmethod process-control-event
  :login-success
  [el state msg-type msg-data]
  (detach-login-show-app))


; logged in, hide login div, detach render loop component.
(defmethod process-control-event
  :login-error
  [el state msg-type msg-data]
  (.log js/console (pr-str "login error " msg-data))
  (ui/set-text "#login-error" msg-data))

; most control event falls into default case, dispathc msg-type to transition
; state, and send cljs ajax requests to get data from server.
(defmethod process-control-event
  :default
  [el state msg-type msg-data]
  (let [previous-state @state]
    ; control event transition state, and indicate state by nav-path
    (swap! state (partial states/transition el msg-type msg-data))
    ; send cljs request tby msg type.
    (requester/request el msg-type msg-data previous-state @state)))


; when user hit back, handle popstate. msg-type is popstate, msg-data is url
(defmethod process-control-event
  :popstate
  [el state msg-type msg-data]
  (let [previous-state @state]
    ; control event transition state, and indicate state by nav-path
    (swap! state (partial states/transition el msg-type msg-data))
    ))


; API event means data arrived, store data in state and transition state. 
; different msg-types set diff slots in state.
(defn process-api-event
  [el state msg-type msg-data]
  (let [previous-state @state]
    ; post-api-event do nothing for now.
    ; (api-post/post-api-event! el msg-type msg-data previous-state @state)
    (swap! state (partial states/transition el msg-type msg-data))))


; - - - - - - - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - - 
; app similar to mvc view fn where $el = el, and all event and render logic in 
; function. app component ref to global state for state monitoring and rendering
; - - - - - - - - - - - -  - - - - - -  - - - - - -  - - - - - -  - - - - - - 
(defn main 
  [state]
  (let [comms (:comms @state)
        history (or history (atom []))
        app-el (.getElementById js/document "app")
        login-el (.getElementById js/document "login")
        hist-el (.getElementById js/document "history-container")
       ]

    ; define client side route for url
    (routes/define-routes! state hist-el)
    ; listen on window onpopstate when user hit back on browser.
    (dommy/listen! js/window :popstate (partial routes/onpopstate (:controls comms)))

    ; create app component, which in turn create all sub components, and start dom state updating.
    (om/root login/login state {:target login-el :opts {:comms comms}})
    (om/root app/app state {:target app-el :opts {:comms comms}})
    
    ;
    ; chan msg vec, [msg-type msg-data]. msg-data is nav path.
    ; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
    ; {:body [:filter-things [:group 1 :activity]], :data {:pid 1}}
    ; :add-thing [:lecture {:lecture/type :math, :lecture/course 1, }]
    ; refer to global state :nav-path for msg-data format. conj msg-data to state nav-path prop.
    ;
    (go (while true  ; looping channel msg.
      (alt!
        ; UI control event => state transition => swap nav-path state => ajax fetch data for new state.
        (:controls comms) 
          ([v]   ; [:all-things [:parent]], first is msg, rest is nav-path.
            (let [previous-state @state
                  msg-type (first v)
                  msg-data (last v)]  ; msg-data, is the last of msg in chan, is nav-path.
              (process-control-event app-el state msg-type msg-data)
              ))
        ; cljs-ajax => state transition => swap atom state with body data => trigger re-render.
        (:api comms)
          ([v]
            (let [previous-state @state
                  msg-type (first v)
                  msg-data (last v)]
              (process-api-event app-el state msg-type msg-data))
            )
        (async/timeout 30000) 
        (mprint (pr-str @history)))))
    ))

; called upon page onload, setup main component with app state
(defn init-state! []
  (let [comms (:comms @app-state)]
    ; app-state is cursor to atom, pass to main as cursor to om/root
    (main app-state)
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
