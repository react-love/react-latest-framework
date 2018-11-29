import React from 'react'
import Loadable from "react-loadable"
import Layout from 'components/BaseLayout'
import layout from './layout'

let config = [
  {
    path: '/',
    exact: true,
    component: Layout
  },
  layout,
  {
    path: '/test',
    component: Loadable({
      loader: () => import('pages/Test'),
      loading: () => <div />
    })
  }
]
export default config