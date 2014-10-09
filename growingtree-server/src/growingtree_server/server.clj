(ns growingtree-server.server
  (:gen-class) ; for -main method in uberjar
  (:require [io.pedestal.service-tools.server :as server]
            [growingtree-server.service :as service]
            [io.pedestal.service-tools.dev :as dev]))

; project.clj alias run-dev to trampoline here to start service main.
(defn run-dev
  "The entry-point for 'lein run-dev'"
  [& args]
  (dev/init service/service #'service/routes)
  ; create db schema, enable this line and run lein run-dev to create schema.
  ; (service/create-schema)
  (apply dev/-main args)
  )

; service main, init web server and start web service.
(defn -main
  "init server as container to run service logic"
  [& args]
  (server/init service/service)
  (apply server/-main args))

;; Fns for use with io.pedestal.servlet.ClojureVarServlet

(defn servlet-init [this config]
  (server/init service/service)
  (server/servlet-init this config))

(defn servlet-destroy [this]
  (server/servlet-destroy this))

(defn servlet-service [this servlet-req servlet-resp]
  (server/servlet-service this servlet-req servlet-resp))
