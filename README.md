# Data Structures Memory Usage in JavaScript

- [JavaScript](#javascript)
- [ImmutableJS](#immutablejs)
- [ClojureScript](#clojurescript)
- Elm
- Reason/BuckleScript
- PureScript
- Kotlin
- Dart
- ElixirScript
- Scala.js
- RacketScript
- GHCJS (Haskell)
- GopherJS (Go)
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
