import React from 'react'
import Loadable from "react-loadable"

let config = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('pages/Home/Home'),
      loading: () => <div />
    })
  },
  {
    name: 'search',
    path: '/search',
    component: Loadable({
      loader: () => import('pages/Search/Search'),
      loading: () => <div />
    })
  },
  {
    name: 'login',
    path: '/login',
    component: Loadable({
      loader: () => import('pages/Login/Login'),
      loading: () => <div />
    })
  }
]

export default config