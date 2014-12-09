(ns growingtree-app.components.newthing-form
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [dommy.core :as dommy]
            [om.core :as om]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]
            [cljs-time.core :as cljs-time]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.datetime :as dt]
            [growingtree-app.plugins :as plugins]
            [growingtree-app.utils :as utils])
  (:use-macros [dommy.macros :only [sel sel1]]))

; all newthing forms, by thing-type

; last-nav-path the cursor to last segment of global nav-path. passed in main_area, 
; {:body [:newthing-form [:parent :add-child]], :data {:pid 17592186045419} }
(defmulti add-form 
  (fn [thing-type comm last-nav-path options] 
    thing-type))

(defmethod add-form 
  :default
  [thing-type comm last-nav-path options]
  (.log js/console "add-form " (pr-str thing-type) " defaults "))


; encapsulate view and submit fn together.
(defmethod add-form 
  :add-parent
  [thing-type comm last-nav-path options]
  (let [child-id (get-in last-nav-path [:data :pid])
        submit-fn 
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
                                {:family/child child-id}
                                input-fields)
                  ; attach current user name as author
                  ]
              (.log js/console (pr-str "add-parent form " data))
              ; first is msg type, nav-path [:type :filter segment]
              (put! comm (mock-data/add-thing-msg-nav-path :parent data))))]
    (list
      [:div.add-parent-form  ; hide first.
        [:form.form-horizontal
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Parent Details"]
          
          [:div.control-group
            [:label.label {:for "person-name"} "Name"]
            [:input.field {:id "person-title" :class "person-title" :type "text" :placeholder "user name"}]]
          [:div.control-group
            [:label.label {:for "person-lname"} "Last Name"]
            [:input.field {:id "person-lname" :class "person-lname" :type "text" :placeholder "user last name"}]]
          [:div.control-group
            [:label.label {:for "person-type"} "Type"]
            [:select {:id "person-type" :class "person-type"}
              [:option {:value "M"} "Dad"]
              [:option {:value "F"} "Mom"]
              [:option {:value "T"} "Teacher"]]]
          [:div.control-group
            [:label.label {:for "person-email"} "Email"]
            [:input.field {:id "person-email" :class "person-email" :type "text" :placeholder "user email"}]]
          [:div.control-group
            [:label.label {:for "person-phone"} "Phone"]
            [:input.field {:id "person-phone" :class "person-phone" :type "text" :placeholder "user phone"}]]
          [:div.control-group
            [:label.label {:for "person-address"} "Address"]
            [:input.field {:id "person-address" :class "person-address" :type "text" :placeholder "user address"}]]
          [:div.control-group
            [:label.label {:for "person-url"} "Social Network"]
            [:input.field {:id "person-url" :class "person-url" :type "text" :placeholder "social network url"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn}
              "OK"]
            [:button.btn 
              {:id "cancel" :type "button"
               :on-click #(put! comm (mock-data/all-things-msg-nav-path :parent {}))
              } 
            "Cancel"]]
        ]])))

; add child form can only be launched from parent list
; :newthing-form {:title :title, :body [:newthing-form [:parent :add-child]], :data {:pid 1}} 
(defmethod add-form 
  :add-child
  [thing-type comm last-nav-path options]
  (let [parent-id (get-in last-nav-path [:data :pid])
        submit-fn 
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
                                {:family/parent parent-id}
                                input-fields)
                  ; attach current user name as author
                  ]
              (.log js/console (pr-str "add-child form " data))
              ; first is msg type, nav-path [:type :filter segment]
              (put! comm (mock-data/add-thing-msg-nav-path :child data))))]
    (list
      [:div.add-child-form.hide  ; hide first.
        [:form.form-horizontal
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Child Details"]
          
          [:div.control-group
            [:label.label {:for "person-name"} "Name"]
            [:input.field {:id "person-title" :class "person-title" :type "text" :placeholder "user name"}]]
          [:div.control-group
            [:label.label {:for "person-lname"} "Last Name"]
            [:input.field {:id "person-lname" :class "person-lname" :type "text" :placeholder "user last name"}]]
          [:div.control-group
            [:label.label {:for "person-type"} "Type"]
            [:select {:id "person-type" :class "person-type"}
              [:option {:value "S"} "Son"]
              [:option {:value "D"} "Daughter"]
              [:option {:value "M"} "Dad"]
              [:option {:value "F"} "Mom"]
              [:option {:value "T"} "Teacher"]]]
          [:div.control-group
            [:label.label {:for "person-email"} "Email"]
            [:input.field {:id "person-email" :class "person-email" :type "text" :placeholder "user email"}]]
          [:div.control-group
            [:label.label {:for "person-phone"} "Phone"]
            [:input.field {:id "person-phone" :class "person-phone" :type "text" :placeholder "user phone"}]]
          [:div.control-group
            [:label.label {:for "person-address"} "Address"]
            [:input.field {:id "person-address" :class "person-address" :type "text" :placeholder "user address"}]]
          [:div.control-group
            [:label.label {:for "person-url"} "Social Network"]
            [:input.field {:id "person-url" :class "person-url" :type "text" :placeholder "social network url"}]]
          
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
  [thing-type comm last-nav-path options]
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
                            ; (assoc :author "rich-dad")
                            (assoc :author (:author options))
                            (utils/update-enum :course "type" false))
                  ]
              (.log js/console "add-course form " (pr-str data options))
              ; first is msg type, last is nav-path filter segment.
              (put! comm (mock-data/add-thing-msg-nav-path :course data))))]
    (list
      [:div.create-form
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Course Details"]
          
          [:div.control-group
            [:label.label {:for "course-title"} "Title"]
            [:input.field {:id "course-title" :class "course-title" :type "text" :placeholder "the title of course ..."}]]
          [:div.control-group
            [:label.label {:for "course-author"} "Author"]
            [:input.field {:id "course-author" :class "course-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.label {:for "course-type"} "Type"]
            [:select {:id "course-type" :class "course-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.label {:for "course-content"} "content"]
            [:input.field {:id "course-content" :class "course-content" :type "text" :placeholder "brief content of the this course"}]]
          [:div.control-group
            [:label.label {:for "course-url"} "url"]
            [:input.field {:id "course-url" :class "course-url" :type "text" :placeholder "growingtrees.com/courses"}]]
          [:div.control-group
            [:label.label {:for "course-email"} "group email"]
            [:input.field {:id "course-email" :class "course-email" :type "text" :placeholder "course@group.growingtrees.com"}]]
          [:div.control-group
            [:label.label {:for "course-wiki"} "Wiki Page"]
            [:input.field {:id "course-wiki" :class "course-wiki" :type "text" :placeholder "wiki of the course"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn} 
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))


; add lecture form and submit handler.
; put into comm msg-type :add-thing msg-data as nav-path as {:add-thing add-thing-type :details form-data}
(defmethod add-form 
  :add-lecture
  [thing-type comm last-nav-path options]
  (let [course-id (get-in last-nav-path [:data :pid])
        submit-fn 
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
                            (assoc :author "rich-dad")  ; XXX hard code author here
                            (assoc :lecture/course (get-in @last-nav-path [:data :pid]))
                            (utils/update-enum :lecture "type" false)
                            (utils/update-time :lecture "start")
                            (utils/set-time :lecture "end"))
                  ]
              (.log js/console "add-lecture form " (pr-str data))
              ; first is msg type, last is nav-path, {:add-thing add-thing-type :details form-data} 
              (put! comm (mock-data/add-thing-msg-nav-path :lecture data))))]
    (list
      [:div.add-lecture-form.hide  ; hide first.
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Lecture Details"]
          
          [:div.control-group
            [:label.label {:for "lecture-title"} "Title"]
            [:input.field {:id "lecture-title" :class "lecture-title" :type "text" :placeholder "the title of lecture ..."}]]
          [:div.control-group
            [:label.label {:for "lecture-author"} "Author"]
            [:input.field {:id "lecture-author" :class "lecture-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.label {:for "lecture-type"} "Type"]
            [:select {:id "lecture-type" :class "lecture-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.label {:for "lecture-content"} "content"]
            [:input.field {:id "lecture-content" :class "lecture-content" :type "text" :placeholder "brief content of the lecture"}]]

          ; http://jsfiddle.net/foo4u/HJHq8/light/
          [:div.control-group
            [:label.label {:for "lecture-start"} "start time"]
            [:div#lecture-start-picker.input-append
              [:input#lecture-start.input-xlarge.field {:type "datetime" :placeholder "start time" :data-format "hh:mm:ss MM/dd/yyyy"}]
              [:span.add-on [:a {:href "javascript:NewCal('lecture-start','mmddyyyy', 'true');"}
                              [:i {:data-time-icon "icon-time" :data-data-icon "icon-calendar"}]
                              [:img {:src "cal.gif" :width "16" :height "16"}]]]]
          ]

          [:div.control-group
            [:label.label {:for "lecture-end"} "end time"]
            [:div#lecture-end-picker.input-append
              [:input#lecture-end.input-xlarge.field {:type "datetime" :placeholder "end time" :data-format "hh:mm:ss MM/dd/yyyy"}]
              [:span.add-on [:a {:href "javascript:NewCal('lecture-end','mmddyyyy', 'true');"}
                              [:img {:src "cal.gif" :width "16" :height "16"}]]]]
          ]

          [:div.control-group
            [:label.label {:for "lecture-url"} "url"]
            [:input.field {:id "lecture-url" :class "lecture-url" :type "text" :placeholder "growingtrees.com/courses"}]]
          [:div.control-group
            [:label.label {:for "lecture-wiki"} "Wiki Page"]
            [:input.field {:id "lecture-wiki" :class "lecture-wiki" :type "text" :placeholder "wiki of the lecture"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn
              } 
              "OK"]
            [:button.btn 
              {:id "cancel" :type "button"
               :on-click (fn [_]
                  (let [f (sel1 (keyword (str ".add-lecture-form")))]
                    (dommy/toggle-class! f "hide")))
              } 
              "Cancel"]]
        ]])))


; add question form
(defmethod add-form 
  :add-question
  [thing-type comm last-nav-path options]
  (let [course-id (get-in last-nav-path [:data :pid])
        submit-fn 
          (fn [e]
            (let [input-fields {:question/title ".question-title"
                                :question/content ".question-content"
                                :question/type ".question-type"
                                :question/author ".question-author"
                                :question/difficulty "#question-difficulty"
                                :question/url ".question-url"
                                :question/tag ".question-tag"
                               }
                  data (-> (reduce (fn [tot [k clz]]
                                     (assoc tot k (dommy/value (sel1 clz))))
                                   {}
                                   input-fields)
                            (assoc :author "rich-dad")
                            (assoc :question/origin (get-in @last-nav-path [:data :pid]))
                            (utils/update-enum :question "type" false) ; always false
                            )
                  ]
              (.log js/console "add-question form " (pr-str data))
              ; first is msg type, last is nav-path, {:add-thing add-thing-type :details form-data}
              (put! comm (mock-data/add-thing-msg-nav-path :question data))))
        f (sel1 (keyword (str ".add-question-form")))
       ]
    (when f (dommy/add-class! f "hide"))
    (list
      [:div.add-question-form.hide  ; hide first.
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Question Details"]
          
          [:div.control-group
            [:label.label {:for "question-title"} "Title"]
            [:input.field {:id "question-title" :class "question-title" :type "text" :placeholder "the title of question ..."}]]
          [:div.control-group
            [:label.label {:for "question-author"} "Author"]
            [:input.field {:id "question-author" :class "question-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.label {:for "question-type"} "Type"]
            [:select {:id "question-type" :class "question-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.label {:for "question-content"} "content"]
            [:input.field {:id "question-content" :class "question-content" :type "text" :placeholder "brief content of the question"}]]

          [:div.control-group
            [:label.label {:for "question-difficulty"} "difficulty"]
            [:input.field {:id "question-difficulty" :class "question-difficulty" :type "text" :placeholder "difficulty level"}]]
          [:div.control-group
            [:label.label {:for "question-url"} "url"]
            [:input.field {:id "question-url" :class "question-url" :type "text" :placeholder "growingtrees.com/question"}]]
          [:div.control-group
            [:label.label {:for "question-tag"} "Tag"]
            [:input.field {:id "question-tag" :class "question-tag" :type "text" :placeholder "tags"}]]
          
          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn} 
              "OK"]
            [:button.btn 
              {:id "cancel" :type "button"
               :on-click (fn [_] 
                (let [f (sel1 (keyword (str ".add-question-form")))]
                  (dommy/toggle-class! f "hide")))
              }
            "Cancel"]]
        ]])))


; add group form
(defmethod add-form 
  :add-group
  [thing-type comm last-nav-path options]
  (let [submit-fn 
          (fn [e]
            (let [input-fields {:group/title ".group-title"
                                :group/type ".group-type"
                                :group/author ".group-author"
                                :group/url ".group-url"
                                :group/email ".group-email"
                                :group/wiki ".group-wiki"
                               }
                  data (-> (reduce (fn [tot [k clz]]
                                     (assoc tot k (dommy/value (sel1 clz))))
                                   {}
                                   input-fields)
                            (utils/update-enum :group "type" false)) ; always false
                  ]
              (.log js/console "add-group form " (pr-str data))
              ; first is msg type, last is nav-path filter segment.
              (put! comm (mock-data/add-thing-msg-nav-path :add-group data))))
        ]
    (list
      [:div.create-form
        [:form.form-horizontal 
          ; {:method "post" :html "{:multipart=>true}"}
          [:legend "Group Details"]
          
          [:div.control-group
            [:label.label {:for "group-title"} "Title"]
            [:input.field {:id "group-title" :class "group-title" :type "text" :placeholder "the title of group ..."}]]
          [:div.control-group
            [:label.label {:for "group-author"} "Author"]
            [:input.field {:id "group-author" :class "group-author" :type "text" :placeholder "the author ..."}]]
          [:div.control-group
            [:label.label {:for "group-type"} "Type"]
            [:select {:id "group-type" :class "group-type"}
              [:option {:value "math"} "Math"]
              [:option {:value "science"} "Science"]
              [:option {:value "reading"} "Reading"]
              [:option {:value "art"} "Art"]
              [:option {:value "sports"} "Sports"]
            ]]
          [:div.control-group
            [:label.label {:for "group-content"} "content"]
            [:input.field {:id "group-content" :class "group-content" :type "text" :placeholder "brief description of the group"}]]
          [:div.control-group
            [:label.label {:for "group-url"} "Url"]
            [:input.field {:id "group-url" :class "group-url" :type "text" :placeholder "growingtrees.com/group"}]]
          [:div.control-group
            [:label.label {:for "group-email"} "Email"]
            [:input.field {:id "group-email" :class "group-email" :type "text" :placeholder "group email"}]]
          [:div.control-group
            [:label.label {:for "group-wiki"} "Wiki"]
            [:input.field {:id "group-wiki" :class "group-wiki" :type "text" :placeholder "group wiki"}]]

          [:div.usertext-buttons.control-group
            [:button.btn.btn-primary 
              {:id "submit" :type "button"   ; if type :submit, will trigger re-load
               :on-click submit-fn} 
              "OK"]
            [:button.btn {:id "cancel" :type "button"} "Cancel"]]
        ]])))
