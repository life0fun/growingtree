# Growing Tree

Inspired by Dr. Sugata Mitra's 2013 TED award talk, the project aims to build a school in cloud, and along with tools for learning management.

Dr. Mitra asked, what did the poor do wrong ? let's answer it!


## Architecture

We use Datomic server as the back-end and Pedestal Framework as web server. An android client is also in product plan.

## Datomic server configuration

When starting datomic, bin/transactor will print the URI for connecting,
datomic:free://localhost:4334/<DB-NAME>, means using free protocol. These are configured at free-transactor-template.properties.
To create a connection string, simply replace DB-NAME with your db name.

    db-uri = "datomic:free://localhost:4334/colorcloud"

    lein datomic start        # start datomic server first
    lein datomic initialize   # create db and load data
    lein run create-schema    # create schema
    lein run list-schema      # list all attributes in db
    lein run add-family       # run 2 times to add 2 family
    lein run create-homework  # run many times to create tons of homework
    lein run create-assignment
    lein run find-assignment  # get the assignment id and child id
    lein run submit-answer assignment-id child-id
    lein run fake-comment     # fake a comment for testing

You can use repl to verify database is initialized properly. Note datomic db schema, config and db-uri are defined inside project.clj.

## Datomic console, and excise/retract data.
    
    bin/console -p 8088 colorcloud "datomic:sql://?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic"

A transaction is simply a list of lists and/or maps, each of which is a statement in the transaction.

    [:db/add entity-id attribute value]
    [:db/retract entity-id attribute value]   ; retract certain attr value.
    {:db/id entity-id attribute value }

    {:db/id #db/id[:db.part/user] :person/title "Bob"}

Repl

    bin/repl
    (require '[datomic.api :as d])
    (def uri "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic")
    (d/delete-database uri)
    (d/create-database uri)

    (def conn (d/connect uri))
    (def db (d/db conn))

    (d/q '[:find ?e :where [?e :person/title]] db)
    (d/q '[:find ?atn :where [?ref ?attr] [?attr :db/ident ?atn]] db)

    (d/transact conn '[{:db/id #db/id[db.part/user] :db/excise 17592186045471}])

    (d/transact conn '[[:db/retract 17592186045471 :person/email "x"]])

java console, remember to end the command with ;
    
    bin/shell
    uri = "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic";
    Peer.createDatabase(uri);
    conn = Peer.connect(uri);
    results = Peer.q("[:find ?e :where [?e :person/title]]",conn.db());
    entity = conn.db().entity(id)
    name = entity.get(":person/title")

Retract is to retract entity attr value.
Excise is remove the entity, or all attribute values totally.
To excise a specific entity, manufacture a new entity with a :db/excise attribute pointing to that entity's id. 
    
    [{:db/id #db/id[db.part/user], :db/excise 42}]
    [{:db/id #db/id[db.part/user], :db/excise 42 :db.excise/attrs [:person/title :person/email]}]
    [{:db/id #db/id[db.part/user], :db/excise :event/user :db.excise/before #inst "2012"}]
    [{:db/id #db/id[db.part/user], :db/excise :event/user}]


## Entity model

With clojure, there is only one abstraction, list. Hence we have a list of courses and a list of homeworks to a list of children, etc. We extensively use db.type/ref with :db.cardinality/many to model one-to-many relationships. For many-to-many relationship, we use a dedicated entity with many cardinality.


## Frontend with OM (React.js + Clojurescript)

We are using OM for app side framework. All UI attributes and states are kept in global app state; UI events mutate and update those attributes and states, which in turn trigger re-rendering of the UI with the latest states.

Refer to OM document for details information.

## Copyright

All copyright reserved by the author !
