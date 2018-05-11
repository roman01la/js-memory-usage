(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var hrtime;
  function bench(ds, op, coll, fn) {
    var i = 0;
    var s = hrtime();
    while (i < 1000000) {
      fn(coll);
      i = i + 1 | 0;
    }
    var t = hrtime() - s;
    println(ds + ' ' + op + ' ' + t.toString());
  }
  function main$lambda(coll) {
    coll.get_za3lpa$(1);
    return coll;
  }
  function main$lambda_0(coll) {
    coll.add_11rb$(1);
    return coll;
  }
  function main$lambda_1(coll) {
    coll.get_11rb$('foo');
    return coll;
  }
  function main$lambda_2(coll) {
    coll.put_xwzc9p$('baz', 3);
    return coll;
  }
  function main(args) {
    bench('array', 'get', arrayListOf([1, 2, 3]), main$lambda);
    bench('array', 'set', arrayListOf([1, 2, 3]), main$lambda_0);
    bench('map', 'get', hashMapOf([to('foo', 1), to('bar', 2)]), main$lambda_1);
    bench('map', 'set', hashMapOf([to('foo', 1), to('bar', 2)]), main$lambda_2);
  }
  Object.defineProperty(_, 'hrtime', {
    get: function () {
      return hrtime;
    }
  });
  _.bench_pxlyaw$ = bench;
  _.main_kand9s$ = main;
  hrtime = require('../../utils/time');
  main([]);
  Kotlin.defineModule('bench', _);
  return _;
}(module.exports, require('kotlin')));
