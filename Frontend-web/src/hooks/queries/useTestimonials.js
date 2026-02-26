
import { useQuery } from '@tanstack/react-query';
import { testimonials as mockTestimonials } from '../../data/mock';

const fetchTestimonials = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockTestimonials;
};

export const useTestimonials = (options = {}) => {
    return useQuery({
        queryKey: ['testimonials'],
        queryFn: fetchTestimonials,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        ...options
    });
};

export default useTestimonials;
