# growingtree-app

This directory contains re-implementation of growingtree app with OM.

For details of OM, please refer to my `omdoster` repo.


## OM Application Architecture

OM application is built from the following basic components:

1. the core module creates main app component, which corresponds to the main component of single page app.

2. core create control and api channels. The channles are data flow objects, and included into global app state, and pass around to all components.

3. Main component creates all needed sub components, nav bar, side bar, content, etc.

4. sub components send UI click event to chann, and core go-loop processing chan event.

5. core creates named route to transform click event into route change event, and invoke the corresponding handler, return the new route path.

6. core set window navigation location with the new route, hence navigation history is preserved.


## CSS and Animations

1. The difference between animation and transform is that, animation will return to its original state after animation done, while transition will keep translated state.

   -webkit-animation with -webkit-keyframes Vs 
   -webkit-transition with -webkit-transform

2. We are using font awesome for small icons.

3. The order of css section matters. The bottom of css rules will be applied later than the rules ahead it. Hence, if you have general rules and specific rules applied after media query, place media query rules after general rules. Refer to .nav .ul.nav-ul and @media (min-width: 768){.nav .ul.nav-ul}

4. Relative position. We use absolution position for inner elements(nav list and sidebar list). We need to set position context for those inner elements inside their parents, li. using position:relative. So absolute position of inner element inside its parent, and parent set relative position context for inner element.

    .nav ul.nav-ul li { position: relative; }
