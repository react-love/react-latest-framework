const path = require('path')
const webpack = require('webpack')

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development'
const isPro = nodeEnv === 'production'

console.log('当前运行环境：', isPro ? 'production' : 'development')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        chunkFilename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.DefinePlugin({
            // 定义全局变量
            'process.env': {
                'NODE_ENV': JSON.stringify(nodeEnv)
            }
        })
    ],
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            'actions': path.resolve(__dirname, 'src/actions'),
            'components': path.resolve(__dirname, 'src/components'),
            'containers': path.resolve(__dirname, 'src/containers'),
            'reducers': path.resolve(__dirname, 'src/reducers'),
            'utils': path.resolve(__dirname, 'src/utils')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
        }]
    }
}