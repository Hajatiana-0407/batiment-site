import axios, { InternalAxiosRequestConfig } from "axios";

export const apiUrls = (uri: string | '') => {
    return 'http://localhost:8000/' + uri;
}

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers ) {
        config.headers.set('Authorization' , `Bearer ${token}`) ; 
    }
    return config;
});

export default api; 