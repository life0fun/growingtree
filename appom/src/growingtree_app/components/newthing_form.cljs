(ns growingtree-app.components.newthing-form
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [growingtree-app.datetime :as dt]
            [growingtree-app.plugins :as plugins]
            [growingtree-app.utils :as utils]
            [om.core :as om]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]])
  (:use-macros [dommy.macros :only [sel sel1]]))

; all newthing forms, by thing-type

(defmulti add-form 
  (fn [thing-type comm] thing-type))

(defmethod add-form :default
  [thing-type comm]
  (.log js/console "add-form " thing-type " defaults "))

; encapsulate view and submit fn together.
(defmethod add-form :parent
  [thing-type comm]
  (let [submit-fn 
          (fn [e]
            (let [title-el (sel1 :#person-title)
                  title-el (sel1 ".form-horizontal .person-title")
                  title (dommy/value title-el)
                  data {:title title}]
              (.log js/console "parent name " data)
              (put! comm [:create-thing [:create-thing data]])))]
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
            [:input {:id "person-lname" :type "text" :placeholder "user last name"}]]
          [:div.control-group
            [:label.control-label {:for "person-type"} "Type"]
            [:select {:id "person-type"}
              [:option {:value "M"} "Dad"]
              [:option {:value "F"} "Mom"]
              [:option {:value "T"} "Teacher"]]]
          [:div.control-group
            [:label.control-label {:for "person-email"} "Email"]
            [:input {:id "person-email" :type "text" :placeholder "user email"}]]
          [:div.control-group
            [:label.control-label {:for "person-phone"} "Phone"]
            [:input {:id "person-phone" :type "text" :placeholder "user phone"}]]
          [:div.control-group
            [:label.control-label {:for "person-address"} "Address"]
            [:input {:id "person-address" :type "text" :placeholder "user address"}]]
          [:div.control-group
            [:label.control-label {:for "person-url"} "Social Network"]
            [:input {:id "person-url" :type "text" :placeholder "social network url"}]]
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               ; :on-click #(put! comm [:create-thing (vector :create-thing :parents)])
               :on-click submit-fn
              } 
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))


; 
(defmethod add-form :course
  [thing-type comm]
  (let [submit-fn 
          (fn [e]
            (let [title-el (sel1 :#course-title)
                  title-el (sel1 ".form-horizontal .course-title")
                  title (dommy/value title-el)
                  data {:title title}]
              (.log js/console "course title " data)
              (put! comm [:create-thing [:create-thing data]])))]
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
            [:input {:id "course-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.control-label {:for "course-type"} "Type"]
            [:select {:id "course-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.control-label {:for "course-content"} "content"]
            [:input {:id "course-content" :type "text" :placeholder "brief content of the this course"}]]
          [:div.control-group
            [:label.control-label {:for "course-url"} "url"]
            [:input {:id "course-url" :type "text" :placeholder "growingtrees.com/courses"}]]
          [:div.control-group
            [:label.control-label {:for "course-email"} "group email"]
            [:input {:id "course-email" :type "text" :placeholder "course@group.growingtrees.com"}]]
          [:div.control-group
            [:label.control-label {:for "course-wiki"} "Wiki Page"]
            [:input {:id "course-wiki" :type "text" :placeholder "wiki of the course"}]]
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               ; :on-click #(put! comm [:create-thing (vector :create-thing :parents)])
               :on-click submit-fn
              } 
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))
