(defproject growingtree "0.0.1-SNAPSHOT"
  :description "growingtree app"
  :url "http://github.com/life0fun/growingtree"
  :plugins [[com.cemerick/clojurescript.test "0.2.2"]
            [hiccup-bridge "1.0.0-SNAPSHOT"]
            [lein-cljsbuild "1.0.3"]]
  :license {:name "private"
            :distribution :none}

  :jvm-opts ^:replace ["-Xms2G" "-Xmx4G" "-server"]

  :dependencies [[ankha "0.1.1"]
                 [com.facebook/react "0.8.0.1"]
                 [hiccup-bridge "1.0.0-SNAPSHOT"]
                 ;[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojure "1.7.0-alpha5"]
                 ;[org.clojure/clojurescript "0.0-2277"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [tailrecursion/cljs-priority-map "1.1.0"]
                 [org.clojure/data.priority-map "0.0.5"]

                 ;[org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/core.match "0.3.0-alpha4"]

                 [om "0.7.1"]
                 [prismatic/dommy "0.1.2"]
                 [sablono "0.2.6"]
                 [secretary "1.2.1"]

                 [com.taoensso/sente "1.3.0"]  ; sente websocket and ajax.
                 [com.cognitect/transit-clj  "0.8.259"]
                 [com.cognitect/transit-cljs "0.8.205"]

                 [cljs-ajax "0.2.4"]  ; cljs ajax client
		             [com.andrewmcveigh/cljs-time "0.1.4"]  ; cljs-time mimic clj-time joda
                 [ch.qos.logback/logback-classic "1.0.7" :exclusions [org.slf4j/slf4j-api]]
                ]

  :source-paths ["src" "yaks/om/src" "yaks/sablono/src" "target/generated/clj" "assets"]

  :cljsbuild {:test-commands {"unit-tests" ["runners/phantomjs.js" :runner
                                            "window.literal_js_executed=true"
                                            "test-cljs/vendor/es5-shim.js"
                                            "test-cljs/vendor/es5-sham.js"
                                            "test-cljs/vendor/console-polyfill.js"
                                            "resources/private/js/unit-test.js"]} 
              :builds [{:id "dev"
                        :source-paths ["src" "assets"]
                        :compiler {:output-to "out/public/growingtree.dev.js"
                                   :output-dir "out/public"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "test"
                        :source-paths ["src" "test-cljs"]
                        :compiler {:pretty-print true
                                   :output-dir "resources/private/js/"
                                   :output-to "resources/private/js/unit-test.js"
                                   :preamble ["react/react.js"]
                                   :externs ["react/externs/react.js"]
                                   :optimizations :whitespace}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "growingtree.prod.js"
                                   :output-dir "out/prod"
                                   :optimizations :advanced
                                   :source-map "growingtree.prod.js.map"
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
