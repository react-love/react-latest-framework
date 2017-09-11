import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Route, Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
const history = createHistory()

/*
 全局导入less
 */
import './app.less'

import * as global from 'actions/global'
import asyncComponent from './AsyncComponent'

import Home from 'containers/Home/Home'
import ReactChildrenMap from 'utils/ReactChildrenMap'
const Search = asyncComponent(() => import(/* webpackChunkName: "search" */ "./containers/Search/Search"))
const BookList = asyncComponent(() => import(/* webpackChunkName: "bookList" */ "./containers/BookList/BookList"))

@connect (
    state => {return {...state.global}},
    dispatch => bindActionCreators(global, dispatch)
)
export default class App extends React.Component {

    componentDidMount() {
        window.addEventListener('hashchange', () => {
           this.props.currentAnimate('normal')
        })
    }
    
  render() {
      const { animateCls } = this.props
      return (
          <Router history={history}>
              <Route render={({ location }) => {
                  return(
                      <CSSTransitionGroup
                          transitionName={animateCls}
                          transitionEnter={true}
                          transitionLeave={true}
                          transitionEnterTimeout={400}
                          transitionLeaveTimeout={400}
                      >
                          <ReactChildrenMap key={location.pathname}>
                              <Route location={location} exact path="/" component={Home} />
                              <Route location={location} path="/search" component={Search} />
                              <Route location={location} path="/bookList/:bookId" component={BookList} />
                          </ReactChildrenMap>
                      </CSSTransitionGroup>
                  )
              }}/>
          </Router>
    );
  }
}