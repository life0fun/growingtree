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
;; the actual location in data model to be updated is determined by the path in message.
;; message is PersistentArrayMap, which echoed back from transform-enabled [topic, params]
;; when messages sent to cljs, it becomes PersistentVector, when sending back, becomes
;; PersistentArrayMap again. Hence you can do (:details messages) here.
;;==================================================================================

; user login, store user name into [:login :name]
(defn set-login
  [oldv message]  ; message is PersistentArrayMap, an array of map
  (let [login-name (:login-name message)
        login-pass (:login-pass message)]
    (.log js/console "user logged in " login-name " pass " login-pass message)
    login-name))


(defn set-login-modal
  [oldv message]
  (let [login-name (:login-name message)
        login-pass (:login-pass message)]
    (.log js/console "set nav login modal " login-name " pass " login-pass)
    login-name))    


(defn set-create-modal
  [oldv message]
  (let [newthing-type (:type message)]
    (.log js/console "set create newthing modal " newthing-type)
    newthing-type))


; extract the user clicked nav path from msg, and store it in [:nav :path] node
; nav path store a list of paths, each path is a list of target id. id=0 mean no filter.
; [ [:current-thing current-thing-id :next ] [:current-thing current-thing-id :next] ... ]
; for sidebar, it is [:sidebar 0 :thing-tyep]
(defn set-nav-path
  [oldv message]
  (let [path (:path message)  ; :path is a vector
        npath (vec (conj oldv path))]
    (.log js/console (str "set-nav-path newpath " npath message))
    npath))


; set thing type after nav to new type upon sidebar click
(defn set-thing-type
  [_ message]
  (:type message))  ; value stored inside :category key


; setup in effect, and callback by xhr respond handler, store list of all things data into 
; [:data :all 0 :parent] or [:data :parent 1 :children]
; we store cljs.core.Vector data structure into path node. when clj get the ds out,
; no more parse needed. We only need one parse at response-handler.
(defn set-thing-data
  "store list of all things vec in [:all navpath] node specified by msg topic"
  [oldv message]
  (let [msg-topic (msgs/topic message)
        msg-type (msgs/type message)
        thing-type (:thing-type message)  ; for all, thing-type is all
        things-vec (:data message)]  ; cljs.core.PersistentVector [{thing1} {thing2}]
    (.log js/console (str "set thing data at " msg-topic " thing-type " thing-type " things-vec " things-vec))
    things-vec))  ; now vector is stored in [:all :parents]


; Path is [:action :setup :thing-type thingid], stores details map {:action :assign :id 12}
; user clicked assign link, show assign action bar, enable transform for content
(defn setup-assign
  "after displaying actionbar, store at [:action :setup :type id] the detail map"
  [oldv message]
  (let [details (:details message)]  ; details is {:action :create-assignment :id 12}
    (.log js/console (str "setup assign details " details))
    details))

; Path is [:action :submit :thing-type thingid], stores details map {:action :assign :id 12}
(defn submit-assign
  "actionbar form submitted, store and write to effect queue"
  [oldv message]
  (let [details (:details message)] ; details is {:action :create-assignment :id xx}
    (.log js/console (str "submitted assign details " details))
    details))


; newthing btn clicked, transform action setup newthing node in info model
; each key val in details value map will create a new node under action setup newthing.
(defn setup-newthing
  "create new thing btn clicked, details should contains :user"
  [oldv message]
  (let [details (:details message)]
    (.log js/console (str "newthing btn clicked " details))
    details))

(defn submit-newthing
  "create new thing btn clicked "
  [oldv message]
  (let [details (:details message)]
    (.log js/console (str "submit newthing " details))
    details))


;; create thing by type
(defn create-thing-type
  "create thing by type submitted"
  [oldv message]
  (let [details (:details message)]
    (.log js/console (str "create thing type " details))
    details))


; use navigate from things
; message {:topic [:xpath :parents 17592186045498 :children], :details {} }
; details {:next-entity :child, :filterpath (:parents 17592186045498)} 
; old value is detail map {:next-entity :child, :filterpath (:parents 17592186045498)}
(defn set-xpath
  [oldv message]
  (let [topic (msgs/topic message)
        details (:details message)]
    (.log js/console (str "set xpath transform " oldv " details " details))
    details))


; the actual location in data model to be updated is determined by the path in message.
(defn set-xdata
  [oldv message]
  (let [topic (msgs/topic message)  ; (:xdata :parents 17592186045499 :children)
        thing-type (:thing-type message)
        things-vec (:data message)]
    (.log js/console (str "set-xdata transformer " thing-type topic things-vec))
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
(defn refresh-thing-data
  "remove stale things vec under [:data :all 0 :parent] upon nav path change"
  [oldv inputs] 
  (let [activemsg (:message inputs)
        oldpath (vec (last (get-in inputs [:old-model :nav :path])))
        newpath (vec (last (get-in inputs [:new-model :nav :path])))]
    (.log js/console (str " nav path refresh from " oldpath " to " newpath " old val " oldv))
    (if oldv
      ; ret the new map to be stored in [:all] path node, which is oldv
      (assoc-in oldv oldpath []))))


; derive fn, first arg is the old value at output path, 2nd arg is tracking map.
; the :message key contains the msg that triggered the derive fn.
; when xpath changed, clear up all xdata, so xdata emitter can always emit always
; topic [:xpath :parents 17592186045502 :children], :details {:xpath (:parents 17592186045502 :children)}
(defn refresh-xdata
  [oldv inputs]
  (let [msg (:message inputs)]
    (.log js/console (str "refresh xdata " oldv msg))
    {}))


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

                ; modal handling
                [:login-modal [:nav :login-modal] set-login-modal]
                [:create-modal [:nav :create-modal] set-create-modal]
                
                ; UI event sent to outbound node, then derive to [:nav :path] node
                [:set-nav-path [:nav :path] set-nav-path]

                ; db response data goes here. [:data :all 0 :parent] [:data :parent 1 :children]
                [:set-thing-data [:data :**] set-thing-data]


                ; assign action setup transform
                [:assign [:setup :assign :* :*] setup-assign]
                [:assign [:submit :assign :* :*] submit-assign]

                ; new thing setup, each key in the value map will create a new node.
                [:newthing [:setup :newthing] setup-newthing]
                [:newthing [:submit :newthing] submit-newthing]

                ; create thing page handler
                [:creatething [:create :*] create-thing-type]

                ; xpath records navigation path and xdata stores query result.
                ; :** match any path, and node path determined by msg topic
                [:set-xpath [:xpath :**] set-xpath]  ; rendering UI set path value
                [:set-xdata [:xdata :**] set-xdata]  ; db populate data into here
                
               ]

    :derive #{
            ;; derive fn triggered by data change, not by inject data into node!!
            ;; input specifier :single-val :map :default(tracking map)
            ;; the oldv to derive fn varies based on input specifier. 
            ;; can be old val or tracking map

            ; derive can not use wildcard path, as the msg topic is for upstream src.
            [#{[:nav :path]} [:data] refresh-thing-data]
            }

    ; effect fn takes msg and ret a vec of msg consumed by services-fn to xhr to back-end.
    ; the input path node for effect is recursively match from top. 
    :effect #{
              ; nav path changed, request all things by path. 
              ; note we specific tranform msg topic and type here so response data got
              ; dispatch to the right data model directly.
              [#{[:nav :path]} effect/request-navpath-things :mode :always]
              
              ; submit action effect, action is from topic and send details to backend.
              [#{[:submit]} effect/post-submit-thing :mode :always]

              ; create thing type change [:create :course]
              [#{[:create :*]} effect/post-create-thing :mode :always]

              ; user clicked actionbar links, xpath query
              [#{[:xpath :**]} effect/request-xpath-things :mode :always]
            }

    ; emitter
    :emit [;{:init emitter/init-app-model}
           {:init emitter/login-emitter}

           ; after user logged in, create homepage
           {:in #{[:login :name]} :fn emitter/init-nav-emitter :mode :always}
           
           {:in #{[:nav :create-modal]} :fn emitter/create-modal-emitter}

           ; upon nav path changes, clear the topthings div and destroy path nodes.
           {:in #{[:nav :path]} :fn emitter/nav-path-emitter :mode :always}

           ; [:data :all 0 :parent] or [:data :parent 1 :children]
           {:in #{[:data :* :* :*]} :fn emitter/thing-data-emitter :mode :always}

           ; when actionbar displayed, action, setup, assign, thing enable transform
           {:in #{[:setup :assign :* :*]} :fn emitter/assign-emitter :mode :always}

           ; when create new thing setup, emit 
           {:in #{[:setup :newthing]} :fn emitter/newthing-emitter :mode :always}

           {:in #{[:sse-data]} :fn emitter/sse-data-emitter :mode :always}

           ; when xdata back, create nodes, [:xdata :parent 123 :children]
           {:in #{[:xdata :* :* :*]} :fn emitter/xdata-emitter :mode :always}


           [#{[:pedestal :debug :dataflow-time]
              [:pedestal :debug :dataflow-time-max]
              [:debug [:pedestal :**] swap-transform]
              [:pedestal :debug :dataflow-time-avg]
             } (app/default-emitter [])]
          ]
  })
