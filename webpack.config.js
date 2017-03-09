var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log("当前运行环境：", isPro)

var plugins = []
if (isPro) {
  plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.DefinePlugin({
          'process.env':{
              'NODE_ENV': JSON.stringify(nodeEnv)
          }
      })
  )
} else {
  plugins.push(
      new webpack.DefinePlugin({
          'process.env':{
              'NODE_ENV': JSON.stringify(nodeEnv)
          },
          BASE_URL: JSON.stringify('http://localhost:9009'),
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  )
}

module.exports = {
  devtool: false,
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://localhost:3011/__webpack_hmr&reload=true&noInfo=false&quiet=false',
      'babel-polyfill',
      './src/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:3011/build/',
    chunkFilename: '[name].js'
  },
  // BASE_URL是全局的api接口访问地址
  plugins,
  // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'],
    modulesDirectories: ['node_modules', 'src'],
    alias: {
      'react/lib/ReactMount': 'react-dom/lib/ReactMount',
      actions: __dirname + `/src/actions`,
      components: __dirname + `/src/components`,
      containers: __dirname + `/src/containers`,
      reducers: __dirname + `/src/reducers`,
      store: __dirname + `/src/store`,
      utils: __dirname + `/src/utils`
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      env: {
        development: {
          presets: ["react-hmre"]
        }
      }
    },{
      test:   /\.less$/,
      loader: "style-loader!css-loader!less!postcss-loader"
    },  {
      test:   /\.css/,
      loader: "style-loader!css-loader!postcss-loader"
    }, {
      test: /\.png$/,
      loader: 'file?limit=10000&name=[md5:hash:base64:10].[ext]'
    }, {
      test: /\.jpg$/,
      loader: 'file?limit=10000&name=[md5:hash:base64:10].[ext]'
    }, {
      test: /\.gif$/,
      loader: 'file?limit=10000&name=[name].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.md$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }],
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  }
  // autoprefixer是自动添加-webkit等前缀的插件，写css3样式的时候，不需要手动写-webkit，-o之类的
};