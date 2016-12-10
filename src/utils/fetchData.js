/**
 * Created by admin on 2016/10/10.
 */
import axios from 'axios'

//封装好的get和post接口，调用方法情况action文件
axios.defaults.baseURL = BASE_URL;

export const getData = (url, param) => {
    return (
        axios.get(`${url}`, {
            params: param
        })
    )
}

export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
}