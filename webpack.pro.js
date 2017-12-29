const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const rollupCommonjsPlugin = require('rollup-plugin-commonjs')

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        app: ['./entry']
    },
    output: {
        publicPath: './build/'
    },
    plugins: [
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            ie8: true
        })
    ],
    resolve: {
        alias: {
            'react':'preact-compat/dist/preact-compat', //如果你不想要preact，可以删除这一行
            'react-dom': 'preact-compat/dist/preact-compat', //如果你不想要preact，可以删除这一行
            'create-react-class': 'preact-compat/lib/create-react-class' //如果你不想要preact，可以删除这一行
        }
    },
    module: {
        rules: [{
            test: /\.\/entry.js$/,
            use: [{
                loader: 'webpack-rollup-loader',
                options: {
                    plugins: [rollupCommonjsPlugin()],
                    external: ['moment']
                }
            }]
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        }]
    }
})