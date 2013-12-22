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
;; a delta map keyed by path, and val is a vec of entity map {[:all :course] [{}]}
;;  {[:all :course] [{:course/subject "course.subject/coding", ..}]
;;==================================================================================

(declare navpath->renderpath)

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
; nav path from [:child 17592186045497 :parent] to [:parent 17592186045498 :parent]
(defn nav-path-emitter
  [inputs]
  (let [oldpath (vec (last (get-in inputs [:old-model :nav :path])))
        newpath (vec (last (get-in inputs [:new-model :nav :path])))
        datapath (concat [:data] oldpath)
        old-things-vec (get-in inputs (concat [:old-model] datapath))
        destroy-old-thing 
          (if old-things-vec
            (mapcat (fn [entity]
                    (let [renderpath (navpath->renderpath oldpath (:db/id entity))]
                      (.log js/console (str "nav path emitter del renderpath " renderpath))
                      [[:node-destroy renderpath]]))
                  old-things-vec)
            [[:node-destroy [:main]]])
        ]
    (.log js/console (str "nav path emitter from " oldpath " to " newpath))

    ; do not need this, squash [:data] will emit [:value [:data] oldv nil], which effectively
    ; remove all the nodes along the path.
    ; (vec 
    ;   (concat
    ;     ;((app/default-emitter nil) inputs)
    ;     ; (mapcat (fn [entity]
    ;     ;           (let [renderpath (navpath->renderpath oldpath (:db/id entity))]
    ;     ;             (.log js/console (str "nav path emitter del renderpath " renderpath))
    ;     ;             [[:node-destroy renderpath]]))
    ;     ;         old-things-vec)
    ;   ))

    [
      [:node-destroy [:header]]
      [:node-destroy [:filtered]]
      [:node-destroy [:main]]
    ]
    ))


; user click create btn, input thing type to create, transform into :nav create-modal
; now flow to emitter after transform. put on new thing template and setup msg topic.
(defn create-modal-emitter
  [inputs]
  (when-let [thing-type (last (get-in inputs [:new-model :nav :create-modal]))]
    (let [user (get-in inputs [:new-model :login :name])
          path (conj [:create] (keyword thing-type))]
      (.log js/console (str user " create modal emitter msg for " thing-type))
      [
        ; setup form submit transform msg topic
        [:node-destroy [:main]]
        [:node-destroy path]
        [:node-create path]
        [:transform-enable path
                           :create-thing
                           [{msgs/type :create-thing
                             msgs/topic path
                             (msgs/param :details) {:user user}}]]

      ])))


;;==================================================================================
; received thing data from xhr request and stored in [:data nav-path]
; XXX the meat is [:node-create render-path :map] [:value render-path entity-map]
; render-path = [:main :all 0 :course 17592186045425]
;        [:header :parent 17592186045498]
;        [:filtered :course 17592186045428 :lecture 17592186045430]
; thing-map is db entity {:db/id 17592186045425, :course/url "math.com/Math-I", 
; :course/author [{:person/lname "rich", :person/title "rich-dad",}] ..
;;==================================================================================
(defn thing-data-emitter
  "emit node-create and value delta for list of things from xhr response"
  [inputs]
  (let [msg (:message inputs)
        qpath (:qpath (:details msg))  ; qpath is used for enable add thing of qpath link
        changemap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        removed (d/removed-inputs inputs)]
    ; each change tuple consists of node-path and a vector of values
    ;(removed-thing-deltas removed)
    (.log js/console (str "thing data emit qpath " qpath " changemap " changemap))
    ; (.log js/console (str "thing data emit removed " removed))
    ; (.log js/console (str "thing data emit msg " msg))
    (vec 
      (concat
        ; with this, will emit [:value [:all :course] old-value new-val]
        ;((app/default-emitter) inputs) 
        []
        (reduce  ; input path is [:data :all 0 :parent] as emitter is [:data :* :* :*]
          (fn [deltas [input-path newvals]] 
            ; concat is vec de-pack and re-pack, enable :assign action for now
            (concat deltas (thing-data-deltas inputs input-path qpath newvals)))
          []
          changemap)))))


; ret a vector of delta tuples of node-create and value delat from a vector of 
; thing data value. value is a vector of entity tuples, mapcat vec is de-pack and re-pack vec.
; data for navpath stored in [:data :thing 1 :next-thing]
(defn- thing-data-deltas
  [inputs input-path qpath things-vec]   ; input-path = [:data :* :* :*] = [:data :all 0 :parent]
  (let [navpath (rest input-path)] ; [:data :course 1 :lecture] stores data for nav path [:course 1 :lecture]
    (vec (concat
      (mapcat
        (fn [entity-map]
          (let [id (:db/id entity-map)  ; :db/id is entity id
                thing-type (last input-path)
                ; [:main :parent 12 :child 34]
                render-path (navpath->renderpath navpath id)
                actiontransforms (thing-navpath-transforms thing-type entity-map)
               ]
            (.log js/console (str "node-create and value thing data at render-path " render-path))
            ; XXX the meat is create and value node at render-path [:header :child 17592186045497]
            (concat [ [:node-destroy render-path]
                      [:node-create render-path :map]
                      [:value render-path {:qpath qpath :thing-map entity-map}] ]
                    actiontransforms)))
        things-vec)
      ))))


; fill the render dispatch type for render node create to render proper template.
; XXX render path must be vector, otherwise, render/new-id! fail
(defn navpath->renderpath
  [navpath thing-id]  ; thing-id is passed in, to avoid [:all 0 :course] case.
  (let [[parent _ child] navpath]
    (cond 
      (= parent :all) (vec (concat [:main] navpath [thing-id]))
      (= parent child) (vec (concat [:header] (butlast navpath))) ; [:header :parent 1]
      (= child :id) (vec (concat [:detail] (butlast navpath)))  ; [:detail :parent 1]
      :else (vec (concat [:filtered] navpath [thing-id]))))) ; [filtered :thing id :next-thing id]


;;==================================================================================
; all clickable sub thing links with current thing.
; render fills the msg with type set-nav-path and topic to [:nav :path], and path vector
;;==================================================================================
(def thing-nav-links
  {
    :parent 
      {:child {:path [:parent :child]}
       :assignment {:path [:parent :assignment]}
      }

    :child 
      {:parent {:path [:child :parent]}
       :assignment {:path [:child :assignment]}
      }

    :course 
      {
       :lecture {:path [:course :lecture] }
       ;:question {:path [:course :question] }
       :assign-toggle {:path [:course :assign-toggle]}
       :assign-form {:path [:course :assign-form]}
       :add-lecture {:path [:course :add-lecture]}
      }

    :lecture 
      {
       :question {:path [:lecture :question] }
       :assign-toggle {:path [:lecture :assign-toggle]}
       :assign-form {:path [:lecture :assign-form]}
       :add-question {:path [:lecture :add-question]}
      }

    :question 
      {
       :lecture {:path [:course :lecture] }
       :course {:path [:course :course]}
       :assignment {:path [:question :assignment]}
       :assign-toggle {:path [:question :assign-toggle]}
       :assign-form {:path [:question :assign-form]}
      }

    :assignment 
      {:child {:path [:assignment :child]}
       :question {:path [:assignment :question]}
      }
  })
 
;;==================================================================================
; thing nav bar sublink transform, emit [:nav :thing 1 :next-thing] click enabler.
; for each next-thing, we setup message from thing-nav-messages and render fills the
; msg with details from collected input value. if next-thing is nav, update [:nav :path]
; all nav path next-thing as transkey are defined in thing-nva links
;;==================================================================================
(defmulti thing-navpath-transforms
  (fn [thing-type entity-map]
    thing-type))

; created node path for render at [:nav :thing-type :thing-id :extra ] :transkey, 
; triggers enable-thing-nav
(defmethod thing-navpath-transforms
  :default
  [thing-type entity-map]
  (let [thing-id (:db/id entity-map)
        transkeys (keys (get thing-nav-links thing-type))
        navpaths (map #(conj [:nav thing-type thing-id] %) transkeys)
       ]
    (mapcat
      ; [:nav :parent 17592186045499 :child] :child
      (fn [[nav type id transkey :as qpath]]
        (let [messages (thing-nav-messages qpath entity-map)] 
          (.log js/console (str "thing nav path emitter " type " " transkey " " qpath))
          (vector 
            [:transform-disable qpath]  ; fucking need to clean up your shit before re-enable.
            [:node-destroy qpath]
            [:transform-enable qpath ; always [:nav :parent 17592186045499 :child]
                               transkey   ; nav next thing, :child, :coure
                               messages
                               ] )))
      navpaths)))



; ------------------------------------------------------------------------
; generate nav path transform messages for each thing nav link click.
; the navpaths is created inside (map #(conj [:nav thing-type thing-id] %) transkeys)
; [:nav :parent 17592186045499 :child] :child
; ------------------------------------------------------------------------
(defmulti thing-nav-messages
  (fn [[nav type id transkey :as navpath] entity-map]
    transkey))


; for general next thing nav, ask render to send msg to [:nav :path] to update nav path.
; nav-path = [:nav :parent 17592186045499 :child]
(defmethod thing-nav-messages
  :default
  [[nav type id transkey :as nav-path] entity-map]
  (let [hdpath (concat (butlast (rest nav-path)) [type]) ; [:thing-type 1 :thing-type]
        qpath (rest nav-path)
        ; messages [{
        ;            msgs/topic [:nav :path] 
        ;            msgs/type :set-nav-path
        ;            :path (vec hdpath)
        ;           }
        ;           {
        ;            msgs/topic [:nav :path] 
        ;            msgs/type :set-nav-path
        ;            :path (vec qpath)
        ;           }]
        messages [{msgs/topic [:nav :path] 
                   msgs/type :set-nav-path
                   :path (vec hdpath)    ; path is current path
                   :qpath (vec qpath)}   ; qpath is next path with query filter
                 ]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))

(defmethod thing-nav-messages
  :assign-toggle
  [[nav type id transkey :as nav-path] entity-map]
  (let [messages [{
                    msgs/topic [:submit transkey] 
                    msgs/type :submit
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


(defmethod thing-nav-messages
  :assign-form
  [[nav type id transkey :as nav-path] entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


; always go :create-thing [:create :lecture] path, do not go post thing path.
(defmethod thing-nav-messages
  :add-lecture
  [[nav type id transkey :as nav-path] entity-map]
  (let [ ; add lecture, parent thing map is course
        messages [
                  {
                    msgs/topic [:create :lecture]
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }
                 ]
        ]
    messages))


(defmethod thing-nav-messages
  :add-question
  [[nav type id transkey :as nav-path] entity-map]
  (let [ ; add question, parent thing map is course
        messages [
                  {
                    msgs/topic [:create :question]
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }
                 ]
        ]
    messages))


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


;;
;; emitter when getting sse-data, dispatch by sse event type
(defn sse-data-emitter
  [inputs]  ; tracking map of data model
  (let [deltamap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        oldcat (get-in inputs [:old-model :sse-data])
        newcat (get-in inputs [:new-model :sse-data])]
    (vec (concat 
      ((app/default-emitter) inputs) ; still emit [:value [:nav :category] nil :course]
      (mapcat 
        (fn [[path] nval]
          (if oldcat
            [[:node-destroy (conj path oldcat)]
             [:node-create (conj path newcat) :map]]
            [[:node-create (conj path newcat) :map]]))
        deltamap)
      ))))
