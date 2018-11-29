

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 5});
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'development',
  entry: [
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
        'actions': path.resolve(__dirname, '../src/actions'),
        'components': path.resolve(__dirname, '../src/components'),
        'pages': path.resolve(__dirname, '../src/pages'),
        'reducers': path.resolve(__dirname, '../src/reducers'),
        'utils': path.resolve(__dirname, '../src/utils'),
        'routes': path.resolve(__dirname, '../src/routes')
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
              
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 1000,
              name: 'static/images/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: 'happypack/loader?id=1'
          },
          {
            test: /\.(css)$/,
            loader: 'happypack/loader?id=2'
          },
          {
            test: /\.(less)$/,
            loader: 'happypack/loader?id=3'
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/css/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: '1',
      threadPool : happyThreadPool,
      threads : 4,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: '2',
      threadPool : happyThreadPool,
      threads : 4,
      loaders : [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]'
          }
        },
        'postcss-loader'
      ]
    }),
    new HappyPack({
      id: '3',
      threadPool: happyThreadPool,
      threads: 4,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]'
          }
        },
        'postcss-loader',
        'less-loader'
      ]
    }),
    new HtmlWebpackPlugin({inject: true, hash: true, template: paths.appHtml}),
    new ProgressBarPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};
