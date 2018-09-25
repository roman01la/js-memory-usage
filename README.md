# Data Structures Memory Usage in JavaScript

[Comparison chart](https://roman01la.github.io/js-memory-usage/)

* [JavaScript](#javascript)
* [ImmutableJS](#immutablejs)
* [ClojureScript](#clojurescript)
* [Kotlin](#kotlin)
* [GopherJS (Go)](#gopherjs-go)
* [RacketScript](#racketscript)
* [Reason (BuckleScript)](#reason-bucklescript)
* [Elm](#elm)
* [ElixirScript](#elixirscript)
* [F# (Fable)](#f-fable)
* PureScript
* Dart
* Scala.js
* GHCJS (Haskell)
* ...

## How to add stats

_Stats for at least three types of data structures are required:_

* Indexed collection of values such as _Array_ or _Vector_
* Collection that maps keys to values such as _Map_ or _Record_
* Collection of unique values — _Set_

1.  See how test code is implemented in other languages
2.  Implement test code in lang _X_
3.  Put sources in a directory in `src`
4.  Write NPM build script using this template: `"build:[lang]": "[build cmd]"`
5.  Write NPM test script using this template: `"run:[lang]": "node src/[lang]/test.js > out/[lang].json"`
6.  Run test script
7.  Add results to `README.md`
8.  Submit a PR

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

_v4.0.0-rc.9_

```json
{
  "empty list": 16.216,
  "empty map": 14.592,
  "empty set": 14.16,

  "10 item list": 570.944,
  "10 item map": 1813.28,
  "10 item set": 1518.16,

  "100 item list": 2618.096,
  "100 item map": 17392.312,
  "100 item set": 15664.728,

  "1000 item list": 20438.92,
  "1000 item map": 182587.248,
  "1000 item set": 123816.36
}
```

## ClojureScript

_v1.10.238_

```json
{
  "empty list": 10.92,
  "empty vector": 10.824,
  "empty map": 10.696,
  "empty set": 10.696,

  "10 item list": 749.56,
  "10 item vector": 255.928,
  "10 item map": 980,
  "10 item set": 538.616,

  "100 item list": 7215.912,
  "100 item vector": 1576.528,
  "100 item map": 6316.848,
  "100 item set": 5744.136,

  "1000 item list": 72015.488,
  "1000 item vector": 11224.8,
  "1000 item map": 102349.784,
  "1000 item set": 140320.296
}
```

## Kotlin

_v1.2.41_

```json
{
  "empty List": 101.344,
  "empty ArrayList": 99.144,
  "empty HashMap": 322.904,
  "empty HashSet": 380.688,

  "10 item List": 253.648,
  "10 item ArrayList": 255.6,
  "10 item HashMap": 1580.992,
  "10 item HashSet": 942.296,

  "100 item List": 1238.616,
  "100 item ArrayList": 1237.784,
  "100 item HashMap": 14366.752,
  "100 item HashSet": 5535.496,

  "1000 item List": 10430.664,
  "1000 item ArrayList": 10431.176,
  "1000 item HashMap": 121939.384,
  "1000 item HashSet": 50716.304
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

_v3.0.0_

```json
{
  "empty List": 71,
  "empty Array": 112,
  "empty Set": 64,
  "empty Map": 64,
  "empty Hashtbl": 325,

  "10 item List": 707,
  "10 item Array": 203,
  "10 item Set": 886,
  "10 item Map": 1296,
  "10 item Hashtbl": 1387,

  "100 item List": 6464,
  "100 item Array": 912,
  "100 item Set": 8067,
  "100 item Map": 12064,
  "100 item Hashtbl": 11132,

  "1000 item List": 64064,
  "1000 item Array": 8112,
  "1000 item Set": 80425,
  "1000 item Map": 120064,
  "1000 item Hashtbl": 108294
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

_v0.32.1_

```json
{
  "empty list": 47.344,
  "empty tuple": 88.704,
  "empty map": 198.816,
  "empty set": 622.384,

  "10 items list": 215.744,
  "10 items tuple": 544.272,
  "10 items map": 873.832,
  "10 items set": 1067.416,

  "100 items list": 870.384,
  "100 items tuple": 6290.136,
  "100 items map": 6876.056,
  "100 items set": 7063.152,

  "1000 items list": 8063.208,
  "1000 items tuple": 49294.2,
  "1000 items map": 61026.376,
  "1000 items set": 60951.816
}
```

## F# (Fable)

_Fable.Core (1.3.8)_

```json
{
  "empty list": 52.976,
  "empty array": 44.136,
  "empty map": 119.504,
  "empty set": 120.208,

  "10 items list": 467.208,
  "10 items array": 263.864,
  "10 items map": 1637.776,
  "10 items set": 1227.632,

  "100 items list": 4056.8,
  "100 items array": 605.056,
  "100 items map": 14960.384,
  "100 items set": 10941.968,

  "1000 items list": 40054.592,
  "1000 items array": 4204.248,
  "1000 items map": 152052.272,
  "1000 items set": 108155.44
}
```