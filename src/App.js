import React, { useEffect, useContext, useCallback } from 'react'
import { useDispatch, useMappedState, StoreContext } from 'redux-react-hook'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import { setGlobalLoading } from 'actions/global'
import Loading from 'components/Loading/Loading'

export default function App() {
    /*
     * @description 从redux取值——方案1
     * */
    const store = useContext(StoreContext)
    const { globalLoading } = store.getState().toJS().global
    const dispatch = useDispatch()

    /*
     * @description 从redux取值——方案2
     * */
    // const mapState = useCallback(
    //     state => ({
    //         global: state.toJS().global
    //     }),
    //     [],
    // );
    // const { global } = useMappedState(mapState);

    const hiddenLoading = () => {
        if (globalLoading) {
            dispatch(setGlobalLoading(false))
        }
    }

    useEffect(() => {
        hiddenLoading()
    })
    return (
        <Router>
            <div>
                {globalLoading && <Loading/>}
                {
                    routes.map((r, key) => {
                        return (
                            <Route
                                render={props => (<r.component {...props} routes={r.routes}/>)}
                                exact={!!r.exact}
                                key={r.path + key}
                                path={r.path}
                            />
                        )
                    })
                }
            </div>
        </Router>
    )
}
