###不能再多了——热更新、ES6/7、LESS、Router、async／await、本地node服务器，真实路由...
==========================================

####作者：二月  
email：1130216245@qq.com  
Difficulties can contact me directly by mail

=========================


==========================
####Installation教程
1, Method 1: 下载源代码到本地  

2, Method 2: 或者本地运行shell命令  
 git clone https://github.com/hyy1115/react-redux-book.git  
 
3, 安装依赖包
```
npm install
```

4, 运行demo
   ```
    npm start
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
                        
                    } else {
                    
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

####The next version of the perfect plan 
I hope you use the template of the students can put forward some valuable advice   

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  
