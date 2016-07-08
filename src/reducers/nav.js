/**
 * Created by Administrator on 2016/7/2.
 */
let initNavList = {
    navMain: [
        {
            id: 1,
            text: '商业金融'
        },
        {
            id: 2,
            text: '历史文学'
        },
        {
            id: 3,
            text: '法律文献'
        },
        {
            id: 4,
            text: '语言书籍'
        },
        {
            id: 5,
            text: '信息技术'
        },
        {
            id: 6,
            text: '艺术设计'
        },
        {
            id: 7,
            text: '音乐鉴赏'
        },
        {
            id: 8,
            text: '运动健康'
        },
        {
            id: 9,
            text: '其他书籍'
        }

    ]
}

export function nav(state = initNavList, action) {
    switch (action.type) {
        case 'RECEIVE_NAV':
            let result = {
                ...state,
            }
            return result;

        default:
            return state;
    }
}