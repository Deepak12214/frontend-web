/**
 * TanStack Query hook for fetching careers data
 * 
 * Currently uses mock data. When API is ready:
 * 1. Import from api/services/careers.service
 * 2. Replace mock import with API call
 * 3. Enable/configure: refetchOnWindowFocus, staleTime, cacheTime, etc.
 * 
 * Usage:
 * const { data: careers, isLoading, error } = useCareers();
 */

import { useQuery } from '@tanstack/react-query';
import { careers as mockCareers } from '../../data/mock';

// Simulate API call (remove when real API is ready)
const fetchCareers = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockCareers;
};

// Real API call (commented out for now)
// import { getCareers } from '../../api/services/careers.service';
// const fetchCareers = () => getCareers();

export const useCareers = (options = {}) => {
    return useQuery({
        queryKey: ['careers'],
        queryFn: fetchCareers,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
        ...options
    });
};

export default useCareers;
