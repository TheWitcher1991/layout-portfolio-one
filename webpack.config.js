const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: [
        './src/js/index.js',
        './src/css/main.css'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './static/script/script.bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/img/[name].[ext]',
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.html', '.css']
    },
    plugins: [
        //new CleanWebpackPlugin(),
        // new ExtractTextPlugin({filename: 'style/style.bundle.css', disable: false, allChunks: true}),
        new MiniCssExtractPlugin({filename: 'static/style/style.bundle.css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'src/lib/jquery.min.js',
            jQuery: 'src/lib/jquery.min.js',
            'window.$': 'src/lib/jquery.min.js'
        })
    ]
}
