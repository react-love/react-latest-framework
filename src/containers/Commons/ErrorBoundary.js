import React from 'react'
//捕捉子组件的错误
//例如
/*
* <ErrorBoundary>
*     <Header
    *     bgColor={bgClass}
    *     imgUrl={search}
     *    linkTo="search"
     *    title="react-redux架构"
     * />
 * </ErrorBoundary>
*
* */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }
  componentDidCatch(error, errorInfo) {
    this.setState(() => ({
      error: error,
      errorInfo: errorInfo
    }))
  }
  render() {
    const { errorInfo } = this.state
    if (errorInfo) {
      return <h3 style={{ color: 'red', background: '#eab3b3' }}>error</h3>
    } else {
      return this.props.children
    }
  }
}
export default ErrorBoundary
