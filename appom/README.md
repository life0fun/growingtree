# growingtree-app

This directory contains re-implementation of growingtree app with OM.

For details of OM, please refer to my `omdoster` repo.

## Build

We put assets(images, js, scss) into `assets` folder.
For each component, UI and logic wrapped into a ns inside `components` folder.
`controllers` contains event handlers for each channel.

To build,
  
    compass compile
    lein cljsbuild once dev
    open localhost:9090/dev.html


## OM Application Architecture

OM application is built from the following basic components:

1. the core module creates main app component, which corresponds to the main component of single page app.

2. core create control and api channels. Channles are data flow objects. global app state includes those channels hence they can be passed around to all components.

3. Main component creates all needed sub components, nav bar, side bar, content, etc.

4. sub components send UI click event to chan, and core's go-loop processing chan event.

5. core creates named route to match url and call route handler. The named route fn transforms UI event params to url and window.history.pushState, effectively invoke route hander. 

6. UI click event data in control channel will be stored in app state under active channels, current users, etc. The update of app state will trigger the re-render of app component, including sidebar, nav bar and main area.

7. once app component re-rendered, new state(data) is showing, this is effectively as route change refresh new view.


## OM Component App state

OM component is defined by a function that takes component state data, and component owner, and optional opts.

    (defn app [app owner opts] (reify ...))
    (defn sidebar [data owner opts] (reify ....))
    (defn navbar [data owner opts] (reify ...))

App component creates sub components. om/root creates a Om component that attaches to a target DOM element, and reify the render IF that will render to the target DOM element. The UI interactions from the target DOM element got sent to core state transition logic to process 

Om components like React components take props. In Om components the props are actually a cursor into the app state. Cursors are conceptually related to functional lenses and zippers.
It just means that Om component props internally maintain path information to determine their location in the app state. You can interact with them with many of the standard Clojure APIs. 

    (om/root app/app state {:target $el :opts {:comms comms}})

    (om/build sidebar/sidebar 
        {:channel (get-in app [:channels (:selected-channel app)])})
    (om/build main-area/main-area {:nav-list (get-in app [:nav-list])})

    (om/build navbar/navbar 
        (select-keys app [:nav-list :things :channels :settings]) 
        {:opts {:comms (:comms opts)}})    


OM has two levels of state, a global app state props, and local owner state.

Global app state prop is passed to component as MapCursor to app state. To mutate global state,
    
    (om/transact! app-state :prop (fn [old-state] ...))

Local component state is defined locally to component, component owner can set it state directly using set-state!.

OM passes Local component state as argument (owner) to component function. Component function can set local state to it or get local state that it stored from it later. For example, user input text box, etc.

    (defn set-state! ([owner korks v] ...))

You can also detach component function from dom target element, for example, login window.

    (om/detach-root login-el)

## CSS and Animations

We are using scss for our styling. `config.rb` specifies the input and out directories for scss and css. `compass compile` will generate css file to out/public directory so html can include those css directly.


1. The difference between animation and transform is that, animation will return to its original state after animation done, while transition will keep translated state.

   -webkit-animation with -webkit-keyframes Vs 
   -webkit-transition with -webkit-transform

2. We are using font awesome for small icons.

3. The order of css section matters. The bottom of css rules will be applied later than the rules ahead it. Hence, if you have general rules and specific rules applied after media query, place media query rules after general rules. Refer to .nav .ul.nav-ul and @media (min-width: 768){.nav .ul.nav-ul}

4. Relative position. We use absolution position for inner elements(nav list and sidebar list). We need to set position context for those inner elements inside their parents, li. using position:relative. So absolute position of inner element inside its parent, and parent set relative position context for inner element.

    .nav ul.nav-ul li { position: relative; }

5. How to nav bar to left side when screen is small and on top when screen is big.
The key is applying different css rules based on media query.

First, normally, div.nav { position: absolute; width: 230px; z-index: 0}
the main area z-index is 9000, so absolute left panel will be overlapped.

when @media (min-width: 768px), width is auto, no absolute position.
    { .nav {height:35px; width: auto; z-index:2000}}

When slide btn clicked, add .slide class, transform translateX to right shift.
    .slide-right .main-area,.slide-right .sidebar{ -webkit-transform:translateX(230px); }

6. Float left avatar and float:right timestamp.
   For each thing entry div, float:left avatar and float:right timestamp. 
   The middle div contains upper span of user name and lower span of content. both float:left to align left.


## Dommy

1. sel will is query selector all, while sel1 ret the first matching. (aget by-class 0)

2. selector can be either string or keyword.
    
    (sel1 :#person-title)
    (sel1 :.person-title)

3. For descendant class selector, use string class selector.

    (sel1 ".form-horizontal .person-title")
    (sel1 ".form-horizontal #person-title")
