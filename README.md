<p align="center"><img width="100" src="https://segmentfault.com/img/bVZwRf?w=516&h=457" /></p>

# React技术栈脚手架

[![Build Status](https://travis-ci.org/hyy1115/react-latest-framework.svg?branch=master)](https://travis-ci.org/hyy1115/react-latest-framework.svg?branch=master)  [![codebeat badge](https://codebeat.co/badges/8be7b4c1-85f3-4da9-ab23-d470624b40ad)](https://codebeat.co/projects/github-com-hyy1115-react-redux-webpack2-master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

**适用人群：该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要一个比较干净、简洁的框架从事前端项目的开发者。**

### 框架集成的配置

> webpack版本为4.26.1，并且对webpack相关的第三方插件进行了兼容处理

> 基于 [create-react-app][4] 进行改造，增加了redux、react-router、immutable等

> 使用react-loadable做异步路由

> babel最新配置

> 使用happypack优化js、css构建，速度明显提升

> UI框架使用的是世界第二大UI框架 antd

#### 客户端渲染

本项目是客户端渲染版本，登录账号 admin ， 密码 12345 

![clipboard.png](https://segmentfault.com/img/bVbkqk8)

![clipboard.png](https://segmentfault.com/img/bVbkqla)

### Installation 教程

fork到你的账号，简单省事，或者 download 项目到本地

**1、 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。**
```
npm install 或cnpm install 或 yarn
```

**2、运行demo。**
 ```nodemon
 npm start
 ```

**4、打包发布** 

```nodemon
npm run build
```

**5、你可以尝试serve来启动服务器。**

```nodemon
npm run serve
```


### 学习ES6语法
React项目中，使用了大量的ES6语法，如果你还没有学习过ES6，那么推荐你看 [深入理解ES6笔记][2]

**如果你对该项目感兴趣，想共享一份你的力量，请大胆pull PR！**

[2]: https://github.com/hyy1115/ES6-learning
[4]: https://github.com/facebook/create-react-app
