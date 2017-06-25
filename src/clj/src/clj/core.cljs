(ns clj.core
  (:require [cljs.nodejs :as node]))

(def memwatch (node/require "memwatch-next"))

(defn record [cnt f]
  (.gc memwatch)
  (let [hd (memwatch.HeapDiff.)
        arr #js []]
    (dotimes [i cnt] (.push arr (f)))
    (/ (.. (.end hd) -change -size_bytes) cnt)))

(defn fill [cnt obj f]
  (->> (range cnt)
       (reduce f obj)))

(defn vec-set [v _]
  (conj v 0))

(defn map-set [m i]
  (assoc m i 0))

(defn set-set [s i]
  (conj s i))

(defn -main [& args]
  (let [results (atom {})]
    (swap! results assoc "empty vector" (record 1000 (fn [] (vector))))
    (swap! results assoc "empty map" (record 1000 (fn [] (hash-map))))
    (swap! results assoc "empty set" (record 1000 (fn [] (hash-set))))

    (swap! results assoc "10 item vector" (record 1000 (fn [] (fill 10 (vector) vec-set))))
    (swap! results assoc "10 item map" (record 1000 (fn [] (fill 10 (hash-map) map-set))))
    (swap! results assoc "10 item set" (record 1000 (fn [] (fill 10 (hash-set) set-set))))

    (swap! results assoc "100 item vector" (record 1000 (fn [] (fill 100 (vector) vec-set))))
    (swap! results assoc "100 item map" (record 1000 (fn [] (fill 100 (hash-map) map-set))))
    (swap! results assoc "100 item set" (record 1000 (fn [] (fill 100 (hash-set) set-set))))

    (swap! results assoc "1000 item vector" (record 1000 (fn [] (fill 1000 (vector) vec-set))))
    (swap! results assoc "1000 item map" (record 1000 (fn [] (fill 1000 (hash-map) map-set))))
    (swap! results assoc "1000 item set" (record 1000 (fn [] (fill 1000 (hash-set) set-set))))

    (-> @results clj->js (js/JSON.stringify nil 2) console.log)))

(set! *main-cli-fn* -main)
