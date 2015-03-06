
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

            [om.core :as om]
            [dommy.core :as dommy]
            [sablono.core :as html :refer-macros [html]]

            [growingtree-app.utils :as utils :refer [mprint]]
            [growingtree-app.mock-data :as mock-data]
            [growingtree-app.routes :as routes]
            [growingtree-app.ui :as ui])
  (:require-macros [cljs.core.async.macros :as am :refer [go alt!]])
  (:use-macros [dommy.macros :only [node sel sel1]]))


; forward declares
(declare thing-entry-enrollment-person)
(declare thing-entry-enrollment-course)

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


; for each thing entity, we strip out thing type prefix on thing props.
; without thing type namespace, we can re-use code for parent/child person.
; use name of :person/url as key to strip out (namespace :person/url).
(defn thing-value-strip-type
  "ret thing value map from datomic entity by striping out attr's namespace"
  [entity]
  (let [id (:db/id entity)
        thing-data (dissoc entity :db/id)
        attrs (keys thing-data)
        value-map (reduce 
                    (fn [tot [k v]]
                      (assoc tot (keyword (name k))  ; name of :course/title = title
                                  (if (utils/many? v)
                                    (string/join ", " v)
                                    v)))
                    {}
                    thing-data)
       ]
    (assoc value-map :id id)))

;; upvote a thing, create a like object.
(defn upvote-onclick
  ([app entity]
    (upvote-onclick app entity {}))
  
  ([app entity options]
    (let [comm (get-in app [:comms :controls])
          thing-id (:db/id entity)
          login-user (get-in app [:login-user])]
      ; onclick handler is callback that invoked outside rendering phase.
      (fn [_]
        (let [login-user-id (:db/id @login-user)
              like-data {:like/origin thing-id :like/person login-user-id}
             ]
          (.log js/console (pr-str "upvote-onclick " thing-id @login-user))
          (put! comm (mock-data/add-thing-msg-nav-path :like like-data))))
    ))
  )

; click on title, 
(defn title-onclick
  ([app entity thing-type filtered-type]
    (title-onclick app entity thing-type filtered-type {}))

  ([app entity thing-type filtered-type options]
    (let [comm (get-in app [:comms :controls])
          thing-id (:db/id entity)]
      (fn [_]
        (let [; deprecate, use top entity id instead. no need full url.
              top-url (as-> (routes/window-location) url
                        (string/split url #"/")
                        (last url)
                        (str url "/" thing-id))
              top-eid thing-id
             ]
          ; course/17592186045421/lecture/17592186045423
          (.log js/console (pr-str "title click top-url " top-url top-eid))
          (ui/hide-all-forms thing-id)
          (om/update! app [:top] entity)
          (om/update! app [:url-data top-eid] entity)
          (put! comm (mock-data/filter-things-msg-nav-path thing-type thing-id filtered-type options)))
        )
      )
    )
  )

; when click flat list subthing link, put title type thing in title, and filtered in body.
; parent-type :answer, filtered-type :comments, title thing id is parent id in data.pid
(defn filter-things-onclick
  ([app entity parent-type filtered-type]
    (filter-things-onclick app entity parent-type filtered-type {}))

  ([app entity parent-type filtered-type options]
    (let [comm (get-in app [:comms :controls])
          parent-id (:db/id entity)]
      (fn [_]
        (let [; deprecate, use top entity id instead. no need full url.
              top-url (as-> (routes/window-location) url
                        (string/split url #"/")
                        (last url)
                        (str url "/" parent-id))
              top-eid parent-id
             ]
          ; course/17592186045421/lecture/17592186045423
          (.log js/console (pr-str "filter thing click top-url " top-url top-eid))
          (ui/hide-all-forms parent-id)
          (om/update! app [:top] entity)
          (om/update! app [:url-data top-eid] entity)
          (put! comm (mock-data/filter-things-msg-nav-path parent-type parent-id filtered-type options)))
        )
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
            ; merge will override default base data using form collected data
            form-data (as-> data d
                        ; strip out empty string.
                        (into {} (remove #(if (string? (val %)) (empty? (val %)) false) d))
                        (merge base-data d)
                        (utils/set-time d :assignment "end")
                        (utils/set-time d :activity "start")
                        )
           ]
        (dommy/toggle-class! $form "hide")
        (.log js/console (pr-str form-name " data " form-data))
        (put! comm (mock-data/add-thing-msg-nav-path add-thing-type form-data))
      ))))


;;=============================================================================
; thing author is always a set #{{:person ...} {:person ...}}
; authors = (map #(get % :person/title) (get entity :course/author))
; thing-type is the last of nav-path, the reted entity is composition of various attrs namespaces.
; [:all-things [:all 0 :enrollment]]
;  {:person/phone #{"123-456-7890"}, :person/email #{"rich-son@rich.com"}, 
;   :enrollment/course {:course/author #{...}} :enrollment/progress ({:progress/upvote..)}
;;=============================================================================
(defmulti thing-entry
  (fn [app thing-type entity override]
    thing-type))

; thing entry thumbnail and upvote
(defn thing-entry-thumbnail
  [thing-type value-map upvote-fn]
  (list
    [:span.rank (or (:rank value-map) "1")]  ; rank setted in main area list-things
    [:div.midcol.unvoted
      [:div.arrow.up 
        {:role "button" :arial-label "upvote" :on-click upvote-fn}]
      [:div.score.unvoted (:upvote value-map)]
      [:div.arrow.down 
        {:role "button" :arial-label "downvote"}]]
      
    [:a.thumbnail
      [:img {:width "70" :height "70" :src (str "/" (thing-type thing-thumbnail))}]]
  ))
      
; thing entry subtitle
(defn thing-entry-titles
  [titles]
  (for [t titles]
    [:a.title
      {:on-click (fn [_]
        (.log js/console "title clicked"))
      }
      t]))

(defn thing-entry-clickable-titles
  [title click-fn]
  [:p.title "  " 
    [:a.title
      {:on-click click-fn}
    (str "   " title)
    ]])

(defn thing-entry-subtitles
  [subtitles]
  (for [subt subtitles]
    [:p.subtitle [:span.tagline subt]]))

(defn thing-entry-taglines
  [taglines]
  (for [tagl taglines]
    [:p.tagline tagl]))

; thing entry flat list action button
(defn thing-entry-action-button-li
  [text classname on-click-fn]
  (list 
    [:li.share
      [:div {:class classname}
        [:span.toggle [:a.option.active 
          {:on-click on-click-fn} 
          text]]]]))


;- - - - ;- - - - ;- - - -;- - - -;- - - -;- - - -;- - - -;- - - -
; progress steps fills each list item.
; :progress/steps #{{:progressstep/status :work-in-progress, :progress/title "progression of flute 101", :db/id 17592186045494}) 
(defn progress-step
  [step]
  (let [title (:progressstep/title step)
        status (:progressstep/status step)]  ; status is string steps
    [:li.progress-step
      [:span.progress-title
        [:a title ]
        [:div.meter
          [:span {:style #js {:width (str status "%")}}]
        ]
      ]]
  ))

; progress tracker, its a ol list with progress steps as list items.
; {:progress/author #{{:person/title "rich-son"}, :progress/origin {:db/id 17592186045484}, 
;  :progress/steps #{{:progressstep/status "50", :progress/title "progression of flute 101", :db/id 17592186045494}) 
(defn progress-tracker
  [progress]
  (when-let [progress-steps (:progress/steps progress)]  ; a set of progress steps
      [:ol.progress-tracker
        (map progress-step (sort-by :progressstep/order progress-steps))
      ]
    ))

;- - - - ;- - - - ;- - - -;- - - -;- - - -;- - - -;- - - -;- - - -
; child form at the bottom of thing entry
; input-map {:group/title {:id :type :text} :group/remart {:id :type :text}}
; input-map {:progress/title {:id :type list :datalist []}}
(defn thing-entry-child-form
  [form-id form-class input-map submit-text submit-fn]
  [:div.hide {:id form-id}
    [:form {:class form-class :style #js {:float "left;"}}
      (for [[field-name field-data] input-map]
        (condp = (:type field-data)
          "datetime"
            [:div.datetime-picker.input-append
              [:input {:id (:id field-data) :type (:type field-data) :data-format "hh:mm:ss MM/dd/yyyy" :placeholder (:text field-data)}]
              [:span.add-on [:a {:href (str "javascript:NewCal('" (:id field-data) "','mmddyyyy', 'true');")}
                              [:i {:data-time-icon "icon-time" :data-data-icon "icon-calendar"}]
                              [:img {:src "cal.gif" :width "16" :height "16"}]]] 
            ]
          "select"
            (if-let [options (:select field-data)]
              [:select {:id (:id field-data)}
                (map (fn [v] [:option {:value v} (name v)]) options)
              ])
          "list"
            (let [datalist (:datalist field-data)
                  datalist-name (str (:id field-data) "-datalist")]
              (.log js/console (pr-str "datalist " datalist))
              (list
                [:input {:id (:id field-data) :type :list :list datalist-name}]
                [:datalist {:id datalist-name}
                  (map (fn [v] [:option {:value v} (str (name v))]) datalist)]
                )
              )
          ; a single default expr at the end.
          [:input {:id (:id field-data) :type (:type field-data) :placeholder (:text field-data)}]
        ))
      [:button.btn.btn-primary.inline-form-btn  
        {:type "button" :id "submit" :on-click submit-fn}
      submit-text]
    ]]
  )

;- - - - ;- - - - ;- - - -;- - - -;- - - -;- - - -;- - - -;- - - -
; slice thing list block view template.
; make child div unique with template child form id that includes thing-id
(defmethod thing-entry
  :default
  [app thing-type entity override]
  (.log js/console (pr-str "thing-entry " thing-type entity))
  (let [thing-id (:db/id entity)
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)  ; strip out :course prefix in keys
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
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (:title value-map)
        ; join a group form
        join-group-form-name (str "#join-group-form-" thing-id)
        join-group-form-input-map {
          :group/title {:id (str "group-name-" thing-id) :type "text" :text "group name"}
          :group/remark {:id (str "group-remark-" thing-id) :type "text" :text "brief intro"}
        }
        join-group-form-fields {
          :group/title (str "#" (get-in join-group-form-input-map [:group/title :id]))
          :group/remark (str "#" (get-in join-group-form-input-map [:group/remark :id]))
        }
        join-group-form-data {:group/person thing-id} 
       ]
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))

        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "phone: " (:phone value-map)) 
                                         (str "email: " (:email value-map))))
          (thing-entry-taglines (vector (str "url: " (:url value-map))))


          [:ul.flat-list.buttons
            (thing-entry-action-button-li "children" (:child-class value-map)
                                          (filter-things-onclick app entity :parent :child))
            (thing-entry-action-button-li "add child" (:add-child-class value-map)
                                          (ui/toggle-hide-fn (str ".add-child-form")))
            (thing-entry-action-button-li "assignments" (:assignment-class value-map)
                                          (filter-things-onclick app entity :parent :assignment))
            (thing-entry-action-button-li "likes" (:like-class value-map)
                                          (filter-things-onclick app entity :parent :like))
            (thing-entry-action-button-li "followers" (:follow-class value-map)
                                          (filter-things-onclick app entity :parent :follow))
            (thing-entry-action-button-li "groups" (:group-class value-map)
                                          (filter-things-onclick app entity :parent :group))
            (thing-entry-action-button-li "join group" (:join-group-class value-map)
                                          (ui/toggle-hide-fn join-group-form-name))
            (thing-entry-action-button-li "timeline" (:timeline-class value-map)
                                          (filter-things-onclick app entity :parent :timeline {:author title}))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs join-group-form-name 1)  ; form id
                                    "join-group-form"   ; form class
                                    join-group-form-input-map
                                    "join group"        ; submit btn text
                                    (submit-form-fn app
                                                    :join-group
                                                    join-group-form-name 
                                                    join-group-form-data
                                                    join-group-form-fields))

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
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get value-map :title)

        ; join group
        join-group-form-name (str "#join-group-form-" thing-id)
        join-group-form-input-map {
          :group/title {:id (str "group-name-" thing-id) :type "text" :text "group name"}
          :group/remark {:id (str "group-remark-" thing-id) :type "text" :text "brief intro"}
        }
        join-group-form-fields {
          :group/title (str "#" (get-in join-group-form-input-map [:group/title :id]))
          :group/remark (str "#" (get-in join-group-form-input-map [:group/remark :id]))
        }
        join-group-form-data {:group/person thing-id}
       ]
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "phone: " (:phone value-map)) 
                                         (str "email: " (:email value-map))))
          (thing-entry-taglines (vector (str "url: " (:url value-map))))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "parents" (:parent-class value-map)
                                          (filter-things-onclick app entity :child :parent))
            (thing-entry-action-button-li "enrollments" (:enrollment-class value-map)
                                          (filter-things-onclick app entity :child :enrollment))
            (thing-entry-action-button-li "assignments" (:assignment-class value-map)
                                          (filter-things-onclick app entity :child :assignment))
            (thing-entry-action-button-li "likes" (:like-class value-map)
                                          (filter-things-onclick app entity :child :like))
            (thing-entry-action-button-li "followers" (:follow-class value-map)
                                          (filter-things-onclick app entity :child :follow))
            (thing-entry-action-button-li "groups" (:group-class value-map)
                                          (filter-things-onclick app entity :child :group))
            (thing-entry-action-button-li "join group" (:join-group-class value-map)
                                          (ui/toggle-hide-fn join-group-form-name))
            (thing-entry-action-button-li "activies" (:activity-class value-map)
                                          (filter-things-onclick app entity :child :activity))
            (thing-entry-action-button-li "timeline" (:timeline-class value-map)
                                          (filter-things-onclick app entity :child :timeline {:author title}))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs join-group-form-name 1)  ; form id
                                    "join-group-form"   ; form class
                                    join-group-form-input-map
                                    "join group"        ; submit btn text
                                    (submit-form-fn app
                                                    :join-group
                                                    join-group-form-name 
                                                    join-group-form-data
                                                    join-group-form-fields))
          ]
          [:div.clearleft]
      ]])))

; thing-entry view for course
(defmethod thing-entry
  :course
  [app thing-type entity override]
  (let [
        login-user (get-in app [:login-user])
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)

        authors (remove nil? 
                  (map #(get % :person/title) 
                    (or (get entity :course/author) (get entity :author))))

        title (get value-map :title)
        content (:content value-map)
        course-type (name (:type value-map))
        url (:url value-map)
        
        ; enroll form
        enroll-form-name (str "#enrollment-form-" thing-id)
        enroll-form-input-map {
          :enrollment/person {:id (str "enroll-person-" thing-id) :type "text" :text (:person/title login-user)}
          :enrollment/title {:id (str "enroll-title-" thing-id) :type "text" :text "remarks"}
        }
        enroll-form-fields {
          :enrollment/person (str "#" (get-in enroll-form-input-map [:enrollment/person :id]))
          :enrollment/title (str "#" (get-in enroll-form-input-map [:enrollment/title :id]))
        }
        enroll-form-data {
          :enrollment/course thing-id
          :enrollment/person (:person/title login-user)
          :enrollment/content (str (:person/title login-user) " enrolls into " title)
          :enrollment/email (:person/email login-user)
          :enrollment/url (str "growingtree.com/enrollment/course/" thing-id)
        } ; peer add-thing :enrollment
      ]
    (.log js/console "course thing value " (pr-str thing-id title value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))

        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "  " content)
                                         (str "  " url)))
          (when-not (empty? authors)
            (thing-entry-taglines (vector (str course-type "  Offered by " authors))))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "lectures" (:lecture-class value-map)
                                          (filter-things-onclick app entity :course :lecture))
            (thing-entry-action-button-li "add lecture" (:add-lecture-class value-map)
                                          (ui/toggle-hide-fn (str ".add-lecture-form")))
            (thing-entry-action-button-li "enrollments" (:enrollment-class value-map)
                                          (filter-things-onclick app entity :course :enrollment))
            (thing-entry-action-button-li "enroll" (:enroll-class value-map)
                                          (ui/toggle-hide-fn (str "#enrollment-form-" thing-id)))
            (thing-entry-action-button-li "likes" (:like-class value-map)
                                          (filter-things-onclick app entity :course :like))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :course :comments))
            (thing-entry-action-button-li "similar courses" (:similar-class value-map)
                                          (filter-things-onclick app entity :course :similar))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs enroll-form-name 1)  ; form id
                                    "enrollment-form"   ; form class
                                    enroll-form-input-map
                                    "enroll"        ; submit btn text
                                    (submit-form-fn app
                                                    :enrollment
                                                    enroll-form-name
                                                    enroll-form-data
                                                    enroll-form-fields))
          ]
          [:div.clearleft]
      ]])))


; thing-entry view for enrollment shows enrolled course with progression bar.
(defmethod thing-entry
  :enrollment
  [app thing-type entity override]
  (.log js/console (pr-str "thing-entry :enrollment " entity))
  (let [attendee (:person/title entity)]
    (if attendee  ; if result entity has person, show person enrolls to course.
      (thing-entry-enrollment-person app thing-type entity override)
      (thing-entry-enrollment-course app thing-type entity override))))


; enrollment as course, entity is course.
; {:course/title "flute 101", ... }
(defn thing-entry-enrollment-course
  [app thing-type entity override]
  (let [
        login-user (utils/get-login-user app)
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)

        authors (remove nil? 
                  (map #(get % :person/title) 
                    (or (get entity :course/author) (get entity :author))))
        title (get value-map :title)
        content (:content value-map)
        course-type (name (:type value-map))
        url (:url value-map)
        ; server returns a list of progress, one user only have one progress for one course.
        progress (first (:progress value-map))

         ; add progress form
        progressstep-form-name (str "#progressstep-form-" thing-id)
        progressstep-datalist (map :progressstep/title (:progress/steps progress))
        progressstep-form-input-map {
          :progressstep/title {:id (str "progressstep-title-" thing-id) :type "list" :datalist progressstep-datalist}
          :progressstep/author {:id (str "progressstep-author-" thing-id) :type "text" :text (:person/title login-user)}
          :progressstep/status {:id (str "progressstep-status-" thing-id) :type "select" :select ["25" "50" "75" "100"]}
        }
        progressstep-form-fields {
          :progressstep/title (str "#" (get-in progressstep-form-input-map [:progressstep/title :id]))
          :progressstep/author (str "#" (get-in progressstep-form-input-map [:progressstep/author :id]))
          :progressstep/status (str "#" (get-in progressstep-form-input-map [:progressstep/status :id]))
        }
        progressstep-form-data {
          :progressstep/origin {:db/id (:db/id progress)     ; populate progress id when we have it.
                                :progress/origin thing-id
                                :progress/author (:db/id login-user)
                                :progressstep/author (:db/id login-user)
                                :progress/title (str "progression of " title)}
          :progressstep/start (utils/to-epoch)
        }
      ]
    (.log js/console "course thing value " (pr-str thing-id title authors url))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))

        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "  " content)
                                         (str "  " url)))
          (when-not (empty? authors)
            (thing-entry-taglines (vector (str course-type "  Offered by " authors))))

          (progress-tracker progress)

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "lectures" (:lecture-class value-map)
                                          (filter-things-onclick app entity :course :lecture))
            (thing-entry-action-button-li "add progress" (:progress-class value-map)
                                          (ui/toggle-hide-fn (str "#progressstep-form-" thing-id)))
            (thing-entry-action-button-li "likes" (:like-class value-map)
                                          (filter-things-onclick app entity :course :like))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :course :comments))
            (thing-entry-action-button-li "similar courses" (:similar-class value-map)
                                          (filter-things-onclick app entity :course :similar))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}

            (thing-entry-child-form (subs progressstep-form-name 1)  ; form id
                                    "progressstep-form"   ; form class
                                    progressstep-form-input-map
                                    "add progress step"        ; submit btn text
                                    (submit-form-fn app
                                                    :progressstep  ; tab name
                                                    progressstep-form-name
                                                    progressstep-form-data
                                                    progressstep-form-fields))
          ]
          [:div.clearleft]
      ]])))


; enrollment as attendees enrolls into course, entity is 
; :person/lname + :enrollment/course + :enrollment/progress
; use course action keys(lecture, ) for navigation. thing-type is enrollment.
(defn thing-entry-enrollment-person
  [app thing-type entity override]
  (let [
        login-user (utils/get-login-user app)
        comm (get-in app [:comms :controls])
        
        person-id (:db/id entity)
        person-title (:person/title entity)
        course (:enrollment/course entity)
        course-id (:db/id course)

        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        course-value (merge (thing-value-strip-type course)
                        (actionkeys-class course-id actionkeys)
                        override)

        title (:title course-value)
        content (:content course-value)
        course-type (name (:type course-value))
        course-author (:author course-value)
        url (:url course-value)
        ; server returns a list of progress, one user only have one progress for one course.
        progress (first (:enrollment/progress entity))

         ; add progress form
        progressstep-form-name (str "#progressstep-form-" course-id)
        progressstep-datalist (map :progressstep/title (:progress/steps progress))
        progressstep-form-input-map {
          :progressstep/title {:id (str "progressstep-title-" course-id) :type "list" :datalist progressstep-datalist}
          :progressstep/author {:id (str "progressstep-author-" course-id) :type "text" :text (:person/title login-user)}
          :progressstep/status {:id (str "progressstep-status-" course-id) :type "select" :select ["25" "50" "75" "100"]}
        }
        progressstep-form-fields {
          :progressstep/title (str "#" (get-in progressstep-form-input-map [:progressstep/title :id]))
          :progressstep/author (str "#" (get-in progressstep-form-input-map [:progressstep/author :id]))
          :progressstep/status (str "#" (get-in progressstep-form-input-map [:progressstep/status :id]))
        }
        progressstep-form-data {
          :progressstep/origin {:db/id (:db/id progress)     ; populate progress id when we have it.
                                :progress/origin course-id
                                :progress/author (:db/id login-user)
                                :progressstep/author (:db/id login-user)
                                :progress/title (str "progression of " title)}
          :progressstep/start (utils/to-epoch)
        }
      ]
    (.log js/console "course thing value " (pr-str course-id title course-author url))
    (list
      [:div.thing.link {:id (str (:db/id course-value))}
        (thing-entry-thumbnail thing-type course-value (upvote-onclick app entity))

        [:div.entry.unvoted
          (thing-entry-titles (vector (str person-title " enrolled in " title)))
          (thing-entry-subtitles (vector (str "  " content) (str "  " url)))
          (when course-author
            (thing-entry-taglines (vector (str course-type "  Offered by " (:person/title course-author)))))

          (progress-tracker progress)

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "lectures" (:lecture-class course-value)
                                          (filter-things-onclick app course :course :lecture))
            (thing-entry-action-button-li "likes" (:like-class course-value)
                                          (filter-things-onclick app course :course :like))
            (thing-entry-action-button-li "comments" (:comments-class course-value)
                                          (filter-things-onclick app course :course :comments))
            (thing-entry-action-button-li "similar courses" (:similar-class course-value)
                                          (filter-things-onclick app course :course :similar))
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
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        authors (remove nil? 
                  (map #(get % :person/title) 
                    (or (get entity :lecture/author) (get entity :author))))
        title (:title value-map)
        content (:content value-map)
        url (:url value-map)
        start (-> (get value-map :start) (utils/time-to-string))
        end (-> (get value-map :end) (utils/time-to-string))
       ]
    (.log js/console "lecture thing value " (pr-str authors title content))
    (list
      [:div.thing.link {:id (str thing-id)}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "  " content) 
                                         (str "  " url)))
          (when-not (empty? authors)
            (thing-entry-taglines (vector (str "Offered by " authors))))
          (thing-entry-taglines (vector (str start "  -  " end)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "course" (:course-class value-map)
                                          (filter-things-onclick app entity :lecture :course))
            (thing-entry-action-button-li "questions" (:question-class value-map)
                                          (filter-things-onclick app entity :lecture :question))
            (thing-entry-action-button-li "add question" (:add-question-class value-map)
                                          (ui/toggle-hide-fn (str ".add-question-form")))
            (thing-entry-action-button-li "enrollments" (:enrollment-class value-map)
                                          (filter-things-onclick app entity :lecture :enrollment))
            (thing-entry-action-button-li "likes" (:like-class value-map)
                                          (filter-things-onclick app entity :lecture :like))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :lecture :comments))
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
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        authors (map #(get % :person/title) (get entity :question/author))
        difficulty (get entity :question/difficulty)
        title (:title value-map)
        content (:content value-map)
        url (:url value-map)
        
        assignto-form-name (str "#assignto-form-" thing-id)
        assignto-form-input-map {
          :assignment/person {:id (str "assignto-person-" thing-id) :type "text" :text "person name or group name"}
          :assignment/hint {:id (str "assignto-hint-" thing-id) :type "text" :text "hint"}
          :assignment/priority {:id (str "assignto-priority-" thing-id) :type "text" :text "priority"}
          :assignment/end {:id (str "assignto-end-" thing-id) :type "datetime" :text "due time"}
        }
        assignto-form-fields {
          :assignment/person (str "#" (get-in assignto-form-input-map [:assignment/person :id]))
          :assignment/hint (str "#" (get-in assignto-form-input-map [:assignment/hint :id]))
          :assignment/priority (str "#" (get-in assignto-form-input-map [:assignment/priority :id]))
          :assignment/end (str "#" (get-in assignto-form-input-map [:assignment/end :id]))
        }
        assignto-form-data {:assignment/origin thing-id
                            :assignment/author "rich-dad"   ; XXX hard code
                            :assignment/title (str "based on question of " (get entity :question/title))
                            :assignment/start (utils/to-epoch)
                            :assignment/status :active
                            :assignment/type (get entity :question/type)
                           } ; peer add-thing :assigment
       ]
    (.log js/console "question thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "  " content) 
                                         (str "  " url)))
          (thing-entry-taglines (vector (str "Authored by " authors)
                                        (str "difficulty " difficulty)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "lecture" (:lecture-class value-map)
                                          (filter-things-onclick app entity :question :lecture))
            (thing-entry-action-button-li "assignments" (:assignment-class value-map)
                                          (filter-things-onclick app entity :question :assignment))
            (thing-entry-action-button-li "assign to" (:assignto-class value-map)
                                          (ui/toggle-hide-fn (str "#assignto-form-" thing-id)))
            (thing-entry-action-button-li "similar questions" (:similar-class value-map)
                                          (filter-things-onclick app entity :question :similar))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :question :comments))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs assignto-form-name 1)  ; form id
                                    "assignto-form"   ; form class
                                    assignto-form-input-map
                                    "assign"        ; submit btn text
                                    (submit-form-fn app
                                                    :assignment
                                                    assignto-form-name
                                                    assignto-form-data
                                                    assignto-form-fields))
          ]
          [:div.clearleft]
      ]])))


; thing entry view for assignment
(defmethod thing-entry
  :assignment
  [app thing-type entity override]
  (let [comm (get-in app [:comms :controls])
        ; all sublink class selector with thing-id is defined in actionkeys-class
        thing-id (:db/id entity)
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        
        authors (map #(get % :person/title) (get entity :assignment/author))
        content (get-in value-map [:origin :question/title])
        url (get-in value-map [:origin :question/url])
        hint (get value-map :hint)
        end (-> (get value-map :end) (utils/time-to-string))

        ; for assignment
        assignee (get-in value-map [:person])
        assignee-name (get-in value-map [:person :person/title])
        assignee-id (get-in value-map [:person :db/id])
        ; for answer form
        answer-form-name (str "#answer-form-" thing-id)
        answer-form-input-map {
          :answer/title {:id (str "answer-title-" thing-id) :type "text" :text "answer"}
          :answer/content {:id (str "answer-content-" thing-id) :type "text" :text "reason"}
        }
        answer-form-fields {
          :answer/title (str "#" (get-in answer-form-input-map [:answer/title :id]))
          :answer/content (str "#" (get-in answer-form-input-map [:answer/content :id]))
        }
        answer-form-data {
          :answer/origin thing-id
          :answer/author "rich-son"   ; XXX hard code
          :answer/start (utils/to-epoch)
        }
       ]
    (.log js/console "assignment thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))

        [:div.entry.unvoted
          (thing-entry-clickable-titles assignee-name 
                                        (filter-things-onclick app assignee :child :assignment))

          (thing-entry-subtitles (vector (str "  " content) (str " " url)))
          (thing-entry-taglines (vector (str "hint " hint) (str "due " end)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "question" (:queston-class value-map)
                                          (filter-things-onclick app entity :assignment :question))
            (thing-entry-action-button-li "answers" (:answer-class value-map)
                                          (filter-things-onclick app entity :assignment :answer))
            (thing-entry-action-button-li "submit answer" (:submit-answer-class value-map)
                                          (ui/toggle-hide-fn (str "#answer-form-" thing-id)))
            (thing-entry-action-button-li "related assignments" (:similar-class value-map)
                                          (filter-things-onclick app entity :assignment :similar))
            (thing-entry-action-button-li "likes" (:like-class value-map)
                                          (filter-things-onclick app entity :assignment :like))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :assignment :comments))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs answer-form-name 1)  ; form id
                                    "answer-form"   ; form class
                                    answer-form-input-map
                                    "answer"        ; submit btn text
                                    (submit-form-fn app
                                                    :answer
                                                    answer-form-name
                                                    answer-form-data
                                                    answer-form-fields))
          ]
          [:div.clearleft]
      ]])))


; Answer thing-entry view, datum entity contains thing data value
(defmethod thing-entry
  :answer
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :answer/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get-in value-map [:title])
        content (get value-map :content)
        origin-content (get-in value-map [:origin :assignment/content])
        score (get value-map :score)
        url (get-in value-map [:origin :assignment/url])
        start (-> (get value-map :start) (utils/time-to-string))

        grade-form-name (str "#grade-form-" thing-id)
        grade-form-input-map {
          :grade/score {:id (str "grade-score-" thing-id) :type "text" :text "100"}
          :grade/comments {:id (str "grade-comments-" thing-id) :type "text" :text "comments"}
        }
        grade-form-fields {
          :grade/score (str "#" (get-in grade-form-input-map [:grade/score :id]))
          :grade/comments (str "#" (get-in grade-form-input-map [:grade/comments :id]))
        }
        grade-form-data {
          :grade/origin thing-id
          :grade/author "rich-dad"   ; XXX hard code
          :grade/start (utils/to-epoch)
        } ; peer add-thing :grade
       ]
    (.log js/console "answer thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-subtitles (vector (str "  " content) (str "  " origin-content)))
          (thing-entry-taglines (vector (str "submitted at : " start)))
          (thing-entry-titles (vector score))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "assignment" (:assignment-class value-map)
                                          (filter-things-onclick app entity :answer :assignment))
            (thing-entry-action-button-li "grade" (:grade-class value-map)
                                          (ui/toggle-hide-fn (str "#grade-form-" thing-id)))
            (thing-entry-action-button-li "similar answers" (:similar-class value-map)
                                          (filter-things-onclick app entity :answer :similar))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :answer :comments))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs grade-form-name 1)  ; form id
                                    "grade-form"   ; form class
                                    grade-form-input-map
                                    "grade"        ; submit btn text
                                    (submit-form-fn app
                                                    :grade
                                                    grade-form-name
                                                    grade-form-data
                                                    grade-form-fields))
          ]
          [:div.clearleft]
      ]])))

; comments thing-entry view
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
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        thingroot (get value-map :thingroot)
        title (get value-map :title)
        tm (-> (get value-map :txtime) (/ 1000) (utils/time-to-string))
        ago (utils/moment-from (js/moment (get value-map :txtime)) (js/moment))
        offset (/ (- (count (get value-map :navpath)) 2) 2)

        reply-form-name (str "#reply-form-" thing-id)
        reply-form-input-map {
          :comments/title {:id (str "reply-title-" thing-id) :type "text" :text "comments"}
        }
        reply-form-fields {
          :comments/title (str "#" (get-in reply-form-input-map [:comments/title :id]))
        }
        reply-form-data {
          :comments/origin thing-id
          :comments/thingroot thingroot
          :comments/author "rich-son"   ; XXX hard code
        } ; peer add-thing :reply
       ]
    (.log js/console "comments thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map)) :class (str "comment" offset)}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-taglines (vector (str "submitted " ago  " ago at " tm)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :comments :comments))
            (thing-entry-action-button-li "tips" (:tips-class value-map)
                                          (filter-things-onclick app entity :comments :comments))
            (thing-entry-action-button-li "reply" (:comments-class value-map)
                                          (ui/toggle-hide-fn (str "#reply-form-" thing-id)))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs reply-form-name 1)  ; form id
                                    "reply-form"   ; form class
                                    reply-form-input-map
                                    "reply"        ; submit btn text
                                    (submit-form-fn app
                                                    :comments       ; reply of a comment itself is a comment
                                                    reply-form-name
                                                    reply-form-data
                                                    reply-form-fields))
          ]
          [:div.clearleft]
      ]])))


; shoutout thing-entry view
; thingroot is the id of shoutout.
; origin is the origin shoutout id if this shoutout is a re-tweet.
; comments of the shoutout should be tracked by comments object.
; indention is done by offsetX css class.
; :navpath [:child 1 :shoutout 2], :shoutout/contenturl "imgurl/xxx.png", :db/id 1, :shoutout/title "hello world\n"
; :shoutout/author #{{:person/lname "rich", :person/url #{"rich-son.com"}}
(defmethod thing-entry
  :shoutout
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :shoutout/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        thingroot (get value-map :thingroot)
        title (get value-map :title)
        tm (-> (get value-map :txtime) (/ 1000) (utils/time-to-string))
        ago (utils/moment-from (js/moment (get value-map :txtime)) (js/moment))
        offset (/ (- (count (get value-map :navpath)) 2) 2)

        forward-form-name (str "#forward-form-" thing-id)
        forward-form-input-map {
          :shoutout/group {:id (str "group-title-" thing-id) :type "text" :text "forward to group"}
        }
        forward-form-fields {
          :shoutout/group (str "#" (get-in forward-form-input-map [:shoutout/group :id]))
        }
        forward-form-data {
          :shoutout/id thing-id
        }
       ]
    (.log js/console "shoutout thing value " (pr-str value-map))
    (list
      [:div.thing.link {:id (str (:db/id value-map)) :class (str "comment" offset)}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-taglines (vector (str "submitted " ago  " ago at " tm)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "tips" (:tips-class value-map)
                                          (filter-things-onclick app entity :shoutout :shoutout))
            (thing-entry-action-button-li "forward" (:shoutout-class value-map)
                                          (ui/toggle-hide-fn (str "#forward-form-" thing-id)))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs forward-form-name 1)  ; form id
                                    "reply-form"   ; form class
                                    forward-form-input-map
                                    "forward"        ; submit btn text
                                    (submit-form-fn app
                                                    :shoutout       ; forward of a comment itself is a comment
                                                    forward-form-name
                                                    forward-form-data
                                                    forward-form-fields))
          ]
          [:div.clearleft]
      ]])))


; group thing-entry view
(defmethod thing-entry
  :group
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)

        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get value-map :title)
        authors (map #(get % :person/title) (get entity :group/author))

        ; join group form
        join-group-form-name (str "#join-group-form-" thing-id)
        join-group-form-input-map {
          :group/person {:id (str "group-person-" thing-id) :type "text" :text "name"}
          :group/remark {:id (str "group-remark-" thing-id) :type "text" :text "remark"}
        }
        join-group-form-fields {
          :group/person (str "#" (get-in join-group-form-input-map [:group/person :id]))
          :group/remark (str "#" (get-in join-group-form-input-map [:group/remark :id]))
        }
        join-group-form-data {:group/title title}

        ; group activity form
        add-activity-form-name (str "#add-activity-form-" thing-id)
        add-activity-form-input-map {
          :activity/title {:id (str "activity-title-" thing-id) :type "text" :text "activity name"}
          :activity/author {:id (str "activity-author-" thing-id) :type "text" :text "activity author"}
          :activity/content {:id (str "activity-content-" thing-id) :type "text" :text "activity content"}
          :activity/location {:id (str "activity-location-" thing-id) :type "text" :text "activity address"}
          :activity/start {:id (str "activity-start-" thing-id) :type "datetime" :text "start time"}
          :activity/url {:id (str "activity-url-" thing-id) :type "text" :text "activity url"}
        }
        add-activity-form-fields {
          :activity/title (str "#" (get-in add-activity-form-input-map [:activity/title :id]))
          :activity/author (str "#" (get-in add-activity-form-input-map [:activity/author :id]))
          :activity/content (str "#" (get-in add-activity-form-input-map [:activity/content :id]))
          :activity/location (str  "#" (get-in add-activity-form-input-map [:activity/location :id]))
          :activity/start (str "#" (get-in add-activity-form-input-map [:activity/start :id]))
          :activity/url (str "#" (get-in add-activity-form-input-map [:activity/url :id]))
        }
        add-activity-form-data {:activity/origin thing-id} ; activity origin points to group.
       ]
    (.log js/console "groups thing entry " (pr-str thing-id title authors))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-clickable-titles title 
                                        (filter-things-onclick app entity :group :shoutout {:chatbox true}))
          (thing-entry-taglines (vector (str "created by " authors)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "group members" (:group-members-class value-map)
                                          (filter-things-onclick app entity :group :group-members))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :group :comments))
            (thing-entry-action-button-li "join-group" (:groups-class value-map)
                                          (ui/toggle-hide-fn (str "#join-group-form-" thing-id)))
            (thing-entry-action-button-li "activities" (:activity-class value-map)
                                          (filter-things-onclick app entity :group :activity))
            (thing-entry-action-button-li "add-activity" (:add-activity-class value-map)
                                          (ui/toggle-hide-fn (str "#add-activity-form-" thing-id)))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            ; join group
            (thing-entry-child-form (subs join-group-form-name 1)  ; form id
                                    "join-group-form"   ; form class
                                    join-group-form-input-map
                                    "join group"        ; submit btn text
                                    (submit-form-fn app
                                                    :join-group
                                                    join-group-form-name
                                                    join-group-form-data
                                                    join-group-form-fields))

            (thing-entry-child-form (subs add-activity-form-name 1)  ; form id
                                    "add-activity-form"   ; form class
                                    add-activity-form-input-map
                                    "add activity"        ; submit btn text
                                    (submit-form-fn app
                                                    :add-activity
                                                    add-activity-form-name
                                                    add-activity-form-data
                                                    add-activity-form-fields))
          ]
          [:div.clearleft]
      ]])))


; group-members thing-entry
(defmethod thing-entry
  :group-members
  [app thing-type entity override]
  (let [person-type (:person/type entity)]
    (thing-entry app person-type entity override)))


; activity thing entry view
(defmethod thing-entry
  :activity
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :activity/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
                         (actionkeys-class thing-id actionkeys)
                         override)
        title (get value-map :title)
        content (get value-map :content)
        start (-> (get value-map :start) (utils/time-to-string))
        location (get value-map :location)
        url (get value-map :url)
        join-activity-form-name (str "#join-activity-form-" thing-id)
        join-activity-form-input-map {
          :activity/person {:id (str "activity-person-" thing-id) :type "text" :text "name"}
          :activity/remark {:id (str "activity-remark-" thing-id) :type "text" :text "remark"}
        }
        join-activity-form-fields {
          :activity/person (str "#" (get-in join-activity-form-input-map [:activity/person :id]))
          :activity/remark (str "#" (get-in join-activity-form-input-map [:activity/remark :id]))
        }
        join-activity-form-data {:activity/title title}
       ]
    (.log js/console "thing-entry " (pr-str thing-id title url))
    (list
      [:div.thing.link {:id (str (:db/id value-map))}
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-taglines (vector (str content) (str start "  at  " location) (str url)))

          [:ul.flat-list.buttons
            (thing-entry-action-button-li "participants" (:activity-members-class value-map)
                                          (filter-things-onclick app entity :activity :activity-members))
            (thing-entry-action-button-li "join activity" (:activity-class value-map)
                                          (ui/toggle-hide-fn (str "#join-activity-form-" thing-id)))
            (thing-entry-action-button-li "comments" (:comments-class value-map)
                                          (filter-things-onclick app entity :activity :comments))
            (thing-entry-action-button-li "group" (:group-class value-map)
                                          (filter-things-onclick app entity :activity :group))
          ]

          ; hidden divs for in-line forms
          [:div.child-form {:id (str "child-form-" thing-id)}
            (thing-entry-child-form (subs join-activity-form-name 1)  ; form id
                                    "join-activity-form"   ; form class
                                    join-activity-form-input-map
                                    "join activity"        ; submit btn text
                                    (submit-form-fn app
                                                    :join-activity
                                                    join-activity-form-name
                                                    join-activity-form-data
                                                    join-activity-form-fields))
          ]
          [:div.clearleft]
      ]])))


; timeline thing-entry view.
(defmethod thing-entry
  :timeline
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        authors (map #(get % :person/title) (get entity :timeline/author))
        
        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (thing-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type entity)
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
        (thing-entry-thumbnail thing-type value-map (upvote-onclick app entity))
      
        [:div.entry.unvoted
          (thing-entry-titles (vector title))
          (thing-entry-taglines (vector (str "submitted " ago " at " tm)))
          
          [:ul.flat-list.buttons
            (thing-entry-action-button-li "timeline" (:timeline-class value-map)
                                          (filter-things-onclick app entity :timeline :timeline))
            (thing-entry-action-button-li "tips" (:tips-class value-map)
                                          (filter-things-onclick app entity :timeline :timeline))
            
          ]
          [:div.clearleft]
      ]])))


; like entity contains origin.
; {:like/person #{} :like/origin {:course/title "", :course/content "",}}, :db/id 1, :course/type :art},
;  :like/upvote 0, :navpath [:child 1 :like 2], :db/id 17592186045571} 
(defmethod thing-entry
  :like
  [app thing-type entity override]
  (let [
        comm (get-in app [:comms :controls])
        thing-id (:db/id entity)
        
        origin (get entity :like/origin)
        origin-id (:db/id origin)
        origin-type (utils/thing-ident origin)

        ; all sublink class selector with thing-id is defined in actionkeys-class
        actionkeys (origin-type thing-nav-actionkey) ; nav sublinks
        value-map (merge (thing-value-strip-type origin)
                         (actionkeys-class origin-id actionkeys)
                         override)
        title (get value-map :title)
       ]
    (.log js/console "like thing value " (pr-str origin-type title value-map))
    (thing-entry app origin-type origin override)))



; search thing-entry view.
; {:db/id 17592186045442, :search/type "group" :search/origin {:group/author, ...}}
(defmethod thing-entry
  :search
  [app thing-type entity override]
  (let [thing-type (keyword (:search/type entity))
        origin-entity (:search/origin entity)]
    (.log js/console (pr-str "search thing " entity))
    (thing-entry app thing-type origin-entity override)))


;;===========================================================================
; show add comments input box, trigger by thing data emitter [:setup :x 1 :comments]
; form id is the thing-id this comment's origin and thingroot
;;===========================================================================

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(defn chatbox 
  [app comm opts]
  (let [login-user-id (utils/get-login-id app)
        group-id (:shoutout/group opts)
        add-shoutout-fn
          (fn [txt]
            (let [shoutout-data {:shoutout/title txt 
                                 :shoutout/author login-user-id
                                 :shoutout/group group-id
                                 :shoutout/contenturl "imgurl/xxx.png"}]
              (mock-data/add-thing-msg-nav-path :shoutout shoutout-data)))
        ]
    (.log js/console (pr-str "drawing chatbox " opts))
    (list
      [:div.chatbox
        [:a#chat-file-btn.chat-file-btn
          [:i.fa.fa-arrow-circle-o-up
            {:on-click #(put! comm {})}]
        ]
        [:div.chat-message-form
          [:form.message-form
            [:a.emo-menu
              [:img {:src "https://slack.global.ssl.fastly.net/20655/img/emoji_menu_button.png"
                     :width "16px;" :height "16px;"}]
            ]
            [:textarea#chat-input.chat-input
              (merge
                {;:on-focus #(put! comm [:user-message-focused])
                 :on-key-up #(if (= (.. % -which) 13) ; 13 is return or enter.
                              (let [txt (.. % -target -value)]
                                (dommy/set-value! (sel1 :#chat-input) "")
                                (put! comm (add-shoutout-fn txt))))
                }
                (when-not (:input-focused? opts) {:value (:input-value opts)}))
            ]
          [:button.chat-post.hidden {:on-click #(put! comm (add-shoutout-fn "fake"))} "Post"]]
        ]])
  ))
