在redux的配置文件中，如果你使用了redux-logger，也许你会写下面这样一段代码：
```javascript
    import thunk from 'redux-thunk';
    import promise from 'redux-promise';
    import createLogger from 'redux-logger';
    
    const logger = createLogger();
    const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
    const store = createStoreWithMiddleware(reducer);
```
    
现在，我们只关注redux-logger，我们可以看到使用redux-logger分为下面几个步骤：

**1、导入redux-logger**

```javascript
import createLogger from 'redux-logger';
```
    
**2、运行createLogger方法，将返回结果赋值给常量**

```javascript
const logger = createLogger();
```

**3、将looger传入applyMiddleware()**

```javascript
applyMiddleware(logger)
```
    
有2个难点，第一是createLogger()的返回值到底是如何实现的。第二就是applyMiddleware方法如何处理返回值。因为本文是讲redux-logger的实现，所以我们只分析createLogger()

#### redux-logger中createLogger方法源码

```javascript
const repeat = (str, times) => (new Array(times + 1)).join(str);
    const pad = (num, maxLength) => repeat(`0`, maxLength - num.toString().length) + num;
    
    //使用新的性能API可以获得更好的精度（如果可用）
    const timer = typeof performance !== `undefined` && typeof performance.now === `function` ? performance : Date;
    
    function createLogger(options = {}) {
      return ({ getState }) => (next) => (action) => {
        const {
          level, //级别
          logger, //console的API
          collapsed, //
          predicate, //logger的条件
          duration = false, //打印每个action的持续时间
          timestamp = true, //打印每个action的时间戳
          transformer = state => state, //在打印之前转换state
          actionTransformer = actn => actn, //在打印之前转换action
        } = options;
    
        const console = logger || window.console;
    
        // 如果控制台未定义则退出
        if (typeof console === `undefined`) {
          return next(action);
        }
    
        // 如果谓词函数返回false，则退出
        if (typeof predicate === `function` && !predicate(getState, action)) {
          return next(action);
        }
    
        const started = timer.now();
        const prevState = transformer(getState());
    
        const returnValue = next(action);
        const took = timer.now() - started;
    
        const nextState = transformer(getState());
    
        // 格式化
        const time = new Date();
        const isCollapsed = (typeof collapsed === `function`) ? collapsed(getState, action) : collapsed;
    
        const formattedTime = timestamp ? ` @ ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}` : ``;
        const formattedDuration = duration ? ` in ${took.toFixed(2)} ms` : ``;
        const formattedAction = actionTransformer(action);
        const message = `action ${formattedAction.type}${formattedTime}${formattedDuration}`;
        const startMessage = isCollapsed ? console.groupCollapsed : console.group;
    
        // 渲染
        try {
          startMessage.call(console, message);
        } catch (e) {
          console.log(message);
        }
    
        if (level) {
          console[level](`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState);
          console[level](`%c action`, `color: #03A9F4; font-weight: bold`, formattedAction);
          console[level](`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        } else {
          console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState);
          console.log(`%c action`, `color: #03A9F4; font-weight: bold`, formattedAction);
          console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        }
    
        try {
          console.groupEnd();
        } catch (e) {
          console.log(`—— log end ——`);
        }
    
        return returnValue;
      };
    }
    
    export default createLogger;
```

#### 解析redux-logger

**1、入口函数createLogger(options = {})**
我们在redux配置文件中调用的就是这个函数，也是redux-logger中唯一一个函数，它只有一个参数option，option是object。

**2、return ({ getState }) => (next) => (action) => {}**
这行代码看起来很复杂，一堆的箭头函数，其实很简单，createLogger()一定会有一个返回值，但是，我们在控制台打印action信息的时候，需要获取state和action的信息，所以，首先传入getState方法，getState是redux提供的一个方法，用来获取store的state。然后再传入next方法，接着传入action方法。next和action都是redux提供的方法，到这一步，我们就把需要的参数都传入到函数中，可以进行下一步操作了。

**3、定义option的配置参数**
我们在使用redux-logger的时候，习惯了不配置任何参数，直接调用createLogger()，使用默认的配置。但其实还可以手动传入一个option配置，不过并不常用。

```javascript
const {
          level, //级别
          logger, //console的API
          collapsed, //
          predicate, //logger的条件
          duration = false, //打印每个action的持续时间
          timestamp = true, //打印每个action的时间戳
          transformer = state => state, //在打印之前转换state
          actionTransformer = actn => actn, //在打印之前转换action
        } = options;
```

**4、定义console**
如果你给option配置了console相关的API，那么就使用你的配置，如果没有配置，就使用window.console

```javascript
const console = logger || window.console;
```

**5、添加2个异常情况做退出处理**
第一个if语句是控制台未定义就返回下一个action操作，但是我想不到在浏览器中会出现console方法不存在的情况。
第二个if语句的predicate表示warn、log、error等属于console的方法。&&表示2个条件要同时满足才执行下面的操作。predicate(getState, action)其实就是类似console.log(getState, action)

```javascript
// 如果控制台未定义则退出
        if (typeof console === `undefined`) {
          return next(action);
        }
    
        // 如果谓词函数返回false，则退出
        if (typeof predicate === `function` && !predicate(getState, action)) {
          return next(action);
        }
```

**6、给各个常量赋值**
为什么会有这么多常量呢？我们来看一张图，图上展示了需要打印的各种信息。

![clipboard.png](https://segmentfault.com/img/bVQK0J?w=1366&h=562)

**总结出来就是：**

action **action.type** @ **timer**  
  prev state **{}**  
  action **{}**  
  next state **{}**  

**这里需要的是action.type, timer, 各种状态下的state**


```javascript
const started = timer.now();
    const prevState = transformer(getState());
    
    const returnValue = next(action);
    const took = timer.now() - started;
    
    const nextState = transformer(getState());
    
    // 格式化
    const time = new Date();
    const isCollapsed = (typeof collapsed === `function`) ? collapsed(getState, action) : collapsed;
    
    const formattedTime = timestamp ? ` @ ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}` : ``;
    const formattedDuration = duration ? ` in ${took.toFixed(2)} ms` : ``;
    const formattedAction = actionTransformer(action);
    const message = `action ${formattedAction.type}${formattedTime}${formattedDuration}`;
    const startMessage = isCollapsed ? console.groupCollapsed : console.group;
```

**上面代码信息量比较大，我们还可以拆分出来看看。**

a、先获取一个开始时间**started**，然后读取state，这个state是之前的状态**prevState**。**returnValue**是返回值，返回下一个action。**took**是你执行完前面3行代码之后的真实时间，在这里因为没有用到异步处理，所以我暂且认为transformer()和next()是同步的。**nextState**是新的state。

**这段代码归纳起来看就是先读取开始时间，然后读取state，这个state因为还有更新action，所以是旧的state，然后执行next传入新的action，更新完成之后，获取结束时间，计算更新action的时间差，然后再获取更新后的state。**

```javascript
    const started = timer.now();
    const prevState = transformer(getState());        
    const returnValue = next(action);
    const took = timer.now() - started;
    const nextState = transformer(getState());
```

b、下面的代码做了一件事情，设置打印的信息。

**formattedTime**是打印出来的时间，格式是 时:分:秒，**formattedDuration**是时间差，**formattedAction**是当前的action方法。**isCollapsed**用处不大，不管他。

```javascript
// 格式化
    const time = new Date();
    const isCollapsed = (typeof collapsed === `function`) ? collapsed(getState, action) : collapsed;
    
    const formattedTime = timestamp ? ` @ ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}` : ``;
    const formattedDuration = duration ? ` in ${took.toFixed(2)} ms` : ``;
    const formattedAction = actionTransformer(action);
    const message = `action ${formattedAction.type}${formattedTime}${formattedDuration}`;
    const startMessage = isCollapsed ? console.groupCollapsed : console.group;
```

这几行代码做的事情也非常简单，给需要打印的常量赋值。然后组合之后赋值给message：

```javascript
const message = `action ${formattedAction.type}${formattedTime}${formattedDuration}`;
```

**message == action action.type @ time**

**7、try {} catch() {} 部分一般不会用到，也可以不管。**

startMessage.call(console, message);表示将message当做参数传入startMessage，call的第一个参数是指运行环境，意思就是在console打印message信息。

```javascript
try {
      startMessage.call(console, message);
    } catch (e) {
      console.log(message);
    }
```
    
**8、打印console的信息，这就图上打印出来的部分了。**

因为我们通常没有配置level，所以执行的是else语句的操作。

```javascript
    if (level) {
          console[level](`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState);
          console[level](`%c action`, `color: #03A9F4; font-weight: bold`, formattedAction);
          console[level](`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        } else {
          console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState);
          console.log(`%c action`, `color: #03A9F4; font-weight: bold`, formattedAction);
          console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        }
```

**9、游戏结束**

```javascript
try {
          console.groupEnd();
        } catch (e) {
          console.log(`—— log end ——`);
        }
```
    
**10、返回值**

```javascript
return returnValue;
```

#### 总结
redux-logger做的事情是在控制台输出action的信息，所以首先要获取前一个action，当前action，然后是下一个action。看完之后，你对redux-logger源码的理解加深了吗？
