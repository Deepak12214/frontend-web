/**
 * Central export file for all mock data
 * Import from here: import { careers, faculty, testimonials } from '@/data/mock'
 * 
 * When backend is ready, replace these with TanStack Query hooks
 * Example: const { data: careers } = useCareers()
 */

// Import all data first
import { careers } from './careers.mock';
import { faculty } from './faculty.mock';
import { testimonials } from './testimonials.mock';
import { faqs } from './faqs.mock';
import {
    categories,
    navLinks,
    whyChooseUsPoints,
    stats
} from './common.mock';

// Export individually
export { careers, faculty, testimonials, faqs, categories, navLinks, whyChooseUsPoints, stats };

// For backward compatibility with existing imports
export const exploreCareers = careers;
export const facultyMembers = faculty;

// Re-export everything as a single object for destructuring
export default {
    careers,
    faculty,
    testimonials,
    faqs,
    categories,
    navLinks,
    whyChooseUsPoints,
    stats,
    exploreCareers,
    facultyMembers
};
