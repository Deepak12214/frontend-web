import { useQuery, useMutation } from '@tanstack/react-query';
import { authAPI } from '../services/api/apiService';

/**
 * Mutation hook for user login
 * @returns {Object} Mutation result
 */
export const useLogin = () => {
    return useMutation({
        mutationFn: authAPI.login,
        onSuccess: (data) => {
            // Store token in localStorage
            if (data.token) {
                localStorage.setItem('authToken', data.token);
            }
        },
    });
};

/**
 * Mutation hook for user registration
 * @returns {Object} Mutation result
 */
export const useRegister = () => {
    return useMutation({
        mutationFn: authAPI.register,
        onSuccess: (data) => {
            // Store token in localStorage
            if (data.token) {
                localStorage.setItem('authToken', data.token);
            }
        },
    });
};

/**
 * Mutation hook for user logout
 * @returns {Object} Mutation result
 */
export const useLogout = () => {
    return useMutation({
        mutationFn: authAPI.logout,
        onSuccess: () => {
            // Clear token from localStorage
            localStorage.removeItem('authToken');
        },
    });
};
