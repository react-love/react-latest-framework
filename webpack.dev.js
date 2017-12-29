const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpackServerConfig = require('./webpackServerConfig')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${webpackServerConfig.host}:${webpackServerConfig.port}`,
            'webpack/hot/only-dev-server',
            './entry'
        ]
    },
    output: {
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    }
})