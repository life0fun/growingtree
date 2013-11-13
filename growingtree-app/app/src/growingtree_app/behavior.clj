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
(defn publish-category
  [_ message]
  (:category message))  ; value stored inside :category key

(defn set-category
  [_ message]
  (:category message))  ; value stored inside :category key

(defn course-transform
  [_ message]
  (:text message))  ; ret :text key from course msg map to set state val.

; set course filter value with the new value from message
(defn course-filtered-transform
  [old-value message]
  (:filtered message))  ; render fills out value in :filtered msg


(defn parent-transform
  [_ message]
  (:text message))  ; ret :text key from course msg map to set state val.

; set course filter value with the new value from message
(defn parent-filtered-transform
  [old-value message]
  (:filtered message))  ; render fills out value in :filtered msg


(defn set-value-transform 
  [old-value message]
  (:value message))

(def sort-order
  {[:course] 0
   [:lecture] 1})


; receive-inbound handle request response or SSE from server. msg injected by 
; service response-handler. msg has thing type, and data is json string.
(defn receive-inbound
  [old-value message]
  (let [type (:type message)  ; thing type
        data (:data message)]  ; get json response data
    (.log js/console "received inbound " data)
    data))  ; return new received catgory


; all transformers, store list of all things data structure into map.
; we store cljs.core.Vector data structure into path node. when clj get the ds out,
; no more parse needed. We only need one parse at response-handler.
(defn all-transformer
  [oldv message]
  (let [type (:type message)    ; thing type 
        things-vec (:data message)  ; cljs.core.PersistentVector [{thing1} {thing2}]
        title ((keyword "course/title") (first things-vec))]
    (.log js/console "all-transformer for " type title things-vec)
    (assoc-in oldv [type] things-vec)))  ; now vector is stored in [:all :type]


;; - - - - - - - - - - - - 
;; derive dataflow, derive fn got 2 args, old value, and tracking map
;; [inputs output-path derive-fn input-spec] ;; input-spec is optional
;; derive-fn gets 2 args, the old state of the output state, and inputs tracking map, or map, single-val
;; - - - - - - - - - - - - 

(defn update-category
  [oldv newcat]   ; input specifier is single-val, use it directly.
  (.log js/console "derived from nav or inbound, update category " newcat)
  newcat)



(defn sse-fn
  [oldv newv]  ; default input specifier is tracking map, here we use single-val
  newv)


; derived fn to compute filtered things, illustration for now.
(defn compute-filtered-course [_ inputs]
  (let [filter-type (get-in inputs [:new-model :course :filter])
        courses (get-in inputs [:new-model :course :tasks])]
    (if (= filter-type :any)
      tasks
      (into {} (filter (fn [[task-id task]]
                         (or
                          (and (= filter-type :completed) (:completed task))
                          (and (= filter-type :active) (not (:completed task)))))
                       tasks)))))


;; - - - - - - - - - - - - 
;; effect flow, effec-fn gets arg by input specifier and ret a vector of msg,
;; msgs got enq to (:output app) where service-fn consumes them.
;; effect-fn gets single arg, the tracking map, or maps, or single-val.
;; - - - - - - - - - - - - 

;
; should use multimethod for dispatching.
;
; inject msg to output queue of app, consumed by service-fn.
; input specifier is :single-val, so arg is single-value
(defn send-server-category
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [category]
  (.log js/console "send-server-category upon sidebar click  " category)
  ; set both msg/type and out-message to category
  [{msg/topic [:server] msg/type category :out-message category}]
  )
  

(defn send-server-timeline
  [timeline]
  [])

;; - - - - - - - - - - - - 
;; emitter to report changes, and attach transforms to template events.
;; emitter-fn takes a single argument, a tracking map, or maps, or single-val
;; a delta map keyed by path, and val is a vec of entity map {[:all :courses] [{}]}
;;  {[:all :courses] [{:course/subject "course.subject/coding", ..}]
;; - - - - - - - - - - - - 

; emit init app model emtter only once when app starts. emitter will emit to create all nodes.
; the most important things is to define transform fn that can be triggered
; by render upon UI events on this portion.
(defn init-app-model [_]
  [{:course
      {:filtered  ; a map of filtered course
        {:transforms   ; the node path is from top to here [:course :form :set-course]
          {:set-course-filtered [{msg/topic [:course :filtered] 
                                 (msg/param :filtered) {}}]}}}}])


; user can interact with sidebar, so setup interaction on sidebar
; get use input click event into :outbound path node.
(defn init-sidebar-emitter [inputs]
  "set up message emitter for sidebar nav UI interaction"
  [[:transform-enable [:nav :category] 
                      :publish-category 
                      [{msg/topic [:nav :category]
                       (msg/param :category) {}}]]])



; emit to create node upon all things
(defn all-course-emitter
  "emit upon all thing list created"
  [inputs]
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldthing (get-in inputs [:old-model :all :courses])  ; thing type should not be plural
        newthing (get-in inputs [:new-model :all :courses])
        toptitle (:course/title (first newthing))
        oldtitle (:course/title (first oldthing))]
    (.log js/console (str "all course emitter " toptitle newthing))
    (vec (concat 
      ;((app/default-emitter) inputs) ; still emit [:value [:nav :category] nil :courses]
      (mapcat 
        (fn [[path] nval]  ; path is [:all :courses]
          (if oldthing
            [[:node-destroy (conj path oldtitle)]
             [:node-create (conj path toptitle) :map]
             [:value [:all :courses] newthing]]
            [[:node-create (conj path toptitle) :map]
             [:value [:all :courses] newthing]]))
        deltamap)
      ))))


; when set course, all transform actions in course form templates close over current course name.
(defn set-course-delta
  "emit a vector of vectors of transform deltas that render use to set the course"
  [courses]
  [[:value [:course] courses]
   [:transform-enable [:course :filtered] ; click on any lecture under the course
                       :set-course-filtered [{msg/topic [:course :filtered]
                                            (msg/param :filtered) {}}]] ; render will fill
  ])


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


; emitter for when nav category value changes, emit node create of clicked category
(defn category-emitter
  "upon value change in [:category] node, ret a list of delta msg to be emit to push render"
  [inputs]  ; tracking map of data model
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldcat (get-in inputs [:old-model :category])
        newcat (get-in inputs [:new-model :category])]
    (vec (concat 
      ;((app/default-emitter) inputs) ; still emit [:value [:nav :category] nil :courses]
      (mapcat 
        (fn [[path] nval]
          (if oldcat
            [[:node-destroy (conj path oldcat)]
             [:node-create (conj path newcat) :map]]
            [[:node-create (conj path newcat) :map]]))
        deltamap)
      ))))


; emitter when getting sse-data
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

;; [:nav :category] - use click sidebar nav to show 
;; [:category] - current category

;; current function. store current things, :parent, :child, :course, :lecture.
;; [:current :parent|:child|:course|:lecture] - current things

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
                ; UI event sent to outbound node, then derive to [:nav :category] node
                [:publish-category [:nav :category] publish-category]
                ; transformer handles msg to change category
                [:set-category [:category] set-category]

                ; set current course and course filtered list
                [:set-course [:course] course-transform]
                [:set-course-filtered [:course :filtered] course-filtered-transform]

                ; set-all to store all list of things in its map
                [:set-all [:all] all-transformer]
                ;[:set-current [:current :*] current-thing-transform]
                
                ; request response and SSE will be put into :received :inbound
                [:received [:inbound] receive-inbound]
               ]

    :derive #{  ;; derive fn triggered by data change, not by inject data into node!!

             ; UI events triggers update of category path node
             [#{[:nav :category]} [:category] update-category :single-val]

             ; sse data put into inbound, and trigger update. 
             [#{[:inbound]} [:category] update-category :single-val]
            }

    ; effect fn takes msg and ret a vec of msg consumed by services-fn, and xhr to back-end.
    :effect #{
              ; user clicked nav, bcast.
              [#{[:nav :category]} send-server-category :single-val]
            }

    ; emitter
    :emit [;{:init init-app-model}
           {:init init-sidebar-emitter}

           ; whenever value of [:category] changed, emit
           {:in #{[:category]} :fn category-emitter :mode :always}

           ; all things emitter
           {:in #{[:all :courses]} :fn all-course-emitter :mode :always}

           [#{[:parent :*]
              [:course :*]} (app/default-emitter [])]

           {:in #{[:sse-data]} :fn sse-data-emitter :mode :always}

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
