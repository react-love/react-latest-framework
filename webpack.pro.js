const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const argv = require('yargs').argv

let plugins =  [
    new ExtractTextPlugin({
        filename: 'styles/[name].css'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new UglifyJSPlugin()
]
if (!!argv.json) {
    plugins.push(
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        })
    )
}

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        app: ['./entry']
    },
    plugins,
    //如果你想要preact，可以取消注释
    //resolve: {
    //    alias: {
    //        'react':'preact-compat/dist/preact-compat',
    //        'react-dom': 'preact-compat/dist/preact-compat',
    //        'create-react-class': 'preact-compat/lib/create-react-class'
    //    }
    //},
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?modules&localIdentName=[name]__[local]--[hash:base64:5]', 'less-loader']
            })
        }]
    }
})