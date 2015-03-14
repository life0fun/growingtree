(ns growingtree-app.api.cljsajax
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [clojure.string :as str]
            [cljs.reader :as r]
            [ajax.core :refer [GET POST]]
            [goog.structs.Map :as map]
            [taoensso.sente  :as sente :refer (cb-success?)]
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
; nav-path {:body [:filter-things/:all-things [:course 1 :lecture]] :title ... :data {}}]
; for add, nav-path is {:add-thing :lecture :post-data {:lecture/name "ab", :lecture/remark "cd"}
; json response {"thing-type" "login", "path" ["login" 0 "login"], "status" 200, ...}
; edn response {:thing-type :lecture :path [:course 1 :lecture]}
;;==================================================================================
(defn handler
  "cljs-ajax success handler, send back things-vec to api-ch"
  [command nav-path api-ch]
  (fn [response]
    ; server uses edn-response. no need js-clj, but no hurt. 
    (when-let [ ;result (js->clj response :keywordize-keys true)
                result response
              ]
      (let [;bodyjson body ;(.parse js/JSON body)
            status (:status result)
            error (:error result)
            things-vec (:data result)  ; alway ret a list of things, or single login user account
           ]
        (.log js/console (pr-str "cljsajax <<< : " status error nav-path " thing-vec " things-vec))
        (if-not (= status 200)
          (put! api-ch [:api-error result]) 
          (if (:body nav-path)  ; set only when query-path / nav-path is valid
            (put! api-ch [:api-data {:nav-path nav-path :things-vec (vec things-vec)}])
            (put! api-ch [:api-success {:msg "in add-thing success, no query path, trigger re-direct"}])
            ))
      ))))

(defn error-handler
  "cljs-ajax error handler, send error to api-ch"
  [command nav-path api-ch]
  (fn [error]
    (let [{:keys [status status-text response]} error
          err {:nav-path nav-path :things-vec nil :error error}]
      (.log js/console (pr-str "xhr error : nav-path " nav-path " err : " err))
      (put! api-ch [:api-error err])
    )))


;;==================================================================================
; search call cljs ajax with nav-path as post data.
; nav-path {:body [:filter-things/:all-things [:course 1 :lecture]] :title ... :data {}}]
; server side service parse request {:params {...}} as :edn-params.
; for add, nav-path is {:add-thing :lecture :post-data {:lecture/name "ab", :lecture/remark "cd"}
;;==================================================================================
(defn cljs-ajax
  "service a get or post request using cljs-ajax GET POST call"
  [command nav-path api-ch post-data]
  (let [; query-path is filter-things inside nav-path :body, for add-thing, no query-path
        query-path (get-in nav-path [:body 1])  ; {:body [:filter-things [:course 1 :lecture]]}
        thing-type (or (last query-path)  ; filter-things, or {:add-thing :enrollment :post-data {}}
                       (get nav-path :add-thing))
        request {:handler (handler command nav-path api-ch)
                 :error-handler (error-handler command nav-path api-ch)
                 :format :edn    ; always use edn for clj programs internally.
                 ; :edn-params on service side.
                 :params {:thing-type thing-type 
                          :path query-path 
                          :qpath (get nav-path :title)
                          :post-data post-data}  ; post-data is :body section + :data dict.
                 :headers {}
                }
       ]
      ; :request-things nav-path [:all 0 :parent] post-data [:all 0 :parent]
      (.log js/console (str "cljs-ajax >>> " command " nav-path " nav-path " post-data " post-data))
      (case command
        ;; sse subscribe and publish
        :subscribe (GET "/msgs" request)
        :publish (POST "/msgs" request)
        
        :signup-login (POST "/login" request)

        ; for :all-things and :filter-things, nav-path [:all 0 :parent]
        :request-things (POST (str "/api/" (name thing-type)) request)

        ; :search-things, thing-type is search keyword
        :search-things (POST (str "/search/" (name thing-type)) request)

        ; :add-thing, nav-path {:add-thing :activity, :post-data {:activity/origin 17592186045438, :activity/title "a", :activity/author 
        :add-thing (POST (str "/add/" (name thing-type)) request)

        "default")))


