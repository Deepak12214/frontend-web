import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coursesAPI } from '../services/api/apiService';

/**
 * Custom hooks for courses using TanStack Query
 * These hooks handle data fetching, caching, and state management
 */

// Query Keys
export const COURSES_KEYS = {
    all: ['courses'],
    lists: () => [...COURSES_KEYS.all, 'list'],
    list: (filters) => [...COURSES_KEYS.lists(), filters],
    details: () => [...COURSES_KEYS.all, 'detail'],
    detail: (id) => [...COURSES_KEYS.details(), id],
    trending: () => [...COURSES_KEYS.all, 'trending'],
    category: (category) => [...COURSES_KEYS.all, 'category', category],
};

/**
 * Hook to fetch all courses
 * @param {Object} filters - Optional filters for courses
 * @returns {Object} Query result with courses data
 */
export const useCourses = (filters = {}) => {
    return useQuery({
        queryKey: COURSES_KEYS.list(filters),
        queryFn: () => coursesAPI.getCourses(filters),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

/**
 * Hook to fetch a single course by ID
 * @param {string|number} id - Course ID
 * @returns {Object} Query result with course data
 */
export const useCourse = (id) => {
    return useQuery({
        queryKey: COURSES_KEYS.detail(id),
        queryFn: () => coursesAPI.getCourseById(id),
        enabled: !!id, // Only run if ID is provided
    });
};

/**
 * Hook to fetch trending courses
 * @returns {Object} Query result with trending courses
 */
export const useTrendingCourses = () => {
    return useQuery({
        queryKey: COURSES_KEYS.trending(),
        queryFn: () => coursesAPI.getTrendingCourses(),
        staleTime: 10 * 60 * 1000, // 10 minutes
    });
};

/**
 * Hook to fetch courses by category
 * @param {string} category - Category name
 * @returns {Object} Query result with category courses
 */
export const useCoursesByCategory = (category) => {
    return useQuery({
        queryKey: COURSES_KEYS.category(category),
        queryFn: () => coursesAPI.getCoursesByCategory(category),
        enabled: !!category,
    });
};

/**
 * Hook to create a new course
 * @returns {Object} Mutation object
 */
export const useCreateCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: coursesAPI.createCourse,
        onSuccess: () => {
            // Invalidate and refetch courses list
            queryClient.invalidateQueries({ queryKey: COURSES_KEYS.lists() });
        },
    });
};

/**
 * Hook to update a course
 * @returns {Object} Mutation object
 */
export const useUpdateCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: coursesAPI.updateCourse,
        onSuccess: (data, variables) => {
            // Invalidate specific course and lists
            queryClient.invalidateQueries({ queryKey: COURSES_KEYS.detail(variables.id) });
            queryClient.invalidateQueries({ queryKey: COURSES_KEYS.lists() });
        },
    });
};

/**
 * Hook to delete a course
 * @returns {Object} Mutation object
 */
export const useDeleteCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: coursesAPI.deleteCourse,
        onSuccess: () => {
            // Invalidate courses list
            queryClient.invalidateQueries({ queryKey: COURSES_KEYS.lists() });
        },
    });
};

/**
 * Hook to enroll in a course
 * @returns {Object} Mutation object
 */
export const useEnrollCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: coursesAPI.enrollCourse,
        onSuccess: (data, courseId) => {
            // Invalidate specific course to update enrollment status
            queryClient.invalidateQueries({ queryKey: COURSES_KEYS.detail(courseId) });
        },
    });
};
