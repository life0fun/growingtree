(ns growingtree-app.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [growingtree-app.routes :as routes]
            [growingtree-app.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))


; ul list of things for each nav-type, :course {:type :title :thing-node}
(defn thing-nav [comm thing-listing]
  (let [type (:type thing-listing)]
    ;(.log js/console "thing-nav type " (pr-str type) " title " (:title thing-listing))
    [:li.protected {:key type  ; 
                    :on-click #(put! comm [:tab-selected (vector :all 0 type)]) ; [:all 0 :thing-tyep]
                    :class (str type (when (:selected thing-listing) " active"))}
      [:a.show_channel
        (:title thing-listing)  ; nav type title, course, parent, lecture, etc.
        (when (:loading thing-listing)
          [:i.icon-spinner.icon-spin])]]))


; data as MapCursor to app state by select-keys app [:things :channels :settings]
(defn navbar [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Navbar"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])  ; comm chan is control
             settings (:settings data)]
          [:nav.nav {:class (when (get-in settings [:forms :search :focused]) "search-focus")}
            [:form.search
              {:action "/search"
               :method "get"
               :on-submit (constantly false)}
            [:input.query {:name "query"
                           :type "text"
                           :on-focus  #(put! comm [:search-form-focused])
                           :on-blur   #(put! comm [:search-form-blurred])
                           :on-key-up #(put! comm [:search-form-updated (.. % -target -value)])}]
            [:input.submit {:value "Search"
                           :type "submit"}]]
          
          [:ul.nav-ul
            ; (map (partial tab comm) (sort-by :order (vals (:channels data))))
            (map (partial thing-nav comm) (sort-by :order (vals (:things data))))
            [:li {:key "new-tab"}
              [:a#create-thing
                {:href "#"
                 :on-click #(put! comm [:add-thing (vector :add-thing :parent)]) ; chg to :course
                }
                [:strong " + "]  ; text is defined in #create:after
            ]]]
          ])))))
