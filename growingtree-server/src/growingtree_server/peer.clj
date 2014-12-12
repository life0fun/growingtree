(ns growingtree-server.peer
  (:require [clojure.string :as str]
            [clojure.pprint :refer :all])
  (:import [java.io FileReader]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis]) ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format]
            [clj-time.local])
  (:require [io.pedestal.service.log :as log]
            [growingtree-server.datomic.dda :as dda])  ; datomic data accessor
  )


;; datomic EntityMap
; query result is datomic entity, we touch the entity to get all entity entries.
; server route interceptor converts datomic entity to json string to sent to client.
; when json-response coerce datomic entity to json string, it recursively resolve each
; attribute. this will cause infinit loop when entity has bi-directional reference attributes.
; to avoid that, we need to only project none circular ref entity attributes.


; after create db with uri, create schema first.
(defn init-db
  []
  (dda/create-schema))


; project non-circular ref attrs of datomic entityMap to simple map to avoid infinit loop in json stringify
; usage: data (map (partial entity->map coursekeys) courses)
; Deprecated !
(defn entity->map
  "given a list of attributes in convert-data, find their values from entity and put as map attr"
  [entity-keys entity]
  (reduce (fn [m attr]
            (if (keyword? attr)
              (if-let [v (attr entity)]
                (assoc m attr v)
                m)
              (let [[attr conv-fn] attr]
                (if-let [v (attr entity)]
                  (assoc m attr (conv-fn v))
                  m))))
          {}
          entity-keys))



;;===========================================================================
; get user, if signup, create a new one, other wise, validate existing one.
;;===========================================================================
; details {:body [:login [:login 0 :login]], :data {:type :login, :name "rich-son", :pass "rich"}}
(defn get-user
  [details]
  (log/info "get-user " details)
  (let [user (dda/find-user details)]
    (log/info "peer get-user result " user)
    user))


;;===========================================================================
; service  (peer/get-things thing-type path (:post-data params))
; qpath is the :path in request body, and real :path and :qpath in details dict.
; params-nav-path is nav-path, from get-filter-things-msg, {:body [:filter-things []] :data {}}
; return data is thing-vec. [{tuple1} {tuple2}]
;;===========================================================================
; defmulti needs a name and a dispatch fn, which rets value for dispatching
(defmulti get-things
  (fn [thing-type qpath nav-path]
    thing-type))


(defmethod get-things
  :default
  [type qpath nav-path]
  (log/info "get-things default " type " qpath " qpath " nav-path " nav-path))


; (defmethod get-things
;   :login
;   [type qpath nav-path]
;   (let [user (get-user nav-path)]
;     user))

(defmethod get-things
  :parent
  [type qpath nav-path]
  (let [parents (dda/find-parent qpath)]
    parents))


(defmethod get-things
  :child
  [type qpath nav-path]
  (let [children (dda/find-child qpath)]
    children))


(defmethod get-things
  :course
  [type qpath nav-path]
  (let [courses (dda/find-course qpath nav-path)]
    courses))


(defmethod get-things
  :lecture
  [type qpath nav-path]
  (let [lectures (dda/find-lecture qpath)]
    lectures))


(defmethod get-things
  :question
  [type qpath nav-path]
  (let [questions (dda/find-question qpath)]
    questions))


(defmethod get-things
  :assignment
  [type qpath nav-path]
  (let [assignments (dda/find-assignment qpath)]
    assignments))


(defmethod get-things
  :answer
  [type qpath nav-path]
  (let [answers (dda/find-answer qpath)]
    answers))

(defmethod get-things
  :comments
  [type qpath nav-path]
  (let [comments (dda/find-comments qpath)]
    comments))


(defmethod get-things
  :enrollment
  [type qpath nav-path]
  (let [enrollments (dda/find-enrollment qpath)]
    enrollments))

(defmethod get-things
  :progress
  [type qpath nav-path]
  (let [progress (dda/find-progress qpath nav-path)]
    progress))

(defmethod get-things
  :group
  [type qpath nav-path]
  (let [groups (dda/find-group qpath)]
    groups))


(defmethod get-things
  :group-members
  [type qpath nav-path]
  (let [members (dda/find-group-members qpath)]
    members))


(defmethod get-things
  :activity
  [type qpath nav-path]
  (let [activities (dda/find-activity qpath)]
    activities))

(defmethod get-things
  :activity-members
  [type qpath nav-path]
  (let [members (dda/find-activity-members qpath)]
    members))


(defmethod get-things
  :like
  [type qpath nav-path]
  (let [likes (dda/find-like qpath)]
    likes))


; qpath is [:all 0 :timeline] for request all, and :qpath inside nav-path dict.
; :path [:all 0 :timeline]
; :nav-path {:path [:all 0 :timeline], :qpath [], :author "rich-dad"}}}]
(defmethod get-things
  :timeline
  [type qpath nav-path]
  (let [timeline (dda/find-timeline qpath nav-path)]
    timeline))


(defmethod get-things
  :search
  [type qpath nav-path]
  (let [search (dda/search qpath nav-path)]
    search))


; get thing by title, we can get the entity by id directly.
; qpath [:lecture 17592186045430 :title]
(defmethod get-things
  :title
  [type qpath nav-path]
  (let [thing-id (second (reverse qpath))
        entity (dda/find-entity-by-id thing-id qpath)]
    (log/info "peer get title --> " qpath entity)
    [entity]))


; get thing nav-path by field, get author
; qpath [:author 17592186045430 :author]
; entity's :navpath [:person 17592186045419 :person 17592186045419]
(defmethod get-things
  :author
  [type qpath nav-path]
  (let [thing-id (second (reverse qpath))
        ref-ids (dda/find-entity-attr thing-id "author")
        entities (map #(dda/find-entity-by-id % [:person % :person]) ref-ids)
       ]
    (log/info "peer get author --> " qpath entities)
    entities))

;;======================================================
;; add things multi method
;; watch non ref-ed attr entity. :transact/bad-data Unable to resolve entity: rich
;;======================================================
(defmulti add-thing
  (fn [type details]
    type))

(defmethod add-thing
  :default
  [type details]
  (log/info "XXX add-thing default " type details))

; add family
(defmethod add-thing
  :parent
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-parent details)
       ]
    result))

(defmethod add-thing
  :child
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-child details)
       ]
    result))

(defmethod add-thing
  :family
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-family details)
       ]
    result))

;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"}
(defmethod add-thing
  :course
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-course details)
       ]
    result))

;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"}
(defmethod add-thing
  :lecture
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-lecture details)
       ]
    result))


;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"}
(defmethod add-thing
  :question
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-question details)
       ]
    result))

; add assignment triggered by :assignto, and key is :assign, to diff from assignment form.
(defmethod add-thing
  :assignment
  [type details]
  (let [author (:author details)
        result (dda/create-assignment details)
       ]
    result))

; add an answer
(defmethod add-thing
  :answer
  [type details]
    (let [author (:author details)
        result (dda/create-answer details)
        ]
    result))

(defmethod add-thing
  :grade
  [type details]
  (log/info "peer add thing grade " type " details " details)
  (let [author (:author details)
        result (dda/create-grade details)
        ]
    result))


(defmethod add-thing
  :comments
  [type details]
  (let [author (:author details)
        result (dda/create-comments details)
        ]
    result))

;  :group {:group/person 1, :group/title "a", :group/email "b", :group/url "c"}
(defmethod add-thing
  :add-group
  [type details]
  (let [result (dda/add-group details)
       ]
    result))

; join group, just details map has :db/id value
(defmethod add-thing
  :join-group
  [type details]
  (let [result (dda/join-group details)
       ]
    result))

(defmethod add-thing
  :activity
  [type details]
  (let [result (dda/create-activity details)
       ]
    result))

; create like thing
(defmethod add-thing
  :like
  [type details]
  (let [author (:author details)
        result (dda/create-like details)
       ]
    result))


; create enrollment thing
(defmethod add-thing
  :enrollment
  [type details]
  (let [author (:author details)
        result (dda/create-enrollment details)
       ]
    result))

; create progress thing
(defmethod add-thing
  :progressstep
  [type details]
  (let [result (dda/create-progress details)]
    result))
