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
;; XXX we specific tranform msg topic and type here so response data got dispatch 
;; to the right locaton in data model directly.
;;==================================================================================
; (defn request-navpath-things
;   "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
;   [inputs]  ; request path things by thing-type
;   (let [msg (:message inputs)  ; get the active msg
;         activepath (:path msg)   ; [:all 0 :children] or [:parent 1 :children] or [:parent 1 :parent]
        
;         thing-type (last activepath)
;         ; topic = [:data :all 0 :parent], store data in location [:data :parent 1 :children]
;         msg-topic (concat [:data] activepath)
;         msg-type :set-thing-data
;         body {:msg-topic msg-topic :msg-type msg-type 
;               :thing-type thing-type :path activepath}]
;     ;{:msg-topic (:data :all 0 :children), :msg-type :set-thing-data, :thing-type :children, :path [:all 0 :children]} 
;     (.log js/console (str "effect request nav path things " body))
;     (if thing-type
;       ;[{msgs/topic [:server] msgs/type thing-type (msgs/param :body) body}])))
;       [{msgs/topic [:server] msgs/type :request-things (msgs/param :body) body}])))

(defn request-navpath-things
  "ret msg to be inject to effect queue where service-fn consume it and make xhr request"
  [inputs]  ; request path things by thing-type
  (let [user (get-login-name inputs)  ; get the currently login user
        msg (:message inputs)  ; get the active msg
        curpath (:path msg)    ; [:all 0 :children] or [:parent 1 :parent]
        nxtpath (:qpath msg)   ; [:parent 1 :children]
        allpath (filter (comp not nil?) [curpath nxtpath]) ; filter out no qpath case

        bodies (map (fn [p]
                    (let [thing-type (last p)
                          ; set data store topic [:data :thing id :next-thing]
                          body {:msg-type :set-thing-data
                                :msg-topic (vec (concat [:data] p))
                                :thing-type thing-type
                                :path p   ; service side service need path for query
                                :details {:path (vec p) 
                                          :qpath (vec nxtpath)
                                          :author user}
                               }
                         ]
                      body)) 
                  allpath)

        ; send to [:server], type is :request-things, post data in body
        requests (vec (mapcat 
                        (fn [body]
                          [{msgs/topic [:server]
                            msgs/type :request-things
                            (msgs/param :body) body
                           }])
                        bodies))
        ]
    (.log js/console (str "effect request nav things " requests))
    (if (last curpath)
      requests)))

;;==================================================================================
; after input form submitted, app model transform stores details in [:submit :thing-type]
; effect flow picks it up and post data to insert things into db
; details setup in enable-thing-nav with :action :thing-id :assignto-name and :assignto-hint.
; we get the current login user as the user id
;;==================================================================================
; XXX this should be deprecated !
(defn post-submit-thing
  "assign form submitted, post thing details data to add to database"
  [inputs]
  (let [user (get-login-name inputs)
        msg (:message inputs)  ; active msg that triggered this effect flow
        msg-topic [:data :form]   ; single bucket to FIFO all submitted forms
        msg-type :submitted-form
        details (assoc (:details msg) :author user)
        body {:msg-topic msg-topic :msg-type msg-type 
              :thing-type (:thing-type details) :details details}]
    (.log js/console (str user " submit form details " body))
    ; msg type :assign
    [{msgs/topic [:server] msgs/type :add-thing (msgs/param :body) body}]))


;;==================================================================================
;; XXX we specify tranform msg topic and type here so response data got dispatch 
;; to the right locaton in data model directly.
;;==================================================================================
; inputs contains {:mesage {topic [] :details} :new-model {} :old-model {}}
; rich-dad post submit thing [:submit :assignn] action :assign details {:action :create-assignment, :hwid 17592186045485, :toid "a", :hint "b"}
; rich-dad post submit thing [:submit :newthing] action :newthing details {:action :newthing, :type "course", :title "", :content "", :user "rich"}
; we assoc current login user as author to create details.
(defn post-create-thing
  "create new thing form submitted, [:create :*] form transformed"
  [inputs]
  (let [
        msg (:message inputs)  ; the active msg triggers create new thing form submission
        thing-type (last (msgs/topic msg))  ;[:create :course]
        ; assoc current user to post details
        user (get-login-name inputs)
        details (assoc (:details msg) :author user)   ; currrent user as author
        ; after create new thing, change nav path to [:all 0 thing-type]
        resp-msg-topic [:created-thing thing-type]  ; created thing
        resp-msg-type :created-thing-data
        body {:msg-topic resp-msg-topic :msg-type resp-msg-type 
              :thing-type thing-type :details details}
       ]
    (.log js/console (str user " post create thing " thing-type " body " body))
    [{msgs/topic [:server] msgs/type :add-thing (msgs/param :body) body}]
    ))

; request timeline
(defn request-timeline
  [timeline]
  [])

