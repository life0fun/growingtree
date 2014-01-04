(ns growingtree-app.html-templates
  (:use [io.pedestal.app.templates :only [render tfn dtfn tnodes template-children]])
  (:require [net.cgrand.enlive-html :as html]))

;; upon any change on this file, we need to lein repl to retart the server
;; in order for the change to loaded.

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

  ; note that keyword :homepage, must match tnode name "homepage", for id to take effect.
  {
   :login (dtfn (tnodes "growingtree-app.html" "login") #{:id})
   :homepage (dtfn (tnodes "growingtree-app.html" "homepage") #{:id})
   :user (dtfn (tnodes "growingtree-app.html" "user") #{:id})
   :thing-details  (dtfn (tnodes "thing.html" "thing-details") #{:id})


   :thing-parent  (dtfn (tnodes "thing.html" "thing-parent") #{:id})
   :thing-child  (dtfn (tnodes "thing.html" "thing-child") #{:id})
   :thing-course  (dtfn (tnodes "thing.html" "thing-course") #{:id})
   :thing-lecture  (dtfn (tnodes "thing.html" "thing-lecture") #{:id})
   :thing-question  (dtfn (tnodes "thing.html" "thing-question") #{:id})
   :thing-assignment  (dtfn (tnodes "thing.html" "thing-assignment") #{:id})
   :thing-answer  (dtfn (tnodes "thing.html" "thing-answer") #{:id})
   :thing-comments  (dtfn (tnodes "thing.html" "thing-comments") #{:id})
   :thing-like  (dtfn (tnodes "thing.html" "thing-like") #{:id})
   :thing-timeline  (dtfn (tnodes "thing.html" "thing-timeline") #{:id})
   :thing-search  (dtfn (tnodes "thing.html" "thing-search") #{:id})


   :thing-thumbnail (dtfn (tnodes "growingtree-app.html" "thing-thumbnail") #{:href})
   :thing-entry (dtfn (tnodes "growingtree-app.html" "thing-entry") #{:href})
   :assign-form (dtfn (tnodes "growingtree-app.html" "assign-form") #{})

   
   :parent (dtfn (tnodes "newthing.html" "parent") #{:id})
   :child (dtfn (tnodes "newthing.html" "child") #{:id})
   :family (dtfn (tnodes "newthing.html" "family") #{:id})
   :course (dtfn (tnodes "newthing.html" "course") #{:id})
   :lecture (dtfn (tnodes "newthing.html" "lecture") #{:id})
   :question (dtfn (tnodes "newthing.html" "question") #{:id})
   :group (dtfn (tnodes "newthing.html" "group") #{:id})
   :comments (dtfn (tnodes "newthing.html" "comments") #{:id})
   :answer (dtfn (tnodes "newthing.html" "answer") #{:id})
  })
