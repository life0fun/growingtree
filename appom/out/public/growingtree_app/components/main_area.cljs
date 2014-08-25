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
            {:href "#" :on-click #(put! comm [:left-sidebar-toggled])} [:i.fa.fa-comments]]
          [:a.sidebar-toggle.button.right 
            {:href "#" :on-click #(put! comm [:right-sidebar-toggled])} [:i.fa.fa-bars]]
          [:a.logo {:href "#" :on-click (constantly false)}
            [:img {:src "logo_app.png" :height "35" :title "growingtree-app"}]]]
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
(defmulti main-content 
  (fn [app nav-path search-filter opts]
    (cond
      (:body nav-path) (first (:body nav-path))
      ; (:peer-result nav-path) :refresh 
      ; (:add-thing nav-path) :refresh
      :else :default)))

; main content shall display query result filtered thing list.
; default case is when nav-path does not have query filter in :body slot. do nothing.
(defmethod main-content 
  :default
  [app nav-path search-filter opts]
  (.log js/console  (pr-str "main content nav-path body slot no query filter. do nothing " nav-path))
  )


; for all-things.
; {:body [:all-things [:all 0 :lecture]], :data {:author "rich-dad"}} 
(defmethod main-content 
  :all-things
  [app nav-path search-filter opts]
  (.log js/console  (pr-str "main content nav-path body :all-things " nav-path))
  (let [thing-type (get-in nav-path [:body 1 2])]
    (things-list app thing-type nav-path search-filter opts))
  )

; show filter things, entered from thing-nav-actionkey. click handler set pid so we show clicked
; thing on top section, and filtered things in content section.
; we toggle nav key inside top thing based on which nav key is clicked.
; :filter-things {:body [:filter-things [:course 1 :lecture]], :data {:pid 1}} 
(defmethod main-content 
  :filter-things
  [app nav-path search-filter opts]
  (let [comm (get-in app [:comms :controls])
        thing-type (get-in nav-path [:body 1 2]) ; newthing type is last last
        add-thing (keyword (str "add-" (name thing-type)))
        join-thing (keyword (str "join-" (name thing-type)))
        topview (get-in app [:top])  ; topview get from :top slot
        pid (get-in nav-path [:data :pid])
        override (cond-> {}
                  pid (merge (entity-view/actionkey-class pid thing-type "hide"))
                  pid (merge (entity-view/actionkey-class pid add-thing " "))
                  pid (merge (entity-view/actionkey-class pid join-thing " ")))
       ]
    (.log js/console "main-content filter-things " (pr-str pid thing-type override))
    [:div
      (when pid (thing-entry app topview override))
      (when pid [:hr {:size 4}])
      (add-thing-forms app nav-path search-filter opts)
      ; datomic peer query to get things-list by nav-path
      (things-list app thing-type nav-path search-filter opts)
    ]))

; request to display newthing form to add thing.
; {:body [:newthing-form [:parent :add-child]], :data {:pid 17592186045419} }
; if we have :data, need to show title thing, :db/id 17592186045419.
(defmethod main-content 
  :newthing-form
  [app nav-path search-filter]
  (let [comm (get-in app [:comms :controls])
        thing-type (get-in nav-path [:body 1 1]) ; newthing type is last last
        title (get-in app [:title])
        pid (get-in nav-path [:data :pid])
        override (if pid (entity-view/actionkey-class pid thing-type "hide") {})
       ]
    (.log js/console "main-content newthing-form with pid " pid (pr-str thing-type override))
    [:div
      (when pid (thing-entry app title override))
      (when pid [:hr {:size 4}])
      (newthing-form/add-form thing-type comm nav-path)
    ]))

; after adding new thing, refresh the last nav-path.
; we are in render state, so last nav path is a cursor to state. when core go thread processing
; nav path cursor, it needs to de-ref.
; {:body [:all-things [:all 0 :question]]} data {:body [:all-things [:all 0 :question]]}
(defmethod main-content 
  :refresh
  [app nav-path search-filter opts]
  (let [comm (get-in app [:comms :controls])
        last-nav-path (last (drop-last (get-in app [:nav-path])))
        msg-type (get-in last-nav-path [:body 0])
        thing-type (get nav-path :add-thing)
        ; nav-path {:body [:all-things [:all 0 thing-type]]}
        error (get-in (get-in app [:error]) [:error :status-text])
        error (get-in app [:error])
       ]
    (.log js/console (pr-str "main content add-thing trigger refresh " last-nav-path nav-path))
    (if-not error
      ; (things-list app thing-type last-nav-path search-filter opts)
      (main-content app last-nav-path search-filter opts)
      (do 
        (.log js/console (pr-str "add-thing error " msg-type last-nav-path error))
        (put! comm [:refresh last-nav-path])  ; re-dicrect by append last-nav-path to nav-path.
        ))
    ))

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; defaut main content is a list of things under nav ul
; opts is init state map, (:settings opts)
; :center key contains things-vec for displaying in center section.
(defn things-list 
  [app thing-type nav-path search-filter opts]
  (let [comm (get-in opts [:comms :controls])
        ; things-vec is cursor to global state [:body]
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
    (.log js/console (pr-str "things-lists type = " thing-type " nav-path = " nav-path))
    (list [:div.paginated-activities
            things ])
    ))

; get view for each thing entry based on thing-type.
(defn thing-entry
  [app thing-data override]
  (.log js/console (pr-str "thing-entry thing-data " thing-data))
  (let [thing-type (utils/thing-ident thing-data)]
    (entity-view/thing-entry app thing-type thing-data override)))


; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; hide all add thing form, lecture form, new child form.
; toggle hide upon add-lecture click
(defn add-thing-forms
  [app nav-path search-filter opts]
  (let [comm (get-in app [:comms :controls])
        thing-type (get-in nav-path [:body 1 2]) ; newthing type is last last
        topview (get-in app [:top])  ; topview get from :top slot
        pid (get-in nav-path [:data :pid])
       ]
    ; I have to set hide explicitly
    (when (sel1 :.add-child-form)
      (dommy/add-class! (sel1 :.add-child-form) "hide"))
    (when (sel1 :.add-lecture-form)
      (dommy/add-class! (sel1 :.add-lecture-form) "hide"))
    (when (sel1 :.add-question-form)
      (dommy/add-class! (sel1 :.add-question-form) "hide"))
    [:div.forms
      (newthing-form/add-form :add-child comm nav-path)
      (newthing-form/add-form :add-lecture comm nav-path)
      (newthing-form/add-form :add-question comm nav-path)
    ]))

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
