(ns ^:shared growingtree-app.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msgs]
              [clojure.set :as set]
              ; include emitter
              [growingtree-app.emitter :as emitter]
              [growingtree-app.effect :as effect]))

;; While creating new behavior, write tests to confirm that it is
;; correct. For examples of various kinds of tests, see
;; test/growingtree_app/behavior-test.clj.

; first, top level data path. Data path location is for msgs/topic.
; Each path location is a ref mutable. If design data model to have only one root,
; all updates to nested attrs will need to use (assoc todo :task (assoc (:tasks todos)))
; msg is always a map contains all keys. Each key value can be another map.


; when path node in data model gets value, it was already parsed to cljs.core ds by
; response-handler. We store cljs ds into data model path node. 
; data model can directly use the data structure. We only need one time parse at response-handler.
;
; From tracking map, you can always access data model using 
;   (get-in input [:new-model :path])
;   (get-in input [:old-model :path])
;
(comment
  (defn example-transform [old-state message]
    (returns new state))

  (defn example-derive [old-state inputs]
    (returns new state))

  (defn example-emit [inputs]
    (returns rendering deltas))

  (defn example-effect [inputs]
    (returns a vector of messages which effect the outside world ))

  (defn example-continue [inputs]
    (returns a vector of msg that will be processed as part of this dataflow transaction))

  ;; dataflow description reference
  {:transform [[:message-type [:path] example-transform]]
   :derive    #{[#{[:in]} [:path] example-derive]}
   :effect    #{[#{[:in]} example-effect]}
   :continue  #{[#{[:in]} example-continue]}
   :emit      [[#{[:in]} example-emit]]}
  )


;;==================================================================================
;; get data from nodes in information model
;;==================================================================================
(defn get-login-name
  [inputs]
  ;(.log js/console "get login " inputs)
  (get-in inputs [:new-model :login :name]))


;;==================================================================================
;; transforms
;; transform-fn gets 2 args, old-value and message, ret value used to set new value.
;; message is PersistentArrayMap, which echoed back from transform-enabled [topic, params]
;; when messages sent to cljs, it becomes PersistentVector, when sending back, becomes
;; PersistentArrayMap again. Hence you can do (:details messages) here.
;;==================================================================================

; user login, store user name into [:login :name]
(defn set-login
  [oldv messages]  ; messages is PersistentArrayMap, an array of map
  (let [login-name (:login-name messages)
        login-pass (:login-pass messages)]
    (.log js/console "user logged in " login-name " pass " login-pass messages)
    login-name))


(defn set-login-modal
  [oldv messages]
  (let [login-name (:login-name messages)
        login-pass (:login-pass messages)]
    (.log js/console "set nav login modal " login-name " pass " login-pass)
    login-name))    


(defn set-create-modal
  [oldv messages]
  (let [newthing-type (:type messages)]
    (.log js/console "set create newthing modal " newthing-type)
    newthing-type))


; extract the user clicked nav type from msg, and store it in [:nav :type] node
(defn set-nav-type
  [_ messages]
  (.log js/console (str "set-nav-type " messages))
  (:type messages))  ; value stored inside thing :type key


; set thing type after nav to new type upon sidebar click
(defn set-thing-type
  [_ messages]
  (:type messages))  ; value stored inside :category key


; called by xhr respond handler, store list of all things data structure into map.
; we store cljs.core.Vector data structure into path node. when clj get the ds out,
; no more parse needed. We only need one parse at response-handler.
(defn set-all-things
  "store list of all things vec in [:all :type] node under each type key"
  [oldv messages]
  (let [type (:type messages)    ; thing type 
        things-vec (:data messages)]  ; cljs.core.PersistentVector [{thing1} {thing2}]
    (.log js/console "all-transformer set [:all] for " type things-vec)
    (assoc-in oldv [type] things-vec)))  ; now vector is stored in [:all :parents]


; Path is [:action :setup :thing-type thingid], stores details map {:action :assign :id 12}
; user clicked assign link, show assign action bar, enable transform for content
(defn setup-assign
  "after displaying actionbar, store at [:action :setup :type id] the detail map"
  [oldv messages]
  (let [details (:details messages)]  ; details is {:action :create-assignment :id 12}
    (.log js/console (str "setup assign details " details))
    details))

; Path is [:action :submit :thing-type thingid], stores details map {:action :assign :id 12}
(defn submit-assign
  "actionbar form submitted, store and write to effect queue"
  [oldv messages]
  (let [details (:details messages)] ; details is {:action :create-assignment :id xx}
    (.log js/console (str "submitted assign details " details))
    details))


; newthing btn clicked, transform action setup newthing node in info model
; each key val in details value map will create a new node under action setup newthing.
(defn setup-newthing
  "create new thing btn clicked, details should contains :user"
  [oldv messages]
  (let [details (:details messages)]
    (.log js/console (str "newthing btn clicked " details))
    details))

(defn submit-newthing
  "create new thing btn clicked "
  [oldv messages]
  (let [details (:details messages)]
    (.log js/console (str "submit newthing " details))
    details))

; create thing by type
(defn create-thing-type
  "create thing by type submitted"
  [oldv messages]
  (let [details (:details messages)]
    (.log js/console (str "create thing type " details))
    details))


; use navigate from things
; messages {:topic [:xpath :parents 17592186045498 :children], :details {} }
; details {:next-entity :child, :filterpath (:parents 17592186045498)} 
; old value is detail map {:next-entity :child, :filterpath (:parents 17592186045498)}
(defn set-xpath
  [oldv messages]
  (let [details (:details messages)]
    (.log js/console (str "set xpath transform " oldv details))
    details))

(defn set-xdata
  [oldv messages]
  (let [type (:type messages)    ; thing type 
        things-vec (:data messages)]
    (.log js/console "set-xdata " things-vec)
    things-vec))


;;==================================================================================
;; derive dataflow, derive fn got 2 args, old value, and tracking map
;; [inputs output-path derive-fn input-spec] ;; input-spec is optional
;; derive-fn gets the old state of the *output* state, and the tracking map, map, single-val
;;==================================================================================

; derived fn to compute filtered things, illustration for now.
; (defn compute-filtered-course
;   [_ inputs]
;   (let [filter-type (get-in inputs [:new-model :filter :course])
;         courses (get-in inputs [:new-model :filtered :course])]
;     (if (= filter-type :any)
;       courses
;       (into {} (filter (fn [[course-id course]]
;                           (or
;                             (and (= filter-type :completed) (:completed course))
;                             (and (= filter-type :active) (not (:completed course)))))
;                        courses)))))


; clear all things by type upon nav type change, as we will restful request from service.
; input specifier defines what inputs var is, i.e., what upstream inputs are
(defn refresh-all-things
  "remove stale list of things by type upon user click new thing type"
  [oldv inputs]  ; inputs is single value of upstream nav type.
  (let [oldtype (get-in inputs [:old-model :nav :type])
        newtype (get-in inputs [:new-model :nav :type])]
    (.log js/console (str "all things refresh from " oldtype " to " newtype " val " oldv))
    (if oldv
      ; ret the new map to be stored in [:all] path node, which is oldv
      (assoc-in oldv [oldtype] []))))



;;==================================================================================
;; continue flow allow you send a vector of msg within the same dataflow transaction
;; so you can send transform msg to update model within the closure of upstream changes.
;;  :continue  #{[#{[:in]} example-continue]}
;;  (defn example-continue [inputs]
;;    (returns a vector of msg that will be processed as part of this dataflow transaction))
;;==================================================================================



;; all mutable type are clj maps. use (gensym prefix-string) to generate unique id as 
;; map key to nest a list of maps into outer big map !

;; nav function. store current nav things, :parent, :child, :course, :lecture.
;; [:nav :parent|:child|:course|:lecture] - current things

;; all function. list of all things. 
;; [:all :parent|:child|:course|:lecture] - all things list

;; filter type function. filter type of each things
;; [:filter :parent|:child|:course|:lecture] - filter type of each thing

;; filtered function. filtered list of  type for each type of things
;; [:filtered :parent|:child|:course|:lecture] - filtered list of each thing

   
;; App Model Paths: represent div in template. linking UI action handle to 

; client app dataflow is a record that impls Receiver protocol.
(def growingtree-app
  {:version 2   ; use current version 2
    :debug true
    :transform [
                [:login [:login :name] set-login]
                
                ; UI event sent to outbound node, then derive to [:nav :type] node
                [:set-nav-type [:nav :type] set-nav-type]

                ; set-all to store all type things list into all type map
                [:set-all-things [:all] set-all-things]

                ; modal handling
                [:login-modal [:nav :login-modal] set-login-modal]
                [:create-modal [:nav :create-modal] set-create-modal]

                ; assign action setup transform
                [:assign [:setup :assign :* :*] setup-assign]
                [:assign [:submit :assign :* :*] submit-assign]

                ; new thing setup, each key in the value map will create a new node.
                [:newthing [:setup :newthing] setup-newthing]
                [:newthing [:submit :newthing] submit-newthing]

                ; create thing page handler
                [:creatething [:create :*] create-thing-type]

                ; xpath records navigation path and xdata stores query result.
                [:set-xpath [:xpath :**] set-xpath]
                [:set-xdata [:xdata :**] set-xdata]

               ]

    :derive #{
            ;; derive fn triggered by data change, not by inject data into node!!
            ;; input specifier :single-val :map :default(tracking map)
            ;; the oldv to derive fn varies based on input specifier. 
            ;; can be old val or tracking map

             ; upon user click new thing type, clear old thing list
             [#{[:nav :type]} [:all] refresh-all-things]  ; inputs type as single-val
            }

    ; effect fn takes msg and ret a vec of msg consumed by services-fn to xhr to back-end.
    ; the input path node for effect is recursively match from top. 
    :effect #{
              ; user clicked nav, request all things by type
              [#{[:nav :type]} effect/request-all-things :single-val]
              
              ; submit action effect, action is from topic and send details to backend.
              [#{[:submit]} effect/post-submit-thing :mode :always]

              ; create thing type change [:create :course]
              [#{[:create :*]} effect/post-create-thing :mode :always]

              ; user clicked actionbar links
              [#{[:xpath :**]} effect/request-xpath-things :mode :always]
            }

    ; emitter
    :emit [;{:init init-app-model}
           {:init emitter/login-emitter}

           ; after user logged in, create homepage
           {:in #{[:login :name]} :fn emitter/init-nav-emitter :mode :always}
            
           ; upon nav type changes, clear the topthings div and destroy path nodes.
           {:in #{[:nav :type]} :fn emitter/nav-type-emitter :mode :always}

           {:in #{[:nav :create-modal]} :fn emitter/create-modal-emitter}

           ; when getting things from server, created map entry, cause node here.
           {:in #{[:all :*]} :fn emitter/all-things-node-emitter :mode :always}

           ; when actionbar displayed, action, setup, assign, thing enable transform
           {:in #{[:setup :assign :* :*]} :fn emitter/assign-emitter :mode :always}

           ; when create new thing setup, emit 
           {:in #{[:setup :newthing]} :fn emitter/newthing-emitter :mode :always}

           {:in #{[:sse-data]} :fn emitter/sse-data-emitter :mode :always}

           ; when xdata back, create nodes
           {:in #{[:xdata]} :fn emitter/xdata-emitter :mode :always}


           [#{[:pedestal :debug :dataflow-time]
              [:pedestal :debug :dataflow-time-max]
              [:debug [:pedestal :**] swap-transform]
              [:pedestal :debug :dataflow-time-avg]
             } (app/default-emitter [])]
          ]
  })
