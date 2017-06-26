#lang racketscript/base

(require racketscript/interop)

(define obj-assign ($ 'global 'Object 'assign))
(define console ($ 'global 'console))
(define JSON ($ 'global 'JSON))

(define memwatch ($/require "memwatch-next"))

(define (record cnt f)
  (#js.memwatch.gc)
  (let ([hd ($/new #js.memwatch.HeapDiff)]
        [arr ($/array)])
   (for ([i (in-range 0 cnt)])
    (#js.arr.push (f)))
   (let ([diff (#js.hd.end)])
    (/ #js.diff.change.size_bytes cnt))))

(define (fill-hash cnt obj)
  (for ([i (in-range 0 cnt)])
    (set! obj (hash-set obj (string-append "key-" (number->string i) 0))))
  obj)

(define (fill-list cnt obj)
  (for ([i (in-range 0 cnt)])
    (set! obj (cons 0 obj)))
  obj)

(define results ($/obj))

(set! results (obj-assign results ($/obj ["empty vector" (record 1000 (lambda () (vector)))])))
(set! results (obj-assign results ($/obj ["empty hash map" (record 1000 (lambda () (hash)))])))
(set! results (obj-assign results ($/obj ["empty list" (record 1000 (lambda () (list)))])))

(set! results (obj-assign results ($/obj ["10 item vector" (record 1000 (lambda () (make-vector 10 0)))])))
(set! results (obj-assign results ($/obj ["10 item hash map" (record 1000 (lambda () (fill-hash 10 (hash))))])))
(set! results (obj-assign results ($/obj ["10 item list" (record 1000 (lambda () (fill-list 10 (list))))])))

(set! results (obj-assign results ($/obj ["100 item vector" (record 1000 (lambda () (make-vector 100 0)))])))
(set! results (obj-assign results ($/obj ["100 item hash map" (record 1000 (lambda () (fill-hash 100 (hash))))])))
(set! results (obj-assign results ($/obj ["100 item list" (record 1000 (lambda () (fill-list 100 (list))))])))

(set! results (obj-assign results ($/obj ["1000 item vector" (record 1000 (lambda () (make-vector 1000 0)))])))
(set! results (obj-assign results ($/obj ["1000 item hash map" (record 1000 (lambda () (fill-hash 1000 (hash))))])))
(set! results (obj-assign results ($/obj ["1000 item list" (record 1000 (lambda () (fill-list 1000 (list))))])))

($$ console.log ($$ JSON.stringify results))
