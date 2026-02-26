import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

// Configure QueryClient
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});

// Axios instance — reads base URL from .env (VITE_API_BASE_URL)
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://13.205.31.140:8000/api/v1',
    withCredentials: true, // sends refreshToken cookie automatically
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach accessToken from localStorage to every request
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth API
export const authAPI = {
    login: async (credentials) => {
        const response = await axiosInstance.post('/auth/login', credentials);
        return response;
    },

    register: async (userData) => {
        const response = await axiosInstance.post('/auth/register', userData);
        return response;
    },

    logout: async () => {
        const response = await axiosInstance.post('/auth/logout');
        return response;
    },

    forgotPassword: async (email) => {
        const response = await axiosInstance.post('/auth/forgot-password', { email });
        return response;
    },

    resetPassword: async (token, password) => {
        const response = await axiosInstance.post('/auth/reset-password', { token, password });
        return response;
    },
};

// Courses API
export const coursesAPI = {
    getCourses: async (filters = {}) => {
        const params = new URLSearchParams(filters);
        const response = await axiosInstance.get(`/courses?${params}`);
        return response;
    },

    getCourseById: async (id) => {
        const response = await axiosInstance.get(`/courses/${id}`);
        return response;
    },
};
