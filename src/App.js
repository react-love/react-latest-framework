import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'

const App = () => {
  return (
    <Router>
        <div>
            {
                routes.map((r, key) => {
                    return (
                        <Route
                            render={props => <r.component {...props} routes={r.routes} />}
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
export default App
