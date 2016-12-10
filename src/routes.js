import React from 'react';
import { Route } from 'react-router';

/* containers */
import { AppContainer } from 'appContainer';
import { HomeContainer } from 'containers/Home/homeContainer';
import { SearchContainer } from 'containers/Search/searchContainer';

export default (
    <Route path="/" component={AppContainer}>
        <Route path="home" component={HomeContainer} />
        <Route path="search" component={SearchContainer} />
        {/*在这里添加你的Route*/}
    </Route>
);

