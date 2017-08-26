import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index'

var FastClick = require('fastclick')

//按模块导入lodash，可以有效减小vendor.js的大小
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import debounce from 'lodash/debounce'
import isArray from 'lodash/isArray'

window.isEmpty = isEmpty
window.isEqual = isEqual
window.debounce = debounce
window.isArray = isArray

const history = createHistory()
const middleware = routerMiddleware(history)

//解决移动端300毫秒延迟
FastClick.attach(document.body)
const middlewares = [thunk, middleware]

const store = createStore(
    combineReducers({routing: routerReducer, ...rootReducer}),
    composeWithDevTools(applyMiddleware(...middlewares))
)

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )

render(App)

if(module.hot) {
    module.hot.accept('./App', () => {
        const NextRootContainer = require('./App').default
        render(NextRootContainer)
    })
}