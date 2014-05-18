(ns growingtree-app.components.app
  (:require [ankha.core :as ankha]
            [cljs.reader :as reader]
            [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [growingtree-app.components.draggable-window :as draggable]
            [growingtree-app.components.key-queue :as keyq]
            [growingtree-app.components.navbar :as navbar]
            [growingtree-app.components.sidebar :as sidebar]
            [growingtree-app.components.main-area :as main-area]
            [growingtree-app.utils :as utils :refer [mprint]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]))

(def keymap (atom nil))

; called from om/root, app is root cursor app state and om component.
; inside render phase, app state cursor ref can be accessed without @ de-ref.
(defn app [app owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "growingtree-app"))
    om/IRender
    (render [this]
      ; get app state cursors for related keys, and pass map state cursor when building sub-components.
      (let [nav-list                (get-in app [:nav-list])
            cur-thing               (get-in app [:things (:cur-thing app)])
            selected-channel        (get-in app [:channels (:selected-channel app)])
            current-user            (get-in app [:users (:current-user-email app)])
            controls-ch             (get-in app [:comms :controls])
            open-player!           #(put! controls-ch [:history-player-opened])
            message-input-focused?  (get-in app [:settings :forms :user-message :focused])
            search-input-focused?   (get-in app [:settings :forms :search :focused])
            focus-search!          #(when-not message-input-focused?
                                      (put! controls-ch [:search-focus-key-pressed]))
            inspector-path          (get-in app [:settings :inspector :path])
            inspector-path-s        (pr-str inspector-path)
            blur-current-field!    #(cond
                                     message-input-focused? (put! controls-ch [:user-message-blur-key-pressed])
                                     search-input-focused?  (put! controls-ch [:search-form-blur-key-pressed]))
            change-inspector-path! #(let [path-string (js/prompt "New path (must be edn-compatible)"
                                                                 inspector-path-s)]
                                      (try
                                        (put! controls-ch [:inspector-path-updated (reader/read-string path-string)])
                                        (catch js/Error e
                                          (mprint "Not edn-compatible: " path-string))))
            persist-local-state!   #(put! controls-ch [:state-persisted])
            restore-local-state!   #(put! controls-ch [:state-restored])
            toggle-inspector!      #(put! controls-ch [:toggle-inspector-key-pressed])
            _ (reset! keymap {"ctrl+slash" open-player!
                              "ctrl+esc"   toggle-inspector!
                              "ctrl+1"     change-inspector-path!
                              "ctrl+s"     persist-local-state!
                              "ctrl+r"     restore-local-state!
                              "slash"      focus-search!
                              "esc"        blur-current-field!})]
        (.log js/console "app state change, re-render all components, sidebar, main-area")
        (html/html
          [:div
            {:className (str (when (get-in app [:settings :sidebar :right :open]) "slide-left ")
                             (when (get-in app [:settings :sidebar :left :open]) "slide-right "))}
            (when (get-in app [:windows :window-inspector :open])
              (when-let [path (get-in app [:settings :inspector :path])]
                (om/build draggable/draggable-window
                          {:title  (str "Data Inspector: " (pr-str path))
                           :name :window-inspector
                           :window (get-in app [:windows :window-inspector])
                           :comm   (get-in app [:comms :controls])
                           :content-com ankha/inspector
                           :content-data (get-in app path)
                           :content-opts {}})))
            (om/build keyq/KeyboardHandler app {:opts {:keymap keymap
                                                       :error-ch (get-in app [:comms :error])}})

            ; pass selected-chan app state MapCursor to sidebar subcomponent in data map.
            (om/build sidebar/sidebar {:channel selected-channel
                                       :settings (:settings app)
                                       :search-filter (get-in app [:settings :forms :search :value])}
                                      {:opts {:comms (:comms opts)
                                              :users (:users app)
                                              :current-user-email (:current-user-email app)
                                              :selected-channel (:selected-channel app)
                                              :channels (:channels app)}})
            ; pass selected-chan app state MapCursor to main-area component to show content form selected chan.
            (om/build main-area/main-area {:nav-list nav-list
                                           :thing cur-thing
                                           :channel selected-channel
                                           :search-filter (get-in app [:settings :forms :search :value])} 
                                          {:opts {:comms (:comms opts)
                                                  :users (:users app)
                                                  :current-user-email (:current-user-email app)
                                                  :input-focused? (get-in app [:settings :forms :user-message :focused])
                                                  :input-value (get-in app [:settings :forms :user-message :value])}}
                                                  )
          (om/build navbar/navbar (select-keys app [:nav-list :things :channels :settings]) {:opts {:comms (:comms opts)}})
          ; [:div#at-view.at-view [:ul#at-view-ul]]
          ])
      ))))
