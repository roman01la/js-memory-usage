port module Main exposing (main)

import Array.Hamt as Array exposing (Array)
import Dict exposing (Dict)
import Json.Encode as Json
import Memwatch
import Set exposing (Set)
import Task exposing (Task)


type alias Data =
    List ( String, Float )


record : String -> (() -> a) -> Task x Data -> Task x Data
record description thunk =
    Memwatch.record description thunk
        |> Task.map2 (::)


arrayOfSize : Int -> Array Int
arrayOfSize size =
    Array.initialize size (always 0)


listOfSize : Int -> List Int
listOfSize size =
    List.repeat size 0


dictOfSize : Int -> Dict String Int
dictOfSize size =
    let
        helper : Int -> Dict String Int -> Dict String Int
        helper size acc =
            if size == 0 then
                acc
            else
                Dict.insert ("key-" ++ toString size) size acc
                    |> helper (size - 1)
    in
    helper size Dict.empty


setOfSize : Int -> Set Int
setOfSize size =
    let
        helper : Int -> Set Int -> Set Int
        helper size acc =
            if size == 0 then
                acc
            else
                Set.insert size acc
                    |> helper (size - 1)
    in
    helper size Set.empty


buildData : Cmd Msg
buildData =
    Task.succeed []
        |> record "empty list" (\_ -> [])
        |> record "empty array" (\_ -> Array.empty)
        |> record "empty dict" (\_ -> Dict.empty)
        |> record "empty set" (\_ -> Set.empty)
        |> record "10 item list" (\_ -> listOfSize 10)
        |> record "10 item array" (\_ -> arrayOfSize 10)
        |> record "10 item dict" (\_ -> dictOfSize 10)
        |> record "10 item set" (\_ -> setOfSize 10)
        |> record "100 item list" (\_ -> listOfSize 100)
        |> record "100 item array" (\_ -> arrayOfSize 100)
        |> record "100 item dict" (\_ -> dictOfSize 100)
        |> record "100 item set" (\_ -> setOfSize 100)
        |> record "1000 item list" (\_ -> listOfSize 1000)
        |> record "1000 item array" (\_ -> arrayOfSize 1000)
        |> record "1000 item dict" (\_ -> dictOfSize 1000)
        |> record "1000 item set" (\_ -> setOfSize 1000)
        |> Task.map List.reverse
        |> Task.perform GotData


type Msg
    = GotData Data


update : Msg -> () -> ( (), Cmd Msg )
update (GotData data) _ =
    () ! [ printData data ]


printData : Data -> Cmd msg
printData data =
    List.map (Tuple.mapSecond Json.float) data
        |> Json.object
        |> emit


port emit : Json.Value -> Cmd msg


main : Program Never () Msg
main =
    Platform.program
        { init = () ! [ buildData ]
        , update = update
        , subscriptions = always Sub.none
        }
