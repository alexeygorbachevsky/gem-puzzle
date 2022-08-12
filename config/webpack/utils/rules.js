const { cssLoaders } = require("./loaders");

const rules = [
  {
    test: /\.css$/,
    use: cssLoaders(),
  },
  {
    test: /\.s[ac]ss$/,
    use: cssLoaders("sass-loader"),
  },
  {
    test: /\.(png|jpg|gif|mp3)$/,
    type: "asset/resource",
    generator: {
      filename: "static/media/[name][ext]",
    },
  },
  {
    test: /\.(ttf|woff|woff2|eot)$/,
    type: "asset/resource",
  },
  // inline svg files
  {
    test: [/\.svg$/],
    use: [
      {
        loader: "babel-loader",
      },
    ],
  },

  {
    test: /\.(js)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      cacheCompression: false,
      compact: true,
    },
  },
];

module.exports = {
  rules,
};
