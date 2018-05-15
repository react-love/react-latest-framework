import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'search',
            path: '/search',
            component: Loadable({
                loader: () => import('pages/Search/Search'),
                loading: () => <div />
            })
        }
    ]
}