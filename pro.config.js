/**
 * Created by admin on 2016/10/27.
 */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 打包发布的时候执行的是该文件，全部静态资源会打包到build文件夹
module.exports = {
    devtool: false,
    entry: {
        app: [
            'babel-polyfill',
            './src/index'
        ],
        vendor: ['react']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3011/build/',
        chunkFilename: '[name].js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'vendor.js'
        })
        // new ExtractTextPlugin("styles.css")
    ],

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
        }, {
            test:   /\.less$/,
            loader: "style-loader!css-loader!less!postcss-loader"
        },  {
            test:   /\.css/,
            loader: "style-loader!css-loader!postcss-loader"
        }, {
            test: /\.(png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }, {
            test: /\.(jpg|jpeg)/,
            loader: 'file?name=[md5:hash:base64:10].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.md$/,
            loader: 'file?name=[name].[ext]'
        }],
    },

    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    }
};
