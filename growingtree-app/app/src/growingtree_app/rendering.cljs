(ns growingtree-app.rendering
  (:require [domina :as dom]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push.templates :as templates]
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


; gen a dom render id for this newly created node and append it as the child of
; top level [:course] path node.
(defn append-list-thing-node 
  [r [_ path] d]
  (let [parent (render/get-parent-id r path)
        id (render/new-id! r path)  ; gen a domRender id for this 
        html (templates/add-template r path (:toprow-node templates))
        ]
    ;(templates/prepend-t r [:course] 
    ;                     {:toprows (html {:id id :text "learning clojure is fun"})})
    (dom/append! (dom/by-id "toprow-list") (html {:id id :text "learning clojure from dom"}))
  ))


(defn remove-template
  "remove the template attached to path node"
  [r path]
  (let [divid (dom/by-id (render/get-id r path))
        topthings (dom/by-id "topthings")]
    (.log js/console "removing template at " path " #id " divid)
    (if-not topthings
      (dom/destroy! topthings))))

;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
;; transform enable to hook up ui event to send msg to update data model nodes.
;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

; sidebar click transform [:nav :type] value, trigger request to get list of things.
(def all-things-transform
  "wire sidebar click event to all things transform fn"
  (fn [r [_ p k message] input-queue]
    (let [sidebars ["parents" "children" "courses" "lectures" "homeworks"
                    "assignments" "topquestions" "topanswers" "ask" "answer"
                    "contributions" "knowledges" "activities" "locations"]]
      (doseq [k sidebars]
        (events/send-on :click (dom/by-id (str "sidenav-" k)) input-queue
                        (msgs/fill :set-nav-type 
                                    message 
                                    {:type (keyword k)}))))))


; when user click nav sidebar, create new template attach to path node 
; [:nav :type] and attach to toprow-list dom 
(defn create-all-things
  [r [_ path] d]
  (let [title (str " " (name (last path)))
        parent (render/get-parent-id r path) ; parent is used for dom/append to parent
        id (render/new-id! r path)  ; gen id for this path node
        html (templates/add-template r path (:thing templates)) ; added template to this path node
        thumbhtml (templates/add-template r path (:thing-thumbnail templates))
        entryhtml (templates/add-template r path (:thing-entry templates))
        thing (html {:id id :thumbhref "thumbhref" :entryhref path
                     :thing-entry-title title})
       ]
    
    (.log js/console "create and render all things " (pr-str path))
    ; first, destroy existing things
    (remove-template r path)

    ; [:nav] path node's template has been dom appended to root [] home page
    (templates/append-t    ; append or prepend, the same here. prepend-t
                r [:nav]   ; put the template into nav node, which has home page 
                ;{:topthings (html {:id id :href path :thing-entry-title title})})
                {:topthings thing})

    ; this will cause thumbhtml get appended to the list of templates at [:nav]
    ; (templates/append-t    ; append or prepend, the same here. prepend-t
    ;             r [:nav]
    ;             {:topthings (thumbhtml {:thumbhref "thumbnail"})})

    ; dom append will append to the main
    ;(dom/append! (dom/by-id "topthings") (html {:id id :text title}))
  ))


; when we change category, destroy the old category
(defn destroy-all-things
  [r [_ path] d]  
  (dom/destroy! (dom/by-id (render/get-id r path))))  ; find id for this path node



;; show updated value in [:all :* ] upon value change emitter on the node.
(defn update-all-courses
  "value change event contains the value in path node, use it to update"
  [r [_ path oldv newv] input-queue]
  (let [id (render/get-id r path)  ; get the div id of this node, or parent-node ?
        html (templates/add-template r path (:thing templates)) ; added template to this path node
        thumbhtml (templates/add-template r path (:thing-thumbnail templates))
        entryhtml (templates/add-template r path (:thing-entry templates))

        titles (map :course/title newv)  ; project all titles 
        things (map #(html {:id id :thumbhref "thumbhref" :entryhref path 
                            :thing-entry-title %}) titles)
        ]
    
    (dom/destroy-children! (dom/by-id "topthings"))

    (.log js/console "update all things path " path " oldv " oldv " newv " newv)
    ;(.log js/console "update course " ((keyword "course/title") (first newv)) " - " (:course/title (first newv)))
    (doseq [t things]
        ; (.log js/console "update all titles " t)    ; this logs html div
        ;(templates/append-t r [:nav] {:topthings t})
        (dom/append! (dom/by-id "topthings") t)
        )))

(defn update-all-parents
  "value change event contains the value in path node, use it to update"
  [r [_ path oldv newv] input-queue]
  (let [id (render/get-id r path)  ; get the div id of this node, or parent-node ?
        html (templates/add-template r path (:thing templates)) ; added template to this path node
        thumbhtml (templates/add-template r path (:thing-thumbnail templates))
        entryhtml (templates/add-template r path (:thing-entry templates))

        fname (map :parent/fname newv)  ; project all titles 
        things (map #(html {:id id :thumbhref "thumbhref" :entryhref path 
                            :thing-entry-title %}) fname)
        ]
    
    (.log js/console "update all things path " path " oldv " oldv " newv " newv)
    ;(.log js/console "update course " ((keyword "course/title") (first newv)) " - " (:course/title (first newv)))

    (dom/destroy-children! (dom/by-id "topthings"))

    (doseq [t things]
        ; (.log js/console "update all titles " t)    ; this logs html div
        ;(templates/append-t r [:nav] {:topthings t})
        (dom/append! (dom/by-id "topthings") t)
    )))


(defn update-all-things
  "value change event contains the value in path node, use it to update"
  [r [_ path oldv newv] input-queue]
  (let [id (render/get-id r path)  ; get the div id of this node, or parent-node ?
        html (templates/add-template r path (:thing templates)) ; added template to this path node
        thumbhtml (templates/add-template r path (:thing-thumbnail templates))
        entryhtml (templates/add-template r path (:thing-entry templates))

        ; get entity view map
        view-vec (entity-view/view-value path newv)
        titles (:title view-vec)
        things (map #(html {:id id :thumbhref "thumbhref" :entryhref path 
                            :thing-entry-title %}) titles)
        ]
    
    (.log js/console "update all things path " path " title " title " newv " newv)
    ;(.log js/console "update course " ((keyword "course/title") (first newv)) " - " (:course/title (first newv)))

    (dom/destroy-children! (dom/by-id "topthings"))

    (doseq [t things]
        ; (.log js/console "update all titles " t)    ; this logs html div
        ;(templates/append-t r [:nav] {:topthings t})
        (dom/append! (dom/by-id "topthings") t)
    )))


; render config dispatch app model delta to render fn.
; the render config is refed in config/config.edn
; wildcard :* means exactly one segment with any value, :** means 0+ more.
(defn render-config []
  [[:node-create  [:nav] render-home-page]
   [:node-destroy [:nav] auto/default-exit]
   ;[:node-create  [:course :*] create-course-node]
   
   ; wire sidebar nav click to send this transform to change data model.
   [:transform-enable [:nav :type] all-things-transform]
   
   ; node value taken from last segment of node path
   ;[:value [:all :courses] update-all-courses]
   ;[:value [:all :parents] update-all-parents]
   [:value [:all :*] update-all-things]
  ])
