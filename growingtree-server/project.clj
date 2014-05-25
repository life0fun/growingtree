(defproject growingtree-server "0.0.1-SNAPSHOT"
  :description "growingtree server"
  :license {:name "private"
            :distribution :none}
  :url "http://growingtree.com"
  :license {:name "copyright reserved !" }

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]

                 [io.pedestal/pedestal.service "0.2.2"]
                 [io.pedestal/pedestal.service-tools "0.2.2"]

                 ;; Remove this line and uncomment the next line to
                 ;; use Tomcat instead of Jetty:
                 [io.pedestal/pedestal.jetty "0.2.2"]
                 ;; [io.pedestal/pedestal.tomcat "0.2.1"]

                 ;; log4js
                 [ch.qos.logback/logback-classic "1.0.7"]
                 [org.slf4j/jul-to-slf4j "1.7.2"]
                 [org.slf4j/jcl-over-slf4j "1.7.2"]
                 [org.slf4j/log4j-over-slf4j "1.7.2"]

                 ; datamoc !
                 ;[com.datomic/datomic-free "0.8.4215"]
                 [org.clojure/java.jdbc "0.0.6"]
                 [mysql/mysql-connector-java "5.1.6"]
                 [com.datomic/datomic-pro "0.9.4755"]
                 [datomic-schema "1.0.2"]  ; macro for db schema

                 [clj-redis "0.0.12"]
                 [org.clojure/data.json "0.2.2"]    ; json package]
                 [clj-time "0.5.1"]       ; clj-time wraps Joda time
                ]
  :plugins [[lein-pprint "1.1.1"]
            [lein-datomic "0.2.0"]] ; do not use lein-datomic plugin, sucks!
  ;; These repositories will be searched for :dependencies and
  ;; :plugins and will also be available to deploy to.
  :repositories [["my.datomic.com" {:url "https://my.datomic.com/repo"
                                    :creds :gpg}]]
  
  ; build profile setting, lein with-profile :dev run-dev
  :profiles {
    :dev {
      :source-paths ["dev"]
      ; lein datomic sucks ! do not use it. directly launch bin/transactor
      :datomic {
        :config "config/sql-transactor-template.properties"
        :db-uri "datomic:sql://colorcloud?jdbc:mysql://localhost:3306/datomic?user=datomic&password=datomic"
      }
    }}

  :min-lein-version "2.0.0"
  :resource-paths ["config", "resources"]
  :aliases {"run-dev" ["trampoline" "run" "-m" "growingtree-server.server/run-dev"]}
  :repl-options  {:init-ns user
                  :init (try
                          (use 'io.pedestal.service-tools.dev)
                          (require 'growingtree-server.service)
                          ;; Nasty trick to get around being unable to reference non-clojure.core symbols in :init
                          (eval '(init growingtree-server.service/service #'growingtree-server.service/routes))
                          (catch Throwable t
                            (println "ERROR: There was a problem loading io.pedestal.service-tools.dev")
                            (clojure.stacktrace/print-stack-trace t)
                            (println)))
                  :welcome (println "Welcome to pedestal-service! Run (tools-help) to see a list of useful functions.")}
  :main ^{:skip-aot true} growingtree-server.server)
