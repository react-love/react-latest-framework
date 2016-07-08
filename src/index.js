import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, hashHistory, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Redirect from="/" to="home" />
            {routes}
        </Router>
    </Provider>),
    document.getElementById('root')
);
