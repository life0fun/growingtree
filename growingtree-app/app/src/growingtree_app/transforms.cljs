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
;; login btn
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
;; sidebar nav click
;;==================================================================================

; sidebar click transform [:nav :path] value, trigger request to get list of things.
; ; sidebar clicked, path is always [:sidebar 0 cur-li]
(def enable-sidebar-nav
  "wire sidebar click event to all things transform fn"
  (fn [r [_ p transform-name messages] input-queue]
    (let [sidebars [:parents :children :courses :lectures :homeworks
                    :assignments :topquestions :topanswers :ask :answer
                    :contributions :nowledges :activities :locations]]
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
;; [:transform-enable [:setup :children 17592186045496 :assignments] :assignments]
(defmulti enable-setup-action
  (fn [render [target path transkey messages] input-queue]
    transkey))

(defmulti enable-submit-action
  (fn [render [target path transkey messages] input-queue]
    transkey))


;;==================================================================================
;; assign btn setup and submit
;;==================================================================================
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
        hint-node (dom/by-id "assign-hint")
        submit-fn (fn [_]   ; form submit handler, fill msg and ret the msg
                    (let [toid-val (.-value to-node)
                          hint-val (.-value hint-node)
                          details {:action :create-assignment 
                                   :hwid thingid :toid toid-val :hint hint-val}]
                      (.log js/console (str "assign submitted " details))
                      (dom/destroy! form)
                      (msgs/fill :assign messages {:details details})))]

    (.log js/console (str "enable submit action assign" path  messages))
    (events/send-on :submit form input-queue submit-fn)))



;;==================================================================================
;; newthing btn setup and submit, Deprecated ! not used !
;;==================================================================================
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
 

;;==================================================================================
;; create new thing btn clicked
;;==================================================================================
; wire submit button click on new thing to fill newthing message
(defmethod enable-submit-action 
  :creatething
  [r [target path transkey messages] input-queue]
  (let [type (last path)
        form (dom/by-class (str (name type) "-form"))
        submit-fn (newthing-form/submit-fn type form messages)]
    (.log js/console (str "enable submit on create thing page " path transkey messages form))
    (events/send-on :submit form input-queue submit-fn)))


;;==================================================================================
;; share btn setup and submit
;;==================================================================================

; ;; Handle add-tasks 
(defmethod enable-setup-action 
  :share 
  [r [target path transkey messages] input-queue]
  (.log js/console (str "share setup clicked " target path messages)))


;;==================================================================================
;; enable thing nav sub link, transkey is thing sub link thing type
;;==================================================================================
(defmulti enable-thing-nav
  (fn [render [op path transkey messages] input-queue]
    transkey))


;;==================================================================================
;; nav anywhere to -> parents, transkey is children, 
;; [:transform-enable [:nav :children 17592186045496 :parents]]
;;==================================================================================
(defmethod enable-thing-nav 
  :parents
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :children]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        ; thing nav link class set inside entity view class
        thing-link (dom/by-class (str "parents-" thingid))]
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
;; nav anywhere -> children , transkey is children, 
;; [:transform-enable [:nav :parents 17592186045498 :children] :children
;;==================================================================================
(defmethod enable-thing-nav 
  :children
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :children]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        ; thing nav link class set inside entity view class
        thing-link (dom/by-class (str "children-" thingid))]
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
;; enable assignto-toggle and assignto-submit form.
;; nav anywhere -> assignto-submit , transkey is assignto-submit, 
;; [:transform-enable [:nav :parents 17592186045498 :assignto-submit] :assignto-submit
;;==================================================================================
(defmethod enable-thing-nav 
  :assign-toggle
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :assign-toggle]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        assignto-link (dom/by-class (str entity-view/assignto thingid))
        ; thing nav link class set inside entity view class
        form (dom/by-class (str entity-view/assign-form thingid))
        hform (dom/by-class "assign-form")
        toggle-fn (fn [e]
                    (let [hidden (dom/has-class? form ".hide")]
                      (.log js/console (str "assign to clicked" hidden form))
                      (if hidden
                        (dom/add-class! form "hide")
                        (dom/remove-class! form "hide"))))
        ]
    (.log js/console (str "enable thing nav event " path 
                      (str entity-view/assignto thingid)
                      (str entity-view/assign-form thingid) assignto-link))
    ; wrap assign link with div and use class selector
    (de/listen! assignto-link :click toggle-fn)
  ))


(defmethod enable-thing-nav 
  :assign-form
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :assign-form]
        thingid (first (reverse (butlast navpath)))
        thing-type (second (reverse (butlast navpath)))
        thing-node (dom/by-id (str thingid))
        ; must use dom by-class to select form ?!
        form (dom/by-class (str entity-view/assign-form thingid))

        ;to-node (dom/by-class (str entity-view/assignto-name thingid))
        ;hint-node (dom/by-class (str entity-view/assignto-hint thingid))
        
        ; to-node (dom/by-id "input-name")
        ;hint-node (dom/by-id "input-hint")

        to-node (dx/xpath form "//input[@id='input-name']")
        hint-node (dx/xpath form "//input[2]")

        ;to-node (dc/sel form "#input-name")
        ;hint-node (dc/sel form "#input-hint")
        submit-fn (fn [_]   ; form submit handler, fill msg and ret the msg
                    (let [toid-val (dom/value to-node)
                          hint-val (dom/value hint-node)
                          details {:action :create-assignment 
                                   :hwid thingid 
                                   :toid toid-val 
                                   :hint hint-val}]
                      (.log js/console (str "assign to submitted xze" details to-node))
                      ;(dom/destroy! form)
                      (msgs/fill :submit messages {:details details})))
        ]
    (.log js/console (str "enable thing nav event " path messages))
    ; wrap assign link with div and use class selector
    (events/send-on :submit form input-queue submit-fn)
  ))

;;==================================================================================
;; nav event, for assignments
;;==================================================================================
(defmethod enable-thing-nav 
  :assignments
  [r [_ path transkey messages] input-queue]
  (let [navpath (rest path)  ; [:parent 1 :children]
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


   
