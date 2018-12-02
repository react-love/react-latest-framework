let isLogin = sessionStorage.getItem('isLogin')
const initState = {
  globalLoading: false, // 全局loading
  isLogin: !!isLogin ? (isLogin === 'true' ? true : false) : false // 登录状态
}

export const global = (state = initState, action) => {
  switch (action.type) {
    case 'SET_GLOBAL_LOADING':
      return {
        ...state,
        globalLoading: action.globalLoading
      }
    case "CHECK_IS_LOGIN":
      sessionStorage.setItem('isLogin', action.isLogin)
      return {
        ...state,
        isLogin: action.isLogin
      }
    default:
      return state
  }
}
