var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=false',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    chunkFilename: '[id].[hash].bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    })
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/
    }, {
      test:   /\.scss$/,
      loader: 'style!css!sass'
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
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
