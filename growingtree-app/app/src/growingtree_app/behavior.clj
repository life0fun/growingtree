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


;; - - - - - - - - - - - - 
;; transforms
;; - - - - - - - - - - - - 
; extract the user clicked nav category from msg, and store it in [:nav :category] node
(defn set-nav-category
  [_ message]
  (:category message))  ; value stored inside :category key


(defn course-transform
  [_ message]
  (:text message))  ; ret :text key from course msg map to set state val.


; set course filter value with the new value from message
(defn course-filtered-transform
  [old-value message]
  (:filtered message))  ; render fills out value in :filtered msg


(defn set-value-transform [old-value message]
  (:value message))

(def sort-order
  {[:course] 0
   [:lecture] 1})


; receive-inbound transform for SSE.
(defn receive-inbound
  [old-value message]
  (let [cat (:text message)]
    cat))  ; return new received catgory


;; - - - - - - - - - - - - 
;; derive dataflow, derive fn got 2 args, old value, and tracking map
;; - - - - - - - - - - - - 

(defn sse-fn
  [oldv newv]  ; default input specifier is tracking map, here we use single-val
  newv)


;; - - - - - - - - - - - - 
;; effect flow, effec-fn gets arg by input specifier and ret a vector of msg for service-fn.
;; - - - - - - - - - - - - 
(defn publish-category 
  [category]   ; single-val input specifier
  [{ms/topic :server :out-message {:text category}}]  ; wrap category under :text key


;; - - - - - - - - - - - - 
;; emitter to report changes, and attach transforms to template events.
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
(defn init-sidebar-emitter [inputs]
  "set up message emitter for sidebar nav UI interaction"
  [[:transform-enable [:nav :category] 
                      :set-nav-category 
                      [{msg/type :set-nav-category
                        msg/topic [:nav :category]
                        (msg/param :category) {}}]]]
  )


; when set course, all transform actions in course form templates close over current course name.
(defn set-course-delta
  "emit a vector of vectors of transform deltas that render use to set the course"
  [courses]
  [;[:node-create [:course :filtered] :map]    ; create course node
   [:value [:course] courses]
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
(defn nav-cat-emitter
  [inputs]  ; tracking map of data model
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldcat (get-in inputs [:old-model :nav :category])
        newcat (get-in inputs [:new-model :nav :category])]
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

;; effect dataflow, ret msg to be put into (:output app) queue.
(defn send-message-to-server [outbound]
  ; real msg in :sending key and wrap it into :out-message before put into output queue.
  [{msg/topic [:server] :out-message (:sending outbound)}])


;; Data Model Paths: store all global mutable states.
;; [:nav :category] - use click sidebar nav to show 
;; [:parent] - current parent
;; [:child] - current child
;; [:parent :filter] - parent filter, {(msg/param :filter) {:key :value}}
;; [:child :filter] - parent filter, {(msg/param :filter) {:key :value}}
;; [:course] - current selected course, by user click on courses lists
;; [:course :filter] - filter, {(msg/param :filter) {:key :value}}
;; [:lecture] - current selected lecture
;; [:lecture :filter] - filter, {(msg/param :filter) {:key :value}}

;; [:inbound :received] - Received inbound messages
;; [:outbound :sent] - Sent outbound messages
;; [:outbound :sending] - Pending message that effect looks to send
   
;; App Model Paths: represent div in template. linking UI action handle to 



; client app dataflow is a record that impls Receiver protocol.
(def growingtree-app
  {:version 2   ; use current version 2
    :debug true
    :transform [[:set-nav-category [:nav :category] set-nav-category]
                [:set-course [:course] course-transform]
                [:set-course-filtered [:course :filtered] course-filtered-transform]
                ; sse data will be put into :received :inbound
                [:received [:inbound] receive-inbound]
               ]
    :derive #{
             [#{[:inbound]} [:sse-data] sse-fn ]
            }

    ; effect fn triggered by [:outbound] msg and effect-fn takes msg and 
    ; ret a vec for msg to be consumed by services-fn, and xhr to back-end.
    :effect #{
              [#{[:outbound]} send-message-to-server :map]

              ; category val changed, input specifier as :single-val.
              [{[:nav :category] :category} publish-category :single-val]
            }

    ; emitter
    :emit [;{:init init-app-model}
           {:init init-sidebar-emitter}

           [#{[:parent :*]
              [:course :*]} (app/default-emitter [])]

           ;[#{[:nav :category]} (app/default-emitter [])]

           ; user click sidebar cat change, create new node [:nav :category catval]
           {:in #{[:nav :category]} :fn nav-cat-emitter :mode :always}

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
