import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 100000000,
});

api.interceptors.request.use(config => {
    if (typeof window !== 'undefined') {
        config.headers.Authorization = `Bearer ${localStorage.getItem('auth')}`;
    }
    return config;
});

export default api;
