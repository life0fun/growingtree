(ns ^:shared growingtree-app.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msg]
              [clojure.set :as set]))

;; While creating new behavior, write tests to confirm that it is
;; correct. For examples of various kinds of tests, see
;; test/growingtree_app/behavior-test.clj.

; first, top level data path. Data path location is for msg/topic.
; Each path location is a ref mutable. If design data model to have only one root,
; all updates to nested attrs will need to use (assoc todo :task (assoc (:tasks todos)))
; msg is always a map contains all keys. Each key value can be another map.

;; transforms

; msg map cont
(defn course-transform
  [_ message]
  (:name message))  ; ret :name key from course msg map to set state val.


;; emitter to report changes, and attach transforms to template events.

; emit init app model emtter only once when app starts. emitter will emit to create all nodes.
; the most important things is to define transform fn that can be triggered
; by render upon UI events on this portion.
(defn init-app-model [_]
  [{:course
      {:filtered {}  ; a map of filtered course
       :form
         {:set-course  ; actions with [:course :form :set-course]
           {:transforms    ; render binds transform fn to pick course list click event
            {:set-course [{msg/topic [:course] (msg/param :course) {}}]}}}}}])


; user can interact with sidebar, so setup interaction on sidebar
(defn init-sidebar-emitter [inputs]
  "set up message emitter for sidebar nav UI interaction"
  [[:transform-enable [:course :filtered] 
                       :set-course-filter [{msg/type :set-course-filter 
                                            msg/topic [:course :filtered]
                                            (msg/param :filtered) {}}]]
  ])


(defn set-value-transform [old-value message]
  (:value message))

(def sort-order
  {[:course] 0
   [:lecture] 1})

; when set course, all transform actions in course form templates close over current course name.
(defn set-course-delta
  "emit a vector of vectors of transform deltas that render use to set the course"
  [courses]
  [[:node-create [:course :filtered] :map]    ; create course node
   [:value [:course :filtered] courses]
   [:transform-enable [:course :filtered] ; click on any lecture under the course
                      :set-course-lecture [{msg/topic [:course :filtered]
                                            (msg/param :filtered) {}}]]
  ])


; set course filter value with the new value from message
(defn course-filter-transform
  [old-value message]
  (:filtered message))  ; key in message is :filter


; upon any changes in *data model* in course node subtree, emit those deltas
(defn course-emit
  [inputs]
  (reduce (fn [alldeltas [input-path new-value]]
            (concat alldeltas     ; each is a vec, concat to top vector of vector
              (case input-path
                [:course] (set-course-delta new-value))))
          []
          (sort-by #(get sort-order (key %))
                   ;; Alternatively this could be done by pulling
                   ;; :added and :updated sets from inputs.
                   (merge (d/added-inputs inputs) (d/updated-inputs inputs)))))


;; Data Model Paths: store all global mutable states.
;; [:parent] - current parent
;; [:child] - current child
;; [:parent :filter] - parent filter, {(msg/param :filter) {:key :value}}
;; [:child :filter] - parent filter, {(msg/param :filter) {:key :value}}
;; [:course] - current selected courses
;; [:course :filter] - filter, {(msg/param :filter) {:key :value}}
;; [:lecture] - current selected lecture
;; [:lecture :filter] - filter, {(msg/param :filter) {:key :value}}

;; [:inbound :received] - Received inbound messages
;; [:outbound :sent] - Sent outbound messages
;; [:outbound :sending] - Pending message that effect looks to send
   
;; App Model Paths: represent div in template. linking UI action handle to 
;; [:course :name] - create node to store current course, then set transform-enable fn for form template 
;;                   under course, and transform closure fn defined here closed over current course name.
;; [:course :form :*] - a form div in template contain a list of course
;; [:lecture :name] - create node to store current lecture.
;; [:lecture :form :*] - a form  template div of lecture list
;; [:assignment :name] - current assignment name
;; [:assignment :form :*] - a div of list of assignment
;; [:parent :name] - current parent name
;; [:parent :form :*] - a div of parent list
;; [:child :name] - Displays the current child name
;; [:child :form :*] - a div of child list


; client app dataflow is a record that impls Receiver protocol.
(def growingtree-app
  {:version 2   ; use current version 2
   :debug true
   :transform [[:set-course [:course] course-transform]
               [:set-course-filter [:course :filtered] course-filter-transform]
              ]
   :emit [{:init init-app-model}
          ;{:init init-sidebar-emitter}
          [#{[:parent :*]
             [:course :*]} (app/default-emitter [])]

          [#{[:course] [:course :filtered]} course-emit]

          [#{[:pedestal :debug :dataflow-time]
             [:pedestal :debug :dataflow-time-max]
             [:debug [:pedestal :**] swap-transform]
             [:pedestal :debug :dataflow-time-avg]
            } (app/default-emitter [])]
         ]
  })


;; Once this behavior works, run the Data UI and record
;; rendering data which can be used while working on a custom
;; renderer. Rendering involves making a template:
;;
;; app/templates/growingtree-app.html
;;
;; slicing the template into pieces you can use:
;;
;; app/src/growingtree_app/html_templates.cljs
;;
;; and then writing the rendering code:
;;
;; app/src/growingtree_app/rendering.cljs

(comment
  ;; The examples below show the signature of each type of function
  ;; that is used to build a behavior dataflow.

  ;; transform
  (defn example-transform [old-state message]
    ;; returns new state
    )

  ;; derive
  (defn example-derive [old-state inputs]
    ;; returns new state
    )

  ;; emit
  (defn example-emit [inputs]
    ;; returns rendering deltas
    )

  ;; effect
  (defn example-effect [inputs]
    ;; returns a vector of messages which effect the outside world
    )

  ;; continue
  (defn example-continue [inputs]
    ;; returns a vector of messages which will be processed as part of
    ;; the same dataflow transaction
    )

  ;; dataflow description reference
  {:transform [[:op [:path] example-transform]]
   :derive    #{[#{[:in]} [:path] example-derive]}
   :effect    #{[#{[:in]} example-effect]}
   :continue  #{[#{[:in]} example-continue]}
   :emit      [[#{[:in]} example-emit]]}
  )
