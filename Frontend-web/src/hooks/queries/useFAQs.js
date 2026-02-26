/**
 * TanStack Query hook for fetching FAQs
 * 
 * Currently uses mock data. When API is ready, replace mock import with API service.
 * 
 * Usage:
 * const { data: faqs, isLoading, error } = useFAQs();
 * 
 * With category filter:
 * const { data: faqs } = useFAQs({ category: 'billing' });
 */

import { useQuery } from '@tanstack/react-query';
import { faqs as mockFAQs } from '../../data/mock';

const fetchFAQs = async (category = null) => {
    await new Promise(resolve => setTimeout(resolve, 300));

    if (category) {
        return mockFAQs.filter(faq => faq.category === category);
    }

    return mockFAQs;
};

export const useFAQs = (options = {}) => {
    const { category, ...queryOptions } = options;

    return useQuery({
        queryKey: ['faqs', category],
        queryFn: () => fetchFAQs(category),
        staleTime: 10 * 60 * 1000, // FAQs don't change often
        cacheTime: 30 * 60 * 1000,
        ...queryOptions
    });
};

export default useFAQs;
