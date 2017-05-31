#### 打包部署到阿里云OSS

如果你没有用到服务端渲染，仅仅通过本项目来打包发布，而你和我一样，恰巧使用阿里云OSS部署
css、js和图片等静态资源。

当前项目打包之后各个文件大小

```text
app.js —— 28.1kb

vendor.js -- 437kb

styles.css -- 6.04kb
```

是不是觉得vendor太大了，而这已经是通过webpack压缩打包之后的结果，如果你需要继续减少js体积，
你可能会想到Nginx开启gzip，那么在OSS上面的js文件，没有服务器，也可以开启gzip吗？

当然可以，你知道开启gzip之后，js会压缩到多小吗？

答：当前js大小的30%。

```text
437 * 0.3 = 131 kb

28.1 * 0.3 = 8.43 kb
```

#### 在OSS开启gzip

1、下载OSS客户端，安装到本地。

2、登录成功后，找到你上传的js文件，如果你还没上传，那么可以通过OSS客户端上传js。

3、上传成功之后，选中你需要开启gzip的js文件，点击上部导航——设置HTTP头。

4、将Content-type设置为：application/javascript。

5、ok，打开netWork，这时候你再从浏览器看请求的js文件，在response中，Content-Encoding:gzip，这就代表你已经成功了，再
一看size，哇塞，真的变小了。

