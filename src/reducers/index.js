import { combineReducers } from 'redux-immutable'
import { home } from './home'
import { search } from './search'
import { global } from './global'
const rootReducer = combineReducers({
  /* your reducers */
  home, //首页相关
  search, //搜索相关
  global
})
export default rootReducer
