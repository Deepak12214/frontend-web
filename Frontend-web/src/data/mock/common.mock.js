/**
 * Mock data for common/general app data
 * This includes navigation, categories, and other app-wide constants
 */

export const categories = [
    { id: 'individuals', label: 'For Individuals', icon: '👤' },
    { id: 'businesses', label: 'For Businesses', icon: '🏢' },
    { id: 'universities', label: 'For Universities', icon: '🎓' },
    { id: 'governments', label: 'For Governments', icon: '🏛️' }
];

export const navLinks = [
    { id: 1, label: 'Explore', path: '/explore', icon: '🔍' },
    { id: 2, label: 'Why LFC ?', path: '/why-lfc', icon: '⭐' },
    { id: 3, label: 'Courses', path: '/courses', icon: '📚' },
    { id: 4, label: 'Resources', path: '/resources', icon: '📖' },
    { id: 5, label: 'Blog', path: '/blog', icon: '✍️' },
    { id: 6, label: 'Testimonials', path: '/testimonials', icon: '🌟' }
];

export const whyChooseUsPoints = [
    {
        id: 1,
        icon: "🎯",
        heading: "Industry-Aligned Curriculum",
        subtitle: "Learn skills that employers actually need"
    },
    {
        id: 2,
        icon: "👨‍🏫",
        heading: "Expert Instructors",
        subtitle: "Learn from industry professionals with 10+ years experience"
    },
    {
        id: 3,
        icon: "💼",
        heading: "Job Placement Support",
        subtitle: "95% placement rate with 300+ hiring partners"
    },
    {
        id: 4,
        icon: "🏆",
        heading: "Recognized Certifications",
        subtitle: "Industry-recognized certificates to boost your resume"
    }
];

export const stats = {
    students: "500K+",
    courses: "200+",
    instructors: "50+",
    rating: 4.8,
    reviews: "100K+"
};

export default {
    categories,
    navLinks,
    whyChooseUsPoints,
    stats
};
