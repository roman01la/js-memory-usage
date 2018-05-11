const m = require("memwatch-next");
m.HeapDiff.prototype.end_ = m.HeapDiff.prototype.end;
module.exports = m;
