(function (_, Kotlin) {
  'use strict';
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toString = Kotlin.toString;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var getCallableRef = Kotlin.getCallableRef;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function record(memwatch, cnt, fn) {
    memwatch.gc();
    var hd = new memwatch.HeapDiff();
    var arr = ArrayList_init(0);
    var i = 0;
    while (i < cnt) {
      arr.add_11rb$(fn());
      i = i + 1 | 0;
    }
    var diff = hd.end();
    return diff.change.size_bytes / cnt;
  }
  function fill(cnt, obj, fn) {
    var i = 0;
    var o = obj;
    while (i < cnt) {
      o = fn(o, i);
      i = i + 1 | 0;
    }
    return o;
  }
  function arrSet(arr, i) {
    arr.add_11rb$(i);
    return arr;
  }
  function mapSet(map, i) {
    map.put_xwzc9p$('key-' + toString(i), i);
    return map;
  }
  function setSet(set, i) {
    set.add_11rb$(i);
    return set;
  }
  function main$lambda() {
    var list = ArrayList_init(0);
    for (var index = 0; index < 0; index++) {
      list.add_11rb$(index);
    }
    return list;
  }
  function main$lambda_0() {
    return ArrayList_init(0);
  }
  function main$lambda_1() {
    return HashMap_init();
  }
  function main$lambda_2() {
    return HashSet_init();
  }
  function main$lambda_3() {
    var list = ArrayList_init(10);
    for (var index = 0; index < 10; index++) {
      list.add_11rb$(index);
    }
    return list;
  }
  function main$lambda_4() {
    return fill(10, ArrayList_init(0), getCallableRef('arrSet', function (arr, i) {
      return arrSet(arr, i);
    }));
  }
  function main$lambda_5() {
    return fill(10, HashMap_init(), getCallableRef('mapSet', function (map, i) {
      return mapSet(map, i);
    }));
  }
  function main$lambda_6() {
    return fill(10, HashSet_init(), getCallableRef('setSet', function (set, i) {
      return setSet(set, i);
    }));
  }
  function main$lambda_7() {
    var list = ArrayList_init(100);
    for (var index = 0; index < 100; index++) {
      list.add_11rb$(index);
    }
    return list;
  }
  function main$lambda_8() {
    return fill(100, ArrayList_init(0), getCallableRef('arrSet', function (arr, i) {
      return arrSet(arr, i);
    }));
  }
  function main$lambda_9() {
    return fill(100, HashMap_init(), getCallableRef('mapSet', function (map, i) {
      return mapSet(map, i);
    }));
  }
  function main$lambda_10() {
    return fill(100, HashSet_init(), getCallableRef('setSet', function (set, i) {
      return setSet(set, i);
    }));
  }
  function main$lambda_11() {
    var list = ArrayList_init(1000);
    for (var index = 0; index < 1000; index++) {
      list.add_11rb$(index);
    }
    return list;
  }
  function main$lambda_12() {
    return fill(1000, ArrayList_init(0), getCallableRef('arrSet', function (arr, i) {
      return arrSet(arr, i);
    }));
  }
  function main$lambda_13() {
    return fill(1000, HashMap_init(), getCallableRef('mapSet', function (map, i) {
      return mapSet(map, i);
    }));
  }
  function main$lambda_14() {
    return fill(1000, HashSet_init(), getCallableRef('setSet', function (set, i) {
      return setSet(set, i);
    }));
  }
  function main$lambda_15(f, v) {
    return v;
  }
  function main(args) {
    var memwatch = require('memwatch-next');
    var results = LinkedHashMap_init();
    results.put_xwzc9p$('empty List', record(memwatch, 1000, main$lambda));
    results.put_xwzc9p$('empty ArrayList', record(memwatch, 1000, main$lambda_0));
    results.put_xwzc9p$('empty HashMap', record(memwatch, 1000, main$lambda_1));
    results.put_xwzc9p$('empty HashSet', record(memwatch, 1000, main$lambda_2));
    results.put_xwzc9p$('10 item List', record(memwatch, 1000, main$lambda_3));
    results.put_xwzc9p$('10 item ArrayList', record(memwatch, 1000, main$lambda_4));
    results.put_xwzc9p$('10 item HashMap', record(memwatch, 1000, main$lambda_5));
    results.put_xwzc9p$('10 item HashSet', record(memwatch, 1000, main$lambda_6));
    results.put_xwzc9p$('100 item List', record(memwatch, 1000, main$lambda_7));
    results.put_xwzc9p$('100 item ArrayList', record(memwatch, 1000, main$lambda_8));
    results.put_xwzc9p$('100 item HashMap', record(memwatch, 1000, main$lambda_9));
    results.put_xwzc9p$('100 item HashSet', record(memwatch, 1000, main$lambda_10));
    results.put_xwzc9p$('1000 item List', record(memwatch, 1000, main$lambda_11));
    results.put_xwzc9p$('1000 item ArrayList', record(memwatch, 1000, main$lambda_12));
    results.put_xwzc9p$('1000 item HashMap', record(memwatch, 1000, main$lambda_13));
    results.put_xwzc9p$('1000 item HashSet', record(memwatch, 1000, main$lambda_14));
    println(JSON.stringify(json(copyToArray(toList(results)).slice()), main$lambda_15, '  '));
  }
  _.record_w3k0cn$ = record;
  _.fill_joeu6c$ = fill;
  _.arrSet_oou199$ = arrSet;
  _.mapSet_kp77vw$ = mapSet;
  _.setSet_2wm3ts$ = setSet;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('test', _);
  return _;
}(module.exports, require('kotlin')));
