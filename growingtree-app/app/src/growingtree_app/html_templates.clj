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

  ; dtfn stands for dynamic template fn. tnodes is template nodes.
  ; dtfn creates template that can be udpated even after attached to DOM.
  {
   :login-page (tfn (tnodes "login.html" "login"))
   :home-page (dtfn (tnodes "growingtree-app.html" "homepage") #{})
   :thing (dtfn (tnodes "growingtree-app.html" "thing") #{:id})
   :thing-thumbnail (dtfn (tnodes "growingtree-app.html" "thing-thumbnail") #{:href})
   :thing-entry (dtfn (tnodes "growingtree-app.html" "thing-thumbnail") #{:href})
   :toprow (dtfn (tnodes "growingtree-app.html" "toprow") #{:id})
   :sublist-entry (dtfn (tnodes "growingtree-app.html" "sublistentry") #{})
   :assignment-form (dtfn (tnodes "growingtree-app.html" "assignment-form") #{})
  })
