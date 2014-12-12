(ns growingtree-app.components.main-area
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.routes :as routes]
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
(declare list-things)
(declare main-content)
(declare add-thing-forms)
(declare main-html)

(def delimiter-re #" ")


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; main-area get selected chan app state MapCursor to filter content for selected chan.
; main-area contains top and body section.
(defn main-area 
  [{:keys [app nav-path channel search-filter]} owner opts]
  (reify
    om/IDisplayName
    (display-name [_] "MainArea")
    ; render impl.
    om/IRender
    (render [this]
      (main-html app nav-path search-filter opts)
      )))


; render html for main area
(defn main-html
  [app nav-path search-filter opts]
  (html/html
    (let [comm (get-in opts [:comms :controls])]
      [:article.main-area
        [:header.header
          [:a.nav-toggle.button.left 
            {:on-click #(put! comm [:left-sidebar-toggled])} [:i.fa.fa-comments]]
          [:a.sidebar-toggle.button.right 
            {:on-click #(put! comm [:right-sidebar-toggled])} [:i.fa.fa-bars]]
          [:a.logo {:on-click (constantly false)}
            [:img {:src "logo_thumb.png" :height "35" :title "growingtree-app"}]]]
        [:div#content
            (main-content app nav-path search-filter opts)
          ;(chatbox comm opts)
        ]
      ]
    )))

; display main content after nav-path updated. 
; For Filter things nav-path :body slot has nav-path vector for filtered things.
; {:body [:all-things [:all 0 :question]]} data {:body [:all-things [:all 0 :question]]}
; {:body [:filter-things [:course 1 :lecture]], :data {:pid 1}} 
; for add-thing, do nothing, wait until add-thing result, and process there.
; nav-path {:add-thing :lecture :details {}}
; for search, {:body [:search-things [:all-things 0 "math"]]
(defmulti main-content 
  (fn [app nav-path search-filter opts]
    (cond
      (:body nav-path) (first (:body nav-path))  ; {:body [:all-things [:all 0 :x]]}
      :else :default)))

; main content shall display query result filtered thing list.
; default case is when nav-path does not have query filter in :body slot. do nothing.
(defmethod main-content 
  :default
  [app nav-path search-filter opts]
  (.log js/console  (pr-str "main content default: [:body nav-path] null " nav-path))
  )

; for all-things, including {:body [:all-things [:all 0 :timeline]]
; {:body [:all-things [:all 0 :lecture]], :data {:pid login-id}} 
(defmethod main-content 
  :all-things
  [app nav-path search-filter opts]
  (let [thing-type (mock-data/get-nav-path-nxt-thing-type nav-path)]
    (list-things app thing-type nav-path search-filter opts))
  )

; show filter things, entered from thing-nav-actionkey. click handler set pid so we show clicked
; thing on top section, and filtered things in content section.
; we toggle nav key inside top thing based on which nav key is clicked.
; :filter-things {:body [:filter-things [:course 1 :lecture]], :data {:pid 1}}
; url "v1/course/17592186045421/lecture"
(defmethod main-content 
  :filter-things
  [app nav-path search-filter opts]
  (let [comm (get-in app [:comms :controls])
        thing-type (mock-data/get-nav-path-nxt-thing-type nav-path) ; newthing type is last last
        pid (get-in nav-path [:data :pid])
        top-url (as-> (routes/window-location) url 
                     (string/split url #"/") 
                     (drop-last url)
                     (string/join "/" url))
        top-eid (or pid (second (string/split top-url #"/")))
        ; top-entity ref app state :top section, set at filter-things-onclick
        top-entity (get-in app [:url-data top-eid])

        add-thing (keyword (str "add-" (name thing-type)))
        join-thing (keyword (str "join-" (name thing-type)))
        override (cond-> {}
                  pid (merge (entity-view/actionkey-class pid thing-type "hide"))
                  pid (merge (entity-view/actionkey-class pid add-thing " "))
                  pid (merge (entity-view/actionkey-class pid join-thing " ")))
        opts (assoc opts :author pid :login-user (utils/get-login-user app))
       ]
    (.log js/console (pr-str "filter things " nav-path top-url top-entity))
    [:div
      ; show clicked thing entry on top section. top thing data set in filter-things-onclick.
      (when top-entity (thing-entry app top-entity override))
      (when top-entity [:hr.filter-line {:size 4}])
      (add-thing-forms app nav-path search-filter opts)
      ; datomic peer query to get list of things by nav-path
      (list-things app thing-type nav-path search-filter opts)
    ]))

; for search, {:body [:search-things [:all-things 0 "math"]]
(defmethod main-content 
  :search-things
  [app nav-path search-filter opts]
  (let [thing-type (mock-data/get-nav-path-nxt-thing-type nav-path)]
    (list-things app :search nav-path search-filter opts))
  )

; request to display newthing form to add thing.
; {:body [:newthing-form [:parent :add-child]], :data {:pid 17592186045419} }
; if we have :data, need to show title thing, :db/id 17592186045419.
(defmethod main-content 
  :newthing-form
  [app nav-path search-filter]
  (let [comm (get-in app [:comms :controls])
        thing-type (get-in nav-path [:body 1 1]) ; newthing type is last last
        login-id (get-in nav-path [:data :pid])
        ; override (if pid (entity-view/actionkey-class pid thing-type "hide") {})
        opts {:author login-id :login-user (utils/get-login-user app)}
       ]
    (.log js/console (pr-str "newthing-form " nav-path opts))
    [:div
      (when login-id [:hr {:size 4}])
      (newthing-form/add-form thing-type comm nav-path opts)
    ]))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; main content listing things render things from app state :body slot, 
; api-event :api-data set app state :body slot.
; opts is init state map, (:settings opts)
(defn list-things 
  [app thing-type nav-path search-filter opts]
  (.log js/console (pr-str "main content listing things  " thing-type " nav-path " nav-path))
  (let [comm (get-in opts [:comms :controls])
        ; things-vec is cursor to global state [:body] slot, set by api-event :api-data
        things-vec (get-in app [:body])  ; get thing-vec from state :body slot
        re-filter  (when search-filter (js/RegExp. search-filter "ig"))
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

; list each entry of thing with data, get view based on thing-type.
(defn thing-entry
  [app thing-data override]
  (let [thing-type (utils/thing-ident thing-data)]
    (entity-view/thing-entry app thing-type thing-data override)))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; hide all add thing form, lecture form, new child form.
; toggle hide upon add-lecture click
(defn add-thing-forms
  [app nav-path search-filter opts]
  (let [comm (get-in app [:comms :controls])]
    ; I have to set hide explicitly
    (when (sel1 :.add-child-form)
      (dommy/add-class! (sel1 :.add-child-form) "hide"))
    (when (sel1 :.add-lecture-form)
      (dommy/add-class! (sel1 :.add-lecture-form) "hide"))
    (when (sel1 :.add-question-form)
      (dommy/add-class! (sel1 :.add-question-form) "hide"))
    [:div.forms
      (newthing-form/add-form :add-child comm nav-path opts)
      (newthing-form/add-form :add-lecture comm nav-path opts)
      (newthing-form/add-form :add-question comm nav-path opts)
    ]))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; chatbox, deprecated.
(defn chatbox 
  [comm opts]
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
