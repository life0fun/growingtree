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
            
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :as am :refer [go alt!]])
  (:use-macros [dommy.macros :only [node sel sel1]]))

;;==================================================================================
; action key for each thing nav sublink type,
; the value for each sublink is thing class selector hide or not.
; referred by emitter thing-navpath-transforms to emit transform enable msg.
;;==================================================================================
(def thing-nav-actionkey
  {
    :parent {:title ""
             :child "" :add-child ""
             :group "" :add-group " hide"
             :assignment "" :timeline ""
             :upvote "" :like "" :follow ""
            }

    :child {:title ""
            :parent "" :add-parent " hide"
            :schoolclass "" :add-schoolclass " hide"
            :enrollment "" :assignment "" :activity "" :group ""
            :timeline "" :upvote "" :like "" :follow ""
           }

    :course {:title "" :author ""
             :lecture "" :add-lecture " "
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
        value-map (reduce (fn [tot [k v]]
                              (assoc tot (keyword (name k)) 
                                          (if (utils/many? v)
                                            (string/join ", " v)
                                            v)))
                   {}
                   thing-data)
       ]
    (assoc value-map :id id)))


;;=============================================================================
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
        add-child {:title :title  ; key is :title cursor in app state.
                   :body [:newthing-form [:parent :add-child]]  ; :body is nav-path
                   :data {:pid thing-id}
                  }
        add-assignment {:path [:add-thing :assignment] 
                        :data {:author thing-id}}
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
          [:p.title [:a.title {:href "#"} (:title value-map)]]
          [:p.subtitle [:span.tagline (str "phone: " (:phone value-map))]]
          [:p.subtitle [:span.tagline (str "email: " (:email value-map))]]
          [:p.tagline "Joined since " [:time "Aug 2013"]]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:child-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "children"]]]]

            [:li.share
              [:div {:class (:add-child-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#" 
                   :on-click (fn [_]
                      ; persist entity into global state title
                      (om/update! app [:title] entity)
                      (put! comm [:newthing-form add-child]))}
                   "add child"]]]]

            [:li.share
              [:div {:class (:assignment-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "assignments"]]]]

            [:li.share
              [:div {:class (:like-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "likes"]]]]

            [:li.share
              [:div {:class (:follow-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "followers"]]]]

            [:li.share
              [:div {:class (:group-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "groups"]]]]

            [:li.share
              [:div {:class (:add-group-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "join group"]]]]

            [:li.share
              [:div {:class (:timeline-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "timeline"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (:child-form-id (str "child-form-" thing-id))}]
          [:div.clearleft]
      ]])))


; thing-entry view for course
(defmethod thing-entry
  :course
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :course/author))
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        add-lecture {:title :title  ; the key used to get the value from state.
                     :body [:newthing-form [:course :add-lecture]]
                     :data {:pid thing-id}
                    }
        add-assignment {:path [:add-thing :assignment] 
                        :data {:author thing-id}}
        enroll-data {
                     :body [:add-thing [:course :enroll]]
                     :data {:pid thing-id}
                    }
       ]
    (.log js/console "course thing value " (pr-str value-map))
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
          [:p.tagline "Offered by " authors]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:lecture-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      ; persist entity into global state title
                      (om/update! app [:title] entity)
                      ; send msg to control chan, msg-data = {:title entity :body nav-path :data}
                      ; :title used to form request params in ajax 
                      (put! comm [:filter-things ; <- msg-type
                        {:title :title  ; key name in state props to display in title, 
                         :body [:filter-things [:course thing-id :lecture]] ; first is for main-area content dispatch.
                         :data {:pid thing-id}}]))}
                  "lectures"]]]]

            [:li.share
              [:div {:class (:add-lecture-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#" 
                   :on-click (fn [_]
                      ; persist entity into title slot in global state
                      (om/update! app [:title] entity)
                      (put! comm [:newthing-form add-lecture]))}
                   "add lecture"]]]]

            [:li.share
              [:div {:class (:enrollment-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "enrollments"]]]]

            [:li.share
              [:div {:class (:enroll-class value-map)}
                [:span.toggle [:a.option.active 
                  {:href "#"
                   :on-click (fn [_]
                      (let [f (sel1 (keyword (str "#enrollment-form-" thing-id)))]
                        (dommy/toggle-class! f "hide")))
                  } "enroll"]
              ]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "comments"]]]]

            [:li.share
              [:div {:class (:similar-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "similar courses"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            [:div.hide {:id (str "enrollment-form-" thing-id)}
              [:form.enrollment-form {:style #js {:float "left;"}}
                [:input {:id (str "enroll-name-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "attendee"}]
                [:input {:id (str "enroll-remark-" thing-id) :type "text"
                         :style #js {:display "block"} :placeholder "remarks"}]
                [:input {:type "submit" :value "enroll" :class "btn btn-primary assign-button"
                         :on-click (fn [_]
                            (let [f (sel1 (keyword (str "#enrollment-form-" thing-id)))
                                  data (reduce (fn [tot [k fieldid]]
                                          (assoc tot k (dommy/value (sel1 fieldid))))
                                          {}
                                          {:enrollment/name (str "#enroll-name-" thing-id)
                                           :enrollment/remark (str "#enroll-remark-" thing-id)})
                                  enroll-data (merge enroll-data data)
                                  ]
                              (dommy/toggle-class! f "hide")
                              (.log js/console "enroll data " (pr-str enroll-data))
                              (put! comm [:add-thing enroll-data])
                              ))
                        }]
              ]
            ]
          ]
          [:div.clearleft]
      ]])))


; thing-entry view for lecture
(defmethod thing-entry
  :lecture
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :lecture/author))
        start (get entity :lecture/start)
        end (get entity :lecture/end)
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        add-question {:title :title  ; key is :title cursor in app state. XXXX how was it consumed ?
                      :body [:newthing-form [:lecture :add-question]]
                      :data {:pid thing-id}
                    }
        add-assignment {:path [:add-thing :assignment] 
                        :data {:author thing-id}}
       ]
    (.log js/console "lecture thing value " (pr-str value-map))
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
          [:p.tagline "Offered by " authors]
          [:p.tagline "start " start " == " end]

          [:ul.flat-list.buttons
            [:li.share
              [:div {:class (:course-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "course"]]]]

            [:li.share
              [:div {:class (:question-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "questions"]]]]

            [:li.share
              [:div {:class (:add-question-class value-map)}
                [:span.toggle [:a.option.active
                  {:href "#" 
                   :on-click (fn [_]
                      ; persist entity into title slot in global state
                      (om/update! app [:title] entity)
                      (put! comm [:newthing-form add-question]))}
                   "add question"]]]]

            [:li.share
              [:div {:class (:enrollment-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "enrollments"]]]]

            [:li.share
              [:div {:class (:comments-class value-map)}
                [:span.toggle [:a.option.active {:href "#"} "comments"]]]]
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}]
          [:div.clearleft]
      ]])))

;;===========================================================================
; show add comments input box, trigger by thing data emitter [:setup :x 1 :comments]
; form id is the thing-id this comment's origin and thingroot
;;===========================================================================
