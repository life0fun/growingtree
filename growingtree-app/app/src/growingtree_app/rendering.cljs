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
            ; entity view map
            [growingtree-app.entity-view :as entity-view])
  (:require-macros [growingtree-app.html-templates :as html-templates]))


; Load templates.
(def templates (html-templates/growingtree-app-templates))

; pad time with leading 0 for single digit.
(defn- format-time [d]
  (let [pad (fn [n] (if (< n 10) (str "0" n) (str n)))]
    (str (pad (.getHours d)) ":"
         (pad (.getMinutes d)) ":"
         (pad (.getSeconds d)))))


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

; home page template includes sidebar, leaderboard and topthings. 
(defn render-home-page 
  "homepage template is attached to [:nav], dom append to root"
  [r [_ path] input-queue]
  (let [parent (render/get-parent-id r path)  ; root of top level is [], maps to div id=content
        id (render/new-id! r path)  ; gen a new id to the path.
        html (templates/add-template r path (:home-page templates))] ; [:nav] node contains homepage template
    ; invoke reted html fn to gen html and attach to dom using domina.
    (dom/append! (dom/by-id parent) (html))   ; homepage no data val map
  ))



;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; transform enable to hook up ui event to send msg to update data model nodes.
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

; sidebar click transform [:nav :type] value, trigger request to get list of things.
(def all-things-transform
  "wire sidebar click event to all things transform fn"
  (fn [r [_ p transform-name message] input-queue]
    (let [sidebars ["parents" "children" "courses" "lectures" "homeworks"
                    "assignments" "topquestions" "topanswers" "ask" "answer"
                    "contributions" "knowledges" "activities" "locations"]]
      (doseq [type sidebars]
        (events/send-on :click (dom/by-id (str "sidenav-" type)) input-queue
                        (msgs/fill :set-nav-type
                                    message
                                    {:type (keyword type)}))))))


; -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
; multimethod polymorph.  It dispatches on the key of the transform-enable
(defmulti setup-action-transforms 
  (fn [render [target path transkey messages] input-queue]
    transkey))


; on assign to link clicked
(defmethod setup-action-transforms :assign 
  [r [t p k messages] input-queue]
  (let [thingid (last p)   ; last segment of path is thingid
        html (templates/add-template r p (:assignment-form templates))
        divcode (html)
        parent-thing-node (dom/by-id (str thingid))
        assign-sel (str "assign-" thingid)
        assign-div (dom/by-class assign-sel)]
  
    ;(.log js/console (str "setup action transform " t " path " p " key " k))  
    ; wrap assign link with div and use class selector
    (de/listen! assign-div 
                :click 
                (fn [evt]
                  (dom/append! parent-thing-node divcode)
                  (let [details {:action :create-assignment :id thingid}  ; close over action key
                        new-msgs (msgs/fill :assign messages {:details details})]
                    (.log js/console (str "assign button clicked " messages))
                    (doseq [m new-msgs]
                      (p/put-message input-queue m)))))
  ))

    
;; Handle add-tasks 
(defmethod setup-action-transforms :share 
  [r [t p k messages] input-queue]            
  (.log js/console (str "share clicked " t p k)))


; -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
; multimethod polymorph.  It dispatches on the key of the transform-enable
(defmulti submit-action-transforms 
  (fn [render [target path transkey messages] input-queue]
    transkey))

; wire submit button click on assignment form to fill assign message
(defmethod submit-action-transforms :assign
  [r [target path transkey messages] input-queue]
  (let [form (dom/by-class "assignment-form")   ; submit button of this form
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

    (.log js/console (str "submit assign transform " path transkey messages))
    (events/send-on :submit form input-queue submit-fn)))

    
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; create template for each path node and append to topthings div
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

; clear all things
(defn clear-all-things
  "upon nav type change, clear all things divs under topthings div"
  [r [_ path oldv newv] input-queue]
  (.log js/console (str "clear all things upon nav type change " path))
  (dom/destroy-children! (dom/by-id "topthings")))


; note that listen is on dom.event namespace.
(defn- assign-to-listener
  "add click listener to assign to link"
  [r path thingid]
  (let [html (templates/add-template r path  ; append div to current path node
                                     (:assignment-form templates))
        divcode (html)
        parent-thing-node (dom/by-id (str thingid))
        assign-sel (str "assign-" thingid)
        assign-div (dom/by-class assign-sel)]
    (.log js/console (str "assign to listener " path thingid))
    
    ; wrap assign link with div and use class selector
    (de/listen! assign-div 
                :click 
                (fn [evt]
                  (.log js/console (str "assign button clicked " thingid (:target evt)))
                  (dom/append! parent-thing-node divcode)))
  ))


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
    (dom/append! (dom/by-id "topthings") thing)))
    

(defn update-new-thing-value
  [r [op path oldv newv] input-queue]
  (let [id (render/get-id r path)
        type-path (butlast path)
        view-vec (entity-view/view-value type-path newv)
        title (:title view-vec)
        thing-map {:thing-entry-title title :thumbhref "thumbhref" :entryhref path}]
    (.log js/console (str "updating new thing value " path type-path id))
    (templates/update-t r path thing-map)
    ;(assign-to-listener r path (last path))
    ))


; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [[:node-create  [:nav] render-home-page]
   [:node-destroy [:nav] auto/default-exit]
   ; upon nav type change, clear all things
   [:value [:nav :type] clear-all-things]
   
   ; wire sidebar nav click to send this transform to change data model.
   [:transform-enable [:nav :type] all-things-transform]
   
   ; all things type div node creation
   [:node-create [:all :* :*] add-new-thing-node]
   [:node-destroy [:all :*] auto/default-exit]
   [:node-destroy [:all :* :*] auto/default-exit]
   [:value [:all :* :*] update-new-thing-value]

   ; assignment details, only for homeworks type so far
   ;[:transform-enable [:all :* :*] on-assignment-transform]
   [:transform-enable [:action :setup :* :*] setup-action-transforms]
   [:transform-enable [:action :submit :* :*] submit-action-transforms]

  ])
