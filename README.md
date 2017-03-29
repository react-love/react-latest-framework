
### 热更新、ES6/7、LESS、Router、redux、webpack2、async／await、前端node服务器，按需加载...


该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要从事实践项目的开发者。
欢迎 watch、star、fork，因为我自己也是基于这套框架做开发，所以我会长期维护该项目，跟随相关插件的升级而升级优化。  

==========================================

欢迎加我交流：https://hyy1115.github.io/huangyongyue/  （可以查看本框架上线产品）  

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

状态树  
![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/store.png) 

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

4、打包发布。

```
mac
npm run build-mac

windows
npm run build-win
``` 

===========================================

![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/index.png)

压缩效果图  
![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/fenxi.png)

===================================================

####常用的排查bug方法  
1、react和这么多的插件搭配使用，开发过程中不可避免会遇到很多的bug，有一些甚至无法从chrome找到答案，那么我们遇到这些问题的时候该怎么办呢？  

2、第一步，打开chrome调试工具，如果你喜欢火狐或者微信调试之类的，我建议能用chrome的尽量用chrome，chrome开发者工具的console和netWork调试界面是
开发react最经常用到的。有的人也会用chrome上的react调试插件，每次打开我都觉得很麻烦，所以本源码用的是logger插件，直接在console看到每个页面和事件触发的action。  

3、如果chrome工具找不出bug的话，npm命令的控制台也可以看到详细的报错信息，大部分报错的情况是某个插件没有install，或者某个参数未定义。参数未定义的情况出现在异步ajax，
state初始为空，初次渲染页面必然会导致某个参数为空，那么只需要在组件里面做个简单的判断即可，防止把空参数传递进来，也有其他的解决办法，比如我在header组件里面用到的判断。

4、webpack配置错误，也会导致热更新失败，或者打包失败，不了解webpack机制的还需要多多研究webpack的用法。

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  
