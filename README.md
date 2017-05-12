
### 热更新、ES6/7、LESS、Router、redux、webpack2、async／await、前端node服务器，按需加载...


该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要从事实践项目的开发者。
欢迎 watch、star、fork，因为我自己也是基于这套框架做开发，所以我会长期维护该项目，跟随相关插件的升级而升级优化。  

==========================================

欢迎加我交流：https://hyy1115.github.io/huangyongyue/   

2017-04-10 更新：  

1、增加路由切换过渡动画

2、升级部分插件  

2017-04-07 更新：  

1、因为使用了BrowserRouter导致打包之后不能浏览静态文件，现在更改为 HashRouter，可以打包后正常使用了  

2017-03-29 更新：

1、增加 jest 单例测试模型。

2、升级react-router到V4稳定版：（V4不赞成用静态路由统一管理的方式，所以我删除了router.js，所有组件都可以用router的API包裹起来使用，具体看官方文档。）

2017-03-15更新：  

1、增加proxy代理解决跨域，详情可以查看我写的相关文档：https://segmentfault.com/a/1190000008635891  

2、将api移植到前端服务器访问，避免安装后端。

3、增加ajax请求超时设置，默认设置10s超时。

4、更新react-router版本为3.0.2稳定版，webpack@2.2.1稳定版以及多个插件升级新稳定版。

5、删除不必要的插件，并且优化了路由部分的代码。

6、优化了打包代码，解决重复渲染的问题。

7、增加lodash插件，方便处理常见数据操作。

8、前端node服务器增加gzip压缩，压缩率达到70%。

=========================

![image](https://github.com/hyy1115/react-redux-webpack/blob/v1.0.1/public/index.gif)

==========================

#### Installation 教程

方法 1: 有github账号的推荐 Fork  

方法 2: 本地运行 cmd 或者 shell 命令  
```
 git clone https://github.com/hyy1115/react-redux-webpack.git
 
```

方法 3：没有github账号的点击download下载项目到本地。  
 
1、 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。
```
npm install 或者cnpm install
```

2、运行demo。
   ```
    mac
    npm run start-mac
    
    windows
    npm run start-win
   ```

3、将会开启3011端口.
```
http://localhost:3011

```

4、打包发布: 假设你用的是阿里云服务器，你可以把静态资源和图片都放到CDN，index.html放到你的域名服务器下面，请注意路径问题。  

```
mac
npm run build-mac

windows
npm run build-win
``` 

===========================================

状态树  
![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/store.png) 


压缩效果图  
![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/fenxi.png)

===================================================

#### 关于服务端渲染的建议（内容来自react-router官方文档）  

查看原文：https://reacttraining.cn/web/guides/code-splitting

Code-splitting + server rendering

代码分割 + 服务端渲染

We’ve tried and failed a couple of times. What we learned:

我们尝试了很多次都失败了，我们总结了下面几点：

1、You need synchronous module resolution on the server so you can get those bundles in the initial render.

你需要在服务端同步模块解析使得你可以在初始化渲染的时候得到那些文件。

2、You need to load all the bundles in the client that were involved in the server render before rendering so that the client render is the same as the server render. (The trickiest part, I think its possible but this is where I gave up.)
为了保证服务端渲染和客户端渲染的同步，你需要在客户端渲染前加载和服务端渲染一致的所有文件。（这也是我认为最难搞的地方，所以我放弃了）

3、You need asynchronous resolution for the rest of the client app’s life.
在客户端运行过程中，你需要异步解析其他没有在初始化渲染的部分。

We determined that google was indexing our sites well enough for our needs without server rendering, so we dropped it in favor of code-splitting + service worker caching. Godspeed those who attempt the server-rendered, code-split apps.
我们确定谷歌大神对我们网站的索引做得足够好，并不需要服务端渲染来解决SEO的问题，所以我们放弃了这种模式，而是采用更有利的代码分割 + service worker 缓存5的方式。愿上帝保佑那些想要尝试服务端渲染+代码分割的小白鼠:

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  
