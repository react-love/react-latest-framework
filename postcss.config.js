module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-adaptive')({ remUnit: 75 })
    ]
}