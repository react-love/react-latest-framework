//该文件是Provider源码，从这个HOC中，你可以学习到什么？自己看吧！

import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { storeShape, subscriptionShape } from 'utils/PropTypes'

export function createProvider(storeKey = 'store', subKey) {
  const subscriptionKey = subKey || `${storeKey}Subscription`
  class Provider extends Component {
    constructor(props, context) {
      super(props, context)
      this[storeKey] = props.store
    }
    getChildContext() {
      return { [storeKey]: this[storeKey], [subscriptionKey]: null }
    }
    render() {
      return Children.only(this.props.children)
    }
  }
  Provider.propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
  }
  Provider.childContextTypes = {
    [storeKey]: storeShape.isRequired,
    [subscriptionKey]: subscriptionShape
  }
  return Provider
}
export default createProvider()
