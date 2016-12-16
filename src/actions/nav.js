/**
 * Created by Administrator on 2016/7/2.
 */
import { getData, postData } from 'utils/fetchData'

//这个叫做action，用于更新reduer中的state
const receiveNav = (response) => {
    return {
        type: 'RECEIVE_NAV',
        navMain: response.data
    }
}
//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
export const getNav = () => {
    return async (dispatch, getState) => {
        try {
            console.log(getState())
            let response = await getData(`/book/navigation`)
            await dispatch(receiveNav(response))
        } catch (error) {
            console.log('error: ', error)
        }
    }
}