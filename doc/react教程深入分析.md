### react官网高级教程解析

#### 1、深入 JSX
很多人爱叫JSX为语法糖，就是吃起来很甜，用起来很爽，吃过之后还想要。JSX的写法和你写HTML5的语义化标签差不多,我们不需要
掌握使用babel编译后的代码，这些工作应该使用babelrc文件去配置，不需要理解React.createElement()语法，用它干嘛呢。

JSX让你可以像使用HTML5标签一样在JavaScript写html脚本，从而不必使用append()方法添加到html中。

JSX不只是应用在react中，我们这里只看react中JSX的应用，有以下几个特点：

**大写字母开头的JSX表示react组件、小写字母开头的JSX表示普通的JSX元素（也就是HTML脚本）**

jsx元素:
```jsx harmony
<div>jsx元素</div>
```
jsx在react中的写法：如果你看了基础教程，会知道react组件可以是函数组件，在下面的例子中，JSX指代的是return后面的部分。
请注意写react组件的时候，必须import react进来，记得react作者做过解释。
```jsx harmony
import React from 'react';
import Header from './Header';

function Parents() {
  return <Header />;
}
```

**JSX支持嵌套**
```jsx harmony
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
```

**使用扩展符传递所有的属性**
```jsx harmony
<Header {...this.props}></Header>

//或者

<Header {...props}></Header>
```

还有更多JSX使用场景，比如遍历、函数封装、条件语句中的使用等等，可以去官网看例子，也可以自己实践。

#### 2、使用 PropTypes 检查类型
类型检查是为了保证外部传递到组件的属性类型是正确的，可以帮助开发者更好的维护数据格式。

这里需要注意的是在react 15.5之前的版本，PropTypes集成到了React中。
```jsx harmony
import React from 'react'

class Child extends React.Component {
    render() {
        return <div>{this.props.name}</div>
    }
    static contextTypes = {
        name: React.PropTypes.string.isRequired
    }
}
```
在react15.5+ 版本中，PropTypes从react分离出来g成为单独的包。

**安装prop-types**
```
npm install prop-types --save
```

**在react组件中使用prop-types**：可以看项目中Header组件的实例。
```jsx harmony
import PropTypes from 'prop-types';

class Child extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Child.propTypes = {
  name: PropTypes.string
};
```

**常用的验证类型**：更多前往官网查看
```text
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
```

**给children属性验证元素的唯一性**：element表示children是一个JSX元素或者return了JSX的组件。
```jsx harmony
children: PropTypes.element.isRequired
```

**设置属性默认值**：如果设置了默认值，那么就会先赋值给组件，然后有新的数据传递进来，再执行类型验证，也就是说
默认值不做类型验证。
```jsx harmony
Child.defaultProps = {
  name: 'Stranger'
};
```

#### 3、Refs & DOM
**refs常用的使用场景：**
表单组件中，你可能需要使用refs来获取表单元素，触发focus、blur等事件。

不建议的使用方式
```jsx harmony
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
      // 曾经是这样用的
    this.refs.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref="textInput" 
        />
        <span onClick={this.focus}>点击我激活输入框</span>
      </div>
    );
  }
}
```

现在推荐的用法：回调函数，特点是input挂载成功，就会立即执行ref的回调函数
```jsx harmony
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
      // 现在是这样用的
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }}
        />
        <span onClick={this.focus}>点击我激活输入框</span>
      </div>
    );
  }
}
```

如果你需要表单组件一开始挂载就默认激活输入框，则在生命周期内执行函数操作。
```jsx harmony
componentDidMount() {
    this.textInput.focus();
  }
```

**ref只能操作DOM元素，不能作为react组件的属性**
```jsx harmony
// 这是错误的写法
<Header
    ref={(header) => { this.header = header }}
/>
```

还有一种特殊场景，在父组件中，需要获取多个子组件的ref，这时候需要使用回调函数，我也曾经做过这个功能，但我需要提醒的是，
这个功能使用起来会破坏组件内部的逻辑，所以能避免就避免。

#### 4、非受控组件
在基础篇我已经详细分析了受控组件和非受控组件的使用和区别，请前往基础篇文档查看。

#### 5、性能优化
最为困扰的就是打包后单个js文件体积过大，在实际应用中，应该从开发环境和生产环境分别来看待问题。

**开发环境中：**

不开启webpack压缩js代码，因为压缩会导致启动和热更新变的超级慢。

拆分css和js文件。

提取公共js文件。

开启前端服务器gzip压缩。

开启cheap-eval-source-map。

**生产环境中：**

开启webpack压缩模式。

拆分css和js文件。

提取公共js文件。

开启前端服务器gzip压缩。

开启source-map。

**特殊情况：**

ssr（服务端渲染），你可以考虑split（拆分）组件，但是需要考虑的问题比较多。

**shouldComponentUpdate**（判断组件是否应该更新数据）

shouldComponentUpdate默认返回true，也就是默认更新，执行render()。

```jsx harmony
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```

有时候你的组件初始化为空，但你不想让他为空的时候执行render方法，就可以检查state是否变化来控制render()。

```jsx harmony
shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
```

**Immutable.js**：不可变的数据

如果你不想使用shouldComponentUpdate，那么你可以选择Immutable.js。

#### 6、不使用 ES6
看到这个标题是不是觉得很奇怪，不使用ES6？那用什么？

官网例子使用的是下面这种
```jsx harmony
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

关于这种用法我不打算解释，因为它不被推荐使用，或许现在还有人用着这种写法，如果是，那么你最好转变一下习惯。

**Mixin：** 混入，如果你使用的是class语法，就不支持Mixin，如果你使用createReactClass，可以使用Mixin。
但请注意Mixin使用存在风险，能不用就不用。

#### 7、不使用 JSX
不使用JSX，还能用什么？

```jsx harmony
//编译前
ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```
```jsx harmony
// 编译后
ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```
你要是熟悉编译后的代码，也就是React.createElement()方法，那么你可以使用这个方法，从而不需要写JSX，我个人还是认为JSX比较容易的。

#### 8、Reconciliation

介绍了react算法的基本原理，DOM节点是否需要更新的分析，请看官网教程。

#### 9、Context

当你的组件嵌套层级较多时，每层都通过props传递属性下去，是不是觉得很麻烦，那么你可以考虑使用context，

如果你对状态管理库如Redux或Mobx不太熟悉，那就别用context了。在很多实际应用中，这些库及其React绑定是管理与许多组件相关的state的不错选择。
Redux可能是你更好的选择，而不是context。

context使用容易造成单向数据流的失控，我也就不打算使用它了。

#### 10、Web Components

在react中使用web Components

#### 11、高阶组件

#### 12、与第三方库协同
