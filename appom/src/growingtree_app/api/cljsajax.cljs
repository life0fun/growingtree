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
; nav-path [:all 0 :parent] response {"status" 200, "data" [{"db/id" ... "course/author" ...}]
;;==================================================================================
(defn handler
  "cljs-ajax success handler, send back things-vec to api-ch"
  [command main-path api-ch]
  (fn [response]
    ; server uses edn-response. no need js-clj, but no hurt. 
    (when-let [ ;result (js->clj response :keywordize-keys true)
                result response
              ]
      (let [;bodyjson body ;(.parse js/JSON body)
            status (:status result)
            data-path :body
            things-vec (:data result)  ; alway ret a list of things
            dbid (:db/id (first things-vec))
           ]
        ;(.log js/console (str "xhr response tuples " dbid " type " thing-type msg-topic msg-type things-vec))
        (.log js/console (str "xhr thing-vec " main-path " thing-vec " things-vec))
        (put! api-ch [:api-data {data-path main-path :things-vec (vec things-vec)}])
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
  (let [main-path (:body nav-path)
        title (:title nav-path)
        thing-type (last main-path)
        request {:handler (handler command main-path api-ch)
                 :error-handler (error-handler command nav-path api-ch)
                 :format :edn    ; always use edn for clj programs internally.
                 :params {:thing-type thing-type :path main-path :qpath title :details data}
                 :headers {}
                }
       ]
      ; :request-things nav-path [:all 0 :parent] data [:all 0 :parent]
      (.log js/console (str "cljs-ajax >>> " command " nav-path " nav-path " data " data))
      (case command
        ;; sse subscribe and publish
        :subscribe (GET "/msgs" request)
        :publish (POST "/msgs" request)
        
        :signup-login (POST "/login" request)

        ; nav-path [:all 0 :parent]
        :request-things (POST (str "/api/" (name thing-type)) request)

        ; nav-path {:body [:course {:title ... :name ...}]}
        :add-thing (POST (str "/add/" (name (first nav-path))) request)
        "default")))