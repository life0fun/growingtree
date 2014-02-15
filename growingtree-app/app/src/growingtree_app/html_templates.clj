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

  ; dtfn takes two arguments, the sequence of nodes and a set of static fields. 
  ; Static fields can be set once when the template is first added to the DOM, 
  ; but they cannot be changed later. All div ids must be static ids.
  ;
  ; (use 'growingtree-app.html-templates)
  ; (def t (growingtree-app-templates))
  ; (def c (:thing-course t))
  ; (let [[_ ctor] (c)] (ctor {:id "1" :child-form-id "34" :child-form-class "rrr"}))

  ; note that keyword :homepage, must match tnode name "homepage", for id to take effect.
  {
   :login (dtfn (tnodes "growingtree-app.html" "login") #{:id})
   :homepage (dtfn (tnodes "growingtree-app.html" "homepage") #{:id})
   :user (dtfn (tnodes "growingtree-app.html" "user") #{:id})
   

   :thing-parent  (dtfn (tnodes "thing.html" "thing-parent") #{:id :child-form-id})
   :thing-child  (dtfn (tnodes "thing.html" "thing-child") #{:id :child-form-id})
   :thing-course  (dtfn (tnodes "thing.html" "thing-course") #{:id :child-form-id})
   :thing-lecture  (dtfn (tnodes "thing.html" "thing-lecture") #{:id :child-form-id})
   :thing-question  (dtfn (tnodes "thing.html" "thing-question") #{:id :child-form-id})
   :thing-assignment  (dtfn (tnodes "thing.html" "thing-assignment") #{:id :child-form-id})
   :thing-answer  (dtfn (tnodes "thing.html" "thing-answer") #{:id :child-form-id})
   :thing-comments  (dtfn (tnodes "thing.html" "thing-comments") #{:id :child-form-id})
   :thing-group  (dtfn (tnodes "thing.html" "thing-group") #{:id :child-form-id})
   :thing-like  (dtfn (tnodes "thing.html" "thing-like") #{:id :origin-title-id})
   :thing-timeline  (dtfn (tnodes "thing.html" "thing-timeline") #{:id})
   :thing-search  (dtfn (tnodes "thing.html" "thing-search") #{:id :origin-title-id})

   
   ; add thing forms, we already have assignment form for assignment details
   :thing-details  (dtfn (tnodes "thing.html" "thing-details") #{:id})
   :enrollment-form (dtfn (tnodes "thing.html" "enrollment-form") #{:id :enrollment-name :enrollment-remarks})
   :assign-form (dtfn (tnodes "thing.html" "assign-form") #{:id :assign-name :assign-hint :assign-end :picker-assign-end})
   :answer-form (dtfn (tnodes "thing.html" "answer-form") #{:id :answer-title})
   :grade-form (dtfn (tnodes "thing.html" "grade-form") #{:id :grade-score :grade-comments})
   :join-group-form (dtfn (tnodes "thing.html" "join-group-form") #{:id :join-group-name :join-group-remarks})

   ; new thing forms
   :parent-form (dtfn (tnodes "newthing.html" "parent-form") #{:id})
   :child-form (dtfn (tnodes "newthing.html" "child-form") #{:id})
   :family-form (dtfn (tnodes "newthing.html" "family-form") #{:id})
   :course-form (dtfn (tnodes "newthing.html" "course-form") #{:id})
   :lecture-form (dtfn (tnodes "newthing.html" "lecture-form") #{:id})
   :question-form (dtfn (tnodes "newthing.html" "question-form") #{:id})
   :assignment-form (dtfn (tnodes "newthing.html" "assignment-form") #{:id})
   :group-form (dtfn (tnodes "newthing.html" "group-form") #{:id})
   :comments-form (dtfn (tnodes "newthing.html" "comments-form") #{:id})
  })
