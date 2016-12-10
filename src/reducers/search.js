/**
 * Created by Administrator on 2016/7/2.
 */
let initData = {
    hotData: [
        {
            id: 1,
            text: '会计从业'
        },
        {
            id: 2,
            text: 'c语言程序设计'
        },
        {
            id: 3,
            text: '高等数学'
        },
        {
            id: 4,
            text: 'JavaScript'
        },
        {
            id: 5,
            text: '网页设计'
        },
        {
            id: 6,
            text: 'Photoshop'
        },
        {
            id: 7,
            text: '英语四级'
        },
        {
            id: 8,
            text: '线性代数'
        },
        {
            id: 9,
            text: '公务员考试'
        }
    ]
}

export function search(state = initData, action) {
    switch (action.type) {
        case 'RECEIVE_HOT_SEARCH':
            return {
                ...state
            }

        default:
            return state;
    }
}