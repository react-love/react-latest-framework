var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log("当前运行环境：", isPro ? 'production' : 'development')

var plugins = [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    })
]
var app = [
    'babel-polyfill',
    './src/index'
]
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
    app.push('webpack-hot-middleware/client?path=http://localhost:3011/__webpack_hmr&reload=true&noInfo=false&quiet=false')
    plugins.push(
      new webpack.DefinePlugin({
          'process.env':{
              'NODE_ENV': JSON.stringify(nodeEnv)
          },
          BASE_URL: JSON.stringify('http://localhost:9009'),
      }),
      new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = {
    devtool: false,
    entry: {
        app: app
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
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "less-loader", "postcss-loader"]
            })
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=image/svg+xml']
        }],
    }
};