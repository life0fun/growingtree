; thing view for each thing type.
(ns growingtree-app.components.entity-view
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [cljs.reader :as reader]
            [goog.crypt :as crypt]
            [goog.crypt.Md5]
            [goog.events :as ge]
            [goog.Uri]
            [goog.net.EventType :as gevt]
            [goog.i18n.NumberFormat.Format :as formats]
            [growingtree-app.utils :as utils :refer [mprint]]
            [growingtree-app.mock-data :as mock-data] 
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :as am :refer [go alt!]])
  (:use-macros [dommy.macros :only [node sel sel1]]))

;;==================================================================================
; action key for each thing nav sublink type,
; the value for each sublink is thing class selector hide or not.
; referred by emitter thing-navpath-transforms to emit transform enable msg.
; toggle when rendering main_area main-content. 
;;==================================================================================
(def thing-nav-actionkey
  {
    :parent {:title ""
             :child "" :add-child " hide"
             :group "" :join-group " hide"
             :assignment "" :activity ""
             :timeline ""
             :upvote "" :like "" :follow ""
            }

    :child {:title ""
            :parent "" :add-parent " hide"
            :schoolclass "" :add-schoolclass " hide"
            :enrollment "" :assignment "" :activity "" 
            :group "" :join-group " hide"
            :timeline "" :upvote "" :like "" :follow ""
           }

    :course {:title "" :author ""
             :lecture "" :add-lecture " hide"
             :enrollment "" :enroll ""
             :comments ""
             :upvote "" :like "" :share ""
            }

    :lecture {:title "" :author ""
              :course ""
              :question "" :add-question " hide"
              :comments ""
              :upvote "" :like "" :share ""
             }

    :question {:title ""
               :lecture ""
               :assignment ""
               :similar ""
               :comments ""
               :upvote "" :like "" :share ""
               :assignto ""
              }

    :assignment {:title "" :author ""
                 :question "" :hint "" :similar ""
                 :answer "" :submit-answer ""
                 :comments ""
                 :upvote "" :like "" :share ""
                }

    :comments {:author ""
               :reply "" :reply-form ""
               :upvote "" :like "" :share ""
              }

    :group {:title "" :author ""
            :group-members "" :join-group ""
            :comments ""
            :activity "" :add-activity " hide"
            :upvote "" :like "" :share ""
           }

    :activity {:title "" :author ""
            :participants "" :join ""
            :comments ""
            :upvote "" :like "" :share ""
           }

    :answer {:title "" :author ""
             :grade ""
             :assignment ""
             :comments ""
             :upvote "" :like "" :share ""
            }

    :like {:origin "" :upvote ""
            :title "" :author ""
          }

    :timeline { :origin "" :details ""
                :title "" :author ""
              }
  })


; thumbnail jpg, ref to images at assets/images/
; thing-template-value calls this to give value to :thumbhref.
(def thing-thumbnail
  {
    :parent "parent.jpg"
    :child "child.jpg"
    :course "course.jpg"
    :lecture "lecture.jpg"
    :question "question.jpg"
    :assignment "homework.jpg"
    :enrollment "enrollment.png"
    :answer "answer.jpg"
    :comments "comments.jpg"
    :like "like.jpg"
    :timeline "timeline.jpg"
    :group "group.jpg"
    :activity "group.jpg"
  })

;;===============================================================
; get thing-map attr, attr passed in as string
;;===============================================================
(defn thing-attr-val
  [thing-map thing-type attr]
  (cond
    (= :parent thing-type) ((keyword (str "person/" attr)) thing-map)
    (= :child thing-type) ((keyword (str "person/" attr)) thing-map)
    :else ((keyword (str (name thing-type) "/" attr)) thing-map)))


; thing nav sublink is [enroll-class = enroll-1234], setted above.
; class selector for sublink assignto-class, enroll-class
(defn actionkey-class
  "ret the class selector for thing nav sublink transkey"
  [thing-id link-key hide]
  (let [k (keyword (str (name link-key) "-class"))
        clz (str (name link-key) "-" thing-id " " hide)]
    (hash-map k clz)))

; thing nav link class selector includes thing-id, called in thing-node-html.
(defn actionkeys-class
  [thing-id actionkeys]
  (reduce
    (fn [tot [attr-key hide]]
      (merge tot (actionkey-class thing-id attr-key hide)))
    {}
    actionkeys))


; use name of :person/url as key to strip out (namespace :person/url).
(defn thing-value
  "ret thing value map from datomic entity by striping out attr's namespace"
  [entity]
  (let [id (:db/id entity)
        thing-data (dissoc entity :db/id)
        attrs (keys thing-data)
        value-map (reduce 
                    (fn [tot [k v]]
                      (assoc tot (keyword (name k)) 
                                  (if (utils/many? v)
                                    (string/join ", " v)
                                    v)))
                   {}
                   thing-data)
       ]
    (assoc value-map :id id)))


; when click flat list subthing link, put title type thing in title, and filtered in body.
; parent-type :answer, filtered-type :comments, title thing id is parent id in data.pid
(defn filter-things-onclick
  ([app entity parent-type filtered-type]
    (filter-things-onclick app entity parent-type filtered-type {}))

  ([app entity parent-type filtered-type options]
    (let [comm (get-in app [:comms :controls])
          parent-id (:db/id entity)]
      (fn [_]
        (om/update! app [:top] entity) ; persist entity into state :top section
        (put! comm (mock-data/get-filter-things-msg parent-type parent-id filtered-type options)))
      )
    )
  )


;
; inline child input form submit handle, collect inputs data from fields and 
; merge with base data as form data for submission.
(defn submit-form-fn
  [app add-thing-type form-name base-data fields]
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
        (put! comm (mock-data/get-add-thing-msg add-thing-type form-data))
      ))))

;;=============================================================================
; thing author is always a set #{{:person ...} {:person ...}}
; authors = (map #(get % :person/title) (get entity :course/author))
;;=============================================================================
(defmulti thing-entry
  (fn [app thing-type entity override]
    thing-type))

; slice thing list block view template.
; make child div unique with template child form id that includes thing-id
(defmethod thing-entry
  :default
  [app thing-type entity override]
  (let [thing-id (:db/id entity)
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)  ; strip out :course prefix in keys
                         (actionkeys-class thing-id actionkeys))
        ]
    (.log js/console (str "thing-entry :default " value-map))))

;
; :person will recursive call thing-entry to display :parent or :child.
(defmethod thing-entry
  :person
  [app thing-type entity override]
  (let [thing-id(:db/id entity)
        thing-type (:person/type entity)]
    (thing-entry app thing-type entity override)))


; thing-entry view for parent. entity is cursor into state nav-path-things
(defmethod thing-entry
  :parent
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (:title value-map)
        ; join a group form
        join-group-form-name (str "#join-group-form-" thing-id)
        join-group-form-fields {:group/title (str "#group-name-" thing-id)
                                :group/remark (str "#group-remark-" thing-id)
                               }
        join-group-form-data {:group/person thing-id} 
       ]
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.subtitle [:span.tagline (str "phone: " (:phone value-map))]]
          [:p.subtitle [:span.tagline (str "email: " (:email value-map))]]
          [:p.tagline "Joined since " [:time "Aug 2013"]]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:child-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :parent :child)
                  } 
                  "children"]]]]

            [:li.share
              [:div {:class (:add-child-class value-map)}
                [:span.toggle 
                  [:a.option.active
                    {:href "#"
                     :on-click (fn [_]
                        (let [f (sel1 (keyword (str ".add-child-form")))]
                          (dommy/toggle-class! f "hide")))
                    }
                    "add child"]]]]

            [:li.share
              [:div {:class (:assignment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :parent :assignment)
                  } 
                  "assignments"]]]]

            [:li.share
              [:div {:class (:like-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "likes"]]]]

            [:li.share
              [:div {:class (:follow-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "followers"]]]]

            [:li.share
              [:div {:class (:group-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#"
                   :on-click (filter-things-onclick app entity :parent :group)
                  } 
                  "groups"]]]]

            [:li.share
              [:div {:class (:join-group-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword join-group-form-name))]
                        (.log js/console "join-group " f join-group-form-name)
                        (dommy/toggle-class! f "hide")))
                  } "join group"]]]]

            [:li.share
              [:div {:class (:timeline-class value-map)}
                [:span.toggle [:a.option.active 
                  {
                   :href "#"
                   :on-click (filter-things-onclick app entity :parent :timeline
                              {:author title})
                  } 
                  "timeline"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (:child-form-id (str "child-form-" thing-id))}
            [:div.hide {:id (subs join-group-form-name 1)}
              [:form.join-group-form {:style #js {:float "left;"}}
                [:input {:id (str "group-name-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "group name"}]
                [:input {:id (str "group-remark-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "group remark"}]
                [:input {:type "submit" :value "join-group" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :join-group 
                                            join-group-form-name join-group-form-data join-group-form-fields)
                        }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))

; thing-entry view for child, datum entity contains thing data value
(defmethod thing-entry
  :child
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get value-map :title)

        ; join group
        join-group-form-name (str "#join-group-form-" thing-id)
        join-group-form-fields {:group/title (str "#group-name-" thing-id)
                                :group/remark (str "#group-remark-" thing-id)
                               }
        join-group-form-data {:group/person thing-id}
       ]
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.subtitle [:span.tagline (str "phone: " (:phone value-map))]]
          [:p.subtitle [:span.tagline (str "email: " (:email value-map))]]
          [:p.tagline "Joined since " [:time "Aug 2013"]]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:parent-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :child :parent)
                  } 
                  "parent"]]]]

            [:li.share
              [:div {:class (:enrollment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :child :enrollment)
                  }
                  "enrollment"]]]]

            [:li.share
              [:div {:class (:assignment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :child :assignment)
                  }
                  "assignments"]]]]

            [:li.share
              [:div {:class (:like-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "likes"]]]]

            [:li.share
              [:div {:class (:follow-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "followers"]]]]

            [:li.share
              [:div {:class (:group-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#"
                   :on-click (filter-things-onclick app entity :child :group)
                  } 
                  "groups"]]]]

            [:li.share
              [:div {:class (:join-group-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword join-group-form-name))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "join group"]]]]

            [:li.share
              [:div {:class (:activity-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#"
                   :on-click (filter-things-onclick app entity :child :activity)
                  } 
                  "activities"]]]]

            [:li.share
              [:div {:class (:timeline-class value-map)}
                [:span.toggle [:a.option.active
                  {
                   :href "#"
                   :on-click (filter-things-onclick app entity :child :timeline
                              {:author title})
                  }  
                  "timeline"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (:child-form-id (str "child-form-" thing-id))}
            [:div.hide {:id (subs join-group-form-name 1)}
              [:form.join-group-form {:style #js {:float "left;"}}
                [:input {:id (str "group-name-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "group name"}]
                [:input {:id (str "group-remark-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "group remark"}]
                [:input {:type "submit" :value "join-group" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :join-group 
                                            join-group-form-name join-group-form-data join-group-form-fields)
                        }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))

; thing-entry view for course
(defmethod thing-entry
  :course
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)

        authors (map #(get % :person/title) (get entity :course/author))
        title (get value-map :title)
        
        enroll-form-name (str "#enrollment-form-" thing-id)
        enroll-form-fields {:enrollment/person (str "#enroll-person-" thing-id)
                            :enrollment/title (str "#enroll-title-" thing-id)}
        enroll-form-data {:enrollment/course thing-id
                          :enrollment/content (str "enroll into " title)
                          :enrollment/email (str "rich-son@rich.com")
                          :enrollment/url (str "growingtree.com/enrollment/course/" thing-id)
                         } ; peer add-thing :enrollment
       ]
    (.log js/console "course thing value " (pr-str thing-id title authors))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} (:title value-map)]]
          [:p.subtitle [:span.tagline (str "content: " (:content value-map))]]
          [:p.subtitle [:span.tagline (str "url: " (:url value-map))]]
          [:p.tagline "type " type]
          [:p.tagline "Offered by " authors]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :course :lecture)
                  } 
                  "lectures"]]]]

            [:li.share
              [:div {:class (:add-lecture-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str ".add-lecture-form")))]
                        (dommy/toggle-class! f "hide")))
                  } 
                  "add lecture"]]]]

            [:li.share
              [:div {:class (:enrollment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :course :enrollment)
                  } 
                  "enrollments"]]]]

            [:li.share
              [:div {:class (:enroll-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#enrollment-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  } 
                  "enroll"]
              ]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :course :comments)
                  } 
                  "comments"]]]]

            [:li.share
              [:div {:class (:similar-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "similar courses"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            [:div.hide {:id (str "enrollment-form-" thing-id)}
              [:form.enrollment-form {:style #js {:float "left;"}}
                [:input {:id (str "enroll-person-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "attendee"}]
                [:input {:id (str "enroll-title-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "remarks"}]
                [:input {:type "submit" :value "enroll" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :enrollment 
                                            enroll-form-name enroll-form-data enroll-form-fields)
                        }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))


; thing-entry view for lecture, datum entity contains thing data value
(defmethod thing-entry
  :lecture
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)

        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        authors (map #(get % :person/title) (get entity :lecture/author))
        title (:title value-map)
        content (:content value-map)
        url (:url value-map)
        start (-> (get value-map :start) (utils/time-to-string))
        end (-> (get value-map :end) (utils/time-to-string))
       ]
    (.log js/console "lecture thing value " (pr-str authors title content))
    (list
      [:div.thing.link {:id (str thing-id)}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.subtitle [:span.tagline (str "content: " content)]]
          [:p.subtitle [:span.tagline (str "url: " url)]]
          [:p.tagline "Offered by " authors]
          [:p.tagline start "   - -  " end]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:course-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :lecture :course)
                  } 
                  "course"]]]]

            [:li.share
              [:div {:class (:question-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :lecture :question)
                  } 
                  "questions"]]]]

            [:li.share
              [:div {:class (:add-question-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#" 
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str ".add-question-form")))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "add question"]]]]

            [:li.share
              [:div {:class (:enrollment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :lecture :enrollment)
                  }
                  "enrollments"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :lecture :comments)
                  } 
                  "comments"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}]
          [:div.clearleft]
      ]])))

; thing entry view for question
(defmethod thing-entry
  :question
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :question/author))
        difficulty (get entity :question/difficulty)
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        assignto-form-name (str "#assignto-form-" thing-id)
        assignto-end-field (str "assignto-end-" thing-id)
        assignto-form-fields {:assignment/person (str "#assignto-person-" thing-id)
                              :assignment/hint (str "#assignto-hint-" thing-id)
                              :assignment/priority (str "#assignto-priority-" thing-id)
                              :assignment/end (str "#assignto-end-" thing-id)
                             }
        assignto-form-data {:assigment/origin thing-id
                            :assignment/author "rich-dad"   ; XXX hard code
                            :assignment/title (str "assignment based on " (get entity :question/title))
                            :assignment/start (utils/to-epoch)
                            :assignment/status :active
                            :assignment/origin thing-id
                            :assignment/type (get entity :question/type)
                           } ; peer add-thing :assigment
       ]
    (.log js/console "question thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} (:title value-map)]]
          [:p.subtitle [:span.tagline (str "content: " (:content value-map))]]
          [:p.subtitle [:span.tagline (str "url: " (:url value-map))]]
          [:p.tagline "Authored by " authors]
          [:p.tagline "difficulty " difficulty]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :question :lecture)
                  } "lecture"]]]]

            [:li.share
              [:div {:class (:assignment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :question :assignment)
                  } "assignments"]]]]

            [:li.share
              [:div {:class (:similar-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :question :similar)
                  } "similar questions"]]]]

            [:li.share
              [:div {:class (:assignto-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#assignto-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "assign to"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :question :comments)
                  } 
                  "comments"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            [:div.hide {:id (str "assignto-form-" thing-id)}
              [:form.enrollment-form {:style #js {:float "left;"}}
                [:input {:id (str "assignto-person-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "assign to person"}]
                [:input {:id (str "assignto-end-" thing-id) :type "datetime" :data-format "hh:mm:ss MM/dd/yyyy"
                         :style #js {:display "block"} :placeholder "due time"}]
                [:span.add-on [:a {:href (str "javascript:NewCal('" assignto-end-field "','mmddyyyy', 'true');")}
                        [:i {:data-time-icon "icon-time" :data-data-icon "icon-calendar"}]
                        [:img {:src "cal.gif" :width "16" :height "16"}]]]
                [:input {:id (str "assignto-priority-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "priority"}]
                [:input {:id (str "assignto-hint-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "hint"}]
                [:input {:type "submit" :value "assign to" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :assignment 
                                            assignto-form-name 
                                            assignto-form-data 
                                            assignto-form-fields)
                         }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))

; thing entry view for assignment
(defmethod thing-entry
  :assignment
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :assignment/author))
        
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        assignee (get-in value-map [:person :person/title])
        content (get-in value-map [:origin :question/content])
        url (get-in value-map [:origin :question/url])
        hint (get value-map :hint)
        end (-> (get value-map :end) (utils/time-to-string))

        answer-form-name (str "#answer-form-" thing-id)
        answer-form-fields {:answer/title (str "#answer-title-" thing-id)
                            :answer/content (str "#answer-content-" thing-id)
                           }
        answer-form-data {:answer/origin thing-id
                          :answer/author "rich-son"   ; XXX hard code
                          :answer/start (utils/to-epoch)
                         } ; peer add-thing :answer
       ]
    (.log js/console "assignment thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title 
            {:href "#"
             :on-click #(put! comm (mock-data/get-filter-things-msg :child thing-id :assignment {}))}
            (str "assigned to " assignee)]]
          [:p.subtitle [:span.tagline (str "content: " content)]]
          [:p.subtitle [:span.tagline (str "url: " url)]]
          [:p.tagline "hint :" hint]
          [:p.tagline "due  :" end]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :assignment :question)
                  } "question"]]]]

            [:li.share
              [:div {:class (:assignment-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :assignment :answer)
                  } "answers"]]]]

            [:li.share
              [:div {:class (:similar-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :assignment :similar)
                  } "related assignments"]]]]

            [:li.share
              [:div {:class (:answer-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#answer-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "answer"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :assignment :comments)
                  } 
                  "comments"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            [:div.hide {:id (str "answer-form-" thing-id)}
              [:form.answer-form {:style #js {:float "left;"}}
                [:input {:id (str "answer-title-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "answer"}]
                [:input {:id (str "answer-content-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "explain"}]
                [:input {:type "submit" :value "submit" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :answer 
                                            answer-form-name 
                                            answer-form-data 
                                            answer-form-fields)
                         }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))

; thing-entry view for answer, datum entity contains thing data value
(defmethod thing-entry
  :answer
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :answer/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get-in value-map [:title])
        content (get value-map :content)
        origin-content (get-in value-map [:origin :assignment/content])
        score (get value-map :score)
        url (get-in value-map [:origin :assignment/url])
        start (-> (get value-map :start) (utils/time-to-string))

        grade-form-name (str "#grade-form-" thing-id)
        grade-form-fields {:grade/score (str "#grade-score-" thing-id)
                           :grade/comments (str "#grade-comments-" thing-id)
                          }
        grade-form-data {:grade/origin thing-id
                          :grade/author "rich-dad"   ; XXX hard code
                          :grade/start (utils/to-epoch)
                         } ; peer add-thing :grade
       ]
    (.log js/console "answer thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.subtitle [:span.tagline (str "content: " content)]]
          [:p.subtitle [:span.tagline (str "assignment : " origin-content)]]
          [:p.tagline "submitted at :" start]

          [:p.title (str "Score : " score)]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :answer :assignment)
                  } "assignment"]]]]

            [:li.share
              [:div {:class (:answer-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#grade-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "grade"]]]]

            [:li.share
              [:div {:class (:similar-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :answer :similar)
                  } "similar answers"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :answer :comments)
                  } 
                  "comments"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            [:div.hide {:id (str "grade-form-" thing-id)}
              [:form.grade-form {:style #js {:float "left;"}}
                [:input {:id (str "grade-score-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "grade"}]
                [:input {:id (str "grade-comments-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "comments"}]
                [:input {:type "submit" :value "submit" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :grade 
                                            grade-form-name 
                                            grade-form-data 
                                            grade-form-fields)
                         }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))

; thingroot is the id of thing this comments tree made to. 
; origin is the parent comment node of this comment.
; for nested comments tree, use the len of :navpath to determine indention.
; indention is done by offsetX css class.
(defmethod thing-entry
  :comments
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :comments/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        thingroot (get value-map :thingroot)
        title (get value-map :title)
        tm (-> (get value-map :txtime) (/ 1000) (utils/time-to-string))
        ago (utils/moment-from (js/moment (get value-map :txtime)) (js/moment))
        offset (/ (- (count (get value-map :navpath)) 2) 2)

        reply-form-name (str "#reply-form-" thing-id)
        reply-form-fields {:comments/title (str "#reply-title-" thing-id)
                          }
        reply-form-data {:comments/origin thing-id
                         :comments/thingroot thingroot
                          :comments/author "rich-son"   ; XXX hard code
                         } ; peer add-thing :reply
       ]
    (.log js/console "comments thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map)) :class (str "comment" offset)}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.tagline "submitted " ago " ago at " tm]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :comments :comments)
                  } 
                  "comments"]]]]

            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :comments :comments)
                  } "tips"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#reply-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "reply"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            [:div.hide {:id (str "reply-form-" thing-id)}
              [:form.reply-form {:style #js {:float "left;"}}
                [:textarea {:id (str "reply-title-" thing-id) :type "text" :placeholder "comments"
                            :style #js {:display "block" :width "90%" :height "100px"} }]
                [:input {:type "submit" :value "submit" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :comments 
                                            reply-form-name 
                                            reply-form-data 
                                            reply-form-fields)
                         }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))


; group view
(defmethod thing-entry
  :group
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)

        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get value-map :title)
        authors (map #(get % :person/title) (get entity :group/author))
        join-group-form-name (str "#join-group-form-" thing-id)
        join-group-form-fields {:group/person (str "#group-person-" thing-id)
                                :group/remark (str "#group-remark-" thing-id)
                               }
        join-group-form-data {:group/title title}

        ; add group event/activity
        add-activity-form-data {:group/title title}
        add-activity-form-name (str "#add-activity-form-" thing-id)
        add-activity-form-fields {:activity/title (str "#activity-title-" thing-id)
                                  :activity/author (str "#activity-author-" thing-id)
                                  :activity/content (str "#activity-content-" thing-id)
                                  :activity/location (str "#activity-location-" thing-id)
                                  :activity/start (str "#activity-start-" thing-id)
                                  :activity/url (str "#activity-url-" thing-id)
                                 }
        add-activity-form-data {:activity/origin thing-id} ; activity origin points to group.
        activity-start-id (str "activity-start-" thing-id)
        activity-start-js (str "javascript:NewCal('" activity-start-id "', 'mmddyyyy', 'true');")
       ]
    (.log js/console "groups thing value " (pr-str thing-id title authors))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.tagline "created by " authors]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:group-members-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :groups :group-members)
                  } 
                  "group-members"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :groups :comments)
                  } "comments"]]]]

            [:li.share
              [:div {:class (:groups-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#join-group-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "join-group"]]]]

            [:li.share
              [:div {:class (:activity-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :group :activity)
                  } 
                  "activities"]]]]

            [:li.share
              [:div {:class (:add-activity-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#add-activity-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "add-activity"]]]]      
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            ; join group
            [:div.hide {:id (subs join-group-form-name 1)}
              [:form.join-group-form {:style #js {:float "left;"}}
                [:input {:id (str "group-person-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "name"}]
                [:input {:id (str "group-remark-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "remark"}]
                [:input {:type "submit" :value "join-group" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :join-group 
                                            join-group-form-name join-group-form-data join-group-form-fields)
                        }]
              ]
            ]
            ; add group activity
            [:div.hide {:id (subs add-activity-form-name 1)}
              [:form.add-activity-form {:style #js {:float "left;"}}
                [:input {:id (str "activity-title-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "activity name"}]
                [:input {:id (str "activity-author-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "activity author"}]
                [:input {:id (str "activity-content-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "activity content"}]
                [:input {:id (str "activity-location-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "activity address"}]
                [:input {:id (str "activity-url-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "activity url"}]                         
                [:div#activity-start-picker.input-append
                  [:input {:id activity-start-id :type "datetime" :placeholder "start time" :data-format "hh:mm:ss MM/dd/yyyy"}]
                  [:span.add-on [:a {:href activity-start-js}
                              [:i {:data-time-icon "icon-time" :data-data-icon "icon-calendar"}]
                              [:img {:src "cal.gif" :width "16" :height "16"}]]]]
                [:input {:type "submit" :value "add-activity" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :activity
                                            add-activity-form-name add-activity-form-data add-activity-form-fields)
                        }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))


(defmethod thing-entry
  :activity
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :activity/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get value-map :title)
        content (get value-map :content)
        start (-> (get value-map :start) (utils/time-to-string))
        location (get value-map :location)
        url (get value-map :url)
        join-activity-form-name (str "#join-activity-form-" thing-id)
        join-activity-form-fields {:activity/person (str "#activity-person-" thing-id)
                                   :activity/remark (str "#activity-remark-" thing-id)
                                  }
        join-activity-form-data {:activity/title title}
       ]
    (.log js/console "thing-entry " (pr-str thing-id title url))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.tagline content]
          [:p.tagline start "   at   " location]
          [:p.tagline "url " url]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:activity-members-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :activity :activity-members)
                  } 
                  "participants"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :activity :comments)
                  } "comments"]]]]

            [:li.share
              [:div {:class (:activity-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#join-activity-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  }
                  "join-activity"]]]]

            [:li.share
              [:div {:class (:activity-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :activity :group)
                  } 
                  "group"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            ; join activity
            [:div.hide {:id (subs join-activity-form-name 1)}
              [:form.join-activity-form {:style #js {:float "left;"}}
                [:input {:id (str "activity-person-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "name"}]
                [:input {:id (str "activity-remark-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "remark"}]
                [:input {:type "submit" :value "join-activity" :class "btn btn-primary assign-button"
                         :on-click 
                            (submit-form-fn app :join-activity 
                                            join-activity-form-name join-activity-form-data join-activity-form-fields)
                        }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))


; entity = {:type "lecture" :id 1 :origin {}}
(defmethod thing-entry
  :timeline
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :timeline/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        thing-type (keyword (:type value-map))  ; use real thing-type, not timeline
        thingroot (get value-map :thingroot)
        title (get-in value-map [:origin (keyword (str (:type value-map) "/title"))])
        tm (-> (get value-map :txtime) (/ 1000) (utils/time-to-string))
        ago (utils/moment-from (js/moment (get value-map :txtime)) (js/moment))
        offset (/ (- (count (get value-map :navpath)) 2) 2)
       ]
    (.log js/console "timeline thing value " (pr-str (keyword (str thing-type "/title"))) (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map)) :class (str "timeline" offset)}
        [:span.rank "1"]   ; index offset in the list of filtered things
        [:div.midcol.unvoted
          [:div.arrow.up {:role "button" :arial-label "upvote"}]
          [:div.score.unvoted (:upvote value-map)]
          [:div.arrow.down {:role "button" :arial-label "downvote"}]]
      
        [:a.thumbnail {:href "#"}
          [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
      
        [:div.entry.unvoted
          [:p.title [:a.title {:href "#"} title]]
          [:p.tagline "submitted " ago " ago at " tm]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:timeline-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :timeline :timeline)
                  } 
                  "timeline"]]]]

            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (filter-things-onclick app entity :timeline :timeline)
                  } "tips"]]]]
          ]
          [:div.clearleft]
      ]])))


;;===========================================================================
; show add comments input box, trigger by thing data emitter [:setup :x 1 :comments]
; form id is the thing-id this comment's origin and thingroot
;;===========================================================================
