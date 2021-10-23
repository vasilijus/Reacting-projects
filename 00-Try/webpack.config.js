// const path = require('path');
//   const HtmlWebpackPlugin = require('html-webpack-plugin');

//   module.exports = {
//     entry: {
//        app: './src/index.js',
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//       static: './dist',
//      hot: true,
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         title: 'Hot Module Replacement',
//       }),
//     ],
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//       clean: true,
//     },
//   };

const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [htmlPlugin],
};