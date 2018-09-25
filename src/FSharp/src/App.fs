module FSharp

open Fable.Core.JsInterop

let emptyList () = []
let list10 () = [0..9]
let list100 () = [0..99]
let list1000 () = [0..999]

let emptyArray () = [||]
let array10 () = [|0..9|]
let array100 () = [|0..99|]
let array1000 () = [|0..999|]

let emptySet () = Set.empty
let set10 () = Set.ofArray [|0..9|]
let set100 () = Set.ofArray [|0..99|]
let set1000 () = Set.ofArray [|0..999|]

let mkMap list =
    list
        |> List.map (fun x -> ("key-" + x.ToString(), x)) 
        |> Map.ofList

let emptyMap () = Map.empty
let map10 () = mkMap [0..9]
let map100 () = mkMap [0..99]
let map1000 () = mkMap [0..999]