import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';

var FastClick = require('fastclick');
import 'lodash'

const history = createHistory();
const middleware = routerMiddleware(history)
const logger = createLogger({ collapsed: true });

//解决移动端300毫秒延迟
FastClick.attach(document.body);
const middlewares = [thunk, middleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

render(App)

if(module.hot) {
    module.hot.accept('./App', () => { render(App) });
}