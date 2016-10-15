var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./dev.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var path = require('path')
var port = 3000;
var open = require('open')
var allCrimes = require('./data/test.json')

const compiler = webpack(webpackConfig);

app.use(require('morgan')('short'));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, './index.html'));
});

//异步数据测试，遵循restful接口规范
app.get('/test', (req, res) => {
  res.send(allCrimes)
})


app.listen(port, function(err){
  if (err) {
    console.log(err)
  } else {
    console.log(`open port ${port}`)
    open(`http://localhost:${port}`)
  }
})
