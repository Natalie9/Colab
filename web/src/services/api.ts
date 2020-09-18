import axios from 'axios'

const api = axios.create({
    baseURL: 'http://redecolab-com.umbler.net'
})
export default api;