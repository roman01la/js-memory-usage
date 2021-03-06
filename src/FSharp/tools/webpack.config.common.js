var fs = require("fs");
var path = require("path");
var fableUtils = require("fable-utils");

var packageJson = JSON.parse(
  fs.readFileSync(resolve("../package.json")).toString()
);
var errorMsg = "{0} missing in package.json";

var config = {
  entry: resolve(
    path.join("..", forceGet(packageJson, "fable.entry", errorMsg))
  ),
  buildDir: resolve("../build"),
  nodeModulesDir: resolve("../node_modules")
};

function resolve(filePath) {
  return path.join(__dirname, filePath);
}

function forceGet(obj, path, errorMsg) {
  function forceGetInner(obj, head, tail) {
    if (head in obj) {
      var res = obj[head];
      return tail.length > 0 ? forceGetInner(res, tail[0], tail.slice(1)) : res;
    }
    throw new Error(errorMsg.replace("{0}", path));
  }
  var parts = path.split(".");
  return forceGetInner(obj, parts[0], parts.slice(1));
}

function getModuleRules(isProduction) {
  var babelOptions = fableUtils.resolveBabelOptions({
    presets: [["env", { targets: { browsers: "> 1%" }, modules: false }]]
  });

  return [
    {
      test: /\.fs(x|proj)?$/,
      use: {
        loader: "fable-loader",
        options: {
          babel: babelOptions,
          define: isProduction ? [] : ["DEBUG"]
        }
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: babelOptions
      }
    }
  ];
}

function getPlugins(isProduction) {
  return [];
}

module.exports = {
  resolve: resolve,
  config: config,
  getModuleRules: getModuleRules,
  getPlugins: getPlugins
};
