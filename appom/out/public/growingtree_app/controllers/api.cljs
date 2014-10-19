(ns growingtree-app.controllers.api
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [growingtree-app.mock-data :as mock-data])
  )


(declare append-activity-to-channel)
(declare append-thing-node)
(declare drop-old-activity-from-channel)

; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; API chan event processing fn calle by swap to trans global state.
; assoc-in api ajax data from datomic peer into slots inside global state.
; Note api is not part of OM UI rendering interactive phase. so no use of om/update. 
; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
; target is view fn $el, not used.
; (defmulti api-event
;   (fn [target msg-type msg-data state] msg-type))


; ; when query data available, api-data set ajax result/things-vec to state :body slot. trigger re-render.
; ; api-data {:body [:login 0 :login]}, :thing-vec [[:person/lname "rich"]]
; ; api-data {:body [:all 0 :parent]}, :things-vec ({:person/url #{rich.com} ...}]
; ; api-data {:body [:course 1 :lecture], :things-vec [{:lecture/type :math, :lecture/numcomments 0, :lectu
; ; store into global state map with nav-path as map key and things-vec as value.
; ; api event come back, store in app state body section.
; (defmethod api-event
;   :api-data
;   [target msg-type msg-data state]  ; state is atom passed from swap! state
;   (let [comm (get-in state [:comms :controls])
;         things-vec (:things-vec msg-data)
;         nav-path (:nav-path msg-data)
;         thing-type (get-in nav-path [:body 1 2])
;        ]
;     (.log js/console (pr-str "api-data set :body things-vec " nav-path thing-type msg-data))
;     (if (= :login thing-type)
;       (let [msg [:logged-in :login-user]]
;         (.log js/console (pr-str "logged in nav-path " (last (get-in state [:nav-path]))))
;         ; set msg to display main page.
;         (put! comm msg)
;         (-> state  ; return updated state.
;           (assoc-in [:login-user] (into {} things-vec))
;           (update-in [:nav-path] conj {:title [] :body [:all 0 :parent] :data {}})))
;       (assoc-in state [:body] things-vec)  ; api-data hard-code to set :body
;       )))

; ; api-event add-thing success ajax. refresh after add means just re-direct url to nav-path that
; ; just before add-thing. This way we can switch to client side routing in the future.
; ; To trigger ajax call on the last nav-path, post control event.
; ; update-in nav path directly. Or put! comm last-nav-path, 
; (defmethod api-event
;   :api-success
;   [target msg-type msg-data state]
;   (let [comm (get-in state [:comms :controls])
;         ;{:body [:filter-things [:pareni 1 :child]], :data {:pid 1}} 
;         last-nav-path (last (drop-last (get-in state [:nav-path])))  ; url before :add-thing
;         ; when api success, replace {:body [:newthing-form [:course :add-course]]} with [:all-things [:all 0 :thing-type]] 
;         msg (as-> (get-in last-nav-path [:body 0]) msg-type 
;               (if (= :newthing-form msg-type)
;                 ; refer to thing-nav in navbar for creating nav-path for :all-things
;                 (mock-data/get-all-things-msg (get-in last-nav-path [:body 1 0]) {:author "rich-dad"})
;                 [msg-type last-nav-path]))
;        ]
;     (.log js/console (pr-str "api-success : re-direct by sending to comm msg " msg))
;     (put! comm msg)
;     (-> state   ; nullify state :body slot where thing-vec taken from in main_area things-list
;       (assoc-in [:body] nil))
;     ))

; ; api-event error from ajax, set to state error slot. msg-data has :nav-path and :error, nil :things-vec
; ; msg-data {:nav-path {:add-thing :activity :details {}} :error {:status :response :status-text ...}}
; (defmethod api-event
;   :api-error
;   [target msg-type msg-data state]
;   (let [error (:error msg-data)
;         nav-path (:nav-path msg-data)
;         last-nav-path (last (drop-last (get-in state [:nav-path])))]
;     (.log js/console (pr-str "api-error set state [:error] " (get-in msg-data [:error :status-text])))
;     ; must ret valid state atom.
;     (-> state
;       (assoc-in [:error] msg-data))
;     ))

; (defmethod api-event 
;   :channel-activity-received
;   [target msg-type msg-data state]
;   (let [message-limit (get-in state [:settings :message-limit])]
;     (-> state
;         (append-activity-to-channel (:channel-id msg-data) msg-data)
;         (drop-old-activity-from-channel (:channel-id msg-data) message-limit))))

; (defmethod api-event 
;   :channel-remotely-destroyed
;   [target msg-type channel-id state]
;   (update-in state [:channels] dissoc channel-id))


(defn append-activity-to-channel [state channel-id activity]
  (update-in state [:channels channel-id :activities] (comp (partial sort-by :created_at) conj) activity))

; append thing-node to thing type.
(defn append-thing-node [state type thing-node]
  (update-in state [:things type :things] (comp (partial sort-by :created_at) conj) thing-node))

(defn drop-old-activity-from-channel [state channel-id message-limit]
  (update-in state [:channels channel-id :activities] (partial take-last message-limit)))

