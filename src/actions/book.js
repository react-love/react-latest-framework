/**
 * Created by yongyuehuang on 2016/12/15.
 */
import { getData, postData } from '../utils/fetchData'

const receiveBook = (response) => ({
    type: 'RECEIVE_BOOK',
    bookDetails: response.data
})

export const getBook = () => async (dispatch, getState) => {
    try {
        let response = await getData(`/api/book/list`)
        await dispatch(receiveBook(response))
        return response
    } catch (error) {
        console.log('error: ', error)
    }
}