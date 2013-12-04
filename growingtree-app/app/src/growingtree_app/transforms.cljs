(ns growingtree-app.transforms
  (:require [domina :as dom]
            [domina.css :as dc]
            [domina.events :as de]
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

; sidebar click transform [:nav :type] value, trigger request to get list of things.
(def enable-nav-type
  "wire sidebar click event to all things transform fn"
  (fn [r [_ p transform-name message] input-queue]
    (let [sidebars ["parents" "children" "courses" "lectures" "homeworks"
                    "assignments" "topquestions" "topanswers" "ask" "answer"
                    "contributions" "knowledges" "activities" "locations"]]
      (doseq [type sidebars]
        (events/send-on :click 
                        (dom/by-id (str "sidenav-" type)) 
                        input-queue
                        (msgs/fill :set-nav-type
                                    message
                                    {:type (keyword type)})))
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
;; fill xpath along the nav path for each thing action bar links
;;==================================================================================
(defmulti record-xpath
  (fn [render [target path transkey messages] input-queue]
    transkey))

;;==================================================================================
;; xpath parent - children , transkey is children, 
;; [:xpath :thing-type thing-id transkey]
;;==================================================================================
(defmethod record-xpath 
  :children
  [r [_ path transkey messages] input-queue]
  (let [xpath (rest path)  ; [:parent 1 :children]
        thingid (first (reverse (butlast xpath)))
        thing-type (second (reverse (butlast xpath)))
        thing-node (dom/by-id (str thingid))
        children-link (dom/by-class (str "children-" thingid))]
    (.log js/console (str "record path children " path messages))
    ; wrap assign link with div and use class selector
    (de/listen! children-link
                :click 
                (fn [evt]
                  (let [details {:xpath xpath}
                        ; fill msg with msg-type messages, and input-map
                        new-msgs (msgs/fill :set-xpath messages {:details details})]
                    (.log js/console (str xpath " link clicked " new-msgs))
                    (doseq [m new-msgs]
                      (p/put-message input-queue m)))))
  ))


;;==================================================================================
;; assignments btn in children thing clicked, display thing details of child-assignment
;;==================================================================================
(defmethod record-xpath 
  :assignments
  [r [target path transkey messages] input-queue]
  (let [thingid (last path)   ; last segment of path is thingid
        thing-type (second path) ; [:setup :assignments :course 123]
        thing-node (dom/by-id (str thingid))
        children-link (dom/by-class (str "children-" thingid))]
  
    ; wrap assign link with div and use class selector
    (de/listen! children-link
                :click 
                (fn [evt]
                  (let [details {:action :actionbar-event :id thingid
                                 :thing-type thing-type
                                 :transkey transkey
                                 :target transkey}
                        new-msgs (msgs/fill :actionbar-event messages {:details details})]
                    (.log js/console (str "child assignment link clicked " new-msgs))
                    (doseq [m new-msgs]
                      (p/put-message input-queue m)))))
  ))


;;==================================================================================
;; lectures btn in course thing clicked
;;==================================================================================
(defmethod record-xpath 
  :lectures 
  [r [target path transkey messages] input-queue]
  (let [thingid (last path)   ; last segment of path is thingid
        html (templates/add-template r path (:assign-form templates))
        div (html {:assign-form-class (sel/assign-form thingid)})
        thing-node (dom/by-id (str thingid))
        lectures-link (dom/by-class (str "lectures-" thingid))]
  
    (.log js/console (str "lectures setup clicked " target path messages))
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
(defmethod record-xpath 
  :enroll
  [r [target path transkey messages] input-queue]
  (let [thingid (last path)   ; last segment of path is thingid
        html (templates/add-template r path (:assign-form templates))
        div (html {:assign-form-class (sel/assign-form thingid)})
        thing-node (dom/by-id (str thingid))
        enroll-link (dom/by-class (str "enroll-" thingid))]
  
    (.log js/console (str "enroll setup clicked " target path messages))
    ; wrap assign link with div and use class selector
    (de/listen! enroll-link
                :click 
                (fn [evt]
                  (dom/append! thing-node div)
                  (.log js/console "enroll link clicked")))
  ))


   
