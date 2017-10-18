const memwatch = require('memwatch-next');

function record(msg, count, fn) {
  memwatch.gc();
  let hd = new memwatch.HeapDiff();
  let arr = new Array();
  for (let i = 0; i < count; i++) arr.push(fn());
  let diff = hd.end();
  saveResult(msg, diff.change.size_bytes / count);
}

const results = {};

function saveResult(k, v) {
  results[k] = v;
}

function printResult() {
  console.log(JSON.stringify(results, null, 2));
}

module.exports = {
  record: record,
  printResult: printResult
};
