(ns growingtree-app.html-templates
  (:use [io.pedestal.app.templates :only [render tfn dtfn tnodes template-children]])
  (:require [net.cgrand.enlive-html :as html]))


(defmacro growingtree-app-templates
  []
  ;; Extract the 'hello' template from the template file growingtree-app.html.
  ;; The 'dtfn' function will create a dynamic template which can be
  ;; updated after it has been attached to the DOM.
  ;;
  ;; The last argument to 'dtfn' is a set of fields that should be
  ;; treated as static fields (may only be set once). Dynamic templates
  ;; use ids to set values so you cannot dynamically set an id.
  {:home-page (dtfn (tnodes "growingtree-app.html" "homepage") #{})
   ;:toprow-node (dtfn (tnodes "growingtree-app.html" "toprow") #{})
   ;:sublist-entry (dtfn (tnodes "growingtree-app.html" "sublistentry") #{})
  })
