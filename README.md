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
  "empty object": 69.224,
  "empty array": 93.144,
  "empty map": 197.016,
  "empty set": 166.04,

  "10 item object": 218.32216,
  "10 item array": 242.26208,
  "10 item map": 530.48856,
  "10 item set": 402.46528,

  "100 item object": 1201.3952,
  "100 item array": 1337.2456,
  "100 item map": 3665.1808,
  "100 item set": 2641.2072,

  "1000 item object": 10398.224,
  "1000 item array": 11598.584,
  "1000 item map": 28758.464,
  "1000 item set": 20566.2
}
```

## ImmutableJS
```json
{
  "empty list": 22.312,
  "empty map": 20.232,
  "empty set": 20.224,

  "10 item list": 491.71112,
  "10 item map": 1427.28672,
  "10 item set": 1483.24152,

  "100 item list": 2568.4048,
  "100 item map": 15558.6776,
  "100 item set": 15612.3232,

  "1000 item list": 20483.56,
  "1000 item map": 123817.784,
  "1000 item set": 123851.168
}
```

## ClojureScript
```json
{
  "empty vector": 11.096,
  "empty map": 11.864,
  "empty set": 11.952,

  "10 item vector": 298.856,
  "10 item map": 457.584,
  "10 item set": 763.048,

  "100 item vector": 1591.504,
  "100 item map": 5230.448,
  "100 item set": 5395.128,

  "1000 item vector": 11237.696,
  "1000 item map": 123785.2,
  "1000 item set": 123900.056
}
```
