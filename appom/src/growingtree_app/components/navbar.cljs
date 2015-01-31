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
(defn- thing-nav 
  [comm login-user thing-listing]
  (let [type (:type thing-listing)
        user-name (:person/title login-user)
        login-id (:db/id login-user)
        options {:pid login-id}]
    [:li.protected 
      [:div.nav-channel
        [:a.show_channel
          {:key type
           :on-click #(put! comm (mock-data/all-things-msg-nav-path type {:pid login-id}))
           :class (str "js-" (name type) (when (:selected thing-listing) " active"))
          }
          (:title thing-listing)]  ; nav type title, course, parent, lecture, etc.
        (if (some #{type} mock-data/root-add-type)
          [:i.fa.fa-plus-square
            {:on-click #(put! comm (mock-data/newthing-form-msg-nav-path type options))}]
          [:i.fa.fa-square]
        )
        (when (:loading thing-listing)
          [:i.icon-spinner.icon-spin])
      ]]))


(defn- my-thing-nav 
  [comm login-user thing-listing]
  (let [thing-type (:type thing-listing)
        user-name (:person/title login-user)
        user-type (:person/type login-user)  ; use for [:child 1 :assignment]
        login-id (:db/id login-user)
        options {:pid login-id}]
    [:li.protected 
      [:div.nav-channel
        [:a.show_channel
          {:key type
           :on-click #(put! comm (mock-data/filter-things-msg-nav-path user-type login-id thing-type {:pid login-id}))
           :class (str "js-" (name thing-type) (when (:selected thing-listing) " active"))
          }
          (:title thing-listing)]  ; nav type title, my group, my enrollment, etc
        (if (some #{type} mock-data/root-add-type)
          [:i.fa.fa-plus-square
            {:on-click #(put! comm (mock-data/newthing-form-msg-nav-path thing-type options))}]
          [:i.fa.fa-square]
        )
        (when (:loading thing-listing)
          [:i.icon-spinner.icon-spin])
      ]]))

; called from core, where data is MapCursor to app state, with select-keys #{:things :channels :settings}
; navbar must take 2 args, cursor and and the backing Om component referred to as the owner. 
; owner is a data structure/store provided by om and you can store local state here, other than in global app state.
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
      (let [comm (get-in opts [:comms :controls])  ; comm chan is control
            settings (:settings state)
            login-user (utils/get-login-user state)
            search-box "search-box"
            search-box-div (sel1 (str "#" search-box))

            things (vals (:things state))
            my-things (vals (:my-things state))
           ]
        (html/html
          [:nav.nav {:class (when (get-in settings [:forms :search :focused]) "search-focus")}
            [:form.search {:action "/search" :method "get" :on-submit (constantly false)}
              [:input.query {:id search-box :name "query" :type "text"}]
              [:input.submit 
                {:value "Search" :type "submit"
                 :on-click (fn [_]
                              (let [search-key (dommy/value search-box-div)]  ; id with # prefix
                                  (put! comm (mock-data/search-msg-nav-path :all-things search-key))))
                }]
            ]
            ; :things contains a map of things {:course {:title ... :thing-nodes [{} {}]} :lecture {} ...}
            [:ul.nav-ul
              (map (partial thing-nav comm login-user) (sort-by :order things))
            ]
            ; my things
            [:ul.nav-ul.my-nav
              (map (partial my-thing-nav comm login-user) (sort-by :order my-things))
            ]
          ])))))
