const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const {
  fixBabelImports,
  override,
  addWebpackAlias,
  addWebpackPlugin
} = require("customize-cra");

const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

module.exports = override(
  addWebpackAlias({
    cesium$: "cesium/Cesium",
    cesium: "cesium/Source",
  }),
  fixBabelImports("@material-ui/core", {
    libraryName: "@material-ui/core",
    libraryDirectory: "esm",
    camel2DashComponentName: false,
  }),
  addWebpackPlugin(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(cesiumSource, cesiumWorkers),
          to: "static/cesium/Workers",
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: "static/cesium/Assets",
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: "static/cesium/Widgets",
        },
      ],
    })
  ),
  addWebpackPlugin(
    new DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/static/cesium"),
    })
  )
);
