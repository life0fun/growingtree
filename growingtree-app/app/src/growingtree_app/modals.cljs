(ns growingtree-app.modals
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
            [growingtree-app.util :as util]
            [growingtree-app.entity-view :as entity-view]
            ;[growingtree-app.selector :as sel]
            )
  (:require-macros [growingtree-app.html-templates :as html-templates]))


;; It costs me entire afternoon !
;; the message pass to modal continue btn must contains both msg type and msg topic.
;; the msg params must be create by (msgs/param )
;;
;; the input-queue is a AppMessageQueue record that extends protocol with PutMessage.
;; putMessage just swap state with update-in [:queues]
;;
;
; (defrecord AppMessageQueue [state]
;   p/PutMessage
;   (put-message [this message]
;     (let [priority (if (= (msg/priority message) :high) :high :low)
;           queues (:queues (swap! state update-in [:queues priority] conj message))]
;       (count-queues queues)))
;   p/TakeMessage
;   (pop-message [this]
;     (:item (swap! state pop-message-internal)))
;   (take-message [this f]
;     (process-next-item state f)))
;;
;; You can reify the p/PutMessage to over-write PutMessage to check what msg has been sent.
;; (auto/generic-modal-collect-input "content" (gensym) 
                    ; (reify p/PutMessage
                    ;   (put-message [q message]
                    ;     (.log js/console (str "sending msg " message q))))


; Load templates macro.
(def templates (html-templates/growingtree-app-templates))


;;================================================================================
;; add multimethod dispatcher to over-write modal title, awesome !
;; over-write any auto namespace mutlimethod to map transkey to modal title.
;;================================================================================
(defmethod auto/modal-title :login-modal 
  [transform-name _]
  (pr-str "Welcome to GrowingTree")
  "Welcome to GrowingTree")

; add listener for upper right login btn and show login modal
; path is login modal, transkey is login-modal, msg has 2 keys, login-name and pass
(def enable-login-modal
  (fn [r [_ path transkey messages] input-queue]
    (let [login-btn (dom/by-id "login")
          modal-evt
            (fn [evt]
              (.log js/console (str "login modal clicked " path " parent-id " parent-id))
              
              ; (dom/append! (dom/by-id parent-id) modal-html)
              ; (js/showModal (auto/modal-id id transkey))
              ; attach modal to div content.
              (auto/generic-modal-collect-input "content" (gensym) 
                  ; (reify p/PutMessage
                  ;   (put-message [q message]
                  ;     (.log js/console (str "sending msg " message q))
                  ;     (p/put-message q message)))
                  input-queue
                  transkey 
                  messages))
          ]
      (.log js/console (str "setup login modal path " path transkey messages))
      (de/listen! login-btn :click modal-evt))))


;;================================================================================
;; add multimethod dispatcher to over-write modal title, awesome !
;; over-write any auto namespace mutlimethod to map transkey to modal title.
;;================================================================================
(defmethod auto/modal-title :create-modal 
  [transform-name _]
  "What you want to create ?")


(defmethod auto/modal-field [:create-modal "type"]
  [_ field-name]
  {:field-name (str "Enter " field-name)
   :placeholder (str field-name " can be parent, child, family, course, homework, group")
   :input-class "input-xlarge"
   :default nil
   :validation-fn 
    (fn [x] (not 
              (or (nil? x) 
                  (= x "") 
                  (not (contains? #{"parent" "child" "family" "course" "homework" "group"} x)))))
   :inline-help "You can create parent, child, course, homework, group"
   :inline-help-error (str field-name " is required")
  })


; add listener for upper right login btn and show login modal
; path is login modal, transkey is login-modal, msg has 2 keys, login-name and pass
(def enable-create-modal
  (fn [r [_ path transkey messages] input-queue]
    (let [create-btn (dom/by-id "newthing")
          modal-evt
            (fn [evt]
                (.log js/console (str "create modal clicked " path))
                (auto/generic-modal-collect-input "content" (gensym) 
                  ; (reify p/PutMessage
                  ;   (put-message [q message]
                  ;     (.log js/console (str "sending msg " message q))
                  ;     (p/put-message q message)))
                  input-queue
                  transkey 
                  messages))
          ]
      (.log js/console (str "setup create-modal path " path (render/get-id r path)))
      (de/listen! create-btn :click modal-evt))))

