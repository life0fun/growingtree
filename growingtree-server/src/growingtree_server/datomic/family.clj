;; datomic data accessor
(ns growingtree-server.datomic.family
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
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

; schema attr-name value type map for parent schema and child schema
(def parent-schema (assoc (list-attr :parent) :db/id :db.type/id))
(def child-schema (assoc (list-attr :child) :db/id :db.type/id))


; rules to find all parent or child with the name, 
; for all rule lists with the same name, results are OR logic.
(def nameruleset '[[[byname ?e ?n] 
                   [?e :parent/name ?n]]  ; multiple tuples within a rule are AND.
                  [[byname ?e ?n]
                   [?e :parent/lname ?n]]
                  [[byname ?e ?n]
                   [?e :child/name ?n]]
                  [[byname ?e ?n]
                   [?e :child/lname ?n]]])


; rule set is a set of list. each entry in the list is a rule.
; a rule is a list, the head of list is rule name, with other items are rule content.
; any single item in the rule list is a list, hence, rule set are list of rules, list of list.

; rule set for get child by. rule name is the parent thing type.
(def get-child-by
  '[[(:all ?e ?val) [?e :child/name]]   ; select all 
    [(:parents ?e ?val) [?e :child/parents ?val]]
    [(:name ?e ?val) [?e :child/name ?val]]
    [(:phone ?e ?val) [?e :child/phone ?val]]
    [(:groups ?e ?val) [?e :child/groups ?val]]
  ])


; rule set for get parent by. rule name is the parent thing type.
(def get-parent-by
  '[[(:all ?e ?val) [?e :parent/name]]   ; select all
    [(:children ?e ?val) [?e :parent/children ?val]]
    [(:name ?e ?val) [?e :parent/name ?val]]
    [(:phone ?e ?val) [?e :parent/phone ?val]]
    [(:groups ?e ?val) [?e :parent/groups ?val]]
  ])


; :find rets entity id, find all parent's pid and name.
; the parent thing type in qpath is used as rule name selector.
(defn find-parent
  "find parent by query path "
  [qpath]
  (let [entities (util/get-entities-by-rule qpath get-parent-by)
        projkeys (keys (dissoc parent-schema :parent/children))
        parents (map #(select-keys % projkeys) entities)
        ]
    (doseq [e parents]
      (prn "parent --> " e))
    parents))


(defn create-parent
  "create parent from the submitted new thing form details"
  [details]
  (let [entity (-> details
                (select-keys (keys (dissoc parent-schema :parent/children)))
                (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "submit parent entity " entity)
    (prn "submit parent trans " trans)
    [entity]))



;;==========================================================================
; child related
;;==========================================================================
;; find children with qpath. use rule from get-child-by rule set by parent name in qpath.
(defn find-children
  "find children by passed in query path"
  [qpath]
  (let [entities (util/get-entities-by-rule qpath get-child-by)
        projkeys (keys (dissoc child-schema :child/parents))
        children (map #(select-keys % projkeys) entities)]
    (doseq [e children]
      (prn "child --> " e))
    children))


(defn create-child
  "new child form the submitted form data"
  [details]
  (let [parent (dbconn/find-by :child/name (:parent details))  ; should be login name
        parent-id (:db/id parent)
        ; this find all children whose child is parent-di
        assignee-id (:db/id (dbconn/find-by :child/parents parent-id))
        entity (-> details
                (select-keys (keys child-schema))
                (assoc :child/parent parent-id)
                (assoc :child/assignee assignee-id)
                (util/entity-date)   ; convert to date
                (assoc :db/id (d/tempid :db.part/user)))
        trans (submit-transact [entity])  ; transaction is a list of entity
      ]
    (newline)
    (prn "submit child entity " parent-id assignee-id " entity " entity)
    (prn "submit child trans " trans)
    entity))




; use :db/add to upsert child attr to parent. find parent eid by list-parent.
; entity is a map of attributes. insert ref attr, must use refed entity id.
; [:db/add entity-id attribute value]
(defn insert-child
  "insert a children to parent by parent id, pid must be num, not string"
  [pid]  ; passed in pid is a num
  (let [pe (d/entity db pid)   ; get the lazy entity by id
        ch (:parent/children pe)
        newch (assoc (create-child) :child/parents pid)]
    (submit-transact [newch
                      [:db/add pid :parent/children (:db/id newch)]])
    (prn pid pe ch newch)))


; [:db/add entity-id attribute value]
(defn link-parent-child
  "link child to parent by parent id and child id"
  [pid cid]
  (let [parent (d/entity db pid)
        child (d/entity db cid)]
    (submit-transact [[:db/add pid :parent/children cid]
                      [:db/add cid :child/parents pid]])))


; add a family with two parents and two kids
(defn add-family
  "insert two parents with two children"
  [name]
  (let [dname (str name "-dad")
        mname (str name "-mom")
        clname (str name "-kid1")
        crname (str name "-kid2")

        tmplparent (create-parent dname)
        tmprparent (create-parent mname)
        tmplch (create-child clname)
        tmprch (create-child crname)
        lch (assoc tmplch :child/parents [(:db/id tmplparent) (:db/id tmprparent)])
        rch (assoc tmprch :child/parents [(:db/id tmplparent) (:db/id tmprparent)])
        lparent (assoc tmplparent :parent/children [(:db/id lch) (:db/id rch)])
        rparent (assoc tmprparent :parent/children [(:db/id lch) (:db/id rch)])
        trans (submit-transact [lch rch lparent rparent])
        ]
    (prn "inserting " lch rch lparent rparent trans)
    lparent))



; (defn find-parent
;   "find parent by child id, id could be child name or child entity id"
;   [cidstr & args]
;   (let [cidval (read-string cidstr)
;         cid? (number? cidval)]
;     (if cid?
;       (find-parent-by-cid cidval)
;       (find-parent-by-cname cidval args))))


; ; find parent of a child
; (defn find-parent-by-cid
;   "find the parent of a child by its id, the passed cid is number"
;   [cid]
;   (let [ce (d/entity db cid)
;         ;parent (-> ce (:parent/_child))   ; inbound(who refed me) might be slow.
;         parent (:child/parents ce)  ; :ref :many rets a map, each tuple is a  clojure.lang.MapEntry.
;         ]
;     (prn parent)
;     (map (comp show-entity-by-id :db/id) parent)))  ; eid is the 1st in a ret tuple.


; ; search all fname and lname to check whether there is a match
; (defn find-parent-by-cname
;   "find the parent of a child by its name"
;   [clname cfname]
;   (let [fname (first cfname)
;         ; args needs to bind to ?var to pass into query
;         rset (d/q '[:find ?p :in $ % ?n
;                     :where [?p :parent/children ?e]  ; join parent entity that child entity equals
;                            [?e :child/parents]  ; for child entity that has parent
;                            (byname ?e ?n)]     ; its fname or lname mateches ?
;                 db
;                 nameruleset
;                 (str clname))
;         ]
;     (doseq [pid rset] 
;       ((comp show-entity-by-id first) pid))
;     (prn clname rset)))


; ; find a person by name, use set/union as sql union query.
; (defn find-by-name 
;   "find a person by either first name or last name"
;   [pname]
;   (let [parent (d/q '[:find ?e :in $ % ?n
;                       :where [?e :parent/children]
;                              (byname ?e ?n)]
;                     db
;                     nameruleset
;                     pname)
;         child (d/q '[:find ?e :in $ % ?n
;                      :where [?e :child/parents]  ; query child
;                              (byname ?e ?n)]
;                     db
;                     nameruleset
;                     pname)
;         all (clojure.set/union parent child)  
;       ]
;     (prn parent child all)
;     (map (comp show-entity-by-id first) all)))