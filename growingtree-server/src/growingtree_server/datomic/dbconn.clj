;; datomic data accessor
(ns growingtree-server.datomic.dbconn
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
  (:require [datomic.api :as d]
            [io.pedestal.service.log :as log])
  (:require [datomic-schema.schema :as dschema]
            [growingtree-server.datomic.dbschema :refer :all]))

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
; Within the same rule, multiple tuples are AND.
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


; ---------------------------------------
; timeline traval
;
; http://blog.datomic.com/2013/05/a-whirlwind-tour-of-datomic-query_16.html
;
; time travel as transaction is also an entity.
; given an atom, there are 3 time-related pieces
;   1. the transaction entity that created the datom
;   2. the relative time, t, (d/tx->t txid)
;   3. the clock time, :db/txInstant of the transaction
; the optional 4th args is ?tx, which give you back the transaction entity for the datom.
;
; transaction entity has [txid #inst "2013-10-"], attached as timestamp to each attr change.
; can not reverse lookup of what entities this transaction involves.
;
; to find the timestamp of an attribute value, find the transaction that create it.
; (def txid (->> (d/q '[:find ?tx :in $ ?e :where [?e :parent/child _ ?tx]] db id) ffirst))
;
; Given a tx id, the d/tx->t fn ret relative time to be used as happened before.
; Getting a Tx instant, (-> (d/entity (d/db conn) txid) :db/txInstant)
;   => #inst "2013-02-20T16:27:11.788-00:00"
; (d/as-of db (txid) to going back in Time.
; (def older-db (d/as-of db (dec txid)))
; (:parent/child (d/entity older-db id))
;
; timeline query across all time
;   (def hist (d/history db))
;   (->> (d/q '[:find ?tx ?v ?op :in $ ?e ?attr :where [?e ?attr ?v ?tx ?op]]
;               hist 17592186045703 :parent/fname) (sort-by first))
;


;; store database uri
;(defonce uri "datomic:free://localhost:4334/colorcloud")
(defonce uri "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic")
;; connect to database and the db
(defonce conn (d/connect uri))
(defonce db (d/db conn))


; the macro to stringify a form
(defmacro stringify [question] (str question))

; fn declaration
(declare submit-transact)


; handy not nil check
(def not-nil? (complement nil?))


(defn get-conn
  []
  (d/connect uri))


; reconnect to db. XXX need redo.
(defn get-db
  []
  (d/db (get-conn)))


; ------------------------------------------------
; create attr schema thru conn
(defn create-schema
  "create schema with connection to db"
  []
  (log/info "creating database schema...")
  (do
    ; turn all defparts macro statement into schema transaction
    (submit-transact (dschema/build-parts d/tempid))
    ; turn all defschema macro statement into schema transaction
    (submit-transact (dschema/build-schema d/tempid))
    ; submit database function, project root is the home directory.
    (submit-transact (read-string (slurp "resources/growingtree/dbfn.dtm")))
    ))


; get entity byd eid, be really careful of nil eid.
; touch the entity to realize its attrs.
(defn get-entity
  "ret an datomic EntityMap from eid"
  [eid]
  (if eid
    (d/touch (d/entity (get-db) eid))))

; give an entity, it can not resolve to entity namespace keyword.
(defn ident
  "ret the keyword associated with an id, or the key itself if passed"
  [eid]
  (d/ident (get-db) eid))


(defn entity-attr
  "display all attributes of an entity by its id, passed in eid is in a list [eid]"
  [eid]
  (let [e (d/entity (get-db) (first eid))
        attrs (keys e)
        tostr (reduce (fn [o c] (str o " " c "=" (c e))) (str (first eid) " = ") attrs)]
    ;(pprint/pprint tostr)
    tostr))


; get the entity namespace keyword
(defn entity-keyword
  "ret the keyword of entity namespace, the same as thing-ident in app side util"
  [entity]
  (let [ident (->> (seq entity)
                   (map first)
                   (remove #(= :db/id %))
                   (first)
                   ((comp keyword namespace)))]
    ident))


; show entity by id
(defn show-entity-by-id
  "show all attrs and values of the entity by id"
  [eid]
  (let [e (get-entity eid)  ; touch to reify all attributes.
        attrs (keys e)]
    (log/info "--------- " eid " ----------------")
    (doseq [a attrs]
      (log/info a  (a e)))))

;==========================================================================
; datomic transaction, all attr in entity must *_NOT_* be nil.
; XXX filter out nil attr. Transaction will fail when there is nil attr.
; transaction is an entity(map) data structure with :db/id point to the entity CRUD.
; each trans CRUD one specific fact about an entity, attribute, and value;
; [:db/add entity-id attribute value]  {:db/id entity-id attr1 val1 attr2 val2}
; [:db/retract entity-id attribute value]
;==========================================================================
(defn submit-transact
  "submit a transaction"
  [tx-data]  ; tx-data is a list of list/map, each map must have :db/id
  (log/info "submit-transact " tx-data)
  (let [
        ft (d/transact (get-conn) tx-data)  ; ret future task
        ; ft tx-data
       ]
    (log/info "dbconn submit trans " tx-data " trans " ft)
    ft))


; list all transaction of db
(defn all-transactions
  "list all transactions "
  [db since]
  (let [alltxs (reverse (sort
              (d/q '[:find ?e ?when
                     :where [?e :db/txInstant ?when]] db)))]
    (log/info alltxs)
    alltxs))


; add entity attribute value.
; build a transaction using :db/add implicitly with the map structure or list structure
; an existing entity id or entity identifier, and the attributes and values being added.
; if adding entity reference, the attr value must be entity id, or iden keyword.
; if attr is ref type, attr-val must be entity id, or
; return a vector of operation for transaction.
(defn add-entity-attr
  [entity-id attr-key attr-val]
  [:db/add entity-id attr-key attr-val])

;;==========================================================================
; datomic query
;;==========================================================================
(defn first-entity
  "Return the first entity from a query result"
  [query-result]
  (ffirst query-result))


(defn only
  "Return the only item from a query result"
  [query-result]
  (assert (= 1 (count query-result)))
  (assert (= 1 (count (first query-result))))
  (ffirst query-result))


(defn qe
  "Returns the single entity returned by a query."
  [query db & args]
  (let [res (apply d/q query db args)]
    (d/entity db (first-entity res))))


; "qes result tuple " [17592186045499]
(defn qes
  "Return the entities returned by a query, assuming that
   all :find results are entity ids."
  [query db & args]
  (let [eids (apply d/q query db args)]
    (log/info "qes eids " eids)
    (->> eids
         (mapv (fn [tuple]  ; tuple [id]
                  (log/info "qes result tuple " tuple)
                  (mapv (partial d/entity db) tuple))))))


(defn qfs
  "Returns the first of each query result."
  [query db & args]
  (->> (apply d/q query db args)
       (mapv first)))


; find unique entity by attr and attr val. so caller make sure attr is unique
(defn find-by
  "Returns the unique entity identified by attr and val."
  [attr attr-val]
  (qe '[:find ?e 
        :in $ ?attr ?val
        :where [?e ?attr ?val]]
      (get-db) attr attr-val))


; ret a list of entities' ids in format [[eid] [eid]]
(defn find-eids
  "find entities by attr value, ret a list of matching tuples [[eid] [eid]]"
  [attr attr-val]
  (let [; quote ?e ?val to insert into query directly, as compare to in the argument list.
        where (conj '[?e ] attr '?val)
        q (conj '[:find ?e :in $ ?val :where ] where)
        eid (d/q q (get-db) attr-val)]
    eid))


; find and touch entitie by attr and its values
; find-eids ret list of tuple [[eid] [eid] ...]
(defn find-entities
  "return a list of entities with touched attrs by attr and val"
  [attr attr-val]
  ; need use first to extract eid from find-eids ret [[eid] [eid]]
  (let [eids (find-eids attr attr-val)]
    (map (comp get-entity first) eids)))


; (defn maybe
;   "Returns the value of attr for e, or if-not if e does not possess
;    any values for attr. Cardinality-many attributes will be
;    returned as a set"
;   [db e attr if-not]
;   (let [result (d/q '[:find ?v
;                       :in $ ?e ?a
;                       :where [?e ?a ?v]]
;                     db e attr)]
;     (if (seq result)
;       (case (schema/cardinality db attr)
;             :db.cardinality/one (ffirst result)
;             :db.cardinality/many (into #{} (map first result)))
;       if-not)))


(defn existing-values
  "Returns subset of values that already exist as unique
   attribute attr in db"
  [attr vals]
  (->> (d/q '[:find ?val
              :in $ ?attr [?val ...]
              :where [_ ?attr ?val]]
            (get-db)
            attr vals)
       (map first)
       (into #{})))


(defn assert-new-values
  "Assert emaps whose attr value does not already exist in db.
   Returns transaction result or nil if nothing to assert."
  [conn part attr emaps]
  (let [vals (mapv attr emaps)
        existing (existing-values (d/db conn) attr vals)]
    (when-not (= (count existing) (count vals))
      (->> emaps
           (remove #(existing (get attr %)))
           (map (fn [emap] (assoc emap :db/id (d/tempid part))))
           (d/transact conn)
           deref))))


;;==========================================================================
; schema query, schema itself, like transactors and everything in db, is entities.
; Schema entities are ordinary entities, like any other data in the system.
; Rather then return their entity ids, you can join through :db/ident to find the
; programmatic identifiers that name each attribute
; all db installed attributes are under :db.install/attribute. schema attr has no namespace.
; (d/q '[:find ?attr-name :where [?ref :comments] [?ref ?attr] [?attr :db/ident ?attr-name]]
;   [:story/title] [:comment/body] [:story/url]
;;==========================================================================
; get attr details by attr ident.
; {:db/id :db/ident :community/url :db/valueType :db.type/string }
(defn list-attr
  "list all attributes for ident, if no ident, list all"
  ([]  ; db is (d/db conn)
    (let [db (get-db)
          eid (d/q '[:find ?attr
                     :where [_ :db.install/attribute ?attr]]
                    db)]
      (log/info "list all attr " eid)
      (map entity-attr eid)))

  ; ret a list of attrs in schema, ret val is [ [attr-name attr-type], [], ]
  ([schema-name]
    (let [attr-types
            (d/q '[:find ?attr-name ?val-type
                   :where [?ref :db.install/attribute ?attr]
                          [?attr :db/ident ?attr-name]
                          [?attr :db/valueType ?vt]
                          [?vt :db/ident ?val-type]
                          ]
                  (get-db))

          schema-map
            (reduce
              (fn [tot [attr vtype]]
                (if (= (keyword (namespace attr)) schema-name)
                  (into tot (vector [attr vtype]))
                  tot))
              {}
              attr-types)
          ]
    schema-map)))


; get the schema for thing type
(defn get-schema
  [thing-type]
  (assoc (list-attr thing-type) :db/id :db.type/id))


; find from db installed attribute
(defn has-attribute?
  "Does database have an attribute named attr-name?"
  [db attr-name]
  (-> (d/entity db attr-name)
      :db.install/_attribute
      boolean))


(defn has-schema?
  "Does database have a schema named schema-name installed?
   Uses schema-attr (an attribute of transactions!) to track
   which schema names are installed."
  [db schema-attr schema-name]
  (and (has-attribute? db schema-attr)
       (-> (d/q '[:find ?e
                  :in $ ?sa ?sn
                  :where [?e ?sa ?sn]]
                db schema-attr schema-name)
          seq boolean)))


; -----------------------------------------------------------------------------
; get attribute type and card, everything is querable, schema, transaction !
; -----------------------------------------------------------------------------
(defn attr-type-card
  "Returns attributes datomic type and cardinality (:db.cardinality/one, many "
  [attr]
  (->>
    (d/q '[:find ?t ?v
          :in $ ?attr
          :where
          [?attr :db/valueType ?vt]
          [?vt :db/ident ?t]
          [?attr :db/cardinality ?card]
          [?card :db/ident ?v]]  ; ident is keyword, :db.cardinality/one, many.
        (get-db)
        attr)
    first))

; -----------------------------------------------------------------------------
; given a schema name, ret a list of [[attr-name attr-type] ...] of the schema.
; Deprecated, use list-attr.
; -----------------------------------------------------------------------------
(defn schema-attrs
  [schema-name]
  (let [attr-types
          (d/q '[:find ?attr-name ?val-type
                 :where [?ref :db.install/attribute ?attr]
                        [?attr :db/ident ?attr-name]
                        [?attr :db/valueType ?vt]
                        [?vt :db/ident ?val-type]
                        ]
                (get-db))
        ]
    (log/info "find schema attra " attr-types)))


;;==========================================================================
; atomic inc and set ref
;;==========================================================================
; to use the reted write op tuple inside a transact, wrap inside (vec code)
(defn incby-stmt
  "ret a write datom to inc a counter by amt for d/transact conn (vec incby-stmt)"
  [eid attr amt]
  (let [db (get-db)
        code [:db/add eid attr (-> (d/entity db eid) attr ((fnil + 0) amt))]]
    (log/info "code " code)
    code))

; to use the reted write op tuple inside a transact, wrap inside (vec code)
; all ref attr's value is the numeric id of the entity, get by (:db/id entity), or read-string
; for ref many attr, db will conj underneath, no worry of passing vector or scalar.
(defn setref-stmt
  "ret a write datomc to set a ref attr by eid for d/transact conn (vec setref-stmt)"
  [eid attr refid]
  (let [code [:db/add eid attr refid]]
    (log/info "code " code)
    code))


(defn setval-stmt
  "ret a write datom to set the value of a attr by eid for d/transact conn (vec setref-stmt)"
  [eid attr value]
  (let [code [:db/add eid attr value]]
    (log/info "code " code)
    code))

;;==========================================================================
; transaction entity query, and timeline traval
; Given any datum, find the transaction tx that set an attr's value.
;;==========================================================================
; query the entire history of an entity's one attr.
; the transaction entity is the 4th arg of any data pattern.
; given a transction id, d/tx->t, tx to time, ret relative time when transaction happened.
(defn entity-attr-tx
  "ret a list of [tx-id attr-val] of an attribute of the passed in entity"
  [eid attr]
  (let [txhist (->> (d/q '[:find ?tx ?e ?v ?op
                           :in $ ?e ?attr
                           :where [?e ?attr ?v ?tx ?op]
                          ]
                      (d/history (get-db))
                      eid
                      attr)
                    (sort-by first) ; sort by tx time
                    (reverse ))
        ]
    (log/info " entity " eid " txhist " txhist)
    txhist))


; find the transaction that set the value of the attribute
(defn entity-attr-val-tx
  "ret a transaction that set the entity's attribute to value"
  [eid attr v]
  (let [tx (->> (d/q '[:find ?tx ?e ?v ?op
                       :in $ ?e ?attr ?v
                       :where [?e ?attr ?v ?tx ?op]
                      ]
                      (d/history (get-db))
                      eid attr v)
                      (sort-by first))]
    (log/info tx " set " eid " " attr " to " v)
    tx))


; found all transaction entities that set attr to attrval.
; along the query. ret a list of all entity value transaction records.
(defn attr-val-tx
  [attr attrval]
  (let [txhist (->> (d/q '[:find ?tx ?e ?v ?op
                           :in $ ?attr ?v
                           :where [?e ?attr ?v ?tx ?op]
                          ]
                      (d/history (get-db))
                      attr
                      attrval)
                    (sort-by first)   ; sort by tx time
                    (reverse ))       ; reverse time
        ]
    (log/info "attr-val-tx " attr attrval " txhist " txhist " entity " txhist)
    txhist))


;;==========================================================================
; query against a fulltext index with system fn (fulltext $db ?attr ?searchkey)
; $ means single db input src.
; [:find ?n :where
;   [(fulltext $ :community/name "Wallingford") [[?e ?n]]]]
;;==========================================================================
(defn search-fulltext-attr
  [attr searchkey]
  (log/info "search fulltext attr " attr " keyword " searchkey)
  (let [entities 
          (->> (d/q '[:find ?e ?searchkey ?text
                      :in $ ?attr ?searchkey
                      :where [  ; fulltext output to list of tuple(e, text)
                        (fulltext $ ?attr ?searchkey) [[?e ?text]]
                       ]
                      ]
                      (get-db)
                      attr
                      searchkey)
                (sort-by first))
        ]
    entities))








