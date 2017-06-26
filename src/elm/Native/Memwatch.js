const memwatch = require('memwatch-next');

var _user$project$Native_Memwatch = (function() {
  var record = function (count, thunk) {
    return _elm_lang$core$Native_Scheduler.nativeBinding(function (callback) {
      memwatch.gc();

      var heapDiff = new memwatch.HeapDiff(),
          accumulator = [];

      for (var i = 0; i < count; i++) {
        accumulator.push(thunk());
      }

      var diff = heapDiff.end();

      callback(_elm_lang$core$Native_Scheduler.succeed(diff.change.size_bytes / count));
    });
  };

  return {
    record: F2(record)
  }
})();
