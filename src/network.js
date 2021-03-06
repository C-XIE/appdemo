import axios from 'axios'

const PROD_BASE_URL = 'https://raw.githubusercontent.com/BelinChung/api-mock/master/HiApp'
axios.defaults.baseURL = PROD_BASE_URL

// Add a request interceptor
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
    const data = response.data
    return !data.err_code ? data : Promise.reject(data)
}, error => {
    return Promise.reject(error)
})