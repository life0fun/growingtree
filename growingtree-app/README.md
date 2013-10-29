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

  [:parent :*] - Parents by id
  [:child :*] - children by id
  [:course :*] - course by id
  [:lecture :*] - lecture by id
  [:homework :*] - homework by id
  [:assignment :*] - assignment by id
  [:timeline :*] - timeline by id


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


# App model DOM and Browser Model

Render convert data model path [:todo :task] to browser DOM node. When creating render function, we say use render-config and browser DOM root is div id="content".

    `render-fn (push-render/renderer "content" render-config render/log-fn)`

so when emitter [:node-create [:todo :task] :map], render handler will find parent node,
create a new node, set node's html from template, and append new node to parent.

    (defn render-todo [renderer [_ path] transmitter]
      (let [parent (render/get-parent-id renderer path)
           id (render/new-id! renderer path "todoapp")
           html (templates/add-template renderer path (:todo-page templates))]
        (dom/append! (dom/by-id parent) (html))))
 
There are two ways to create new node, one is create a node that attach to DOM id, for example, "todoapp", and later use dom append! to insert node to parent dom.
    
    id (render/new-id! renderer path "todoapp")

The other way is create a node without any DOM id, and use templates prepend-t to attach node's html to template. Note here the :chat node is at a div node with field="content:messages", means div's content is taken from :messages key in data, hence the html is wrapped inside :messages key of the passed in map.

    (defn create-message-node [r [_ path] d]
      (let [id (render/new-id! r path)            
            html (templates/add-template r path (:message templates))]
        (templates/prepend-t r [:chat] {:messages (html {:id id :status "pending"})})))


The design choice of either use domina dom or use push render templates functions.

## Usage

First, start web server with `lein run` at growingtree-server home.

