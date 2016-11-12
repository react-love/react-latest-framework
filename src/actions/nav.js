/**
 * Created by Administrator on 2016/7/2.
 */
import { getData, postData } from 'utils/fetchData'

const receiveNav = (response) => {
    return {
        type: 'RECEIVE_NAV',
        navMain: response.data
    }
}

export const getNav = () => {
    return async (dispatch) => {
        try {
            await getData(`/book/navigation`)
                .then(response => {
                    dispatch(receiveNav(response))
                })
        } catch (error) {
            console.log('error: ', error)
        }
    }
}