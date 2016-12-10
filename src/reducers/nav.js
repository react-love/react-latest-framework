/**
 * Created by Administrator on 2016/7/2.
 */
// 初始化状态
let initNavList = {
    navMain: [],
    current: 1
}

export function nav(state = initNavList, action) {
    switch (action.type) {
        case 'RECEIVE_NAV':
            return {
                ...state,   //三个点是展开符
                navMain: action.navMain
            }

        default:
            return {...state};
    }
}