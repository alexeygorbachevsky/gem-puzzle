const path = require("path");

const {plugins, paths, rules, resolve} = require("./utils");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: ["@babel/polyfill", paths.appIndexJs],
    },
    output: {
        path: paths.appBuild,
        pathinfo: true,
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
        publicPath: "/",
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
    },

    optimization: {
        // Automatically split vendor and commons
        splitChunks: {
            chunks: "all",
            // name: false,
        },
        runtimeChunk: "single",
    },

    resolve,

    devServer: {
        port: parseInt(process.env.PORT, 10) || 3030,
        static: {
            directory: paths.appPublic,
        },
        hot: true,
        server: "https",
        historyApiFallback: true,
    },

    module: {
        rules,
    },

    plugins,

    // performance: {
    //   hints: 'warning',
    //   maxAssetSize: 900000,
    //   maxEntrypointSize: 900000,
    // },
};
