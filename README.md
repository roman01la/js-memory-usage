# Data Structures Memory Usage in JavaScript

- [JavaScript](#javascript)
- [ImmutableJS](#immutablejs)
- [ClojureScript](#clojurescript)
- [Kotlin](#kotlin)
- [GopherJS (Go)](#gopherjs-go)
- [RacketScript](#racketscript)
- [Reason (BuckleScript)](#reason-bucklescript)
- [Elm](#elm)
- PureScript
- Dart
- ElixirScript
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
  "empty object": 68.736,
  "empty array": 93.144,
  "empty map": 197.016,
  "empty set": 166.04,

  "10 item object": 145.936,
  "10 item array": 247.304,
  "10 item map": 882.352,
  "10 item set": 432.168,

  "100 item object": 6243.432,
  "100 item array": 1342.584,
  "100 item map": 6870.2,
  "100 item set": 2646.2,

  "1000 item object": 98686.272,
  "1000 item array": 11598.584,
  "1000 item map": 60762.608,
  "1000 item set": 20564.048
}
```

## ImmutableJS
```json
{
  "empty list": 22.312,
  "empty map": 19.976,
  "empty set": 20.224,

  "10 item list": 619.52,
  "10 item map": 1897.168,
  "10 item set": 1572.456,

  "100 item list": 2643.56,
  "100 item map": 17404.792,
  "100 item set": 15680.4,

  "1000 item list": 20485.28,
  "1000 item map": 182599.904,
  "1000 item set": 123836.416
}
```

## ClojureScript
```json
{
  "empty vector": 11.096,
  "empty map": 11.864,
  "empty set": 11.952,

  "10 item vector": 298.088,
  "10 item map": 1367.592,
  "10 item set": 706.472,

  "100 item vector": 1589.032,
  "100 item map": 8877.656,
  "100 item set": 5325.976,

  "1000 item vector": 11238,
  "1000 item map": 121323.768,
  "1000 item set": 123868.216
}
```

## Kotlin
```json
{
  "empty ArrayList": 119.472,
  "empty HashMap": 413.456,
  "empty HashSet": 443.84,

  "10 item ArrayList": 270.416,
  "10 item HashMap": 2230.152,
  "10 item HashSet": 1575.968,

  "100 item ArrayList": 1248.416,
  "100 item HashMap": 20032.696,
  "100 item HashSet": 11219.92,

  "1000 item ArrayList": 10443.376,
  "1000 item HashMap": 227163.968,
  "1000 item HashSet": 106779.984
}
```

## GopherJS (Go)
```json
{
  "empty array": 259,
  "empty map": 74,

  "10 item array": 388,
  "10 item map": 960,

  "100 item array": 781,
  "100 item map": 13451,

  "1000 item array": 4349,
  "1000 item map": 170437
}
```

## RacketScript
```json
{
  "empty list": 18.968,
  "empty vector": 141.664,
  "empty hash map": 234.688,

  "10 item list": 606.76,
  "10 item vector": 216.344,
  "10 item hash map": 1633.32,

  "100 item list": 5637.984,
  "100 item vector": 918.064,
  "100 item hash map": 13657.544,

  "1000 item list": 55942.032,
  "1000 item vector": 8112.088,
  "1000 item hash map": 147176.56
}
```

## Reason (BuckleScript)
```json
{
  "empty List": 85,
  "empty Array": 145,
  "empty Set": 71,
  "empty Map": 71,
  "empty Hashtbl": 345,

  "10 item List": 723,
  "10 item Array": 200,
  "10 item Set": 971,
  "10 item Map": 1363,
  "10 item Hashtbl": 1442,

  "100 item List": 6473,
  "100 item Array": 920,
  "100 item Set": 8082,
  "100 item Map": 12080,
  "100 item Hashtbl": 11167,

  "1000 item List": 64073,
  "1000 item Array": 8120,
  "1000 item Set": 80404,
  "1000 item Map": 120080,
  "1000 item Hashtbl": 108343
}
```

## Elm
```json
{
  "empty list": 43.776,
  "empty array": 11.456,
  "empty dict": 11.368,
  "empty set": 11.424,

  "10 item list": 524.696,
  "10 item array": 208.288,
  "10 item dict": 1076.36,
  "10 item set": 1114.608,

  "100 item list": 4851.144,
  "100 item array": 1267.408,
  "100 item dict": 10436.36,
  "100 item set": 10475.792,

  "1000 item list": 48046.928,
  "1000 item array": 11220.536,
  "1000 item dict": 104329.2,
  "1000 item set": 104248.064
}
```
