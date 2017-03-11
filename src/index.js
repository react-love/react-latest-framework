import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, hashHistory, browserHistory } from 'react-router'
import routes from './routes';
var FastClick = require('fastclick');
import 'lodash'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
history.listen(location => console.log("导航事件： ", location.pathname))

//解决移动端300毫秒延迟
FastClick.attach(document.body);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);