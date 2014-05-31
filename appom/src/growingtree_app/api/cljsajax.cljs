(ns growingtree-app.api.cljsajax
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as str]
            [cljs.reader :as r]
            [ajax.core :refer [GET POST]]
            [goog.structs.Map :as map]
  ))

;
; RESTFul design
; http://stackoverflow.com/questions/3821663/querystring-in-rest-resource-url
; The query component contains non-hierarchical data that, along with data 
; in the path component (Section 3.3), serves to identify a resource
;;
;; response from server can be either json string, or application/edn
;; xhr req response is text string. cljs.reader convert text into cljs.ocre.PersistentHashMap.
;; if it is edn, use cljs.reader/read-string to convert it to cljs persistentHashMap object.
;; to access keys in cljs object, use cljs.core.Keyword.
;; (.log js/console ((keyword "foo") (cljs.reader/read-string "{:foo :bar}")))
;; need to support lein cljsbuild clean, or will rm -fr out/
;;
;; when response is json string, parse to cljs object.
;;    bodyjson (JSON/parse (:body response))
;;
;; when response is edn, read-string to parse to cljs.core.PersistentHashMap
;; convert cljs object to cljs data structre, use js->clj
;;    (js->clj (JSON/parse (:body response)) :keywordize-keys true)
;;
;; access json object, (aget jsonobject "key-name")
;; access cljs persistentMap, ((keyword "course/title") cljs.core.PersistentHashMap)
;;
;; for cljs map data structure, use (get-in data-map [attr nested-attr])
;; for cljs pure object, use variadic (aget object attr nested-attr)
;;
;; we convert response data to cljs.core.PersistentVector and store i

;;==================================================================================
; server always deliver list of things, parse to cljs.core.PersistentVector.
;;==================================================================================
(defn handler
  "cljs-ajax success handler, send back things-vec to api-ch"
  [command nav-path api-ch]
  (fn [response]
    ; parse response body into json and convert json to cljs PersistentVector
    (when-let [body (:body response)] ; only when we have valid body
      ;(.log js/console (str "app service receive response : " body))
      (let [bodyjson (JSON/parse body)
            ; parse js json object to cljs.core.PersisitentVector data structre.
            result (js->clj bodyjson :keywordize-keys true)
            status (:status result)
            things-vec (:data result)  ; alway ret a list of things
            dbid (:db/id (first things-vec))
           ]
        ;(.log js/console (str "xhr response tuples " dbid " type " thing-type msg-topic msg-type things-vec))
        (.log js/console (str "xhr handler : " command " " nav-path " " response))
        (put! api-ch [:api-data {:nav-path nav-path :things-vec things-vec}])
      ))))

(defn error-handler
  "cljs-ajax error handler, send error to api-ch"
  [command nav-path api-ch]
  (fn [error]
    (let [{:keys [status status-text response]} error
          err {:nav-path nav-path :things-vec nil :error error}]
      (.log js/console (str "xhr error : " command " " nav-path " " (pr-str error)))
      (put! api-ch [:api-data err])
    )))


;;==================================================================================
;;==================================================================================
(defn cljs-ajax
  "service a get or post request using cljs-ajax GET POST call"
  [command nav-path api-ch data]
  (let [thing (last nav-path)
        url (str "/api/" thing)
        request {:handler (handler command nav-path api-ch)
                 :error-handler (error-handler command nav-path api-ch)
                 :format :json
                 :params data
                 :headers {}
                }
       ]
      (.log js/console (str "cljs-ajax >>> " url data))
      (case command
        ;; sse subscribe and publish
        :subscribe (GET "/msgs" request)
        :publish (POST "/msgs" request)
        
        :signup-login (POST "/login" request)

        :request-things (GET url request)
        :add-thing (POST url request)
        "default")))