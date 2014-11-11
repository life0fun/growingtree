(ns growingtree-app.history
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [goog.events :as events]
            [secretary.core :as sec :include-macros true :refer [defroute]]
            [growingtree-app.utils :as utils])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]])
  (:import [goog History]))


; wrap history.state as clojure atom data structure.
; http://loganlinn.com/blog/2014/05/26/push-state-and-clojurescript
; 

; push a path/url to HTML5 js/history state, automatically reload browser.
;


(defn back! [] (.back js/history))
 
(defn forward! [] (.forward js/history))
 
(defn go! [idx] (.go js/history idx))
 
(defn replace-state!
  ([state]
     (replace-state! state (.-title js/document)))
  ([state title]
     (.replaceState js/history state title))
  ([state title path]
     (.replaceState js/history state title path)))
 
(defn push-state!
  ([state title]
     (.pushState js/history state title))
  ([state title path]
     (.pushState js/history state title path)))
 
(defn current-state
  "Returns current JS value of history.state"
  []
  (.-state js/history))
 
(def state
  (let [clj-state #(js->clj (.-state js/history) :keywordize-keys true)]
    (reify
      IDeref
      (-deref [_]
        (clj-state))
      IReset
      (-reset! [_ v]
        (replace-state! (clj->js v)))
      ISwap
      (-swap! [s f]
        (-reset! s (f (clj-state))))
      (-swap! [s f x]
        (-reset! s (f (clj-state) x)))
      (-swap! [s f x y]
        (-reset! s (f (clj-state) x y)))
      (-swap! [s f x y more]
        (-reset! s (apply f (clj-state) x y more))))))