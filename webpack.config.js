const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    devtool: 'source-map',
    devServer: {
        contentBase: './docs'
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/images'),
                to: 'images',
                ignore: ['.*']
            }
        ])
    ]
};
