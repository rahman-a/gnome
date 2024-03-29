import axios from 'axios'

const api = _ => {
    const {token} = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
    return axios.create({
        baseURL:'/api/',
        headers:{Authorization:`Bearer ${token}`}
    })
}

export default api