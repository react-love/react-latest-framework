import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import persistState from 'redux-localstorage'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import BaseRouter from 'react-router-dom/HashRouter'
import BaseRouter from 'react-router-dom/BrowserRouter'
import { routerReducer } from 'react-router-redux'
import App from './App'
import rootReducer from './reducers/index'
import initReactFastclick from 'react-fastclick'
import 'utils/flexible'
import './app.less'

//解决移动端300毫秒延迟
initReactFastclick()

const middlewares = [thunk]

const enhancer = compose(
  persistState(/*paths, config*/)
)

const store = createStore(
  combineReducers({ routing: routerReducer, ...rootReducer }),
  composeWithDevTools(applyMiddleware(...middlewares), enhancer)
)

const render = Component =>
  ReactDOM.render(
      <Provider store={store}>
        <BaseRouter>
          <Component />
        </BaseRouter>
      </Provider>,
    document.getElementById('root')
  )

render(App)