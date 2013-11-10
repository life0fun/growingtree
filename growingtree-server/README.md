# growingtree-server

To create 

    lein new pedestal-service growingtree-server
    lein run-dev
    Go to [localhost:8080](http://localhost:8080/)
    lein test to run tests inside service_test.clj

  link UI htmls from client so that server servlet can load them.

      mkdir resources
      cd resources
      ln -s ../../growingtree-app/out/public

To make client use the service, client shall add config :api-server in its config/config.edn file. 
  
    :api-server {:host "localhost" :port 8080 :log-fn nil}

    :use-api-server? true

# Reload

  lein repl
  => (dev)
  => (watch)
  => (start)
  => (require 'growingtree-server.service :reload)
  => (restart)

## Server

Server service is a record that defines the routes and handlers.
Server route and other configuration definition inside `service.clj`.

## Route, Interceptor, and URL.

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



## Connecting to Datomic

Before we have web UI to input data, we need some command line tool to populate the databases. We will use my colorcloud project as the tool for database interact. Here we set our database uri point to 
`datomic:free://localhost:4334/colorcloud`.

We alos put the schema file under resources/growingtree/schema.edn.

The peer.clj wraps datomic peer lib for all datomic ORM functions. It is the interface to all database operations in datomic namespace.

From service module, require the peer namespace and start to communicate to datomic database through db layer wrapped in peer module.

Create url and route interceptors to get request from app and send back response results.


Datomic database is persistent under /Volumes/Build/datomic/data/db/, You can use lein repl to clean up and re-create databases.

    lein repl
    user=> (require '[datomic.api :as d])
    user=> (def uri "datomic:free://localhost:4334/colorcloud")
    user=> (def conn (d/connect uri))
    user=> (def db (d/db conn))
    user=> (d/delete-database uri)
    user=> (d/create-database uri)


## Usage

Because Peer lib will try to establish connection to database upon start, we need to create database before hand using repl.

First, start datomic
    lein datomic start & 
    lein repl     ;; to delete and re-create database if needed
      (require '[datomic.api :as d])
      (def uri "datomic:free://localhost:4334/colorcloud")
      (d/create-database uri)         ;; see above command

then lein run-dev

To test server API endpoints, use curl.

    curl --cookie-jar /tmp/cookie1 --location localhost:8080/msgs

