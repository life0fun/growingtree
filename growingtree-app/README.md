# growingtree-app

To create the app,

    lein new pedestal-app growingtree-app


## App model and Data model

Data Model Path 

  [:parent :*] - Parents by id
  [:child :*] - children by id
  [:course :*] - course by id
  [:lecture :*] - lecture by id
  [:homework :*] - homework by id
  [:assignment :*] - assignment by id
  [:timeline :*] - timeline by id


App Model Paths:
  
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

## Extract templates with slicing

We are using Bootstrap 2.2 style our UI.

UIs are defined in templates. Each template has two attributes, template and field. template is the name and field defines how to map clojure map to template variables.

All templates can be sliced out from the file 
`app/src/growingtree_app/html_templates.clj` by calling
    
    (def template-fn (tfn (tnodes "growingtree-app.html" "hello")))

template-fn is a function which, when called with a map of values, will return a string of HTML with filled-in values.

    (template-fn {:id 42 :message "Hello"})

The field attribute takes a comma delimited list of

    html-element-attribute-name:map-key

content is a special case which means that the content (innerHTML) of the element will be set to this value.


## Usage

First, start web server with `lein run` at growingtree-server home.

