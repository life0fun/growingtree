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
            [growingtree-app.newthing-form :as newthing-form]
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


; count of children of a dom element
(defn nchildren
  [root-node]
  (count (dom/nodes (dom/children root-node))))

;;================================================================================
;; node create login and render login and enable setup login
;;================================================================================
(defn create-login
  "node-create of [:login], add template to top template tree root."
  [r [_ rpath :as delta] input-queue]
  (let [parent (render/get-parent-id r rpath)
        id (render/new-id! r rpath)
        html (templates/add-template r rpath (:login templates))
        divcode (html {:id id :name "user" :pass "pass"})
        signup-form (dx/xpath (str "//form[@id='signup-form']"))
        toggle-fn (util/toggle-hide-fn signup-form nil)
       ]
    (.log js/console (str "adding login template " rpath " parent " parent))
    (dom/append! (dom/by-id parent) divcode)
    ; listen on sign up link click
    (de/listen! (dom/by-id "signup-link") :click toggle-fn)
    ))


; put error message to login window
(defn value-login
  [r [op rpath oldv newv] input-queue]
  (when newv
    (let [; qpath is nav to next thing, used for enable add subthing.
          {:keys [user error]} newv
          login-error {:login-error error}
         ]
      (.log js/console (str "value login " rpath "  " newv " " login-error))
      ; thing template is attached at render path node, update it with new view map
      (templates/update-t r [:login] login-error)
      )))


;;================================================================================
;; render home page sidebar and setup sidebar click transforme
;;================================================================================
; home page template includes user avatar, sidebar, leaderboard and list things.
; first avatar
(defn render-avatar
  "user avatar template is under div id=user-avatar and path is [:user]"
  [r user rpath]
  (let [parent "user-avatar"  ; div id=user-avatar
        id (str user "-avatar")
        title (:person/title user)
        html (templates/add-template r rpath (:user templates)) ; stores homepage div at [:nav]
        divcode (html {:id id
                       :user-avatar "avatar.jpg"
                       :user-profile (str "/home/profile/" user)
                       :user-greeting (str "Hi " title)})
       ]

    (.log js/console (str "render avatar template for " user " at "))
    ; attach to dom using domina.
    (dom/append! (dom/by-id parent) divcode)   ; homepage no data val map
  ))


(defn render-home-page
  "homepage template is attached to div id=content "
  ;[r [_ rpath] input-queue]
  [r [op rpath oldv newv] input-queue]
  (let [;parent (render/get-parent-id r rpath)  ; root of top level is [], maps to div id=content
        parent "content"  ; div id=content
        id (render/new-id! r rpath)  ; gen a new id to the rpath.
        html (templates/add-template r rpath (:homepage templates)) ; stores homepage div at [:nav]
        divcode (html {:id id})]

    (.log js/console (str "render-home-page for " newv " at " rpath
                          " id " (render/get-id r rpath)
                          " parent id " (render/get-parent-id r rpath) parent))
    (dom/destroy-children! (dom/by-id parent))
    ; attach to dom using domina.
    (dom/append! (dom/by-id parent) divcode)   ; homepage no data val map
    (render-avatar r newv [:user])  ; assoc avatar templ to [:user] node
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
        main (dom/by-id "main")
        child-idx (nchildren main)
        thing-div (entity-view/thing-node-html rpath r (inc child-idx))]
    (.log js/console (str "adding thing node " nchild rpath thingid))
    (dom/append! main thing-div)))


; only update template when new value exists.
; thing-map is entity {:db/id 17592186045425, :course/url "math.com/Math-I"
; rpath is [:main :all 0 :course 1], [:head/:filter :course 1 :lecture 2]
(defn value-thing-node
  [r [op rpath oldv newv] input-queue]
  (when newv
    (let [; qpath how we get to this thing.
          {:keys [thing-map qpath]} newv
          thing-id (last rpath)
          thing-type (second (reverse rpath))
          thing-view
            (entity-view/thing-value-view r rpath qpath thing-map input-queue)
         ]
      (.log js/console (str "value thing node template " rpath " qpath " qpath " view  " thing-view))
      ; thing template is attached at render path node, update it with new view map
      (templates/update-t r rpath thing-view)
      )))


(defn del-thing-node
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        dom-node (dom/by-id (str thingid))]
    (.log js/console "del thing node " thingid)
    (h/destroy! r rpath)
    (dom/destroy! dom-node)))


;;================================================================================
; add thing-details templ to [:filtered :course 1 :comments 2]
; thing-details templ has thing-root and subthings-list.
; as we need to append nodes to subthings-list, we attach thing-details templ to
; path [:filtered :course 1], as the parent for top level subthings-list.
;;================================================================================
(defn render-filtered-page
  "render thing details parent header and a list of children, delete main children first"
  [r filter-path]  ; filter-path [:course 1]
  (when-not (dom/by-id "thing-root") ;(count (dom/children (dx/xpath (str "//div[@id='" parent-div-id "']")))
    (let [rpath (concat [:filtered] filter-path)  ; hard-code render path to :filtered
          main (dom/by-id "main")
          ; attach thing-details template to rpath
          html (templates/add-template r rpath (:thing-details templates))
          divcode (html {:id (str (name (first filter-path)) "-" (last filter-path))})  ; dom id for thing-details use parent thing-id
         ]
      (.log js/console (str "render filtered details with destroy all under main " rpath))
      (dom/destroy-children! main)
      (dom/append! main divcode))
    ))


; rpath [:header :course 17592186045425]
(defn add-filtered-parent-node
  "render parent header in thing nav details"
  [r [op rpath] input-queue]
  (render-filtered-page r (rest rpath)) ; [:course 17592186045425]
  (let [thing-div (entity-view/thing-node-html rpath r 1) ]
    (.log js/console (str "add header node " rpath))
    ; append rendered template at rpath to thing-root div.
    (dom/append! (dom/by-id "thing-root")
                 (entity-view/thing-node-html rpath r 1))
    ))


; [:filtered :course 1 :comemnts 2]
(defn append-filtered-child-node
  "append child node to thing nav children list panel"
  [r [op rpath] input-queue]
  ; render thing-details template if it is not rendered yet
  ; need to render page first, so the following by-id subthings-list make sense
  (render-filtered-page r (take 2 (rest rpath))) ; [:course 1]
  (let [child-idx (nchildren subthings-div)]
    ; [:filtered :question 17592186045432 :lecture 17592186045430]
    (.log js/console (str "append filtered child node " rpath " child-idx " child-idx))
    (dom/append! (dom/by-id "subthings-list")
                 (entity-view/thing-node-html rpath r (inc child-idx)))
    ; do not offset1 for filtered details
    ;(entity-view/thing-node-add-class thing-id "offset1")
    ))


; for comments child tree
; [:filtered :course 1 :comemnts 2 :comments 3 ...]
; [:node-create [:filtered ... :comments 17592186045433 :comments] :map]
; [:node-create [:filtered ... :comments 17592186045433 :comments 17592186045435] :map]
; as platform will create every node along the path, we create thing node only when thing-id
(defn append-filtered-child-tree
  "build a sub tree whose root is a filtered child node"
  [r [op rpath] input-queue]
  (when-not (js/isNaN (js/parseInt (last rpath) 10)) ; isNaN to check number type.
    ; first, render thing-details template if it is not rendered yet
    (render-filtered-page r (take 2 (rest rpath))) ; [:course 1]

    (let [thing-id (last rpath)
          parent-node (entity-view/thing-node-parent rpath)
          offset (/ (- (count rpath) 5) 2)
          thing (entity-view/thing-node-html rpath r offset)
         ]
      ; [:filtered :question 17592186045432 :lecture 17592186045430]
      (.log js/console (str "append filtered child tree " thing-id " offset " offset rpath))
      ;(.log js/console (str "child tree " thing))
      (dom/append! parent-node thing)
      (entity-view/thing-node-add-class thing-id (str "offset" offset)))))


;----------------------------------------------------------------------------------------------
; title(details) of a thing takes the div block of new-things in thing-details template
; rpath [:details :lecture 1 :title 1] :map] [:details :parent 1 :person 1] [:details :person 1 :title 2]
; break into thing-header [:header :parent 1] and thing-details [:details :parent 1 :person 1]
;----------------------------------------------------------------------------------------------
(defn add-thing-details
  "build a sub tree whose root is a filtered child node"
  [r [op rpath] input-queue]
  (when-not (js/isNaN (js/parseInt (last rpath) 10)) ; isNaN to check number type.
    ; first, render filter page if not exist.
    (render-filtered-page r (take 2 (rest rpath))) ; [:course 1], (:parent 1)
    (let [thing-id (last rpath)
          thing-header (entity-view/thing-node-html [:header (second rpath) thing-id] r 0)
          thing-details (entity-view/thing-node-html rpath r 0)
         ]
      (.log js/console (str "append thing details " thing-id rpath))
      (dom/append! (dom/by-id "thing-root") thing-header)
      (dom/append! (dom/by-id "new-subthings") thing-details)
      )))


; rpath [:details :parent 1 :person 1], qpath=[]
; thing-details-view  {:course-title "Math-I", :course-author "rich-dad" }
; [:details :answer 1 :title 1]
(defn value-thing-details
  [r [op rpath oldv newv] input-queue]
  (when newv
    (let [; qpath is nav to next thing, used for toggle add subthing link.
          {:keys [thing-map qpath]} newv
          thing-id (last rpath)
          thing-type (second rpath)

          thing-head-view
            (entity-view/thing-value-view r [:header thing-type thing-id] [] thing-map input-queue)

          thing-details-view
            (newthing-form/thing-details-view r rpath qpath thing-map input-queue)
         ]

      (.log js/console (str "value thing details " rpath " qpath " qpath " view  " thing-details-view))
      (templates/update-t r [:header thing-type thing-id] thing-head-view)
      (newthing-form/set-input-value thing-type thing-details-view)
      (newthing-form/handle-details-view-btn thing-type)
      )))


(defn del-thing-nav-node
  [r [op rpath] input-queue]
  (let [thingid (last rpath)
        div (dom/by-id (str thingid))]
    (.log js/console (str "del thing nav node " thingid rpath))
    (h/destroy! r rpath)
    (dom/destroy! div)))


;;================================================================================
;; create thing page template, [:node-create [:create :course] :map]
;;================================================================================
; the last ele of the rpath is the thing type
(defn create-thing-page
  [r [op rpath] input-queue]
  (let [add-thing-type (last rpath)
        thing-id nil
        parent (dom/by-id "main")    ; put the template
        divcode (newthing-form/add-thing-form add-thing-type thing-id r rpath)
       ]
    (.log js/console (str "render create thing page at " rpath " type " add-thing-type))
    (dom/destroy-children! parent)
    (dom/append! parent divcode)

    ;(newthing-form/add-thing-datetimepicker add-thing-type thing-id)
    ;(newthing-form/add-thing-tagsInput add-thing-type nil)
    (newthing-form/handle-add-thing-submit add-thing-type rpath override-map input-queue)
    (newthing-form/handle-add-thing-cancel add-thing-type)
    ))


;;================================================================================
;;
;;================================================================================
; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [; render login screen first.
    [:node-destroy [:login] h/default-destroy]
    [:node-create  [:login] create-login]
    [:value  [:login :name] value-login]
    [:transform-enable [:login :name] transforms/enable-login-submit]
    [:transform-disable [:login :name] transforms/disable-login-submit]

    ;; ============== nav path with sidebar or thing type event binding ============
    ;[:node-create  [:nav] render-home-page]
    [:value [:nav :user] render-home-page]
    [:node-destroy [:nav] h/default-destroy]
    ; wire sidebar nav click to send this transform to change data model.
    [:transform-enable [:nav :sidebar] transforms/enable-sidebar-nav]
    [:transform-enable [:nav :search] transforms/enable-search]

    ; login modal
    [:transform-enable [:nav :login-modal] modals/enable-login-modal]
    ; create new thing modal
    ;[:transform-enable [:nav :create-modal] modals/enable-create-modal]
    [:transform-enable [:nav :newthing] modals/enable-nav-newthing]

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
    [:node-create [:main] clear-all-things]
    [:node-create [:main :all :* :* :*] add-thing-node]  ; [:all :parent id]
    [:value       [:main :all :* :* :*] value-thing-node]
    [:node-destroy [:main :all :* :* :*] del-thing-node]
    [:node-destroy [:main] clear-all-things]  ; clear all children under main div

    ;; ============== thing data thing node from thing nav click ============
    ;; thing nav [:filtered :parent 1 :child 2] two sections, head for parent and list of child.
    [:node-create [:header :* :*] add-filtered-parent-node]
    [:value       [:header :* :*] value-thing-node]
    [:node-destroy [:header :* :*] del-thing-node]
    [:node-destroy [:header] clear-all-things]  ; clear all child under main div

    [:node-create [:filtered :* :* :* :*] append-filtered-child-node]
    [:value       [:filtered :* :* :* :*] value-thing-node]
    [:node-destroy [:filtered :* :* :* :*] del-thing-node]
    [:node-destroy [:filtered] clear-all-things]  ; clear all child under main div

    [:node-create [:filtered :* :* :* :* :**] append-filtered-child-tree]
    [:value       [:filtered :* :* :* :* :**] value-thing-node]

    ; thing-details div, [:details :parent 1 :person 1], show
    [:node-create [:details :* :* :* :*] add-thing-details]
    [:value       [:details :* :* :* :*] value-thing-details]
    [:node-destroy [:details] clear-all-things]


    ;============== add comments box [:comments :lecture 1 :comments] ============
    [:node-create [:comments :* :* :*] transforms/enable-add-comments]

    ;; ============== other thing nav links setup and submit handling ============
    ; setup and submit action handler, path [:setup :homework id :assign]
    ; we can match anything, mutlimethod dispatch based on transkey
    [:transform-enable [:setup :**] transforms/enable-setup-action]
    [:transform-disable [:setup :**] disable-setup-action]

    [:transform-enable [:submit :**] transforms/enable-submit-action]
    [:transform-disable [:submit :**] disable-submit-action]


    ;; ============== create new thing view and event binding ============
    [:node-create [:create :*] create-thing-page]
    ;[:transform-enable [:create :*] transforms/enable-submit-action]

  ])
