// @flow

import React from 'react';
import { render } from 'react-snapshot';
//公共、初始化样式
import './assets/common/common.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
