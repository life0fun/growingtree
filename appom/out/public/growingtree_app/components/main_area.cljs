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


(declare thing-entry)
(declare things-list)
(declare main-content)

(def delimiter-re #" ")


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; main-area get selected chan app state MapCursor to filter content for selected chan.
; nav-path is a map of :path, :qpath...path vector for each view in main panel.
; nav-path-things are cursor to global state.
(defn main-area 
  [{:keys [app nav-path nav-path-things channel search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_] "MainArea")
    om/IRender
    (render [this]
      (html/html
        (let [comm (get-in opts [:comms :controls])]
          (.log js/console "rendering main-area " (pr-str nav-path))
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
                (main-content app nav-path nav-path-things search-filter opts)
              ;(chatbox comm opts)
              ]]
        ])))))

; display main content after nav-path updated. latest ele in nav-path vector.
; nav-path ele is map {:path [...] :qpath [] :data {}}
; nav-path shall contains keys into global state to render all comps in main area.
(defmulti main-content 
  (fn [app nav-path nav-path-things search-filter opts]
    (first (:path nav-path))))


; request to display newthing form to add thing.
; {:path [:newthing-form :child], :data {:parent 17592186045419}} 
; if we have :data, need to show thing in header, :db/id 17592186045419.
(defmethod main-content 
  :newthing-form
  [app nav-path nav-path-things search-filter opts]
  (let [comm (get-in opts [:comms :controls])
        thing-type (last (:path nav-path))
        header (get-in app [:header])
       ]
    [:div
      (thing-entry app opts header)
      [:hr {:size 4}]
      (newthing-form/add-form thing-type comm)
    ]))

; all the add new thing case
(defmethod main-content 
  :add-thing
  [app nav-path nav-path-things search-filter opts]
  (.log js/console "main content submit add-thing " (pr-str nav-path))
  (things-list :parent search-filter opts))

; all filtered things navigation or details things
(defmethod main-content 
  :default
  [app nav-path nav-path-things search-filter opts]
  (.log js/console "main content default thing listing " (pr-str nav-path))
  (let [thing-type (last (:path nav-path))]
    (things-list app thing-type nav-path nav-path-things search-filter opts)))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; defaut main content is a list of things under nav ul
; opts is init state map, (:settings opts)
; nav-path-things is cursor in global state, can not see it outside render.
(defn things-list 
  [app thing-type nav-path nav-path-things search-filter opts]
  (.log js/console "thing-list " (pr-str nav-path) (pr-str ((:path nav-path) nav-path-things)))
  (let [;thing-nodes   (get-in things [thing-type :thing-nodes])
        comm (get-in opts [:comms :controls])
        ; things-vec is a cursor to global state nav-path-things
        things-vec (get nav-path-things (:path nav-path))
        re-filter     (when search-filter (js/RegExp. search-filter "ig"))
        ; if search filter exist, filter thing's :content
        filtered-things
          (if re-filter
              (filter #(.match (:content %) re-filter) things-vec)
              things-vec)
        ;wrap each thing node into a thing-entry.
        things 
          (map #(let [author (get-in opts [:users (:author %)])]
                  (thing-entry app opts %))
               filtered-things)
       ]
    ; wrap thing listing inside paginated div
    (list [:div.paginated-activities
            things ])
    ))

; get view for each thing entry
(defn thing-entry
  [app opts thing-data]
  (let [thing-type (utils/thing-ident thing-data)]
    (entity-view/thing-entry app thing-type thing-data opts)))


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
