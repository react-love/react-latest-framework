/**
 * Created by yongyuehuang on 2017/6/7.
 */
const initState = {
    animateCls: 'normal', //过渡动画样式
}

export const global = (state = initState, action) => {
    switch (action.type) {
        case "CURRENT_ANIMATE":
            return {
                ...state,
                animateCls: action.cls
            }
        default:
            return state
    }
}