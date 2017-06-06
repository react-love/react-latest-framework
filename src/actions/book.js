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
        let response = await instance.get(`/book/list`)
        await dispatch(receiveBook(response.data))
        return response
    } catch (error) {
        console.log('error: ', error)
    }
}