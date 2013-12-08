(ns ^:shared growingtree-app.emitter
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msgs]
              [clojure.set :as set]))

(comment
  
  (defn example-emit [inputs]
    (returns rendering deltas))

  ;; dataflow description reference
  {:transform [[:op [:path] example-transform]]
   :derive    #{[#{[:in]} [:path] example-derive]}
   :effect    #{[#{[:in]} example-effect]}
   :continue  #{[#{[:in]} example-continue]}
   :emit      [[#{[:in]} example-emit]]}
  )

; emitter fn destructs the path of node [:todo :tasks task-id :completed]
; when adding task, (assoc todo :tasks (assoc (:tasks todo) id tasks)
; (defn todo-emitter 
;   [inputs]
;   ; from inputs tracking map, ret a vector of app model delta
;   (vec (concat
;         ; still use the default emitter, which emit [:value path old new]
;         ((app/default-emitter) inputs)  
;         ; at path node [:todo :filtered :* :*]  a new value is added.
;         ; this is 
;         (mapcat (fn [[_ _ task]]  ; added a task, destructure path = [:todo :tasks task-id]
;                   ;; When a new task is added, it needs to have transform-enables associated with it
;                   ;; It needs to be able to be toggled, and it should be removed.
;                   (when (symbol? task)
;                     [[:transform-enable [:todo :filtered-tasks task] :toggle-task [{msgs/topic [:todo] msgs/type :toggle-task :id task}]]
;                      [:transform-enable [:todo :filtered-tasks task] :remove-task [{msgs/topic [:todo] msgs/type :remove-task :id task}]]]))
;                 (:added inputs))  ; the added-map from inputs
;         ; 
;         (mapcat (fn [[_ _ task completed :as path]] ; updated a task, path is [:todo :tasks task-id :filter-type]
;                   ;; Right now the default emitter is not updating the value if it is nil or false
;                   ;; So I'm manually inserting the value 
;                   (when (and (symbol? task) (= completed :completed))                 
;                     [[:value path (get-in inputs (concat [:new-model] path))]]
;                     ))
;                 (:updated inputs))
;         (mapcat (fn [[_ _ task :as path]] ; deleted a task, path is [:todo :tasks task-id]
;                   ;; Make sure that the tasks are removed when they are removed from the data model
;                   (when (symbol? task)                    
;                     [[:node-destroy path]]
;                     ))
;                 (:removed inputs)))
;         ))


;;==================================================================================
;; emitter to report changes, and attach transforms to template events.
;; emitter-fn takes a single argument, a tracking map, or maps, or single-val
;; a delta map keyed by path, and val is a vec of entity map {[:all :courses] [{}]}
;;  {[:all :courses] [{:course/subject "course.subject/coding", ..}]
;;==================================================================================


;;==================================================================================
;; init emitter, login
;;==================================================================================
; emit init app model emtter only once when app starts to create all nodes.
; the most important things is to define transform fn that can be triggered
; by render upon UI events on this portion.
(defn init-app-model [_]
  [{:db {}
    :nav
      {:path []   ; nav path is a stack stores nav path. items in stack is nav target
       :filtered  ; a list of filtered things of current viewing
        {:transforms   ; the node path is from top to here [:course :form :set-course]
          {:set-things-filtered [{msgs/topic [:filtered] 
                                 (msgs/param :filtered) {}}]}}}
    :setup {}
    :submit {}
    :create {}
    :filter {}
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


;;==================================================================================
;; nav type on sidebar
;;==================================================================================
; user logged in, display homepage, enable all action btn and pass current
; user to message
(defn init-nav-emitter
  [inputs]
  (let [oldv (get-in inputs [:old-model :login :name])
        newv (get-in inputs [:new-model :login :name])]
    (.log js/console "login emitter " oldv " -> " newv)
    (if (not= oldv newv)
      [
        [:node-create [:nav :sidebar]]
        [:transform-enable [:nav :sidebar] 
                           :set-nav-path
                           [{msgs/topic [:nav :path]
                            (msgs/param :path) []} ]]

        ; enable login modal, for modal, msg must be 
        [:transform-enable [:nav :login-modal]
                           :login-modal
                           [{msgs/type :login-modal
                             msgs/topic [:nav :login-modal]
                            (msgs/param :login-name) ""
                            (msgs/param :login-pass) ""}]]

        [:transform-enable [:nav :create-modal] ; op
                           :create-modal   ; transkey
                           [{msgs/type :create-modal
                             msgs/topic [:nav :create-modal]
                            (msgs/param :type) ""}]]
                            
      ])))

;
; when nav type changed, emit node destroy for old list
(defn nav-path-emitter
  [inputs]
  (let [oldpath (vec (last (get-in inputs [:old-model :nav :path])))
        newpath (vec (last (get-in inputs [:new-model :nav :path])))
        ; yeah, get data from [:all :thing-path] and destroy [:all thing-tye thingid]
        datapath (concat [:data] oldpath)
        old-things-vec (get-in inputs (concat [:old-model] datapath))]
    (.log js/console (str "nav path emitter from " oldpath " to " newpath " old things-vec " old-things-vec))
    (vec 
      (concat 
        ;((app/default-emitter nil) inputs)
        (mapcat (fn [entity]
                  (.log js/console (str "nav path emitter del " (concat datapath [(:id entity)]) ))
                  [[ :node-destroy (concat datapath [(:id entity)]) ]])
                old-things-vec)
        [[:node-destroy datapath]]
        [[:node-destroy [:main]]]  ; this cause dom/destroy-children! main section.
        [[:node-destroy [:filtered]]]  ; this cause dom/destroy-children! main section.
      ))))


; user wants to create new thing of type
(defn create-modal-emitter
  [inputs]
  (when-let [thing-type (get-in inputs [:new-model :nav :create-modal])]
    (.log js/console "create modal emitter type " thing-type)
    (let [user (get-in inputs [:new-model :login :name])
          path (conj [:create] (keyword thing-type))]
      (.log js/console (str "create modal emitter " user thing-type))
      [
        ;enable setup newthing create button with transform key :newthing
        [:node-create path]
        [:transform-enable path
                           :creatething  ; can be :submit
                           [{msgs/topic path
                             msgs/type :creatething
                            (msgs/param :details) {:user user}}]]

     ])))


;;==================================================================================
;; thing data from xhr request, we do not look at changes, just blindly emit new nodes
;; single filter triggered by changemap path [:data :parent 12 :children], and thing-vec. 
;; this is b/c emitter defined at [:data :* :* :*]
;;==================================================================================
(defn thing-data-emitter
  "emit node-create and value delta for list of things from xhr response"
  [inputs]
  (let [msg (:message inputs)
        changemap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        removed (d/removed-inputs inputs)]
    ; each change tuple consists of node-path and a vector of values
    ;(removed-thing-deltas removed)
    ; (.log js/console (str "thing data emit changemap " changemap))
    ; (.log js/console (str "thing data emit removed " removed))
    ; (.log js/console (str "thing data emit msg " msg))
    (vec 
      (concat
        ; with this, will emit [:value [:all :courses] old-value new-val]
        ;((app/default-emitter) inputs) 
        []
        (reduce  ; input path is [:data :all 0 :parents] as emitter is [:data :* :* :*]
          (fn [deltas [input-path newvals]] 
            ; concat is vec de-pack and re-pack, enable :assign action for now
            (concat deltas (thing-data-deltas inputs input-path newvals)))
          []
          changemap)))))


; ret a vector of delta tuples of node-create and value delat from a vector of 
; thing data value. value is a vector of entity tuples, mapcat vec is de-pack and re-pack vec.
(defn- thing-data-deltas
  [inputs input-path things-vec]   ; input-path = [:data :* :* :*] = [:data :all 0 :parents]
  (let [navpath (rest input-path)]
    (vec (concat
      ;(filtered-parent-deltas inputs render-type navpath)
      (mapcat
        (fn [entity-map]
          (let [id (:id entity-map)
                thing-type (last input-path)
                ; [:main :parent 12 :children 34]
                render-path (navpath->render-path navpath id)
                actiontransforms (thing-navpath-transforms thing-type id)
               ]
            ; input-path = [:data :children 17592186045497 :parents]
            (.log js/console (str "thing data delta render-path " render-path entity-map))
            (concat [ [:node-create render-path :map]
                      [:value render-path entity-map] ]
                    actiontransforms)))
        things-vec)
      ))))


; fill the render dispatch type for render node create to render proper template.
; XXX render path must be vector, otherwise, render/new-id! fail
(defn navpath->render-path
  [navpath thing-id]
  (let [[parent _ child] navpath]
    (cond 
      (= parent :all) (vec (concat [:main] navpath [thing-id]))
      (= parent child) (vec (concat [:header] (butlast navpath))) ; [:header :parent 1]
      (= child :id) (vec (concat [:detail] (butlast navpath)))  ; [:detail :parent 1]
      :else (vec (concat [:filtered] navpath [thing-id])))))


;;==================================================================================
; multimethod for enable thing nav action bar links
; render fills the msg with type set-nav-path and topic to [:nav :path], and path vector
;;==================================================================================
(defmulti thing-navpath-transforms
  (fn [thing-type thing-id]
    thing-type))


; enable thing nav action bar links for parent entity.
(defmethod thing-navpath-transforms
  :parents
  [thing-type thing-id]  ; thing-id is id of parent
  (let [transkeys [:children]  ; transkeys are thing links
        navpaths (map #(conj [:nav thing-type thing-id] %) transkeys)
       ]
    (mapcat 
      ; [:nav :parents 17592186045499 :children] :children
      (fn [[path type id transkey :as navpath]]
        (let [self-path (concat (butlast (rest navpath)) [thing-type])] ; [:parents 17592186045499 :parent]
          (.log js/console (str "thing navpath transform self " self-path " sublink " (rest navpath)))
          (vector 
            [:transform-disable navpath]  ; fucking need to clean up your shit before re-enable.
            [:node-destroy navpath]
            [:transform-enable navpath    ; [:nav :parents 17592186045499 :children]
                               transkey   ; transkey
                               [ ; first msg, request current thing as parent after nav
                                {msgs/topic [:nav :path] 
                                 msgs/type :set-nav-path
                                 :path (vec self-path)}  ; no need to wrap to (msgs/param :path)
                                ; second msg, the child list of nav
                                {msgs/topic [:nav :path]
                                 msgs/type :set-nav-path 
                                 :path (vec (rest navpath))} 
                                ]] )))
      navpaths)))


; all action bar links for children entity, assignments, etc.
(defmethod thing-navpath-transforms
  :children
  [thing-type thing-id]
  (let [transkeys [:parents :assignments]  ; transkeys are thing links
        navpaths (map #(conj [:nav thing-type thing-id] %) transkeys)
       ]
    (mapcat 
      ; [:nav :parents 17592186045499 :children] :children
      (fn [[path type id transkey :as navpath]]
        (let [self-path (concat (butlast (rest navpath)) [thing-type])] ; [:parents 17592186045499 :parent]
          (.log js/console (str "thing navpath transform " self-path (rest navpath)))
          (vector 
            [:transform-disable navpath]  ; fucking need to clean up your shit before re-enable.
            [:node-destroy navpath]
            [:transform-enable navpath    ; [:nav :parents 17592186045499 :children]
                               transkey   ; transkey
                               [ ; first msg, request current thing as parent after nav
                                {msgs/topic [:nav :path] 
                                 msgs/type :set-nav-path
                                 :path (vec self-path)}  ; no need to wrap to (msgs/param :path)
                                ; second msg, the child list of nav
                                {msgs/topic [:nav :path]
                                 msgs/type :set-nav-path 
                                 :path (vec (rest navpath))} 
                                ]] )))
      navpaths)))


(defmethod thing-navpath-transforms
  :courses
  [thing-type thing-id]
  (let [actions [:lectures :assignto :enroll]
        actionpaths (map #(conj [:setup] % thing-type thing-id) actions)
       ]
    (mapcat
      ; [:setup :assign :courses 17592186045476]
      (fn [[setup action type id :as actionpath]]
        (.log js/console "thing xpath setup " setup action type id actionpath)
        (vector ;[:node-destroy actionpath]
                [:transform-enable actionpath 
                                   action
                                   [{msgs/topic actionpath
                                     (msgs/param :details) {}}]]))
      actionpaths)))


(defmethod thing-navpath-transforms
  :homeworks
  [thing-type thing-id]
  (let [actions [:assignto]
        actionpaths (map #(conj [:setup] % thing-type thing-id) actions)
       ]
    (mapcat
      ; [:setup :assign :homeworks 17592186045476]
      (fn [[setup action type id :as actionpath]]
        (.log js/console "thing actionbar setup " setup action type id actionpath)
        (vector ;[:node-destroy actionpath]
                [:transform-enable actionpath 
                                   action
                                   [{msgs/topic actionpath
                                     (msgs/param :details) {}}]]))
      actionpaths)))

(defn- removed-thing-deltas
  "the removed path node from removed-inputs, arg is node path"
  [input-path oldvals]
  (.log js/console (str "removed path " input-path " oldvals " oldvals)))


;;==================================================================================
;; action bar assign, triggered by [:setup :assign]
;;==================================================================================
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

;;==================================================================================
;; action bar newthing, triggered by [:setup :newthing]
;;==================================================================================
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
