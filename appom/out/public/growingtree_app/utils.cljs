(ns growingtree-app.utils
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as string]
            [goog.crypt :as crypt]
            [goog.crypt.Md5]
            [goog.events :as ge]
            [goog.Uri]
            [goog.net.EventType :as gevt]
            [goog.i18n.NumberFormat.Format :as formats]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :as am :refer [go alt!]])
  (:import [goog.net XhrIo]
           [goog.async Deferred])
  (:use-macros [dommy.macros :only [node sel sel1]]))

(defn uuid
  "returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  []
  (let [r (repeatedly 30 (fn [] (.toString (rand-int 16) 16)))]
    (apply str (concat (take 8 r) ["-"]
                       (take 4 (drop 8 r)) ["-4"]
                       (take 3 (drop 12 r)) ["-"]
                       [(.toString  (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16)]
                       (take 3 (drop 15 r)) ["-"]
                       (take 12 (drop 18 r))))))

(def parsed-uri
  (goog.Uri. (-> (.-location js/window) (.-href))))


(defn many?
  "Returns true if (seq x) will succeed, false otherwise."
  [x]
  (or (instance? cljs.core.PersistentHashSet x)
      (instance? cljs.core.PersistentHashMap x)
      ; (instance? cljs.core.ISeqable x)
      ; (instance? Iterable x)
      ; (-> x .getClass .isArray)
      ; (instance? java.util.Map x)
      ))

(def initial-query-map
  {:kandan-channels  (string/split (or (.getParameterValue parsed-uri "kandan-channels") "1") #",")
   :kandan-api-key   (.getParameterValue parsed-uri "kandan-api-key")
   :kandan-client?   (seq (.getParameterValue parsed-uri "kandan-api-key"))
   :log-channels?    (or (.getParameterValue parsed-uri "log-channels") false)
   :logging-enabled? (= (.getParameterValue parsed-uri "logging-enabled") "true")
   :restore-state?   (= (.getParameterValue parsed-uri "restore-state") "true")})

; logging is enabled by query string logging-enabled=true
(def logging-enabled?
  (:logging-enabled? initial-query-map))

(defn mprint [& message]
  (when logging-enabled?
    (apply print message)))

(defn safe-sel [s]
  (str (string/replace (string/lower-case (str s)) #"[\W]" "-")))

(defn email->gravatar-url [email]
  (let [email (or email "unknown-email@unknown-domain.com")
        container (doto (goog.crypt.Md5.)
                    (.update email))
        hash (crypt/byteArrayToHex (.digest container))]
    (str "http://gravatar.com/avatar/" hash "?s=30&d=identicon")))

(defn gravatar-for [email]
  [:img.avatar
   {:src
    (email->gravatar-url email)}])

(defn set-window-href! [path]
  (js/window.history.pushState #js {}, "", path))

(defn ajax [url method data-string success & [error headers]]
  (let [request (XhrIo.)
        d (goog.async.Deferred.)
        listener-id (ge/listen request gevt/COMPLETE (fn [response]
                                                       (let [target (.-target response)
                                                             data (if (= method "DELETE")
                                                                    nil
                                                                    (.getResponseJson target ))]
                                                         (.callback d data))))]
                                        ; Setup deferred callbacks
    (.addErrback d  (fn [error] (.log js/console "Error on ajax: " error)))
    (when success (.addCallback d #(success (js->clj % :keywordize-keys true))))
    (when error (.addErrback d error))
    (.addBoth d (fn [value] (ge/unlistenByKey listener-id) (.dispose request)))
    (mprint (str "Firing request to " url " via " method " and data - : " data-string))
                                        ; Fire request
    (.send request url method data-string headers)
    request))


;- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
; thing entity attrs
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


; for enum attr, update thing-val map from string val to keyword.
; thing-val = {:course/title "aa", :course/type "math" }
; (update-enum {:type "math"} :course "type" false) => {:type :math}
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

