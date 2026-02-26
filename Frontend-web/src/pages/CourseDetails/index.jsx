import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import CourseCard from '../../components/CourseCard';
import { allCourses as coursesData } from '../../data/coursesData';
import { getInstructorByName } from '../../data/instructorsData';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { navLinks } from '../../data/mock';

const LessonIcon = ({ type }) => {
    switch (type) {
        case 'video':
            return <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
        case 'quiz':
            return <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>;
        case 'assignment':
            return <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
        default:
            return <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;
    }
};

const CourseDetails = () => {
    const { courseId } = useParams();

    // Find the course matching the ID from URL, fallback to first course if not found
    const baseCourse = coursesData.find(c => c.id === parseInt(courseId)) || coursesData[0];

    // Merging some mock details for richer UI
    const course = {
        ...baseCourse,
        description: baseCourse.description || "Master modern web development with this comprehensive course. Learn HTML, CSS, JavaScript, React, Node.js, and more.",
        longDescription: "This course is your gateway to becoming a professional. We start from the very basics and guide you through advanced concepts with hands-on projects.",
        rating: baseCourse.rating || 4.8,
        students: baseCourse.students || "12,345",
        lastUpdated: "January 2026",
        language: "English",
        captions: "English, Hindi",
        level: baseCourse.level || "Beginner to Advanced",
        duration: baseCourse.duration || "42h 30m"
    };

    const [expandedSections, setExpandedSections] = useState([0]);
    const navigate = useNavigate();
    const { addToCart, isInCart } = useCart();
    const alreadyInCart = isInCart(course.id);

    const toggleSection = (index) => {
        setExpandedSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const categories = [
        { name: 'Development', path: '/courses?category=development' },
        { name: 'Business', path: '/courses?category=business' },
        { name: 'IT & Software', path: '/courses?category=it-software' },
        { name: 'Design', path: '/courses?category=design' },
        { name: 'Marketing', path: '/courses?category=marketing' },
    ];

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Courses', link: '/courses' },
        { label: course.category, link: `/courses?category=${course.category.toLowerCase()}` },
        { label: course.title, active: true },
    ];

    const learningPoints = [
        "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
        "After the course you will be able to build ANY website you want.",
        "Work as a freelance web developer.",
        "Master backend development with Node, Express and MongoDB.",
        "Learn the latest technologies, including JavaScript ES6+, React, and Tailwind CSS.",
        "Professional developer best practices and workflow."
    ];

    const courseIncludes = [
        { icon: "🎥", label: "42.5 hours on-demand video" },
        { icon: "📝", label: "85 articles" },
        { icon: "📂", label: "24 downloadable resources" },
        { icon: "💻", label: "16 coding exercises" },
        { icon: "♾️", label: "Full lifetime access" },
        { icon: "📱", label: "Access on mobile and TV" },
        { icon: "🏆", label: "Certificate of completion" },
    ];

    const sections = [
        {
            title: "Introduction to Web Development",
            lectures: 5,
            duration: "45m",
            lessons: [
                { name: "Course Introduction", type: "video", duration: "5:00", isPreview: true },
                { name: "How the Internet Works", type: "video", duration: "10:00", isPreview: true },
                { name: "Setting up your environment", type: "article", duration: "10:00" },
                { name: "First HTML Page", type: "video", duration: "15:00" },
                { name: "Quiz 1: Web Basics", type: "quiz", duration: "5:00" },
            ]
        },
        {
            title: "HTML5 Fundamentals",
            lectures: 8,
            duration: "1h 30m",
            lessons: [
                { name: "HTML Structure", type: "video", duration: "12:00" },
                { name: "Forms and Inputs", type: "video", duration: "15:00" },
                { name: "Semantic HTML", type: "video", duration: "10:00" },
                { name: "Assignment: Build a Profile Page", type: "assignment", duration: "45:00" },
            ]
        },
        {
            title: "CSS3 & Styling",
            lectures: 12,
            duration: "2h 15m",
            lessons: [
                { name: "CSS Selectors", type: "video", duration: "15:00" },
                { name: "Box Model", type: "video", duration: "20:00" },
                { name: "Flexbox Layout", type: "video", duration: "25:00" },
                { name: "Grid Layout", type: "video", duration: "25:00" },
                { name: "Responsive Design", type: "video", duration: "30:00" },
            ]
        },
        {
            title: "JavaScript Basics",
            lectures: 15,
            duration: "3h 00m",
            lessons: [
                { name: "Variables & Data Types", type: "video", duration: "15:00" },
                { name: "Logic & Control Flow", type: "video", duration: "20:00" },
                { name: "Functions", type: "video", duration: "25:00" },
                { name: "DOM Manipulation", type: "video", duration: "30:00" },
                { name: "Mini Project: Todo List", type: "assignment", duration: "1h" },
            ]
        },
        {
            title: "Advanced React",
            lectures: 20,
            duration: "5h 30m",
            lessons: [
                { name: "React Hooks Deep Dive", type: "video", duration: "45:00" },
                { name: "State Management with Redux", type: "video", duration: "1h 00m" },
                { name: "Next.js Framework", type: "video", duration: "1h 30m" },
            ]
        }
    ];

    const curriculum = sections; // utilizing the mock data above

    const requirements = [
        "No programming experience needed. You will learn everything you need to know.",
        "A computer with access to the internet.",
        "No paid software required.",
        "I'll walk you through, step-by-step how to get all the software installed and set up."
    ];

    const faqs = [ // Simplified mock FAQs
        { question: "When does the course start and finish?", answer: "The course starts now and never ends! It is a completely self-paced online course - you decide when you start and when you finish." },
        { question: "How long do I have access to the course?", answer: "How does lifetime access sound? After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own." },
        { question: "What if I am unhappy with the course?", answer: "We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us in the first 30 days and we will give you a full refund." },
    ];

    const similarCourses = coursesData.filter(c => c.id !== course.id).slice(0, 3);
    const instructorCourses = coursesData.filter(c => c.instructor === course.instructor && c.id !== course.id);

    const courseTestimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Frontend Developer",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            content: "This course completely changed my career path. The instructor explains complex topics so clearly. I went from knowing nothing to getting hired in 6 months!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Software Engineer",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            content: "The best web development course I've taken. The projects are real-world relevant and the section on React was particularly helpful.",
            rating: 5
        },
        {
            id: 3,
            name: "Jessica Williams",
            role: "UX Designer",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            content: "Great pacing and excellent examples. I really appreciated the focus on best practices and modern tooling. Highly recommended!",
            rating: 4
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-50/50 font-sans">
            <Header categories={categories} navLinks={navLinks} />



            <main className="flex-1 pb-20 relative isolate">
                {/* Full Width Hero Background */}
                <div className="absolute top-0 inset-x-0 h-[650px] bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb at Top Left */}
                    <div className="pt-6">
                        <Breadcrumb items={breadcrumbItems} simple={true} />
                    </div>

                    {/* TWO COLUMN LAYOUT: Contained Hero + Content Left | Sticky Sidebar Right */}
                    <div className="grid lg:grid-cols-3 gap-12 items-start pt-6">

                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* 1. New Hero Section (Clean & Transparent) */}
                            <div className="relative z-10">
                                <div className="relative">

                                    <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                        {course.title}
                                    </h1>

                                    <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
                                        {course.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap items-center gap-4">
                                        {course.isFeatured && (
                                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-orange-200">
                                                Bestseller
                                            </span>
                                        )}
                                        <span className="bg-white/80 backdrop-blur text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-gray-200 shadow-sm">
                                            {course.category}
                                        </span>
                                    </div>

                                    <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600 border-t border-gray-200/60 pt-6">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                                alt={course.instructor}
                                                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                            />
                                            <div>
                                                <p className="text-xs text-gray-500">Created by</p>
                                                <a href="#instructor" className="text-gray-900 font-bold hover:text-(--color-primary) transition-colors">{course.instructor}</a>
                                            </div>
                                        </div>
                                        <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Last updated <span className="font-semibold text-gray-900">{course.lastUpdated}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                                            <span>{course.language}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Box - The "Table" from the sketch */}
                                <div className="mt-8 border border-gray-200 rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 overflow-hidden bg-white shadow-sm">
                                    <div className="p-5 text-center group hover:bg-gray-50 transition-colors">
                                        <div className="text-gray-500 text-sm font-medium mb-1">Certificate</div>
                                        <div className="font-bold text-gray-900 text-lg">Yes</div>
                                    </div>
                                    <div className="p-5 text-center group hover:bg-gray-50 transition-colors">
                                        <div className="text-gray-500 text-sm font-medium mb-1">Level</div>
                                        <div className="font-bold text-gray-900 text-lg">{course.level}</div>
                                    </div>
                                    <div className="p-5 text-center group hover:bg-gray-50 transition-colors">
                                        <div className="text-gray-500 text-sm font-medium mb-1">Duration</div>
                                        <div className="font-bold text-gray-900 text-lg">{course.duration}</div>
                                    </div>
                                    <div className="p-5 text-center group hover:bg-gray-50 transition-colors">
                                        <div className="text-gray-500 text-sm font-medium mb-1">Rating</div>
                                        <div className="font-bold text-gray-900 text-lg flex items-center justify-center gap-1">
                                            <span>{course.rating}</span>
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. What You'll Learn */}
                            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                                    What you'll learn
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {learningPoints.map((point, index) => (
                                        <div key={index} className="flex gap-4 items-start">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium text-gray-700 leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3. This Course Includes (Mobile Only) */}
                            <div className="block lg:hidden bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">This course includes</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {courseIncludes.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <span className="text-xl shrink-0">{item.icon}</span>
                                            <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4. Course Content */}
                            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Content</h2>
                                        <p className="text-sm text-gray-500 font-medium">
                                            {curriculum.length} sections • {curriculum.reduce((acc, s) => acc + s.lectures, 0)} lectures • {curriculum.reduce((acc, s) => acc.lectures + parseInt(s.duration), 0)}h total length
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setExpandedSections(expandedSections.length === curriculum.length ? [] : curriculum.map((_, i) => i))}
                                        className="text-sm font-bold text-(--color-primary) hover:text-(--color-primary-dark) transition-colors"
                                    >
                                        {expandedSections.length === curriculum.length ? 'Collapse All Sections' : 'Expand All Sections'}
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {curriculum.map((section, index) => (
                                        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50">
                                            <button
                                                onClick={() => toggleSection(index)}
                                                className="w-full flex items-center justify-between p-5 hover:bg-white transition-all duration-200 group"
                                            >
                                                <div className="flex items-center gap-4 text-left">
                                                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${expandedSections.includes(index) ? 'bg-(--color-primary) text-white' : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'}`}>
                                                        <svg className={`w-4 h-4 transition-transform duration-300 ${expandedSections.includes(index) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                    </span>
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-base">{section.title}</h3>
                                                        <p className="text-xs text-gray-500 mt-0.5">{section.lectures} lectures • {section.duration}</p>
                                                    </div>
                                                </div>
                                            </button>
                                            <div className={`transition-[max-height] duration-300 ease-out overflow-hidden ${expandedSections.includes(index) ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                                <div className="bg-white border-t border-gray-100 p-2">
                                                    {section.lessons.map((lesson, lessonIndex) => (
                                                        <div key={lessonIndex} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group/lesson cursor-pointer">
                                                            <div className="flex items-center gap-4">
                                                                <LessonIcon type={lesson.type} />
                                                                <span className="text-sm font-medium text-gray-700 group-hover/lesson:text-gray-900 transition-colors">{lesson.name}</span>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                {lesson.isPreview && (
                                                                    <span className="text-xs font-bold text-(--color-primary) bg-(--color-primary)/10 px-2 py-0.5 rounded-full">Preview</span>
                                                                )}
                                                                <span className="text-xs text-gray-400 tabular-nums">{lesson.duration}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Requirements */}
                            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
                                <ul className="space-y-4">
                                    {requirements.map((req, index) => (
                                        <li key={index} className="flex gap-4 items-start">
                                            <div className="shrink-0 w-2 h-2 rounded-full bg-gray-300 mt-2.5"></div>
                                            <p className="text-sm text-gray-700 leading-relaxed font-medium">{req}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 6. Description */}
                            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
                                <div className="prose prose-slate prose-sm max-w-none text-gray-600 leading-relaxed">
                                    <p className="mb-4">Welcome to <strong>{course.title}</strong>, a comprehensive learning experience designed to take you from beginner to expert. This course has been carefully crafted by industry professionals.</p>
                                    <p className="mb-4">With over <strong>{course.students}</strong> students already enrolled and an average rating of <strong>{course.rating} stars</strong>, this course has proven to be effective.</p>
                                    <p>Throughout the <strong>{course.duration}</strong> of content, you'll work on real-world projects, complete hands-on exercises, and build a portfolio.</p>
                                </div>
                                <button className="mt-6 text-sm font-bold text-(--color-primary) flex items-center gap-2 hover:gap-3 transition-all group">
                                    Show full description
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: STICKY CARD - Concise & Integrated */}
                        <div className="hidden lg:block relative h-full">
                            <div className="sticky top-6 rounded-2xl shadow-lg border border-gray-200 bg-white overflow-hidden">
                                {/* Compact Video Preview */}
                                <div className="relative aspect-video group cursor-pointer border-b border-gray-100">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center pl-1 shadow-lg scale-100 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-(--color-primary)" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Concise Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 text-base mb-3 leading-tight">
                                        Subscribe to Learning for Career
                                    </h3>

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl font-extrabold text-gray-900">{course.price}</span>
                                        <span className="text-gray-400 line-through text-sm font-medium">{course.originalPrice}</span>
                                        <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-0.5 rounded">20% off</span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <button
                                            onClick={() => navigate('/cart')}
                                            className="w-full bg-(--color-primary) text-white font-bold py-3 rounded-lg shadow-md shadow-(--color-primary)/20 hover:shadow-(--color-primary)/30 active:scale-[0.98] transition-all text-sm"
                                        >
                                            Buy Now
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (!alreadyInCart) {
                                                    addToCart(course);
                                                } else {
                                                    navigate('/cart');
                                                }
                                            }}
                                            className={`w-full font-bold py-3 rounded-lg active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 ${alreadyInCart
                                                ? 'bg-green-50 border border-green-200 text-green-600 hover:bg-green-100'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {alreadyInCart ? (
                                                <><CheckCircle className="w-4 h-4" /> Go to Cart</>
                                            ) : (
                                                <><ShoppingCart className="w-4 h-4" /> Add to Cart</>
                                            )}
                                        </button>
                                    </div>

                                    <div className="pt-3 border-t border-gray-100">
                                        <p className="text-center text-[10px] text-gray-500 mb-3">30-Day Money-Back Guarantee</p>
                                        <h4 className="font-bold text-gray-900 text-xs mb-2">Includes:</h4>
                                        <ul className="space-y-1.5">
                                            {courseIncludes.slice(0, 4).map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <span className="text-sm min-w-[18px] text-center text-(--color-primary)">{item.icon}</span>
                                                    <span className="truncate">{item.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM FULL WIDTH SECTION (Instructor, More Courses, Reviews) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

                    {/* 7. Instructor */}
                    <div id="instructor" className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Your Instructor</h2>
                            {getInstructorByName(course.instructor) && (
                                <Link to={`/instructor/${getInstructorByName(course.instructor).id}`} className="text-(--color-primary) font-bold hover:underline">
                                    View Profile
                                </Link>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <div className="shrink-0">
                                {getInstructorByName(course.instructor) ? (
                                    <Link to={`/instructor/${getInstructorByName(course.instructor).id}`}>
                                        <img
                                            src={getInstructorByName(course.instructor).image}
                                            alt={course.instructor}
                                            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    </Link>
                                ) : (
                                    <div className="w-28 h-28 rounded-full p-1 bg-linear-to-br from-blue-500 to-purple-600">
                                        <div className="w-full h-full rounded-full bg-white p-1">
                                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600 overflow-hidden">
                                                {course.instructor.charAt(0)}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <Link
                                        to={getInstructorByName(course.instructor) ? `/instructor/${getInstructorByName(course.instructor).id}` : '#'}
                                        className="text-xl font-bold text-gray-900 hover:text-(--color-primary) transition-colors"
                                    >
                                        {course.instructor}
                                    </Link>
                                    <p className="text-(--color-primary) font-semibold text-sm">
                                        {getInstructorByName(course.instructor)?.title || `Senior ${course.category} Developer & Best-Selling Author`}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-600">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        {getInstructorByName(course.instructor)?.averageRating || '4.8'}/5 Rating
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                                        {getInstructorByName(course.instructor)?.totalLearners?.toLocaleString() || '500,000+'} Students
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                                        {getInstructorByName(course.instructor)?.totalCourses || '15'} Courses
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {getInstructorByName(course.instructor)?.aboutShort || "I'm a passionate developer and teacher who has helped millions of students learn to code. My focus is on teaching the fundamentals and best practices that will help you build professional-grade applications."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 8. More from Instructor (Grid) */}
                    {instructorCourses.length > 0 && (
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">More from {course.instructor}</h2>
                                <button className="text-sm font-bold text-(--color-primary) hover:underline">View All</button>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {instructorCourses.slice(0, 3).map(c => (
                                    <CourseCard key={c.id} course={c} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 9. Reviews Section - Integrated Slider */}
                    <TestimonialsSection
                        title="Student Feedback"
                        subtitle="See what others are saying"
                        testimonials={courseTestimonials}
                    />
                </div>

                {/* Similar Courses - Bottom Area */}
                {similarCourses.length > 0 && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">More from this category</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {similarCourses.map(c => <CourseCard key={c.id} course={c} />)}
                        </div>
                    </div>
                )}

                {/* FAQ */}
                <div className="mt-12">
                    <FAQSection faqs={faqs} />
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default CourseDetails;
