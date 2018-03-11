console.log('postcss=====================\n')
module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-adaptive')
    ]
}