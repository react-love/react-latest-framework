import React from 'react'
import Loadable from "react-loadable"
import Layout from 'components/BaseLayout'

let layout = {
		path: '/admin',
		component: Layout,
		routes: [
			{
				path: '/admin/home',
				component: Loadable({
					loader: () => import('pages/Home/Home'),
					loading: () => <div />
				}),
			},
			{
				path: '/admin/search',
				component: Loadable({
					loader: () => import('pages/Search/Search'),
					loading: () => <div />
				})
			},
			{
				path: '/admin/login',
				component: Loadable({
					loader: () => import('pages/Login/Login'),
					loading: () => <div />
				})
			}
		]
	}

export default layout