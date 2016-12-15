/**
 * Created by yongyuehuang on 2016/12/15.
 */
let initState = {
    bookDetails: []
}

export function books(state = initState, action) {
    switch (action.type) {
        case 'RECEIVE_BOOK':
            return {
                ...state,
                bookDetails: action.bookDetails
            }

        default:
            return {...state};
    }
}