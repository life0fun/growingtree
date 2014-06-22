(ns growingtree-app.controllers.post-controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.api.mock :as api]
            [growingtree-app.api.cljsajax :as cljsajax]
            [growingtree-app.commands :as commands]
            [growingtree-app.routes :as routes]
            [growingtree-app.ui :as imp-ui]
            [growingtree-app.useful :as useful :refer [ffilter]]
            [growingtree-app.utils :as utils :refer [mprint]])
  (:use-macros [dommy.macros :only [sel sel1]]))

; process event from chan, aside from global state update from controls ns.

(def local-only-commands
  ["/mute" "/unmute"])

(defn sendable-message? [message]
  (let [[command & _] (string/split message #" |\n")]
    (if (or (some #{command} local-only-commands)
            (empty? message))
      false
      true)))

(defmulti post-control-event!
  (fn [target message args previous-state current-state] message))

; nothing to do for default control event.
(defmethod post-control-event! 
  :default
  [target message args previous-state current-state]
  (.log js/console "default post-control for: " (pr-str message)))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; post control event for navbar, last nav-path tuple.
; called from core to process control event, nav-path {:path [:all 0 :parent]}
; send xhr request to get data.
(defmethod post-control-event! 
  :tab-selected
  [target message nav-path previous-state current-state]
  (print "post-control-event! tab-selected nav-path " nav-path)  ; {:path [:all 0 :parent]}
  (utils/set-window-href! (routes/v1-thing-nodes {:thing-type (name (last (:body nav-path)))}))
  (cljsajax/cljs-ajax :request-things
                      nav-path
                      (get-in current-state [:comms :api])
                      nav-path)   ; [:all 0 :parent]
    )
  ; (when-let [new-path (get-in current-state [:nav-path])]
  ;   (js/setTimeout #(imp-ui/scroll-to-latest-message! target (last (last new-path))) 35)))

; msg is :add-thing, nav-path [:course {:title ... :content ...}]]
(defmethod post-control-event! 
  :add-thing
  [target message nav-path previous-state current-state]
  (print "post-control-event! add-thing " nav-path)
  (utils/set-window-href! (routes/v1-thing-nodes {:thing-type (name (first nav-path))}))
  (cljsajax/cljs-ajax :add-thing 
                      nav-path 
                      (get-in current-state [:comms :api])
                      (last nav-path))  ; last of [:course {:title ... :content ...}]
  )

(defmethod post-control-event! 
  :current-user-mentioned
  [target message args previous-state current-state]
  (mprint "notify current user they were mentioned"))

(defmethod post-control-event! 
  :playlist-entry-played
  [target message [order channel-id] previous-state current-state]
  (let [controls-ch (get-in current-state [:comms :controls])
        playlist (get-in current-state [:channels channel-id :player :playlist])
        entry (ffilter #(= (:order %) order) (get-in current-state [:channels channel-id :player :playlist]))]
    (put! controls-ch [:audio-player-source-updated [(:src entry) channel-id]])))

(defmethod post-control-event! :audio-player-source-updated
  [target message [src channel-id] previous-state current-state]
  (when (and (= channel-id (:selected-channel current-state))
             (= (get-in current-state [:channels (:selected-channel current-state) :player :state])
                :playing))
    (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
      (js/setTimeout #(.play player) 35))))


(defmethod post-control-event! :user-message-submitted
  [target message args previous-state current-state]
  (let [channel (get-in current-state [:channels (:selected-channel current-state)])
        user-message (get-in previous-state [:settings :forms :user-message :value])
        content    (get-in previous-state [:settings :forms :user-message :value])
        user       (get-in current-state [:users (:current-user-email current-state)])
        channel    (get-in current-state [:channels (:selected-channel current-state)])
        api-key    (:api-key user)
        activity   {:content    content
                    :author     (:email user)
                    :created_at (js/Date.)
                    :channel-id (:id channel)}]
    (when-let [input (sel1 target [:.chat-input])]
      (dommy/set-value! input ""))
    (js/setTimeout #(imp-ui/scroll-to-latest-message-when-appropriate! target (:id channel)) 35)
    (commands/handle-maybe-command target {:content user-message
                                           :channel-id (:id channel)} current-state)
    (when (sendable-message? user-message)
      (api/send-user-message! api-key activity))))

(defmethod post-control-event! :audio-player-started
  [target message channel-id previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
    (js/setTimeout #(.play player) 35)))

(defmethod post-control-event! :audio-player-stopped
  [target message channel-id previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
    (js/setTimeout #(.pause player) 35)))

(defmethod post-control-event! :audio-player-muted
  [target message args previous-state current-state]
  (let [players (sel target :.audio-player)]
    (js/setTimeout #(doseq [player players]
                      (set! (.-muted player) true)) 35)))

(defmethod post-control-event! :audio-player-unmuted
  [target message args previous-state current-state]
  (let [players (sel target :.audio-player)]
    (js/setTimeout #(doseq [player players]
                      (set! (.-muted player) false)) 35)))

(defmethod post-control-event! :current-user-mentioned
  [target message [activity url] previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.sfx.audio-" (:channel-id activity))])]
    (js/setTimeout #(.play player) 35)))

(defmethod post-control-event! :user-logged-out
  [target message [activity url] previous-state current-state]
  (mprint "Log the user out somehow"))

(defmethod post-control-event! :search-field-focused
  [target message [activity url] previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    ;; Really unpleasant, but handles the bug where the input field is rendered blank when re-focused
    (.setTimeout js/window
                 #(set! (.-value search-field) (get-in current-state [:settings :forms :search :value]))
                 20)))

(defmethod post-control-event! :search-focus-key-pressed
  [target message args previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    (.focus search-field)))

(defmethod post-control-event! :search-form-blur-key-pressed
  [target message args previous-state current-state]
  (when-let [message-field (sel1 [target :textarea.chat-input])]
    (.focus message-field)))

(defmethod post-control-event! :user-message-blur-key-pressed
  [target message args previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    (.focus search-field)))

(defmethod post-control-event! :channel-destroyed
  [target message channel-id previous-state current-state]
  (api/destroy-channel! (get-in current-state [:comms :api]) channel-id))

(defmethod post-control-event! :state-restored
  [target message channel-id previous-state current-state]
  (when (empty? (.getItem js/localStorage "growingtree-app-state"))
    (print "No data available to load from localStorage")))

(defmethod post-control-event! :state-persisted
  [target message channel-id previous-state current-state]
  (.setItem js/localStorage "growingtree-app-state" (pr-str (dissoc current-state :comms))))

(defmethod post-control-event! :window-resized
  [target message channel-id previous-state current-state]
  ;; Figure out re-layout code here
  )
