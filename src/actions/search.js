/**
 * Created by Administrator on 2016/7/2.
 */
// action是一个纯对象，不要觉得它是一个函数，要看return回来的其实就是一个object
export const receiveHotSearch = () => ({
    type: 'RECEIVE_HOT_SEARCH'
})