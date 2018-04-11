/**
 * Created by Administrator on 2017/12/27.
 */
import React from 'react'

function withSetTitle(WrapperComponent, title) {
  return class SetDocumentTitle extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        title: title
      }
    }
    componentWillMount() {
      this.setTitle()
    }
    componentWillReceiveProps() {
      this.setTitle()
    }
    setTitle() {
      const { title } = this.state
      document.title = title
    }
    render() {
      return <WrapperComponent {...this.props} />
    }
  }
}
export default withSetTitle
