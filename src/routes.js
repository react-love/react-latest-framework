import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { AppContainer } from './appContainer';
import { HomeContainer } from './containers/Home/homeContainer';

const searchContainer = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Search/searchContainer').default)
    },'search')
}

const bookListContainer = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/BookList/bookListContainer').default)
    },'bookList')
}

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="home" component={HomeContainer} />
        <Route path="search" getComponent={searchContainer} />
        <Route path="bookList/:bookId" getComponent={bookListContainer}/>
        {/*在这里添加你的Route*/}
    </Route>
);

