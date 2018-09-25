const memwatch = require("memwatch-next");
const { fsharp } = require("./build/main");

function record(count, fn) {
  memwatch.gc();
  let hd = new memwatch.HeapDiff();
  let arr = new Array();
  for (let i = 0; i < count; i++) arr.push(fn());
  let diff = hd.end();
  return diff.change.size_bytes / count;
}

let results = {};

results["empty array"] = fsharp.emptyArray;
results["10 items array"] = fsharp.array10;
results["100 items array"] = fsharp.array100;
results["1000 items array"] = fsharp.array1000;

results["empty list"] = fsharp.emptyList;
results["10 items list"] = fsharp.list10;
results["100 items list"] = fsharp.list100;
results["1000 items list"] = fsharp.list1000;

results["empty set"] = fsharp.emptySet;
results["10 items set"] = fsharp.set10;
results["100 items set"] = fsharp.set100;
results["1000 items set"] = fsharp.set1000;

results["empty map"] = fsharp.emptyMap;
results["10 items map"] = fsharp.map10;
results["100 items map"] = fsharp.map100;
results["1000 items map"] = fsharp.map1000;

results = Object.entries(results).reduce((ret, [k, fn]) => {
  ret[k] = record(1000, fn);
  return ret;
}, {});

console.log(JSON.stringify(results, null, 2));
