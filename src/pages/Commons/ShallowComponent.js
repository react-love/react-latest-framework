/*eslint-disable*/

// 你可以使用pureComponent替代该方法
import React from 'react'
import isEqual from 'lodash/isEqual'
const ShallowComponent = component => {
  class Shallow extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (!isEqual(this.props, nextProps) || !isEqual(this.state, nextState)) {
        return true
      } else {
        return false
      }
    }
    render() {
      return <component {...this.props} />
    }
  }
}
export default ShallowComponent
