(ns growingtree-app.html-templates
  (:use [io.pedestal.app.templates :only [render tfn dtfn tnodes template-children]])
  (:require [net.cgrand.enlive-html :as html]))


(defmacro growingtree-app-templates
  []
  ;; Extract the 'hello' template from the template file growingtree-app.html.
  ;; The 'dtfn' function will create a dynamic template which can be
  ;; updated after it has been attached to the DOM.
  ;;
  ;; To see how this template is used, refer to
  ;;
  ;; app/src/growingtree_app/rendering.cljs
  ;;
  ;; The last argument to 'dtfn' is a set of fields that should be
  ;; treated as static fields (may only be set once). Dynamic templates
  ;; use ids to set values so you cannot dynamically set an id.
  {:index-page (dtfn (tnodes "growingtree-app.html" "course") #{})
   :lecture-page (dtfn (tnodes "growingtree-app.html" "lectures") #{})})

