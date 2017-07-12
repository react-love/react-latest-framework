#### react-redux简介
 redux是一个数据管理框架，而react-redux是专门针对react开发的一个插件。react-redux提供了2个API，**Provider**和**connect**。本来打算在一篇文章同时讲解2个API的实现，不过看了一下connect的源码，368行，还是分开解析吧。

本文带领大家分析**Provider**的核心代码。

#### 如何使用Provider

我们先了解在react项目中是如何使用Provider。

```javascript
import { Provider } from 'react-redux';
    import configureStore from './store/configureStore';

    const store = configureStore();
    ReactDOM.render((
        <Provider store={store}>
            
        </Provider>),
        document.getElementById('root')
    );
```
        
上面的代码可以看出，使用Provider分为下面几个步骤：

**1、导入Provider**
这里跟小白分享一个小知识，你可以看到Provider加了个大括号，而第二个import configureStore没有加大括号，这是因为react-redux的文件中没有指定default输出。如果指定了export default，则不需要加大括号，注意一个js文件只能有一个default。

```javascript
import { Provider } from 'react-redux';
```

**2、将store作为参数传入Provider。**

```javascript
<Provider store={store}>
        
    </Provider>
```

#### Provider源码

```javascript
import { Component, Children } from 'react'
    import PropTypes from 'prop-types'
    import storeShape from '../utils/storeShape'
    import warning from '../utils/warning'
    
    let didWarnAboutReceivingStore = false
    function warnAboutReceivingStore() {
      if (didWarnAboutReceivingStore) {
        return
      }
      didWarnAboutReceivingStore = true
    
      warning(
        '<Provider> does not support changing `store` on the fly. ' +
        'It is most likely that you see this error because you updated to ' +
        'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
        'automatically. See https://github.com/reactjs/react-redux/releases/' +
        'tag/v2.0.0 for the migration instructions.'
      )
    }
    
    export default class Provider extends Component {
      getChildContext() {
        return { store: this.store }
      }
    
      constructor(props, context) {
        super(props, context)
        this.store = props.store
      }
    
      render() {
        return Children.only(this.props.children)
      }
    }
    
    if (process.env.NODE_ENV !== 'production') {
      Provider.prototype.componentWillReceiveProps = function (nextProps) {
        const { store } = this
        const { store: nextStore } = nextProps
    
        if (store !== nextStore) {
          warnAboutReceivingStore()
        }
      }
    }
    
    Provider.propTypes = {
      store: storeShape.isRequired,
      children: PropTypes.element.isRequired
    }
    Provider.childContextTypes = {
      store: storeShape.isRequired
    }
```

#### Provider源码解析
Provider只有一个参数，非常简单，代码也仅有55行。

**1、Provider是一个react组件**

```javascript
import { Component, Children } from 'react'
    import PropTypes from 'prop-types'
    import storeShape from '../utils/storeShape'
    import warning from '../utils/warning'

    export default class Provider extends Component {
      getChildContext() {
        return { store: this.store }
      }
    
      constructor(props, context) {
        super(props, context)
        this.store = props.store
      }
    
      render() {
        return Children.only(this.props.children)
      }
    }
```

Provider组件写了3个方法，**getChildContext、constructor、render**。

constructor是构造方法，this.store = props.store中的this表示当前的组件。在构造函数定义this.store的作用是为了能够在getChildContext方法中读取到store。

你最不熟悉的可能就是getChildContext，翻译过来就是上下文。什么意思呢？又有什么用呢？我们看到getChildContext方法是返回store。接着，就看不到store哪去了。

最后执行render渲染，返回一个react子元素。Children.only是react提供的方法，this.props.children表示的是只有一个root的元素。


**2、给Provider组件设置propTypes验证。storeShape是一个封装的方法。**

```javascript
Provider.propTypes = {
        store: storeShape.isRequired,
        children: PropTypes.element.isRequired
    }

  
    //storeShape
    import PropTypes from 'prop-types'
    
    export default PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    })
```

**3、验证childContextTypes**
它的作用就是让Provider下面的子组件能够访问到store。
详细解释和用法看 [react关于context的介绍][1]

```javascript
Provider.childContextTypes = {
      store: storeShape.isRequired
    }
```

**4、node运行环境判断**
如果不是生产环境，也就是在开发环境中，实现componentWillReceiveProps()。

```javascript
if (process.env.NODE_ENV !== 'production') {
      Provider.prototype.componentWillReceiveProps = function (nextProps) {
        const { store } = this
        const { store: nextStore } = nextProps
    
        if (store !== nextStore) {
          warnAboutReceivingStore()
        }
      }
    }
```

**其实也可以把这段代码写到Provider组件内部去。**

他的作用是当接收到新的props的时候，如果是在开发环境下，就判断当前的store和下一个store是不是不相等，如果是，就执行warnAboutReceivingStore()。

```javascript
export default class Provider extends Component {
      
      componentWillReceiveProps(nextProps) {
        if (process.env.NODE_ENV !== 'production') {
          const { store } = this
          const { store: nextStore } = nextProps
    
          if (store !== nextStore) {
            warnAboutReceivingStore()
          }
        }
      }
      
      render() {
        return Children.only(this.props.children)
      }
    }
```

**5、warnAboutReceivingStore的作用。**
上面说到执行了warnAboutReceivingStore，那么warnAboutReceivingStore的作用是什么呢？

```javascript
let didWarnAboutReceivingStore = false
        function warnAboutReceivingStore() {
          if (didWarnAboutReceivingStore) {
            return
          }
          didWarnAboutReceivingStore = true
          
          warning(
        '<Provider> does not support changing `store` on the fly. ' +
        'It is most likely that you see this error because you updated to ' +
        'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
        'automatically. See https://github.com/reactjs/react-redux/releases/' +
        'tag/v2.0.0 for the migration instructions.'
      )
```

didWarnAboutReceivingStore是一个开关的作用，默认是false，也就是不执行warning操作。当props更新的时候，执行了warnAboutReceivingStore()，如果didWarnAboutReceivingStore为true，则return，否则就将didWarnAboutReceivingStore设置为true。然后就会执行warning的警告机制。

这样做的目的是不允许在componentWillReceiveProps做store的更新操作。

#### 总结
很快就到尾声了，Provider是一个react组件，提供了一个参数store，然后渲染了一个子组件，我们通常把路由渲染成子组件，最后还处理了一个异常情况，提供了warning提示。

大部分时候是这样用的。在react-router4中，也支持这种写法，Provider也可以直接嵌套在自定义的react组件中。

```javascript
<Provider store={store}>
          <Router history={hashHistory}>
                {routes}
          </Router>
    </Provider>
```

  [1]: https://facebook.github.io/react/docs/context.html
