/**
 * Created by Administrator on 2016/7/2.
 */
let initNavList = {
    navMain: []
}

export function nav(state = initNavList, action) {
    switch (action.type) {
        case 'RECEIVE_NAV':
            return {
                ...state,
                navMain: action.navMain
            }

        default:
            return {...state};
    }
}