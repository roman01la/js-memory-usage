external fun require(module:String):dynamic

fun <T> record(memwatch: dynamic, cnt: Int, fn: () -> T): Int {
    memwatch.gc()
    var hd = js("new memwatch.HeapDiff()")
    var arr: ArrayList<T> = ArrayList(0)
    var i = 0
    while (i < cnt) {
        arr.add(fn())
        i++
    }
    var diff = hd.end()
    return diff.change.size_bytes / cnt
}

fun <T> fill(cnt: Int, obj: T, fn: (T, Int) -> T): T {
    var i = 0
    var o = obj
    while (i < cnt) {
        o = fn(o, i)
        i++
    }
    return o
}

fun arrSet(arr: ArrayList<Int>, i: Int): ArrayList<Int> {
    arr.add(0)
    return arr
}

fun mapSet(map: HashMap<String, Int>, i: Int): HashMap<String, Int> {
    map.put("key-" + i, 0)
    return map
}

fun setSet(set: HashSet<Int>, i: Int): HashSet<Int> {
    set.add(i)
    return set
}

fun main(args: Array<String>): Unit {
    var memwatch: dynamic = require("memwatch-next")
    var results: HashMap<String, Int> = HashMap()

    results.put("empty ArrayList", record(memwatch, 1000, fun (): ArrayList<Int> { return ArrayList(0) }))
    results.put("empty HashMap", record(memwatch, 1000, fun (): HashMap<String, Int> { return HashMap() }))
    results.put("empty HashSet", record(memwatch, 1000, fun (): HashSet<Int> { return HashSet() }))

    results.put("10 item ArrayList", record(memwatch, 1000, fun (): ArrayList<Int> { return fill(10, ArrayList(0), ::arrSet) }))
    results.put("10 item HashMap", record(memwatch, 1000, fun (): HashMap<String, Int> { return fill(10, HashMap(), ::mapSet) }))
    results.put("10 item HashSet", record(memwatch, 1000, fun (): HashSet<Int> { return fill(10, HashSet(), ::setSet) }))

    results.put("100 item ArrayList", record(memwatch, 1000, fun (): ArrayList<Int> { return fill(100, ArrayList(0), ::arrSet) }))
    results.put("100 item HashMap", record(memwatch, 1000, fun (): HashMap<String, Int> { return fill(100, HashMap(), ::mapSet) }))
    results.put("100 item HashSet", record(memwatch, 1000, fun (): HashSet<Int> { return fill(100, HashSet(), ::setSet) }))

    results.put("1000 item ArrayList", record(memwatch, 1000, fun (): ArrayList<Int> { return fill(1000, ArrayList(0), ::arrSet) }))
    results.put("1000 item HashMap", record(memwatch, 1000, fun (): HashMap<String, Int> { return fill(1000, HashMap(), ::mapSet) }))
    results.put("1000 item HashSet", record(memwatch, 1000, fun (): HashSet<Int> { return fill(1000, HashSet(), ::setSet) }))

    println(results.toString())
}
