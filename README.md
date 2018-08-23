<p align="center"><img width="100" src="https://segmentfault.com/img/bVZwRf?w=516&h=457" /></p>

# React技术栈长期开源项目

[![Build Status](https://travis-ci.org/hyy1115/react-latest-framework.svg?branch=master)](https://travis-ci.org/hyy1115/react-latest-framework.svg?branch=master)  [![codebeat badge](https://codebeat.co/badges/8be7b4c1-85f3-4da9-ab23-d470624b40ad)](https://codebeat.co/projects/github-com-hyy1115-react-redux-webpack2-master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

**适用人群：该框架集成了react开发常用技术栈，适用于想要学习单向数据流框架搭建的新手、以及想要一个比较干净、简洁的框架从事前端项目的开发者。**

### 4.1.0版本更新说明

> webpack升级到4.17.1，并且对各个插件进行了兼容

> 该框架基于 [create-react-app][4] 进行改造，增加了redux、移动端适配等功能，与此同时，增加了路由配置文件

> 脚手架的配置你可以直接参考create-react-app的官方文档

#### 客户端渲染

本项目是客户端渲染版本

#### 服务端渲染

虽然客户端渲染可以实现首屏请求最少的js资源，但是服务端渲染也是有他的优势所在，

关注SEO的开发者推荐使用基于本框架的服务端渲染版本：https://github.com/hyy1115/react-next

# 
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

**4、打包发布 ** 

```nodemon
npm run build
```

**5、你可以尝试serve来启动服务器。**

```nodemon
npm run serve
```

#

#### 关于DOC文档教程的解释

非常抱歉的是由于各个插件版本升级太快，一些文档教程没有实时跟上维护修改。

#### echarts 使用方案
想要在react恰当的使用echarts，可以查看 [react中使用echarts的最优方案][1]

#### 学习ES6语法
React项目中，使用了大量的ES6语法，如果你还没有学习过ES6，那么推荐你看 [深入理解ES6笔记][2]

#### 更多React教程
这里积累了react博客+react官方文档的中文翻译
[React系列教程][3]

**如果你对该项目感兴趣，想共享一份你的力量，请大胆pull PR！**

[1]: https://github.com/hyy1115/react-echarts-modules
[2]: https://github.com/hyy1115/ES6-learning
[3]: https://github.com/hyy1115/Front-end-course/tree/master/React%E7%B3%BB%E5%88%97
[4]: https://github.com/facebook/create-react-app
