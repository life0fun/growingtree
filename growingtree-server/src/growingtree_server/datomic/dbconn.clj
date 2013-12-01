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
  (:require [datomic.api :as d])
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


(defn get-conn
  []
  (d/connect uri))

; reconnect to db. XXX need redo.
(defn get-db
  []
  (d/db (get-conn)))

; create attr schema thru conn
(defn create-schema
  "create schema with connection to db"
  []
  (do
    ; turn all defparts macro statement into schema transaction
    (submit-transact (dschema/build-parts d/tempid))
    ; turn all defschema macro statement into schema transaction
    (submit-transact (dschema/build-schema d/tempid))))


; to use the reted write op tuple inside a transact, wrap inside (vec code)
(defn incby-stmt
  "ret a write datom to inc a counter by amt for d/transact conn (vec incby-stmt)"
  [eid attr amt]
  (let [code [:db/add eid attr (-> (d/entity db eid) attr ((fnil + 0) amt))]]
    (prn "code " code)
    code))

; to use the reted write op tuple inside a transact, wrap inside (vec code)
; all ref attr's value is the numeric id of the entity, get by (:db/id entity), or read-string
; for ref many attr, db will conj underneath, no worry of passing vector or scalar.
(defn setref-stmt
  "ret a write datomc to set a ref attr by eid for d/transact conn (vec setref-stmt)"
  [eid attr refid]
  (let [code [:db/add eid attr refid]]
    (prn "code " code)
    code))

(defn setval-stmt
  "ret a write datom to set the value of a attr by eid for d/transact conn (vec setref-stmt)"
  [eid attr value]
  (let [code [:db/add eid attr value]]
    (prn "code " code)
    code))


(defn get-entity
  "ret an datomic EntityMap from eid"
  [eid]
  (d/touch (d/entity (get-db) eid)))


(defn entity-attr
  "display all attributes of an entity by its id, passed in eid is in a list [eid]"
  [eid]
  (let [e (d/entity db (first eid))
        attrs (keys e)
        tostr (reduce (fn [o c] (str o " " c "=" (c e))) (str (first eid) " = ") attrs)]
    ;(pprint/pprint tostr)
    tostr))

; show entity by id
(defn show-entity-by-id
  "show all attrs and values of the entity by id"
  [eid]
  (let [e (d/touch (d/entity db eid))  ; touch to reify all attributes.
        attrs (keys e)]
    (prn "--------- " eid " ----------------")
    (doseq [a attrs]
      (prn a  (a e)))))


; get attr details by attr ident. 
; {:db/id :db/ident :community/url :db/valueType :db.type/string }
(defn list-attr
  "list all attributes for ident, if no ident, list all"
  ([]  ; db is (d/db conn)
    (let [eid (d/q '[:find ?attr 
                     :where [_ :db.install/attribute ?attr]] 
                    db)]
      (prn "list all attr " eid)
      (map entity-attr eid)))

  ([attr-ident]
    (let [eid (d/q '[:find ?e :in $ ?attr 
                     :where [?e :db/ident ?attr]] 
                    db 
                    attr-ident)]
      (map entity-attr eid))))


;; submit transaction (transact connection tx-data)
; tx-data is a list of lists, each of which specifies a write
; operation, either an assertion, a retraction or the invocation of
; a data function. Each nested list starts with a keyword identifying
; the operation followed by the arguments for the operation.
; Returns a completed future to monitor the completion of tran.
(defn submit-transact
  "submit a transaction"
  [tx-data]
  (let [ft (d/transact conn tx-data)]  ; ret future task
    (prn "dbconn submit trans ft " tx-data ft)
    ft))


; list all transaction of db
(defn all-transactions
  "list all transactions "
  [db since]
  (let [alltxs (reverse (sort 
              (d/q '[:find ?e ?when 
                     :where [?e :db/txInstant ?when]] db)))]
    (prn alltxs)
    alltxs))


; find the timeline of an attribute of 
(defn entity-attr-timeline
  "list a timeline of an attribute of the entity"
  [eid attr]
  (let [hist (d/history db)
        txhist (->> (d/q '[:find ?tx ?v ?op 
                           :in $ ?e ?attr
                           :where [?e ?attr ?v ?tx ?op]]
                      hist 
                      eid 
                      attr)
                  (sort-by first))  ; sort by tx time
        ]
    (prn txhist)
    txhist))



