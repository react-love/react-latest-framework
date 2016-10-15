/**
 * Created by Administrator on 2016/7/2.
 */
import { getData, postData } from 'utils/fetchData'
export const RECEIVE_NAV = 'RECEIVE_NAV';

const receiveNav = (response) => {
    return {
        type: RECEIVE_NAV,
        navMain: response.data
    }
}

export const getNav = () => {
    return async (dispatch) => {
        try {
            await getData(`/test`)
                .then(response => {
                    dispatch(receiveNav(response))
                })
        } catch (error) {
            console.log('error: ', error)
        }
    }
}