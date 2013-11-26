(ns growingtree-app.rendering
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
            ; util namespace
            [growingtree-app.util :as util]
            ; entity view map
            [growingtree-app.entity-view :as entity-view])
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


;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; node create login and render login and enable setup login
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
(defn create-login-template
  "node-create of [:login], add template to top template tree root."
  [r [_ path :as delta] input-queue]
  (let [parent (render/get-parent-id r path)
        id (render/new-id! r path)
        html (templates/add-template r path (:login templates))
        divcode (html {:id id :name "user" :pass "pass"})]
    (.log js/console (str "adding login template " path " parent " parent))
    (dom/append! (dom/by-id parent) divcode)
  ))


; events collect and sent, input map, link dom ele id to msg param key
; pass value from dom key to msg map key thru input map {:dom-ele-id :msg-param-key}
(defn enable-login-submit
  "listen login btn event and sent transform msgs back to behavior"
  [_ [_ path transform-name messages] input-queue]
  (.log js/console (str ""))
  (events/collect-and-send :click 
                           "login-button" 
                           input-queue 
                           transform-name 
                           messages
                           {"login-name" :login-name  "login-pass" :login-pass}))


(defn remove-submit-login-event 
  [_ _ _]
  (events/remove-click-event "login-button"))


;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; render home page sidebar and setup sidebar click transforme
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; home page template includes sidebar, leaderboard and topthings. 
(defn render-home-page 
  "homepage template is attached to [:nav], div homepage with id stored in [:nav] node"
  [r [_ path] input-queue]
  (let [parent (render/get-parent-id r path)  ; root of top level is [], maps to div id=content
        id (render/new-id! r path)  ; gen a new id to the path.
        html (templates/add-template r path (:homepage templates)) ; stores homepage div at [:nav] 
        divcode (html {:id id})]

    (.log js/console (str "render home template at " path " id " (render/get-id r path) 
                          " parent id " (render/get-parent-id r path) parent))
    (dom/destroy-children! (dom/by-id parent))
    ; attach to dom using domina.
    (dom/append! (dom/by-id parent) divcode)   ; homepage no data val map
  ))


; sidebar click transform [:nav :type] value, trigger request to get list of things.
(def enable-type-all-things
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


;;================================================================================
;; add multimethod dispatcher to over-write modal title, awesome !
;; over-write any auto namespace mutlimethod to map transkey to modal title.
;;================================================================================
(defmethod auto/modal-title :login-modal [transform-name _]
  (pr-str "Welcome to GrowingTree")
  "Welcome to GrowingTree")

; add listener for upper right login btn and show login modal
; path is login modal, transkey is login-modal, msg has 2 keys, login-name and pass
(def enable-login-modal
  (fn [r [_ path transkey messages] input-queue]
    (let [login-btn (dom/by-id "login")
          modal-evt
            (fn [evt]
              (let [parent-id (render/get-parent-id r path)]
                (.log js/console (str "login modal clicked " path " parent-id " parent-id)
                
                ; (dom/append! (dom/by-id parent-id) modal-html)
                ; (js/showModal (auto/modal-id id transkey))
                (auto/modal-collect-input r input-queue path transkey messages))))
          ]
      (.log js/console (str "setup login modal path " path (render/get-id r path)))
      (de/listen! login-btn :click modal-evt))))  


; clear all things
(defn clear-all-things
  "upon nav type change, clear all things divs under topthings div"
  [r [_ path oldv newv] input-queue]
  (.log js/console (str "clear all things upon nav type change " path))
  (dom/destroy-children! (dom/by-id "main")))


;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; render each thing list node, and setup action bar transformer in each node.
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; info model added a new node, create a new thing node, append it to topthings div.
(defn add-new-thing-node
  [r [op path] input-queue]
  (let [thingid (last path)
        ; make a template attached to this node
        html (templates/add-template r path (:thing templates)) ; added template to this path node
        assignid (str "assign-" thingid)
        shareid (str "share-" thingid)
        thing (html {:id thingid :assign-id assignid :share-id shareid})
        ]
    (.log js/console "adding new thing node " thingid)
    (dom/append! (dom/by-id "main") thing)))
    

; info model value transformed, update template attached to node path.
(defn value-update-new-thing
  [r [op path oldv newv] input-queue]
  (let [id (render/get-id r path)
        type-path (butlast path)
        view-vec (entity-view/view-value type-path newv)
        title (:title view-vec)
        thing-map {:thing-entry-title title :thumbhref "thumbhref" :entryhref path}]
    (.log js/console (str "updating new thing value " path type-path id))
    (templates/update-t r path thing-map)
    ))


;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; setup action multimethod. It dispatches by transkey, the second item in path [:setup :transkey]
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
(defmulti enable-setup-action
  (fn [render [target path transkey messages] input-queue]
    transkey))


; setup assignment link event listen, when link clicked, fill all messages
; with details contains thingid clicked.
(defmethod enable-setup-action 
  :assign 
  [r [t p k messages] input-queue]
  (let [thingid (last p)   ; last segment of path is thingid
        html (templates/add-template r p (:assignment-form templates))
        divcode (html)
        parent-thing-node (dom/by-id (str thingid))
        assign-sel (str "assign-" thingid)
        assign-div (dom/by-class assign-sel)]
  
    (.log js/console (str "enable setup action " t " path " p " key " k))  
    ; wrap assign link with div and use class selector
    (de/listen! assign-div 
                :click 
                (fn [evt]
                  (dom/append! parent-thing-node divcode)
                  (let [details {:action :create-assignment :id thingid}  ; close over action key
                        new-msgs (msgs/fill :assign messages {:details details})]
                    (.log js/console (str "assign button clicked " new-msgs))
                    (doseq [m new-msgs]
                      (p/put-message input-queue m)))))
  ))


; create new thing btn event listen, when clicked, display input newthing template
; under main div. messages is cljs PersistentVector, hence doseq to process each.
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
    

;; Handle add-tasks 
(defmethod enable-setup-action 
  :share 
  [r [t p k messages] input-queue]            
  (.log js/console (str "share clicked " t p k)))


;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; submit action multimethod. It dispatches on transkey. the second item [:submit :transkey]
;; message is a list of message map. behavior sends [{topic [] (param)} {}]
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
(defmulti enable-submit-action
  (fn [render [target path transkey messages] input-queue]
    transkey))


; wire submit button click on assignment form to fill assign message
(defmethod enable-submit-action 
  :assign
  [r [target path transkey messages] input-queue]
  (let [form (dom/by-class "assignment-form")  ; must use dom by-class to select form ?!
        hwid (last path)  ; last of path is hwid
        to-node (dom/by-id "assign-to")
        hint-node (dom/by-id "assign-hint")
        submit-fn (fn [_]   ; form submit handler, fill msg and ret the msg
                    (let [toid-val (.-value to-node)
                          hint-val (.-value hint-node)
                          details {:action :create-assignment 
                                   :hwid hwid :toid toid-val :hint hint-val}]
                      (.log js/console (str "assign submitted " details))
                      (msgs/fill :assign messages {:details details})))]

    (.log js/console (str "enable assign submit " path transkey messages))
    (events/send-on :submit form input-queue submit-fn)))


; wire submit button click on new thing to fill newthing message
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
                          details {:action :newthing
                                   :type :type-val :title title-val :content content-val
                                  }]
                      (.log js/console (str "newthing submitted " details))
                      (msgs/fill :newthing messages {:details details})))]

    (.log js/console (str "enable newthing submit " path transkey messages form))
    (events/send-on :submit form input-queue submit-fn)))
    
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; 
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [; render login screen first.
    [:node-create  [:login] create-login-template]
    ;[:node-create  [:login] render-home-page]
    [:node-destroy [:login] h/default-destroy]
    [:transform-enable [:login :name] enable-login-submit]
    [:transform-disable [:login :name] disable-login-submit]

    ; side bar nav type
    [:node-create  [:nav] render-home-page]
    [:node-destroy [:nav] h/default-destroy]
    ; upon nav type change, clear all things
    [:value [:nav :type] clear-all-things]
    ; wire sidebar nav click to send this transform to change data model.
    [:transform-enable [:nav :type] enable-type-all-things]

    ; login modal
    [:transform-enable [:nav] enable-login-modal]


    ; create all thing list consist of each thing node
    [:node-create [:all :* :*] add-new-thing-node]
    [:node-destroy [:all :*] h/default-destroy]
    [:node-destroy [:all :* :*] h/default-destroy]
    [:value [:all :* :*] value-update-new-thing]

    ; setup and submit action handler, path [:setup :assign :homework id] multi-method, 
    ; we can match anything, mutlimethod dispatch based on transkey
    [:transform-enable [:setup :**] enable-setup-action]
    [:transform-enable [:submit :**] enable-submit-action]

    ; newthing, path is [:setup :newthing ]
    ;[:transform-enable [:setup :newthing] setup-action-transforms]
    ;[:transform-enable [:submit :newthing] submit-action-transforms]

  ])
