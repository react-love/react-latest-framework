import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.less'
import { HashRouter as Router, Route } from 'react-router-dom'

/* application components */
// 首页组件不需要异步加载
import HomeContainer from './containers/Home/homeContainer';
// bundle模型用来异步加载组件
import Bundle from './bundle';
// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
import SearchContainer from 'bundle-loader?lazy!./containers/Search/searchContainer';

import BookListContainer from 'bundle-loader?lazy!./containers/BookList/bookListContainer'

// 异步加载search组件
const Search = () => (
    <Bundle load={SearchContainer}>
        {(Search) => <Search />}
    </Bundle>
)

const BookList = () => (
    <Bundle load={BookListContainer}>
        {(BookList) => <BookList />}
    </Bundle>
)

@connect (state => state)
export default class AppContainer extends React.Component {

    componentDidMount() {
        // preloads the rest
        Search(() => {})
    }
    
  render() {
      return (
          <div>
              <Router>
                  <div>
                      <Route exact path="/" component={HomeContainer} />
                      <Route path="/search" component={Search} />
                      <Route path="/bookList/:bookId" component={BookList} />
                  </div>
              </Router>
          </div>
    );
  }
}