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
(defn request-all-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [type]  ; request all things by type
  (.log js/console "request things of type upon sidebar click  " type)
  ; only request when nav type sidebar clicked !
  (if type
    [{msgs/topic [:server] msgs/type type (msgs/param :body) {:filter :all}}]))
  

(defn request-filtered-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [details]  ; request filtered things by type
  (let [filterpath (:filterpath details)]
    (.log js/console (str "request filtered things " filterpath details))
    ; (if type
    ;   [{msgs/topic [:server] msgs/type type (msgs/param :body) {:filter :all}}]))
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
