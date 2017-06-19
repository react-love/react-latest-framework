
### 热更新、ES6/7、LESS、Router4、redux、webpack2、async／await、前端node服务器，按需加载...
<hr />

[![Build Status](https://travis-ci.org/hyy1115/react-redux-webpack2.svg?branch=master)](https://travis-ci.org/hyy1115/react-redux-webpack2)  [![codebeat badge](https://codebeat.co/badges/8be7b4c1-85f3-4da9-ab23-d470624b40ad)](https://codebeat.co/projects/github-com-hyy1115-react-redux-webpack2-master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)  

重磅消息：webpack3正式来袭：https://github.com/webpack/webpack/releases/tag/v3.0.0  ，你准备好颤抖没？

适用人群：该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要一个比较干净、简洁的框架从事实践项目的开发者。（doc文件夹附有教程文档）

不适用人群：想要学习完整项目，比如饿了么，社区论坛这种应用型项目，请搜索其他开源项目。

欢迎 watch、star、fork，因为我自己也是基于这套框架做开发，所以我会长期维护该项目，跟随相关插件的升级而升级优化。  

2017.6.17 更新

1、使用webpack的import()实现代码切割，不只是在路由中使用，你可以在任意组件内部使用代码切割方法懒加载组件，。

在路由route中，你可以这样
```jsx harmony
//封装好的异步方法，非原创，使用了一个大神写的函数。
import { asyncComponent } from './AsyncComponent'

//使用asyncComponent()，你就能将Promise的返回值赋给一个变量
const Search = asyncComponent(() => import(/* webpackChunkName: "search" */ "./containers/Search/searchContainer"))

<Route path="/xx" component={Search} />
```

请注意import()方法是异步的，你不能这样使用

```javascript
const Foo = import("./xx") // 错误的写法

<Route path="/xx" component={import("./xxx")} /> //错误的写法
```

==========================================

体验动画路由切换：https://hyy1115.github.io/huangyongyue/   

=========================

![image](https://github.com/hyy1115/react-redux-webpack2/blob/master/public/store.gif)

==========================

#### Installation 教程

fork到你的账号，简单省事，或者 download 项目到本地

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

压缩效果图（非最新版效果）  

![image](https://github.com/hyy1115/react-redux-webpack2/blob/master/public/fenxi.png)
