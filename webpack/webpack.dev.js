const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const config = require('./config')
const path = require('path')

module.exports = merge(common, {
  devtool: 'eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${config.host}:${config.port}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, '../src/entry')
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
