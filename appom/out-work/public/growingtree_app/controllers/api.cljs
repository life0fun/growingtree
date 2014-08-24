(ns growingtree-app.controllers.api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]))


(declare append-activity-to-channel)
(declare append-thing-node)
(declare drop-old-activity-from-channel)

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; API chan event processing. update global state with ajax data from datomic peer.
; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

; target is view fn $el, not used.
(defmulti api-event
  (fn [target msg-type msg-data state] msg-type))


; api-data set ajax result/things-vec to state :body slot. will trigger re-render.
; api-data {:body [:all 0 :parent]}, :things-vec ({:person/url #{rich.com} ...}]
; api-data {:body [:course 1 :lecture], :things-vec [{:lecture/type :math, :lecture/numcomments 0, :lectu
; store into global state map with nav-path as map key and things-vec as value.
; api event come back, store in app state body section.
(defmethod api-event
  :api-data
  [target msg-type msg-data state]
  (let [things-vec (:things-vec msg-data)
        nav-path (:nav-path msg-data)
       ]
    (.log js/console (pr-str "api-data set :body things-vec " nav-path msg-data))
    (-> state
      (assoc-in [:body] things-vec))  ; api-data hard-code to set :body
    ))

; api-event add-thing success ajax. refresh after add means just re-direct url to nav-path that
; just before add-thing. This way we can switch to client side routing in the future.
; update-in nav path directly. Or put! comm last-nav-path, 
(defmethod api-event
  :api-success
  [target msg-type msg-data state]
  (let [last-nav-path (last (drop-last (get-in state [:nav-path])))  ; url before :add-thing
       ]
    (.log js/console (pr-str "api-success : re-direct with update-in to " last-nav-path)) 
    (-> state
      (update-in [:nav-path] conj last-nav-path))
    ))

; api-event error from ajax, set to state error slot. msg-data has :nav-path and :error, nil :things-vec
; msg-data {:nav-path {:add-thing :activity :details {}} :error {:status :response :status-text ...}}
(defmethod api-event
  :api-error
  [target msg-type msg-data state]
  (let [error (:error msg-data)
        nav-path (:nav-path msg-data)
        last-nav-path (last (drop-last (get-in state [:nav-path])))]
    (.log js/console (pr-str "api-error set state [:error] " (get-in msg-data [:error :status-text])))
    ; must ret valid state atom.
    (-> state
      (assoc-in [:error] msg-data))
    ))

(defmethod api-event 
  :channel-activity-received
  [target msg-type msg-data state]
  (let [message-limit (get-in state [:settings :message-limit])]
    (-> state
        (append-activity-to-channel (:channel-id msg-data) msg-data)
        (drop-old-activity-from-channel (:channel-id msg-data) message-limit))))

(defmethod api-event 
  :channel-remotely-destroyed
  [target msg-type channel-id state]
  (update-in state [:channels] dissoc channel-id))


(defn append-activity-to-channel [state channel-id activity]
  (update-in state [:channels channel-id :activities] (comp (partial sort-by :created_at) conj) activity))

; append thing-node to thing type.
(defn append-thing-node [state type thing-node]
  (update-in state [:things type :things] (comp (partial sort-by :created_at) conj) thing-node))

(defn drop-old-activity-from-channel [state channel-id message-limit]
  (update-in state [:channels channel-id :activities] (partial take-last message-limit)))

