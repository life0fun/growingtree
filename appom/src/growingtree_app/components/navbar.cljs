(ns growingtree-app.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [growingtree-app.routes :as routes]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

;
; navbar and navlist only contains top-level things.
; nav-types defined in mock_data.cljs
; does not include things like answer that must go under assignment filter.
;

; ul list of things for each nav-type, :course {:type :title :thing-node}
; initial-state :things = {:course {:type ... :title ... :thing-nodes [{}]} :lecture {:type ...}} 
(defn thing-nav [comm thing-listing]
  (let [type (:type thing-listing)
        nav-path {:body [:all-things [:all 0 type]]
                  :data {:author "rich-dad"}
                 }
       ]
    [:li.protected {:key type  ; 
                    :on-click #(put! comm [:all-things nav-path]) ; [:all-things [:all 0 :thing-type]]
                    :class (str (name type) (when (:selected thing-listing) " active"))}
      [:a.show_channel
        (:title thing-listing)  ; nav type title, course, parent, lecture, etc.
        (when (:loading thing-listing)
          [:i.icon-spinner.icon-spin])]]))


; called from core, where data is MapCursor to app state, with select-keys #{:things :channels :settings}
; navbar must take 2 args, cursor and and the backing Om component referred to as the owner. 
; f can take a third argument if :opts is specified in m from (om/build f cursor opts)
; (om/build navbar/navbar (select-keys app [:things :channels :settings]) {:opts {:comms (:comms opts)}})
(defn navbar
  [data owner opts] ; data is app state with 3 keys, :things, :channels, :settings
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Navbar"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])  ; comm chan is control
             settings (:settings data)
            ]
          [:nav.nav {:class (when (get-in settings [:forms :search :focused]) "search-focus")}
            [:form.search {:action "/search" :method "get" :on-submit (constantly false)}
            [:input.query {:name "query" :type "text"
                           :on-focus  #(put! comm [:search-form-focused])
                           :on-blur   #(put! comm [:search-form-blurred])
                           :on-key-up #(put! comm [:search-form-updated (.. % -target -value)])}]
            [:input.submit {:value "Search" :type "submit"}]]
          
          [:ul.nav-ul
            ; :things contains a map of things {:course {:title ... :thing-nodes [{} {}]} :lecture {} ...}
            (map (partial thing-nav comm) (sort-by :order (vals (:things data))))
            [:li {:key "new-tab"}
              [:a#newthing-form
                {:href "#"
                 :on-click
                  (let [newthing-data {:body [:child :add-parent] :data {}}
                        ;newthing-data {:body [:newthing-form [:course :add-course]] :data {:pid nil}}
                        newthing-data {:body [:newthing-form [:group :create-group]] :data {:pid nil}}
                       ]
                    #(put! comm [:newthing-form newthing-data]))
                }
                [:strong " + "]  ; text is defined in #create:after
            ]]]
          ])))))
