const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpackServerConfig = require('./webpack/webpackServerConfig')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${webpackServerConfig.host}:${
        webpackServerConfig.port
      }`,
      'webpack/hot/only-dev-server',
      './entry'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]--[hash:base64:5]',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }
})
