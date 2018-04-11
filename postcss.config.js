//你想添加任何的postcss相关的插件，在这个文件下面require进来即可使用：https://github.com/postcss
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    require('postcss-adaptive')({ remUnit: 75 })
  ]
}
