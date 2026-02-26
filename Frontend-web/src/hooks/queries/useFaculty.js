/**
 * TanStack Query hook for fetching faculty/instructors data
 * 
 * Currently uses mock data. When API is ready, replace mock import with API service.
 * 
 * Usage:
 * const { data: faculty, isLoading, error } = useFaculty();
 */

import { useQuery } from '@tanstack/react-query';
import { faculty as mockFaculty } from '../../data/mock';

const fetchFaculty = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockFaculty;
};

export const useFaculty = (options = {}) => {
    return useQuery({
        queryKey: ['faculty'],
        queryFn: fetchFaculty,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        ...options
    });
};

export default useFaculty;
