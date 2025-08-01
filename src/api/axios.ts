import axios from 'axios';
import { useAuthStore } from '@/stores/auth'

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: apiUrl
});

api.interceptors.request.use(function (config) {
    const authStore = useAuthStore();
    const token = authStore.token;
    
    if (token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const authStore = useAuthStore();

    if (error.response?.status === 401)
        authStore.logout();

    return Promise.reject(error);
});

export default api