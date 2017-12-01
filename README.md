<p align="center"><a><img width="100" src="https://segmentfault.com/img/bVZwRf?w=516&h=457"></a></p>

# React技术栈长期开源项目

[![Build Status](https://travis-ci.org/hyy1115/react-redux-webpack2.svg?branch=master)](https://travis-ci.org/hyy1115/react-redux-webpack2)  [![codebeat badge](https://codebeat.co/badges/8be7b4c1-85f3-4da9-ab23-d470624b40ad)](https://codebeat.co/projects/github-com-hyy1115-react-redux-webpack2-master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

**适用人群：该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要一个比较干净、简洁的框架从事前端项目的开发者。（doc文件夹附有教程文档）**

#### 客户端渲染

本项目是客户端渲染版本

满足下面2个条件，你的首屏加载js可以压缩到极致：

1、切换到preact版本（遗憾的是可能会丢失某些东西）

2、服务端部署开启gzip

极致压缩的效果，首屏只需要app.js和vendor.js，共47.49kb：
```text
app.js (39.13 KB)
vendor.js (8.36 KB)
search.js (2.28 KB)
bookList.js (725 B)
```

#### 服务端渲染

虽然客户端渲染可以实现首屏请求最少的js资源，但是服务端渲染也是有他的优势所在，

关注SEO的开发者推荐使用基于本框架的服务端渲染版本：https://github.com/hyy1115/react-next
#
#### Installation 教程

fork到你的账号，简单省事，或者 download 项目到本地

1、 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。
```
npm install 或者cnpm install
```

2、运行demo。
 ```nodemon
 npm start
 ```

3、将会开启3011端口.
```nodemon
http://localhost:3011

```

4、打包发布: 假设你用的是阿里云服务器，你可以把静态资源和图片都放到CDN，index.html放到你的域名服务器下面，请注意路径问题。  

```nodemon
mac
npm run build-mac

windows
npm run build-win
```

#

#### 关于DOC文档教程的解释

非常抱歉的是由于各个插件版本升级太快，一些文档教程没有实时跟上维护修改，如果你有参与项目的意愿，可以帮忙更新DOC教程。

#### 关于react-transition-group的注意事项

```text
react-transition-group目前有V1和V2，本项目使用的是V1，如果没有需求，请勿切换到V2，我尝试升级V2，发现过渡动画切换出现了异常。
如果你想升级，那么我可以提供一个简易的代码修改提示。
```
#### 项目结构

```text
├── doc //各种与该项目或者react有关的开发文档供你参考
├── index.html //单页应用的html
├── package.json //node相关环境的配置文件
├── server.js //前端服务器
├── src //项目的主要目录
│   ├── App.js //根react组件
│   ├── AsyncComponent.js //异步react组件HOC
│   ├── actions //action控制中心
│   ├── app.less //公共样式
│   ├── containers //按页面划分组件，每个页面内部的组件在该目录下面管理，公共组件提取到Commons
│   │   ├── BookList
│   │   │   └── BookList.js
│   │   ├── Commons
│   │   │   ├── MyScroll.js
│   │   │   ├── ReactChildrenMap.js
│   │   │   └── SetDocumentTitle.js
│   │   ├── Home
│   │   │   ├── Home.js
│   │   │   ├── components
│   │   │   ├── files
│   │   │   └── styles
│   │   └── Search
│   │       ├── Search.js
│   │       ├── components
│   │       └── styles
│   ├── entry.js //webpack打包入口
│   ├── reducers //存放state
│   └── utils //提供一些小工具
├── test //jest测试集
│   ├── __snapshots__
├── webpack.config.js //webpack配置文件
└── webpackServerConfig.js //webpack公共对象

```

#### echarts 使用方案
想要在react恰当的使用echarts，可以查看 [react中使用echarts的最优方案][1]

#### 学习ES6语法
React项目中，使用了大量的ES6语法，如果你还没有学习过ES6，那么推荐你看 [深入理解ES6笔记][2]

#### 参与开源项目的方法（详情可以网上搜索教程）

**如果你对该项目感兴趣，想共享一份你的力量，请大胆pull PR！**

[1]: https://github.com/hyy1115/react-echarts-modules
[2]: https://github.com/hyy1115/ES6-learning
