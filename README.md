
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

#### 2017.8.27 更新

1、升级babel到最新稳定版

2、升级webpack到3.5.5

3、更新css和less提取模式，由于webpack开发环境不支持css热更新，所以不单独提取css，而在生成环境下，单独打包css模块。

4、全面优化组件，vendor.js打包体积有所减少，线上开启gzip之后仅有92.1kb，点击上面的链接在线查看

5、完善eslint规则

#### 2017.6.17 更新

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

**升级V2小提示：(不建议升级)**
1、修改css动画class退出属性
```css
.example-leave {
  opacity: 1;
}
.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}

/*leave 改为 exit*/

.example-exit {
  opacity: 1;
}

.example-exit.example-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
```
2、CSSTransitionGroup替换成TransitionGroup和CSSTransition，同时修改props
```javascript
import {TransitionGroup, CSSTransition} from 'react-transition-group'

class A extends React.Component {
    render() {
        return (
            <TransitionGroup>
                <CSSTransition 
                    key={location.pathname}
                    classNames={animateCls}
                    enter={true}
                    exit={true}
                    timeout={{exit: 400, enter: 400}}
                >
                    <div>
                        <Route location={location} exact path="/" component={homeContainer} />
                        <Route location={location} path="/search" component={Search} />
                        <Route location={location} path="/bookList/:bookId" component={BookList} />
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

```

#### 加入我们的组织
**微信群已超过100人，如果你需要加群，请私聊我。**

![image](https://segmentfault.com/img/bVQYb6?w=564&h=786)

#### 参与开源项目的方法（详情可以网上搜索教程）

**如果你对该项目感兴趣，想共享一份你的力量，请大胆pull PR！**