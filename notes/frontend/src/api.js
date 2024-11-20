//axios = HTTP client library that you can use to make requests from React application

import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => { //to see if we have access token
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  }
)


export default api