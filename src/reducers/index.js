import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { nav } from './nav';
import { search } from './search';
import { books } from './book';
import { global } from './global';

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routerReducer,
  /* your reducers */
  nav, //导航相关
  search, //搜索相关
  books, //书籍相关,
  global
});

export default rootReducer;
