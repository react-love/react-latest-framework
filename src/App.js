import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setGlobalLoading } from 'actions/global'
import Loading from 'components/Loading/Loading'

@connect(
    state => state.getIn(['global']),
    dispatch => bindActionCreators({ setGlobalLoading }, dispatch)
)
class App extends React.Component {
    componentDidMount () {
        this.hiddenLoading()
    }
    componentDidUpdate () {
        this.hiddenLoading()
    }
    hiddenLoading = () => {
        const { globalLoading } = this.props
        if (globalLoading) {
            setTimeout(() => {
                this.props.setGlobalLoading(false)
            }, 0)
        }
    }
    render () {
        const { globalLoading } = this.props
        return (
          <Router>
              <div>
                    {globalLoading && <Loading />}
                  {
                      routes.map((r, key) => {
                          return (
                              <Route
                                  render={props => (<r.component {...props} routes={r.routes} />)}
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
}
export default App
