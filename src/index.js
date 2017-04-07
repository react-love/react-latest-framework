import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import AppContainer from './appContainer';

var FastClick = require('fastclick');
import 'lodash'

const store = configureStore();

//解决移动端300毫秒延迟
FastClick.attach(document.body);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename="/">
            <AppContainer />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);