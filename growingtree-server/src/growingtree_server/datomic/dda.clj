;; datomic data accessor
(ns growingtree-server.datomic.dda
  (:require [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json])
  (:require [datomic.api :as d])
  (:require [growingtree-server.datomic.dbschema :as dbschema]
            [growingtree-server.datomic.dbdata :as dbdata]
            [growingtree-server.datomic.timeline :as timeline])
  (:import [java.io FileReader]
           [java.net URI]
           [java.util Map Map$Entry List ArrayList Collection Iterator HashMap])
  (:require [clj-redis.client :as redis])    ; bring in redis namespace
  (:require [clj-time.core :as clj-time :exclude [extend]]
            [clj-time.format :refer [parse unparse formatter]]
            [clj-time.coerce :refer [to-long from-long]]))

;
; http://blog.datomic.com/2013/05/a-whirlwind-tour-of-datomic-query_16.html
; query API results as a list of facts as list of tuples. [ [tuple1...] [tuple2...]]
; the intermediate value for joining are :db/id, can be in both [entity attr val] pos
; to join, the attribute col in tuple is the join col, and val.
; find ?e ret entity id, need to use (d/entity db ) to convert to lazy entity.
;  (d/entity db (ffirst (d/q '[:find ?e :where [?e :parent/fname]] db))) ;find parents that have fname
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

;
;

;; store database uri
(defonce uri "datomic:free://localhost:4334/colorcloud")
;; connect to database and the db
(def conn (d/connect uri))
(def db (d/db conn))


(declare find-parent-by-cid)
(declare find-parent-by-cname)
(declare inc-homework-popularity)
(declare create-lecture)
(declare create-course-coding)
(declare create-homework-math)

;; parse schema dtm file
;(def schema-tx (read-string (slurp "./resource/schema/seattle-schema.dtm")))
;; parse seed data dtm file
;(def data-tx (read-string (slurp "./resource/schema/seattle-data0.dtm")))

; rules to find all parent or child with the name, using rules for OR logic
(def nameruleset '[[[byname ?e ?n] 
                   [?e :parent/fname ?n]]  ; multiple tuples within a rule are AND.
                  [[byname ?e ?n]
                   [?e :parent/lname ?n]]
                  [[byname ?e ?n]
                   [?e :child/fname ?n]]
                  [[byname ?e ?n]
                   [?e :child/lname ?n]]])


; create attr schema thru conn
(defn create-schema
  "create schema with connection to db"
  []
  (dbschema/create-schema conn))


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

; list all install-ed attrs in db
(defn list-attr
  "list attibutes in db"
  [attr]
  (if-not attr
    (dbschema/list-attr db)
    (dbschema/list-attr db attr)))


(defn get-entity
  "ret an entity attrs map from eid"
  [eid]
  (d/touch (d/entity db eid)))


; show entity by id
(defn show-entity-by-id
  "show all attrs and values of the entity by id"
  [eid]
  (let [e (d/touch (d/entity db eid))  ; touch to reify all attributes.
        attrs (keys e)]
    (prn "--------- " eid " ----------------")
    (doseq [a attrs]
      (prn a  (a e)))))


(defn add-family
  "insert two parents with two children"
  []
  (let [tmplparent (dbdata/create-parent)
        tmprparent (dbdata/create-parent)
        tmplch (dbdata/create-child)
        tmprch (dbdata/create-child)
        lch (assoc tmplch :child/parent [(:db/id tmplparent) (:db/id tmprparent)])
        rch (assoc tmprch :child/parent [(:db/id tmplparent) (:db/id tmprparent)])
        lparent (assoc tmplparent :parent/child [(:db/id lch) (:db/id rch)])
        rparent (assoc tmprparent :parent/child [(:db/id lch) (:db/id rch)])
        ]
    (prn "inserting " lch rch lparent rparent)
    (d/transact conn [lch rch lparent rparent])))


; :find rets entity id, find all parent's pid and name.
(defn list-parent
  "find all parents with all children"
  []
  (let [pc (d/q '[:find ?p :where [?p :parent/child]] db)
        entities (map (comp get-entity first) pc)] ;?p parent who has children
    (map (comp show-entity-by-id first) pc)
    entities))  ; ret pc


; use :db/add to upsert child attr to parent. find parent eid by list-parent.
; entity is a map of attributes. insert ref attr, must use refed entity id.
; [:db/add entity-id attribute value]
(defn insert-child
  "insert a children to parent by parent id, pid must be num, not string"
  [pid]  ; passed in pid is a num
  (let [pe (d/entity db pid)   ; get the lazy entity by id
        ch (:parent/child pe)
        newch (assoc (dbdata/create-child) :child/parent pid)]
    (d/transact conn [newch
                      [:db/add pid :parent/child (:db/id newch)]])
    (prn pid pe ch newch)))


; [:db/add entity-id attribute value]
(defn link-parent-child
  "link child to parent by parent id and child id"
  [pid cid]
  (let [parent (d/entity db pid)
        child (d/entity db cid)]
    (d/transact conn [[:db/add pid :parent/child cid]
                      [:db/add cid :child/parent pid]])))


(defn find-parent
  "find parent by child id, id could be child name or child entity id"
  [cidstr & args]
  (let [cidval (read-string cidstr)
        cid? (number? cidval)]
    (if cid?
      (find-parent-by-cid cidval)
      (find-parent-by-cname cidval args))))


; find parent of a child
(defn find-parent-by-cid
  "find the parent of a child by its id, the passed cid is number"
  [cid]
  (let [ce (d/entity db cid)
        ;parent (-> ce (:parent/_child))   ; inbound(who refed me) might be slow.
        parent (:child/parent ce)  ; :ref :many rets a map, each tuple is a  clojure.lang.MapEntry.
        ]
    (prn parent)
    (map (comp show-entity-by-id :db/id) parent)))  ; eid is the 1st in a ret tuple.


; search all fname and lname to check whether there is a match
(defn find-parent-by-cname
  "find the parent of a child by its name"
  [clname cfname]
  (let [fname (first cfname)
        ; args needs to bind to ?var to pass into query
        rset (d/q '[:find ?p :in $ % ?n
                    :where [?p :parent/child ?e]  ; join parent entity that child entity equals
                           [?e :child/parent]  ; for child entity that has parent
                           (byname ?e ?n)]     ; its fname or lname mateches ?
                db
                nameruleset
                (str clname))
        ]
    (doseq [pid rset] 
      ((comp show-entity-by-id first) pid))
    (prn clname rset)))


; find a person by name, use set/union as sql union query.
(defn find-by-name 
  "find a person by either first name or last name"
  [pname]
  (let [parent (d/q '[:find ?e :in $ % ?n
                      :where [?e :parent/child]
                             (byname ?e ?n)]
                    db
                    nameruleset
                    pname)
        child (d/q '[:find ?e :in $ % ?n
                     :where [?e :child/parent]  ; query child
                             (byname ?e ?n)]
                    db
                    nameruleset
                    pname)
        all (clojure.set/union parent child)  
      ]
    (prn parent child all)
    (map (comp show-entity-by-id first) all)))


; list an entity attribute's timeline
(defn timeline
  "list an entity's attribute's timeline "
  [eid attr]
  (let [txhist (timeline/timeline eid attr)]
    (doseq [t txhist]
      (show-entity-by-id (first t))
      (show-entity-by-id (second t)))))

; list a person's all transaction timeline
(defn person-timeline
  "list a person's transaction timeline"
  [eid]
  (let [txhist (timeline/person-timeline eid)]
    (doseq [t txhist]
      (prn t)
      (show-entity-by-id (first t)))))


; create homework to be assigned
(defn create-course
  "create a course "
  ([]
    (create-course :coding))

  ([subject]
    (case subject
      :coding (create-course-coding)
      "default")))


; create course and lecture together
(defn create-course-and-lecture
  "create a course, and a batch of lecture in one transaction"
  []
  (let [cm (create-course)
        cid (:db/id cm)
        lecm (create-lecture cid)
        lid (:db/id lecm)
        clm (assoc cm :course/lectures [lid])]  ; for :many field, add with [lid] or lid, db will handle it.
    (prn clm)
    (prn lecm)
    (d/transact conn [clm lecm])))


; the enum must be fully qualified, :homework.subject/math
(defn create-course-coding
  "create a simple math course and lectures"
  []
  (let [subject :course.subject/coding
        title "learning datomic"
        credit 3
        overview (str "datomic is a database as value based on clojure, awesome !")
        materials (str "http://docs.datomic.com/tutorial.html")
        contenturi (URI. "http://docs.datomic.com/")
        coursem (dbdata/course-attr subject title overview materials contenturi)]
    ;(d/transact conn [coursem])
    coursem))


; create an online course
(defn create-lecture
  "create a course lecture for certain course id"
  [cid]
  (let [lectseq (str "1b")
        lecdate (.toDate (clj-time/date-time 2013 11 25 10 20))
        topic (str "The day of datomic")
        content (str "The Day of Datomic project is a collection of samples and tutorials for learning Datomic")
        videouri (URI. "https://github.com/Datomic/day-of-datomic")
        lecturem (dbdata/lecture-attr cid lectseq lecdate topic content videouri)]
    ;(d/transact conn [lecturem])
    lecturem)) ; tx-data is a list of write datoms


; find a course
(defn find-course
  "find course by subject, ret a list of course entity"
  []
  (let [subject :course.subject/coding
        eids (d/q '[:find ?c ?l           ; ret both course id and lecture id
                    :in $ ?sub 
                    :where [?c :course/lectures ?l]    ; all courses that have lectures
                    ] ; all lectures of the course
                db 
                subject)
        cids (map first eids)  ; always ret the first homework to assign.
        lids (map second eids)]
    ; (prn "cids" cids)
    ; (prn "lids" lids)
    (show-entity-by-id (first cids))
    (show-entity-by-id (first lids))
    (map (comp get-entity first) eids)))  ; [ [cid lid] [cid lid]], ret course entity map


(defn find-lecture
  "find all lectures"
  []
  (let [lid (d/q '[:find ?l :where [?l :lecture/course]] db)]
    (map show-entity-by-id (first lid))))

; linking a lecture to a course, ref attr's val is numeric id value.
(defn add-course-lecture
  "adding a lecture to a course by setting ref attr with id numeric value"
  [cid lid]
  (let [ccode [:db/add cid :course/lectures lid]
        lcode [:db/add lid :lecture/course cid]]
    (d/transact conn [ccode lcode])
    (show-entity-by-id cid)
    (show-entity-by-id lid)))

; retract the lecture from a course
(defn rm-course-lecture
  "remove a lecture from a course by setting ref attr with id numeric value"
  [cid lid]
  (let [ccode [:db/retract cid :course/lectures lid]
        lcode [:db/retract lid :lecture/curse cid]]
    (d/transact conn [ccode])
    (show-entity-by-id cid)
    (show-entity-by-id lid)))

; create homework to be assigned
(defn create-homework
  "create a homework"
  ([]
    (create-homework :math))
  ; homework with subject
  ([subject]
    (case subject
      :math (create-homework-math)
      "default")))

; the enum must be fully qualified, :homework.subject/math
(defn create-homework-math
  "create a simple math homework"
  []
  (let [lhs (rand-int 100)
        rhs (rand-int 100)
        op (rand-nth (map str ['+ '- '* '/]))
        content (str lhs " " op " " rhs " = ?")
        title "simple add sub mul div"
        subject :homework.subject/math
        uri (URI. "http://www.growingtree.com/math")
        hwmap (dbdata/homework-attr subject title content uri)]
    (prn "the math question is " hwmap)
    (d/transact conn [hwmap])))


(defn find-homework
  "find homework by subject"
  []
  (let [subject :homework.subject/math
        hws (d/q '[:find ?e ?content :in $ ?sub 
                   :where [?e :homework/content ?content]
                          [?e :homework/subject ?sub]]
                  db 
                  subject)
        eids (map first hws)  ; always ret the first homework to assign.
        ]
    (prn hws eids)
    eids))


(defn inc-homework-popularity
  "increase homework popularity"
  []
  (let [hwids (find-homework)
        incstmt (map #(incby-stmt % :homework/popularity 1) hwids)]
    (prn incstmt)
    (d/transact conn (vec incstmt))))


; create an assignment for any homework that 
(defn create-assignment
  "create an assignment from a homework to a child"
  []
  (let [pid (ffirst (d/q '[:find ?e :where [?e :parent/child]] db))
        cid (:db/id (first (:parent/child (d/entity db pid))))  ; from entity, you got map-entry
        hwid (first (find-homework))
        nowdt (clj-time/now)
        nowd (.toDate nowdt)
        duedt (clj-time/plus nowdt (clj-time/hours 1))
        dued (.toDate duedt)
        assg (dbdata/assignment-attr pid cid hwid nowd dued)
        ]
    (prn pid cid hwid nowdt nowd duedt dued)
    (d/transact conn [assg])))

; find assignment
(defn find-assignment
  "find an assignment by time, id, or anything"
  []
  (let [assg (d/q '[:find ?e :where [?e :assignment/homework]] db)
        assgid (ffirst assg)]
    (show-entity-by-id assgid)))


; make a comment on any eid
(defn fake-comment
  "fake a comment on an assignment"
  []
  (letfn [(commdata [[subid authorid content]]
            (let [text (str content " is too hard !")]
              (dbdata/comment-attr subid authorid text)))]

    (let [assgns (d/q '[:find ?e ?to ?content
                        :where [?e :assignment/homework]
                               [?e :assignment/to ?to]
                               [?e :assignment/homework ?hwid]
                               [?hwid :homework/content ?content]] 
                    db)
        comments (map commdata assgns)
        ]
      (prn assgns)
      (prn comments)
      (d/transact conn (vec comments)))))

; list all comments
(defn find-comment
  "find a comment"
  []
  (let [cids (d/q '[:find ?e :where [?e :comments/author]] db)]
    (map (comp show-entity-by-id first) cids)))


; submit an answer to an assignment
(defn submit-answer
  "submit an answer to an assignment"
  [assid authorid]
  (let [asse (d/entity db assid)   ; reify ass entity
        hwe (->> asse :assignment/homework :db/id (d/entity db))
        answ (str (:homework/content hwe) " == " (rand-int 100))
        nowd (.toDate (clj-time/now))
        answmap (dbdata/answer-attr assid authorid answ nowd)]
    (prn (d/touch asse))
    (prn (d/touch hwe))
    (prn answmap)
    (d/transact conn [answmap])))

; find all answers
(defn find-answer
  "find all answers"
  []
  (let [ansid (d/q '[:find ?e :where [?e :answer/answer]] db)]
    (map (comp show-entity-by-id first) ansid)))
