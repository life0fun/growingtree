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
; nav-path {:title :title, :body [:filter-things [:course 1 :lecture]]
; nav-path [:question {:question/url ...}]
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
          (.log js/console "rendering main-area : nav-path " (pr-str nav-path))
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
; nav-path {:title [...] :body [:newthing-form [:course :add-lecture]] :data {}}
; nav-path {:add-thing :lecture :details {}}
(defmulti main-content 
  (fn [app nav-path nav-path-things search-filter opts]
    (cond
      (:body nav-path) (first (:body nav-path))
      (:add-thing nav-path) :refresh
      :else :default)))


; all filtered things navigation or details things
; {:body [:all-things [:all 0 :question]]} data {:body [:all-things [:all 0 :question]]}
(defmethod main-content 
  :refresh
  [app nav-path nav-path-things search-filter opts]
  (.log js/console "main content refresh " (pr-str nav-path))
  (let [thing-type (get nav-path :add-thing)
        nav-path {:body [:all-things [:all 0 thing-type]]}]
    (things-list app thing-type nav-path nav-path-things search-filter opts)
    ))

; all filtered things navigation or details things
; {:body [:all-things [:all 0 :course]
(defmethod main-content 
  :default
  [app nav-path nav-path-things search-filter opts]
  (.log js/console "main content default thing listing " (pr-str nav-path))
  (let [thing-type (get-in nav-path [:body 1 2])]
    (things-list app thing-type nav-path nav-path-things search-filter opts)))


; request to display filtered-thing.
; :filter-things {:title :title, :body [:filter-things [:course 1 :lecture]], :data {:pid 1}} 
; {:body [:newthing-form [:parent :add-child]], :data {:pid 17592186045419} }
; if we have :data, need to show title thing, :db/id 17592186045419.
(defmethod main-content 
  :filter-things
  [app nav-path nav-path-things search-filter opts]
  (let [comm (get-in app [:comms :controls])
        thing-type (get-in nav-path [:body 1 2]) ; newthing type is last last
        add-thing (keyword (str "add-" (name thing-type)))
        title (get-in app [:title])
        pid (get-in nav-path [:data :pid])
        override (cond-> {}
                  pid (merge (entity-view/actionkey-class pid thing-type "hide"))
                  pid (merge (entity-view/actionkey-class pid add-thing " ")))
       ]
    (.log js/console "main-content filter-things " (pr-str pid thing-type override))
    [:div
      (when pid (thing-entry app title override))
      (when pid [:hr {:size 4}])
      (things-list app thing-type nav-path nav-path-things search-filter opts)
    ]))

; request to display newthing form to add thing.
; {:body [:newthing-form [:parent :add-child]], :data {:pid 17592186045419} }
; if we have :data, need to show title thing, :db/id 17592186045419.
(defmethod main-content 
  :newthing-form
  [app nav-path nav-path-things search-filter]
  (let [comm (get-in app [:comms :controls])
        thing-type (get-in nav-path [:body 1 1]) ; newthing type is last last
        title (get-in app [:title])
        pid (get-in nav-path [:data :pid])
        override (if pid (entity-view/actionkey-class pid thing-type "hide") {})
       ]
    (.log js/console "newthing-form " pid (pr-str thing-type override))
    [:div
      (when pid (thing-entry app title override))
      (when pid [:hr {:size 4}])
      (newthing-form/add-form thing-type comm nav-path)
    ]))

; ; all the add new thing case
; (defmethod main-content 
;   :add-thing
;   [app nav-path nav-path-things search-filter opts]
;   (.log js/console "main content submit add-thing " (pr-str nav-path))
;   (things-list app :parent search-filter opts))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; defaut main content is a list of things under nav ul
; opts is init state map, (:settings opts)
; nav-path-things is cursor in global state, can not see it outside render.
(defn things-list 
  [app thing-type nav-path nav-path-things search-filter opts]
  (let [;thing-nodes   (get-in things [thing-type :thing-nodes])
        comm (get-in opts [:comms :controls])
        ; things-vec is a cursor to global state nav-path-things
        things-vec (get nav-path-things (get-in nav-path [:body 1]))
        re-filter     (when search-filter (js/RegExp. search-filter "ig"))
        ; if search filter exist, filter thing's :content
        filtered-things
          (if re-filter
              (filter #(.match (:content %) re-filter) things-vec)
              things-vec)
        ;wrap each thing node into a thing-entry.
        things 
          (map #(let [author (get-in opts [:users (:author %)])]
                  (thing-entry app % {}))
               filtered-things)
       ]
    ; wrap thing listing inside paginated div
    (list [:div.paginated-activities
            things ])
    ))

; get view for each thing entry
(defn thing-entry
  [app thing-data override]
  (let [thing-type (utils/thing-ident thing-data)]
    (entity-view/thing-entry app thing-type thing-data override)))


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
