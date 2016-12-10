import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, hashHistory, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
var FastClick = require('fastclick');

const store = configureStore();

//解决移动端300毫秒延迟
FastClick.attach(document.body);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Redirect from="/" to="home" />
            {routes}
        </Router>
    </Provider>),
    document.getElementById('root')
);