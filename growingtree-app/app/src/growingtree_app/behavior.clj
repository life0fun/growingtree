(ns ^:shared growingtree-app.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msg]
              [clojure.set :as set]
              [chat-client.util :as util]))

;; While creating new behavior, write tests to confirm that it is
;; correct. For examples of various kinds of tests, see
;; test/growingtree_app/behavior-test.clj.

;; transforms

; msg map contains 
(defn course-transform
  [_ message]
  (:name message))  ; ret :name key from course msg map to set state val.


; describe app model nodes, render converts them to dom nodes.
; can also describe what transforms fn the node can do, and render will
; trigger those event upon UI event.
(defn init-app-model [_]
  [{:course
      {:lecture {}}  ; a div list of lectures under course
    :parent
      {:child {}}  ; shall have a div list of children
   }])


(defn set-value-transform [old-value message]
  (:value message))


;; Data Model Paths: store all global mutable states.
;; [:courselist] - a list of all courses
;; [:course] - current selected courses
;; [:course :lecturelist] - a list of lectures belongs to the course
;; [:lecturelist] - a list of lectures of all course
;; [:lecture] - current selected lecture
;; [:inbound :received] - Received inbound messages
;; [:outbound :sent] - Sent outbound messages
;; [:outbound :sending] - Pending message that effect looks to send
;; [:parent] - current parent
;; [:parent :child] - current parent's children
   
;; App Model Paths:
;; [:course :name] - display current course name
;; [:course :form :*] - a div of course list
;; [:lecture :name] - display current lecture name
;; [:lecture :form :*] - a div of lecture list
;; [:assignment :name] - current assignment name
;; [:assignment :form :*] - a div of list of assignment
;; [:parent :name] - current parent name
;; [:parent :form :*] - a div of parent list
;; [:child :name] - Displays the current child name
;; [:child :form :*] - a div of child list

; client app is a record that impls Receiver protocol.
(def growingtree-app
  {:version 2   ; use current version 2
   :debug true
   :transform [[:set-course [:course] course-transform]]
   :emit [{:init init-app-model}  ; one time emit app-model for render to create app dom
          [#{[:parent :*]
             [:course :*]} (app/default-emitter [])]
          [#{[:pedestal :debug :dataflow-time]
             [:pedestal :debug :dataflow-time-max]
             [:pedestal :debug :dataflow-time-avg]} (app/default-emitter [])]]})


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
