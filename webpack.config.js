"use strict";"use strict";

const env = process.env.NODE_ENV || "development";
const webpack = require("webpack");

const path = require("path");

const join = (dest) => path.join(__dirname, dest);

module.exports = {
  context: join("src"),

  entry: "./app.ts",

  output: {
    path: join("dist"),
    filename: "[name].js"
  },

  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  devtool: "source-map",

  module: {
    loaders: [
      {
        name: "scripts",
        test: /\.tsx?/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["ts"]
      }
    ],

    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
}
