(ns growingtree-app.controllers.states
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [cljs.reader :as reader]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.utils :as utils :refer [mprint]]))

(enable-console-print!)

; UI event triggers state transition.
; Control chan event processing. update global state with event data from control chan.
; XXX App state updated triggers IRender on app component, cascade to sidebar and main.

(declare login-state-transition)
(declare update-navbar-selected)


; state transition upon control event process msg from control chan.
; just conj msg-data to global state nav-path. msg-data is nav-path, 
; {:body [:filter-things [:group 1 :activity]], :data {:pid 1}}
; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
(defmulti transition
  (fn [target msg-type msg-data state] msg-type))


; ===========================================================================
; state transition event, dispatch based on msg-type, update diff state slots. 
; ===========================================================================
; the default handling of evts from control chan is conj nav-path with msg-data
(defmethod transition 
  :default
  [target msg-type msg-data state]
  (.log js/console (pr-str "default transition : conj nav-path "  msg-type msg-data))
  (-> state
    (update-in [:nav-path] conj msg-data)))

; for login control, msg-data {:body [:login [:login 0 :login]]
(defmethod transition 
  :login
  [target msg-type msg-data state]
  (let [cur-nav-type (get-in msg-data [:body 1 2])]
    (.log js/console (pr-str "control event :login conj nav-path " msg-data))
    (cond-> state
      :else (update-in [:nav-path] conj msg-data)
      )))

; for signup, {:body [:signup [:login 0 :signup]], :data {:type "parent", :name "a", :pass "d"}}
(defmethod transition 
  :signup
  [target msg-type msg-data state]
  (let [cur-nav-type (get-in msg-data [:body 1 2])]
    (.log js/console (pr-str "control event :signup conj nav-path " msg-data))
    (cond-> state
      :else (update-in [:nav-path] conj msg-data)
      )))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; global state update for control event for navbar.
; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
(defmethod transition 
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
(defmethod transition 
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
(defmethod transition 
  :add-thing
  [target msg-type msg-data state] ; msg-data = [:course {:title :content}]
  (.log js/console (pr-str "control event :add-thing : conj nav-path " msg-data))
  (-> state
    (update-in [:nav-path] conj msg-data))) ; nav-path [.[:lecture {:content ... :author ...}]]

; msg-type is :search-things, msg-data 
; {:body [:search-things [thing-type 0 "xx"]] :data {:thing-type :all-things :searchkey "xx"}}
(defmethod transition 
  :search-things
  [target msg-type msg-data state] ; msg-data = [:course {:title :content}]
  (.log js/console (pr-str "control event :search-thing : conj nav-path " msg-data))
  (-> state
    (update-in [:nav-path] conj msg-data))) ; nav-path [.[:lecture {:content ... :author ...}]]


; ===========================================================================
; api channel event
; ===========================================================================
; when query data available, api-data set ajax result/things-vec to state :body slot. trigger re-render.
; api-data {:body [:login 0 :login]}, :thing-vec [[:person/lname "rich"]]
; api-data {:body [:all 0 :parent]}, :things-vec ({:person/url #{rich.com} ...}]
; api-data {:body [:course 1 :lecture], :things-vec [{:lecture/type :math, :lecture/numcomments 0, :lectu
; store into global state map with nav-path as map key and things-vec as value.
; api event come back, store in app state body section.
(defmethod transition
  :api-data
  [target msg-type msg-data state]  ; state is atom passed from swap! state
  (let [comm (get-in state [:comms :controls])
        things-vec (:things-vec msg-data)
        nav-path (:nav-path msg-data)
        thing-type (get-in nav-path [:body 1 2])
       ]
    (.log js/console (pr-str "api-data set :body things-vec " nav-path thing-type msg-data))
    (if (some #{thing-type} #{:login :signup})  ; in case of login or signup
      (login-state-transition target thing-type msg-data state) ; update :login-user slot.
      (assoc-in state [:body] things-vec)  ; api-data hard-code to set :body
      )))


; login state processing, come here when login or sign up success. 
; set user to [:login-user] slot, not :body slot.
; thing-type (get-in nav-path [:body 1 2]) = must be :login
(defn login-state-transition
  [target thing-type msg-data state]
  (let [comm (get-in state [:comms :controls])
        things-vec (:things-vec msg-data)
        ; send :logged-in msg type to control channel.
        msg [:login-success :login-user]
       ]
    (.log js/console (pr-str "login-state-transition nav-path " (last (get-in state [:nav-path]))))
    ; set msg to display main page.
    (put! comm msg)
    (-> state  ; return updated state. :login-user stores current user
      (assoc-in [:login-user] (into {} things-vec))  ; convert login vec to map.
      (update-in [:nav-path] conj {:title [] :body [:all 0 :course] :data {}}))))
  

; add-thing success ajax. refresh after add means just re-direct url to nav-path that
; just before add-thing. This way we can switch to client side routing in the future.
; To trigger ajax call on the last nav-path, post control event.
; update-in nav path directly. Or put! comm last-nav-path, 
(defmethod transition
  :api-success
  [target msg-type msg-data state]
  (let [comm (get-in state [:comms :controls])
        ;{:body [:filter-things [:pareni 1 :child]], :data {:pid 1}} 
        last-nav-path (last (drop-last (get-in state [:nav-path])))  ; url before :add-thing
        ; when api success, replace {:body [:newthing-form [:course :add-course]]} with [:all-things [:all 0 :thing-type]] 
        msg (as-> (get-in last-nav-path [:body 0]) msg-type 
              (if (= :newthing-form msg-type)
                ; refer to thing-nav in navbar for creating nav-path for :all-things
                (mock-data/get-all-things-msg (get-in last-nav-path [:body 1 0]) {:author "rich-dad"})
                [msg-type last-nav-path]))
       ]
    (.log js/console (pr-str "api-success : re-direct by sending to comm msg " msg))
    (put! comm msg)
    (-> state   ; nullify state :body slot where thing-vec taken from in main_area things-list
      (assoc-in [:body] nil))
    ))


; 1. login error in family/find-user, {:data details :error {:status :status-text}}
; 2. add-thing error from ajax, set to state error slot. msg-data has :nav-path and :error, nil :things-vec
; msg-data {:nav-path {:add-thing :activity :details {}} :error {:status :response :status-text ...}}
(defmethod transition
  :api-error
  [target msg-type msg-data state]
  (.log js/console (pr-str "api-error " msg-type msg-data))
  (let [comm (get-in state [:comms :controls])
        ;{:body [:filter-things [:pareni 1 :child]], :data {:pid 1}}
        nav-path (last (get-in state [:nav-path]))
        thing-type (get-in nav-path [:body 0])
        error (:error msg-data)
        error-msg (get-in msg-data [:error :status-text])
        nav-path (:nav-path msg-data)
        ]
    (.log js/console (pr-str "api-error [:error] " nav-path error-msg msg-data))
    ; must ret valid state atom.
    (when (= :login thing-type)
      (put! comm (mock-data/get-retry-login-msg error-msg)))
    (-> state
      (assoc-in [:error] msg-data))
    ))

; "api-error [:error] " {:title [], :body [:all 0 :parent], :data {}} 
; "invalid user or passowrd : rich-sons" 
; {:path [:login 0 :login], :thing-type :login, :status 404, :error {:status-text "invalid user or passowrd : rich-sons", :status 404}, :data {:name "rich-sons", :type :login, :pass "r"}} states.cljs:176

; {:path [:login 0 :login], :thing-type :login, :status 404, 
;  :error {:status-text "invalid user or passowrd : rich-sons", :status 404}, :data {:name "rich-sons", :type :login, :pass "s"}} 

(defmethod transition :api-key-updated
  [target msg-type api-key state]
  (assoc-in state [:users (:current-user-email state) :api-key] api-key))

(defmethod transition :current-user-mentioned
  [target msg-type [activity url] state]
  (assoc-in state [:channels (:channel-id activity) :sfx :source-url] url))

(defmethod transition :user-menu-toggled
  [target msg-type msg-data state]
  (update-in state [:settings :menus :user-menu :open] not))

(defmethod transition :search-form-focused
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :search :focused] true))

(defmethod transition :search-form-blurred
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :search :focused] false))

(defmethod transition :search-form-updated
  [target msg-type new-value state]
  (assoc-in state [:settings :forms :search :value] new-value))

(defmethod transition :user-msg-type-focused
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :user-msg-type :focused] true))

(defmethod transition :user-msg-type-blurred
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :user-msg-type :focused] false))

(defmethod transition :user-msg-type-updated
  [target msg-type msg-data state]
  (assoc-in state [:settings :forms :user-msg-type :value] msg-data))

(defmethod transition :audio-player-started
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :player :state] :playing))

(defmethod transition :audio-player-stopped
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :player :state] :stopped))

(defmethod transition :audio-player-muted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] true))

(defmethod transition :audio-player-unmuted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] false))

(defmethod transition :audio-player-unmuted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] false))

(defmethod transition :audio-player-source-updated
  [target msg-type [src channel-id] state]
  (assoc-in state [:channels channel-id :player :source-url] src))

(defmethod transition :audio-player-unmuted
  [target msg-type msg-data state]
  (assoc-in state [:audio :muted] false))

(defmethod transition :playlist-entry-queued
  [target msg-type msg-data state]
  (let [[channel-id url] msg-data]
    (update-in state [:channels channel-id :player :playlist]
               (fn [playlist]
                 (conj playlist {:order (inc (count playlist))
                                 :src url})))))

(defmethod transition :playlist-entry-played
  [target msg-type [order channel-id] state]
  (-> state
      (assoc-in [:channels channel-id :player :playing-order] order)
      (assoc-in [:channels channel-id :player :loading] true)))

(defmethod transition :user-msg-type-submitted
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

(defmethod transition :settings-opened
  [target msg-type msg-data state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod transition :help-opened
  [target msg-type msg-data state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod transition :about-opened
  [target msg-type msg-data state]
  (assoc-in state [:settings :menus :user-menu :open] false))

(defmethod transition :user-logged-out
  [target msg-type msg-data state]
  (-> state
      (assoc-in [:settings :menus :user-menu :open] false)
      (assoc-in [:current-user-email] nil)))

(defmethod transition :audio-source-loaded
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :player :loading] false))

(defmethod transition :channel-destroyed
  [target msg-type channel-id state]
  (assoc-in state [:channels channel-id :loading] true))

(defmethod transition :right-sidebar-toggled
  [target msg-type channel-id state]
  (update-in state [:settings :sidebar :right :open] not))

(defmethod transition :left-sidebar-toggled
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

(defmethod transition :draggable
  [target msg-type [sub-msg-type {:keys [name] :as msg-data}] state]
  (update-in state [:windows name]
             #(window-drag-event sub-msg-type (:position msg-data) %)))

(defmethod transition :toggle-inspector-key-pressed
  [target msg-type msg-data state]
  (update-in state [:windows :window-inspector :open] not))

(defmethod transition :inspector-path-updated
  [target msg-type path state]
  (assoc-in state [:settings :inspector :path] path))

(defmethod transition :state-restored
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





