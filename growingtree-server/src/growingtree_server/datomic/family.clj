;; datomic data accessor
(ns growingtree-server.datomic.family
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json]
            [io.pedestal.service.log :as log])
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]
            [growingtree-server.xpathqrule :as xpathqrule]
            [growingtree-server.datomic.util :as util]))

;
; http://blog.datomic.com/2013/05/a-whirlwind-tour-of-datomic-query_16.html
; query API results as a list of fact tuples. Fact tuple is a list of entity Ids.
;   [ [tuple1...] [tuple2...] ]
;
; the intermediate value for joining are :db/id, can be in both [entity attr val] pos
; to join, the attribute col in tuple is the join col, and val.
;
; find ?e ret entity id, (d/touch(d/entity db) to convert to lazy entity.
;   (d/touch (d/entity db (ffirst (d/q '[:find ?e :where [?e :parent/fname]] db)))
;
;
; query stmt is a list, or a map, with :find :in :where seps query args.
;   [?a …]  collection   [ [?a ?b ] ]  relation
;   [(predicate ...)] [(function ...) bindings]
;
; a named rule is a list of clause [(community-type ?c ?t) [?c :community/type ?t]])]
; a set of rules is a list of rules. [[[rule1 ?c] [_ :x ?c]] [[rule2 ?d] [_ :x ?d]]]
; rules with the same name defined multiple times in rule set make rule OR.
;   [[northern ?c] (region ?c :region/ne)]
;   [[northern ?c] (region ?c :region/n)]
; Within the same rule set, multiple tuples are AND.
; rules with the same name, results are OR.
;
; To use rules, First, you have to pass the rule set as an input source and reference it in
; the :in section of your query using the '%' symbol.
; Second, you have to invoke one or more rules from the :where section of your query.
;
;
; all eids must be number, use read-string to convert from command line.
; all the :ref :many attribute stores clojure.lang.MapEntry. use :db/id to get the id.
; knowing entity id, query with (d/entity db eid). otherwise, [:find $t :where []]
; (d/entity db eid) rets the entity. entity is LAZY. attr only availabe when touch.
; To add data to a new entity, build a transaction using :db/add implicitly
; with the map structure (or explicitly with the list structure), a temporary id,
; and the attributes and values being added.
;
; #db/id[partition-name value*] : value is an optional negative number.
; all instances of the same temp id are mapped to the same actual entity id in a given transaction,
; {:db/id entity-id attribute value attribute value ... }
; [:db/add entity-id attribute value]
; (d/transact conn [newch [:db/add pid :parent/child (:db/id newch)]]
; d/transact tx-data is a list of lists, each of which specifies a write operation
; for single write datom(map tuple), wrap with [datom-tuple]
; for a list of write datom tuple from map, use (vec ([] [])) to wrap them.
; (d/transact conn (vec (map make-attr (d/q '[:find ?e :where []))))
;
;
; In general, unique temporary ids are mapped to new entity ids.
; within the same transaction, the same tempid maps to the same real entity id.
; when one of the attribute is :db/unique :db.unique/identity, system will map to existing entity if matches or make a new.
; to add fact to existing entity, retrieve entity id the add using the entity id.
; adding entity ref, must specify an entity id(could be tempid) as the attribute's value.
; takes advantage of the fact that the same temporary id can be generated multiple times by
; specifying the same partition and negative number; and that all instances of a given temporary id
; within a transaction will resolve to a single entity id.
;
; (def e (d/entity (db conn) attr-id) gets all entity with ids
; (keys e) or (:parent/child (d/entity db 17592186045703))
; entity attr rets a map entry for all children. (:parent/child (d/entity db pid))
;
; entity-id can be used at both side of the datom, e.g., give a parent entity id,
;   (d/q '[:find ?e :in $ ?attr :where [17592186045703 ?attr ?e] [...] ] db :parent/child)
;   (d/q '[:find ?e :in $ ?attr :where [?e ?attr 17592186045703] [...] ] db :child/parent)
; query :where takes a vardic list, not a list of list.
;

; outbound query and inbound query
; using parent id, get list of children
;   (:parent/child (d/entity db 17592186045476))
;
; inbound query(who refed me) is used for query another entity that refs this entity.
; parent entity can be used to query all child entity that refs to this parent entity.
; use inbound query with convention is prefix attr name with _.
;   (:child/_parent (d/entity db 17592186045476))
; = (:parent/child (d/entity db 17592186045476))
;   (-> (d/entity db 17592186045476) :child/_parent)
; this reverse look-up might be time consuming, use explicit linking might be better.
;
; (map (fn [id] (d/touch (d/entity db (:db/id id))))
;   (-> (d/entity db 17592186045476) :child/_parent))
;
; (d/q '[:find ?e :in $ ?x :where [?e :child/parent ?x]] db (:db/id p))


; parent record example
; {:db/id 17592186045498 :parent/status :parent.status/active,
;  :parent/name "rich-dad", :parent/lname "rich-dad",
;  :parent/phone #{"1385741609164"}, :parent/gender :M,
;  :parent/address "addr-rich-dad", :parent/email #{"rich-dad@email.com"},
;  :parent/children #{{:db/id 17592186045497} {:db/id 17592186045496}},
;  :parent/age 32, :parent/popularity 6}


(declare find-parent-by-cid)
(declare find-parent-by-cname)
(declare create-parent)
(declare create-child)

(declare upsert-family-parent-child)
(declare add-to-family)

; the global id, gened from unix epoch in milliseconds
(def PersonId (atom (to-long (clj-time/now))))

; get the id for a person
(defn getPersonId []
  (let [n (swap! PersonId inc)]
    (str n)))

;; parse schema dtm file
;(def schema-tx (read-string (slurp "./resource/schema/seattle-schema.dtm")))
;; parse seed data dtm file
;(def data-tx (read-string (slurp "./resource/schema/seattle-data0.dtm")))

;---------------------------------------------------------------------------------
; schema attr-name value type map for person schema and family schema
; a list of attrs in schema, [ [attr-name attr-type], [], ]
; XXX  must select-keys with schema keys before sending back to xhr request.
;---------------------------------------------------------------------------------
(def person-schema (assoc (list-attr :person) :db/id :db.type/id))
(def family-schema (assoc (list-attr :family) :db/id :db.type/id))
(def group-schema (assoc (list-attr :group) :db/id :db.type/id))
(def activity-schema (assoc (list-attr :activity) :db/id :db.type/id))


; rules to find person by any name,
; for all rule lists with the same name, results are OR logic.
(def nameruleset '[[[byname ?e ?n]
                   [?e :person/title ?n]]  ; multiple tuples within a rule are AND.
                  [[byname ?e ?n]
                   [?e :person/lname ?n]]])


; rule set is a set of list. each entry in the list is a rule.
; a rule is a list, the head of list is rule name, with other items are rule content.
; any single item in the rule list is a list, hence, rule set are list of rules, list of list.

; rule set for get person by.
(def get-person-by
  '[[(:all ?e ?val) [?e :person/title]]   ; select all
    [(:title ?e ?val) [?e :person/title ?val]]
    [(:lname ?e ?val) [?e :person/lname ?val]]
    [(:phone ?e ?val) [?e :person/phone ?val]]
    [(:email ?e ?val) [?e :person/email ?val]]
    [(:type ?e ?val) [?e :person/type ?val]]
    [(:occupation ?e ?val) [?e :person/occupation ?val]]
  ])


; rule set for get family by.
(def get-family-by
  '[[(:all ?e ?val) [?e :family/title]]
    [(:title ?e ?val) [?e :family/title ?val]]
    [(:parent ?e ?val) [?e :family/parent ?val]]
    [(:child ?e ?val) [?e :family/child ?val]]
    [(:address ?e ?val) [?e :family/address ?val]]
  ])


; rule set for get parent by. rule name is the parent thing type.
(def get-parent-by
  '[[(:all ?e ?val) [?e :person/title] [?e :person/type :parent]] ; all persons type is :parent
    [(:parent ?e ?val) [?e :person/type :parent] [?e :db/id ?val] ]  ; filtered nav, head, get by itself
    [(:child ?e ?val) [?f :family/child ?val] [?f :family/parent ?e]]
    [(:title ?e ?val) [?e :person/title ?val] [?e :person/type :parent]]
    [(:lname ?e ?val) [?e :person/lname ?val] [?e :person/type :parent]]
    [(:email ?e ?val) [?e :person/email ?val] [?e :person/type :parent]]
    [(:phone ?e ?val) [?e :person/phone ?val] [?e :person/type :parent]]
    [(:group ?e ?val) [?g :group/title ?val] [?g :group/person ?e] [?e :person/type :parent]]
  ])


; rule set for get parent by. rule name is the parent thing type.
(def get-child-by
  '[[(:all ?e ?val) [?e :person/title] [?e :person/type :child]] ; all persons type is :child
    [(:child ?e ?val) [?e :person/type :child] [?e :db/id ?val] ]  ; filtered nav, head, get by itself
    [(:parent ?e ?val) [?f :family/parent ?val] [?f :family/child ?e]]
    [(:title ?e ?val) [?e :person/title ?val] [?e :person/type :child]]
    [(:lname ?e ?val) [?e :person/lname ?val] [?e :person/type :child]]
    [(:email ?e ?val) [?e :person/email ?val] [?e :person/type :child]]
    [(:phone ?e ?val) [?e :person/phone ?val] [?e :person/type :child]]
    [(:schoolclass ?e ?val) [?c :schoolclass/title ?val] [?c :schoolclass/person ?e]]
  ])



;;==========================================================================
; :find rets entity id, find all person's pid and name.
;;==========================================================================
(defn get-person-by-title
  "get person by title"
  [title]
  (dbconn/find-by :person/title title))


(defn find-user
  "find user by login credential, if type = :signup, create the new user"
  [details]
  (let [{:keys [type name pass email role]} details
        projkeys (keys person-schema)  ; must select-keys from datum entity attributes
        user (-> (dbconn/find-by :person/title name)
                 (select-keys projkeys)  ; select-keys ret {} on anything nil
             )
        user (cond
                (and (empty? user) (= :login type)) {:user details :error "invalid user or passowrd"}
                (= :login type) {:user user :error nil}
                (and (= :signup type) (not (empty? user))) {:user details :error "user already exist, try another user name."}
                :else
                  (let [person (clojure.set/rename-keys
                                  details
                                  {:name :person/title
                                   :email :person/email})]
                    (if (= :parent (keyword role))
                          (create-parent person)
                          (create-child person))
                    {:user person})
              )
       ]
    (prn "find user " type name pass email role)
    (prn " find-user --> " user)
    user))


(defn find-person
  "find person by query path "
  [qpath]
  (let [projkeys (keys person-schema)  ; must select-keys from datum entity attributes
        person (->> (util/get-qpath-entities qpath get-person-by)
                    (map #(select-keys % projkeys) )
                    (map #(util/add-upvote-attr %) )
                    (map #(util/add-navpath % qpath) )
                )
        ]
    (doseq [e person]
      (prn "parent --> " e))
    person))

;;==========================================================================
; parent related
;;==========================================================================
; :find rets entity id, find all parent's pid and name.
; the parent thing type in qpath is used as rule name selector.
(defn find-parent
  "find parent by query path "
  [qpath]
  (let [projkeys (keys person-schema)  ; must select-keys from datum entity attributes
        parents (->> (util/get-qpath-entities qpath get-parent-by)
                     (map #(select-keys % projkeys) )
                     (map #(util/add-upvote-attr %) )
                     (map #(util/add-navpath % qpath) )
                )
        ]
    (doseq [e parents]
      (prn "parent --> " e))
    parents))


(defn create-parent
  "create parent from the submitted new thing form details"
  [details]
  (let [entity (-> details
                   (select-keys (keys person-schema))
                   (assoc :person/type :parent)
                   (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "create parent trans " trans)
    [entity]))


;;==========================================================================
; child related
;;==========================================================================
;; find children with qpath. use rule from get-child-by rule set by parent name in qpath.
(defn find-child
  "find children by passed in query path"
  [qpath]
  (let [projkeys (keys person-schema)  ; must select-keys from datum entity attributes
        children (->> (util/get-qpath-entities qpath get-child-by)
                     (map #(select-keys % projkeys) )
                     (map #(util/add-upvote-attr %) )
                     (map #(util/add-navpath % qpath) )
                 )
       ]
    (doseq [e children]
      (prn "child --> " e))
    children))


(defn create-child
  "create child from the submitted new thing form details from parent add-child"
  [details]
  (log/info "create-child " details )
  (let [child (-> details
                (select-keys (keys person-schema))
                (assoc :person/type :child)
                (assoc :db/id (d/tempid :db.part/user)))

        family (upsert-family-parent-child (:family/parent details) (:db/id child))
        trans (submit-transact [child family])  ; transaction is a list of maps to update db values
      ]
    (newline)
    (log/info "create child " child  " family " family)
    (log/info "create child trans " trans)
    [child]))


;;==========================================================================
; family
;;==========================================================================
; for details about upsert, check http://docs.datomic.com/transactions.html.
(defn upsert-family-parent-child
  "upsert parent and child to family"
  [pid cid]
  (let [family (or (dbconn/find-by :family/parent pid)
                   (dbconn/find-by :family/child cid))
        family-id (if family (:db/id family) (d/tempid :db.part/user))
        entity (-> {:family/parent pid :family/child cid}
                   (assoc :db/id family-id))
       ]
    (log/info "upsert family " entity)
    entity))


;;==========================================================================
; group
;;==========================================================================
; rule set for get group by. rule name is the group thing type.
(def get-group-by
  '[[(:all ?e ?val) [?e :group/title]]
    [(:title ?e ?val) [?e :group/title ?val]]
    [(:author ?e ?val) [?e :group/author ?val]]
    [(:parent ?e ?val) [?e :group/person ?val]]
    [(:child ?e ?val) [?e :group/person ?val]]
    [(:type ?e ?val) [?e :group/type ?val]]
    [(:email ?e ?val) [?e :group/email ?val]]
    [(:url ?e ?val) [?e :group/url ?val]]
  ])

; for parents, [:parent 1 :group]
(defn find-group
  "find groups by passed in query path"
  [qpath]
  (log/info "find-group " qpath)
  (let [projkeys (keys group-schema)  ; must select-keys from datum entity attributes
        groups (->> (util/get-qpath-entities qpath get-group-by)
                    (map #(select-keys % projkeys) )
                    (map #(util/get-author-name :group/author %))
                    (map #(util/add-upvote-attr %) )
                    (map #(util/add-navpath % qpath) )  ;: navpath [:all 0 :group 17592186045441]
                 )
       ]
    (doseq [e groups]
      (log/info "find group --> " e))
    groups))


; each qpath response for getting data for one div template. [:group 1 :group-members]
(defn find-group-members
  "find all group members by query path"
  [qpath]
  (let [projkeys (keys person-schema)  ; must select-keys from datum entity attributes
        person (->> (:group/person (dbconn/get-entity (second qpath)))
                    (map #(select-keys % projkeys) )
                    (map #(util/add-upvote-attr %) )
                    (map #(util/add-navpath % qpath) )  ;: navpath [:all 0 :group 17592186045441]
                 )
       ]
    (doseq [e person]
      (log/info "find group members --> " e))
    person))


; get group member by group title
(defn get-group-members
  [group-title]
  (let [projkeys (keys person-schema)  ; must select-keys from datum entity attributes
        ;group (util/get-entities-by-rule :title get-group-by group-title)
        group (dbconn/find-by :group/title group-title)
        person (:group/person group)  ; :ref :many set
       ]
    (doseq [e person]
      (prn "group " group-title " members --> " e))  ; {:db/id 17592186045419}
    person))

; create group from sidebar with author and group title by name.
; details {:group/person 1, :group/title "a", :group/email "b", :group/url "c"}
(defn create-group
  "create group from the submitted new thing form details from parent add-group"
  [details]
  (let [author-id (if (clojure.string/blank? (:group/author details))
                      (:db/id (find-by :person/title (:group/person details)))   ; no author, the first one joining is the author
                      (:db/id (find-by :person/title (:group/author details))))
        group-id (if (:db/id details)
                      (:db/id details)
                      (find-by :group/title (:group/title details)))
        group (-> details
                (select-keys (keys group-schema))
                (assoc :group/author author-id)
                (assoc :db/id (d/tempid :db.part/user)))

        trans (submit-transact [group])  ; transaction is a list of maps to update db values
      ]
    (log/info "create group " group " trans " trans)
    [group]))


; when join a group from people view group ppl is current user id.
; leave option to have group person as a trags input string "tom,jerry,..."
(defn join-group
  "join group from the submitted new thing form details from parent add-group"
  [details]
  (log/info "join-group " details (util/tagsInputs (:group/person details)))
  (let [person (:group/person details)
        person-ids (if (= java.lang.Long (type person))
                       (vector person)
                       (->> (map #(:db/id (find-by :person/title %))
                                  (util/tagsInputs (:group/person details)))
                            (filter identity)))
        ; transact map must include a :db/id key identifying the entity data is being add.
        group-id (or (:group/id details)
                     (:db/id (find-by :group/title (:group/title details))))
        group (-> details
                (select-keys (keys group-schema))
                (assoc :group/person person-ids)  ; group person if ref many
                (assoc :db/id group-id))

        trans (when group-id (submit-transact [group]))  ; transaction is a list of maps to update db values
      ]
    (log/info "join group " group " trans " trans)
    [group]))

;;==========================================================================
; activity and event
;;==========================================================================
; rule set for get activity by. rule name is the activity thing type.
(def get-activity-by
  '[[(:all ?e ?val) [?e :activity/title]]
    [(:title ?e ?val) [?e :activity/title ?val]]
    [(:author ?e ?val) [?e :activity/author ?val]]
    [(:child ?e ?val) [?e :activity/person ?val]]
    [(:parent ?e ?val) [?e :activity/person ?val]]
    [(:location ?e ?val) [?e :activity/location ?val]]
    [(:group ?e ?val) [?e :activity/origin ?val]]
    [(:content ?e ?val) [?e :activity/content ?val]]
    [(:type ?e ?val) [?e :activity/type ?val]]
    [(:start ?e ?val) [?e :activity/start ?val]]
  ])

; create activity, pull in all group persons as activity participate initially.
; details {:activity/person 1, :activity/title "a", :activity/email "b", :activity/url "c"}
; 
(defn create-activity
  "create activity from the submitted new thing form details from group add-activity"
  [details]
  (log/info "create-activity " details)
  (let [author-id (if (clojure.string/blank? (:activity/author details))
                      (:db/id (find-by :person/title (:activity/person details)))   ; no author, the first one joining is the author
                      (:db/id (find-by :person/title (:activity/author details))))
        group-id (or (:activity/origin details)
                     (:db/id (find-by :group/title (:group/title details))))
        ; pull in all group person as activity participate initially
        ; person ref is a set.
        group-person (set (map :db/id ((comp :group/person dbconn/get-entity) group-id)))
        activity (-> details
                (select-keys (keys activity-schema))
                (assoc :activity/author author-id)
                (assoc :activity/person group-person)
                (assoc :db/id (d/tempid :db.part/user)))

        trans (submit-transact [activity])  ; transaction is a list of maps to update db values
      ]
    (log/info "create activity " activity " trans " trans)
    [activity]))


; find all activity, whose origin id is the group id.
; [:groups 1 :activity], or [:child 1 :activity]
(defn find-activity
  "find all activity from group by query path"
  [qpath]
  (let [projkeys (keys activity-schema)  ; must select-keys from datum entity attributes
        activity (->> (util/get-qpath-entities qpath get-activity-by)
                      (map #(select-keys % projkeys) )
                      (map #(util/get-author-name :activity/author %))
                      (map #(util/get-ref-entity :activity/origin %))
                      (map #(util/add-upvote-attr %) )
                      (map #(util/add-navpath % qpath) )
                 )
       ]
    (doseq [e activity]
      (log/info "find activity --> " e))
    activity))


; get group member by group title
(defn find-activity-members
  [qpath]
  (log/info "find activity member " qpath)
  (let [projkeys (keys person-schema)
        activity (dbconn/get-entity (second qpath))
        person (or (:activity/person activity)
                   (map (comp dbconn/get-entity :db/id) 
                        (-> (:activity/origin activity) :db/id dbconn/get-entity :group/person)))
        person (->> person
                    (map #(select-keys % projkeys) )
                    (map #(util/add-upvote-attr %) )
                    (map #(util/add-navpath % qpath) )  ;: navpath [:all 0 :activity 17592186045441]
                 )
       ]
    (doseq [e person]
      (log/info "activity members --> " e))  ; {:db/id 17592186045419}
    person))

