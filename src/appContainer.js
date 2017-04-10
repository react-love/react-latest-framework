import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css'
import { Route, HashRouter as Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

/* application components */
// 首页组件不需要异步加载
import HomeContainer from './containers/Home/homeContainer';
// bundle模型用来异步加载组件
import Bundle from './bundle';
// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
import SearchContainer from './containers/Search/searchContainer';

import BookListContainer from './containers/BookList/bookListContainer'

// 异步加载search组件
// const Search = () => (
//     <Bundle load={SearchContainer}>
//         {(Search) => <Search />}
//     </Bundle>
// )

// const BookList = () => (
//     <Bundle load={BookListContainer}>
//         {(BookList) => <BookList />}
//     </Bundle>
// )

@connect (state => state)
export default class AppContainer extends React.Component {

    componentDidMount() {
        // preloads the rest
        // Search(() => {})
    }
    
  render() {
        console.log('appContainer: ', this.props)
      return (
          <Router>
              <Route render={({ location }) => {
                  let cls = 'normal'
                  if (location.pathname === '/search') {
                      cls = 'left'
                  }
                  return(
                      <CSSTransitionGroup
                          transitionName={cls}
                          transitionEnter={true}
                          transitionLeave={true}
                          transitionEnterTimeout={400}
                          transitionLeaveTimeout={400}
                      >
                          <div key={location.pathname}>
                              <Route location={location} exact path="/" component={HomeContainer} />
                              <Route location={location} path="/search" component={SearchContainer} />
                              <Route location={location} path="/bookList/:bookId" component={BookListContainer} />
                          </div>
                      </CSSTransitionGroup>
                  )
              }}/>
          </Router>
    );
  }
}