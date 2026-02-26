/**
 * Mock data for FAQs (Frequently Asked Questions)
 * This data will be replaced with API calls once backend is ready
 * Use with TanStack Query: const { data: faqs } = useFAQs()
 */

export const faqs = [
    {
        id: 1,
        question: "What is Learning for Career?",
        answer: "Learning for Career is a comprehensive online learning platform offering industry-relevant courses taught by expert instructors. We focus on practical, hands-on learning to help you advance your career.",
        category: "general",
        order: 1
    },
    {
        id: 2,
        question: "Are the courses self-paced or scheduled?",
        answer: "All our courses are self-paced, allowing you to learn at your own convenience. You get lifetime access to course materials and can revisit lessons anytime.",
        category: "courses",
        order: 2
    },
    {
        id: 3,
        question: "Do I get a certificate upon completion?",
        answer: "Yes! Upon successful completion of a course, you receive an industry-recognized certificate that you can add to your LinkedIn profile and resume.",
        category: "certificates",
        order: 3
    },
    {
        id: 4,
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with a course within the first 30 days, you can request a full refund.",
        category: "billing",
        order: 4
    },
    {
        id: 5,
        question: "Can I access courses on mobile devices?",
        answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile. You can also download our mobile app for offline learning.",
        category: "technical",
        order: 5
    },
    {
        id: 6,
        question: "Do you provide job placement assistance?",
        answer: "Yes, we offer career support including resume reviews, interview preparation, and connections to hiring partners. Many of our students have landed jobs at top companies.",
        category: "career",
        order: 6
    }
];

export default faqs;
