import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'home',
            path: '/',
            exact: true,
            component: Loadable({
                loader: () => import('pages/Home/Home'),
                loading: () => <div />
            })
        }
    ]
}