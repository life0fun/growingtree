(ns growingtree-app.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.components.newthing-form :as newthing-form]
            [growingtree-app.components.entity-view :as entity-view]
            [growingtree-app.datetime :as dt]
            [growingtree-app.plugins :as plugins]
            [growingtree-app.utils :as utils]
            [om.core :as om]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]])
  (:use-macros [dommy.macros :only [sel sel1]]))


(declare thing-content)
(declare thing-entry)
(declare things-list)
(declare main-content)

(def delimiter-re #" ")


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; main-area get selected chan app state MapCursor to filter content for selected chan.
; nav-path is a map of :path, :qpath...path vector for each view in main panel.
(defn main-area [{:keys [nav-path nav-path-things channel search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_] "MainArea")
    om/IRender
    (render [this]
      (html/html
        (let [comm (get-in opts [:comms :controls])]
          (.log js/console "rendering main-area " (pr-str nav-path) " " (pr-str nav-path-things))
          [:article.main-area
            [:header.header
              [:a.nav-toggle.button.left 
                {:href "#" :on-click #(put! comm [:left-sidebar-toggled])} [:i.fa.fa-comments]]
              [:a.sidebar-toggle.button.right 
                {:href "#" :on-click #(put! comm [:right-sidebar-toggled])} [:i.fa.fa-bars]]
              [:a.logo {:href "#" :on-click (constantly false)}
                [:img {:src "logo_app.png" :height "35" :title "growingtree-app"}]]]
            [:div.container
              [:div#content
                (main-content nav-path nav-path-things search-filter opts)
              ;(chatbox comm opts)
              ]]
        ])))))

; display main content after nav-path updated. latest ele in nav-path vector.
; nav-path ele is map {:path [...] qpath []}
(defmulti main-content 
  (fn [nav-path things search-filter opts]
    (first (:path nav-path))))

; request to display newthing form for adding things.
(defmethod main-content 
  :newthing-form
  [nav-path things search-filter opts]
  (.log js/console "main content newthing-form form " (pr-str nav-path))
  (let [comm (get-in opts [:comms :controls])
        thing-type (last (:path nav-path))]
    (newthing-form/add-form thing-type comm)))

; all the create new thing case
(defmethod main-content :create-thing
  [nav-path things search-filter opts]
  (.log js/console "main content submit create-thing " (pr-str nav-path))
  (things-list :parent things search-filter opts))

; all filtered things navigation or details things
(defmethod main-content :default
  [nav-path things search-filter opts]
  (.log js/console "main content default thing listing " (pr-str nav-path))
  (let [thing-type (last (:path nav-path))]
    (things-list thing-type things search-filter opts)))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; defaut main content is a list of things under nav ul
(defn things-list [thing-type things search-filter opts]
  (let [;thing-nodes   (get-in things [thing-type :thing-nodes])
        things-vec   things
        re-filter     (when search-filter (js/RegExp. search-filter "ig"))
        ; if search filter exist, filter thing's :content
        filtered-things   
          (if re-filter
              (filter #(.match (:content %) re-filter) things-vec)
              things-vec)
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
    (list [:div.paginated-activities
            thing-listing ])
    ))

; each thing entry is a thing div of float left right and content in middle.
; each thing entry {:person/lname "rich", :db/id 17592186045419, :person/title "rich-dad" :person/type :parent ...}
; (defn thing-entry [current-user-email users settings author thing-data]
;   (.log js/console "thing-entry " (pr-str thing-data) (pr-str (utils/thing-ident thing)))
;   (list
;     [:div.thing {:id (str "thing-" (:db/id thing))
;                  :class (when (= current-user-email (:email author)) "current_user")
;                  :key (:created_at thing)}
;       [:span.posted_at (str (dt/time-ago (:created_at thing)) " ago")]
;       (utils/gravatar-for (:email author))
;       [:div.readable
;         [:span.user (or (:full-name author) (:email author))]
;         [:span.content (thing-content current-user-email users settings author thing)]
;       ]
;       (map (fn [media]
;              [:div.media-entry media])
;           (remove string? (-> (string/split (:content thing) delimiter-re)
;                                plugins/image-embed
;                                plugins/youtube-embed
;                                plugins/vimeo-embed)))
;     ]))

(defn thing-entry 
  [current-user-email users settings author thing-data]
  (.log js/console "thing-entry " (pr-str thing-data) (pr-str (utils/thing-ident thing-data)))
  (let [thing-type (utils/thing-ident thing-data)]
    (entity-view/thing-entry thing-type thing-data)))

; thing div, thing-content is in mid, and float:left, float:right.
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
