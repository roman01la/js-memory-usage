module Memwatch exposing (record)

import Native.Memwatch
import Task exposing (Task)


record : String -> (() -> a) -> Task x ( String, Float )
record description thunk =
    Native.Memwatch.record 1000 thunk
        |> Task.map ((,) description)
