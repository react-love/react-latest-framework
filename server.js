/**
 * Created by yongyuehuang on 2017/8/22.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const errorOverlayMiddleware = require('react-error-overlay/middleware');
const webpackServerConfig = require('./webpackServerConfig')

new WebpackDevServer(webpack(config), {
    hot: true,
    compress: true,
    historyApiFallback: true,
    publicPath: '/build/',
    watchOptions: {
        ignored: /node_modules/,
    },
    stats: {
        modules: false,
        chunks: false
    },
    setup(app) {
        app.use(errorOverlayMiddleware());
    }
}).listen(webpackServerConfig.port, webpackServerConfig.host, function (err, result) {
    if (err) {
        return console.log(err);
    }
    
    console.log(`Listening at http://${webpackServerConfig.host}:${webpackServerConfig.port}/`);
});