import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { home } from './home';
import { search } from './search';
import { global } from './global';

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routerReducer,
  /* your reducers */
  home, //首页相关
  search, //搜索相关
  global
});

export default rootReducer;
