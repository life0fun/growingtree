(ns growingtree-app.ui
  "Imperative UI functions, useful for things like updating scroll
   position or manipulating audio tags."
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  (:use-macros [dommy.macros :only [sel sel1]]))



; ret a fn that toggle hide of a dom
(defn toggle-hide-fn
  [div]
  (fn [_]
    (let [f (sel1 (keyword div))]
      (dommy/toggle-class! f "hide"))))


(defn hide-div
  [div]
  (let [f (sel1 (keyword div))]
    (dommy/add-class! f "hide")))


(defn hide-all-forms
  [thing-id]
  (let [forms []]
    ))

; called from controller, after thing switch, get all thing-nodes
(defn scroll-to-latest-message! 
  [target thing-type]
  (let [thing-type (sel1 target (str "#channels-" (name thing-type)))
        activities (and thing-type (sel thing-type :.activity))
        latest (last activities)]
    (when (and thing-type latest)
      (set! (.-scrollTop thing-type) (.-offsetTop latest)))))

(defn scroll-to-latest-message-when-appropriate!
  "If the second-to-last message is visible in the chat viewport, then
  scroll to the latest message"
  [target channel-id]
  (let [channel-el (sel1 target (str "#channels-" channel-id))
        activities-els (sel channel-el :.activity)
        second-latest-el (last (drop-last activities-els))
        latest-el  (last activities-els)]
    (when (and channel-el second-latest-el)
      (let [channel-view-bottom (+ (.-scrollTop channel-el)
                                   (.-clientHeight channel-el))]
        (when (> channel-view-bottom (.-offsetTop second-latest-el))
          (set! (.-scrollTop channel-el) (.-offsetTop latest-el)))))))
