### 欢迎来到react的世界，下面你将会学习到react技术栈是如何使用的

#### 1、认识本项目的结构

我采用的是react、redux、webpack2、react-router4的基本架构，属于经典主流类型。

**文件夹介绍**

```
doc：项目文档  

mock：静态数据

public：静态图片

src：前端主目录

test：基本测试代码

根目录下面的 server.js和webpack.config.js需要多关注一下。
```

### 2、修改前端服务器端口号

在server.js中
```javascript
var port = 3011; //修改成你需要的端口
```

### 3、开启代理服务器

我们有时候会遇到跨域访问数据的问题，这时候你可以选择开启 server.js 中的代理服务器。
```javascript
//现在你只需要执行这一行代码，当你访问需要跨域的api资源时，就可以成功访问到了。
// app.use('/api/*', proxy({
//     target: 'http://www.baidu.com',
//     changeOrigin: true
// }))
```

### 4、webpack.config.js的作用

webpack的配置文件是一个object，你只需要记住webpack的配置都是通过设置entry、output等参数的值，还有更加丰富的功能去官网看看。

### 5、src目录的介绍

这个目录的重要性不言而喻，你今后的绝大部分react代码都会在该目录结构下组织，当前采用的是redux架构，所以你会看到整体目录结构由redux的几个主要部分构成。

```
action：redux的控制中心，任何一个状态state的更新操作都需要dispatch一个action去修改。这一步在一些人看来是鸡肋的操作，他们会觉得观察者模式比你这个统一大脑指挥中心方便多了。

components：管理比较细的一些组件。比如Header、Form、Banner等。

containers：管理路由级别的组件，这些大组件往往是一整个页面，内部嵌套了很多小组件，也可能嵌套其他路由级组件进来。

reducers：这里是redux的数据管理中心，reducer是纯函数，你不能在reducer中修改当前的state，只能返回一个新的state，如果你直接修改state，将不能重新渲染。

utils：一些工具js的管理。

app.css：基本的css配置，你也可以把reset.css或者其他初始化样式的css写入app.css中。

App.js：我们叫他根组件，在SPA应用中，通常只有一个根组件。

AsyncComponent.js：react-router4中使用的懒加载代码，目前我已经注释掉，有需求的可以自己尝试使用。

index.js：webpack中entry使用的入口js文件，包括store的管理，根组件的渲染都在该文件中。

```

### 6、实现一个首页的流程步骤解析

有了这样一个搭建好的框架，你如果是个初学者，是不是很想快点用它做出自己的网站，下面我就将首页的实现过程大概梳理一下，之后你可以尝试写一个属于自己的页面。

**第一步**：想要用react写一个网页，你的第一个想法便是去container目录新建一个文件夹，比如Home，表示当前首页的路由组件homeContainer.js，文件名我通常开头不大写，但是在class HomeContainer中就需要开头大写了。
此外，还需要在Home文件夹下面新建files和styles，分别用来存放当前组件的图片等资源和样式。

**第二步**：你可以开始写homeContainer组件的代码了，通常一个基本的路由组件是下面这种结构。
```javascript
import React, { Component } from 'react'; //react必须导入
import { bindActionCreators } from 'redux'; //bindActionCreators用来绑定你的action到该组件上
import { connect } from 'react-redux'; //connect()是个函数，顾名思义是把react和redux连接起来。
import PropTypes from 'prop-types'; //PropTypes原来是在React中使用，现在被官方拆分出来单独管理。

import Header from 'components/Home/header'; //导入子组件，子组件写在components文件夹。

require(`./styles/home.less`); //导入首页样式

//请注意@connect()必须写在组件的上面，而且紧挨着组件，不要拆散他们俩。
@connect(
    state => state
)
export default class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <Header title="" imgUrl="" linkTo="" bgColor="" match=""/>
            </div>
        )
    }
}

```
**第三步**：去components文件夹下面，新建一个Home文件夹，于containers下面的Home文件夹一一对应，这样做的好处是父子组件既能分开管理，也能快速找到。
接着在Home下面新建header.js文件。子组件可以是函数，也可以是react类型的组件。我在这里定义的是一个react子组件。
```
import React, { Component } from 'react'; //无论是函数组件还是react组件，都需要导入React。
import { Link } from 'react-router-dom'; //Link相当于a标签。
import PropTypes from 'prop-types'; 
//header子组件只作为数据渲染，数据从父组件传递到子组件使用props。在jsx中绑定数据使用大括号。请注意标签中的class需要改成classname，而style里面写成object的形式。
如果你不喜欢字符串之间的参数用加号拼接，那么可以使用`${value}`的方式。
export class Header extends React.Component {
    render() {
        const {title, imgUrl, linkTo, bgColor, match} = this.props
        return (
            <header className='header' style={bgColor}>
                {title}
                <Link to={`${match.url + linkTo}`} className="a_link" >
                    <img src={imgUrl} className="a_img" />
                </Link>
            </header>
        )
    }
}
```

**第四步**：我们现在还没有用到action和reducer，别着急，看到nav.js组件没？Nav组件是一个li列表，列表的文案数据是从HomeContainer父组件传递过来的，这些菜单列表数据我用静态json文件的方式
写在了mock文件夹下面，正常情况下，它可能在你的后端服务器，也就是说你需要请求ajax返回导航数据。

可以思考一下，在什么时候、什么地方去请求后端的导航数据呢？

我是在homeContainer组件的componentWillMount（即将渲染前，也就是还没有开始渲染）使用ajax请求接口数据。有人可能会在componentDidMount（渲染完成后）再去服务器拿数据，当然，你喜欢这样，没人拦着。


是不是直接在componentWillMount写ajax代码就行了呢？别忘了你已经使用了redux，这时候你就需要在action中新建一个js，然后定于一个action用来发送保存从后端接收到的导航数据。
```
//这个就是传说中的action，他只是返回一个对象，可以是多个参数。
const receiveNav = (response) => ({
    type: 'RECEIVE_NAV',
    navMain: response.data
})
```
通常你的ajax代码写在当前action的下面，两者写在一起管理非常方便，要是写到其他文件夹下面，到时候你的项目一大，找个ajax都找不到，特别头疼。

这是一个异步函数，你可以选择使用Promise或者其他异步方法，我在这里使用的是async/await，dispatch是redux中非常重要的一个方法。
```javascript
export const getNav = () => async (dispatch, getState) => {
    try {
        let response = await getData(`/api/book/navigation`) //ajax请求采用axios插件
        await dispatch(receiveNav(response)) //靠着这个神奇的dispatch()，可以直接调用action对应的函数，去更新store里面的数据。
    } catch (error) {
        console.log('error: ', error)
    }
}
```

**第五步**：现在数据有了，我们知道redux是单向数据流，那么数据会从action流向哪里呢？答案就是reducer。在reducers文件夹下面，新建一个nav.js文件，
reducer作为数据流向store最后一层屏障，每次都会拷贝一个新的state，所以通常是这种写法。
```javascript
// 初始化状态
let initNavList = {
    navMain: []
}

export function nav(state = initNavList, action) {
    switch (action.type) {
        case 'RECEIVE_NAV':
            return {
                ...state,   //三个点是展开符
                navMain: action.navMain
            }

        default:
            return {...state};
    }
}

我们看看第一个case里面return出来的是什么东西

{
    navMain: [data]
}
原来navMain是一个空数组，当有数据返回的时候，整个initNavList就会拷贝一个新的对象出来，注意这个initNavList仅仅是整颗store状态树的一部分节点。
```

**第六步**：你是不是有点好奇，为什么action和reducer不需要import或者require文件，数据就会那么听话的流过来呢？

答案就在reducers文件夹下面的index.js文件中。你如果在reducer文件夹下面新建了js文件，需要在该文件夹下的index.js中注册你的reducer。

```javascript
//关键的2个插件

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
```

**第七步**：reducer写好了，那么数据下一步就要流向container组件了。来吧，宝贝。
在路由组件（或者叫做父组件）中，关联state和action是其中非常重要的一环，不然你是无法读取state和action的。

```javascript
import * as navActions from 'actions/nav'; //导入nav文件下面的所有函数，不管是action函数ajax方法

@connect(
    state => state,
    dispatch => bindActionCreators({...navActions}, dispatch)
)

```
接着你就可以在组件中通过props的方式去调用action里面的方法了。
```javascript
componentWillMount() {
        const { navMain } = this.props.home //读取reducer中的nav。

        //如果state中的navMain为空，那么就执行getNav()函数去请求后端导航数据。
        if (navMain.length === 0) {
            this.props.getNav();
        }
    }
```
**第八步**：父子组件和数据都写好了，想要运行在网页上测试一下？你还有最后一步没有完成呢。

最关键的：路由。

在appContainer中，管理主要的路由组件，具体看代码。
```javascript
import HomeContainer from './containers/Home/homeContainer';

<Route location={location} exact path="/" component={HomeContainer} />

```

### 关于CSSTransitionGroup动画的解释
在AppContainer.js文件里面，你已经看到了react过渡动画的使用方式，需要注意以下几点。

1、保证key的唯一性：我把location.pathname当做key
```text
 key={location.pathname}
```

2、CSSTransitionGroup配置参数的解释：
```text
    transitionName：动画样式名称
    transitionEnter：是否允许进入动画显示
    transitionLeave：是否允许离开动画显示
    transitionEnterTimeout：进入动画的执行时长
    transitionLeaveTimeout：离开动画的执行时长
```
以app.css中的左移样式为例子：

```css
.left-enter {} 初始

.left-enter.left-enter-active {} 激活动画

.left-leave {} 初始

.left-leave.left-leave-active {} 激活动画
```
left 表示 transitionName，那么为什么有个enter和leave分别有2个状态呢？因为css3动画需要一个初始状态的值。

这里又一个难理解的地方是enter和leave到底代表的是什么？

enter：指新路由进入时候执行的动画。

leave：指旧路由离开时候执行的动画。

在项目中，假设你当前在首页，当你点击右上角的搜索时，首页会向左移动，搜索页面也从右边向左边移出来。
也就是说，首页就是执行leave的动画，而搜索页面执行enter的动画。

如果单单通过路由的pathname来控制动画的样式，还是不够的，想要更加丰富的动画效果，你可能需要一个全局变量或者action来控制样式的调用。