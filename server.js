var express = require('express');
var compression = require('compression');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var path = require('path')
var port = 3011;
// var open = require('open')
var nav = require('./mock/nav.json')
var bookList = require('./mock/bookList.json')

var proxy = require('http-proxy-middleware')

const compiler = webpack(webpackConfig);

// gzip压缩
app.use(compression());

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
// app.use(express.static(path.join(__dirname, 'build')))

//你只需要执行这一段代码，当你访问需要跨域的api资源时，就可以成功访问到了。
// app.use('/api/*', proxy({
//     target: 'http://www.baidu.com',
//     changeOrigin: true
// }))

// 首页导航接口
app.get('/api/book/navigation', function (req, res) {
    for (let i = 0; i < 9; i++) {
        nav.push()
    }
    return res.send(nav);
})

// 首页书籍列表
app.get('/api/book/list', function (req, res, next) {
    return res.send(bookList);
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, function(err){
  if (err) {
    console.log('err : ', err)
  } else {
    console.log(`http://localhost:${port}`)
  }
})
