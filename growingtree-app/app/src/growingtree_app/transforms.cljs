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
;; utility functions for toggle hide of form
;;==================================================================================
; too bad (dom/toggle-class! form "hide") is not available.
(defn toggle-hide-fn
  "return an event handler fn that toggen hide css class of the form"
  [form]
  (fn [_] 
    (let [hidden (dom/has-class? form "hide")]
      (if hidden
        (dom/remove-class! form "hide")
        (dom/add-class! form "hide")))))


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
    (let [sidebars [:parent :child :course :lecture :homework
                    :assignment :topquestion :topanswer :ask :answer
                    :contribution :nowledge :activity :location]]
      (doseq [s sidebars]
        (events/send-on :click
                        (dom/by-id (str "sidenav-" (name s)))
                        input-queue
                        (msgs/fill :set-nav-path
                                    messages
                                    {:path [:all 0 s]})))
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
;; assign btn setup and submit
;; ---------------------------------------------------------------------------------
; ; setup assign link event listen, when link clicked, render assign form actionbar 
; ; and attach it to thing node div. Thing node div id is thing id. fill details msg.
(defmethod enable-setup-action 
  :assign
  [r [t path k messages] input-queue]
  (let [thingid (last (butlast path))   ; [:setup thing-type thing-id transkey]
        html (templates/add-template r path (:assign-form templates))
        div (html {:assign-form-class (sel/assign-form thingid)})

        thing-node (dom/by-id (str thingid))
        assignto-link (dom/by-class (str "assignto-" thingid))]
  
    (.log js/console (str "enable setup action assign " path))
    ; wrap assign link with div and use class selector
    (de/listen! assignto-link
                :click 
                (fn [evt]
                  (dom/append! thing-node div)
                  (let [details {:action :create-assign :id thingid}  ; close over action key
                        new-msgs (msgs/fill :assign messages {:details details})]
                    (.log js/console (str "assign link clicked " new-msgs))
                    (doseq [m new-msgs]
                      (p/put-message input-queue m)))))
  ))

; wire submit button click on assignment form to fill assign message
; dispatch on transkey, :assign
(defmethod enable-submit-action 
  :assign
  [r [target path transkey messages] input-queue]
  (let [thingid (last (butlast path))
        form (dom/by-class (sel/assign-form thingid))  ; must use dom by-class to select form ?!

        to-node (dom/by-id "assign-to")
        assignto-hint (dom/by-id "assign-hint")
        submit-fn (fn [_]   ; form submit handler, fill msg and ret the msg
                    (let [toid-val (.-value to-node)
                          hint-val (.-value assignto-hint)
                          details {:action :create-assignment 
                                   :hwid thingid :toid toid-val :hint hint-val}]
                      (.log js/console (str "assign submitted " details))
                      (dom/destroy! form)
                      (msgs/fill :assign messages {:details details})))]

    (.log js/console (str "enable submit action assign" path  messages))
    (events/send-on :submit form input-queue submit-fn)))



;; ---------------------------------------------------------------------------------
;; newthing btn setup and submit, Deprecated ! not used !
;; ---------------------------------------------------------------------------------
; ; create new thing btn event listen, when clicked, display input newthing template
; ; under main div. messages is cljs PersistentVector, hence doseq to process each.
(defmethod enable-setup-action 
  :newthing
  [r [t path transkey messages] input-queue]  ; for newthing, only one msg in vector.
  (let [newthing-sel (str "newthing")
        newthing-li (dom/by-id newthing-sel)  ; newthing btn id in top nav bar
        ; when clicked, closure user id.
        click-fn
          (fn [evt]
            (let [id (render/new-id! r path)   ; new id for [:action :setup :newthing]
                  parent (dom/by-id "main")    ; put the template  
                  html (templates/add-template r path (:newthing templates))
                  divcode (html {:id id})
                  details-orig ((msgs/param :details) (first messages))
                  details (assoc details-orig :action :newthing) ; :time (.unix js/moment)) ; ensure new
                  new-msgs (msgs/fill :newthing messages {:details details})]
              (.log js/console (str "render newthing at " path " id " id " " (render/get-id r path)))
              
              (dom/destroy-children! parent)
              (dom/append! parent divcode)
              (doseq [m new-msgs]
                (p/put-message input-queue m))))
        ]
  
    (.log js/console (str "enable setup newthing " path " details " ((msgs/param :details) (first messages))))
    ; wrap assign link with div and use class selector
    (de/listen! newthing-li :click click-fn)
  ))
    

; wire submit button click on new thing template to fill newthing message
(defmethod enable-submit-action 
  :newthing
  [r [target path transkey messages] input-queue]
  (let [form (dom/by-class "newthing-form") ; must use dom by-class to select form ?!
        type (dom/by-id "newthing-type")
        title (dom/by-id "newthing-title")
        content (dom/by-id "newthing-content")
        submit-fn (fn [_]   ; form submit handler, fill msg and ret the msg
                    (let [type-val (.-value type)
                          title-val (.-value title)
                          content-val (.-value content)
                          details {:action :newthing :type type-val 
                                   :title title-val :content content-val}]
                      (.log js/console (str "newthing submitted " details))
                      (dom/destroy! form)
                      (msgs/fill :newthing messages {:details details})))]

    (.log js/console (str "enable newthing submit " path transkey messages form))
    (events/send-on :submit form input-queue submit-fn)))
 

;; ---------------------------------------------------------------------------------
;; create new thing btn clicked event handler
;; ---------------------------------------------------------------------------------
; wire submit button click on new thing to fill newthing message
(defmethod enable-submit-action 
  :create-thing
  [r [target path transkey messages] input-queue]
  (let [type (last path)
        form (dom/by-class (str (name type) "-form"))
        submit-fn (newthing-form/submit-fn type form messages)]
    (.log js/console (str "enable submit on create thing page " path transkey messages form))
    (events/send-on :submit form input-queue submit-fn)))


;; ---------------------------------------------------------------------------------
;; share btn setup and submit event handlers
;; ---------------------------------------------------------------------------------
(defmethod enable-setup-action 
  :share 
  [r [target path transkey messages] input-queue]
  (.log js/console (str "share setup clicked " target path messages)))


;; ---------------------------------------------------------------------------------
;; enable thing nav sub link, transkey is thing sub link thing type
;; ---------------------------------------------------------------------------------
(defmulti enable-thing-nav
  (fn [render [op path transkey messages] input-queue]
    transkey))


;;==================================================================================
;; nav anywhere to -> parent, transkey is child, 
;; [:transform-enable [:nav :child 17592186045496 :parent]]
;;==================================================================================
(defmethod enable-thing-nav 
  :parent
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :child]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        ; thing nav link class set inside entity view class
        thing-link (dom/by-class (str "parents-" thingid))]
    (.log js/console (str "enable parents link click " path messages))
    ; wrap assign link with div and use class selector
    (de/listen! thing-link
                :click 
                (fn [evt]
                  (let [; deprected ! not used. emitter already set it up.
                        new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
                    (.log js/console (str "parents link clicked " messages))
                    (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
                      (p/put-message input-queue m)))))
  ))

;;==================================================================================
;; nav anywhere -> child , transkey is child, 
;; [:transform-enable [:nav :parent 17592186045498 :child] :child
;;==================================================================================
(defmethod enable-thing-nav 
  :child
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :child]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        ; thing nav link class set inside entity view class
        thing-link (dom/by-class (str "children-" thingid))]
    (.log js/console (str "enable children link click " path messages))
    ; wrap assign link with div and use class selector
    (de/listen! thing-link
                :click 
                (fn [evt]
                  (let [; deprected ! not used. emitter already set it up.
                        new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
                    (.log js/console (str "children link clicked " messages))
                    (doseq [m messages]  ;[m new-msgs]  do not need render to fill anything
                      (p/put-message input-queue m)))))
  ))

;;==================================================================================
;; enable assignto-toggle and assignto-submit form with link and form event handler.
;; nav anywhere -> assignto-submit , transkey is assignto-submit, 
;; [:transform-enable [:nav :course 17592186045496 :assign-toggle] :assign-toggle
;;==================================================================================
(defmethod enable-thing-nav 
  :assign-toggle
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :assign-toggle]
        thingid (first (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        assignto-link (dom/by-class (str entity-view/assignto thingid))

        toggle-fn (-> (dom/by-class (str entity-view/assign-form thingid))
                      (dx/xpath "//form[@id='assign-form']")
                      (toggle-hide-fn))
        ]
    (.log js/console (str "enable thing nav assign toggle " path assignto-link))
    (de/listen! assignto-link :click toggle-fn)
  ))


; use xpath with id selector to find assignto-name and assignto-hint ele and 
; submit transform messsage upon clicked.
(defmethod enable-thing-nav 
  :assign-form
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :assign-form]
        thingid (first (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))

        ; select form by class and then xpath within the node
        form (-> (dom/by-class (str entity-view/assign-form thingid))
                  (dx/xpath "//form[@id='assign-form']"))
        ; must use xpath id selector
        assignto-name (dx/xpath form "//input[@id='assignto-name']")
        assignto-hint (dx/xpath form "//input[@id='assignto-hint']")
        ; form submit handler, fill msg and ret the msg
        submit-fn (fn [_]   
            (let [to-val (dom/value assignto-name)
                  hint-val (dom/value assignto-hint)
                  details {:thing-type :assignment   ; single thing-type for add thing
                           :assignment/task-id thingid  ; homework, course, lecture, etc.
                           :assignment/homework thingid  ; homework, course, lecture, etc.
                           :assignment/assignee to-val 
                           :assignment/hint hint-val
                           :assignment/status :assignment.status/active
                           :assignment/start (.unix (js/moment))
                           :assignment/due (.unix (.add (js/moment) "hours" 4))
                           }]
              (.log js/console (str "assign form submitted " details))
              ((toggle-hide-fn form) nil)  ; hide the form
              (msgs/fill :submit messages {:details details})))
        ]
    (.log js/console (str "enable thing nav assign-form " path messages))
    ; wrap assign link with div and use class selector
    (events/send-on :submit form input-queue submit-fn)
  ))

;;==================================================================================
;; nav event, for assignment
;;==================================================================================
(defmethod enable-thing-nav 
  :assignment
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :child]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        ; thing nav link class set inside entity view class
        thing-link (dom/by-class (str "assignments-" thingid))]
    (.log js/console (str "enable thing nav event " path messages))
    ; wrap assign link with div and use class selector
    (de/listen! thing-link
                :click 
                (fn [evt]
                  (let [; fill msg to set-nav-path [:nav :path] topic
                        new-msgs (msgs/fill :set-nav-path messages {:path (vec navpath)})]
                    (.log js/console (str navpath " link clicked " messages))
                    (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
                      (p/put-message input-queue m)))))
  ))

;;==================================================================================
;; lectures btn in course thing clicked
;;==================================================================================
(defmethod enable-thing-nav 
  :lectures 
  [r [target path transkey messages] input-queue]
  (let [thingid (last path)   ; last segment of path is thingid
        html (templates/add-template r path (:assign-form templates))
        div (html {:assign-form-class (sel/assign-form thingid)})
        thing-node (dom/by-id (str thingid))
        lectures-link (dom/by-class (str "lectures-" thingid))]
  
    (.log js/console (str "enable nav event " path messages))
    ; wrap assign link with div and use class selector
    (de/listen! lectures-link
                :click 
                (fn [evt]
                  (dom/append! thing-node div)
                  (.log js/console "lectures link clicked")))
  ))


;;==================================================================================
;; enroll to btn clicked
;;================================================================================== 
(defmethod enable-thing-nav 
  :enroll
  [r [target path transkey messages] input-queue]
  (let [thingid (last path)   ; last segment of path is thingid
        html (templates/add-template r path (:assign-form templates))
        div (html {:assign-form-class (sel/assign-form thingid)})
        thing-node (dom/by-id (str thingid))
        enroll-link (dom/by-class (str "enroll-" thingid))]
  
    (.log js/console (str "enable nav event " path messages))
    ; wrap assign link with div and use class selector
    (de/listen! enroll-link
                :click 
                (fn [evt]
                  (dom/append! thing-node div)
                  (.log js/console "enroll link clicked")))
  ))


   
