/**
 * Created by admin on 2016/10/27.
 */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    devtool: false,
    entry: {
        app: [
            'babel-polyfill',
            './src/index'
        ],
        vendors: ['react', 'redux', 'react-redux']
    },
    output: {
        filename: 'mobile.bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        chunkFilename: '[id].[hash].bundle.js'
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
            names: ['vendors'],
            filename: 'vendor.bundle.js'
        })
    ],

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
            loaders: ['babel-loader'],
            exclude: /node_modules/
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
};
