# growingtree-server

To create 

    lein new pedestal-service growingtree-server
    lein run
    Go to [localhost:8080](http://localhost:8080/)
    lein test to run tests inside service_test.clj

  link UI htmls from client so that server servlet can load them.

      mkdir resources
      cd resources
      ln -s ../../growingtree-app/out/public


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

### Server Send Event SSE

Server send data to clients mainly through SSE.
When client connects, server intercepts the session and store its session id in the cookie. sse-setup to create context for the session and later use the context to push data to client.



