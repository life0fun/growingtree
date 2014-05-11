# growingtree-app

This directory contains re-implementation of growingtree app with OM.

For details of OM, please refer to my `omdoster` repo.


## CSS and Animations

1. The difference between animation and transform is that, animation will return to its original state after animation done, while transition will keep translated state.

   -webkit-animation with -webkit-keyframes Vs 
   -webkit-transition with -webkit-transform

2. we are using font awesome for small icons.

3. the order of css section matters. The bottom of css rules will be applied late. Hence, if you have general rules and specific rules applied after media query, place media query rules after general rules. Refer to .nav .ul.nav-ul and @media (min-width: 768){.nav .ul.nav-ul}