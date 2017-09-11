/**
 * Created by yongyuehuang on 2017/9/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import warning from 'fbjs/lib/warning'
/*
* 使用React.Children.map渲染列表，适用于多个子元素的情况
* <ReactChildrenMap>
*   <div>渲染内容</div>
*   <div>渲染内容</div>
* </ReactChildrenMap>
* */
export default class ReactChildrenMap extends React.PureComponent {
    render() {
        if (warningFunc(this.props.children)) {
            return <div>{React.Children.map(this.props.children, children => children)}</div>
        }
    }
}
ReactChildrenMap.propTypes = {
    children: PropTypes.array
}
function warningFunc(children) {
    if (typeof children !== 'object') {
        warning(false, '你可能传入空元素，请传入react组件或者是DOM节点，children：%s')
        return false
    }
    return true
}