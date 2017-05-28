## react官网教程基础解析

### 1、使用redux和没有redux，react写法有什么不同吗？
答：组件写法一样，但是state不一定交给组件内部管理，可能放到store上统一管理。

### 2、认识react，一个hello world！
```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

### 3、如何使用react？
答：推荐你使用ES6语法来写react，首先你需要Babel编译你的ES6代码，其次，你才可以使用比如 => （箭头函数），class（类），模板文字，let和const语句等ES6语法。

### 4、JSX介绍
答：JSX是一种表达式，它有一个根标签，在内部可以嵌入表达式，使用{}（大括号）包裹起来。它看起来就是html的一部分，或者叫一个html模块。
```javascript
class T extends React.Component {
    render() {
        return <div className="left-enter" style={}>{value}</div>
    }
}
```
从上面的代码例子你可以看到几个和html不同的地方，class =》className，style是一个object，你还可以在dom元素中使用{}插入数据。

使用JSX还可以防止XSS（跨站脚本攻击），因为JSX只是表达式，它需要先转换成字符串，然后才能渲染到真实DOM上面，但对于真正的黑客来说，这种做法也不是安全的。

### 4、元素和组件的概念
react组件：
```javascript
class T extends React.Component {
    render() {
        return <div className="left-enter" style={}>{value}</div>
    }
}
```
react元素：
```javascript
<div className="left-enter" style={}>{value}</div>
```

### 5、组件的使用
**函数组件**：函数组件没有状态和生命周期，但是你可以返回一个react元素。
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
**class组件**：非常强大，有自己的state和生命周期。和函数组件一样，class组件也需要返回一个react元素。
```javascript
class Welcome extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
在一个庞大复杂的网站应用中，要如何拆分组件呢？官网上说组件拆分的越细，复用性就越强，从实际开发中来看，这个说法没有错，但是
会带来一个比较严重的问题，就是组件太多，管理起来不方便。有人使用第三方react组件的时候，只有那些文档非常强大的开源组件
才能给你的开发提高效率。如果你自己的组件也想拆分到细致，那么写好文档是最重要的一步。

react还提到了一点，传递给组件的数据是"只读"的，要保证组件中的数据是"纯数据"，输入即输出。那么，如果你需要在组件中修改props.data
该怎么做呢？

```javascript
render() {
    const { data } = this.props
    //定义一个新的变量来保存修改后的值。
    let _data = data + 1;
}
```

### 6、组件的状态和生命周期
前面我们提到组件分为函数组件和类组件，函数组件是无状态，类组件有状态和生命周期。

**什么是状态？**

答：通俗理解，就是组件不同时候的不同表现，比如，一个按钮组件，可能有激活状态，不可点击状态，显示状态，隐藏状态等，在react用state来保存这些状态。
而state本身不仅仅表示组件状态，还可以保存组件的数据。
```javascript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isShow: true,
        text: props.text,
        disabled: true
    };
  }

  render() {
      const { isShow, text, disabled} = this.state
      return <button disabled={disabled} style={{display: isShow ? "block" : "none"}}>{text}</button>
  }
}
```

如果要修改state，请使用，注意，你不能在render函数里面直接修改state，而是要通过事件去触发state更新。
```javascript
this.setState({
    isShow: false,
    disabled: false
})
```

由于setState有批处理功能，所以该方法可能不一定同步更新，如果你需要依赖上一次的状态和本次状态的计算，那么需要写成下面这种形式。
```javascript
this.setState((prevState, props) => {    
      text: prevState.text++
    });
```
demo网址：http://codepen.io/hyy1115/pen/GmdOKJ?editors=0011

有时候，子组件不需要关注自身的状态，而是通过父组件的状态来改变，这时候的子组件可以写成函数形式，通过props传递父组件给的状态。


**react生命周期**
生命周期表示组件的一生，从出生到辉煌到死亡，中间最主要也是最常用的3个状态是：

componentWillMount：出生了，把组件的状态和属性都设置好。

componentDidMount：渲染出来了，我不再是JSX，而是真实DOM了。

componentWillUnmount：要死了，死之前把遗产处理好。

```javascript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isShow: true,
        text: props.text,
        disabled: true
    };
  }
  
  componentWillMount() {
      //出生了，可以给我数据和设置我的状态
  }
  componentDidMount() {
      //活着多好
  }
  componentWillUnmount() {
      //要死了，把我的一生痕迹都清除
  }

  render() {
      const { isShow, text, disabled} = this.state
      return <button disabled={disabled} style={{display: isShow ? "block" : "none"}}>{text}</button>
  }
}
```

还有其他几个生命周期，并不是非常常用，需要用到的时候去看下别人的博客。

### 7、事件处理
```jsx harmony
 <button onClick={(e) => this.handleClick(e)}>
 按钮
</button>

<input type="text" onChange={(e) => this.handleClick(e)} />
```

### 8、条件渲染
前面button的例子我们已经使用到了条件渲染，条件渲染通过state来判断，常用的是控制style、className、DOM属性，JSX。

举几个常用的例子。

```jsx harmony
render() {
    return (
        <div>
        {
            this.state.isShow && <button>按钮</button>    
        }
        </div>
    )
}
```
```jsx harmony
render() {
    return (
        <div>
        {
            this.state.isShow ? <button>按钮</button> : <span>文本</span>
        }
        </div>
    )
}
```
```jsx harmony
render() {
    return <button disabled={this.state.disabled}>按钮</button>
}
```

### 9、列表渲染

2个注意点：

数组要判断是否为空；

必须给一个key。

```jsx harmony
render() {
    const { arr } = this.state
    return arr.length > 0 && arr.map((value, key) => <li key={key}>{value}</li> )
}
```

### 10、表单
我曾经经历过的一次阿里的面试，就考到了react表单的知识点。

**受控组件**：由react控制输入的表单组件。

在下面的例子中，input的value值由state来决定，用户输入触发onChange事件，然后更新state，达到修改value的目的。
```jsx harmony
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
          <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}

```
或许你没看出来和正宗input元素的区别，看一个真实DOM元素的例子,value由inupt自身维护，我们没有给value绑定值。
```html
<input type="text">
```

textarea和input是一样的用法。

select有些许不同，将value绑定到select上，而不是option。
```jsx harmony
<select value={this.state.value} onChange={this.handleChange}>
    <option value="1">1</option>
    <option value="2">2</option>
</select>
```
还有一种是多个输入框的情况，比如登录，有账号、密码等，这时候操作这些不同的input可以通过ref或者name，class，id等方法去setState，看
官方demo。
```jsx harmony
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
      </form>
    );
  }
}
```

**不受控组件**：很简单，就是DOM自己维护状态的组件，不受react控制。你可以给它设置defaultValue，但是不能去setState。
```jsx harmony
<input type="text" ref={(input) => this.input = input} defaultValue="默认值"/>
```

相信有人会试过设置defaultValue之后执行了setState去修改value，这样做控制台会发出警告。

**总结**：受控组件是指受react控制的组件，表单组件中的value和state同步，不受控组件是指不受react控制的组件，表单组件中的
value不通过state同步，只能操作DOM去读取value。

### 11、状态提升
你一定听说过变量提升，函数提升，那么状态提升是什么呢？

首先你得了解双向绑定和单向数据流，双向绑定中，数据可以在不同的组件之间实现共享，这样做的确有很大的好处，但是在react中，
不推荐使用双向绑定，而是使用状态提升的方式。

记得和阿里的一个面试官聊的时候，他要求我用react实现双向绑定，而我认为react应该采用状态提升来实现。最后没说服他，或许让Dan来
和他聊聊才有用，哈哈。

状态提升：state推崇单向数据流，数据从父组件通过props流向子组件，如果你在子组件中，需要修改state来和其他子组件共享数据更新，
你需要使用回调函数给使数据更新给父组件，然后从父组件流向其他的子组件，这样做是保证数据有单一的来源。

如果实子组件和子组件之间任意共享数据，那么，后期维护会比较痛苦，特别是找bug的时候。

看一个状态提升的例子吧。

```jsx harmony

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.upDateValue(e.target.value);
  }

  render() {
    const {name, value} = this.props;
    return (
      <div>
        <p>{name}：</p>
        <input value={value}
               onChange={this.handleChange} 
          />
      </div>
    );
  }
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', name: ''};
    
    this.upDateValue = this.upDateValue.bind(this);
  }

  upDateValue(value) {
    this.setState({value: value})
  }
  
  render() {
    const {value} = this.state;

    return (
      <div>
        <Child name="组件1" value={value} upDateValue={this.upDateValue} />
        <Child name="组件2" value={value} upDateValue={this.upDateValue} />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);

```
demo网址：http://codepen.io/hyy1115/pen/xdjoZQ?editors=0011

### 12、选择组合还是继承？
用过原生js或者jQuery的同学可能对基础非常熟悉，继承可以实现扩展很多功能。

在react组件开发中，我们的每个react组件都是继承于React.Component。
```jsx harmony
class MyComponent extends React.Component {
    
}
```
我们不推荐你继承MyComponent。
```jsx harmony
//不推荐
class NextComponent extends MyComponent {
    
}
```
你应该充分利用react组件的强大性能，开发各种你需要的组件继承至React.Component。组件之间的嵌套非常强大，你可以嵌套函数组件，嵌套类组件。

详情前往：https://facebook.github.io/react/docs/composition-vs-inheritance.html

### 最后
react基础分析到此为止，学会这些基本的知识，你已经可以做出非常丰富的react应用了，当然，结合https://github.com/hyy1115/react-redux-webpack2/tree/v1.0.1来
学习可以让你更快实践出产品。
