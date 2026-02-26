/**
 * Mock data for student testimonials
 * This data will be replaced with API calls once backend is ready
 * Use with TanStack Query: const { data: testimonials } = useTestimonials()
 */

export const testimonials = [
    {
        id: 1,
        name: "Rahul Mehta",
        role: "Software Developer at Google",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        content: "Learning for Career's courses helped me land my dream job at Google. The hands-on projects were invaluable!",
        rating: 5,
        course: "Full Stack Web Development",
        date: "2024-01-15",
        verified: true
    },
    {
        id: 2,
        name: "Ananya Singh",
        role: "Data Analyst at Amazon",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        content: "The Data Science course was comprehensive and practical. I got placed within 2 months of completion!",
        rating: 5,
        course: "Data Science & Machine Learning",
        date: "2024-02-20",
        verified: true
    },
    {
        id: 3,
        name: "Vikram Patel",
        role: "Digital Marketing Manager",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        content: "Best investment in my career. The instructors are industry experts and very supportive.",
        rating: 4,
        course: "Digital Marketing Masterclass",
        date: "2024-03-10",
        verified: true
    },
    {
        id: 4,
        name: "Priya Gupta",
        role: "UX Designer at Microsoft",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        content: "The UI/UX course transformed my design skills. Now I'm designing products used by millions!",
        rating: 5,
        course: "UI/UX Design Fundamentals",
        date: "2024-04-05",
        verified: true
    }
];

export default testimonials;
