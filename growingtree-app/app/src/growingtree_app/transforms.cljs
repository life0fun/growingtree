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
      ;(events/send-on :submit form input-queue submit-fn)  
      ; events/send-on for this form does not work, use domina raw fn.
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
;; ---------------------------------------------------------------------------------
(defmethod enable-submit-action 
  :create-thing
  [r [target path transkey messages] input-queue]
  (let [type (last path)
        form (dom/by-class (str (name type) "-form"))
        btn-cancel (-> form 
                       (dx/xpath "//button[@id='cancel']"))
        thing-map {}  ; empty thing-map for fresh create thing
        submit-fn (newthing-form/submit-fn type form thing-map messages)]
    (.log js/console (str "enable submit action :create-thing page " path transkey messages))
    (de/listen! btn-cancel :click (fn [e] (dom/destroy! form)))
    (events/send-on :submit form input-queue submit-fn)
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
                (fn [evt]
                  (let [; deprected ! not used. emitter already set it up.
                        new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
                    (.log js/console (str thing-type  " nav to " next-thing " msgs " messages))
                    (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
                      (p/put-message input-queue m)))))
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
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :assign-toggle]
        thing-id (first (reverse (butlast navpath)))

        thing-node (dom/by-id (str thing-id))
        link-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id transkey ""))))
        assignto-link (dom/by-class link-clz)
       
        assign-form-clz (second (first (seq (entity-view/thing-nav-link-sel thing-id :assign-form ""))))
        ; can use class selector directly as form-clz includes thing-id
        ; toggle-fn (-> (entity-view/assign-form-sel thing-id)
        ;               (dx/xpath)
        ;               (newthing-form/toggle-hide-fn assign-form-clz))
        toggle-fn (-> (entity-view/div-form-sel thing-id "assign-form")
                      (newthing-form/toggle-hide-fn assign-form-clz))

       ]
    (.log js/console (str "enable thing nav assign toggle " path " " link-clz assign-form-clz))
    (de/listen! assignto-link :click toggle-fn)
  ))


(defmethod enable-thing-nav  ; transkey = :assign-form
  :assign-form
  [r [_ path transkey messages] input-queue]
  (let [thing-id (first (reverse (butlast path)))
        thing-map ((msgs/param :thing-map) (first messages))
        
        ; form (-> (entity-view/assign-form-sel thing-id)
        ;          (dx/xpath))
        form (entity-view/div-form-sel thing-id "assign-form")

        override-map {:assignment/origin (:db/id thing-map)
                      :assignment/title (:question/title thing-map)
                      :assignment/tag (:question/tag thing-map)
                      :assignment/start (.unix (js/moment))
                      :assignment/end (.unix (.add (js/moment) "hours" 1))
                      :assignment/type (keyword (:question/type thing-map))
                     }
       ]
    (.log js/console (str "enable thing nav assign-form " thing-id path))
    (newthing-form/handle-inline-form-submit :assignment 
                                             thing-id form
                                             override-map 
                                             input-queue)
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
        ; get the current thing map, and create override map
        thing-map ((msgs/param :thing-map) (first messages))
        override-map {:lecture/course (:db/id thing-map)
                      :lecture/type (keyword (:course/type thing-map))  ;
                     }
        toggle-fn (newthing-form/toggle-add-thing-form-fn :lecture 
                                                          r path 
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

