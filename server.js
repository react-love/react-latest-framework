var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack/dev.config');
var app = express();
var path = require('path')
var port = 3000;
var open = require('open')

const compiler = webpack(webpackConfig);

app.use(require('morgan')('short'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err)
  } else {
    console.log(`open port ${port}`)
    open(`http://localhost:${port}`)
  }
})