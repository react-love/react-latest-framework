###热更新、ES6/7、LESS、Router、redux、async／await、本地node服务器，按需加载...

==========================================

本源码gitbook教程：https://www.gitbook.com/book/hyy1115/react-redux/details  （正在撰写中）

欢迎加我交流：https://hyy1115.github.io/huangyongyue/  （可以查看本框架上线产品）  

2017-03-11更新：  

1、增加proxy代理解决跨域，详情可以查看我写的相关文档：https://segmentfault.com/a/1190000008635891  

2、将api移植到前端服务器访问，避免安装后端。

3、增加ajax请求超时设置，默认设置10s超时。

4、更新react-router版本为3.0.2稳定版，webpack@2.2.1稳定版以及多个插件升级新稳定版。

5、删除不必要的插件，并且优化了路由部分的代码。

6、优化了打包代码，解决重复渲染的问题。

7、增加lodash插件，方便处理常见数据操作。

=========================

这份代码不只是一个demo，不只是一个todo List，而是一个完整的react-redux-webpack开发方案。

状态树  
![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/store.png) 

==========================

####Installation教程
1, 方法 1: 下载源代码到本地  

2, 方法 2: 或者本地运行shell命令  
```
 git clone https://github.com/hyy1115/react-redux-webpack.git
 
```
 
3, 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。
```
npm install 或者cnpm install
```

4, 运行demo。
   ```
    mac
    npm run start-mac
    
    windows
    npm run start-win
   ```

5, 将会开启3011端口.
```
http://localhost:3011

```

6, 打包发布。

```
mac
npm run build-mac

windows
npm run build-win
``` 

===========================================

####如何应用本框架到你的项目上？
1，在container文件夹下面新建你的页面父容器，比如本例子中的homeContainer，一个基本的container模板如下所示。  
```
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
    state => state,
    dispatch => bindActionCreators(。。。, dispatch)
)
export class HomeContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        
    }

    render() {
        return(
            <div className="">
                这里调用导入的各个子组件模块
            </div>
        );
    }
}
```

2，接着你就需要将定义好的container写入路由，这样你就可以在浏览器上通过路由访问这个页面了。  
```
    import React from 'react';
    import { Route } from 'react-router';
    
    /* containers */
    import { AppContainer } from 'appContainer';
    import { HomeContainer } from 'containers/Home/homeContainer';
    
    export default (
        <Route path="/" component={AppContainer}>
            <Route path="home" component={HomeContainer} />
        </Route>
    );
```

3，假设你现在已经在component下面写好了一个导航组件nav，然后你要在container发action去异步请求后端的导航API，将获取的数据dispatch到reducer中。  

container部分
```
componentWillMount() {
        const { navMain } = this.props.nav //这个叫做es6的解构赋值
        if (navMain.length === 0) {
        //如果state中的navMain对象为空，则调用getNav方法
            this.props.getNav();
        }
    }
```
action部分
```
import { getData, postData } from 'utils/fetchData'

//这个叫做action，用于更新reduer中的state
const receiveNav = (response) => {
    return {
        type: 'RECEIVE_NAV',
        navMain: response.data
    }
}
//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
export const getNav = () => {
    return async (dispatch) => {
        try {
            let response = await getData(`/api/book/navigation`)
            await dispatch(receiveNav(response))
        } catch (error) {
            console.log('error: ', error)
        }
    }
}
```

reducers部分
```
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
```

4，到这一步，你已经完成了基本的一个数据流的控制了，需要注意的是，reducers中自定义的reducer需要在reducers文件夹下面的index.js里面注册。
  
```
import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import { nav } from './nav';

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routeReducer,
  /* your reducers */
  nav, //导航相关
});

export default rootReducer;
```

5，store文件夹下面的js已经配置好了，除非你需要加上react的谷歌调试插件，否则不需要做任何修改。  

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
