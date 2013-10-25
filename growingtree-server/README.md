# growingtree-server

To create 

    lein new pedestal-service growingtree-server
    lein run
    Go to [localhost:8080](http://localhost:8080/)
    lein test to run tests inside service_test.clj


## Server

Server route and other configuration definition inside `service.clj`.

Service object impls Activity protocol and uses function `service-fn` to consume-effects from app effect queue. You can post message content to other web service, or store content to connected datomic store.

For each API endpoint, Service will create `EventSource` at those endpoints that handle http requests. Service use addEventListener to attach event listener to get data from http request.
