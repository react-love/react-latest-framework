import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import { nav } from './nav';
import { search } from './search';
import { books } from './book'

//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routeReducer,
  /* your reducers */
  nav, //导航相关
  search, //搜索相关
  books, //书籍相关
});

export default rootReducer;
