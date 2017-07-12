在react开发中，一部分人使用redux-thunk，一部分人使用redux-saga，彼此各有优点。

今天我们来研究一下redux-thunk的源码，看看它到底做了什么事情。

#### 使用场景

```javascript
import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers/index';
    //注册thunk到applyMiddleware
    const createStoreWithMiddleware = applyMiddleware(
      thunk
    )(createStore);
    
    const store = createStoreWithMiddleware(rootReducer);
    
    //action方法
    function increment() {
      return {
        type: INCREMENT_COUNTER
      };
    }
    //执行一个异步的dispatch
    function incrementAsync() {
      return dispatch => {
        setTimeout(() => {
          dispatch(increment());
        }, 1000);
      };
    }
```        

主要代码：

**1、导入thunk**

```javascript
import thunk from 'redux-thunk';
```

**2、添加到applyMiddleware()**

```javascript
const createStoreWithMiddleware = applyMiddleware(
      thunk
    )(createStore);
```

我们可以猜测thunk是一个object。

#### redux-thunk源码

```javascript
function createThunkMiddleware(extraArgument) {
      return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
    
        return next(action);
      };
    }
    
    const thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;
    
    export default thunk;
```

一共11行，简洁，超简洁，5K+ star。

#### 源码分析

**1、定义了createThunkMiddleware()方法，可以传入参数extraArgument。**

```javascript
function createThunkMiddleware(extraArgument){}
```

**2、该方法返回的是一个action对象。**

我们知道action本身是一个object，带有type和arguments。我们将**dispatch**和**getState**传入action，next()和action()是redux提供的方法。接着做判断，如果action是一个function，就返回action(dispatch, getState, extraArgument)，否则返回next(action)。

```javascript
return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
    
        return next(action);
      };
```

**3、执行createThunkMiddleware()**

这一步的常量thunk是一个对象，类似{type: "", arg1, arg2, ...}

```javascript
const thunk = createThunkMiddleware();
```

4、给thunk设置一个变量withExtraArgument，并且将createThunkMiddleware整个函数赋给它。

```javascript
thunk.withExtraArgument = createThunkMiddleware;
```

**5、最后导出thunk。**

```javascript
export default thunk;
```

#### 总结

什么是thunk？thunk是一个中间函数，它的返回值是一个表达式。action里面可能传递多个参数，我们不可能再专门替每个action写一个传递方法。那么就有了thunk的出现，thunk可以将多个参数的函数作为一个参数传递。

例如有这样一个action，带有多个参数：

```javascript
function test(arg1, arg2, ...) {
        return {
            type: "TEST",
            arg1,
            arg2,
            ...
        }
    }
```

然后我们执行dispatch()方法，我们需要把test()函数作为一个参数传递。这样就解决了多参数传递的问题，这个test()就成了一个thunk。

如果你对redux-thunk还有疑问，可以查看这个解释：[redux-thunk of stackoverflow][1]


  [1]: https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559