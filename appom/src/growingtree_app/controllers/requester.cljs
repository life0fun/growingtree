(ns growingtree-app.controllers.requester
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


(def local-only-commands
  ["/mute" "/unmute"])

(defn sendable-message? [message]
  (let [[command & _] (string/split message #" |\n")]
    (if (or (some #{command} local-only-commands)
            (empty? message))
      false
      true)))

;
; post control event perform ajax call to backend services and send result to api-channel.
; msg-type is [:all-things :filter-things :add-thing]
;
; target is view $el, not used. msg-type is query type, all-things or filter things.
; msg-data is nav-path. 
; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}  
; {:body [:filter-things [:group 17592186045438 :activity]], :data {:pid 17592186045438}}
; Ajax request to get data using query path.
; previouse-state is NOT used.
(defmulti request
  (fn [target msg-type msg-data previous-state current-state] msg-type))

; nothing to do for default control event.
(defmethod request 
  :default
  [target msg-type msg-data previous-state current-state]
  (.log js/console (pr-str "request default msg-type for: " msg-type)))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; user click login, send :signup-login command ajax request 
; ajax request hits /login end-point with nav-path in request params.
(defmethod request 
  :login
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax :login nav-path " nav-path))
  (routes/set-window-href! "login" (routes/v1-all-things-route nav-path))
  (cljsajax/cljs-ajax :signup-login  ;:request-things
                      nav-path
                      (get-in current-state [:comms :api]) ; ajax ret data to api-ch.
                      nav-path)  ; nav-path as request :params :details
    )

; user signup, send :signup-login command to ajax reqeust.
; nav-path {:body [:signup [:login 0 :signup]], :data {:type "parent", :name "a"}}
(defmethod request
  :signup
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax :signup nav-path " nav-path))
  (routes/set-window-href! "signup" (routes/v1-all-things-route nav-path))
  (cljsajax/cljs-ajax :signup-login ;:request-things
                      nav-path
                      (get-in current-state [:comms :api]) ; ajax ret data to api-ch.
                      nav-path)  ; nav-path as request :params :details
    )

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; post control event for navbar, last nav-path tuple.
; {:body [:all-things [:all 0 :group]], :data {:author "rich-dad"}}
(defmethod request 
  :all-things
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax :all-things nav-path " nav-path))
  (routes/set-window-href! "signup" (routes/v1-all-things-route nav-path))
  (cljsajax/cljs-ajax :request-things
                      nav-path
                      (get-in current-state [:comms :api]) ; ajax ret data to api-ch.
                      nav-path)  ; nav-path as request :params :details
    )
  
; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; comm chan post control event, called from core to process control event in comm chan.
; {:body [:filter-things [:group 17592186045438 :activity]], :data {:pid 17592186045438}}
; ajax request to get data using query path.
(defmethod request 
  :filter-things
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax filter-things nav-path " nav-path))
  ; update secretary router match to action.
  (routes/set-window-href! "filter" (routes/v1-filter-things-route nav-path))
                            ; {:parent (name (get-in nav-path [:body 1 0]))
                            ;  :id (get-in nav-path [:body 1 1])
                            ;  :filtered (name (get-in nav-path [:body 1 2]))
                            ; }))
  (cljsajax/cljs-ajax :request-things
                      nav-path
                      (get-in current-state [:comms :api])  ; ajax ret data to api-ch.
                      nav-path)   ; request :params :details is nav-path. [:all 0 :parent], or [:qpath [:course 1 :lecture]]
  )

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; comm chan post control event, called from core to process control event in comm chan.
; {:body [:message-things [:child 1 :shoutout]], :data {:pid 17592186045438}}
; ajax request to get data using query path.
(defmethod request
  :message-things
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax message-things nav-path " nav-path))
  ; update secretary router match to action.
  (routes/set-window-href! "message" (routes/v1-filter-things-route nav-path))
                            ; {:parent (name (get-in nav-path [:body 1 0]))
                            ;  :id (get-in nav-path [:body 1 1])
                            ;  :filtered (name (get-in nav-path [:body 1 2]))
                            ; }))
  (cljsajax/cljs-ajax :request-things
                      nav-path
                      (get-in current-state [:comms :api])  ; ajax ret data to api-ch.
                      nav-path)   ; request :params :details is nav-path. [:all 0 :parent], or [:qpath [:course 1 :lecture]]
  )

; nav-path is msg-data in get-search-msg, map of :body [] :data {}
(defmethod request 
  :search-things
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax search-thing nav-path " nav-path));
  ; ; update secretary router match to action.
  (routes/set-window-href! "search" (routes/v1-all-things
                            {:thing-type (name (get-in nav-path [:body 1 0]))
                             :key (get-in nav-path [:body 1 1])}))
  (cljsajax/cljs-ajax :search-things
                      nav-path  
                      (get-in current-state [:comms :api]) ; api-ch
                      nav-path) ; request :params :details is nav-path. [:all 0 :parent], or [:qpath [:course 1 :lecture]]
  )


; add-thing-msg-nav-path defines msg-data as nav-path 
; {:add-thing :lecture :data {:lecture/course 1 :lecture/title ...}}
(defmethod request 
  :add-thing
  [target msg-type nav-path previous-state current-state]
  (.log js/console (pr-str "post ajax add-thing nav-path " nav-path)) ; [:lecture {:lecture/course ...}]
  ; ; update secretary router match to action.
  (routes/set-window-href! "add" (routes/v1-all-things
                            {:thing-type (name (get nav-path :add-thing))}))
  (cljsajax/cljs-ajax :add-thing
                      nav-path
                      (get-in current-state [:comms :api])
                      (get nav-path :data))  ; input data is {:add-thing :course :details {:title ... :content ...}}
  )

; user logged out.
(defmethod request 
  :user-logged-out
  [target message nav-path previous-state current-state]
  (.log js/console (pr-str "Log the user out somehow")))


(defmethod request 
  :current-user-mentioned
  [target message args previous-state current-state]
  (mprint "notify current user they were mentioned"))

(defmethod request 
  :playlist-entry-played
  [target message [order channel-id] previous-state current-state]
  (let [controls-ch (get-in current-state [:comms :controls])
        playlist (get-in current-state [:channels channel-id :player :playlist])
        entry (ffilter #(= (:order %) order) (get-in current-state [:channels channel-id :player :playlist]))]
    (put! controls-ch [:audio-player-source-updated [(:src entry) channel-id]])))

(defmethod request :audio-player-source-updated
  [target message [src channel-id] previous-state current-state]
  (when (and (= channel-id (:selected-channel current-state))
             (= (get-in current-state [:channels (:selected-channel current-state) :player :state])
                :playing))
    (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
      (js/setTimeout #(.play player) 35))))


(defmethod request :user-message-submitted
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

(defmethod request :audio-player-started
  [target message channel-id previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
    (js/setTimeout #(.play player) 35)))

(defmethod request :audio-player-stopped
  [target message channel-id previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.audio-" channel-id)])]
    (js/setTimeout #(.pause player) 35)))

(defmethod request :audio-player-muted
  [target message args previous-state current-state]
  (let [players (sel target :.audio-player)]
    (js/setTimeout #(doseq [player players]
                      (set! (.-muted player) true)) 35)))

(defmethod request :audio-player-unmuted
  [target message args previous-state current-state]
  (let [players (sel target :.audio-player)]
    (js/setTimeout #(doseq [player players]
                      (set! (.-muted player) false)) 35)))

(defmethod request :current-user-mentioned
  [target message [activity url] previous-state current-state]
  (let [player (sel1 target [(str ".audio-player.sfx.audio-" (:channel-id activity))])]
    (js/setTimeout #(.play player) 35)))


(defmethod request :search-field-focused
  [target message [activity url] previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    ;; Really unpleasant, but handles the bug where the input field is rendered blank when re-focused
    (.setTimeout js/window
                 #(set! (.-value search-field) (get-in current-state [:settings :forms :search :value]))
                 20)))

(defmethod request :search-focus-key-pressed
  [target message args previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    (.focus search-field)))

(defmethod request :search-form-blur-key-pressed
  [target message args previous-state current-state]
  (when-let [message-field (sel1 [target :textarea.chat-input])]
    (.focus message-field)))

(defmethod request :user-message-blur-key-pressed
  [target message args previous-state current-state]
  (when-let [search-field (sel1 [target :input.query])]
    (.focus search-field)))

(defmethod request :channel-destroyed
  [target message channel-id previous-state current-state]
  (api/destroy-channel! (get-in current-state [:comms :api]) channel-id))

(defmethod request :state-restored
  [target message channel-id previous-state current-state]
  (when (empty? (.getItem js/localStorage "growingtree-app-state"))
    (print "No data available to load from localStorage")))

(defmethod request :state-persisted
  [target message channel-id previous-state current-state]
  (.setItem js/localStorage "growingtree-app-state" (pr-str (dissoc current-state :comms))))

(defmethod request :window-resized
  [target message channel-id previous-state current-state]
  ;; Figure out re-layout code here
  )
