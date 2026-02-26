import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userAPI } from '../services/api/apiService';

/**
 * Query hook to fetch all users
 * @returns {Object} Query result with data, isLoading, error
 */
export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: userAPI.getUsers,
    });
};

/**
 * Query hook to fetch a single user by ID
 * @param {string} id - User ID
 * @returns {Object} Query result
 */
export const useUser = (id) => {
    return useQuery({
        queryKey: ['user', id],
        queryFn: () => userAPI.getUserById(id),
        enabled: !!id, // Only run if ID exists
    });
};

/**
 * Mutation hook to create a new user
 * @returns {Object} Mutation result
 */
export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userAPI.createUser,
        onSuccess: () => {
            // Invalidate and refetch users list
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

/**
 * Mutation hook to update a user
 * @returns {Object} Mutation result
 */
export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userAPI.updateUser,
        onSuccess: (data, variables) => {
            // Invalidate specific user and users list
            queryClient.invalidateQueries({ queryKey: ['user', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

/**
 * Mutation hook to delete a user
 * @returns {Object} Mutation result
 */
export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userAPI.deleteUser,
        onSuccess: () => {
            // Invalidate users list
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};
