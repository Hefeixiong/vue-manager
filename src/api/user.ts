import request  from "../utils/request"

const _URL = { 
    GET_INFO: '/user.json'
}

export default {
    getInfo () {
        return request(_URL.GET_INFO)
    }
}