(ns growingtree-app.commands
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.api.mock :as api]
            [growingtree-app.components.app :as app]
            [growingtree-app.datetime :as dt]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.useful :as useful :refer [ffilter]]
            [growingtree-app.utils :as utils :refer [mprint]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  (:use-macros [dommy.macros :only [sel sel1]]))

(defmulti handle-maybe-command
  (fn [target activity state]
    (first (string/split (:content activity) #" |\n"))))

(defmethod handle-maybe-command :default
  [target activity state]
  (mprint "No command for " (pr-str activity)))

(defmethod handle-maybe-command "/play"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (when-let [url (or (some-> (:content activity)
                               (string/split #" ")
                               second
                               (->>
                                (re-find #"http.*\.(mp3|mp4|ogg|wav)")
                                (first)))
                       (as-> (:content activity) x
                             (string/split x #" ")
                             (second x)
                             (some #{x} ["ding" "alert"])
                             (get {"ding" "/assets/audio/ding.wav"
                                   "alert" "/assets/audio/threetone-alert.wav"} x)))]
      (put! controls-ch [:audio-player-source-updated [url (:selected-channel state)]]))
    (put! controls-ch [:audio-player-started (:channel-id activity)])))

(defmethod handle-maybe-command "/stop"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-stopped (:channel-id activity)])))

(defmethod handle-maybe-command "/pause"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-stopped (:channel-id activity)])))

(defmethod handle-maybe-command "/queue"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (when-let [url (->> (second (string/split (:content activity) #" |\n"))
                        (re-find #"http.*\.(mp3|mp4|ogg|wav)")
                        first)]
      (put! controls-ch [:playlist-entry-queued [(:channel-id activity) url]]))))

(defmethod handle-maybe-command "/mute"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-muted])))

(defmethod handle-maybe-command "/unmute"
  [target activity state]
  (let [controls-ch (get-in state [:comms :controls])]
    (put! controls-ch [:audio-player-unmuted])))
