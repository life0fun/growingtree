# growingtree-server

To create web app using pedestal service template.

    lein new pedestal-service growingtree-server
    lein run-dev

The resource-path is defined in `service.clj`. link resources folder to it.

    mkdir resources
    cd resources
    ln -s ../../growingtree-app/out/public

For growingtree app to use the service, add config :api-server in its config/config.edn file.

    :api-server {:host "localhost" :port 8080 :log-fn nil}
    :use-api-server? true

    lein repl
      => (watch)
      => (start)
      => (require 'growingtree-server.service :reload)
      => (restart)

## Web app service

Server service is a record that defines the routes and handlers.
Server route and other configuration definition inside `service.clj`.

### Route, Interceptor, and URL.

A URL refers is a string symbol with path segments.
A Route definition specifies URL, http verb map, and interceptor path, router handler.

Http verb map dispatches http request(get, post, put) to different interceptor path.
A route table is a vector of route vectors(URLs map to routes). To make a route table, use defroutes macro to expand terse format to route table to be used by

Each route definition vector in route table contains
  1. optional keyword route name
  2. route handler, either a fn accept Ring request map and returns Ring response map, or an interceptor.

    (defroutes routes
      [[["/order"
          ^:interceptor [verify-request]
          {:get o/list-orders
           :post [:make-an-order o/create-order]}
          ["/:id"
            ^:interceptors [o/verify-order-ownership o/load-order-from-db]
            {:get o/view-order
            :put o/update-order}]]]])


URL generation accepts a route name and return a URL that can be used in hyperlink. Useful for redirect and dynamic URL generation.

    (url-for ::o/list-orders) ;; namespace-qualified keyword with double colon.
    ;; => "/order"

    (url-for :make-an-order) ;; use specified route name
    ;; => "/order"

    (url-for :view-order :params {:id 10})
    ;; => "/order/10"


To create a route interceptor, you can:

  1. define a function that accepts a Ring request map and returns a Ring response map

  2. define a interceptor by using io.pedestal.service.interceptor/handler function takes a function and build an interceptor from it.

    (defn hello-world [req] {:status 200 :body "Hello World!"})
      [[["/hello" {:get [(handler ::hello-world hello-world)]}]]]))

  3. Alternately, we can use io.pedestal.service.interceptor/defhandler macro to build interceptor directly.

    (defhandler hello-world [req] {:status 200 :body "Hello World!"})
      [[["/hello" {:get [(handler ::hello-world hello-world)]}]]]))


Segments of a route URL path can be parameterized by prepending : to seg name. The path parameters are parsed and added to the request's param map.

  ["/hello/:who" {:get hello-who}]
  (defn hello-who [req]
    (let [who (get-in req [:path-params :who])]
      (ring.util.response/response (str "hello " who))))


### Server Send Event SSE

Server send data to clients mainly through SSE.

When client start, it send GET request /msgs, the route interceptor gets the
When client connects, server intercepts the session and store its session id in the cookie. sse-setup to create context for the session and later use the context to push data to client.


## Datomic Pro Version

we are using mysqld as storage server. `brew install mysql`.

    mysql.server start
    mysql.server stop

For build automiation, add datomic credential to ~/.lein/credentials.clj.gpg and datomic repo to project.clj

    {#"my\.datomic\.com" {:username "your-email@xxx.com"
                          :password "xxxx-xxx-xxx"}}

project.clj:

    :dependencies[
                  [com.datomic/datomic-pro "0.9.4755"]
                  [datomic-schema "1.0.2"]
                  [org.clojure/java.jdbc "0.0.6"]
                  [mysql/mysql-connector-java "5.1.6"]
                 ]
    :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                     :creds :gpg}}

Create datomic tables and users in mysql.

    mysql -uroot -proot < $DATOMIC_HOME/bin/sql/mysql-db.sql
    mysql -uroot -proot datomic < $DATOMIC_HOME/bin/sql/mysql-user.sql
    mysql -uroot -proot datomic < $DATOMIC_HOME/bin/sql/mysql-table.sql

set charset=latin1 to avoid Index column size too large. maximum size 767. 

    ENGINE=INNODB DEFAULT CHARSET=latin1;  // as latin1 1 byte for 1 char.
    
Add the following into `$DATOMIC_HOME/config/sql-transactor-template.properties`.

    sql-url=jdbc:mysql://localhost:3306/datomic
    sql-user=datomic
    sql-password=datomic
    sql-driver-class=com.mysql.jdbc.Driver
    license-key=CPG...Vpg==

    cp ~/.m2/repository/mysql/mysql-connector-java/5.1.6/mysql-connector-java-5.1.6.jar $DATAMOC_HOME/lib

copy mysql-connector-java-5.1.6.jar from ~/.m2 maven repo to transactor lib folder. Add lein deps to project.clj and update the url for lein datomic.

    bin/maven-install
    bin/transactor config/sql-transactor-template.properties

    System started datomic:sql://<DB-NAME>?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic, you may need to change the user and password parameters to work with your jdbc driver

## Usage

Because Peer lib will try to establish connection to database upon start, we need to create database before hand using repl.

start datomic transactor and lein repl connect to it.

    bin/transactor config/sql-transactor-template.properties &

    lein repl     ;; to delete and re-create database if needed
      (require '[datomic.api :as d])
      (def uri "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic")
      (d/delete-database uri)
      (d/create-database uri)         ;; see above command

After colorcloud db created, start server.

    lein run-dev

Port and resource path is defined in `service.clj`.
  
    http://localhost:9090/dev.html

To test server API endpoints, use curl.

    curl --cookie-jar /tmp/cookie1 --location localhost:8080/msgs


## Database Schema 

Before we have web UI to input data, we need some command line tool to populate the databases. We will use my colorcloud project as the tool for database interact. Here we set our database uri point to
`datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic`.

We can put the schema file under resources/growingtree/schema.edn.

The peer.clj wraps datomic peer lib for all datomic ORM functions. It is the interface to all database operations in datomic namespace.

From service module, require the peer namespace and start to communicate to datomic database through db layer wrapped in peer module.

Create url and route interceptors to get request from app and send back response results.

After creating datomic user and datomic db in mysql, we need to create colorcloud database in datomic with datomic shell.

    bin/shell
    % uri = "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic";
    % Peer.createDatabase(uri);

    % conn = Peer.connect(uri);
    % db = conn.db();
    % Peer.q("[:find ?p :where [?p :parent/children]]", db);
    % tx = Util.list(Util.list(":db.fn/retractEntity", "17592186045496"));
    % txr = conn.transact(tx).get();

using console

    bin/console -p 8088 colorcloud "datomic:sql://?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic"


We define database scheme inside dbschema ns. DB schema shall only need to be created once. The function to create schema is defined inside `(service/create-schema)` and called from `(server/run-dev)`. Disable the call to service/create-schema after schema is created.

The hardwork is in dbconn ns.

    (defn create-schema []
      (do
        ; turn all defparts macro statement into schema transaction
        (submit-transact (dschema/build-parts d/tempid))
        ; turn all defschema macro statement into schema transaction
        (submit-transact (dschema/build-schema d/tempid))))


The data model in datomic is represented by entity. Everything is entity.
A table is an entity, each column is an entity, and each tuple row is an entity.

For parent table, it is a parent entity with many attributes.
The name attribute of parent, or name column, is an entity. it has its own id and its attribute identifier is :parent/name. The type of the attr is string. so primitive string text is stored. and it cardi is one.
For children attribute of parent, it has its own id and iden is :parent/children. The type of the attr is ref, so a list of children id map entries are stored here, and the cardi is many.

    :parent/child #{{:db/id 17592186045467} {:db/id 17592186045466}}
    :parent/email #{"P-fname-lname-1384071314828@email.com"}


For enum, it just keywords. define enum constant at the begining of schema. Refer to it from schema attributes.

    (def subject [:math :science :reading])

    [subject :enum subject "homework subject, math, art, etc"]

when creating entity, should give fully qualified value for enum.

    (let [subject :homework.subject/math] ...)

the value stored in db is keyword with fully qualified name.

    {:homework/subject :homework.subject/math }

    ({:course/subject :course.subject/coding,
      :course/overview "datomic is a fact store, awesome !",
      :course/title "learning datomic",
      :db/id 17592186045476})

We use datomic-schema to define our database schema.


## Datomic EntityMap

Datomic query result is datomic entity, we touch the entity to get all entity entries. Server route interceptor converts datomic entity to json string to sent to client. 

When json-response coerces datomic entity to json string, it recursively resolve each attribute. This will cause infinit loop when the attribute is a circular reference. We need to filter out bi-directional reference attributes and only project none circular ref entity attributes when giving data back to json-response interceptor.
