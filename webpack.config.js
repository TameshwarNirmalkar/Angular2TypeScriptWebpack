var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');

var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'polyfills': [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone'
        ]
    },
    output: {
        path: BUILD_PATH,
        // filename: '[name].[hash].js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.component.ts$/, loader: 'ts-loader!angular2-template-loader' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            // { test: /\.css$/, loader: 'raw-loader' },
            // { test: /\.css$/, loader: 'style-loader!css-loader?file-loader?name=assets/css/[name].[ext]' },
            { test: /\.css$/, exclude: helpers.root('src', 'app'), loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            { test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw-loader' },
            { test: /\.(jpe?g$|gif|png)$/, loader: 'file-loader?name=assets/images/[name].[ext]?limit=1000' },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=assets/fonts/[name].[ext]' }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.css', '.html']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
        new ExtractTextPlugin('assets/css/bundle.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]

};