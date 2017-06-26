module Test = {
  type memwatch;
  type heap;
  type global;
  external memwatch : memwatch = "memwatch-next" [@@bs.module];
  external global : global = "" [@@bs.val];
  external heapDiff : heap = "HeapDiff" [@@bs.module "memwatch-next"] [@@bs.new];
  external gc : memwatch => unit = "gc" [@@bs.send];
  external endMem : heap => Js.t {. change : Js.t {. size_bytes : int}} = "end" [@@bs.send];
  external setGlobal : global => int => unit = "name" [@@bs.set];
  module TestMap = Map.Make String;
  module TestSet = Set.Make String;
  let rec fillTestList l from cnt f =>
    if (from < cnt) {
      fillTestList (List.append l [f ()]) (from + 1) cnt f
    } else {
      l
    };
  let record cnt f => {
    gc memwatch;
    let hd = heapDiff;
    let arr = fillTestList [] 0 1000 f;
    let diff = endMem hd;
    /* trick BS to hold arr in memory  */
    setGlobal global (List.length arr);
    diff##change##size_bytes / cnt
  };
  let rec fillHashtbl cnt obj =>
    if (cnt > 0) {
      Hashtbl.add obj ("key-" ^ string_of_int cnt) 0;
      fillHashtbl (cnt - 1) obj
    } else {
      obj
    };
  let rec fillList cnt obj =>
    if (cnt > 0) {
      fillList (cnt - 1) (List.append [0] obj)
    } else {
      obj
    };
  let rec fillMap cnt obj =>
    if (cnt > 0) {
      fillMap (cnt - 1) (TestMap.add ("key-" ^ string_of_int cnt) 0 obj)
    } else {
      obj
    };
  let rec fillSet cnt obj =>
    if (cnt > 0) {
      fillSet (cnt - 1) (TestSet.add (string_of_int cnt) obj)
    } else {
      obj
    };
  let results = {
    "empty List": record 1000 (fun () => []),
    "empty Array": record 1000 (fun () => Array.make 0 0),
    "empty Set": record 1000 (fun () => TestSet.empty),
    "empty Map": record 1000 (fun () => TestMap.empty),
    "empty Hashtbl": record 1000 (fun () => Hashtbl.create 0),
    "10 item List": record 1000 (fun () => fillList 10 []),
    "10 item Array": record 1000 (fun () => Array.make 10 0),
    "10 item Set": record 1000 (fun () => fillSet 10 TestSet.empty),
    "10 item Map": record 1000 (fun () => fillMap 10 TestMap.empty),
    "10 item Hashtbl": record 1000 (fun () => fillHashtbl 10 (Hashtbl.create 0)),
    "100 item List": record 1000 (fun () => fillList 100 []),
    "100 item Array": record 1000 (fun () => Array.make 100 0),
    "100 item Set": record 1000 (fun () => fillSet 100 TestSet.empty),
    "100 item Map": record 1000 (fun () => fillMap 100 TestMap.empty),
    "100 item Hashtbl": record 1000 (fun () => fillHashtbl 100 (Hashtbl.create 0)),
    "1000 item List": record 1000 (fun () => fillList 1000 []),
    "1000 item Array": record 1000 (fun () => Array.make 1000 0),
    "1000 item Set": record 1000 (fun () => fillSet 1000 TestSet.empty),
    "1000 item Map": record 1000 (fun () => fillMap 1000 TestMap.empty),
    "1000 item Hashtbl": record 1000 (fun () => fillHashtbl 1000 (Hashtbl.create 0))
  };
  Js.log (Js.Json.stringifyAny results);
};
