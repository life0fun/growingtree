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


; when path node in data model gets value, it was already parsed to cljs.core ds by
; response-handler. We store cljs ds into data model path node. 
; data model can directly use the data structure. We only need one time parse at response-handler.
;


;; - - - - - - - - - - - - 
;; transforms
;; transform-fn gets 2 args, old-value and message, ret value used to set new value.
;; - - - - - - - - - - - - 

; extract the user clicked nav category from msg, and store it in [:nav :category] node
(defn set-nav-type
  [_ message]
  (.log js/console (str "set-nav-type " message))
  (:type message))  ; value stored inside thing :type key

; set thing type
(defn set-thing-type
  [_ message]
  (:type message))  ; value stored inside :category key



; all things transformers, store list of all things data structure into map.
; we store cljs.core.Vector data structure into path node. when clj get the ds out,
; no more parse needed. We only need one parse at response-handler.
(defn all-things-transformer
  "store list of all things vec in [:all :type] node under each type key"
  [oldv message]
  (let [type (:type message)    ; thing type 
        things-vec (:data message)]  ; cljs.core.PersistentVector [{thing1} {thing2}]
    (.log js/console "all-transformer for " type things-vec)
    (assoc-in oldv [type] things-vec)))  ; now vector is stored in [:all :type]


;; - - - - - - - - - - - - 
;; derive dataflow, derive fn got 2 args, old value, and tracking map
;; [inputs output-path derive-fn input-spec] ;; input-spec is optional
;; derive-fn gets 2 args, the old state of the output state, and inputs tracking map, or map, single-val
;; - - - - - - - - - - - - 


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


;; - - - - - - - - - - - - 
;; effect flow, effec-fn gets arg by input specifier and ret a vector of msg,
;; msgs got enq to (:output app) where service-fn consumes them.
;; effect-fn gets single arg, the tracking map, or maps, or single-val.
;; - - - - - - - - - - - - 

;
; should use multimethod for dispatching.
;
; inject msg to output queue consumed by service-fn, which makes a xhr request for json data.
; input specifier is :single-val, so arg is single-value
(defn request-all-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [type]  ; request all things by type
  (.log js/console "request things of type upon sidebar click  " type)
  ; set both msg/type and out-message to category
  [{msg/topic [:server] msg/type type :body {:filter :all}}])
  

; request timeline
(defn request-timeline
  [timeline]
  [])

;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; emitter to report changes, and attach transforms to template events.
;; emitter-fn takes a single argument, a tracking map, or maps, or single-val
;; a delta map keyed by path, and val is a vec of entity map {[:all :courses] [{}]}
;;  {[:all :courses] [{:course/subject "course.subject/coding", ..}]
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

; emit init app model emtter only once when app starts to create all nodes.
; the most important things is to define transform fn that can be triggered
; by render upon UI events on this portion.
(defn init-app-model [_]
  [{:nav
      {:type  {}  ; a single val of current viewing thing type
       :filtered  ; a list of filtered things of current viewing
        {:transforms   ; the node path is from top to here [:course :form :set-course]
          {:set-things-filtered [{msg/topic [:filtered] 
                                 (msg/param :filtered) {}}]}}}}])


; user can interact with sidebar, so setup interaction on sidebar
; get use input click event into :outbound path node.
(defn init-all-things-emitter 
  [inputs]
  "set up message emitter for sidebar nav UI interaction"
  (.log js/console "init all things emitter")
  [[:node-create [:nav]]
   [:transform-enable [:nav :type] 
                      :set-nav-type
                      [{msg/topic [:nav :type]
                       (msg/param :type) {}}]]])



; emit to create node upon all things
(defn all-courses-emitter
  "emit upon all thing list created"
  [inputs]
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldthing (get-in inputs [:old-model :all :courses])  ; thing type should not be plural
        newthing (get-in inputs [:new-model :all :courses])
        topthing (:course/title (first newthing))
        oldthing (:course/title (first oldthing))]
    (.log js/console (str "all course emitter " topthing newthing))
    (vec (concat 
      ;((app/default-emitter) inputs) ; still emit [:value [:nav :category] nil :courses]
      (mapcat 
        (fn [[path] nval]  ; path is [:all :courses]
          (if oldthing
            [[:node-destroy (conj path oldthing)]
             ;[:node-create (conj path topthing) :map]
             [:value [:all :courses] newthing]]
            [;[:node-create (conj path topthing) :map]
             [:value [:all :courses] newthing]]))
        deltamap)
      ))))


(defn all-parents-emitter
  "emit upon all thing list created"
  [inputs]
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldthing (get-in inputs [:old-model :all :parents])  ; thing type should not be plural
        newthing (get-in inputs [:new-model :all :parents])
        topthing (:parent/fname (first newthing))
        oldthing (:parent/fname (first oldthing))]
    (.log js/console (str "all parent emitter " topthing newthing))
    ; if we emit value delta, we do not need to emit node-create.
    (vec (concat 
      ;((app/default-emitter) inputs) ; still emit [:value [:nav :category] nil :courses]
      (mapcat 
        (fn [[path] nval]  ; path is [:all :parents]
          (if oldthing
            [[:node-destroy (conj path oldthing)]
             ;[:node-create (conj path topthing) :map]
             [:value [:all :parents] newthing]]
            [;[:node-create (conj path topthing) :map]
             [:value [:all :parents] newthing]]))
        deltamap)
      ))))


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
                    [[:transform-enable [:todo :filtered-tasks task] :toggle-task [{msg/topic [:todo] msg/type :toggle-task :id task}]]
                     [:transform-enable [:todo :filtered-tasks task] :remove-task [{msg/topic [:todo] msg/type :remove-task :id task}]]]))
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



;; Data Model
;;
;; which one? 
;;   [:parent :all] [:parent :filtered]  
;; Each type knows all, easy to add new type, However, boilerplate, we only have limited types.
;;
;;   [:all :parent] [:filtered :parent]  
;; Each fn knows all types. Easy to add new fn. [:fn-X :parent]. Hard to add new type.
;; 
;; As we only have limited know types. We choose functional way for easy add function.
;;


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
                ; UI event sent to outbound node, then derive to [:nav :type] node
                [:set-nav-type [:nav :type] set-nav-type]

                ; set-all to store all list of things in its map
                [:set-all-things [:all] all-things-transformer]
                
                ; request response and SSE will be put into :received :inbound
                [:received [:inbound] receive-inbound]
               ]

    :derive #{  ;; derive fn triggered by data change, not by inject data into node!!

             ; UI events triggers update of category path node
             ;[#{[:nav :type]} [:type] set-thing-type :single-val]

             ; sse data put into inbound, and trigger update. 
             [#{[:inbound]} [:category] update-category :single-val]
            }

    ; effect fn takes msg and ret a vec of msg consumed by services-fn, and xhr to back-end.
    :effect #{
              ; user clicked nav, request all things by type
              [#{[:nav :type]} request-all-things :single-val]
            }

    ; emitter
    :emit [;{:init init-app-model}
           {:init init-all-things-emitter}

           ; all things emitter
           {:in #{[:all :courses]} :fn all-courses-emitter :mode :always}
           {:in #{[:all :parents]} :fn all-parents-emitter :mode :always}

           {:in #{[:sse-data]} :fn sse-data-emitter :mode :always}

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
