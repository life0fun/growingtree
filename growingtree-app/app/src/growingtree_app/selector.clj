; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns ^:shared growingtree-app.selector
    (:require [io.pedestal.app.util.platform :as platform]))


; this module defines constants for adding class selectors or id selectors
; to manipulate with dom.

(def assign-link-prefix "assign-link-")
(def assign-form-prefix "assign-form-")

(def share-link-prefix "share-link-")

; class name for class selector
(defn assign-link
  [thing-id]
  (str assign-link-prefix thing-id))

; class name for assignment action bar
(defn assign-form
  "ret the class selector for assignment for in action bar"
  [thing-id]
  (str assign-form-prefix thing-id))


; class name for class selector
(defn share-link
  [thing-id]
  (str share-link-prefix thing-id))

