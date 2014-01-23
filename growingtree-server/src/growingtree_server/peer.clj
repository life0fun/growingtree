(ns growingtree-server.peer
  (:require [clojure.string :as str]
            [clojure.pprint :refer :all])
  (:import [java.io FileReader]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis]) ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format]
            [clj-time.local])
  (:require [growingtree-server.datomic.dda :as dda])  ; datomic data accessor
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
(defn get-user
  [details]
  (prn "peer get-user details " details)
  (dda/find-user details))


;;===========================================================================
;; get all things multi method, return data is thing-vec. [{tuple1} {tuple2}]
;; (defmulti name docstring? attr-map? dispatch-fn & options)
;;===========================================================================
; defmulti needs a name and a dispatch fn, which rets value for dispatching
(defmulti get-things
  (fn [thing-type qpath details] 
    thing-type))


(defmethod get-things
  :parent
  [type qpath details]
  (let [parents (dda/find-parent qpath)]
    (prn "peer dda find parent " qpath parents)
    parents))


(defmethod get-things
  :child
  [type qpath details]
  (let [children (dda/find-child qpath)]
    (prn "peer dda find children " qpath children)
    children))


(defmethod get-things
  :course
  [type qpath details]
  (let [courses (dda/find-course qpath)]
    (prn "peer get courses " qpath courses)
    courses))


(defmethod get-things
  :lecture
  [type qpath details]
  (let [lectures (dda/find-lecture qpath)]
    (prn "peer get lectures " qpath lectures)
    lectures))


(defmethod get-things
  :question
  [type qpath details]
  (let [questions (dda/find-question qpath)]
    (prn "peer get questions " qpath questions)
    questions))


(defmethod get-things
  :assignment
  [type qpath details]
  (let [assignments (dda/find-assignment qpath)]
    (prn "peer get assignments " qpath assignments)
    assignments))


(defmethod get-things
  :answer
  [type qpath details]
  (let [answers (dda/find-answer qpath)]
    (prn "peer get answers " qpath answers)
    answers))

(defmethod get-things
  :comments
  [type qpath details]
  (let [comments (dda/find-comments qpath)]
    (prn "peer get comments " qpath comments)
    comments))


(defmethod get-things
  :enrollment
  [type qpath details]
  (let [enrollments (dda/find-enrollment qpath)]
    (prn "peer get enrollments " qpath enrollments)
    enrollments))


(defmethod get-things
  :like
  [type qpath details]
  (let [likes (dda/find-like qpath)]
    (prn "peer get likes " qpath likes)
    likes))


(defmethod get-things
  :timeline
  [type qpath details]
  (let [timeline (dda/find-timeline qpath details)]
    (prn "peer get timeline " qpath timeline)
    timeline))


(defmethod get-things
  :search
  [type qpath details]
  (let [search (dda/search qpath details)]
    (prn "peer fulltext search " qpath search)
    search))


; get thing details by field, by title
; qpath [:lecture 17592186045430 :title]
(defmethod get-things
  :title
  [type qpath details]
  (let [thing-id (second (reverse qpath))
        entity (dda/find-entity-by-id thing-id qpath)]
    (prn "peer get title --> " qpath entity)
    [entity]))



; get thing details by field, get author
; qpath [:author 17592186045430 :author]
; entity's :navpath [:person 17592186045419 :person 17592186045419]
(defmethod get-things
  :author
  [type qpath details]
  (let [thing-id (second (reverse qpath))
        ref-ids (dda/find-entity-attr thing-id "author")
        entities (map #(dda/find-entity-by-id % [:person % :person]) ref-ids)
       ]
    (prn "peer get author --> " qpath entities)
    entities))

;;======================================================
;; add things multi method
;; watch non ref-ed attr entity. :transact/bad-data Unable to resolve entity: rich
;;======================================================
(defmulti add-thing
  (fn [type details]
    type))


; add family
(defmethod add-thing
  :parent
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-parent details)
       ]
    ;(prn "peer add parent " type " details " details " result " result)
    result))


(defmethod add-thing
  :child
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-child details)
       ]
    ;(prn "peer add child " type " details " details " result " result)
    result))

(defmethod add-thing
  :family
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-family details)
       ]
    ;(prn "peer add family " type " details " details " result " result)
    result))


;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"} 
(defmethod add-thing
  :course
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-course details)
       ]
    ;(prn "peer add thing " type " author " author " details " details " result " result)
    result))


;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"} 
(defmethod add-thing
  :lecture
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-lecture details)
       ]
    ;(prn "peer add thing " type " author " author " details " details " result " result)
    result))


;; type:newthing {:action :newthing, :type "course", :title "", :content "", :author "rich"} 
(defmethod add-thing
  :question
  [type details]
  (let [author (:author details) ; thing-type value is json string.
        result (dda/create-question details)
       ]
    ;(prn "peer add thing " type " details " details " result ")
    details))

; watch non ref-ed attr entity. :transact/bad-data Unable to resolve entity: rich
(defmethod add-thing
  :assignment
  [type details]
  (let [author (:author details)
        result (dda/create-assignment details)
        ]  
    (newline)
    ;(prn "peer add thing " type " details " details " result " result)
    result))

; add an answer
(defmethod add-thing
  :answer
  [type details]
  (let [author (:author details)
        result (dda/create-answer details)
        ]  
    (newline)
    ;(prn "peer add thing " type " details " details " result " result)
    result))


(defmethod add-thing
  :grade
  [type details]
  (prn "peer add thing grade " type " details " details)
  (let [author (:author details)
        result (dda/create-grade details)
        ]  
    (newline)
    ;(prn "peer add thing " type " details " details " result " result)
    result))


; create like thing
(defmethod add-thing
  :comments
  [type details]
  (let [author (:author details)
        result (dda/create-comments details)
        ]  
    (newline)
    ;(prn "peer add thing " type " result " result " details " details )
    result))


; create like thing
(defmethod add-thing
  :like
  [type details]
  (let [author (:author details)
        result (dda/create-like details)
        ]  
    (newline)
    ;(prn "peer add thing " type " details " details " result " result)
    result))


; create enrollment thing
(defmethod add-thing
  :enrollment
  [type details]
  (let [author (:author details)
        result (dda/create-enrollment details)
        ]  
    (newline)
    ;(prn "peer add thing " type " result " result " details " details )
    result))

