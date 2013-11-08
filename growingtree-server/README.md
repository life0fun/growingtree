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


### Server Send Event SSE

Server send data to clients mainly through SSE.

When client start, it send GET request /msgs, the route interceptor gets the 
When client connects, server intercepts the session and store its session id in the cookie. sse-setup to create context for the session and later use the context to push data to client.



