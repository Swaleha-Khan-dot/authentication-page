import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        toast.error('Request error: ' + error.message);
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        if (response.config.method !== 'get') {
            toast.success(`✅ ${response.status} ${response.statusText}`);
        }
        return response;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || 'Something went wrong';

            if (status === 401) {
                localStorage.removeItem('token');
                toast.error('Session expired. Please log in again.');
                window.location.href = '/login';
            } else {
                toast.error(`Error ${status}: ${message}`);
            }
        } else if (error.request) {
            toast.error('❌ No response from server. Please check your network.');
        } else {
            toast.error(`Error: ${error.message}`);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;


