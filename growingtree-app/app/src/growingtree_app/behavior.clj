(ns ^:shared growingtree-app.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msgs]
              [clojure.set :as set]
              ; map EntityMap to view map
              [growingtree-app.entity-view :as entity-view]))

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
  {:transform [[:op [:path] example-transform]]
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
    (.log js/console "set nav login " login-name " pass " login-pass)
    login-name))    


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
    (.log js/console "all-transformer set [:all :type] for " type things-vec)
    (assoc-in oldv [type] things-vec)))  ; now vector is stored in [:all :type]


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


;;==================================================================================
;; derive dataflow, derive fn got 2 args, old value, and tracking map
;; [inputs output-path derive-fn input-spec] ;; input-spec is optional
;; derive-fn gets the old state of the *output* state, and the tracking map, map, single-val
;;==================================================================================


; derived fn to compute filtered things, illustration for now.
(defn compute-filtered-course
  [_ inputs]
  (let [filter-type (get-in inputs [:new-model :filter :course])
        courses (get-in inputs [:new-model :filtered :course])]
    (if (= filter-type :any)
      courses
      (into {} (filter (fn [[course-id course]]
                          (or
                            (and (= filter-type :completed) (:completed course))
                            (and (= filter-type :active) (not (:completed course)))))
                       courses)))))


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





;;==================================================================================
;; effect flow, effec-fn gets arg by input specifier and ret a vector of msg,
;; msgs got enq to (:output app) where service-fn consumes them.
;; effect-fn gets single arg, the tracking map, or maps, or single-val.
;;==================================================================================

; inject msg to output queue consumed by service-fn, which makes a xhr request for json data.
; input specifier is :single-val, so arg is single-value
(defn request-all-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [type]  ; request all things by type
  (.log js/console "request things of type upon sidebar click  " type)
  [{msgs/topic [:server] msgs/type type (msgs/param :body) {:filter :all}}])
  

; request timeline
(defn request-timeline
  [timeline]
  [])


; effect processing. assign submit btn clicked.
; inputs contains {:mesage {topic [] :details} :new-model {} :old-model {}}
; details {:action :create-assignment, :hwid 17592186045485, :toid "a", :hint "b"}
(defn post-submit-thing
  "after use created new thing, post them to database"
  [inputs]
  (let [user (get-login-name inputs)
        msg (:message inputs)  ; the msg sent when assign clicked
        topic (msgs/topic msg)   ;[:submit :assign :homeworks 17592186045485]
        action (second topic)    ; :assign is msg type
        thingid (last topic)
        details (:details msg)
        body (assoc details :user user)]  ; homework id and :toid and hint
    (.log js/console (str user " post submit thing " topic " action " action 
                          " thingid " thingid " body " body))
    ; msg type :assign
    [{msgs/topic [:server] msgs/type action :body body}]))


;;==================================================================================
;; emitter to report changes, and attach transforms to template events.
;; emitter-fn takes a single argument, a tracking map, or maps, or single-val
;; a delta map keyed by path, and val is a vec of entity map {[:all :courses] [{}]}
;;  {[:all :courses] [{:course/subject "course.subject/coding", ..}]
;;==================================================================================


; emit init app model emtter only once when app starts to create all nodes.
; the most important things is to define transform fn that can be triggered
; by render upon UI events on this portion.
(defn init-app-model [_]
  [{:nav
      {:type  {}  ; a single val of current viewing thing type
       :filtered  ; a list of filtered things of current viewing
        {:transforms   ; the node path is from top to here [:course :form :set-course]
          {:set-things-filtered [{msgs/topic [:filtered] 
                                 (msgs/param :filtered) {}}]}}}
    :setup {}
    :submit {}
  }])


; user can interact with sidebar, so setup interaction on sidebar
; get use input click event into :outbound path node.
(defn login-emitter
  [inputs]
  "set up message emitter for sidebar nav UI interaction"
  (.log js/console "init all things emitter")
  [
    ; login name pass
    [:node-create [:login :name]]
    [:transform-enable [:login :name]
                       :login 
                       [{msgs/topic [:login :name]
                        (msgs/param :login-name) nil
                        (msgs/param :login-pass) nil}]]

  ])


; user logged in, display homepage, enable all action btn and pass current
; user to message
(defn init-nav-emitter
  [inputs]
  (let [oldv (get-in inputs [:old-model :login :name])
        newv (get-in inputs [:new-model :login :name])]
    (.log js/console "login emitter " oldv " -> " newv)
    (if (not= oldv newv)
      [
        [:node-create [:nav]]
        [:transform-enable [:nav :type] 
                           :set-nav-type
                           [{msgs/topic [:nav :type]
                            (msgs/param :type) {}}]]

        ; enable login modal, experimenting
        [:transform-enable [:nav] 
                           :login-modal
                           [{msgs/topic [:nav :login]
                            (msgs/param :login-name) ""
                            (msgs/param :login-pass) ""}]]

        ; enable setup newthing button with transform key :newthing
        [:transform-enable [:setup :newthing] 
                           :newthing
                           [{msgs/topic [:setup :newthing]
                            (msgs/param :details) {:user newv}}]]
                            
      ])))

; when nav type changed, emit node destroy for old list
(defn nav-type-emitter
  [inputs]
  (let [oldtype (get-in inputs [:old-model :nav :type])
        newtype (get-in inputs [:new-model :nav :type])
        allpath (conj [:all] (keyword oldtype))
        oldlist (get-in inputs [:old-model :all (keyword oldtype)])]
    (.log js/console (str "nav type from " oldtype " to " newtype " all things " oldlist))
    (vec (concat 
        ((app/default-emitter nil) inputs)
        (mapcat (fn [entity]
                  ; concat list mean peel off and re package, so ret a vec of tuples.
                  [[:node-destroy (conj allpath (:db/id entity))]])
                oldlist)))))


; nav type changed, we clear out stale thing list in top [:all] node {:type []}
; deprecated code 
; (defn all-things-emitter
;   "emit destroy upon all thing list created"
;   [inputs oldv]
;   ; merge added and updated maps
;   (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
;         updated (d/updated-inputs inputs)]
;     (.log js/console (str "all node thing type updated " updated oldv))
;     (.log js/console (str "old nav type " (get-in inputs [:old-model :nav :type])))
;     (.log js/console (str "new nav type " (get-in inputs [:new-model :nav :type])))
;     (app/default-emitter) inputs))
    

; ret a vector of delta tuples of node-create and value delat from a vector of 
; new things value. value is a vector of entity tuples, mapcat vec is de-pack and re-pack vec.
; action type corresponds to each clickable btn, for now, we enable :assign btn only.
(defn- new-thing-deltas 
  "ret a vector of delta tuples of node-create and value delta from a vec of new things"
  [action path value-vec]  ; path is [:all :homework] and a list of new thing ids
  ; ret a vector of delta tuples. concat vector of tuples from apply fn on each entity map.
  ; for now, we only enable assign btn, for othe btns, iterate
  (mapcat
    (fn [entity-map]
      (let [id (:db/id entity-map)
            newpath (conj path id)  ; [:all :homework 123]
            actionpath (vec (concat [:setup action] (rest newpath)))]
        (.log js/console (str "new thing delta path " newpath " actionpath " actionpath 
                              " action " action))
        ; ret a vec of delta tuples, 
        [ [:node-create newpath :map]
          [:value newpath entity-map]
          ; destroy the existing action path, otherwise transform-enable wont work.
          [:node-destroy actionpath]
          ; ask UI to send back assignment details
          [:transform-enable actionpath   ;[:setup :assign :courses 17592186045476]
                             action       ; :assign
                             [{msgs/topic actionpath ; [:setup :assign :homework 123]
                              (msgs/param :details) {}}]] ]))
    value-vec))

(defn- removed-thing-deltas
  "the removed path node from removed-inputs, arg is node path"
  [input-path oldvals]
  (.log js/console (str "removed path " input-path " oldvals " oldvals)))


; generic emitter to all things, (case type ) to switch cases.
; we need to comprehense list of things and create path node for each thing and
; gen thing template and attached to the path node. This way, when event happens in 
; template, we have path node stores all template transforms and data.
(defn all-things-node-emitter
  "emit node-create and value delta for list of things from xhr response"
  [inputs]
  (let [changemap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        removed (d/removed-inputs inputs)]
    ; each change tuple consists of node-path and a vector of values
    ;(removed-thing-deltas removed)
    (vec 
      (concat
        ; with this, will emit [:value [:all :courses] old-value new-val]
        ((app/default-emitter) inputs) 
        (reduce (fn [alldeltas [input-path newvals]] ;input-path, [:all :course] is a vec
              ; concat is vec de-pack and re-pack, enable :assign action for now
              (concat alldeltas (new-thing-deltas :assign input-path newvals)))
            []
            changemap)))))


; actionbar displayed, now trans enable UI event data come back
(defn assign-emitter
  "emit trans enable for action bar element"
  [inputs]
  (let [changemap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        removemap (d/removed-inputs inputs)]
    ; each change tuple consists of node-path and a vector of values
    ; (doseq [[path oldv] changemap]
    ;   (.log js/console (str "action changemap " path " old-value " oldv)))
    ; (doseq [[path oldv] removemap]
    ;   (.log js/console (str "action removemap " path " old-value " oldv)))

    (reduce (fn [alldeltas [path newv]]
              (let [thingnode (nnext path)  ; [:action :setup :assign thing]
                    newpath (concat [:submit :assign] thingnode)
                    messages {msgs/topic newpath 
                              msgs/type :assign
                              (msgs/param :details) {}}]
                (.log js/console (str "assign emitter " path " " newv))
                ; concat this thing node delta
                (concat alldeltas
                  [[:transform-enable newpath :assign [messages]]])))
            []
            changemap)
    ))


; after displaying new thing input page, hook up save new thing button
(defn newthing-emitter
  "action setup newthing transformed, emit trans enable for newthing save btn"
  [inputs]
  (let [changemap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        removemap (d/removed-inputs inputs)]
    ; each change tuple consists of node-path and a vector of values
    ; (doseq [[path oldv] changemap]
    ;   (.log js/console (str "action changemap " path " old-value " oldv)))
    ; (doseq [[path oldv] removemap]
    ;   (.log js/console (str "action removemap " path " old-value " oldv)))

    (reduce (fn [alldeltas [path newv]]
              (let [newpath (conj [:submit] :newthing)
                    messages {msgs/topic newpath 
                              msgs/type :newthing
                              (msgs/param :details) newv}]
                ; concat 
                (concat alldeltas
                  [[:transform-enable newpath :newthing [messages]]])))
            []
            changemap)
    ))

    
; emitter fn destructs the path of node [:todo :tasks task-id :completed]
; when adding task, (assoc todo :tasks (assoc (:tasks todo) id tasks)
(defn todo-emitter 
  [inputs]
  ; from inputs tracking map, ret a vector of app model delta
  (vec (concat
        ; still use the default emitter, which emit [:value path old new]
        ((app/default-emitter) inputs)  
        ; at path node [:todo :filtered :* :*]  a new value is added.
        ; this is 
        (mapcat (fn [[_ _ task]]  ; added a task, destructure path = [:todo :tasks task-id]
                  ;; When a new task is added, it needs to have transform-enables associated with it
                  ;; It needs to be able to be toggled, and it should be removed.
                  (when (symbol? task)
                    [[:transform-enable [:todo :filtered-tasks task] :toggle-task [{msgs/topic [:todo] msgs/type :toggle-task :id task}]]
                     [:transform-enable [:todo :filtered-tasks task] :remove-task [{msgs/topic [:todo] msgs/type :remove-task :id task}]]]))
                (:added inputs))  ; the added-map from inputs
        ; 
        (mapcat (fn [[_ _ task completed :as path]] ; updated a task, path is [:todo :tasks task-id :filter-type]
                  ;; Right now the default emitter is not updating the value if it is nil or false
                  ;; So I'm manually inserting the value 
                  (when (and (symbol? task) (= completed :completed))                 
                    [[:value path (get-in inputs (concat [:new-model] path))]]
                    ))
                (:updated inputs))
        (mapcat (fn [[_ _ task :as path]] ; deleted a task, path is [:todo :tasks task-id]
                  ;; Make sure that the tasks are removed when they are removed from the data model
                  (when (symbol? task)                    
                    [[:node-destroy path]]
                    ))
                (:removed inputs)))
        ))


;;
;; emitter when getting sse-data, dispatch by sse event type
(defn sse-data-emitter
  [inputs]  ; tracking map of data model
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldcat (get-in inputs [:old-model :sse-data])
        newcat (get-in inputs [:new-model :sse-data])]
    (vec (concat 
      ((app/default-emitter) inputs) ; still emit [:value [:nav :category] nil :courses]
      (mapcat 
        (fn [[path] nval]
          (if oldcat
            [[:node-destroy (conj path oldcat)]
             [:node-create (conj path newcat) :map]]
            [[:node-create (conj path newcat) :map]]))
        deltamap)
      ))))


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
                [:login-modal [:nav] set-login-modal]

                ; UI event sent to outbound node, then derive to [:nav :type] node
                [:set-nav-type [:nav :type] set-nav-type]

                ; set-all to store all type things list into all type map
                [:set-all-things [:all] set-all-things]

                ; assign action setup transform
                [:assign [:setup :assign :* :*] setup-assign]
                [:assign [:submit :assign :* :*] submit-assign]

                ; new thing setup, each key in the value map will create a new node.
                [:newthing [:setup :newthing] setup-newthing]
                [:newthing [:submit :newthing] submit-newthing]
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
              [#{[:nav :type]} request-all-things :single-val]
              
              ; submit action effect, action is from topic and send details to backend.
              [#{[:submit]} post-submit-thing :mode :always]
            }

    ; emitter
    :emit [;{:init init-app-model}
           {:init login-emitter}

           ; after user logged in, create homepage
           {:in #{[:login :name]} :fn init-nav-emitter :mode :always}
            
           ; upon nav type changes, clear the topthings div and destroy path nodes.
           {:in #{[:nav :type]} :fn nav-type-emitter :mode :always}

           ; when getting things from server, created map entry, cause node here.
           {:in #{[:all :*]} :fn all-things-node-emitter :mode :always}

           ; when actionbar displayed, action, setup, assign, thing enable transform
           {:in #{[:setup :assign :* :*]} :fn assign-emitter :mode :always}

           ; when create new thing setup, emit 
           {:in #{[:setup :newthing]} :fn newthing-emitter :mode :always}


           {:in #{[:sse-data]} :fn sse-data-emitter :mode :always}

           [#{[:pedestal :debug :dataflow-time]
              [:pedestal :debug :dataflow-time-max]
              [:debug [:pedestal :**] swap-transform]
              [:pedestal :debug :dataflow-time-avg]
             } (app/default-emitter [])]
          ]
  })
