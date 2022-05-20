import { Message } from "@element-plus/icons-vue/dist/types";
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urllencoded'
axios.defaults.baseURL = 'localhost:3000/static'
axios.defaults.withCredentials = true

export default function request ( url = '', type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option =  {
            url,
            method: type,
            params: {},
            data: {},
            validityState (status: number) {
                return (status >= 200 && status < 300) || status === 400
            }
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        axios(option).then(res => {
            if (res.status === 200 ) {
                resolve(res.data)
            } else {
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err => {
            Message.error('网络异常')
            reject({msg: '网络异常'})
        })
    })
    
}