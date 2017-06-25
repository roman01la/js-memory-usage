package main

import (
	"fmt"
	"strconv"

	"github.com/gopherjs/gopherjs/js"
)

var memwatch *js.Object = js.Global.Call("require", "memwatch-next")

func fillArr(cnt int) []int {
	coll := []int{}
	for i := 0; i < cnt; i++ {
		coll = append(coll, 0)
	}
	return coll
}

func recordArr(cnt int, fill int) int {
	memwatch.Call("gc")
	hd := memwatch.Get("HeapDiff").New()
	arr := [][]int{}
	for i := 0; i < cnt; i++ {
		arr = append(arr, fillArr(fill))
	}
	diff := hd.Call("end")
	size := diff.Get("change").Get("size_bytes").Int()
	return size / cnt
}

func fillMap(cnt int) map[string]int {
	coll := make(map[string]int)
	for i := 0; i < cnt; i++ {
		coll["key-"+strconv.Itoa(i)] = 0
	}
	return coll
}

func recordMap(cnt int, fill int) int {
	memwatch.Call("gc")
	hd := memwatch.Get("HeapDiff").New()
	arr := []map[string]int{}
	for i := 0; i < cnt; i++ {
		arr = append(arr, fillMap(fill))
	}
	diff := hd.Call("end")
	size := diff.Get("change").Get("size_bytes").Int()
	return size / cnt
}

func main() {

	results := make(map[string]int)

	results["empty array"] = recordArr(1000, 0)
	results["empty map"] = recordMap(1000, 0)

	results["10 item array"] = recordArr(1000, 10)
	results["10 item map"] = recordMap(1000, 10)

	results["100 item array"] = recordArr(1000, 100)
	results["100 item map"] = recordMap(1000, 100)

	results["1000 item array"] = recordArr(1000, 1000)
	results["1000 item map"] = recordMap(1000, 1000)

	fmt.Println(results)
}
