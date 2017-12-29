/**
 * Created by yongyuehuang on 2017/8/22.
 */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev')
const errorOverlayMiddleware = require('react-error-overlay/middleware')
const webpackServerConfig = require('./webpackServerConfig')
const proxy = require('http-proxy-middleware')

new WebpackDevServer(webpack(config), {
    hot: true,
    compress: true,
    historyApiFallback: true,
    publicPath: '/build/',
    watchOptions: {
        ignored: /node_modules/
    },
    stats: {
        modules: false,
        chunks: false,
        colors: true
    },
    setup(app) {
        app.use(errorOverlayMiddleware())
        if (process.env.NODE_ENV !== 'production') {
            app.use('/book/*', proxy({
                target: 'https://www.easy-mock.com/mock/593611b991470c0ac101d474',
                secure: false
            }))
        }
    }
}).listen(webpackServerConfig.port, webpackServerConfig.host, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(`Listening at http://${webpackServerConfig.host}:${webpackServerConfig.port}/`);
});