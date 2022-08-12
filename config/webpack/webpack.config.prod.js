const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const { plugins, paths, rules, resolve } = require("./utils");

module.exports = {
  mode: "production",
  devtool: "nosources-source-map",
  bail: true,
  // entry: paths.appIndexJs,
  entry: {
    main: ["@babel/polyfill", paths.appIndexJs],
  },
  output: {
    path: paths.appBuild,
    filename: "static/js/[name].[hash:8].js",
    chunkFilename: "static/js/[name].[hash:8].chunk.js",
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserPlugin({
        terserOptions: {
          // pass true to work around Safari 10/11 bugs in loop scoping and await
          safari10: true,
        },
      }),
    ],
    // Automatically split vendor and commons
    splitChunks: {
      chunks: "all",
    },
  },

  resolve,

  module: {
    rules,
  },

  plugins,

  // just for caution, whatever build will be succeeded
  // performance: {
  //   hints: "error",
  //   maxAssetSize: 1500000,
  //   maxEntrypointSize: 1500000,
  // },
};
