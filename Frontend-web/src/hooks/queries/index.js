/**
 * Central export file for all TanStack Query hooks
 * Import from here: import { useCareers, useFaculty } from '@/hooks/queries'
 */

export { useCareers } from './useCareers';
export { useFaculty } from './useFaculty';
export { useTestimonials } from './useTestimonials';
export { useFAQs } from './useFAQs';

// Export as default object for flexibility
export default {
    useCareers,
    useFaculty,
    useTestimonials,
    useFAQs
};
