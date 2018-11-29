import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'antd'

@connect(
  state => state.getIn(['search']),
  dispatch => bindActionCreators({}, dispatch)
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentHot: ''
    }
  }
  componentDidMount() {}
  render() {
    return (
     <div>
       <Button type="primary">登录</Button>
     </div>
    )
  }
}
Login.propTypes = {
  hotData: PropTypes.array
}
export default Login
