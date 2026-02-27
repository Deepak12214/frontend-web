import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import Pagination from '../../components/Pagination';
import { Linkedin, Mail, Facebook, Twitter, Star, Users, BookOpen, Award, TrendingUp, Clock, CheckCircle, BarChart3, RefreshCw, Zap } from 'lucide-react';
import { getInstructorById } from '../../data/instructorsData';
import { categories, navLinks } from '../../data/mock';

const InstructorProfile = () => {
    const { instructorId } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [showFullAbout, setShowFullAbout] = useState(false);
    const coursesPerPage = 6;

    // Get instructor data
    const instructorData = getInstructorById(instructorId);

    // If instructor not found, show error
    if (!instructorData) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header categories={categories} navLinks={navLinks} />
                <div className="max-w-[1440px] mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Instructor Not Found</h1>
                    <p className="text-gray-600">The instructor you're looking for doesn't exist.</p>
                </div>
                <Footer />
            </div>
        );
    }

    // Mock courses for this instructor
    const instructorCourses = [
        {
            id: 1,
            title: 'Complete Full Stack Web Development Bootcamp',
            instructor: instructorData.name,
            instructorId: instructorData.id,
            rating: 4.8,
            students: 3245,
            price: 3999,
            originalPrice: 7999
        },
        {
            id: 2,
            title: 'Master React & Redux - Modern Web Development',
            instructor: instructorData.name,
            instructorId: instructorData.id,
            rating: 4.9,
            students: 2876,
            price: 2999,
            originalPrice: 5999
        },
        {
            id: 3,
            title: 'Node.js & Express - Backend Development Complete Guide',
            instructor: instructorData.name,
            instructorId: instructorData.id,
            rating: 4.7,
            students: 1987,
            price: 3499,
            originalPrice: 6999
        },
        {
            id: 4,
            title: 'System Design & Architecture Masterclass',
            instructor: instructorData.name,
            instructorId: instructorData.id,
            rating: 4.9,
            students: 1564,
            price: 4999,
            originalPrice: 9999
        },
        {
            id: 5,
            title: 'Cloud Computing with AWS - Complete Course',
            instructor: instructorData.name,
            instructorId: instructorData.id,
            rating: 4.8,
            students: 2234,
            price: 3799,
            originalPrice: 7499
        },
        {
            id: 6,
            title: 'Data Structures & Algorithms in JavaScript',
            instructor: instructorData.name,
            instructorId: instructorData.id,
            rating: 4.9,
            students: 3098,
            price: 2999,
            originalPrice: 5999
        }
    ];

    const instructor = {
        ...instructorData,
        courses: instructorCourses
    };

    // Pagination calculations
    const totalPages = Math.ceil(instructor.courses.length / coursesPerPage);
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = instructor.courses.slice(indexOfFirstCourse, indexOfLastCourse);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header categories={categories} navLinks={navLinks} />

            {/* Main Container */}
            <div className="">

                {/* Top Section - Re-designed Background Image Banner */}
                <div className="relative w-full  overflow-hidden shadow-2xl shadow-gray-200/50 mb-10 font-sans">

                    {/* Background Image Setup (Static Image) */}
                    <div className="absolute inset-0 z-0 bg-gray-900">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                            alt="Background Cover"
                            className="w-full h-full object-cover opacity-30"
                        />
                        {/* Dark Gradient Overlay for optimal text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70"></div>
                        <div className="absolute inset-0 backdrop-blur-xs"></div>
                    </div>

                    {/* Content z-10 */}
                    <div className="relative z-10 p-5 sm:p-6 lg:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                            {/* LEFT SIDE: Image, Name, Title (Span 4) */}
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                                {/* Instructor Image */}
                                <div className="relative mb-4 group">
                                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-1.5 bg-white/10 shadow-xl relative z-10 border border-white/20 backdrop-blur-md">
                                        <img
                                            src={instructor.image}
                                            alt={instructor.name}
                                            className="w-full h-full object-cover rounded-full border-2 border-transparent"
                                        />
                                        {/* Status Badge */}
                                        <div className="absolute bottom-2 right-2 w-4 h-4 md:w-5 md:h-5 bg-green-500 border-[3px] border-gray-900 rounded-full shadow-lg"></div>
                                    </div>
                                </div>

                                {/* Name & Title */}
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                                    <span className="w-6 h-[2px] bg-(--color-primary)"></span>
                                    <span className="text-(--color-primary) font-bold tracking-[0.15em] uppercase text-[10px] md:text-xs">
                                        Instructor
                                    </span>
                                </div>
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-1 leading-tight">
                                    {instructor.name}
                                </h1>
                                <p className="text-[13px] md:text-sm text-gray-300 font-medium mb-5 max-w-xs">{instructor.title}</p>

                                {/* Social Links block */}
                                <div className="flex items-center gap-2.5">
                                    <a href={instructor.socialLinks.linkedin} className="hover:-translate-y-1 hover:opacity-80 transition-all" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 md:w-8 md:h-8">
                                            <rect width="24" height="24" rx="5.5" fill="#0A66C2" />
                                            <path fill="#fff" d="M7.12 17.45H4.06V8.5h3.06v8.95zM5.59 7.16c-.98 0-1.78-.8-1.78-1.78S4.61 3.6 5.59 3.6s1.78.8 1.78 1.78-.8 1.78-1.78 1.78zm13.11 10.29h-3.06v-4.75c0-1.13-.03-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5v4.83h-3.06V8.5h2.94v1.22h.04c.41-.77 1.4-1.58 2.88-1.58 3.08 0 3.65 2.03 3.65 4.67v4.64z" />
                                        </svg>
                                    </a>
                                    <a href={`mailto:${instructor.socialLinks.email}`} className="hover:-translate-y-1 hover:opacity-80 transition-all">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 md:w-8 md:h-8">
                                            <rect width="24" height="24" rx="5.5" fill="#EA4335" />
                                            <rect x="4" y="7" width="16" height="10" rx="1.5" fill="white" />
                                            <path d="M4.5 7.5L12 12.5L19.5 7.5" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={instructor.socialLinks.facebook} className="hover:-translate-y-1 hover:opacity-80 transition-all" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 md:w-8 md:h-8">
                                            <rect width="24" height="24" rx="5.5" fill="#1877F2" />
                                            <path d="M15.83 9.43V6.477c0-.95.465-1.874 1.956-1.874H19.5v-2.953s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669V9.43H9.234v3.469h3.047v8.385h3.549v-8.385h2.796l.532-3.469H15.83z" fill="#fff" />
                                        </svg>
                                    </a>
                                    <a href={instructor.socialLinks.twitter} className="hover:-translate-y-1 hover:opacity-80 transition-all" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 md:w-8 md:h-8">
                                            <rect width="24" height="24" rx="5.5" fill="#000000" />
                                            <path fill="#fff" d="M16.9 6H19.2L14.2 11.7L20 19H15.5L11.9 14.3L7.8 19H5.4L10.8 12.8L5.2 6H9.9L13.1 10.3L16.9 6ZM16.1 17.7H17.4L7.1 7.2H5.7L16.1 17.7Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT SIDE: Stats Grid & About Me (Span 8) */}
                            <div className="lg:col-span-8 flex flex-col justify-center">

                                {/* 3x2 Grid for Stats */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-xl p-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                                        <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                                            <Users size={16} />
                                        </div>
                                        <div>
                                            <p className="text-base md:text-lg font-bold text-white leading-none mb-1">{instructor.totalLearners.toLocaleString()}</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Total Learners</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-xl p-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                                        <div className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                            <Zap size={16} />
                                        </div>
                                        <div>
                                            <p className="text-base md:text-lg font-bold text-white leading-none mb-1">{(instructor.activeLearners || 0).toLocaleString()}</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Active</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-xl p-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                                        <div className="w-9 h-9 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                                            <Star size={16} className="fill-yellow-400/50" />
                                        </div>
                                        <div>
                                            <p className="text-base md:text-lg font-bold text-white leading-none mb-1">{instructor.averageRating}<span className="text-sm text-gray-500 font-semibold">/5</span></p>
                                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{instructor.reviewsCount} Reviews</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-xl p-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                                        <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                            <BookOpen size={16} />
                                        </div>
                                        <div>
                                            <p className="text-base md:text-lg font-bold text-white leading-none mb-1">{instructor.totalCourses}</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Total Courses</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-xl p-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                                        <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                                            <CheckCircle size={16} />
                                        </div>
                                        <div>
                                            <p className="text-base md:text-lg font-bold text-white leading-none mb-1">{instructor.completionRate || 95}%</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Complete Rate</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-xl p-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                                        <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                                            <Award size={16} />
                                        </div>
                                        <div>
                                            <p className="text-base md:text-lg font-bold text-white leading-none mb-1">{instructor.yearsExperience || 10}+ yrs</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Experience</p>
                                        </div>
                                    </div>
                                </div>

                                {/* About Me Section (Dark Theme Match) */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 backdrop-blur-sm">
                                    <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                        About me
                                        <span className="flex-1 h-px bg-white/10"></span>
                                    </h3>
                                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-[12px] md:text-[13px]">
                                        <p className="mb-0">{showFullAbout || instructor.aboutFull.length <= 300 ? instructor.aboutFull : `${instructor.aboutFull.slice(0, 300)}...`}</p>
                                    </div>
                                    {instructor.aboutFull.length > 300 && (
                                        <button
                                            onClick={() => setShowFullAbout(!showFullAbout)}
                                            className="mt-3 text-(--color-primary) font-bold text-[10px] md:text-[11px] hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1.5"
                                        >
                                            {showFullAbout ? 'Show Less' : 'Show More'}
                                            <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${showFullAbout ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Courses Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                Instructor Courses
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Total {instructor.totalCourses} courses available
                            </p>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                        {currentCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default InstructorProfile;
