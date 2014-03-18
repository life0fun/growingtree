
(ns ^:shared growingtree-app.util
  (:require [domina :as dom]
            [domina.css :as dc]
            [domina.events :as de]
            [domina.xpath :as dx]
            [io.pedestal.app.util.platform :as platform]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.events :as events]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.protocols :as p]
            [io.pedestal.app.messages :as msgs]
            [io.pedestal.app.util.log :as log]
            [io.pedestal.app.render.push.handlers :as h]
            [io.pedestal.app.render.push.handlers.automatic :as auto]
            ; [cljs.core.async :as async
            ;   :refer [<! >! chan close! sliding-buffer put! alts! timeout]]
    )
  ; (:require-macros [cljs.core.async.macros :as m :refer [go go-loop alt!]])
)

(defn random-id []
  (str (.getTime (platform/date)) "-" (rand-int 1E6)))


; map f to every nth element of a sequence
(defn map-every-nth [f coll n]
  (map-indexed #(if (zero? (mod %1 n)) (f %2) %2) coll))


; pad time with leading 0 upon single digit.
(defn pad-time
  "pad time with leading 0 upon single digit"
  [d]
  (let [pad (fn [n] (if (< n 10) (str "0" n) (str n)))]
    (str (pad (.getHours d)) ":"
         (pad (.getMinutes d)) ":"
         (pad (.getSeconds d)))))


; format a unix epoch time of long, in seconds, which we get from (.unix (js/moment))
; back to moment object, and format to readable
; moment constructor takes
(defn format-time
  [unix-epoch]
  (let [m (js/moment (* 1000 unix-epoch))
        time-str (.format m "hh:mm a ddd, MMM Do YYYY")]
    time-str))


;;==================================================================================
; ret a fn that toggles hide attr of a form
;;==================================================================================
; too bad (dom/toggle-class! form "hide") is not available.
(defn toggle-hide-fn
  "return an event handler fn that toggen hide css class of the form"
  [form clz]
  (fn [_]
    (let [hidden (dom/has-class? form "hide")]
      (.log js/console (str "toggle hide link clicked " clz hidden))
      (if hidden
        (dom/remove-class! form "hide")
        (dom/add-class! form "hide"))
      ; ret whether we displayed the form
      (not hidden))))


; ret the keyword for thing attr
(defn thing-attr-keyword
  [thing-type attr-name]
  (keyword (str (name thing-type) "/" attr-name)))


; get the namespace of thing
(defn thing-ident
  "get thing type of the entity, the namespace, or ident of entity. remove :db/id"
  [entity]
  (let [e (dissoc entity :db/id)  ; remove :db/id
        ident (keyword (namespace (ffirst e)))]
    ident))


; update enum, only update when enum key present.
; thing-val = {:course/title "aa", :course/author "bb", :course/type "math" }
(defn update-enum
  "update in status enum value from string to keyword"
  [thing-val thing-type keyname enum]
  (let [schema-key (keyword (str (name thing-type) "/" keyname))]
    (if (contains? thing-val schema-key)
      (let [enum-key (str (name thing-type) "." keyname)
            enum-fn (fn [v & args] (keyword (str enum-key "/" v)))
            new-val (if enum
                      (-> thing-val
                          (update-in [schema-key] enum-fn))
                      (-> thing-val
                          (update-in [schema-key] keyword)))
            ]
        new-val)  ; return updated new val if value map contains schema key
      thing-val)))


; convert time stamp field to unix epoch
; start time format 2013-02-08 09:30
(defn update-time
  "update in time value from string to keyword"
  [thing-map thing-type keyname]
  (let [schema-key (keyword (str (name thing-type) "/" keyname))]
    (if (contains? thing-map schema-key)
      (let [update-fn (fn [v & args] (.unix (js/moment v)))
            new-map (-> thing-map
                        (update-in [schema-key] update-fn))
            ]
        new-map)  ; return updated new val if value map contains schema key
      thing-map)))


; calc the relation between two moment timestamps.
; we use moment.from(), the args are moment instance
(defn moment-from
  [txtime nowtime]
    (str " " (.from txtime nowtime)))


; get thing value from thing map by name of the attr, regardless of its namespace.
; e.g., get title from any of namespace, :course/title, :lecture/title, etc
(defn thing-val-by-name
  "get thing val by name, within any namespace"
  [thing-map attr-name]
  ; map entry after filter rets [key val] vector
  (-> (filter (fn [entry]
                (= (name (key entry)) attr-name))
              thing-map)
      (first)))  ; filter ret a list


;==============================================================================
; refresh current screen after new thing form submitted
; send :set-nav-path msg to behavior to trigger effect query. fill :path and :qpath.
; :path = [:group 1 :group], showing the header.
; :qpath = [:group 1 :group-member], a list of next thing shows in filtered.
; :path [:group 1 :group], :qpath [:group 1 :comments]
;==============================================================================

; blocking for specified block
(defn block [millsecond]
  ; (go [timeout-chan (timeout millsecond)]
  ;     (<! timeout-chan))
  )

(defn refresh-nav-path
  [add-thing-type navpath input-queue]
  (let [; we need to do some ugly name mangling for thing type.
        nxt (case add-thing-type
                  :assign :assignment   ; swap assignments
                  :grade  :assignment   ; grade is leaf node, reverse next to assignment.
                  :join-group :group-members   ; after join-group, list all members of group
                  add-thing-type)
        ; the case for nav create :course [:create :course] ; [:course 1]
        ; curpath query for header, append first of navpath
        curpath (if (< (count navpath) 3)
                    [:all 0 add-thing-type]
                    (vec (concat (butlast navpath) [(first navpath)])))
        ; qpath query for filtered list, the next target.
        qpath (if (< (count navpath) 3)
                  nil
                  (vec (concat (butlast navpath) [nxt])))
        messages [{msgs/topic [:nav :path]
                   msgs/type :set-nav-path
                   :path curpath     ; the result of this is header
                   :qpath qpath}]    ; the result of qpath is filtered.
        ]

      ; for refresh after :create-thing, let's wait
      (.log js/console (str "refresh-nav-path " add-thing-type " " navpath " msgs " messages))
      (block 1000)
      (.log js/console (str "refresh timeout block done"))
      (doseq [m messages] ;[m new-msgs]  do not need render to fill anything
        (p/put-message input-queue m))
    ))

