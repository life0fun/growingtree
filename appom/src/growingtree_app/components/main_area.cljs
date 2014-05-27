(ns growingtree-app.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [growingtree-app.datetime :as dt]
            [growingtree-app.plugins :as plugins]
            [growingtree-app.utils :as utils]
            [om.core :as om]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]))

(declare thing-content)
(declare thing-entry)
(declare things-list)

(def delimiter-re #" ")

; main content is based on nav-path. last nav-path vector contains filter for thing listing.
; multi fn dispatch value is nav-path filter vector final target.
(defmulti main-content 
  (fn [nav-path things search-filter opts]
    (first (last nav-path))))

; all the create new thing case
(defmethod main-content :add-thing
  [nav-path things search-filter opts]
  (.log js/console "main content add-thing form " (pr-str nav-path))
  (let [comm (get-in opts [:comms :controls])]
  (list
    [:div.create-form
      [:form.form-horizontal 
        ; {:method "post" :html "{:multipart=>true}"}
        [:legend "Parent Details"]
        [:div.control-group
          [:label.control-label {:for "person-name"} "Name"]
          [:input {:id "person-title" :type "text" :placeholder "user name"}]]
        [:div.control-group
          [:label.control-label {:for "person-lname"} "Last Name"]
          [:input {:id "person-lname" :type "text" :placeholder "user last name"}]]
        [:div.control-group
          [:label.control-label {:for "person-type"} "Type"]
          [:select {:id "person-type"}
            [:option {:value "M"} "Dad"]
            [:option {:value "F"} "Mom"]
            [:option {:value "T"} "Teacher"]]]
        [:div.control-group
          [:label.control-label {:for "person-email"} "Email"]
          [:input {:id "person-email" :type "text" :placeholder "user email"}]]
        [:div.control-group
          [:label.control-label {:for "person-phone"} "Phone"]
          [:input {:id "person-phone" :type "text" :placeholder "user phone"}]]
        [:div.control-group
          [:label.control-label {:for "person-address"} "Address"]
          [:input {:id "person-address" :type "text" :placeholder "user address"}]]
        [:div.control-group
          [:label.control-label {:for "person-url"} "Social Network"]
          [:input {:id "person-url" :type "text" :placeholder "social network url"}]]
        [:div.usertext-buttons.control-group
          [:button.btn.btn-primary 
            {:id "submit" :type "button"   ; if type :submit, will trigger re-load
             :on-click #(put! comm [:create-thing (vector :parents)])
            } 
            "OK"]
          [:button.btn {:id "cancel" :type "button"} "Cancel"]]
      ]])))


; all the create new thing case
(defmethod main-content :create-thing
  [nav-path things search-filter opts]
  (.log js/console "main content submit create-thing " (pr-str nav-path))
  (things-list :parents things search-filter opts))

; all filtered things navigation or details things
(defmethod main-content :default
  [nav-path things search-filter opts]
  (.log js/console "main content thing listing " (pr-str nav-path))
  (let [nav-path-type (last (last nav-path))]
    (things-list nav-path-type things search-filter opts)))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; defaut main content is a list of things under nav ul
(defn things-list [nav-thing-type things search-filter opts]
  (let [thing-nodes   (get-in things [nav-thing-type :thing-nodes])
        re-filter     (when search-filter (js/RegExp. search-filter "ig"))
        ; if search filter exist, filter thing's :content
        filtered-things   
          (if re-filter
              (filter #(.match (:content %) re-filter) thing-nodes)
              thing-nodes)
        ; wrap each thing node into a thing-entry.
        thing-listing 
          (map #(let [author (get-in opts [:users (:author %)])]
                  (thing-entry (:current-user-email opts)
                               (:users opts)
                               (:settings opts)
                               author
                               %))
               filtered-things)
       ]
    ; wrap thing listing inside paginated div
    (list
      [:div.paginated-activities
        thing-listing
      ])))

; each thing entry is a thing div of float left right and content in middle.
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
                               plugins/vimeo-embed)))
    ]))


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


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
 

; chatbox, deprecated.
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
