# growingtree-app

This directory contains re-implementation of growingtree app with OM.

For details of OM, please refer to my `omdoster` repo.


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

App component creates sub components. Om components like React components take props. In Om components the props are actually a cursor into the app state. Cursors are conceptually related to functional lenses and zippers.
It just means that Om component props internally maintain path information to determine their location in the app state. You can interact with them with many of the standard Clojure APIs. 

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

    (defn set-state! ([owner korks v] ...))


## CSS and Animations

1. The difference between animation and transform is that, animation will return to its original state after animation done, while transition will keep translated state.

   -webkit-animation with -webkit-keyframes Vs 
   -webkit-transition with -webkit-transform

2. We are using font awesome for small icons.

3. The order of css section matters. The bottom of css rules will be applied later than the rules ahead it. Hence, if you have general rules and specific rules applied after media query, place media query rules after general rules. Refer to .nav .ul.nav-ul and @media (min-width: 768){.nav .ul.nav-ul}

4. Relative position. We use absolution position for inner elements(nav list and sidebar list). We need to set position context for those inner elements inside their parents, li. using position:relative. So absolute position of inner element inside its parent, and parent set relative position context for inner element.

    .nav ul.nav-ul li { position: relative; }
