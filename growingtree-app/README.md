# growingtree-app

To create the app,

    lein new pedestal-app growingtree-app

To trigger recompilation of changes to templates, watch src.
Also, use incognito browser to avoid cookie settings.

  => (start)
  => (watch :development)
  watching [:chat-client] / :development

## App model and Data model

Data Model Path create nodes stores global mutable data of the web app.

    [:parent] - current parent
    [:child] - current child
    [:parent :filter] - parent filter, {(msg/param :filter) {:key :value}}
    [:child :filter] - parent filter, {(msg/param :filter) {:key :value}}
    [:course] - current selected courses
    [:course :filter] - filter, {(msg/param :filter) {:key :value}}
    [:lecture] - current selected lecture
    [:lecture :filter] - filter, {(msg/param :filter) {:key :value}}


App Model Paths defines nodes that represent portion of template in UI.
Each node is like a coin that has two sides, at the app model side, you define transform actions that this template should handle upon UI events. at the dom side, render wire up UI events to app model transform actions.

When you define app model nodes, keep in mind it represents a template and you need to define transform actions to handle UI events within the template.
  
    [:main :parent :*] - Parents by id
    [:main :child :*] - children by id
    [:main :course :*] - course by id
    [:main :lecture :*] - lecture by id
    [:main :homework :*] - homework by id
    [:main :assignment :*] - assignment by id
    [:main :timeline :*] - timeline by id


## Service 

Service object impls Activity protocol and uses function `service-fn` to consume-effects from app effect queue. You can post message content to other web service, or store content to connected datomic store.

Service defintion at client side has two parts, wrap event end point into event source and add event listener onto it. The end point is where server send events emit. The other part is service-fn that consume-effects from app effect queue and xhr post request data to the back-end server.

So it absorb server send events from back-end and consume-effects from client data model and xhr post requests to back-end.

## Information model

Mutable state is stored in single root tree that represents information model. The single root tree data structure is a nested clojure map. Each path node in the tree is addressable by the path node, [:path :node]. Mutable state is clojure atom. To update mutable state in data model, we define transform function inside behavior, which dispatch message to transform function based on message type and message topic. Transform function get 2 args, the old value of the state, and the message. You can extract new value from message to compute new value. The return value from transform function is used to set the new state value.

    (defn add-name [old-value message]
      ((fnil conj []) old-value (:name message)))

under the hood, transform function updates data model map use update-in.

    (apply update-in data-model [target op arg1 arg2])



## Data Flow Programming

Data flow programming means data flow along a path, across many path node, and at each path node, you update data model tree, and possibly trigger other down stream data flows for chained reaction.

Data Flow model is a new way of to interact with data from UI other than MVC pattern.
It centerlized around data, bridges functions that transform the data with user interactive UI events through messages.

In data flow model, you first have data, or state. Those data in a map, or a information tree. Then you define a set of function that can change those states. Transform function is triggered by incoming messages from either UI render or service when  We call those functions transform functions. You put transform function in the app model map, each function keyed by it name. 

Now you need to display the data, and you tell UI (render) that interaction with this data is possible by sending transform-enable message to render. The transform-enable message will config render to send message This is called render config. You then have some browser DOM elements to capture user interaction events. When handling those dom events, render will send pre-defined messages back to app model, and trigger transforming of data.

From above, you see that we start from state/data, then define functions to change data, then associate transform function with messages. To interact with those state data, we config render with a series of messages that will be sent to app model to transform state/data. The final step is to setup UI elements to facilitate user interactions and bind UI events to trigger the sending of those messages.

First, state data in a map, 

    (assoc todo :tasks {} :count 0, :visible-count 0, :completed-count 0, 
                :filter :any, :filtered-tasks {}))

Second,  transform function, keyed by name, on data node [:todo], takes 2 args, the old value at the location, and the message sent from UI or service.

    [:add-task [:todo] add-task]
    (defn add-task [todo msg] (assoc todo :tasks (assoc (:tasks todo) id task))


Third, from app model side, config render to say that this state can be interactive with user. Format is, which state, location, what transform function should be invoked to change the state, and what messages should be sent. When defining messages from app model side, setup message param key for storing UI data. Render will fill up data with message/fill.

    [:transform-enable [:todo] :add-tasks [{msg/type :add-task msg/topic [:todo]
                                           (msg/param :details) {}}]]

    [:transform-enable [:todo :filtered-tasks task] :toggle-task 
                       [{msg/topic [:todo] msg/type :toggle-task :id task}]]
   
Lastly, at render side, render-config dispatch app model transform-enable message, and use dom event handler to trigger the sending of those messages to transform app model states.

    [:transform-enable [:todo] handle-todo-transforms]

Each transform-enable handler got 3 args, first is render, the second destructure to message type, data path, transform function key, and messages.

    (defmethod handle-todo-transforms :toggle-all [r [t p k messages] input-queue]
      (cond       
        (= k :toggle-task)                                           
          (evts/send-on :click (dc/sel (str "#" (render/get-id r p) " input")) input-queue messages )
        (= k :remove-task)                                           
          (evts/send-on :click (dc/sel (str "#" (render/get-id r p) " .destroy")) input-queue messages ))))


Derive dataflow does not handle message directly. A derive dataflow is made up of 3 components, a set of upstream input path nodes, the output path node where updated value goes into, and the actual derive function. The derive function receives 2 args, the first item is the old value in the output path ndoe, the second item is a tracking map. A tracking map is a special pedestal map that keeps track of changes in the data model. A tracking map is made up of the following keys: :removed, :added, :updated, :input-paths, :old-model, :new-model, and :message.

    (defn wind-chill-fn [old-wind-chill inputs]
      (let [t (get-in inputs [:new-model :app :sensor :temperature])
            v (get-in inputs [:new-model :app :sensor :wind-speed])]
        ;; simple wind chill formula is 0.0817 * (3.71v^0.5 + 5.81 – 0.25 V) * (T – 91.4) + 91.4
        (+ (* 0.0817 (- (+ (* (Math/sqrt v) 3.71) 5.81) (* 0.25 v)) (- t 91.4)) 91.4)))

The tracking map tracks the change in data model. Remember that data model is a single rooted tree. so tracking map (get-in tracking-map-inputs [:new-model :todo :filter]) contains current filter type. To get filtered task map.

    (get-in inputs [:new-model :todo :filtered-tasks]


## Render DOM and app model deltas

The push renderer creates an internal DOM structure that is useful for creating templates and mapping from the application tree(node path) to the actual browser's DOM. It does this by creating an internal DomRenderer, which is defined by the following methods ** get-id, get-parent-id, new-id!, delete-id!, on-destroy!, set-data!, drop-data! and get-data**. 

The idea is that these functions take a path from an application delta and map it to an object in the DOM. When creating render function, we say use render-config and browser DOM root is div id="content".

    `render-fn (push-render/renderer "content" render-config render/log-fn)`

so when emitter [:node-create [:todo :task] :map], render handler will find parent node, create a new node, set node's html from template, and append new node to parent.
For :node-create delta, render fn gets 2 args, type, and path.

    (defn render-todo [renderer [_ path] transmitter]
      (let [parent (render/get-parent-id renderer path)
           id (render/new-id! renderer path "todoapp")
           html (templates/add-template renderer path (:todo-page templates))]
        (dom/append! (dom/by-id parent) (html {:id id}))))
 
The function templates/add-template takes all the hard work out of dealing with dynamic templates. This function associates the template with the given path and returns a function which generates the initial HTML. Calling the returned function with a map of data will return HTML which can be added to the DOM.

There are two ways to create new node, one is create a render DOM node for a path that maps to a browser DOM id, for example, [:todo] maps to div id "todoapp". Then later we add-template to [:todo] node, render template to html and dom append to [:todo]'s parent.

The other way is call new-id to get an id for the path node [:x :y], then attach a template to the path node; finally, render the template and assign it the id from render DOM as browser div id.

The other way is create a render dom id for the path node, attach template to it. and use templates prepend-t to attach path node's html to designated path node, for example, here we attach message path node's template to [:chat]. Note here the :chat node is at a div node with field="content:messages", means div's content is taken from :messages key in data, hence the html is wrapped inside :messages key of the passed in map.

    (defn create-message-node [r [_ path] d]
      (let [id (render/new-id! r path)            
            html (templates/add-template r path (:message templates))]
        (templates/prepend-t r [:chat] {:messages (html {:id id :status "pending"})})))

Note that with filed="content:XXX" approach, all div defined with this filed=content:XXX will get the rendered template html.

To set both element attributes and content, e.g, href in hyper link and content of anchor tag, need to put content:XXX at the front of attrs.

    <a class="title" field="content:thing-entry-title,href:href"></a>


For :value delta, render-fn destructure the message into [type path old-val new-val]

    (defn render-task-details [renderer [_ path _ new-details] transmitter]
      (templates/update-parent-t renderer path {:details new-details}))

For :attr delta, update a node's attributes.
    [:attr [:todo :tasks 'task-4] :created-at nil "1369634836"]


For derived dataflow, it has a set of input path, as up-stream changes, output path, as down stream output, and derive function. Any changes in input path triggers derive function, and the return value from derive function gets stored in output path.

    [#{[:todo :filter] [:todo :tasks]} [:todo :filtered-tasks] compute-filtered-tasks]]

The derive function receives two arguments when it is called. The first item is the old data model value at the output path. The second item is a tracking map. A tracking map is a special pedestal map that keeps track of changes in the data model. A tracking map is made up of the following keys: :removed, :added, :updated, :input-paths, :old-model, :new-model, and :message.

    (defn compute-filtered-tasks [_ inputs]  
      (let [filter-type (get-in inputs [:new-model :todo :filter])
            tasks (get-in inputs [:new-model :todo :tasks])]


## Emitter

Emitters are made up of two components. The first component is a list of input paths into the data model. The second component is the emitter function.

The emitter function is designed to take a single argument, which is a tracking map. By using the tracking map, you can determine what has changed, and can produce the application deltas necessary to signal this change. As data model is a single rooted tree, which is a nested map, so we can use  (get-in tracking-map-inputs [:new-model :todo :filter]) to get either the old-model value or the new-model value for any path node in data model and emit application model delta.

For example, if a path was added to the data model, this could be signalled with a :node-create. If one was removed, it could be :node-destroy. When a value is changed in the data model, an application delta could be either :attr, or :value, depending on how fine grained the change you want to signal.

    :emit [{:in #{[:todo :filtered-tasks :* :*]} :fn todo-emitter  :mode :always :init init-emitter }

    (defn todo-emitter [inputs]
      (vec (concat
        ((app/default-emitter) inputs)
        (mapcat (fn [[_ _ task]] [[:node-create ...]]) (:added inputs)
        (mapcat (fn [[_ _ task] :as path] [[:value path (get-in inputs (concat [:new-model] path))]]) (:updated inputs))
        (mapcat (fn [[_ _ task] :as path] [[:node-destroy path]]) (:removed inputs)


For value changes, the default emitter will emit 
    
    [:value [:nav :category] nil :courses]

the emit handler in render side will get [op path old new] vector. op is :value obviously. d is transmitter, for 

    (defn emitter-handler [render [op path old new] d] ... )  


## Back-end Service

Front-end app interface with back-end service through Effect queue and server send event listener service.

App consumes msg from effect queue and xhr post to backend /msgs end point.
App service type listen to /msgs SSE and convert event data into [:inbound] :received msg and put-message into (:input app) queue.

In App behavior, effect is used to generate output messages, with will be consumed by app services-fn. Effect dataflow upstream is a list of inputs, and an effect function to produce output msgs. For example, {msg/topic [:outbound]} will trigger send-message-to-server.

    :effect #{[#{[:outbound]} send-message-to-server :single-val]}

The effect function takes a single argument, which is the message that put into the [:outbound]. The function must return a vector of messages that will be put into (:output app) queue and consumed by service-fn.

    (defn send-message-to-server [outbound]
      [{msg/topic [:server] :out-message (:sending outbound)}])

    (defn publish-counter [{:keys [count name]}]
      [{msg/type :swap msg/topic [:other-counters name] :value count}])


## Slicing templates

We are using Bootstrap 2.2 style our UI.

UIs are defined in templates. Each template has two attributes, template and field. template is the name and field defines how to map clojure map to template variables.

All templates can be sliced out from the file 
`app/src/growingtree_app/html_templates.clj` by calling
    
    (def template-fn (tfn (tnodes "growingtree-app.html" "temp-name")))

template-fn is a function which, when called with a map of values, will return a string of HTML with filled-in values.

    (template-fn {:id 42 :message "Hello"})

The field attribute takes a comma delimited list of

    html-element-attribute-name:map-key

content is a special case which means that the content (innerHTML) of the element will be set to this value.


To verify template working, need to restart to reload app.
  => (use 'growingtree-app.html-templates)
  => (def t (growingtree-app-templates))


## Usage

First, start web server with `lein run` at growingtree-server home.
Then go to app home, `lein repl` and then (start)
then goto localhost:3000, click development to generate out/public for server to render.

