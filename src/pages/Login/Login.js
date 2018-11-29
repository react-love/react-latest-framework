import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
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
      当前是登录页
      <NavLink to="/test">
          <Button type="primary"> 去测试页 </Button>
      </NavLink>
     </div>
    )
  }
}
Login.propTypes = {
  hotData: PropTypes.array
}
export default Login
