var express = require('express');
var cors = require('cors')
var webpack = require('webpack');
var webpackConfig = require('./dev.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var path = require('path')
var port = 3007;
var open = require('open')

const compiler = webpack(webpackConfig);

app.use(require('morgan')('short'));

app.use(webpackDevMiddleware(compiler, {
  historyApiFallback: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/build/'))

app.listen(port, function(err){
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
