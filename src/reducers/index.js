import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';

import { nav } from './nav';
import { search } from './search';

//注册reducer
const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  nav, //导航相关
  search, //搜索相关
});

export default rootReducer;
