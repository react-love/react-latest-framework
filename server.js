var express = require('express');
var cors = require('cors')
var compression = require('compression');
var webpack = require('webpack');
var webpackConfig = require('./dev.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var path = require('path')
var port = 3011;
// var open = require('open')

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
app.use(compression());
app.use(express.static(__dirname + '/build/'))

app.listen(port, function(err){
  if (err) {
    console.log('err : ', err)
  } else {
    console.log(`http://localhost:${port}`)
  }
})
