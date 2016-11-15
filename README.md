###不能再多了——热更新、ES6/7、LESS、Router、async／await、本地node服务器，真实路由...
==========================================

####作者：二月  
email：1130216245@qq.com  
Difficulties can contact me directly by mail

=========================

注意：这份代码不只是一个demo，不只是一个todo List，而是一个完整的react-redux-webpack开发方案，我个人用这套总结的方案已经发布了3个企业项目，

该方案包含了开发阶段的调试，代码检查，开发效率，实时更新，state存储模式，异步模式，组件结构的管理，打包部署到服务器。

与github上其他开源不同的是，这份代码采用了合理的redux架构，适合个人或者团队开发。  

有遇到issue的开发者可以反馈给我，有其他插件使用不明白的也可以反馈。

==========================
####Installation教程
1, Method 1: 下载源代码到本地  

2, Method 2: 或者本地运行shell命令  
```
 git clone https://github.com/hyy1115/react-redux-webpack.git
```
 
3, 安装依赖包
```
npm install
```

4, 运行demo
   ```
    npm start
   ```

5, 发布,参考http://blgxbook.win/  
  网页打开的很慢，需要稍等片刻，发布的纯静态页面，没有接node服务器。
```
npm run build
```

===========================================

####相关介绍
1，网站制作了两页，在页面之间路由跳转。  
```
    <Route path="/" component={AppContainer}>
        <Route path="home" component={HomeContainer} />
        <Route path="search" component={SearchContainer} />
    </Route>
```

2，组件负责调用action方法，然后分派到相应的reducer，reducer负责更新状态。  
```
    componentWillMount() {
        this.props.getNav();
    }
```

3，实现热更新，实时监控js和css的变化。  
```
entry: [
    'webpack-hot-middleware/client?path=http://localhost:3007/__webpack_hmr&reload=true&noInfo=false&quiet=false',
    'babel-polyfill',
    './src/index'
  ],
```

4，用axios包装数据访问层，并用最终的异步解决方案async，await做异步处理。  
```
const receiveNav = (response) => {
    return {
        type: 'RECEIVE_NAV',
        navMain: response.data
    }
}

export const getNav = () => {
    return async (dispatch) => {
        try {
            await getData(`/book/navigation`)
                .then(response => {
                    dispatch(receiveNav(response))
                })
        } catch (error) {
            console.log('error: ', error)
        }
    }
}
```

5，配置jsx语法写if..else ...函数，但是三元表达式仍然可以使用。  
```
render() {
    return (
        <div>
            {
                do {
                    if (true) {
                    //这里不需要return方法，直接用dom结构表示
                        <div>111</div>
                    } else {
                        <div>2222</div>
                    }
                }
            }
        </div>
    )
}
```

6，最重要的功能，本地节点服务器，省去了单独配置mockserver，server.js文件里面的后端api接口，注意遵循restful规范,请注意，server文件不能使用import导入，只能使用require，如果你需要import，请自行添加解析器。
```
var navigation = require(`./data/navigation.json`)

app.get('/book/navigation', function (req, res) {
  res.json(navigation)
})
```

===================================================

####版本更新说明
从第一次发布react-redux版本到现在，已经做了好几次重大修复，抛弃了一些方案，也增加了一些方案。

sass/scss：在第二版发布到时候就已经删除，并没有有效提高样式到管理效率和布局效率，而且需要安装framework 2.0，看到这我就默默到选择了放弃，不想折腾mac。

less：目前到版本采用到方案，安装依赖包简单，语法也和scss相似，后期我打算用flex来做开发，不排除抛弃less，重新回到css到怀抱。

路由到选择：有2个方案，hashHistory 和 browserHistory，初期采用到是hashHistory，但是由于不是真实路由，所以目前到版本我把它更换成了browserHistory，
browserHistory有个问题要注意，当刷新网页到时候，会找不到真实路径，需要在server做一些配置，具体可以看我在本地server上写到代码。

JSX：JSX语法不再只是支持三元表达式，还支持if（）else（），强大到没话可说。

异步用fetch还是axios：fetch到方案我也用过，具体看http://sutouying.cn  ，axios是我目前使用到插件，具体看http://www.fagougou.com  ，
这2个方案可操作性都差不多，在使用babel编译到条件下，没有明显区别，都可以使用。

async还是promise：不用纠结这个问题，我们知道fetch通常和promise结合使用，而用axios，我更喜欢使用async，有时候也会用到promise。

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  
