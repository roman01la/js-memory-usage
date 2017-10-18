defmodule Node do
  use ElixirScript.FFI

  defexternal record(string, number, function)
  defexternal printResult()
end
