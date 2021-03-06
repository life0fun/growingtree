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
  (let [details (:details message)
        newv (merge (assoc oldv :type (:type message)) details)
       ]
    (.log js/console (str "set-login new value " newv message))
    newv))


; extract signup details and set into [:login :name]
(defn set-signup
  [oldv message]
  (let [details (:details message)
        newv (merge (assoc oldv :type (:type message)) details)
       ]
    (.log js/console (str "set-signup new value " newv message))
    newv))


; message key values set inside app service response handler.
(defn set-login-error
  [oldv message]
  (let [err (:error message)
        user (:user message)]
    (.log js/console (str "set-login-error " user " login error " err ))
    {:user user :error err}))


; after login validated, set current user info
(defn set-user
  [oldv message]  ; message is PersistentArrayMap, an array of map
  (let [user (:user message)]
    (.log js/console (str "set-user logged in " user))
    user))


(defn set-login-modal
  [oldv message]
  (let [login-name (:login-name message)
        login-pass (:login-pass message)]
    (.log js/console "set nav login modal " login-name " pass " login-pass)
    login-name))


; create modal is deprecated! use nav-newthing
(defn set-create-modal
  [oldv message]
  (let [newthing-type (:type message)
        npath (vec (conj oldv newthing-type))]
    (.log js/console (str "set create newthing modal " (take-last 2 npath)))
    npath))


(defn set-nav-newthing
  [oldv message]
  (let [newthing-type (keyword (:type message))
        npath (vec (conj oldv newthing-type))]
    (.log js/console (str "set-nav-newthing " (take-last 2 npath)))
    npath))

; extract the user clicked nav path from msg, and store it in [:nav :path] node
; nav path store a list of paths, each path is a list of target id. id=0 mean no filter.
; [:course 17592186045425 :course] and [:course 17592186045425 :lecture]
; path query things for header, [:group 1 :group], sidebar :main, [:all 0 :thing-tyep]
; qpath query things for filtered. [:group 1 :group-members]
(defn set-nav-path
  [oldv message]
  ; :path was setup in thing-nav-messages and init-nav-emitter for sidebar
  (let [path (:path message)     ; things in main, or headers.
        qpath (:qpath message)   ; things in filtered, or details
        npath (->> (if qpath
                     (concat oldv [path] [qpath])
                     (concat oldv [path]))
                   (take-last 6)
                   (vec))
       ]
    (.log js/console (str "set-nav-path  " npath))
    npath))


; extract user input search
(defn set-nav-search
  [oldv message]
  ; :searchkey was setup in thing-nav-messages and init-nav-emitter for sidebar
  (let [searchkey (:searchkey message)
        nkey (take-last 6 (concat oldv [searchkey]))
       ]
    (.log js/console (str "set-nav-search " nkey))
    nkey))


; setup in effect, and callback by xhr respond handler, store list of all things data into
; [:data :all 0 :parent] or [:data :parent 1 :child]
; we store cljs.core.Vector data structure into path node. when clj get the ds out,
; no more parse needed. We only need one parse at response-handler.
; all keyword field coerced to string after json stringify and stored here.
; thing-vec is empty [] when nothing in the list, and emitter nil upon empty list.
(defn set-thing-data
  "store list of all things vec in [:all navpath] node specified by msg topic"
  [oldv message]
  (let [msg-topic (msgs/topic message)
        msg-type (msgs/type message)
        thing-type (:thing-type message)  ; for all, thing-type is all
        things-vec (:data message)]  ; cljs.core.PersistentVector [{thing1} {thing2}]
    (.log js/console (str "set-thing-data " msg-topic " thing-type " thing-type " things-vec "))
    things-vec))  ; now vector is stored in [:all :parent]


;; create thing from Create new thing modal
(defn create-thing
  "create thing from create new thing modal"
  [oldv message]
  (let [details (:details message)]
    (.log js/console (str "create-thing form submitted details " details))
    details))

(defn created-thing-data
  "store list of things that just created at [:created thing-type]"
  [oldv message] ; message [:status 200 :data thing-vec]
  (let [msg-topic (msgs/topic message)
        thing-type (last msg-topic)  ; [:created-thing thing-type]
        things-vec (:data message)]  ; cljs.core.PersistentVector [{thing1} {thing2}]
    (.log js/console (str "set created thing data at " msg-topic " things-vec " things-vec))
    things-vec))


;;==================================================================================
; derive dataflow, derive fn got 2 args, old value, and tracking map
; derive flow is still within the same dataflow that process the message.
; the (:message inputs) is the current msg that triggeres the dataflow transform, derive, effect,...
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


;-----------------------------------------------------------------------------------------
; clear all things by type upon nav type change, as we will restful request from service.
; input specifier defines what inputs var is, i.e., what upstream inputs are
; to get the clicked thing, [:old-model :data parent id child]
; from [:parent 1 :parent] to [:parent 1 :child] parent ()
; oldv stores embedded map with [:data] with navpath [:data :question 1 :question] [:data :question 1 :assignment]
; {:question {1 {:question [{:question/origin ...}] :assignment [{:assignment/title}]
;-----------------------------------------------------------------------------------------
(defn refresh-thing-data
  "remove stale things vec under [:data nav-path] upon nav path change"
  [oldv inputs]
  (let [; the activemsg is the dataflow msg that triggers nav path transform.
        activemsg (:message inputs)
        path (:path activemsg)
        qpath (:qpath activemsg)

        oldpath (vec (last (get-in inputs [:old-model :nav :path]))) ; [:question 1 :assignment]
        newpath (vec (last (get-in inputs [:new-model :nav :path]))) ; [:author 1 :author]
        thing-type (first oldpath)
       ]
    ; (.log js/console (str "refresh-thing-data upon navpath from " oldpath " to " newpath " " activemsg))
    (if oldv
      (-> oldv
        (assoc-in path [])
        (assoc-in qpath [])
        (assoc-in oldpath [])
        (assoc-in newpath [])
        (assoc-in [thing-type] {})
      ))))


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
                [:signup [:login :name] set-signup]

                ; modal handling
                [:login-modal [:nav :login-modal] set-login-modal]
                [:create-modal [:nav :create-modal] set-create-modal]
                [:nav-newthing [:nav :newthing] set-nav-newthing]

                ; set login error after validation or signup failed
                [:set-login-error [:login :error] set-login-error]
                ; set user after login validation,
                [:set-user [:user] set-user]

                ; UI event sent to outbound node, then derive to [:nav :path] node
                [:set-nav-path [:nav :path] set-nav-path]

                ; fulltext search
                [:set-nav-search [:nav :search] set-nav-search]

                ; db response data goes here. [:data :all 0 :parent] [:data :parent 1 :child]
                [:set-thing-data [:data :**] set-thing-data]
                [:submitted-form [:data :form] submitted-form]


                ; new thing template form submitted
                [:create-thing [:create :*] create-thing]
                ; app model node store just creatd thing, no emitter, so just store.
                [:created-thing [:created :*] created-thing-data]

               ]

    :derive #{
            ;; derive fn triggered by data change, not by inject data into node!!
            ;; input specifier :single-val :map :default(tracking map)
            ;; the oldv to derive fn varies based on input specifier.
            ;; can be old val or tracking map

            ; derive can not use wildcard path, as the msg topic is for upstream src.
            ; upon nav path changed, clear all things.
            [#{[:nav :path]} [:data] refresh-thing-data]

            }

    ; effect fn takes msg and ret a vec of msg consumed by services-fn to xhr to back-end.
    ; the input path node for effect is recursively match from top.
    :effect #{
              [#{[:login :name]} effect/signup-validate-login :mode :always]

              ; nav path changed, request all things by path. request header and filtered
              ; note we specific tranform msg topic and type here so response data got
              ; dispatch to the right data model directly.
              [#{[:nav :path]} effect/request-navpath-things :mode :always]

              [#{[:nav :search]} effect/request-navsearch-things :mode :always]

              ; create thing template form submitted, post data to server.
              [#{[:create :*]} effect/post-create-thing :mode :always]

            }

    ; emitter, all emitter fn must be defined, otherwise, NPE.
    :emit [
           {:init emitter/init-app-model}  ; create all app nodes upon init.

           {:init emitter/login-emitter}  ; render login dialog upon app init
           {:in #{[:login :error]} :fn emitter/login-error-emitter :mode :always}

           ; after user logged in, create homepage
           ;{:in #{[:login :name]} :fn emitter/init-nav-emitter :mode :always}
           {:in #{[:user]} :fn emitter/init-nav-emitter :mode :always}

           ; create modal is deprecated, use nav new thing
           {:in #{[:nav :create-modal]} :fn emitter/create-modal-emitter}
           {:in #{[:nav :newthing]} :fn emitter/nav-newthing-emitter}

           ; upon nav path changes, clear the topthings div and destroy path nodes.
           {:in #{[:nav :path]} :fn emitter/nav-path-emitter :mode :always}

           ; [:data :all 0 :parent] or [:data :parent 1 :child]
           {:in #{[:data :* :* :*]} :fn emitter/thing-data-emitter :mode :always}

           {:in #{[:sse-data]} :fn emitter/sse-data-emitter :mode :always}

           ; XXX do not debug for now.
           ; [#{[:pedestal :debug :dataflow-time]
           ;    [:pedestal :debug :dataflow-time-max]
           ;    [:debug [:pedestal :**] swap-transform]
           ;    [:pedestal :debug :dataflow-time-avg]
           ;   } (app/default-emitter [])]

          ]
  })
