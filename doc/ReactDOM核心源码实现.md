### ReactDOM核心代码
```javascript
//注入各种依赖
import ReactDefaultInjection from './ReactDefaultInjection';
// 提供了10个API，这里只调用了render和unmountComponentAtNode
import ReactMount from './ReactMount';
// 提供了6个API，这里调用了batchedUpdates
import ReactUpdates from './ReactUpdates';
//react版本号，当前是15.6.1
import ReactVersion from './ReactVersion';
//访问真实DOM
import findDOMNode from './findDOMNode';
// 导出ReactMount的renderSubtreeIntoContainer方法
import renderSubtreeIntoContainer from './renderSubtreeIntoContainer';
//执行注入函数
ReactDefaultInjection.inject();
const ReactDOM = {
    findDOMNode,
    render: ReactMount.render, //开发者最常用到的API
    unmountComponentAtNode: ReactMount.unmountComponentAtNode, //卸载的时候调用，通常我们用不到它
    version: ReactVersion, //ReactDOM自身的版本号管理
    unstable_batchedUpdates: ReactUpdates.batchedUpdates, //实现了一个批量更新组件策略的方法
    unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer //这里可以改成 ReactMount.renderSubtreeIntoContainer
};
export default ReactDOM;
```
执行console.log(ReactDOM.version)，可以在控制台打印出当前使用的react版本号。

### 依赖包代码分析

#### ReactMount核心代码
```javascript
const instancesByReactRootID = {};
let topLevelRootCounter = 1;
class TopLevelWrapper {
    constructor() {
        this.rootID = topLevelRootCounter++;
    }
    render() {
        return this.props.child;
    }
}
TopLevelWrapper.isReactTopLevelWrapper = true;
var ReactMount = {
    TopLevelWrapper, 
    _instancesByReactRootID: instancesByReactRootID,
    scrollMonitor(container, renderCallback) {},
    _updateRootComponent(prevComponent, nextElement, nextContext, container, callback) {},
    _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context) {},
    renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {},
    _renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {},
    render(nextElement, container, callback) {}, //ReactDOM中对应的render方法，渲染组件
    unmountComponentAtNode(container) {}, //ReactDOM中对应的unmountComponentAtNode方法，卸载组件
    _mountImageIntoNode(markup, container, instance, shouldReuseMarkup, transaction) {}
};
export default ReactMount;
```

**使用render**
render方法通常用在入口文件中，他可以传递3个参数。nextElement可以是react组件或者DOM元素，container表示react将要渲染在该父元素下，callback表示渲染完之后你可以使用回调函数做一些操作。
```JavaScript
render(nextElement, container, callback) {
    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
}
```
很多时候，我们只使用到前面2个参数。
```javascript
<div id="root"></div>
ReactDOM.render(
  <HelloMessage name="测试" />,
  document.getElementById('root')
);
```
你也可以使用第三个参数。
```javascript
ReactDOM.render(
  <HelloMessage name="测试" />,
  document.getElementById('root'),
  () => console.log('渲染完成')
);
```

**让我们看看ReactDOM.render方法如何实现渲染**
在ReactMount文件中，有这样一行代码，负责将DOM渲染到根元素上。
```javascript
setInnerHTML(container, markup);
```
setInnerHTML()的实现：
```javascript
/* createMicrosoftUnsafeLocalFunction(fn)是一个针对win phone8设备的一个函数，如果非win phone8，则直接返回fn。
*  container对应node，markup对应html
*/
let setInnerHTML = createMicrosoftUnsafeLocalFunction((node, html) => {
	//DOMNamespaces定义了3种旧版本的文档流，如果当前网页的文档DocType的文档流和DOMNamespaces.svg的相等，同时innerHTML是node对象下的属性，就是有svg渲染。目的是兼容旧版本的文档。
    if (node.namespaceURI === DOMNamespaces.svg && !('innerHTML' in node)) {
        reusableSVGContainer = reusableSVGContainer || document.createElement('div');
        reusableSVGContainer.innerHTML = `<svg>${html}</svg>`;
        const svgNode = reusableSVGContainer.firstChild;
        while (svgNode.firstChild) {
            node.appendChild(svgNode.firstChild);
        }
    } else {
    //通常是直接使用innerHTML渲染到node节点下面。
        node.innerHTML = html;
    }
});
```
DOMNamespaces对象的3种文档类型：
```javascript
var DOMNamespaces = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg'
};
```

#### ReactUpdates核心代码
```javascript
var ReactUpdates = {
    ReactReconcileTransaction: null,
    batchedUpdates, //批量更新
    enqueueUpdate, //队列更新
    flushBatchedUpdates,
    injection: ReactUpdatesInjection,
    asap
};
export default ReactUpdates;
```
ReactUpdates是为了实现react内部的组件更新而设计的一组API，开发者不需要使用它。

#### findDOMNode核心代码
```javascript
import ReactDOMComponentTree from './ReactDOMComponentTree';
import ReactInstanceMap from './ReactInstanceMap';
import getHostComponentFromComposite from './getHostComponentFromComposite';

function findDOMNode(componentOrElement) {
	//传入的参数为空，则返回null
    if (componentOrElement == null) {
        return null;
    }
    //传入的是真实DOM，则返回真实DOM
    if (componentOrElement.nodeType === 1) {
        return componentOrElement;
    }
    //传入的是组件实例，则返回这个组件render()下面的真实DOM。
    let inst = ReactInstanceMap.get(componentOrElement);
    if (inst) {
        inst = getHostComponentFromComposite(inst);
        return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
    }
}
export default findDOMNode;
```
**使用findDOMNode**
findDOMNode返回值是真实DOM，它接受一个DOM实例或者是一个真实的DOM节点作为参数。
在一个react组件中，我们可以使用findDOMNode获取当前组件的真实DOM。
```javascript
class Test extends React.Component {
	componentDidMount() {
    	console.log(ReactDOM.findDOMNode(this)) // <div>DOM内容</div>
    }
	render() {
    	return <div>DOM内容</div>
    }
}
```
这个方法不推荐使用，你可以使用ref代替它。````