@JS()
library test;

import 'package:js/js.dart';

@JS()
external dynamic require(String id);

@JS("JSON.stringify")
external String stringify(obj);

final memwatch = require("memwatch-next");

int record(cnt, fn) {
  memwatch.gc();
  final hd = new memwatch.HeapDiff();
  final arr = [];
  for (var i = 0; i < cnt; i++) {
    arr.add(fn());
  }
  final diff = hd.end();
  return diff.change.size_bytes / cnt;
}

fill(cnt, obj, fn) {
  for (var i = 0; i < cnt; i++) {
    fn(obj, i);
  }
  return obj;
}

void listSet(l, i) {
  l.add(0);
}

void setSet(l, i) {
  l.add(i);
}

void mapSet(m, i) {
  m["key-" + i] = 0;
}

void main() {
  final results = {};

  results["empty list"] = record(1000, () => []);
  results["empty set"] = record(1000, () => new Set());
  results["empty map"] = record(1000, () => {});

  // results["10 item list"] = record(1000, () => fill(10, [], listSet));
  // results["10 item set"] = record(1000, () => fill(10, new Set(), setSet));
  // results["10 item map"] = record(1000, () => fill(10, {}, mapSet));
  //
  // results["100 item list"] = record(1000, () => fill(100, [], listSet));
  // results["100 item set"] = record(1000, () => fill(10, new Set(), setSet));
  // results["100 item map"] = record(1000, () => fill(100, {}, mapSet));
  //
  // results["1000 item list"] = record(1000, () => fill(1000, [], listSet));
  // results["1000 item set"] = record(1000, () => fill(10, new Set(), setSet));
  // results["1000 item map"] = record(1000, () => fill(1000, {}, mapSet));

  print(stringify(results));
}
