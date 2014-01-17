(ns ^:shared growingtree-app.emitter
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msgs]
              [clojure.set :as set]
              [growingtree-app.entity-view :as entity-view]
              [growingtree-app.util :as util]))


(comment
  (defn example-emit [inputs]
    (returns rendering deltas))

  ;; dataflow description reference
  {:transform [[:op [:path] example-transform]]
   :derive    #{[#{[:in]} [:path] example-derive]}
   :effect    #{[#{[:in]} example-effect]}
   :continue  #{[#{[:in]} example-continue]}
   :emit      [[#{[:in]} example-emit]]})

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
; get login user into [:login :name], will init nav emitter to render homepage.
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
        [:value [:nav :login] newv]
        [:transform-enable [:nav :sidebar] 
                           :set-nav-path
                           [{msgs/topic [:nav :path]
                            (msgs/param :path) []} ]]

        [:transform-enable [:nav :search] 
                           :set-nav-search
                           [{msgs/topic [:nav :search]
                            (msgs/param :searchkey) ""} ]]

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



; when nav type changed, emit node destroy for old list
; nav path from [:child 17592186045497 :parent] to [:parent 17592186045498 :parent]
; XXX for each render path, we need to destroy the node upon nav path change.
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
    (.log js/console (str "nav-path-emitter from " oldpath " to " newpath))

    ; for each render path, we need to destroy the render path upon nav path change.
    [
      [:node-destroy [:header]]
      [:node-destroy [:filtered]]
      [:node-destroy [:details]]
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
; qpath record the path next path, from [:course 1 to :comments]
; thing data emit qpath [:course 17592186045425 :comments] changemap {[:data :course 1 :course] 
; data-path is :msg-topic in effect request thing.
;;==================================================================================
(defn thing-data-emitter
  "emit node-create and value delta for list of things from xhr response"
  [inputs]
  (let [msg (:message inputs)
        qpath (:qpath (:details msg))  ; qpath is used for enable add thing of qpath link
        changemap (merge (d/added-inputs inputs) (d/updated-inputs inputs))
        removed (d/removed-inputs inputs)]
    ; each change tuple consists of node-path and a vector of values
    (.log js/console (str "thing data emit qpath " qpath " changemap " changemap))
    ;(.log js/console (str "thing data emit removed " removed))
    ;(.log js/console (str "thing data emit msg " msg))
    (vec 
      (concat
        ; with this, will emit [:value [:all :course] old-value new-val]
        ;((app/default-emitter) inputs)
        []
        (reduce  ; data path is [:data :all 0 :parent] as emitter is [:data :* :* :*]
          (fn [deltas [data-path newvals]] ; data path is :msg-topic [] in request thing
            ; concat is vec de-pack and re-pack, enable :assign action for now
            (concat deltas (thing-data-deltas inputs data-path qpath newvals)))
          []
          changemap)))))


; ret a vector of delta tuples of node-create and value delat from a vector of 
; thing data value. value is a vector of entity tuples, mapcat vec is de-pack and re-pack vec.
; data for navpath stored in [:data :thing 1 :next-thing]
; thing data emit qpath [:course 17592186045425 :comments] changemap {[:data :course 17592186045425 :course] 
(defn- thing-data-deltas
  [inputs data-path qpath things-vec]  ; data-path is where data vector is stored.
  ; data-path = [:data :* :* :*] = [:data :all 0 :parent] [:data :course 1 :comments]
  (let [navpath (rest data-path)] ; [:data :course 1 :lecture] stores data for nav path [:course 1 :lecture]
    (vec (concat
      (mapcat
        (fn [entity-map]
          (let [; each thing map has navpath indicates query path, for UI nav and display
                thing-map (keyword-thing-navpath entity-map)
                id (:db/id thing-map)  ; get :db/id as each node render path id
                thing-type (last data-path)
                
                ; thing-map has a :navpath filled by (util/add-navpath % qpath), 
                ; navpath tells who is the parent of this entity during navigation.
                ; :navpath ["all" 0 "course" 1], or  ["course" 1 "comments" 2], or ["course" 1 "course" 2]
                render-path (thing-navpath->renderpath (:navpath thing-map) thing-map)
                actiontransforms (thing-navpath-transforms thing-type render-path thing-map)
                comments-box (add-comments-box render-path qpath)
                details-box (add-details-box render-path qpath)
               ]
            (.log js/console (str "node-create and value thing data render path" render-path " navpath " navpath))
            (concat [ [:node-destroy render-path]
                      [:node-create render-path :map]
                      [:value render-path {:qpath qpath :thing-map thing-map}] ]
                    comments-box
                    details-box
                    actiontransforms)
        ))
        things-vec)
      ))))


; thing qpath, akas navpath of thing map, record how we get to current thing. 
; ["all" 0 "course" 17592186045425], or  
; ["course" 17592186045425 "course" 17592186045425], for header 
; ["course" 17592186045425 "comments" 17592186045433], for filtered details view.
(defn keyword-thing-navpath
  "given a thing entity map, convert navpath segment from json string token to keyword"
  [thing-map]
  (let [navpath (:navpath thing-map)
        knavpath (util/map-every-nth keyword navpath 2)]
    ;(.log js/console (str "keyword thing navpath " navpath knavpath))
    (assoc-in thing-map [:navpath] knavpath)))


; thing-map :navpath was set in server side with qpath by (util/add-navpath % qpath)
; navpath tells the query path we reach to this entity during navigation.
; prefix main, header, filtered to it, form the render path for render to dispatch.
; :navpath ["all" 0 "course" 1], or  ["course" 1 "comments" 2], or ["course" 1 "course" 2]
(defn thing-navpath->renderpath
  [thing-navpath thing-map]
  (let [[parent pid child] (take 3 thing-navpath)]
    (cond 
      (= parent :all) (vec (concat [:main] thing-navpath))
      (= child :title) (vec (concat [:details] thing-navpath))
      ; for person thing, map to person type for choosing right person template.
      ; [:parent 1 :person 1], thing node html dispatch on :person, pick parent template.
      (= parent :person)
        (let [person-id (:db/id thing-map)
              person-type (keyword (:person/type thing-map))]
          (vec (concat [:details] [person-type person-id])))

      ; substitute enrollment with person, as enrollment list all person.
      (= child :enrollment)
        (let [person-id (:db/id thing-map)
              person-type (keyword (:person/type thing-map))]
          (vec (concat [:filtered] [parent pid person-type person-id])))
        
      (= parent child) (vec (concat [:header] (take 2 thing-navpath))) ; [:header :parent 1]
      :else (vec (concat [:filtered] thing-navpath))))) ; [filtered :thing id :next-thing id]


;;==================================================================================
; thing nav bar sublink transform, emit [:nav :thing 1 :next-thing] click enabler.
; for each next-thing, we setup message from thing-nav-messages and render fills the
; msg with details from collected input value. if next-thing is nav, update [:nav :path]
; all nav path next-thing as transkey are defined in thing-nva links
; we also pass render path to transform as thing node template is attached to render path.
;;==================================================================================
(defmulti thing-navpath-transforms
  (fn [thing-type render-path entity-map]
    thing-type))

; created node path for render at [:nav :thing-type :thing-id :extra ] :transkey, 
; thing-type :enrollment render-path [:filtered :course 1 :child 2]
(defmethod thing-navpath-transforms
  :default
  [thing-type render-path entity-map]
  (.log js/console (str "thing-navpath-transforms " thing-type render-path))
  (let [thing-id (:db/id entity-map)
        ;thing nav action keys defined in entity-view 
        transkeys (keys (get entity-view/thing-nav-actionkey thing-type))
        navpaths (map #(conj [:nav thing-type thing-id] %) transkeys)
       ]
    (mapcat
      ; [:nav :parent 17592186045499 :child] :child
      (fn [[nav type id transkey :as navpath]]
        (let [messages (thing-nav-messages navpath render-path entity-map)] 
          (.log js/console (str "thing nav path emitter " type " " transkey " " navpath))
          (vector 
            [:transform-disable navpath]  ; fucking need to clean up your shit before re-enable.
            [:node-destroy navpath]
            [:transform-enable navpath ; always [:nav :parent 17592186045499 :child]
                               transkey   ; nav next thing, :child, :coure
                               messages] 
          )))
      navpaths)))


; for enrollment, we need to substitute with either parent or child
(defmethod thing-navpath-transforms
  :enrollment
  [thing-type render-path entity-map]
  (let [next-type (second (reverse render-path))]
    (thing-navpath-transforms next-type render-path entity-map)))


; -------------------------------------------------------------------------------
; for header of details thing, thing-type is the ident of the entity map
; thing-type is title, rpath [:details :course 17592186045428 :title 17592186045428]
; -------------------------------------------------------------------------------
(defmethod thing-navpath-transforms
  :title
  [thing-type render-path entity-map]
  (let [head-thing-type (second render-path)]
    (.log js/console (str "thing-navpath-transforms " thing-type render-path))
    (thing-navpath-transforms head-thing-type render-path entity-map)))
  

(defmethod thing-navpath-transforms
  :author
  [thing-type render-path entity-map]
   (let [thing-id (:db/id entity-map)
         thing-type (keyword (:person/type entity-map))
        ;thing nav action keys defined in entity-view 
        transkeys (keys (get entity-view/thing-nav-actionkey thing-type))
        navpaths (map #(conj [:nav thing-type thing-id] %) transkeys)
       ]
    (mapcat
      ; [:nav :parent 17592186045499 :child] :child
      (fn [[nav type id transkey :as navpath]]
        (let [messages (thing-nav-messages navpath render-path entity-map)] 
          (.log js/console (str "thing nav path emitter " type " " transkey " " navpath))
          (vector 
            [:transform-disable navpath]  ; fucking need to clean up your shit before re-enable.
            [:node-destroy navpath]
            [:transform-enable navpath ; always [:nav :parent 17592186045499 :child]
                               transkey   ; nav next thing, :child, :coure
                               messages] 
          )))
      navpaths)))

; ------------------------------------------------------------------------
; generate nav path transform messages for each thing nav link click.
; the navpaths is created inside (map #(conj [:nav thing-type thing-id] %) transkeys)
; [:nav :parent 17592186045499 :child] :child
; ------------------------------------------------------------------------
(defmulti thing-nav-messages
  (fn [[nav thing-type id transkey :as navpath] render-path entity-map]
    transkey))


; for general next thing nav, ask render to send msg to [:nav :path] to update nav path.
; path [:thing 1 :thing] is for header, and qpath [:thing 1 :next] to for filtered 
; rpath is cur thing's path. [:main :course 1 :lecture 2] or [:header :course 1]
; nav-path = [:nav :parent 17592186045499 :child], include thing title and author link.
(defmethod thing-nav-messages
  :default
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [hdpath (concat (butlast (rest nav-path)) [thing-type]) ; replace last as nav next target
        qpath (rest nav-path)
        messages [{msgs/topic [:nav :path] 
                   msgs/type :set-nav-path
                   :path (vec hdpath)    ; path is for [:header :course 1 :course]
                   :qpath (vec qpath)    ; qpath is for [:filtered :course 1 :lecture]
                   :rpath (vec render-path)}   ; [:main :course 1 :lecture 2]
                 ]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


; click enroll link will show enrollment-form, we need thing-map for override value.
(defmethod thing-nav-messages
  :enroll
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :rpath) render-path
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


(defmethod thing-nav-messages
  :assign-form
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :rpath) render-path
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


(defmethod thing-nav-messages
  :answer-form
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :rpath) render-path
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


; grade to answer. [:nav :answer 17592186045439 :grade-form]
(defmethod thing-nav-messages
  :grade-form
  [[nthing-av type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :rpath) render-path
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


; always go :create-thing [:create :child] path, do not go post thing path.
(defmethod thing-nav-messages
  :add-child
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [ ; add child, parent thing map is course
        messages [
                  {
                    msgs/topic [:create :child]
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }
                 ]
        ]
    messages))


; always go :create-thing [:create :parent] path, do not go post thing path.
(defmethod thing-nav-messages
  :add-parent
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [ ; add parent, parent thing map is course
        messages [
                  {
                    msgs/topic [:create :parent]
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }
                 ]
        ]
    messages))

; always go :create-thing [:create :lecture] path, do not go post thing path.
(defmethod thing-nav-messages
  :add-lecture
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
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
  [[nav type id transkey :as nav-path] render-path entity-map]
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

; add comments, render transformer will display comments template 
(defmethod thing-nav-messages
  :add-comments
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [ ; add comments, parent thing map is course
        messages [
                  {
                    msgs/topic [:create :comments]
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }
                 ]
        ]
    messages))

; reply to comments form
(defmethod thing-nav-messages
  :reply-form
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :rpath) render-path
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))

; for upvote transform msg, need both render-path and thing-map to inc and refresh view.
(defmethod thing-nav-messages
  :upvote
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create transkey]  
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :rpath) render-path
                    (msgs/param :details) {}
                  }]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


; -----------------------------------------------------------------------------------
; following are links to the details of the thing, not link to next thing.
; -----------------------------------------------------------------------------------
; when click author, header will be author entry and details will be author details
; note that the id in [:author id :author] is the id of the thing, not id of author.
(defmethod thing-nav-messages
  :author
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [hdpath [:author id :author]  ; the author of thing id, not author's id
        qpath (rest nav-path)
        messages [{msgs/topic [:nav :path] 
                   msgs/type :set-nav-path
                   :path (vec hdpath)    ; path is current path [:author 1 :author]
                   :rpath (vec render-path)}   ; [:main :course 1 :author 2]
                 ]
        ]
    messages))


; when click title, header will be title entry and details will be title details
; we use one query for the thing, not path and qpath, so we do not set qpath.
; nav-path = [:nav :course 17592186045499 :title], thing-type is course, transkey is title.
(defmethod thing-nav-messages
  :title
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [; replace last to be title for proper nav path to render path
        hdpath (concat (butlast (rest nav-path)) [:title])
        qpath (rest nav-path)
        messages [{msgs/topic [:nav :path] 
                   msgs/type :set-nav-path
                   :path (vec hdpath)    ; path is current path [:title 1 :title]
                   :rpath (vec render-path)}   ; [:main :course 1 :title 2]
                 ]
        ]
    messages))

;;==================================================================================
;; action bar assign emitter, triggered by [:setup :assign]
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
; upon nav to comments, ask render to display add comments box on filtered details
; node path [:setup :lecture 1 :comments]  Always destroy before create !!!
;;==================================================================================
(defn add-comments-box
  [render-path qpath]
  (let [filtered-hd (first render-path)
        nxt (last qpath)]
    (.log js/console (str "add comments transforms " qpath nxt filtered-hd render-path))
    (if (and (= filtered-hd :header) (= nxt :comments)) ; only display comments box when nav to comments.
      [ [:node-destroy (concat [:setup] qpath)]
        [:node-create (concat [:setup] qpath)]
      ]
      [])))


;;==================================================================================
; upon title clicked, nav to details pages, ask render to display details section.
; node path [:setup :lecture 1 :title]  Always destroy before create !!!
;;==================================================================================
(defn add-details-box
  [render-path qpath]
  (let [filtered-hd (first render-path)
        nxt (last qpath)]
    (.log js/console (str "add details box " qpath nxt filtered-hd render-path))
    (if (and (= filtered-hd :header) (= nxt :title))
      [ [:node-destroy (concat [:details] qpath)]
        [:node-create (concat [:details] qpath)]
      ]
      [])))

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
