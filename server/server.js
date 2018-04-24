/**
 * Created by yongyuehuang on 2017/8/22.
 */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.dev')
const errorOverlayMiddleware = require('react-error-overlay/middleware')
const webpackConfig = require('../webpack/config')
const proxy = require('http-proxy-middleware')
const path = require('path')

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'public'),
  hot: true,
  compress: false,
  historyApiFallback: true,
  watchOptions: {
    ignored: /node_modules/
  },
  stats: {
    modules: false,
    colors: true,
    depth: true,
    entrypoints: true
  },
  setup(app) {
    app.use(errorOverlayMiddleware())
    if (process.env.NODE_ENV !== 'production') {
      app.use(
        '/book/*',
        proxy({
          target: 'https://www.easy-mock.com/mock/593611b991470c0ac101d474',
          secure: false
        })
      )
    }
  }
}).listen(webpackConfig.port, webpackConfig.host, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log(
    `Listening at http://${webpackConfig.host}:${webpackConfig.port}/`
  )
})
