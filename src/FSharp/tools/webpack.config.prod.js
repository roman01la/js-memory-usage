var common = require("./webpack.config.common");
var CopyWebpackPlugin = require("copy-webpack-plugin");

console.log("Bundling for production...");

module.exports = {
  entry: common.config.entry,
  output: {
    filename: "[name].js",
    path: common.config.buildDir,
    library: "fsharp",
    libraryTarget: "commonjs"
  },
  module: {
    rules: common.getModuleRules()
  },
  plugins: common.getPlugins(),
  resolve: {
    modules: [common.config.nodeModulesDir]
  }
};
