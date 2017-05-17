/**
 * Created by Administrator on 2016/7/2.
 */
import instance from 'utils/fetchData'

//这个叫做action，用于更新reduer中的state
const receiveNav = (response) => ({
    type: 'RECEIVE_NAV',
    navMain: response.data
})

//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
export const getNav = () => async (dispatch, getState) => {
    try {
        let response = await instance.get(`/api/book/navigation`)
        await dispatch(receiveNav(response))
    } catch (error) {
        console.log('error: ', error)
    }
}