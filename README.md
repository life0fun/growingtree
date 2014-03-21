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

java console, remember to end the command with ;

    bin/shell
    uri = "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic";
    Peer.createDatabase(uri);
    conn = Peer.connect(uri);

    lein repl
    (require '[datomic.api :as d])
    (def uri "datomic:free://localhost:4334/colorcloud")
             "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic"
    (d/delete-database uri)
    (d/create-database uri)
    (def conn (d/connect uri))
    (def db (d/db conn))

    (def results (q '[:find ?c :where [?c :community/name]] db))
    results
    (d/delete-database uri)
    (d/create-database uri)

    (d/q '[:find ?atn :where [?ref ?attr] [?attr :db/ident ?atn]] db)

## Entity model

With clojure, there is only one abstraction, list. Hence we have a list of courses and a list of homeworks to a list of children, etc. We extensively use db.type/ref with :db.cardinality/many to model one-to-many relationships. For many-to-many relationship, we use a dedicated entity with many cardinality.


## Pedestal Framework

We are choose Pedestal as our web framework. I like the implementation of functional reactive programming for its front-end implementation and easily integration with datomic at the back-end.

With Pedestal, application is abstracted out as input queue, data model, and output queue. View events are converted to functions that transform the data model, and delta changes in data model are emitted to view to render.

The states of SPA is abstracted as a single root tree in which each location represents a state in information model, or MVC's model. In implementation, the tree is just a clojure map, and each location/node is addressable by a path consists of keys along the path, so the transform function always use map destructure and update-in to change states.

Data flow defines a set of derive function vectors that performs reactive functions to sync dependent states. It is configured under :derive key in the app definition map.
A derive function is a vector with [input-path output-path derive-fn input-spec].
input path is a set of vectors with each vector defines a state path in information model. the output-path is a single vector of the output state location path.
This means, if any of the states/nodes in the tree changes, found a match in data flow, the derive function will be called to transform the state and store the result in the output-path location.

    :derive #{[#{[:my-counter] [:other-counters :*]} [:total-count] total-count :vals]}

After derive function done, you will need to update the emitter to report the change in this location.

We can also use a map instead of a set to config the derive data flow input. In this way, we can specify which keys are used in derived function from the upstream src.
for mapEntries that have the same key, all values will be stored together as a set under the same key when passing to derive function.

    [{[:my-counter] :me [:other-counters] :others [:login :name] :login-name}
      [:counters] merge-counters :map]

    (defn merge-counters [_ {:keys [me others login-name]}]
      (assoc others login-name me))

We can collect all nodes in a subtree into a map, using a derive function to store that map into a state/node, then other derive function can use it.

    (defn merge-counters [_ {:keys [me others]}]
      (assoc others "Me" me))

    [{[:my-counter] :me [:other-counters] :others} [:counters] merge-counters :map]
     [#{[:counters :*]} [:total-count] total-count :vals]
     [#{[:counters :*]} [:max-count] maximum :vals]

With data flow functional reactive programming, you just define spec map/vector for the source, reduce fn, and the output, you do not care where source data come from. This decouples dependency and make code usable. With data flow programming you spec your logic by behavior with pure functions, connected by queue among them, and it handles all complexity of state management with clojure STM.

## Data model, App model, Transforms, and Render

Data model defines locations where mutation states are stored. Locations are tree nodes addressable by path to it while impled as nested map and updated with updated-in.

App model defines nodes that represents all components in UI. App model use tranforms to say this part of the app model can do function X, and the corresponding tranform-enable render-config to associate UI event with the tranforms. Upon event, the transform will be called, in turn send out transform deltas to app input queue and then transform the data model.


Render is responsible for rendering templates, as well as UI events captures. Render-config vector defines rules for each path in app model. App model tells render which part of UI should perform what transform functions and render setup UI event listeners and invokes the transforms upon events. Transforms will send transform message deltas to app input queue which update data model in turn.


## Copyright

All copyright reserved by the author !
