/**
 * Created by yongyuehuang on 2016/12/15.
 */
import instance from '../utils/fetchData'

const receiveBook = (response) => ({
    type: 'RECEIVE_BOOK',
    bookDetails: response.data
})

export const getBook = () => async (dispatch, getState) => {
    try {
        let response = await instance.get(`/api/book/list`)
        await dispatch(receiveBook(response))
        return response
    } catch (error) {
        console.log('error: ', error)
    }
}