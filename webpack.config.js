const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

module.exports = {
    mode: isDev ? "development" : "production",
    devtool: isDev ? "source-map" : undefined,
    entry: "./src/index.tsx",
    output: {
        filename: `static/js/${getFilename("js")}`,
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html",
            publicPath: "/",
        }),
        new MiniCssExtractPlugin({
            filename: `static/css/${getFilename("css")}`,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "build"),
                },
            ],
        }),
    ],
    module: {
        rules: initRules(),
    },
    optimization: {
        minimizer: initMinimizer(),
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        plugins: [
            new TsconfigPathsPlugin({
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            }),
        ],
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        client: {
            logging: "error",
        },
        historyApiFallback: true,
    },
};

function initRules() {
    return [
        {
            test: /\.(ts)|(tsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.css$/i,
            use: initStyleLoaders({ isModules: false, isPreprocessor: false }),
        },
        {
            test: /\.s[ac]ss$/i,
            exclude: /\.module.s[ac]ss$/,
            use: initStyleLoaders({ isModules: false, isPreprocessor: true }),
        },
        {
            test: /\.module\.s[ac]ss$/i,
            use: initStyleLoaders({ isModules: true, isPreprocessor: true }),
        },
        {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            type: isProd ? "asset" : "asset/resource",
            generator: {
                filename: `static/media/img/${getAssetFilename()}`,
            },
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
            generator: {
                filename: `static/media/fonts/${getAssetFilename()}`,
            },
        },
    ];
}

function initStyleLoaders({ isModules, isPreprocessor }) {
    const loaders = [MiniCssExtractPlugin.loader];

    if (isModules) {
        loaders.push({
            loader: "css-loader",
            options: {
                importLoaders: 1,
                modules: {
                    localIdentName: "[name]__[local]__[hash:base64:5]",
                },
            },
        });
    } else {
        loaders.push("css-loader");
    }

    loaders.push({
        loader: "postcss-loader",
        options: {
            postcssOptions: { plugins: ["postcss-preset-env"] },
        },
    });

    if (isPreprocessor) {
        loaders.push("sass-loader");
    }

    return loaders;
}

function initMinimizer() {
    return [
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationLevel: 5 }],
                        ["svgo", { name: "preset-default" }],
                    ],
                },
            },
        }),
    ];
}

function getFilename(ext) {
    return isDev ? `main.${ext}` : `main.[contenthash].${ext}`;
}

function getAssetFilename() {
    return isDev ? "[name][ext]" : "[name].[hash][ext]";
}
