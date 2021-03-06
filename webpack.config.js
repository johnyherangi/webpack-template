const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: "[name].js.map",
            exclude: ["vendor.js"],
        }),
    ],
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
    },
}
