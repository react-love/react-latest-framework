
### 热更新、ES6/7、LESS、Router4、redux、webpack3、async／await、前端node服务器，按需加载...
<hr />

[![Build Status](https://travis-ci.org/hyy1115/react-redux-webpack2.svg?branch=master)](https://travis-ci.org/hyy1115/react-redux-webpack2)  [![codebeat badge](https://codebeat.co/badges/8be7b4c1-85f3-4da9-ab23-d470624b40ad)](https://codebeat.co/projects/github-com-hyy1115-react-redux-webpack2-master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)  

适用人群：该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要一个比较干净、简洁的框架从事实践项目的开发者。（doc文件夹附有教程文档）

```text
官方推荐：

对于 HTTP/1.1 客户端，由 webpack 打包你的应用程序会尤其强大，因为在浏览器发起一个新请求时，
它能够减少应用程序必须等待的时间。对于 HTTP/2，你还可以使用代码拆分(Code Splitting)以及通过 
webpack 打包来实现最佳优化。
```
欢迎 watch、star、fork，因为我自己也是基于这套框架做开发，所以我会长期维护该项目，跟随相关插件的升级而升级优化。  

==========================

#### Installation 教程

fork到你的账号，简单省事，或者 download 项目到本地

1、 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。
```
npm install 或者cnpm install
```

2、运行demo。
 ```nodemon
    mac
    npm run start-mac

    windows
    npm run start-win
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

===========================================

#### 关于DOC文档教程的解释

非常抱歉的是由于各个插件版本升级太快，一些文档教程没有实时跟上维护修改，如果你有参与项目的意愿，可以帮忙更新DOC教程。

#### 关于react-transition-group的注意事项

```text
react-transition-group目前有V1和V2，本项目使用的是V1，如果没有需求，请勿切换到V2，我尝试升级V2，发现过渡动画切换出现了异常。
如果你想升级，那么我可以提供一个简易的代码修改提示。
```
#### 项目结构

```text
├── doc 相关的教程文档
├── public readMe的一些图片资源，可以删掉该文件夹
├── src 项目的主目录
│   ├── actions 管理你的action文件
│   ├── components 管理二级以及更低级别的组件、包括公共组件
│   │   ├── Commons
│   │   ├── Home Home页面对应的子组件
│   │   │   └── files
│   │   └── Search Search页面对应的子组件
│   │       └── files
│   ├── containers 管理顶级组件，通常是页面
│   │   ├── BookList
│   │   ├── Home 首页
│   │   │   ├── files
│   │   │   └── styles 
│   │   └── Search 搜索页
│   │       └── styles
│   ├── reducers 管理store
│   └── utils 一些公共的方法和组件可以放这里
└── test 测试脚本
    └── __snapshots__

```

#### echarts 使用方案
想要在react恰当的使用echarts，可以查看 [react中使用echarts的最优方案][1]

#### 参与开源项目的方法（详情可以网上搜索教程）

**如果你对该项目感兴趣，想共享一份你的力量，请大胆pull PR！**

[1]: https://github.com/hyy1115/react-echarts-modules