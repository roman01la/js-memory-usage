(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'clj.core
   :output-dir "src/clj/out"
   :output-to "src/clj/test.js"
   :optimizations :simple
   :target :nodejs})
