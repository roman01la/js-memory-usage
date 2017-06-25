const memwatch = require('memwatch-next');
const Immutable = require('immutable');

function record(count, fn) {
  memwatch.gc();
  let hd = new memwatch.HeapDiff();
  let arr = new Array();
  for (let i = 0; i < count; i++) arr.push(fn());
  let diff = hd.end();
  return diff.change.size_bytes / count;
}

function fill(count, obj, fn) {
  let out = obj;
  for (let i = 0; i < count; i++) {
    out = fn(out, i);
  };
  return out;
}

let results = {};

// Tests:

results['empty list'] = record(1000, () => Immutable.List());
results['empty map'] = record(1000, () => Immutable.Map());
results['empty set'] = record(1000, () => Immutable.Set());

function listSet(list, i) { return list.push(0); }
function mapSet(map, i) { return map.set(i, 0); }
function setSet(set, i) { return set.add(i); }

results['10 item list'] = record(100000, () => fill(10, Immutable.List(), listSet));
results['10 item map'] = record(100000, () => fill(10, Immutable.Map(), mapSet));
results['10 item set'] = record(100000, () => fill(10, Immutable.Set(), setSet));

results['100 item list'] = record(10000, () => fill(100, Immutable.List(), listSet));
results['100 item map'] = record(10000, () => fill(100, Immutable.Map(), mapSet));
results['100 item set'] = record(10000, () => fill(100, Immutable.Set(), setSet));

results['1000 item list'] = record(1000, () => fill(1000, Immutable.List(), listSet));
results['1000 item map'] = record(1000, () => fill(1000, Immutable.Map(), mapSet));
results['1000 item set'] = record(1000, () => fill(1000, Immutable.Set(), setSet));

console.log(JSON.stringify(results, null, 2));
