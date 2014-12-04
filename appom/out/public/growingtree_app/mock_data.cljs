(ns growingtree-app.mock-data
  (:require 
    [clojure.string :as string]
    [cljs.reader :as reader]
    [growingtree-app.utils :as utils]))


(def users
  {"rich-dad@rich.com" {:full-name "Rich dad"
                        :email "rich-dad@rich.com"
                        :username "Rich dad"}
   "rich-mom@rich.com" {:full-name "Rich mom"
                        :email "rich-mom@rich.com"
                        :username "Rich mom"}
   "rich-daughter@rich.com" {:full-name "Rich daughter"
                        :email "rich-daughter@rich.com"
                        :username "Rich daughter"}
   "rich-son@rich.com" {:full-name "Rich son"
                        :email "rich-son@rich.com"
                        :username "Rich son"}}
  )

(def user-emails (keys users))


; a message contains {:author, :content, :channel-id}
(defn random-thing [channel-id type & [at-now?]]
  (let [at (if at-now?
             (js/Date.)
             (as-> (js/Date.) x
                   (.getTime x)
                   (- x (rand-int (* 1000 60 24 60)))
                   (js/Date. x)))]
    {:id (.-value at)  ; (.getTime at)
     :type type
     :created_at at
     :author (rand-nth user-emails)
     :content (rand-nth ["deployed with ruby on...?"
                         "ha, dat stuff works"
                         "Random content"
                         "Heh, :+1:"
                         "Wow, :exclamation:"
                         "@sgrove Ok, let's do this!"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_msiegler.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_goog.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_petrolatum.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-sans-pellegrino.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_rt2i.mp3"
                         "/queue http://mp3.tom7.org/t7es/2007/tom7=rutgers.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/cheer.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3"
                         "@sacha Be careful with that"
                         "Hey @nb - I got you something nice... (not really)"])
     :channel-id channel-id
    }))


(defn random-title []
  (rand-nth ["math"
             "science for youth"
             "music"
             "art lovers"
             "The War Room"
             "gymnastic"
             "reading"
             "Harry Potter"
             "Frozen"]))

(def media
  [{:src "/system/attachments/files/000/000/098/original/call-centre-woman.jpg?1392265218"
    :name "call-centre-woman.jpg"}
   {:src "/system/attachments/files/000/000/098/original/design.pdf?1392265218"
    :name "design.pdf"}
   {:src "/system/attachments/files/000/000/098/original/example.mp3?1392265218"
    :name "example.mp3"}])


; nav types, in app state [:things] key for navbar use.
(def nav-types [:parent :child :group
                :course :lecture :enrollment
                :question :assignment
                :activity])
(def my-nav-types [:group :enrollment 
                   :question :assignment
                   :activity :timeline])
(def root-add-type #{:parent :group :course})


; nav-path 
; :all-things {:body [:all-things [:all 0 :course]], :data {:author "rich-dad"}} 
(defn get-nav-path-nxt-thing-type
  [nav-path]
  (let [nxt-thing-type (get-in nav-path [:body 1 2])]
    nxt-thing-type))


; :login or sign up msg to be channeled to core for processing.
; msg-type: login or signup
; {:body [:login [:login 0 :login]], :data {:type :login, :name "rich-sonx", :pass "s"}}
(defn login-msg-nav-path
  [form-name data]
  (let [msg-type (if (= form-name "login-form") :login :signup)
        msg [msg-type {:body [msg-type [:login 0 msg-type]]
                       :data data}]
        ]
    msg))

; send :login-error msg to ctrl channel. cause no
(defn retry-login-msg-nav-path
  [error-msg]
  (let [msg-type :login-error
        msg [msg-type error-msg]
        ]
    msg))


; create nav-path from url
; v1/course => [:all-things [:all 0 :lecture]], :data {:author "rich-dad"}]
; v1/course/17592186045421/lecture, :filter-things {:body [:filter-things [:course 1 :lecture]], :data {:pid 1}}
(defn generate-nav-path-from-url
  [url]
  (.log js/console (pr-str "gen nav-path " url))
  (let [[head pid filtered] (string/split url #"/")
        head (keyword head)
        pid (when pid (reader/read-string pid))
        filtered (when filtered (keyword filtered))
        msg-type (if filtered :filter-things :all-things)
        nav-path (case msg-type
                    :all-things
                      {:body [msg-type [:all 0 head]]}
                    :filter-things
                      {:body [msg-type [head pid filtered]]
                       :data {:pid pid}})
       ]
    nav-path
  ))

; get :all-things msg to be sent to control channel to trigger controls chan event for ajax.
; :all-things {:body [:all-things [:all 0 :course]], :data {:author "rich-dad"}} false 
(defn all-things-msg-nav-path
  [thing-type data]
  (let [msg [:all-things {:body [:all-things [:all 0 thing-type]]
                          :data data}]
        ]
    msg))

(defn my-things-msg-nav-path
  [thing-type user-type data]
  (let [msg [:all-things {:body [:all-things [:all 0 thing-type]]
                          :data data}]
        ]
    msg))

; get :filter-things msg to be sent to control channel to trigger controls chan event ajax. 
; has msg-type and msg-data part. msg-data is nav-path map.
; :filter-things {:body [:filter-things [:parent 1 :child]], :data {:pid 1}}
; :pid is used as a filter for thing/xxx/next-thing.
(defn filter-things-msg-nav-path
  [parent-type parent-id filtered-type data]
  (let [msg [:filter-things 
              {:body [:filter-things [parent-type parent-id filtered-type]]
               :data (merge {:pid parent-id} data)}]
       ]
    msg))


; get popstate msg to sent to control channel to trigger state transition.
; msg-type :popstate msg-data is url
; :filter-things {:body [:filter-things [:parent 1 :child]], :data {:pid 1}}
(defn popstate-msg
  [url]
  (let [msg [:popstate {:url url}]]
    msg))

; get :search-thing msg-type and msg-data as nav-path to sent to transition state.
; msg-type is :search-things, msg data is map of :body [] and :data {}
(defn search-msg-nav-path
  [thing-type search]
  (let [msg [:search-things {:body [:search-things [thing-type 0 search]]
                             :data {:thing-type thing-type :searchkey search}}]
       ]
    msg))


; get :newthing-form msg-type and msg-data as nav-path to sent to transition state.
; :newthing-form {:body [:newthing-form [:group :add-group]], :data {:pid nil}}
(defn newthing-form-msg-nav-path
  [thing-type]
  (let [newthing-path (vector thing-type (keyword (str "add-" (name thing-type))))
        newthing-data {:body [:newthing-form newthing-path] 
                       :data {:pid nil}}
        msg [:newthing-form newthing-data]]
    msg))


; get :add-thing msg-type with msg-data as nav-path to sent to transite state.
; {:add-thing :add-group, :data {:group/title "a", :group/type :math, :group/author "poor-dad", :group/url "c", :group/email "d", :group/wiki "e"}} 
(defn add-thing-msg-nav-path
  [thing-type data]
  (let [msg [:add-thing {:add-thing thing-type
                         :data data}]  ; add thing details in :data slot.
       ]
    msg))


; each chan contains users in the chan and activities inisde chan. random title if no title.
(defn random-channel [order & [title]]
  (let [title (or title (random-title))]
    {:id (utils/safe-sel title)
     :order order
     :title title
     :selected false
     :users (take (inc (rand-int (count user-emails))) (shuffle user-emails))
     :activities (vec
                  (sort-by :created_at (repeatedly (inc (rand-int 0))
                                                   #(random-thing (utils/safe-sel title) (rand-nth nav-types)))))
     :media (vec
             (take (inc (rand-int 0))
                   (shuffle media)))
     :sfx {:source-url nil}
     :player {:source-url "https://dl.dropboxusercontent.com/u/412963/x.mp3"
              :playing-order -1
              :state :playing
              :loading false
              :playlist []}}))


; {:parent thing-listing, :course thing-listing}
(defn thing-listing [idx type]
  {:type type
   :title (name type)
   :order idx
   :selected false
   :users (take (inc (rand-int (count user-emails))) (shuffle user-emails))
   :thing-nodes (vec (sort-by :created_at 
                     (repeatedly (inc (rand-int 0)) 
                                 #(random-thing (utils/safe-sel (name type)) type))))}
  )

(defn my-thing-listing [idx type]
  {:type type
   :title (str "My " (name type))
   :order idx
   :selected false }
  )

; dep inj global comm channels into app state.
; identity makes rand chan as val of :id key, channels = {:id (random-chan 1 (random-title))}
(defn initial-state [comms]
  (let [channels (into {} (map (comp (juxt :id identity) random-channel) (range 2 100)))
        ; each nav-type contains a thing-listing, consist of a listing of things within the type.
        thing-listing (map-indexed thing-listing nav-types)
        ; things is map {:thing-type {:type :title :thing-nodes}}
        things (into {} (map (juxt :type identity) thing-listing))
        my-things (->> (map-indexed my-thing-listing my-nav-types)
                      (map (juxt :type identity))
                      (into {}))
       ]

    ;nav-path segment is a map contains query filters for things in body.
    {:top {}     ; top section of main area.
     :body {}    ; set in api-event, main area thing-list read.
     :left {}
     :right {}
     :bottom {}

     :login-user {}  ; set in login state transition upon login success.

     ; nav-path is indicator of current state. updated upon state transition.
     ; :nav-path [{:title [] :body [:all 0 :parent] :data {}}]
     :nav-path [{:title [] :body [:login [:login 0 :login]] :data {}}]
     :error {}   ; error from ajax
     
     ; url as key, "v1/course/17592186045421/lecture"
     ; things-vec value, [{:db/id 1, :answer/author #{{:person/url #{rich-son.com}..}]
     :url-data {}

     ; things is things category for navbar and sidebar, nav-types
     ; [:parent :child :course :lecture :question :assignment]
     :things (as-> things ts
                   (update-in ts [:parent] assoc :selected true))

     :my-things my-things
     
     ; :controls and :api chans, core def app-state 
     :comms comms

     ;; no used
     :windows {:window-inspector {:open false}}
     :settings {:message-limit 50
                :forms {:search {:focused false}
                        :user-message {:focused false}}
                :menus {:user-menu {:open false}}
                :sidebar {:left {:open false}
                          :right {:open false}}
                :inspector {:path [:users]}}


     ; channels is nested map keyed by id
     :selected-channel "1"
     :channels (as-> channels ch
                     (assoc ch "1" (-> (random-channel 1 "Lobby")
                                       (assoc :id "1")))
                     (update-in ch ["1"] assoc :selected true))
     :users users
     :current-user-email "rich-dad@rich.com"
     }))
