import axios from 'axios'

const api = axios.create({
    baseURL: 'http://colabipe-dev.umbler.net/'
})
export default api;