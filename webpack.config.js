const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV;

module.exports = {
  entry: {
    slide: "./src/slider.js",
    style: "./src/style.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: mode === "production" ? "source-map" : "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "list.html",
      template: "src/list.html",
      excludeChunks: ["slide"],
    }),
    new HtmlWebpackPlugin({
      filename: "entry.html",
      template: "src/entry.html",
      excludeChunks: ["slide"],
    }),
    new HtmlWebpackPlugin({
      filename: "feedback.html",
      template: "src/feedback.html",
      excludeChunks: ["slide"],
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};
