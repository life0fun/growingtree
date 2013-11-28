;; datomic data accessor
(ns growingtree-server.datomic.assign
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
            [growingtree-server.datomic.dbconn :as dbconn :refer :all]))


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


;; this module contains database operations for task and assignment.

(declare inc-homework-popularity)
(declare create-homework-math)


;
; homework for course lecture, or random questions from anybody
(defn homework-attr
  "compose a map of attrs for a homework entity"
  [subject title content uri]
  (let [m {:db/id (d/tempid :db.part/user)
          :homework/subject subject
          :homework/title title
          :homework/content content
          :homework/uri uri}]
    (prn m)
    m))


; form assignment attr map
(defn assignment-attr
  "basic assignment attr map"
  [pid cid hwid start due hint]
  (let [m {:db/id (d/tempid :db.part/user)
          :assignment/homework hwid
          :assignment/from pid
          :assignment/to cid
          :assignment/start start
          :assignment/due due
          :assignment/hint hint}]
    (prn m)
    m))


; answer attr
(defn answer-attr
  "basic answer attr map"
  [assid authorid answer completetime]
  (let [m {:db/id (d/tempid :db.part/user)
          :answer/assignment assid
          :answer/author authorid
          :answer/answer answer
          :answer/completetime completetime}]
    (prn m)
    m))



; the enum must be fully qualified, :homework.subject/math
(defn create-homework
  "create a simple math homework"
  [subject]  
  (let [lhs (rand-int 100)
        rhs (rand-int 100)
        op (rand-nth (map str ['+ '- '* '/]))
        content (str lhs " " op " " rhs " = ?")
        title "simple add sub mul div"
        subject :homework.subject/math
        uri (URI. "http://www.growingtree.com/math")
        hwmap (homework-attr subject title content uri)]
    (prn "the math question is " hwmap)
    (submit-transact [hwmap])))


(defn find-homework
  "find homework by subject"
  []
  (let [subject :homework.subject/math
        hws (d/q '[:find ?e ?content
                   :in $ ?sub
                   :where [?e :homework/content ?content]
                          [?e :homework/subject ?sub]]
                  db
                  subject)
        eids (map first hws)  ; the first item of tuple is homework id
        entities (map (comp get-entity first) hws)
        ]
    (prn "find-homework " (first eids) entities)
    entities))

 
(defn inc-homework-popularity
  "increase homework popularity"
  []
  (let [hwids (find-homework)
        incstmt (map #(incby-stmt % :homework/popularity 1) hwids)]
    (prn incstmt)
    (submit-transact (vec incstmt))))
 

; create an assignment for any homework that 
(defn create-assignment
  "create an assignment from a homework to a child"
  ([]
    (let [hw (first (find-homework))
          hwid (:db/id hw)]
      (create-assignment hwid {:hint "fraction"})))

  ; destructure json data map into a list of args {:keys [k1 k2]}
  ; when key is missing, the corresponding val got nil as value.
  ([hwid {:keys [user to hint duedt]}]
    (let [pid (if user 
                  user 
                  (ffirst (d/q '[:find ?e :where [?e :parent/child]] db)))
          ; the ref attr of entity is a list of map-entries with [{:db/id xx} {:db/id zz}]
          cid (if to 
                  to 
                  (:db/id (first (:parent/child (d/entity db pid)))))
          
          nowdt (clj-time/now)
          nowd (.toDate nowdt)

          duedt (if duedt 
                    duedt 
                    (clj-time/plus nowdt (clj-time/hours 1)))
          dued (.toDate duedt)

          hint (if hint hint "use your brain")
          assig (assignment-attr pid cid hwid nowd dued hint)
          ]
      (prn "create-assignment " hwid assig)
      (prn "trans result " (submit-transact [assig]))
      assig)))  ; ret the newly added thing map


; find all assignment
(defn find-assignment
  "find all assignments "
  []
  (let [assig (d/q '[:find ?e ?hwcontent ?from ?to ?start ?due ?hint
                    :where [?e :assignment/homework ?h]
                           [?h :homework/content ?hwcontent]
                           [?e :assignment/from ?p]
                           [?p :parent/fname ?from]
                           [?e :assignment/to ?c] 
                           [?c :child/fname ?to] 
                           [?e :assignment/start ?start]
                           [?e :assignment/due ?due]
                           [?e :assignment/hint ?hint]
                    ] 
                    db)
        assignkeys [:db/id :assignment/homework :assignment/from :assignment/to :assignment/start :assignment/due :assignment/hint]
        entities (map (partial zipmap assignkeys) assig)]
    (prn "assignment entities " entities)
    entities))


; submit an answer to an assignment
(defn submit-answer
  "submit an answer to an assignment"
  [assid authorid]
  (let [asse (d/entity db assid)   ; reify ass entity
        hwe (->> asse :assignment/homework :db/id (d/entity db))
        answ (str (:homework/content hwe) " == " (rand-int 100))
        nowd (.toDate (clj-time/now))
        answmap (answer-attr assid authorid answ nowd)]
    (prn (d/touch asse))
    (prn (d/touch hwe))
    (prn answmap)
    (submit-transact [answmap])))


; find all answers
(defn find-answer
  "find all answers"
  []
  (let [ansid (d/q '[:find ?e :where [?e :answer/answer]] db)]
    (map (comp show-entity-by-id first) ansid)))
