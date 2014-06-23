(ns growingtree-app.components.newthing-form
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.datetime :as dt]
            [growingtree-app.plugins :as plugins]
            [growingtree-app.utils :as utils]
            [om.core :as om]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]
            [cljs-time.core :as cljs-time])
  (:use-macros [dommy.macros :only [sel sel1]]))

; all newthing forms, by thing-type

(defmulti add-form 
  (fn [thing-type comm] thing-type))

(defmethod add-form 
  :default
  [thing-type comm]
  (.log js/console "add-form " (pr-str thing-type) " defaults "))

; encapsulate view and submit fn together.
(defmethod add-form 
  :add-parent
  [thing-type comm]
  (let [submit-fn 
          (fn [e]
            (let [input-fields {:person/title ".person-title"
                                :person/lname ".person-lname"
                                :person/type ".person-type"
                                :person/email ".person-email"
                                :person/phone ".person-phone"
                                :person/address ".person-address"
                                :person/url ".person-url"
                               }
                  data (reduce (fn [tot [k clz]]
                                   (assoc tot k (dommy/value (sel1 clz))))
                                {}
                                input-fields)
                  ; attach current user name as author
                  ]
              (.log js/console "add-parent form " (pr-str data))
              ; first is msg type, nav-path [:type :filter segment]
              (put! comm [:add-thing [:parent data]])))]       
    (list
      [:div.create-form
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Parent Details"]
          
          [:div.control-group
            [:label.control-label {:for "person-name"} "Name"]
            [:input {:id "person-title" :class "person-title" :type "text" :placeholder "user name"}]]
          [:div.control-group
            [:label.control-label {:for "person-lname"} "Last Name"]
            [:input {:id "person-lname" :class "person-lname" :type "text" :placeholder "user last name"}]]
          [:div.control-group
            [:label.control-label {:for "person-type"} "Type"]
            [:select {:id "person-type" :class "person-type"}
              [:option {:value "M"} "Dad"]
              [:option {:value "F"} "Mom"]
              [:option {:value "T"} "Teacher"]]]
          [:div.control-group
            [:label.control-label {:for "person-email"} "Email"]
            [:input {:id "person-email" :class "person-email" :type "text" :placeholder "user email"}]]
          [:div.control-group
            [:label.control-label {:for "person-phone"} "Phone"]
            [:input {:id "person-phone" :class "person-phone" :type "text" :placeholder "user phone"}]]
          [:div.control-group
            [:label.control-label {:for "person-address"} "Address"]
            [:input {:id "person-address" :class "person-address" :type "text" :placeholder "user address"}]]
          [:div.control-group
            [:label.control-label {:for "person-url"} "Social Network"]
            [:input {:id "person-url" :class "person-url" :type "text" :placeholder "social network url"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn}
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))

; add child form
(defmethod add-form 
  :add-child
  [thing-type comm]
  (let [submit-fn 
          (fn [e]
            (let [input-fields {:person/title ".person-title"
                                :person/lname ".person-lname"
                                :person/type ".person-type"
                                :person/email ".person-email"
                                :person/phone ".person-phone"
                                :person/address ".person-address"
                                :person/url ".person-url"
                               }
                  data (reduce (fn [tot [k clz]]
                                   (assoc tot k (dommy/value (sel1 clz))))
                                {}
                                input-fields)
                  ; attach current user name as author
                  ]
              (.log js/console "add-child form " (pr-str data))
              ; first is msg type, nav-path [:type :filter segment]
              (put! comm [:add-thing [:child data]])))]       
    (list
      [:div.create-form
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Child Details"]
          
          [:div.control-group
            [:label.control-label {:for "person-name"} "Name"]
            [:input {:id "person-title" :class "person-title" :type "text" :placeholder "user name"}]]
          [:div.control-group
            [:label.control-label {:for "person-lname"} "Last Name"]
            [:input {:id "person-lname" :class "person-lname" :type "text" :placeholder "user last name"}]]
          [:div.control-group
            [:label.control-label {:for "person-type"} "Type"]
            [:select {:id "person-type" :class "person-type"}
              [:option {:value "S"} "Son"]
              [:option {:value "D"} "Daughter"]
              [:option {:value "M"} "Dad"]
              [:option {:value "F"} "Mom"]
              [:option {:value "T"} "Teacher"]]]
          [:div.control-group
            [:label.control-label {:for "person-email"} "Email"]
            [:input {:id "person-email" :class "person-email" :type "text" :placeholder "user email"}]]
          [:div.control-group
            [:label.control-label {:for "person-phone"} "Phone"]
            [:input {:id "person-phone" :class "person-phone" :type "text" :placeholder "user phone"}]]
          [:div.control-group
            [:label.control-label {:for "person-address"} "Address"]
            [:input {:id "person-address" :class "person-address" :type "text" :placeholder "user address"}]]
          [:div.control-group
            [:label.control-label {:for "person-url"} "Social Network"]
            [:input {:id "person-url" :class "person-url" :type "text" :placeholder "social network url"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn}
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))


; add course collect data field from form.
(defmethod add-form 
  :add-course
  [thing-type comm]
  (let [submit-fn 
          (fn [e]
            (let [input-fields {:course/title ".course-title"
                                :course/content ".course-content"
                                :course/type ".course-type"
                                :course/author ".course-author"
                                :course/url ".course-url"
                                :course/email ".course-email"
                                :course/wiki ".course-wiki"
                               }
                  data (-> (reduce (fn [tot [k clz]]
                                     (assoc tot k (dommy/value (sel1 clz))))
                                   {}
                                   input-fields)
                            (assoc :author "rich-dad")
                            (utils/update-enum :course "type" false))
                  ]
              (.log js/console "add-course form " (pr-str data))
              ; first is msg type, last is nav-path filter segment.
              (put! comm [:add-thing [:course data]])))]
    (list
      [:div.create-form
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Course Details"]
          
          [:div.control-group
            [:label.control-label {:for "course-title"} "Title"]
            [:input {:id "course-title" :class "course-title" :type "text" :placeholder "the title of course ..."}]]
          [:div.control-group
            [:label.control-label {:for "course-author"} "Author"]
            [:input {:id "course-author" :class "course-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.control-label {:for "course-type"} "Type"]
            [:select {:id "course-type" :class "course-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.control-label {:for "course-content"} "content"]
            [:input {:id "course-content" :class "course-content" :type "text" :placeholder "brief content of the this course"}]]
          [:div.control-group
            [:label.control-label {:for "course-url"} "url"]
            [:input {:id "course-url" :class "course-url" :type "text" :placeholder "growingtrees.com/courses"}]]
          [:div.control-group
            [:label.control-label {:for "course-email"} "group email"]
            [:input {:id "course-email" :class "course-email" :type "text" :placeholder "course@group.growingtrees.com"}]]
          [:div.control-group
            [:label.control-label {:for "course-wiki"} "Wiki Page"]
            [:input {:id "course-wiki" :class "course-wiki" :type "text" :placeholder "wiki of the course"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn} 
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))


; add lecture form
(defmethod add-form 
  :add-lecture
  [thing-type comm]
  (let [submit-fn 
          (fn [e]
            (let [input-fields {:lecture/title ".lecture-title"
                                :lecture/content ".lecture-content"
                                :lecture/type ".lecture-type"
                                :lecture/author ".lecture-author"
                                :lecture/start "#lecture-start"
                                :lecture/end "#lecture-end"
                                :lecture/url ".lecture-url"
                                :lecture/wiki ".lecture-wiki"
                               }
                  data (-> (reduce (fn [tot [k clz]]
                                     (assoc tot k (dommy/value (sel1 clz))))
                                   {}
                                   input-fields)
                            (assoc :author "rich-dad")
                            (utils/update-enum :lecture "type" false)
                            (utils/update-time :lecture "start")
                            (utils/set-time :lecture "end"))
                  ]
              (.log js/console "add-lecture form " (pr-str data))
              ; first is msg type, last is nav-path filter segment.
              ; (put! comm [:add-thing [:lecture data]])
              ))]
    (list
      [:div.create-form
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Lecture Details"]
          
          [:div.control-group
            [:label.control-label {:for "lecture-title"} "Title"]
            [:input {:id "lecture-title" :class "lecture-title" :type "text" :placeholder "the title of lecture ..."}]]
          [:div.control-group
            [:label.control-label {:for "lecture-author"} "Author"]
            [:input {:id "lecture-author" :class "lecture-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.control-label {:for "lecture-type"} "Type"]
            [:select {:id "lecture-type" :class "lecture-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.control-label {:for "lecture-content"} "content"]
            [:input {:id "lecture-content" :class "lecture-content" :type "text" :placeholder "brief content of the this lecture"}]]

          ; http://jsfiddle.net/foo4u/HJHq8/light/
          [:div.control-group
            [:label.control-label {:for "lecture-start"} "start time"]
            [:div#lecture-start-picker.input-append
              [:input#lecture-start.input-xlarge {:type "datetime" :placeholder "start time" :data-format "hh:mm:ss MM/dd/yyyy"}]
              [:span.add-on [:a {:href "javascript:NewCal('lecture-start','mmddyyyy', 'true');"}
                              [:i {:data-time-icon "icon-time" :data-data-icon "icon-calendar"}]
                              [:img {:src "cal.gif" :width "16" :height "16"}]]]]
          ]

          [:div.control-group
            [:label.control-label {:for "lecture-end"} "end time"]
            [:div#lecture-end-picker.input-append
              [:input#lecture-end.input-xlarge {:type "datetime" :placeholder "end time" :data-format "hh:mm:ss MM/dd/yyyy"}]
              [:span.add-on [:a {:href "javascript:NewCal('lecture-end','mmddyyyy', 'true');"}
                              [:img {:src "cal.gif" :width "16" :height "16"}]]]]
          ]

          [:div.control-group
            [:label.control-label {:for "lecture-url"} "url"]
            [:input {:id "lecture-url" :class "lecture-url" :type "text" :placeholder "growingtrees.com/courses"}]]
          [:div.control-group
            [:label.control-label {:for "lecture-wiki"} "Wiki Page"]
            [:input {:id "lecture-wiki" :class "lecture-wiki" :type "text" :placeholder "wiki of the lecture"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn} 
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))
