(ns growingtree-app.components.navbar
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [growingtree-app.routes :as routes]
            [growingtree-app.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))


; ul list of nav list.
(defn tab-thing [comm nav-thing]
  (print "nav tab " nav-thing)
  (let [id (:id nav-thing)]
    [:li.protected {:key (:id nav-thing)
                    :on-click #(put! comm [:tab-selected id])
                    :class (str (:id nav-thing) (when (:selected nav-thing) " active"))}
      [:a.show_channel
        {:on-click (comp (constantly false) #(put! comm [:tab-selected id]))}
        (:title nav-thing)
        (when (:loading nav-thing)
          [:i.icon-spinner.icon-spin])]]))


; navbar data cursor select-keys from app state.
(defn navbar [data owner opts]
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "Navbar"))
    om/IRender
    (render [this]
      (html/html
       (let [comm (get-in opts [:comms :controls])
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
           (map (partial tab-thing comm) (sort-by :order (:nav-list data)))
           [:li {:key "new-tab"
                 :on-click #(put! comm [:create-channel-menu-opened])}
            [:a#create_channel
             {:href "#"
              :on-click (comp (constantly false)
                              #(put! comm [:create-channel-menu-opened]))}
             [:strong " + "]]]]
          ])))))
