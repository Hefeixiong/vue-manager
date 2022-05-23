import request  from "../utils/request"

const _URL = { 
    LOGIN: '/user.json',
    GET_INFO: '/user.json'
}

export default {
    getInfo () {
        return request(_URL.GET_INFO)
    },
    
    login (username: String , password: String) {
        return request(_URL.LOGIN, 'POST', {username: String, password: String})
    }
}