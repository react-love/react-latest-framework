import React from 'react'
import Route from 'react-router-dom/Route'

/*
 全局导入less
 */
import './app.less'

import asyncComponent from './AsyncComponent'

import Home from 'containers/Home/Home'
import ReactChildrenMap from './containers/Commons/ReactChildrenMap'
const Search = asyncComponent(() => import(/* webpackChunkName: "search" */ './containers/Search/Search'))
const BookList = asyncComponent(() => import(/* webpackChunkName: "bookList" */ './containers/BookList/BookList'))

const App= () => {
    return (
        <Route render={({ location }) => {
            return(
                <ReactChildrenMap key={location.pathname}>
                    <Route
                        component={Home}
                        exact
                        location={location}
                        path="/"
                    />
                    <Route
                        component={Search}
                        location={location}
                        path="/search"
                    />
                    <Route
                        component={BookList}
                        location={location}
                        path="/bookList/:bookId"
                    />
                </ReactChildrenMap>
            )
        }}
        />
    )
}
export default App