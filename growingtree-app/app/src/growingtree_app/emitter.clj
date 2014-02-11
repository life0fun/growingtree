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
  [{
    :data {}
    :login
      {
        :name {}
        :error {}
      }

    :user {}

    :nav
      {
       :path []   ; nav path is a stack stores nav path. items in stack is nav target
       :search [] ; seach key array, stack
       :newthing [] ; nav newthing list
      }

    :create {}  ; create thing details
  }])


; user can interact with sidebar, so setup interaction on sidebar
; get login user into [:login :name], will init nav emitter to render homepage.
(defn login-emitter
  [inputs]
  "set up message emitter for sidebar nav UI interaction"
  (.log js/console (str " login-emitter " (get-in inputs [:new-model :login :name])))
  [
    [:node-create [:login :name]]
    [:transform-enable [:login :name]
                       :login
                       [{msgs/topic [:login :name] }]]
  ])


; login error, value mag contains err-map {:user {} :error "error-msg"}
(defn login-error-emitter
  [inputs]
  (let [msg (:message inputs)
        err-map (get-in inputs [:new-model :login :error])
        user (:user err-map)
        error (:error err-map)]
    (.log js/console " login-error-emitter error" (:error msg) " err " err " user " user)
    (when error
      [
        ; login name pass
        [:transform-disable [:login :name]]
        [:node-destroy [:login :name]]

        [:node-create [:login :name]]
        [:value [:login :name] err-map]
        [:transform-enable [:login :name]
                           :login
                           [{msgs/topic [:login :name] }]]
      ])
    ))

;;==================================================================================
; user logged in, show homepage, enable all action btn and pass current user in msg
;;=================================================================================+
(defn init-nav-emitter
  [inputs]
  (let [oldv (get-in inputs [:old-model :user])
        newv (get-in inputs [:new-model :user])]
    (.log js/console (str "init-nav-emitter " oldv " -> " newv))
    ;(if (not= oldv newv)
    (if newv
      [ ; first, destroy existing login dialog
        [:transform-disable [:login :name]]
        [:node-destroy [:login]]

        ; show login user
        [:value [:nav :user] newv]

        [:node-create [:nav :sidebar]]
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

        ; [:transform-enable [:nav :create-modal] ; topic
        ;                    :create-modal   ; transkey
        ;                    [{msgs/type :create-modal
        ;                      msgs/topic [:nav :create-modal]
        ;                     (msgs/param :type) ""}]]

        [:transform-enable [:nav :newthing] ; topic
                           :nav-newthing   ; transkey
                           [{msgs/type :nav-newthing
                             msgs/topic [:nav :newthing]
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
    (.log js/console (str "nav-path-emitter node-destroy all from " oldpath " to " newpath))

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
; deprecated !!!
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
        ; use common code path of toggle add thing form fn.
        ; [:transform-enable path
        ;                    :create-thing
        ;                    [{msgs/type :create-thing
        ;                      msgs/topic path
        ;                      (msgs/param :details) {:user user}}]]

      ])))


; nav newthing form submitted, transform :nav :newthing, and emit [:create :newthing]
(defn nav-newthing-emitter
  [inputs]
  (when-let [thing-type (last (get-in inputs [:new-model :nav :newthing]))]
    (let [user (:user (get-in inputs [:new-model :login :name]))
          rpath (conj [:create] (keyword thing-type))]
      (.log js/console (str user " nav-newthing-emitter for " thing-type " " rpath))
      [
        ; setup form submit transform msg topic
        [:node-destroy [:main]]
        [:node-destroy rpath]
        [:node-create rpath]
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
;
; from qpath, create render path for [:node-create [:main/:header/:filtered ...] ]
; for each sublink of the thing, enable link click transform using nav path [:nav :* :**]
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
; data for navpath stored in [:data :header 1 :filtered]
; thing data emit qpath [:course 1 :comments] changemap {[:data :course 1 :course]
; (:data :author 1 :author) rpath [:details :parent 1 :person 1]
(defn- thing-data-deltas
  [inputs data-path qpath things-vec]  ; data-path is where data vector is stored.
  ; data-path = [:data :* :* :*] = [:data :all 0 :parent] [:data :course 1 :comments]
  (let [navpath (rest data-path)] ; [:data :header 1 :filtered]
    (vec (concat
      (mapcat
        (fn [entity-map]
          (let [; each thing map has navpath indicates query path, for UI nav and display
                thing-map (keyword-thing-navpath entity-map)
                id (:db/id thing-map)  ; get :db/id as each node render path id
                ; thing-map has a :navpath filled by (util/add-navpath % qpath),
                ; navpath = [:header 1 :filtered], ["all" 0 "course"], or ["course" 1 "comments"]
                render-path (thing-navpath->renderpath (:navpath thing-map) thing-map)
                thing-type (second (reverse render-path))
                actiontransforms (thing-navpath-transforms thing-type render-path thing-map)
                comments-box (add-comments-box render-path qpath)
                details-box (add-details-box render-path qpath)
               ]
            ; (:data :author 1 :author) rpath [:details :parent 1 :person 1]
            (.log js/console (str "thing-data-deltas " thing-type " navpath " navpath "rpath " render-path))
            ; emit thing node value at render-path, and add comments and details box, lastly action transforms.
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
; :qpath ["all" 0 "course" 1], or  ["course" 1 "comments" 2], or ["course" 1 "course" 2]
; rpath for render thing node, [:value [:main/:header/:filtered/:details :* :* :* :*]]
; for author case, (:person 1 :person), title case (:course 1 :title)
(defn thing-navpath->renderpath
  [thing-navpath thing-map]
  (let [[parent pid child] (take 3 thing-navpath)]
    (.log js/console (str "navpath renderpath " (take 3 thing-navpath)))
    (cond
      (= parent :all) (vec (concat [:main] thing-navpath))
      (= child :title) (vec (concat [:details] thing-navpath))

      ; person entity, resolve to parent/child.
      ; [:details :parent 1 :person 1], thing node html dispatch on :person, pick parent template.
      (= parent :person)
        (let [person-id (:db/id thing-map)
              person-type (keyword (:person/type thing-map))]
          (vec (concat [:details] [person-type person-id :person person-id])))

      ; substitute enrollment with person, as enrollment list all person.
      (= child :enrollment)
        (let [person-id (:db/id thing-map)
              person-type (keyword (:person/type thing-map))]
          (vec (concat [:filtered] [parent pid person-type person-id])))

      ; substitute group-members with person, as group-member list all person
      (= child :group-members)
        (let [person-id (:db/id thing-map)
              person-type (keyword (:person/type thing-map))]
          (vec (concat [:filtered] [parent pid person-type person-id])))

      ; [:course 1 :course], display course in header
      (= parent child)
        (vec (concat [:header] (take 2 thing-navpath))) ; [:header :parent 1]

      ; display [filtered :thing id :next-thing id]
      :else
        (vec (concat [:filtered] thing-navpath)))))


;;==================================================================================
; subthing link transforms prefix by :nav [:nav :thing 1 :next-thing] for enable-thing-nav
; for each next-thing, we setup message from thing-nav-messages and render fills the
; msg with details from collected input value. if next-thing is nav, update [:nav :path]
; all nav path next-thing as transkey are defined in thing-nva links
; we also pass render path to transform as thing node template is attached to render path.
;;==================================================================================
(defmulti thing-navpath-transforms
  (fn [thing-type render-path entity-map]
    thing-type))

; created node path for render at [:nav :thing-type :thing-id :extra ] :transkey,
; thing nav actionkey is taken from entity-vew with thing-type
; thing-type :enrollment render-path [:filtered :course 1 :child 2]
(defmethod thing-navpath-transforms
  :default
  [thing-type render-path entity-map]
  (let [thing-id (:db/id entity-map)
        ;a list of nav action keys defined in entity-view
        transkeys (keys (get entity-view/thing-nav-actionkey thing-type))
        navpaths (map #(conj [:nav thing-type thing-id] %) transkeys)
       ]
    ; map the list of nav actions for each thing type.
    (mapcat
      ; [:nav :parent 17592186045499 :child] :child
      (fn [[nav type id transkey :as navpath]]
        (let [messages (thing-nav-messages navpath render-path entity-map)]
          (.log js/console (str "thing-navpath-transforms :default " type " " transkey " " navpath))
          (vector
            [:transform-disable navpath]  ; fucking need to clean up your shit before re-enable.
            [:node-destroy navpath]
            [:transform-enable navpath    ; transforms navpath [:nav :parent 1 :child]
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
    (.log js/console (str "thing-navpath-transforms :title " thing-type render-path))
    (thing-navpath-transforms head-thing-type render-path entity-map)))


; thing-type is person, rpath [:details :parent 1 :person 1]
(defmethod thing-navpath-transforms
  :person
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
        ; thing nav msg diff for each actionkey.
        (let [messages (thing-nav-messages navpath render-path entity-map)]
          (.log js/console (str "thing-navpath-transforms :author " type " " transkey " " navpath))
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


; for non input form nav next, ask render to send msg to [:nav :path] to update nav path.
; path [:thing 1 :thing] is for header, and qpath [:thing 1 :next] to for filtered
; rpath is cur thing's path. [:main :course 1 :lecture 2] or [:header :course 1]
; nav-path = [:nav :parent 17592186045499 :child], include thing title and author link.
(defmethod thing-nav-messages
  :default
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [hdpath (concat (butlast (rest nav-path)) [thing-type]) ; replace last as nav next target
        qpath (rest nav-path) ; [:nav :parent 17592186045499 :child]
        messages [{msgs/topic [:nav :path]
                   msgs/type :set-nav-path
                   :path (vec hdpath)    ; path is for [:header :course 1 :course]
                   :qpath (vec qpath)    ; qpath is for [:filtered :course 1 :lecture]
                   :rpath (vec render-path)}   ; [:main :course 1 :lecture 2]
                 ]
        ]
    ;(.log js/console (str "thing-nav-messages " messages))
    messages))


;------------------------------------------------------------------------------------
; for upvote transform msg, need both render-path and thing-map to inc and refresh view.
;------------------------------------------------------------------------------------
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

;------------------------------------------------------------------------------------
; nav msg for add new thing by type.
; need to display input form, and collect input value into msg details and send back.
;------------------------------------------------------------------------------------
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


; add an activity to the group, etc
(defmethod thing-nav-messages
  :add-activity
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [ ; add comments, parent thing map is course
        messages [
                  {
                    msgs/topic [:create :activity]
                    msgs/type :create-thing
                    (msgs/param :thing-map) entity-map
                    (msgs/param :details) {}
                  }
                 ]
        ]
    messages))


;------------------------------------------------------------------------------------
; enroll, assign to, submit answer, grade, and reply comments
;------------------------------------------------------------------------------------
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
  :assignto
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
  :submit-answer
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


; grade to answer. [:nav :answer 17592186045439 :grade]
(defmethod thing-nav-messages
  :grade
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

;------------------------------------------------------------------------------------
; click join link to join a group, show join-form, we need thing-map for override value.
;------------------------------------------------------------------------------------
(defmethod thing-nav-messages
  :join-group
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [messages [{ ; do not matter. render always transform [:create :thing-type]
                    msgs/topic [:create :group]  ; join a group
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
; XXX the id in [:author id :author] is the id of the thing, not id of author.
; :path [:author 17592186045428 :author], :rpath [:main :all 0 :course 17592186045428]}
(defmethod thing-nav-messages
  :author
  [[nav thing-type id transkey :as nav-path] render-path entity-map]
  (let [
        hdpath [:author id :author]  ; the author of thing id, not author's id
        qpath (rest nav-path) ; [:nav :parent 17592186045499 :child]
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
        qpath (rest nav-path) ; [:nav :parent 17592186045499 :child]
        messages [{msgs/topic [:nav :path]
                   msgs/type :set-nav-path
                   :path (vec hdpath)    ; path is current path [:title 1 :title]
                   :rpath (vec render-path)}   ; [:main :course 1 :title 2]
                 ]
        ]
    messages))


;;==================================================================================
; upon nav to comments, ask render to display add comments box on filtered details
; qpath is [:lecture 1 :comments], we get to comments from lecture.
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
; qpath is [:lecture 1 :title], we get to title from lecture.
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
