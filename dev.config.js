var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

// 开发模式下的配置文件，抽离了react，redux，react-redux等插件，如果你用到了其他重量型的插件，也可以分离出来给浏览器做缓存，避免每次请求都加载这些不会变的文件
module.exports = {
  devtool: false,
  entry: {
    app: ['webpack-hot-middleware/client?path=http://localhost:3011/__webpack_hmr&reload=true&noInfo=false&quiet=false',
      'babel-polyfill',
      './src/index'
    ],
    vendors: ['react', 'redux', 'react-redux']
  },
  output: {
    filename: 'mobile.bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:3011/build/',
    chunkFilename: '[id].[hash].bundle.js'
  },
  // BASE_URL是全局的api接口访问地址
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      },
      BASE_URL: JSON.stringify('http://localhost:9009'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
      filename: 'vendor.bundle.js'
    })
  ],
  // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
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
    }, {
      test:   /\.less$/,
      loader: "style-loader!css-loader!less!postcss-loader"
    },  {
      test:   /\.css/,
      loader: "style-loader!css-loader!postcss-loader"
    }, {
      test: /\.png$/,
      loader: 'file?name=[md5:hash:base64:10].[ext]'
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[md5:hash:base64:10].[ext]'
    }, {
      test: /\.gif$/,
      loader: 'file?name=[name].[ext]'
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
