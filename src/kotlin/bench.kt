external fun require(module:String):dynamic

val hrtime: () -> Double = require("../../utils/time")

fun <T> bench(ds: String, op: String, coll: T, fn: (T) -> T): Unit {
  var i = 0;
  val s = hrtime();
  while (i < 1000000) {
      fn(coll);
      i++;
  }
  var t = hrtime() - s;
  println(ds + " " + op + " " + t.toString());
}

fun main(args: Array<String>): Unit {
  bench("array", "get", arrayListOf(1, 2, 3), fun (coll): ArrayList<Int> {
    coll.get(2);
    return coll;
  });
  bench("array", "set", arrayListOf(1, 2, 3), fun (coll): ArrayList<Int> {
    coll.add(4);
    return coll;
  });

  bench("map", "get", hashMapOf("foo" to 1, "bar" to 2), fun (coll): HashMap<String, Int> {
    coll.get("foo");
    return coll;
  });
  bench("map", "set", hashMapOf("foo" to 1, "bar" to 2), fun (coll): HashMap<String, Int> {
    coll.put("baz", 3);
    return coll;
  });
}
