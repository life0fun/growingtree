(ns growingtree-app.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [growingtree-app.datetime :as dt]
            [growingtree-app.plugins :as plugins]
            [growingtree-app.utils :as utils]
            [om.core :as om]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]))

(declare things-list)

(def delimiter-re #" ")

; last nav-path target thing-type is dispatch value 
(defmulti main-content 
  (fn [nav-path things search-filter opts]
    (last (last nav-path))))

(defmethod main-content :default
  [nav-path things search-filter opts]
  [:div.paginated-activities
    (things-list nav-path things search-filter opts)
  ])

(defmethod main-content :create-thing
  [nav-path things search-filter opts]
  (.log js/console "create-thing " (pr-str nav-path)))


; thing-entry div has float:left, float:right, and mid is thing-content.
(defn thing-content [current-user-email users settings author activity]
  (let [content (-> (string/split (:content activity) delimiter-re)
                    plugins/pastie
                    (plugins/mentions current-user-email users settings author)
                    (plugins/slash-me current-user-email users)
                    plugins/slash-play
                    ; plugins/emoticons
                    plugins/links
                    plugins/rgb-embed
                    plugins/hex-embed)]
    (interpose " " content)))

(defn thing-entry [current-user-email users settings author thing]
  (list
    [:div.thing {:id (str "thing-" (:id thing))
                :class (when (= current-user-email (:email author)) "current_user")
                :key (:created_at thing)}
      [:span.posted_at (str (dt/time-ago (:created_at thing)) " ago")]
      (utils/gravatar-for (:email author))
      [:div.readable
        [:span.user (or (:full-name author) (:email author))]
        [:span.content (thing-content current-user-email users settings author thing)]
    ]
    (map (fn [media]
           [:div.media-entry media])
        (remove string? (-> (string/split (:content thing) delimiter-re)
                             plugins/image-embed
                             plugins/youtube-embed
                             plugins/vimeo-embed)))]))


(defn chatbox [comm opts]
  [:div.chatbox [:textarea.chat-input
                  (merge
                    {:on-focus #(put! comm [:user-message-focused])
                     :on-blur #(put! comm [:user-message-blurred])
                     :on-key-up #(if (= (.. % -which) 13)
                                    (put! comm [:user-message-submitted])
                                    (put! comm [:user-message-updated (.. % -target -value)]))}
                    (when-not (:input-focused? opts)
                      {:value (:input-value opts)}))]
    [:button.post {:on-click #(put! comm [:user-message-submitted])} "Post"]])


; a list of things for nav ul
(defn things-list [nav-path things search-filter opts]
  (let [nav-path-type (last (last nav-path))
        thing-nodes   (get-in things [nav-path-type :thing-nodes])
        re-filter     (when search-filter (js/RegExp. search-filter "ig"))
        filtered-things   ; if search filter exist, filter thing's :content
          (if re-filter
              (filter #(.match (:content %) re-filter) thing-nodes)
              thing-nodes)
       ]
    (map #(let [author (get-in opts [:users (:author %)])]
            (thing-entry (:current-user-email opts)
                         (:users opts)
                         (:settings opts)
                         author
                         %))
          filtered-things)))


; main-area get selected chan app state MapCursor to filter content for selected chan.
(defn main-area [{:keys [nav-path things channel search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_] "MainArea")
    om/IRender
    (render [this]
      (html/html
        (let [comm (get-in opts [:comms :controls])]
          (.log js/console "rendering main-area " (pr-str nav-path) " ")
          [:article.main-area
            [:header.header
              [:a.nav-toggle.button.left {:href "#"
                                          :on-click #(put! comm [:left-sidebar-toggled])} [:i.fa.fa-comments]]
              [:a.sidebar-toggle.button.right {:href "#"
                                               :on-click #(put! comm [:right-sidebar-toggled])} [:i.fa.fa-bars]]
              [:a.logo
                {:href "#/"
                 :on-click (constantly false)}
                [:img
                  {:src "images/logo.png",
                   :alt "growingtree-app"
                   :title "growingtree-app"}]]]
            [:div.container
              [:div#content
                (main-content nav-path things search-filter opts)
              ;(chatbox comm opts)
              ]]
        ])))))
 
