import React from 'react';
import { connect } from 'react-redux';
import './app.css'
import { Route, HashRouter as Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

/* application components */
import HomeContainer from './containers/Home/homeContainer';
import SearchContainer from './containers/Search/searchContainer';
import BookListContainer from './containers/BookList/bookListContainer';

@connect (state => state)
export default class AppContainer extends React.Component {
    
  render() {
      return (
          <Router history={history}>
              <Route render={({ location }) => {
                  console.log('location.pathname: ', location)
                  let cls = 'normal'
                  if (location.pathname === '/search') {
                      cls = 'left'
                  } else if (location.pathname.indexOf('bookList') > -1) {
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