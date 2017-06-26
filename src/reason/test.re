type memwatch;

type heap;

type global;

external memwatch : memwatch = "memwatch-next" [@@bs.module];

external global : global = "" [@@bs.val];

external heapDiff : heap = "HeapDiff" [@@bs.module "memwatch-next"] [@@bs.new];

external gc : memwatch => unit = "gc" [@@bs.send];

external endMem : heap => Js.t {. change : Js.t {. size_bytes : int}} = "end" [@@bs.send];

external setGlobal : global => int => unit = "name" [@@bs.set];

let recordHashtbl cnt f => {
  gc memwatch;
  let hd = heapDiff;
  let arr = Array.make 1000 (Hashtbl.create 0) |> Array.map (fun _ => f ());
  let diff = endMem hd;
  /* trick BS to hold arr in memory  */
  setGlobal global (Array.length arr);
  diff##change##size_bytes / cnt
};

let recordList cnt f => {
  gc memwatch;
  let hd = heapDiff;
  let arr = Array.make 1000 [] |> Array.map (fun _ => f ());
  let diff = endMem hd;
  /* trick BS to hold arr in memory  */
  setGlobal global (Array.length arr);
  diff##change##size_bytes / cnt
};

let recordArr cnt f => {
  gc memwatch;
  let hd = heapDiff;
  let arr = Array.make 1000 [||] |> Array.map (fun _ => f ());
  let diff = endMem hd;
  /* trick BS to hold arr in memory  */
  setGlobal global (Array.length arr);
  diff##change##size_bytes / cnt
};

let rec fillHashtbl cnt obj =>
  if (cnt > 0) {
    Hashtbl.add obj ("key-" ^ string_of_int cnt) 0;
    fillHashtbl (cnt - 1) obj
  } else {
    obj
  };

let rec fillArr from cnt obj =>
  if (from < cnt) {
    obj.(from) = 0;
    fillArr (from + 1) cnt obj
  } else {
    obj
  };

let rec fillList cnt obj =>
  if (cnt > 0) {
    fillList (cnt - 1) (List.append [0] obj)
  } else {
    obj
  };

let results = {
  "empty List": recordList 1000 (fun () => []),
  "empty Array": recordArr 1000 (fun () => Array.make 0 0),
  "empty Hashtbl": recordHashtbl 1000 (fun () => Hashtbl.create 0),
  "10 item List": recordList 1000 (fun () => fillList 10 []),
  "10 item Array": recordArr 1000 (fun () => fillArr 0 10 (Array.make 10 0)),
  "10 item Hashtbl": recordHashtbl 1000 (fun () => fillHashtbl 10 (Hashtbl.create 0)),
  "100 item List": recordList 1000 (fun () => fillList 100 []),
  "100 item Array": recordArr 1000 (fun () => fillArr 0 100 (Array.make 100 0)),
  "100 item Hashtbl": recordHashtbl 1000 (fun () => fillHashtbl 100 (Hashtbl.create 0)),
  "1000 item List": recordList 1000 (fun () => fillList 1000 []),
  "1000 item Array": recordArr 1000 (fun () => fillArr 0 1000 (Array.make 1000 0)),
  "1000 item Hashtbl": recordHashtbl 1000 (fun () => fillHashtbl 1000 (Hashtbl.create 0))
};

Js.log (Js.Json.stringifyAny results);
