import Axios from 'axios'
import store from '@/store'

const server = Axios.create({
    baseURL: 'https://easy-mock.com/mock/5d088f627a2d233514f3eaad/wx',
    // timeout: 5000
})

server.interceptors.request.use(config => {
    // console.log(store.getters.token)

    if(store.getters.token) {
        config.headers["x-token"] = store.getters.token;
        // config.headers["uid"] = "7918270C-CDA9-4392-9E91-5AC3954071AB";
        // config.headers["token"] = "335919e409";
        // config.headers["Content-Type"] = "multipart/form-data";
    }

    return config
}, error => {
    console.error(error);
})

server.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.error(error)
})

// export default server

export function get(url, params) {
    return server.get(url, {
        params: params
    })
}

export function post(url, params) {
    console.log("POST: ", params)
    return server.post(url, params)
}