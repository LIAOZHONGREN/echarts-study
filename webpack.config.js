/*
 * @Author: your name
 * @Date: 2020-11-02 10:09:32
 * @LastEditTime: 2020-11-10 16:37:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-study\case11\webpack.config.js
 */
var path = require('path')
var { VueLoaderPlugin } = require('vue-loader')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.ts')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.vue', '.tsx', '.ts', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(tsx|ts)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            // 让 tsc 把 vue 文件当成一个 TypeScript 模块去处理，以解决 moudle not found 的问题，tsc 本身不会处理 .vue 结尾的文件
                            appendTsSuffixTo: [/\.vue$/],
                        }
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: path.resolve(__dirname, './index.html'), chunks: 'main' }),
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        hot: true,
        compress: true,
        port: 8080
    }

}