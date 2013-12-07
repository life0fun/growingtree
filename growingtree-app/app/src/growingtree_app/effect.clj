(ns ^:shared growingtree-app.effect
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.dataflow :as d]
              [io.pedestal.app.util.platform :as platform]
              [io.pedestal.app.util.log :as log]
              [io.pedestal.app.messages :as msgs]
              [clojure.set :as set]))


(comment
  
  (defn example-effect [inputs]
    (returns a vector of messages which effect the outside world ))

  ;; dataflow description reference
  {:transform [[:op [:path] example-transform]]
   :derive    #{[#{[:in]} [:path] example-derive]}
   :effect    #{[#{[:in]} example-effect]}
   :continue  #{[#{[:in]} example-continue]}
   :emit      [[#{[:in]} example-emit]]}
  )

;;=======================================================================
;; when input is tracking map, you can following keys from tracking map
;; :message, :new-model, :old-model, :input-paths :added :updated :removed
;;=======================================================================


(defn get-login-name
  [inputs]
  ;(.log js/console "get login " inputs)
  (get-in inputs [:new-model :login :name]))


;;==================================================================================
;; effect flow, effec-fn gets arg by input specifier and ret a vector of msg,
;; msgs got enq to (:output app) where service-fn consumes them.
;; effect-fn gets single arg, the tracking map, or maps, or single-val.
;;==================================================================================

; inject msg to output queue consumed by service-fn, which makes a xhr request for json data.
; input specifier is :single-val, so arg is single-value
(defn request-navpath-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [inputs]  ; request path things by thing-type
  (let [msg (:message inputs)  ; get the active msg
        activepath (:path msg)   ; active path is the under msg path key.
        thing-type (last activepath)
        msg-topic (concat [:data] activepath) ; topic = [:data :all 0 :parent]
        msg-type :set-thing-data
        body {:msg-topic msg-topic :msg-type msg-type :path activepath}]
    (.log js/console (str "effect request nav path things " body))
    ; only request when nav thing-type sidebar clicked !
    (if thing-type
      [{msgs/topic [:server] msgs/type thing-type (msgs/param :body) body}])))
    

;
; request data based on xpath, store data into xdata
(defn request-xpath-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [inputs]  ; request xpath things by type
  (let [msg (:message inputs)  ; get the msg that triggers this effect
        msg-topic (cons :xdata (rest (msgs/topic msg)))  ;[:xdata :parents 17592186045499 :children]
        msg-type :set-xdata   ; dispatch to set-xdata
        target (last msg-topic)
        qpath (rest msg-topic)  ; query path [:parent id :children]
        body {:msg-topic msg-topic :msg-type msg-type :target target :qpath qpath}
       ] 
    (.log js/console (str "request xpath things topic " msg-topic qpath))
    [{msgs/topic [:server] msgs/type :xpath (msgs/param :body) body }]
    ))


; request timeline
(defn request-timeline
  [timeline]
  [])


; effect processing. assign submit btn clicked.
; inputs contains {:mesage {topic [] :details} :new-model {} :old-model {}}
;; rich post submit thing [:submit :assignn] action :assign details {:action :create-assignment, :hwid 17592186045485, :toid "a", :hint "b"}
;; rich post submit thing [:submit :newthing] action :newthing details {:action :newthing, :type "course", :title "", :content "", :user "rich"}
(defn post-submit-thing
  "after use created new thing, post them to database"
  [inputs]
  (let [user (get-login-name inputs)
        msg (:message inputs)  ; the msg sent when assign clicked
        topic (msgs/topic msg)   ;[:submit :assign :homeworks 17592186045485]
        action (second topic)    ; :assign is msg type
        thingid (last topic)
        details (:details msg)
        body (assoc details :user user)]  ; homework id and :toid and hint
    (.log js/console (str user " post submit thing " topic " action " action 
                          " thingid " thingid " body " body))
    ; msg type :assign
    [{msgs/topic [:server] msgs/type action :body body}]))



; effect processing. create new thing form submitted
; inputs contains {:mesage {topic [] :details} :new-model {} :old-model {}}
;; rich post submit thing [:submit :assignn] action :assign details {:action :create-assignment, :hwid 17592186045485, :toid "a", :hint "b"}
;; rich post submit thing [:submit :newthing] action :newthing details {:action :newthing, :type "course", :title "", :content "", :user "rich"}
(defn post-create-thing
  "create new thing form submitted, [:create :*] form transformed"
  [inputs]
  (let [user (get-login-name inputs)
        msg (:message inputs)    ; the msg sent when create new thing form submitted
        topic (msgs/topic msg)   ;[:create :course]
        action (second topic)    ; :creatething is msg type
        thing-type (last topic)
        details (:details msg)   ; details
        body (assoc details :user user)]  ; user is author
    (.log js/console (str user " created new thing " thing-type " body " body))
    ; msg type :assign
    [{msgs/topic [:server] msgs/type action :body body}]
    ))
