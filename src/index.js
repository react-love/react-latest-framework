import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
// import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router/immutable'
import Immutable from 'immutable'
import thunk from 'redux-thunk'
import App from './App'
import rootReducer from './reducers/index'
import initReactFastclick from 'react-fastclick'
import 'utils/flexible'
import 'antd/dist/antd.css'
import './app.less'

//解决移动端300毫秒延迟
initReactFastclick()

const history = createBrowserHistory()

const initialState = Immutable.Map()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
)

const wrraper = Component =>
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <Component />
        </StoreContext.Provider>,
        document.getElementById('root')
    )

wrraper(App)
