const memwatch = require('memwatch-next');

function record(count, fn) {
  memwatch.gc();
  let hd = new memwatch.HeapDiff();
  let arr = new Array();
  for (let i = 0; i < count; i++) arr.push(fn());
  let diff = hd.end();
  return diff.change.size_bytes / count;
}

function fill(count, obj, fn) {
  for (let i = 0; i < count; i++) fn(obj, i);
  return obj;
}

let results = {};

// Tests:

results['empty object'] = record(1000, () => new Object());
results['empty array'] = record(1000, () => new Array());
results['empty map'] = record(1000, () => new Map());
results['empty set'] = record(1000, () => new Set());

function objSet(obj, i) { obj['key-' + i] = 0; }
function arrSet(arr, i) { arr.push(0); }
function mapSet(map, i) { map.set('key-' + i, 0); }
function setSet(set, i) { set.add(i); }

results['10 item object'] = record(1000, () => fill(10, new Object(), objSet));
results['10 item array'] = record(1000, () => fill(10, new Array(), arrSet));
results['10 item map'] = record(1000, () => fill(10, new Map(), mapSet));
results['10 item set'] = record(1000, () => fill(10, new Set(), setSet));

results['100 item object'] = record(1000, () => fill(100, new Object(), objSet));
results['100 item array'] = record(1000, () => fill(100, new Array(), arrSet));
results['100 item map'] = record(1000, () => fill(100, new Map(), mapSet));
results['100 item set'] = record(1000, () => fill(100, new Set(), setSet));

results['1000 item object'] = record(1000, () => fill(1000, new Object(), objSet));
results['1000 item array'] = record(1000, () => fill(1000, new Array(), arrSet));
results['1000 item map'] = record(1000, () => fill(1000, new Map(), mapSet));
results['1000 item set'] = record(1000, () => fill(1000, new Set(), setSet));

console.log(JSON.stringify(results, null, 2));
