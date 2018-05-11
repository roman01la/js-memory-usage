type memwatch;

type heapDiff = {. "change": {. "size_bytes": int}};

class type _heap =
  [@bs]
  {
    pub end_: unit => heapDiff
  };

type heap = Js.t(_heap);

[@bs.module "../../../../src/reason/memw"] external gc : unit => unit = "gc";

type _global = {. [@bs.set] "name": int};

[@bs.val] external global : _global = "global";

[@bs.new] [@bs.module "../../../../src/reason/memw"]
external heapDiff : unit => heap = "HeapDiff";

module TestMap = Map.Make(String);

module TestSet = Set.Make(String);

let rec fillTestList = (l, from, cnt, f) =>
  if (from < cnt) {
    fillTestList(List.append(l, [f()]), from + 1, cnt, f);
  } else {
    l;
  };

let record = (cnt, f) => {
  gc();
  let hd = heapDiff();
  let arr = fillTestList([], 0, 1000, f);
  let diff = hd##end_();
  /* trick BS to hold arr in memory  */
  global##name#=(List.length(arr));
  diff##change##size_bytes / cnt;
};

let rec fillHashtbl = (cnt, obj) =>
  if (cnt > 0) {
    Hashtbl.add(obj, "key-" ++ string_of_int(cnt), cnt);
    fillHashtbl(cnt - 1, obj);
  } else {
    obj;
  };

let rec fillList = (cnt, obj) =>
  if (cnt > 0) {
    fillList(cnt - 1, List.append([cnt], obj));
  } else {
    obj;
  };

let rec fillMap = (cnt, obj) =>
  if (cnt > 0) {
    fillMap(cnt - 1, TestMap.add("key-" ++ string_of_int(cnt), cnt, obj));
  } else {
    obj;
  };

let rec fillSet = (cnt, obj) =>
  if (cnt > 0) {
    fillSet(cnt - 1, TestSet.add(string_of_int(cnt), obj));
  } else {
    obj;
  };

let rec fillArr = (cnt, obj) =>
  if (cnt > 0) {
    obj[cnt - 1] = cnt;
    fillArr(cnt - 1, obj);
  } else {
    obj;
  };

let results = {
  "empty List": record(1000, () => []),
  "empty Array": record(1000, () => Array.make(0, 0)),
  "empty Set": record(1000, () => TestSet.empty),
  "empty Map": record(1000, () => TestMap.empty),
  "empty Hashtbl": record(1000, () => Hashtbl.create(0)),
  "10 item List": record(1000, () => fillList(10, [])),
  "10 item Array": record(1000, () => fillArr(10, Array.make(10, 0))),
  "10 item Set": record(1000, () => fillSet(10, TestSet.empty)),
  "10 item Map": record(1000, () => fillMap(10, TestMap.empty)),
  "10 item Hashtbl": record(1000, () => fillHashtbl(10, Hashtbl.create(0))),
  "100 item List": record(1000, () => fillList(100, [])),
  "100 item Array": record(1000, () => fillArr(100, Array.make(100, 0))),
  "100 item Set": record(1000, () => fillSet(100, TestSet.empty)),
  "100 item Map": record(1000, () => fillMap(100, TestMap.empty)),
  "100 item Hashtbl":
    record(1000, () => fillHashtbl(100, Hashtbl.create(0))),
  "1000 item List": record(1000, () => fillList(1000, [])),
  "1000 item Array": record(1000, () => fillArr(1000, Array.make(1000, 0))),
  "1000 item Set": record(1000, () => fillSet(1000, TestSet.empty)),
  "1000 item Map": record(1000, () => fillMap(1000, TestMap.empty)),
  "1000 item Hashtbl":
    record(1000, () => fillHashtbl(1000, Hashtbl.create(0))),
};

Js.log(Js.Json.stringifyAny(results));