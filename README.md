# Data Structures Memory Usage in JavaScript

[Comparison chart](https://roman01la.github.io/js-memory-usage/)

- [JavaScript](#javascript)
- [ImmutableJS](#immutablejs)
- [ClojureScript](#clojurescript)
- [Kotlin](#kotlin)
- [GopherJS (Go)](#gopherjs-go)
- [RacketScript](#racketscript)
- [Reason (BuckleScript)](#reason-bucklescript)
- [Elm](#elm)
- [ElixirScript](#elixirscript)
- PureScript
- Dart
- Scala.js
- GHCJS (Haskell)
- ...

## How to add stats

_Stats for at least three types of data structures are required:_
- Indexed collection of values such as _Array_ or _Vector_
- Collection that maps keys to values such as _Map_ or _Record_
- Collection of unique values — _Set_


1. See how test code is implemented in other languages
2. Implement test code in lang _X_
3. Put sources in a directory in `src`
4. Write NPM build script using this template: `"build:[lang]": "[build cmd]"`
5. Write NPM test script using this template: `"run:[lang]": "node src/[lang]/test.js > out/[lang].json"`
6. Run test script
7. Add results to `README.md`
8. Submit a PR

## JavaScript
```json
{
  "empty object": 70.192,
  "empty array": 93.04,
  "empty map": 196.32,
  "empty set": 166.64,

  "10 items object": 143.552,
  "10 items array": 246.152,
  "10 items map": 882.304,
  "10 items set": 431.76,

  "100 items object": 6242.864,
  "100 items array": 1341.864,
  "100 items map": 6869.504,
  "100 items set": 2645.504,

  "1000 items object": 98685.52,
  "1000 items array": 11597.864,
  "1000 items map": 60768.392,
  "1000 items set": 20563.264
}
```

## ImmutableJS
```json
{
  "empty list": 19.904,
  "empty map": 23.16,
  "empty set": 23.192,

  "10 items list": 641.752,
  "10 items map": 1901.608,
  "10 items set": 1578.704,

  "100 items list": 2647.36,
  "100 items map": 17411.496,
  "100 items set": 15679.656,

  "1000 items list": 20485.224,
  "1000 items map": 182600.704,
  "1000 items set": 123834.648
}

```

## ClojureScript
```json
{
  "empty list": 8.936,
  "empty vector": 11.776,
  "empty map": 11.368,
  "empty set": 11.368,

  "10 items list": 783.92,
  "10 items vector": 286.744,
  "10 items map": 1366.72,
  "10 items set": 732.528,

  "100 items list": 7239.256,
  "100 items vector": 1600.8,
  "100 items map": 8896.968,
  "100 items set": 5402.552,

  "1000 items list": 72040.64,
  "1000 items vector": 11235.368,
  "1000 items map": 121328.16,
  "1000 items set": 123852.92
}

```

## Kotlin
```json
{
  "empty List": 117.872,
  "empty ArrayList": 107.24,
  "empty HashMap": 454.968,
  "empty HashSet": 497.112,

  "10 items List": 252,
  "10 items ArrayList": 262.624,
  "10 items HashMap": 1725.72,
  "10 items HashSet": 1072.216,

  "100 items List": 1165.448,
  "100 items ArrayList": 1166.744,
  "100 items HashMap": 20542.936,
  "100 items HashSet": 5630.728,

  "1000 items List": 9692.632,
  "1000 items ArrayList": 9695.568,
  "1000 items HashMap": 121960.52,
  "1000 items HashSet": 50820.536
}
```

## GopherJS (Go)
```json
{
  "empty array": 267,
  "empty map": 74,

  "10 items array": 385,
  "10 items map": 961,

  "100 items array": 781,
  "100 items map": 13474,

  "1000 items array": 4344,
  "1000 items map": 170444
}
```

## RacketScript
```json
{
  "empty list": 20.104,
  "empty vector": 138.48,
  "empty hash map": 235.8,

  "10 items list": 606.568,
  "10 items vector": 285.048,
  "10 items hash map": 1645.144,

  "100 items list": 5637.992,
  "100 items vector": 1234.384,
  "100 items hash map": 13579.56,

  "1000 items list": 55971,
  "1000 items vector": 10428.632,
  "1000 items hash map": 146484.752
}
```

## Reason (BuckleScript)
```json
{
  "empty List": 84,
  "empty Array": 145,
  "empty Set": 71,
  "empty Map": 71,
  "empty Hashtbl": 346,

  "10 items List": 720,
  "10 items Array": 207,
  "10 items Set": 975,
  "10 items Map": 1363,
  "10 items Hashtbl": 1443,

  "100 items List": 6480,
  "100 items Array": 927,
  "100 items Set": 8082,
  "100 items Map": 12081,
  "100 items Hashtbl": 11165,

  "1000 items List": 64073,
  "1000 items Array": 8122,
  "1000 items Set": 80404,
  "1000 items Map": 120077,
  "1000 items Hashtbl": 108343
}
```

## Elm
```json
{
  "empty list": 43.776,
  "empty array": 11.456,
  "empty dict": 11.368,
  "empty set": 11.424,

  "10 items list": 524.696,
  "10 items array": 208.288,
  "10 items dict": 1076.36,
  "10 items set": 1114.608,

  "100 items list": 4851.144,
  "100 items array": 1267.408,
  "100 items dict": 10436.36,
  "100 items set": 10475.792,

  "1000 items list": 48046.928,
  "1000 items array": 11220.536,
  "1000 items dict": 104329.2,
  "1000 items set": 104248.064
}
```

## ElixirScript
```json
{
  "empty list": 47.344,
  "empty tuple": 88.704,
  "empty map": 198.816,
  "empty set": 624.12,

  "10 items list": 216.568,
  "10 items tuple": 546.928,
  "10 items map": 872.704,
  "10 items set": 1062.192,

  "100 items list": 872.928,
  "100 items tuple": 6290.04,
  "100 items map": 6874.008,
  "100 items set": 7063.624,

  "1000 items list": 8063.992,
  "1000 items tuple": 49294.264,
  "1000 items map": 61026.544,
  "1000 items set": 60951.72
}
```
