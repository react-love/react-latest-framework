import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'utils/isEmpty'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/*actions*/
import { getBook, getNav } from 'actions/home'

/*component*/
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
  handleClick = title => {
    //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
    if (!!title) {
      this.setState(() => ({ isClickNav: true }))
    }
  }
  render() {
    const { navMain, bookDetails } = this.props
    const { isClickNav } = this.state
    let portalStyle = {
      width: '100%',
      height: '100%',
      background: '#fff',
      position: 'fixed',
      left: 0,
      top: 0
    }
    //还可以通过自定义样式传递给组件
    let bgClass = { background: '#00bb9c' } //定义一个背景色的变量
    return (
      <div>
        <ErrorBoundary>
          <Header
              bgColor={bgClass}
              imgUrl={search}
              linkTo="search"
              title="The book store"
          />
        </ErrorBoundary>
        <div className={styles.style_div}>
          <Nav data={navMain}
              handleClick={this.handleClick}
          />
        </div>
        <div>
          <p className={styles.style_p}>project</p>
          <Special />
        </div>
        <div>
          <p className={styles.style_p}>List of books</p>
          {bookDetails.map((ele, index) => (
            <BookList
                _id={ele._id}
                author={ele.author}
                currentPrice={ele.currentPrice}
                index={index + 1}
                key={index}
                originalPrice={ele.originalPrice}
                press={ele.press}
                publishedDate={ele.publishedDate}
                title={ele.title}
            />
          ))}
        </div>
        {isClickNav && (
          <CreatePortal id={'test'}
              style={portalStyle}
          >
            <div
                onClick={() => this.setState({ isClickNav: false })}
                style={{ width: '100%', height: '100%' }}
            >
              You click on the navigation, the activation play box, click
              anywhere close bounced
            </div>
          </CreatePortal>
        )}
      </div>
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
