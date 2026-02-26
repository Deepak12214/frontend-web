import React, { useState, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import FAQSection from '../../components/FAQSection';
import CareersSection from '../../components/CareersSection';
import FacultySection from '../../components/FacultySection';
import Pagination from '../../components/Pagination';
import Dropdown from '../../components/Dropdown';
import { allCourses, courseCategories, trendingCourses } from '../../data/coursesData';
import { navLinks, categories, faqs, exploreCareers, facultyMembers } from '../../data/mock';

const COURSES_PER_PAGE = 8;


const CoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Courses');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('popularity');

    // Sort Options for Dropdown
    const sortOptions = [
        {
            value: 'popularity',
            label: 'Popular',
            icon: '🔥',
            description: 'Most enrolled'
        },
        {
            value: 'rating',
            label: 'Top Rated',
            icon: '⭐',
            description: 'Highest rated'
        },
        {
            value: 'newest',
            label: 'Newest',
            icon: '🆕',
            description: 'Recently added'
        },
        {
            value: 'price_low',
            label: 'Price: Low',
            icon: '💰',
            description: 'Cheapest first'
        },
        {
            value: 'price_high',
            label: 'Price: High',
            icon: '💎',
            description: 'Premium first'
        }
    ];


    // Filter Logic
    const filteredCourses = useMemo(() => {
        return allCourses.filter(course => {
            const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
            const matchesSearch =
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Sort Logic
    const sortedCourses = useMemo(() => {
        let sorted = [...filteredCourses];
        switch (sortBy) {
            case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
            case 'price_low': return sorted.sort((a, b) => parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, '')));
            case 'price_high': return sorted.sort((a, b) => parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, '')));
            case 'newest': return sorted.sort((a, b) => b.id - a.id);
            case 'popularity':
            default: return sorted.sort((a, b) => parseInt(b.students.replace(/,/g, '')) - parseInt(a.students.replace(/,/g, '')));
        }
    }, [filteredCourses, sortBy]);

    // Pagination Logic
    const totalPages = Math.ceil(sortedCourses.length / COURSES_PER_PAGE);
    const paginatedCourses = sortedCourses.slice((currentPage - 1) * COURSES_PER_PAGE, currentPage * COURSES_PER_PAGE);

    React.useEffect(() => { setCurrentPage(1); }, [selectedCategory, searchQuery, sortBy]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        document.getElementById('courses-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Header categories={categories} navLinks={navLinks} />

            <main className="flex-1">
                {/* 1. New Modern Hero Section */}
                <section className="relative bg-linear-to-br from-blue-50 via-indigo-50 to-white overflow-hidden pt-6 pb-8 lg:pt-10 lg:pb-10">
                    {/* Abstract Background Shapes - More Subtle */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-linear-to-br from-(--color-primary)/5 to-purple-100/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-linear-to-tr from-orange-100/20 to-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Content */}
                            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-xs mb-4 animate-fade-in-up">
                                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                                    <span className="text-[11px] font-bold text-(--color-primary) uppercase tracking-wide">Over 2,000 New Courses</span>
                                </div>

                                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-tight">
                                    Upgrade your skills, <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-purple-600">Upgrade your life.</span>
                                </h1>

                                <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    World-class training for anyone, anywhere. Join millions of learners.
                                </p>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-gray-500 font-medium">
                                    <span>Popular:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Python', 'React', 'UX Design', 'Java', 'Data Science', 'Marketing', 'Cyber Security'].map(tag => (
                                            <button key={tag} onClick={() => setSearchQuery(tag)} className="hover:text-(--color-primary) underline decoration-blue-200 hover:decoration-(--color-primary) underline-offset-4 transition-all">
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Visual - Dynamic Image Composition (Compact Height) */}
                            <div className="relative hidden lg:flex items-center justify-center h-[380px] w-full">
                                {/* Abstract Background Blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-(--color-primary)/5 rounded-full blur-2xl"></div>

                                {/* Main Image Group */}
                                <div className="relative w-[400px] z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Student learning online"
                                        className="w-full h-auto rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-all duration-500 ease-out object-cover border-4 border-white"
                                    />

                                    {/* Floating Badge 1: Active Learners */}
                                    <div className="absolute -left-8 top-8 bg-white p-3 rounded-xl shadow-lg border border-blue-50 flex items-center gap-3 animate-float-slow z-20">
                                        <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Students</p>
                                            <p className="text-lg font-bold text-gray-900">50k+</p>
                                        </div>
                                    </div>

                                    {/* Floating Badge 2: Course Rating */}
                                    <div className="absolute -right-4 bottom-8 bg-white p-3 rounded-xl shadow-lg border border-blue-50 flex items-center gap-3 animate-float-delayed z-20">
                                        <div className="bg-yellow-50 p-2 rounded-lg text-yellow-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Rating</p>
                                            <p className="text-lg font-bold text-gray-900">4.9</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. All Courses Section with Filter & Search */}
                <section className="py-4 lg:py-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Search Bar */}
                        {/* 2. Unified Filter Section */}
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 max-w-4xl mx-auto">
                            {/* Search Bar */}
                            <div className="relative w-full md:flex-1">
                                <input
                                    type="text"
                                    placeholder="Search for courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2.5 pr-10 text-gray-900 border border-gray-200 rounded-xl focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10 transition-all font-medium placeholder:text-gray-400 text-sm"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Sort Dropdown & Clear */}
                            <div className="flex gap-2 w-full md:w-auto shrink-0">
                                <div className="w-full md:w-44">
                                    <Dropdown
                                        value={sortBy}
                                        onChange={setSortBy}
                                        options={sortOptions}
                                        icon={
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                                            </svg>
                                        }
                                        className="w-full"
                                    />
                                </div>

                                {(selectedCategory !== 'All Courses' || searchQuery) && (
                                    <button
                                        onClick={() => {
                                            setSelectedCategory('All Courses');
                                            setSearchQuery('');
                                            setCurrentPage(1);
                                        }}
                                        className="px-3 py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-100 transition-colors whitespace-nowrap"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2 justify-center">
                                <button
                                    onClick={() => {
                                        setSelectedCategory('All Courses');
                                        setCurrentPage(1);
                                    }}
                                    className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all ${selectedCategory === 'All Courses'
                                        ? 'bg-(--color-primary) text-white shadow-sm shadow-(--color-primary)/20'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    All ({allCourses.length})
                                </button>
                                {courseCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setSelectedCategory(cat.name);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all ${selectedCategory === cat.name
                                            ? 'bg-(--color-primary) text-white shadow-sm shadow-(--color-primary)/20'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                    >
                                        <span className="mr-1.5">{cat.icon}</span>
                                        {cat.name} ({cat.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Courses Grid */}
                        {
                            paginatedCourses.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {paginatedCourses.map((course) => (
                                        <CourseCard key={course.id} course={course} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="text-6xl mb-4">📚</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
                                    <p className="text-gray-500 mb-6">Try adjusting your filters</p>
                                    <button
                                        onClick={() => { setSelectedCategory('All Courses'); setSearchQuery(''); }}
                                        className="px-6 py-3 bg-(--color-primary) text-white rounded-lg font-medium hover:bg-(--color-primary-dark) transition-colors"
                                    >
                                        View All Courses
                                    </button>
                                </div>
                            )
                        }

                        {/* Pagination */}
                        {
                            totalPages > 1 && (
                                <div className="mt-12">
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            )
                        }
                    </div >
                </section >

                {/* 4. Learning Paths - Using CareersSection */}
                < CareersSection
                    title="Career Paths"
                    subtitle="Explore different career opportunities in tech"
                    careers={exploreCareers}
                />

                {/* 5. Top Instructors - Using FacultySection */}
                < FacultySection
                    title="Meet Our Instructors"
                    subtitle="Learn from industry experts and experienced professionals"
                    faculty={facultyMembers}
                />

                <FAQSection faqs={faqs} />
            </main >

            <Footer />
        </div >
    );
};

export default CoursesPage;
