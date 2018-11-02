import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'utils/isEmpty'
//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/*actions*/
import { getBook, getNav } from 'actions/home'

/*component*/
import Layout from 'components/BaseLayout'
import ErrorBoundary from 'pages/Commons/ErrorBoundary'
import Header from './components/Header'
import Nav from './components/Nav'
import Special from './components/Special'
import BookList from './components/BookList'
import CreatePortal from 'create-portal'
import styles from './styles/home.less'

/*files*/
const search = require('./files/search.svg')


@connect(
  state => state.getIn(['home']),
  dispatch => bindActionCreators({ getBook, getNav }, dispatch)
)
class Home extends React.Component {
  state = {
    isClickNav: false
  }
  componentDidMount() {
    const { navMain, bookDetails } = this.props
    if (isEmpty(navMain)) {
      this.props.getNav()
    }
    if (isEmpty(bookDetails)) {
      this.props.getBook()
    }
  }
  render() {
    return (
      <Layout>
        <div>
        
        </div>
      </Layout>
    )
  }
}
Home.propTypes = {
  navMain: PropTypes.array,
  bookDetails: PropTypes.array,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}
export default Home
