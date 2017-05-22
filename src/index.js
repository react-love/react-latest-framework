import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import AppContainer from './appContainer';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';

var FastClick = require('fastclick');
import 'lodash'

const history = createHistory();
const middleware = routerMiddleware(history)
const logger = createLogger({ collapsed: true });

//解决移动端300毫秒延迟
FastClick.attach(document.body);
let store;
if(process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
        thunk,
        logger,
        middleware
    )));
} else {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
        thunk,
        middleware
    )));
}

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    );
}

render(AppContainer)

if(module.hot) {
    module.hot.accept('./appContainer', () => { render(AppContainer) });
}