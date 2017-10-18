defmodule Test.Mixfile do
  use Mix.Project

  def project do
    [
      app: :elixir,
      version: "0.1.0",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      deps: deps(),
      compilers: Mix.compilers ++ [:elixir_script],
      elixir_script: [
        # Entry module. Can also be a list of modules
        input: Test,
        # Output path. Either a path to a js file or a directory
        output: "build/main.mjs"
    ]
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:elixir_script, "~> 0.31.1"}
    ]
  end
end
