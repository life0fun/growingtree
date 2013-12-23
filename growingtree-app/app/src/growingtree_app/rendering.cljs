(ns growingtree-app.rendering
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
            [growingtree-app.transforms :as transforms]
            [growingtree-app.modals :as modals]
            [growingtree-app.util :as util]
            [growingtree-app.entity-view :as entity-view]
            [growingtree-app.selector :as sel])
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
; data back to apply. 
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


;;================================================================================
;; node create login and render login and enable setup login
;;================================================================================
(defn create-login-template
  "node-create of [:login], add template to top template tree root."
  [r [_ rpath :as delta] input-queue]
  (let [parent (render/get-parent-id r rpath)
        id (render/new-id! r rpath)
        html (templates/add-template r rpath (:login templates))
        divcode (html {:id id :name "user" :pass "pass"})]
    (.log js/console (str "adding login template " rpath " parent " parent))
    (dom/append! (dom/by-id parent) divcode)
  ))


;;================================================================================
;; render home page sidebar and setup sidebar click transforme
;;================================================================================
; home page template includes sidebar, leaderboard and topthings. 
(defn render-home-page 
  "homepage template is attached to [:nav], div homepage with id stored in [:nav] node"
  [r [_ rpath] input-queue]
  (let [parent (render/get-parent-id r rpath)  ; root of top level is [], maps to div id=content
        id (render/new-id! r rpath)  ; gen a new id to the rpath.
        html (templates/add-template r rpath (:homepage templates)) ; stores homepage div at [:nav] 
        divcode (html {:id id})]

    (.log js/console (str "render home template at " rpath " id " (render/get-id r rpath) 
                          " parent id " (render/get-parent-id r rpath) parent))
    (dom/destroy-children! (dom/by-id parent))
    ; attach to dom using domina.
    (dom/append! (dom/by-id parent) divcode)   ; homepage no data val map
  ))


; called upon nav rpath change, clear all children under main div for 
(defn clear-all-things
  "upon nav type change, clear all things divs under topthings div"
  [r [_ rpath oldv newv] input-queue]
  (.log js/console (str "clear all things upon nav type change " rpath))
  (dom/destroy-children! (dom/by-id "main")))


;;==================================================================================
;; add each thing list node, and setup action bar transformer in each node.
;;==================================================================================
; info model added a new node, create a new thing node, append it to topthings div.
; render rpath 
(defn add-thing-node
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        thing-div (entity-view/thing-node-html rpath r)
        main (dom/by-id "main")]
    (.log js/console (str "adding thing node " rpath thingid))
    (dom/append! main thing-div)))
    

; info model value transformed, update template attached to node path.
; oldv contains old value map and newv contains new value map. 
; only update template when new value exists.
; thing-map is entity {:db/id 17592186045425, :course/url "math.com/Math-I"
; rpath is [:main :all 0 :course 17592186045425] 
(defn value-thing-node
  [r [op rpath oldv newv] input-queue]
  (when newv
    (let [{:keys [thing-map qpath]} newv  ; qpath is nav to next thing, used for enable add subthing.
          thing-id (last rpath)
          thing-type (second (reverse rpath))
          thing-view (entity-view/thing-value-view r rpath qpath thing-map input-queue)
         ]
      (.log js/console (str "value thing node " rpath " qpath " qpath " view  " thing-view))
      ; thing template is attached at render path node, update it with new view map
      (templates/update-t r rpath thing-view))))


(defn del-thing-node
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        dom-node (dom/by-id (str thingid))]
    (.log js/console "del thing node " thingid)
    (h/destroy! r rpath)
    (dom/destroy! dom-node)))
    

;;================================================================================
;; add thing nav parent node. we should take the last thing id path segment, 
;; and render it as top section parent node, and the list of children
;; attach thing-details template to main div
;;================================================================================

; render thing details page for thing nave, first, delete main div childrens.
; the render two sections, parent data at upper layer and list of children
; render this page when it was not there.
(defn render-filtered-page
  "render thing details parent header and a list of children, delete main children first"
  [r rpath]  ; render rpath=[:header :parent]
  (when-not (dom/by-id "thing-root") ;(count (dom/children (dx/xpath (str "//div[@id='" parent-div-id "']")))
    (let [id (render/new-id! r (vec rpath))
          templ (:thing-details templates)  ; attach thing-details template to main div
          html (templates/add-template r rpath templ)
          divcode (html {:id id})
          main (dom/by-id "main")]
      (.log js/console (str "render detail page " rpath id))
      (dom/destroy-children! main)
      (dom/append! main divcode))))


;
; [:header :question 17592186045432] 
(defn add-filtered-parent-node
  "render parent header in thing nav details"
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        thing-div (entity-view/thing-node-html rpath r)
        ; get parent node
        ;div (dom/by-id (str thingid))
        ]
    (.log js/console (str "add header node " thingid rpath))
    ; first, clear all children
    ;(dom/destroy-children! (dom/by-id "main"))
    (render-filtered-page r (butlast rpath)) ; [:header :parent]
    ; append parent
    (dom/append! (dom/by-id "thing-root") thing-div)))


; [:filtered :question 17592186045432 :lecture 17592186045430]
(defn append-filtered-child-node
  "append child node to thing nav children list panel"
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        thing (entity-view/thing-node-html rpath r)]
    ; render thing-details template if it is not rendered yet
    (render-filtered-page r rpath)
    ; [:filtered :question 17592186045432 :lecture 17592186045430]
    (.log js/console (str "append thing nav child node " thingid rpath))
    (dom/append! (dom/by-id "subthings-list") thing)))
    

(defn del-thing-nav-node
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        div (dom/by-id (str thingid))]
    (.log js/console (str "del thing nav node " thingid rpath))
    (h/destroy! r rpath)
    (dom/destroy! div)))


;;================================================================================
;; create thing page template
;;================================================================================
; the last ele of the rpath is the thing type
(defn create-thing-page
  [r [op rpath] input-queue]
  (let [thing-type (last rpath)
        id (render/new-id! r rpath)   ; new id for [::create :course]
        parent (dom/by-id "main")    ; put the template
        templ (thing-type templates)
        html (templates/add-template r rpath templ)
        divcode (html {:id id})]
    (.log js/console (str "render create thing page at " rpath " type " thing-type
                          " id " id " " (render/get-id r rpath)))
    (dom/destroy-children! parent)
    (dom/append! parent divcode)))


;;================================================================================
;;
;;================================================================================
; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [; render login screen first.
    [:node-create  [:login] create-login-template]
    [:node-destroy [:login] h/default-destroy]
    [:transform-enable [:login :name] transforms/enable-login-submit]
    [:transform-disable [:login :name] transforms/disable-login-submit]

    ;; ============== nav path with sidebar or thing type event binding ============
    [:node-create  [:nav] render-home-page]
    [:node-destroy [:nav] h/default-destroy]
    ; wire sidebar nav click to send this transform to change data model.
    [:transform-enable [:nav :sidebar] transforms/enable-sidebar-nav]

    ; login modal
    [:transform-enable [:nav :login-modal] modals/enable-login-modal]
    ; create new thing modal
    [:transform-enable [:nav :create-modal] modals/enable-create-modal]

    ; thing nav path event bindings, match any path, setup in thing navpath transforms
    ; render path is created by thing-navpath-transforms emitter.
    ; [:nav :thing-type :thing-id :nex-thing]
    [:transform-enable  [:nav :* :**] transforms/enable-thing-nav]
    [:transform-disable [:nav :* :**] h/default-destroy]


    ;; ============== all data thing node viewed on main section ============
    ;; render path is setup in navpath->render-path in thing-data-emitter
    ;; ======================================================================
    ; there is race condition when click thing nav and before data returns, we clicked
    ; side nav. so the header/filter will comes after side nav clear all.
    ; the first :all node will create main, so we need to render home page again upon main.
    [:node-create  [:main] clear-all-things]   
    [:node-create [:main :all :* :* :*] add-thing-node]  ; [:all :parent id]
    [:value       [:main :all :* :* :*] value-thing-node]
    [:node-destroy [:main :all :* :* :*] del-thing-node]
    [:node-destroy [:main] clear-all-things]  ; clear all children under main div

    ;; ============== thing data thing node from thing nav click ============
    ;; thing nav [:filtered :parent 1 :child 2] two sections, head for parent and list of child.
    [:node-create [:header :* :*] add-filtered-parent-node]  
    ;[:value       [:header :* :*] value-filtered-parent-node]
    [:value       [:header :* :*] value-thing-node]
    [:node-destroy [:header :* :*] del-thing-node]
    [:node-destroy [:header] clear-all-things]  ; clear all child under main div

    [:node-create [:filtered :* :* :* :*] append-filtered-child-node]
    ;[:value       [:filtered :* :* :* :*] value-filtered-child-node]
    [:value       [:filtered :* :* :* :*] value-thing-node]
    [:node-destroy [:filtered :* :* :* :*] del-thing-node]
    [:node-destroy [:filtered] clear-all-things]  ; clear all child under main div
    

    ;; ============== other thing nav links setup and submit handling ============
    ; setup and submit action handler, path [:setup :homework id :assign]
    ; we can match anything, mutlimethod dispatch based on transkey
    [:transform-enable [:setup :**] transforms/enable-setup-action]
    [:transform-disable [:setup :**] disable-setup-action]

    [:transform-enable [:submit :**] transforms/enable-submit-action]
    [:transform-disable [:submit :**] disable-submit-action]

  
    ;; ============== create new thing view and event binding ============
    [:node-create [:create :*] create-thing-page]
    [:transform-enable [:create :*] transforms/enable-submit-action]
    
  ])
