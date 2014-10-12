(ns growingtree-app.components.login
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [dommy.core :as dommy]
            [sablono.core :as html :refer-macros [html]]
            [growingtree-app.routes :as routes]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.utils :as utils])
  (:use-macros [dommy.macros :only [node sel sel1]]))

;
; login and navlist only contains top-level things.

; inline child input form submit handle, collect inputs data from fields and 
; merge with base data as form data for submission.
(defn submit-form-fn
  [app form-name base-data fields]
  (let [comm (get-in app [:comms :controls])]
    (fn [_]
      (let [$form (sel1 (keyword form-name))
            data (reduce (fn [tot [attr fieldid]]
                    ; (.log js/console (pr-str fieldid (dommy/value (sel1 fieldid))))
                    (assoc tot attr (dommy/value (sel1 fieldid))))
                    {}
                    fields)
            form-data (-> (merge base-data data)
                          (utils/set-time :assignment "end")
                          (utils/set-time :activity "start")
                          )
           ]
        (dommy/toggle-class! $form "hide")
        (.log js/console (pr-str form-name " data " form-data))
        (put! comm (mock-data/get-login-msg form-name form-data))
      ))))

; called from core upon app start to create login modal.
; app is cursor to app state. use (get-props owner) to get the cursor into the app state associated with the Om component.
; owner is backing OM component created by build. use (get-state owner) to get component local state.
(defn login
  [app owner opts] ; root cursor to app state, owner is backing OM component.
  (reify
    om/IDisplayName
    (display-name [_]
      (or (:react-name opts) "login"))
    om/IRender
    (render [this]
      (.log js/console (pr-str "login drawing"))
      (html/html
       (let [comm (get-in opts [:comms :controls])  ; comm chan is control
             settings (:settings app)
            ]
          [:div.center.span5
            [:form#login-form.login-name {:action "" :method "post"}
              [:h2 "Welcome to " [:span.app-name "GrowingTree"]]
              [:fieldset
                [:label.lable {:for "login-name"} "Username or Email"]
                [:input.login-name {:id "login-name" :type "text" :placeholder "user name or email"}]]
              [:fieldset.fieldset-password
                [:label.lable {:for "login-password"} "Password"]
                [:input.login-password {:id "login-password" :type "password" :placeholder "Password"}]]
              [:fieldset.fieldset-rememberMe.fieldset-checkbox
                [:label.lable {:for "rememberMe-input"} "Remember Me"]
                [:input.remembrMe-input {:id "rememberMe-input" :type "checkbox" :name "remember" :value: "1"}]]
              [:button.btn.btn-primary.btn-block
                {:id "login-button" :type "submit"  :name "submit" ; if type :submit, will trigger re-load
                :on-click submit-form-fn}
                "Sign In"]
              [:p#signup-link [:a.option.active {:href "#"} "Create an account ?"]]
            ]

            [:form#signup-form.signup-form.hide {:action "" :method "post"}
              [:h2 "Create an Account" [:span.app-name "GrowingTree"]]
              [:fieldset.fieldset-accountType
                [:legend "Account Type"]
                [:p "What account type do you want to create ?"]

                [:fieldset.fieldset-ratio
                  [:label.parent-type {:for "parent-type"} "Parent"]
                  [:input#parent-type {:name "signup-role" :type "radio" :value "parent" :checked ""}]]

                [:fieldset.fieldset-ratio
                  [:label.child-type {:for "child-type"} "Child"]
                  [:input#child-type {:name "signup-role" :type "radio" :value "child" :checked ""}]]

                [:fieldset.fieldset-ratio
                  [:label.teacher-type {:for "teacher-type"} "teacher"]
                  [:input#teacher-type {:name "signup-role" :type "radio" :value "teacher" :checked ""}]]
              ]

              [:fieldset
                [:input.signup-name {:id "signup-name" :type "text" :placeholder "user name"}]]

              [:fieldset
                [:input.signup-email {:id "signup-email" :type "text" :placeholder "email"}]]

              [:fieldset.fieldset-password
                [:input.signup-password {:id "signup-password" :placeholder "Password"}]]

              [:fieldset.fieldset-password
                [:input.signup-password-rep {:id "signup-password-rep" :placeholder "Repeat Password"}]]

              [:button.btn.btn-primary.btn-block
                {:id "signup-button" :type "submit"  :name "submit" ; if type :submit, will trigger re-load
                :on-click submit-form-fn}
                "Sign Up"]
            ]

          [:br]
          [:p.text-center.center "Copyright 2014 - GrowingTree"]
        ]
      )))))
