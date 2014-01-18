(ns growingtree-app.transforms
  (:require [domina :as dom]
            [domina.css :as dc]
            [domina.events :as de]
            [domina.xpath :as dx]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.protocols :as p]
            [io.pedestal.app.messages :as msgs]
            [io.pedestal.app.util.log :as log]
            [io.pedestal.app.render.push.handlers :as h]
            [io.pedestal.app.render.push.handlers.automatic :as auto]
            [growingtree-app.util :as util]
            [growingtree-app.entity-view :as entity-view]
            [growingtree-app.selector :as sel]
            [growingtree-app.newthing-form :as newthing-form])
  (:require-macros [growingtree-app.html-templates :as html-templates]))

;=============================================================================
; transform module is responsible for dom selector element, and listen to
; dom events, and handle events by sending transform messages back to app model.
; to get dom element value, can not use class selector, must use xpath selector
; with id as class selector returns a list of node and id return unique element.
;=============================================================================

;
; data structure in cljs are cljs.core.X data structure.
;   [node path]  - cljs.core.PersistentVector.
;   vals are cljs.core.PersistentHashMap.
;
; render converts node in nested map to dom element. The root node []
; is configured when we created the render.
;
; render fn has 3 args, render, render op and a input-queue to sends
; data back to app. 
; Render op is specified by transforms in emitter.
; input-queue is used for transform-enable to send back user click event.
; transforms say part of UI should do X and render trigger X on events.
; (defn enable-x [r [transform-enable path transform-name messages] d]
;
; new-id can be used to create the id for the path node, and use that id 
; as div id for the template that attached to the path node.
;     (render/new-id! r path)
;     (render/get-id r path)
;
; add-template attaches template div subtree to a path node. [path ::template]
;   (render/set-data! r (conj path ::template) template)
;
; once template is attached to [:path :node ::template], use update-t to update
; the content of the node with new data map
;   (template/update-t r path {:key new-value})
;
; prepend-t and append-t add div section with data map value to existing 
; template in the node path.
;   (template/prepend-t render path data-map)
;
; when changing template, always gives data map.
;
; the other way is use dom append by-id and dom destroy-children!
;   (dom/append! (dom/by-id "topthings") t)
;   (dom/destroy-children! (dom/by-id "xx"))
;


; node-create, 
;  handle fn got message type as node-create and path in message itself.

; transform message
; transform-enable messages sent from behavior clj, is PersistentArrayMap. It is a Map.
; when come to cljs code, PersistentArrayMap changed to PersistentVector.
; on cljs world, there are only PersistentVector and PersistentMap.
; when sending back to clj, messages converted back to PersistentArrayMap.
; note that when accessing msg params here, need to use (msgs/param :details)


; Load templates macro.
(def templates (html-templates/growingtree-app-templates))


;;==================================================================================
;; login btn event handler
;;==================================================================================
(defn enable-login-submit
  "listen login btn event and sent transform msgs back to behavior"
  [_ [_ path transform-name messages] input-queue]
  (.log js/console (str "enable login submit " path messages))
  (events/collect-and-send :click 
                           "login-button" 
                           input-queue 
                           transform-name 
                           messages
                           {"login-name" :login-name  "login-pass" :login-pass}))


(defn disable-login-submit
  [_ _ _]
  (events/remove-click-event "login-button"))


;;==================================================================================
;; sidebar nav click event handler
;;==================================================================================

; sidebar click transform [:nav :path] value, trigger request to get list of things.
; ; sidebar clicked, path is always [:sidebar 0 cur-li]
(def enable-sidebar-nav
  "wire sidebar click event to all things transform fn"
  (fn [r [_ p transform-name messages] input-queue]
    (let [sidebars [:parent :child 
                    :group :schoolclass
                    :course :lecture :question :assignment 
                    :comments :like 
                    :topquestion :topanswer :ask :answer
                    :timeline :knowledge :activity :location]]
      (doseq [s sidebars]
        (events/send-on :click
                        (dom/by-id (str "sidenav-" (name s)))
                        input-queue
                        (msgs/fill :set-nav-path
                                    messages
                                    {:path [:all 0 s]})))
    )))

;;==================================================================================
;; search form
;;==================================================================================
(def enable-search
  "upon search form submit, send msg to transform :nav :search"
  (fn [r [_ p transform-name messages] input-queue]
    (let [form (dom/by-id "nav-search-form")
          btn-submit (dom/by-id "nav-search-submit")
          ; raw domina fn, need to repvent default and put msg to queue by myself.
          submit-fn
            (fn [e]
              (let [searchkey (dom/value (dom/by-id "nav-search-key"))
                    messages (msgs/fill :set-nav-search messages {:searchkey searchkey})]
                (de/prevent-default e)  ; submit ret false, prevent refresh or redirect
                (doseq [m messages]
                  (p/put-message input-queue m))))
         ]
      (.log js/console (str "enable search submit " messages "form " form))
      (de/listen! btn-submit :click submit-fn)
    )))


;;==================================================================================
;; action bar multimethod dispatches by transkey/action, path [:setup :transkey]
;; transkey, when setup from emitter, is next link, when come back to behavior, is transkey.
;;==================================================================================
;; [:transform-enable [:setup :child 17592186045496 :assignment] :assignment]
(defmulti enable-setup-action
  (fn [render [target path transkey messages] input-queue]
    transkey))

(defmulti enable-submit-action
  (fn [render [target path transkey messages] input-queue]
    transkey))


;; ---------------------------------------------------------------------------------
; create new thing btn clicked event handler, listen submit event and fill details
; create-thing type is from nav path, keyword from create-modal. 
; messages/topic [:create :course], effect triggered by [:create :*]
; this fn to handle top nav create btn, hence empty override thing-map.
; rendering and collecting inputs are encapsulated inside newthing-form.
;; ---------------------------------------------------------------------------------
(defmethod enable-submit-action 
  :create-thing
  [r [target path transkey messages] input-queue]
  (let [thing-type (last path)
        form (dom/by-class (str (name thing-type) "-form"))
        btn-cancel (-> form (dx/xpath "//button[@id='cancel']"))
        thing-map {}  ; empty override thing-map for fresh create thing
        submit-fn (newthing-form/submit-fn type form thing-map messages)
       ]
    (.log js/console (str "enable submit action :create-thing page " path transkey messages))
    ;(de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))
    ;(events/send-on :submit form input-queue submit-fn)
    (newthing-form/handle-add-thing-cancel thing-type)
    (newthing-form/handle-add-thing-submit thing-type path {} input-queue)
    ))


;;==================================================================================
; ; [:nav :thing-type :thing-id :nex-thing] click on next-thing event listener.
; render path is created by thing-navpath-transforms emitter.
; path = [:transform-enable [:nav :child 17592186045496 :parent]] 
; path, transkey and messages setup in emitter thing-navpath-transforms, [nav type id transkey]
;
; transkey name defined in thing.html thing-type, also in entity-view thing-nav-actionkey
;;==================================================================================
(defmulti enable-thing-nav
  (fn [render [op path transkey messages] input-queue]
    ; transkey defined in thing.html thing-type, also in entity-view thing-nav-actionkey
    transkey))


; default action for sublink, no params to fill, thing-nav-messages already setup
; msg :path [:nav :thing id :next] with transkey = :next, so just send back transforms.
; default for all next thing navigation, e.g, from course to lecture, to question.
(defmethod enable-thing-nav
  :default 
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :child]
        thing-id (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thing-id))
        next-thing (str (name transkey) "-" thing-id)
        ; thing nav link class set inside entity view class
        thing-link (dom/by-class next-thing)]
    (.log js/console (str "enable thing nav " path " " thing-id " " next-thing " " ))
    ; wrap assign link with div and use class selector
    (de/listen! thing-link
                :click 
                (fn [e]
                  (let [; deprected ! not used. emitter already set it up.
                        new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
                    (.log js/console (str thing-type  " nav to " next-thing " msgs " messages))
                    (de/prevent-default e)  ; submit ret false, prevent refresh or redirect
                    (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
                      (p/put-message input-queue m)))))
  ))


; ------------------------------------------------------------------------------------
; thing title clicked, we need to show current thing in header
; [:transform-enable [:nav :courses 17592186045496 :title] :title
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; title, qpath [:course 1 :title]
  :title
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :title]
        thing-id (first (reverse (butlast navpath)))
        thing-type (first navpath)
        title-id (str thing-id "-" (name transkey))
        title-link (dom/by-id title-id)
        click-fn 
          (fn [e]
            (let [; deprected ! not used. emitter already set it up.
                  new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
              (.log js/console (str thing-type  " nav to " title-id " msgs " messages))
              (de/prevent-default e)  ; submit ret false, prevent refresh or redirect
              (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
                (p/put-message input-queue m))))
       ]
    (.log js/console (str "enable thing nav title " path ))
    ; click fn will doseq put msg to input-queue
    (de/listen! title-link :click click-fn)
  ))


; ------------------------------------------------------------------------------------
; enable author link click for thing
; [:transform-enable [:nav :courses 17592186045496 :author] :author
; message :set-nav-path :path [:person nil :person], :qpath [:course 1 :author], :rpath [:main :all 0 :course 1]
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; author, qpath [:course 1 :author]
  :author
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :author]
        thing-id (first (reverse (butlast navpath)))
        thing-type (first navpath)
        author-link (dom/by-id (str thing-id "-" (name transkey)))
        click-fn 
          (fn [e]
            (let [; deprected ! not used. emitter already set it up.
                  new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
              (.log js/console (str thing-type  " nav to author msgs " messages))
              (de/prevent-default e)  ; submit ret false, prevent refresh or redirect
              (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
                (p/put-message input-queue m))))
       ]
    (.log js/console (str "enable thing nav author " path))
    ; click fn will doseq put msg to input-queue
    (de/listen! author-link :click click-fn)
  ))


; ------------------------------------------------------------------------------------
; enable upvote event handler, defined in thing-type template and entity-view
; [:transform-enable [:nav :courses 17592186045496 :upvote] :upvote
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; upvote 
  :upvote
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :upvote]
        thing-id (first (reverse (butlast navpath)))
        thing-type (first navpath)
        thing-map ((msgs/param :thing-map) (first messages))
        ;upvote-link (entity-view/upvote-sel thing-id)
        upvote-link (entity-view/div-div-clz-sel thing-id "arrow up")
        click-fn (newthing-form/upvote-submit-fn r thing-type messages input-queue)
       ]
    (.log js/console (str "enable thing nav upvote " path ))
    ; click fn will doseq put msg to input-queue
    (de/listen! upvote-link :click click-fn)
  ))


; ------------------------------------------------------------------------------------
; enable assignto and assign-form with link and form event handler
; [:transform-enable [:nav :courses 17592186045496 :assignto] :assignto
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; assignto, defined in thing-question and entity-view
  :assignto
  [r [_ rpath transkey messages] input-queue]
  (let [thing-id (second (reverse rpath))
        thing-node (dom/by-id (str thing-id))

        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        assignto-link (dom/by-class link-clz)

        ; thing-map msgs param from emitter
        thing-map ((msgs/param :thing-map) (first messages))
        thing-ident (util/thing-ident thing-map)
        override-map {:assignment/origin (:db/id thing-map)
                      :assignment/title (:question/title thing-map)
                      :assignment/tag (:question/tag thing-map)
                      :assignment/start (.unix (js/moment))
                      :assignment/end (.unix (.add (js/moment) "hours" 1))
                      :assignment/type (keyword (:question/type thing-map))
                     }
          
        ; show assign form, assignment form is used for show details for assignment.
        toggle-fn (newthing-form/toggle-add-thing-form-fn :assign
                                                          r rpath
                                                          (str "child-form-" thing-id)
                                                          override-map
                                                          input-queue)

       ]
      (.log js/console (str "enable thing nav " thing-id " " transkey " " rpath))
      ;(js/datetimepickerByThing assign-form-clz "assignto-end-picker")
      ;(js/tagsInput "assignto-name", "assign to...")
      (de/listen! assignto-link :click toggle-fn)
    ))


(defmethod enable-thing-nav  ; enroll, defined in thing-question and entity-view
  :enroll
  [r [_ rpath transkey messages] input-queue]
  (let [thing-id (second (reverse rpath))
        thing-node (dom/by-id (str thing-id))

        ; link class is enroll-class
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        enroll-link (dom/by-class link-clz)
        ; thing-map msgs param from emitter
        thing-map ((msgs/param :thing-map) (first messages))
        
        thing-ident (util/thing-ident thing-map)
        override-map {
                      :enrollment/course (if (= thing-ident :course) (:db/id thing-map) nil)
                      :enrollment/lecture (if (= thing-ident :lecture) (:db/id thing-map) nil)
                      :enrollment/title ((keyword (str (name thing-ident) "/title")) thing-map)
                      :enrollment/content ((keyword (str (name thing-ident) "/content")) thing-map)
                      :enrollment/url ((keyword (str (name thing-ident) "/url")) thing-map)
                      :enrollment/email ((keyword (str (name thing-ident) "/email")) thing-map)
                      :enrollment/wiki ((keyword (str (name thing-ident) "/wiki")) thing-map)
                     }

        ; show add enrollment form
        toggle-fn (newthing-form/toggle-add-thing-form-fn :enrollment 
                                                          r rpath
                                                          (str "child-form-" thing-id)
                                                          override-map
                                                          input-queue)

       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " rpath))
    (de/listen! enroll-link :click toggle-fn)
  ))

; ----------------------------------------------------------------------------------
; submit answer shows answer-form
; [:nav :assignment 17592186045431 :submit-answer] :submit-answer
; ----------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; transkey = :answer-form
  :submit-answer
  [r [_ rpath transkey messages] input-queue]
  (let [thing-id (second (reverse rpath))
        thing-node (dom/by-id (str thing-id))

        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        submit-answer-link (dom/by-class link-clz)

        thing-map ((msgs/param :thing-map) (first messages))
        thing-ident (util/thing-ident thing-map)

        override-map {:answer/origin (:db/id thing-map)
                      :answer/start (.unix (js/moment))  ; unix epoch in seconds
                     }

        ; show add enrollment form
        toggle-fn (newthing-form/toggle-add-thing-form-fn :answer 
                                                          r rpath
                                                          (str "child-form-" thing-id)
                                                          override-map
                                                          input-queue)
       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " rpath))
    (de/listen! submit-answer-link :click toggle-fn)
  ))

; ----------------------------------------------------------------------------------
; grade answer and grade-form
; [:nav :answer 17592186045431 :grade] :grade
; ----------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; transkey = :grade
  :grade
  [r [_ rpath transkey messages] input-queue]
  (let [thing-id (second (reverse rpath))
        thing-node (dom/by-id (str thing-id))

        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        grade-link (dom/by-class link-clz)

        thing-map ((msgs/param :thing-map) (first messages))
        thing-ident (util/thing-ident thing-map)

        override-map {:grade/origin (:db/id thing-map)
                     }
        
        ; show add enrollment form
        toggle-fn (newthing-form/toggle-add-thing-form-fn :grade 
                                                          r rpath
                                                          (str "child-form-" thing-id)
                                                          override-map
                                                          input-queue)
       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " rpath))
    (de/listen! grade-link :click toggle-fn)
  ))


; ------------------------------------------------------------------------------------
; transform enable for [transforms [:nav :parent 1 :add-child] :add-child
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; transkey = :add-child
  :add-child
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :add-child]
        thing-id (first (reverse (butlast navpath)))
        thing-node (dom/by-id (str thing-id))
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        add-child-link (dom/by-class link-clz)
        ; current parent thing map from emitter, when create parent node, form override values
        thing-map ((msgs/param :thing-map) (first messages))
        override-map {:family/parent (:db/id thing-map)
                     }
        ; now toggle add thing form, and enable the submit fn.
        toggle-fn (newthing-form/toggle-add-thing-form-fn :child 
                                                          r path
                                                          "new-subthings"
                                                          override-map 
                                                          input-queue)
       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " path " sel "  add-child-clz))
    (de/listen! add-child-link :click toggle-fn)
  ))


; ------------------------------------------------------------------------------------
; transform enable for [transforms [:nav :course 1 :add-lecture] :add-lecture
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; transkey = :add-lecture
  :add-lecture
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:course 1 :add-lecture]
        thing-id (first (reverse (butlast navpath)))
        thing-node (dom/by-id (str thing-id))
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        add-lecture-link (dom/by-class link-clz)
        ; current course thing map from emitter, when create course node, form override values
        thing-map ((msgs/param :thing-map) (first messages))
        override-map {:lecture/course (:db/id thing-map)
                      :lecture/type (keyword (:course/type thing-map))  ;
                     }
        ; now toggle add thing form, and enable the submit fn.
        toggle-fn (newthing-form/toggle-add-thing-form-fn :lecture 
                                                          r path
                                                          "new-subthings" 
                                                          override-map 
                                                          input-queue)
       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " path " sel "  add-lecture-clz))
    (de/listen! add-lecture-link :click toggle-fn)
  ))


; ------------------------------------------------------------------------------------
; transform enable for [transforms [:nav :lecture 1 :add-question] :add-question
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; transkey = add-question
  :add-question
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:lecture 1 :add-question]
        thing-id (first (reverse (butlast navpath)))
        thing-node (dom/by-id (str thing-id))
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        add-question-link (dom/by-class link-clz)
        ; get the current thing map, and create override map
        thing-map ((msgs/param :thing-map) (first messages))
        override-map {:question/origin (:db/id thing-map)}
        toggle-fn (newthing-form/toggle-add-thing-form-fn :question 
                                                          r path
                                                          "new-subthings"
                                                          override-map 
                                                          input-queue)
       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " path " "))
    (de/listen! add-question-link :click toggle-fn)
  ))


; ------------------------------------------------------------------------------------
; transform enable for [transforms [:nav :lecture 1 :add-comments] :add-comments
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; transkey = add-comments
  :add-comments
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:lecture 1 :add-comments]
        thing-id (first (reverse (butlast navpath)))
        thing-node (dom/by-id (str thing-id))
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        add-comments-link (dom/by-class link-clz)
        ; get the current thing map, and create override map
        thing-map ((msgs/param :thing-map) (first messages))
        override-map {:comments/origin (:db/id thing-map)
                      :comments/thingroot (:db/id thing-map)}
        toggle-fn (newthing-form/toggle-add-thing-form-fn :comments 
                                                          r path
                                                          "new-subthings"
                                                          override-map 
                                                          input-queue)
       ]
    (.log js/console (str "enable thing nav " thing-id " " transkey " " path " " thing-map))
    (de/listen! add-comments-link :click toggle-fn)
  ))


; ------------------------------------------------------------------------------------
; enable reply and reply-form with link and form event handler
; [:transform-enable [:nav :comments 17592186045496 :reply] :reply
; ------------------------------------------------------------------------------------
(defmethod enable-thing-nav  ; reply, defined in thing-question and entity-view
  :reply
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:comments 1 :reply]
        thing-id (first (reverse (butlast navpath)))

        thing-node (dom/by-id (str thing-id))
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        reply-link (dom/by-class link-clz)
       
        reply-form-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id :reply-form ""))))
        toggle-fn (-> (entity-view/div-form-sel thing-id "reply-form")
                      (newthing-form/toggle-hide-fn reply-form-clz))

       ]
    (.log js/console (str "enable thing nav reply toggle " path " " link-clz reply-form-clz))
    (de/listen! reply-link :click toggle-fn)
  ))


(defmethod enable-thing-nav  ; transkey = :reply-form
  :reply-form
  [r [_ path transkey messages] input-queue]
  (let [thing-id (first (reverse (butlast path)))
        thing-map ((msgs/param :thing-map) (first messages))
        
        form (entity-view/div-form-sel thing-id "reply-form")
        override-map {:comments/origin (:db/id thing-map)
                      :comments/thingroot (:comments/thingroot thing-map)
                     }
       ]
    (.log js/console (str "enable thing nav reply-form " thing-id path override-map thing-map))
    (newthing-form/handle-inline-form-submit :comments 
                                             thing-id 
                                             form
                                             override-map 
                                             input-queue)
  ))


;;==================================================================================
; enable add comments input box on top of a list of all comments.
; triggered by thing data emitter [:setup :lecture 1 :comments]
;;==================================================================================
(def enable-add-comments
  "upon comments link clicked for any thing, display add comment dialog"
  (fn [r [op rpath] input-queue]
    (let [thing-id (last (butlast rpath))
          form (entity-view/add-comments-form r rpath)
          override-map {:comments/origin thing-id
                        :comments/thingroot thing-id
                       }
          ; raw domina fn, need to repvent default and put msg to queue by myself.
          submit-fn
            (fn [e]
              (let [messages [{msgs/topic [:create :comments]
                               msgs/type :create-thing
                              (msgs/param :details) {}}]
                    details (-> {:comments/title (dom/value (dom/by-id "comments-title"))}
                                (assoc :thing-type :comments) ; required for post-submit-thing dispatch
                                (merge override-map))
                    messages (msgs/fill :create-thing 
                                        messages 
                                        {:details details})
                    ]
                (.log js/console (str "add comments submitted " messages))
                (de/prevent-default e)  ; submit ret false, prevent refresh or redirect
                (doseq [m messages]
                  (p/put-message input-queue m))))
         ]
      (.log js/console (str "enable add comments "  thing-id rpath))
      (events/send-on :submit form input-queue submit-fn)
      )))

