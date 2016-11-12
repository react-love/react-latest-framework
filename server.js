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

var navigation = require(`./data/navigation.json`)

const compiler = webpack(webpackConfig);

app.use(require('morgan')('short'));

app.use(cors())

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/build/'))

app.get('/book/navigation', function (req, res) {
  res.json(navigation)
})
//请在这里添加你自己的测试接口



/*
* 注意，该方法必须 放在get和post等请求等最后，因为该方法是用来处理刷新浏览器找不到路径的问题。
* 如果你个人的get方法写到了该方法的下面，那么就无法执行你的方法。
* */
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
