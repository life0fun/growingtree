(ns growingtree-app.controllers.controls
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [cljs.reader :as reader]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.utils :as utils :refer [mprint]]))

(enable-console-print!)

; Control chan event processing. update global state with event data from control chan.
; XXX App state updated triggers IRender on app component, cascade to sidebar and main.

(declare update-navbar-selected)

; control event process msg from control chan.
; just conj msg-data to global state nav-path. msg-data is nav-path, 
; {:body [:filter-things [:group 1 :activity]], :data {:pid 1}}
; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
(defmulti control-event
  (fn [target msg-type msg-data state] msg-type))

; the default handling of evts from control chan is conj nav-path with msg-data
(defmethod control-event 
  :default
  [target msg-type msg-data state]
  (.log js/console (pr-str "default control-event : conj nav-path "  msg-type msg-data))
  (-> state
    (update-in [:nav-path] conj msg-data)))

; for login control,msg-data {:body [:login [:login 0 :login]]
(defmethod control-event 
  :login
  [target msg-type msg-data state]
  (let [cur-nav-type (get-in msg-data [:body 1 2])]
    (.log js/console (pr-str "control event :login conj nav-path " msg-data))
    (cond-> state
      :else (update-in [:nav-path] conj msg-data)
      )))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; global state update for control event for navbar.
; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
(defmethod control-event 
  :all-things
  [target msg-type msg-data state]
  (let [last-nav-type (get-in (last (get-in state [:nav-path])) [:body 1 2])
        cur-nav-type (get-in msg-data [:body 1 2])
       ]
    (.log js/console (pr-str "control event :all-things : conj nav-path " msg-data))
    ;(.log js/console (pr-str "all-things event : state things " state))
    (cond-> state
      :else (update-navbar-selected last-nav-type cur-nav-type)
      :else (update-in [:nav-path] conj msg-data)
      )))

;{:body [:filter-things [:group 1 :activity]], :data {:pid 1}}
(defmethod control-event 
  :filter-things
  [target msg-type msg-data state]
  (let [last-nav-type (get-in (last (get-in state [:nav-path])) [:body 1 2])
        cur-nav-type (get-in msg-data [:body 1 2])
       ] 
    (.log js/console (pr-str "control event :filter-things conj nav-path " msg-data))
    (cond-> state
      :else (update-navbar-selected last-nav-type cur-nav-type)
      :else (update-in [:nav-path] conj msg-data)
      )))

; add-thing msg-data = [:add-thing [:course {}]], append to :nav-path
; :add-thing, post control chan to cljs ajax to back-end.
(defmethod control-event 
  :add-thing
  [target msg-type msg-data state] ; msg-data = [:course {:title :content}]
  (.log js/console (pr-str "control event :add-thing : conj nav-path " msg-data))
  (-> state
    (update-in [:nav-path] conj msg-data))) ; nav-path [.[:lecture {:content ... :author ...}]]

; msg-type is :search-things, msg-data 
; {:body [:search-things [thing-type 0 "xx"]] :data {:thing-type :all-things :searchkey "xx"}}
(defmethod control-event 
  :search-things
  [target msg-type msg-data state] ; msg-data = [:course {:title :content}]
  (.log js/console (pr-str "control event :search-thing : conj nav-path " msg-data))
  (-> state
    (update-in [:nav-path] conj msg-data))) ; nav-path [.[:lecture {:content ... :author ...}]]


(defmethod control-event :api-key-updated
  [target msg-type api-key state]
  (assoc-in state [:users (:current-user-email state) :api-key] api-key))

(defmethod control-event :current-user-mentioned
  [target msg-type [activity url] state]
  (assoc-in state [:channels (:channel-id activity) :sfx :source-url] url))

(defmethod control-event :user-menu-toggled
  [target msg-type msg-data state]
  (update-in state [:settings :menus :user-menu :open] not))

(defmethod control-event :search-form-focused
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :search :focused] true))

(defmethod control-event :search-form-blurred
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :search :focused] false))

(defmethod control-event :search-form-updated
  [target msg-type new-value state]
  (assoc-in state [:settings :forms :search :value] new-value))

(defmethod control-event :user-msg-type-focused
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :user-msg-type :focused] true))

(defmethod control-event :user-msg-type-blurred
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :user-msg-type :focused] false))

(defmethod control-event :user-msg-type-updated
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :user-msg-type :value] msg-data))

(defmethod control-event :audio-player-started
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :player :state] :playing))

(defmethod control-event :audio-player-stopped
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :player :state] :stopped))

(defmethod control-event :audio-player-muted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] true))

(defmethod control-event :audio-player-unmuted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] false))

(defmethod control-event :audio-player-unmuted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] false))

(defmethod control-event :audio-player-source-updated
  [target msg-type [src channel-id] state]
  (assoc-in state [:channels channel-id :player :source-url] src))

(defmethod control-event :audio-player-unmuted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] false))

(defmethod control-event :playlist-entry-queued
  [target msg-type msg-data state]
  (let [[channel-id url] msg-data]
    (update-in state [:channels channel-id :player :playlist]
               (fn [playlist]
                 (conj playlist {:order (inc (count playlist))
                                 :src url})))))

(defmethod control-event :playlist-entry-played
  [target msg-type [order channel-id] state]
  (-> state
      (assoc-in [:channels channel-id :player :playing-order] order)
      (assoc-in [:channels channel-id :player :loading] true)))

(defmethod control-event :user-msg-type-submitted
  [target msg-type msg-data state]
  (if (empty? (get-in state [:settings :forms :user-msg-type :value]))
    state
    (let [content    (get-in state [:settings :forms :user-msg-type :value])
          user       (get-in state [:users (:current-user-email state)])
          channel    (get-in state [:channels (:selected-channel state)])
          activity   {:content    content
                      :author     (:email user)
                      :created_at (js/Date.)}]
      (-> state
          (assoc-in [:settings :forms :user-msg-type :value] nil)
          (update-in [:channels (:id channel) :activities] (comp (partial sort-by :created_at) conj) activity)
          (update-in [:channels (:id channel) :activities] vec)))))

(defmethod control-event :settings-opened
  [target msg-type msg-data state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod control-event :help-opened
  [target msg-type msg-data state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod control-event :about-opened
  [target msg-type msg-data state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod control-event :user-logged-out
  [target msg-type msg-data state]
  (-> state
      (assoc-in [:settings :menus :user-menu :open] false)
      (assoc-in [:current-user-email] nil)))

(defmethod control-event :audio-source-loaded
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :player :loading] false))

(defmethod control-event :channel-destroyed
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :loading] true))

(defmethod control-event :right-sidebar-toggled
  [target msg-type channel-id state]
  (update-in state [:settings :sidebar :right :open] not))

(defmethod control-event :left-sidebar-toggled
  [target msg-type channel-id state]
  (update-in state [:settings :sidebar :left :open] not))

(defmulti window-drag-event
  (fn [msg-type msg-data state] msg-type))

(defmethod window-drag-event :grabbed
  [msg-type initial-mouse-pos window-state]
  (let [[mx my] initial-mouse-pos
        [px py] (:position window-state)
        offset [(- mx px) (- my py)]]
    (assoc window-state
      :dragging? true
      :offset offset)))

(defmethod window-drag-event :released
  [msg-type data window-state]
  (assoc window-state :dragging? false))

(defmethod window-drag-event :mouse-moved
  [msg-type mouse-position window-state]
  (if (:dragging? window-state)
    (let [[mx my] mouse-position
          [off-x off-y] (:offset window-state)
          [tnx tny] [(- mx off-x) (- my off-y)]
          min-x -150
          max-x (- (.-clientWidth js/document.body) 50)
          min-y 0
          max-y (- (.-clientHeight js/document.body) 50)
          new-position [(cond
                         (> min-x tnx) min-x
                         (> tnx max-x) max-x
                         :else tnx)
                        (cond
                         (> min-y tny) min-y
                         (> tny max-y) max-y
                         :else tny)]]
      (assoc window-state :position new-position))
    window-state))

(defmethod control-event :draggable
  [target msg-type [sub-msg-type {:keys [name] :as msg-data}] state]
  (update-in state [:windows name]
             #(window-drag-event sub-msg-type (:position msg-data) %)))

(defmethod control-event :toggle-inspector-key-pressed
  [target msg-type msg-data state]
  (update-in state [:windows :window-inspector :open] not))

(defmethod control-event :inspector-path-updated
  [target msg-type path state]
  (assoc-in state [:settings :inspector :path] path))

(defmethod control-event :state-restored
  [target msg-type path state]
  (let [str-data (.getItem js/localStorage "growingtree-app-state")]
    (if (seq str-data)
      (-> str-data
          reader/read-string
          (assoc :comms (:comms state)))
      state)))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; helper fn to update global state upon control msg
; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

; update -navbar selected in state :things, {:parent {:title ...} :course {:title ...}
(defn update-navbar-selected
  [state last-nav-type cur-nav-type]
  (let [last-nav-type (some #{last-nav-type} mock-data/nav-types)
        cur-nav-type (some #{cur-nav-type}  mock-data/nav-types)
       ]
    (.log js/console (pr-str "update-navbar-selected cur-nav-type " cur-nav-type " last " last-nav-type))
    (cond-> state
      last-nav-type (assoc-in [:things last-nav-type :selected] false)
      cur-nav-type (assoc-in [:things cur-nav-type :selected] true))
  ))





