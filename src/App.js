import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './app.css'
import { Route, HashRouter as Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
const history = createHistory()

import * as globalActions from 'actions/global'

/* application components */
import HomeContainer from './containers/Home/homeContainer';
import SearchContainer from './containers/Search/searchContainer';
import BookListContainer from './containers/BookList/bookListContainer';

@connect (
    state => state,
    dispatch => bindActionCreators(globalActions, dispatch)
)
export default class App extends React.Component {

    componentDidMount() {
        window.addEventListener('hashchange', () => {
           this.props.currentAnimate('normal')
        })
    }
    
  render() {
      const { animateCls } = this.props.global
      console.log(animateCls)
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