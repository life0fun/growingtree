(ns growingtree-app.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [dommy.core :as dommy]
            [sablono.core :as html :refer-macros [html]]
            [growingtree-app.routes :as routes]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.utils :as utils])
  (:use-macros [dommy.macros :only [node sel sel1]]))

;
; navbar and navlist only contains top-level things.
; nav-types defined in mock_data.cljs
; does not include things like answer that must go under assignment filter.
;

; ul list of things for each nav-type, :course {:type :title :thing-node}
; initial-state :things = {:course {:type ... :title ... :thing-nodes [{}]} :lecture {:type ...}} 
(defn thing-nav 
  [comm login-user thing-listing]
  (let [type (:type thing-listing)
        user-name (:person/title login-user)]
    [:li.protected 
      [:div.nav-channel
        [:a.show_channel
          {:key type
           :on-click #(put! comm (mock-data/all-things-msg-nav-path type {:author user-name}))
           :class (str "js-" (name type) (when (:selected thing-listing) " active"))
          }
          (:title thing-listing)]  ; nav type title, course, parent, lecture, etc.
        (if (some #{type} mock-data/root-add-type)
          [:i.fa.fa-plus-square
            {:on-click #(put! comm (mock-data/newthing-form-msg-nav-path type))}]
          [:i.fa.fa-square]
        )
        (when (:loading thing-listing)
          [:i.icon-spinner.icon-spin])
      ]]))


; called from core, where data is MapCursor to app state, with select-keys #{:things :channels :settings}
; navbar must take 2 args, cursor and and the backing Om component referred to as the owner. 
; f can take a third argument if :opts is specified in m from (om/build f cursor opts)
; (om/build navbar/navbar (select-keys app [:things :channels :settings]) {:opts {:comms (:comms opts)}})
(defn navbar
  [state owner opts] ; state is app state with 3 keys, :things, :channels, :settings
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Navbar"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])  ; comm chan is control
             settings (:settings state)
             login-user (utils/get-login-user state)
             search-box "search-box"
            ]
          [:nav.nav {:class (when (get-in settings [:forms :search :focused]) "search-focus")}
            [:form.search {:action "/search" :method "get" :on-submit (constantly false)}
            [:input.query {:id search-box :name "query" :type "text"
                           ; :on-focus  #(put! comm [:search-form-focused])
                           ; :on-blur   #(put! comm [:search-form-blurred])
                           ; :on-key-up #(put! comm [:search-form-updated (.. % -target -value)])
                          }]
            [:input.submit {:value "Search" :type "submit"
                            :on-click
                              (fn [_]
                                (let [search (dommy/value (sel1 (str "#" search-box)))]  ; id with # prefix
                                  (put! comm (mock-data/search-msg-nav-path :all-things search))))
                           }]
          ]

          [:ul.nav-ul
            ; :things contains a map of things {:course {:title ... :thing-nodes [{} {}]} :lecture {} ...}
            (map (partial thing-nav comm login-user) (sort-by :order (vals (:things state))))
          ]])))))
