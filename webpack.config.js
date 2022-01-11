const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    entry: "./core/index.js",
    element: "./core/element.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
