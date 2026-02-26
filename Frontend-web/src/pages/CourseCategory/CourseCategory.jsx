import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import Pagination from '../../components/Pagination';
import FAQSection from '../../components/FAQSection';
import FacultySection from '../../components/FacultySection';
import TestimonialsSection from '../../components/TestimonialsSection';
import { courseCategoriesData } from '../../data/courseCategoriesData';

const CourseCategory = () => {
    const { categorySlug } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('relevance');
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 4; // Adjusted to show pagination with limited data

    // Get category data
    const category = courseCategoriesData.find(cat => cat.slug === categorySlug) || courseCategoriesData[0];

    // Filter courses based on search
    const filteredCourses = category.courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-b border-gray-100">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Category Info */}
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wide mb-6">
                                PREMIUM COURSES
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{category.name}</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {category.description}
                            </p>

                            {/* Skills You'll Need */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                    SKILLS YOU'LL MASTER
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 shadow-sm hover:border-orange-200 hover:text-orange-600 hover:shadow-md transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Salary Info */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-orange-100/50 border border-white">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    Average Salary Range
                                </h3>
                                <div className="grid grid-cols-3 gap-8 divide-x divide-gray-100">
                                    <div className="text-center group">
                                        <div className="flex items-center justify-center gap-1 text-gray-400 mb-1 group-hover:text-red-500 transition-colors">
                                            <TrendingDown className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase">Lowest</span>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">₹{category.salary.lowest}</p>
                                    </div>
                                    <div className="text-center px-4 group">
                                        <div className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide group-hover:text-orange-500 transition-colors">Average</div>
                                        <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">₹{category.salary.average}</p>
                                    </div>
                                    <div className="text-center group">
                                        <div className="flex items-center justify-center gap-1 text-gray-400 mb-1 group-hover:text-green-500 transition-colors">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase">Highest</span>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900">₹{category.salary.highest}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image/Video */}
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                            <div className="relative transform bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white transition-transform duration-500 hover:scale-[1.01]">
                                <img
                                    src={category.heroImage}
                                    alt={category.name}
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* University Partners Section */}
            <div className="bg-white border-y border-gray-100 py-8 overflow-hidden">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by Top Universities</p>
                    <div className="flex justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                        {category.universityPartners?.map((partner, index) => (
                            <img
                                key={index}
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                                title={partner.name}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Course Listing Section */}
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Section Header with Filters and Search */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Explore <span className="text-orange-500">{category.name}</span> Courses
                    </h2>

                    {/* Filters and Search */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative flex-1 sm:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search specifically..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-shadow shadow-sm"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer shadow-sm hover:border-orange-200">
                                <option>Most Popular</option>
                                <option>Highest Rated</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Course Grid - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {currentCourses.map((course) => (
                        <div key={course.id} className="transform transition-all duration-300 hover:scale-[1.02]">
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>

                {/* Pagination - Centered & Styled */}
                <div className="flex justify-center pb-8">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages > 0 ? totalPages : 1}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>

            {/* Top Instructors Section - Reusable Component */}
            <FacultySection
                title={<>Learn from Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Legends</span></>}
                subtitle="Our instructors are not just teachers; they are industry leaders from top global companies."
                faculty={category.topInstructors}
            />

            {/* Success Stories / Testimonials Section - Reusable Component */}
            <TestimonialsSection
                title={<>Career <span className="text-green-600">Transformations</span></>}
                subtitle="See how our courses have helped learners achieve their dream careers."
                testimonials={category.successStories?.map(story => ({
                    ...story,
                    content: story.testimonial,
                    role: story.newRole
                }))}
            />

            {/* Counselor Services Section - As requested (Custom) */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 py-10 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Description */}
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold tracking-widest mb-6">
                                CAREER GUIDANCE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Confused about your path? <br />Let us guide you.
                            </h2>
                            <p className="text-lg text-orange-100 mb-8 leading-relaxed max-w-lg">
                                Our expert counselors have helped 10,000+ students find their perfect course and career trajectory.
                            </p>
                            <ul className="space-y-4">
                                {['Personalized career roadmap', 'Industry insight from experts', 'Scholarship eligibility check'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold text-xs">✓</span>
                                        <span className="font-medium text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Book a Free Session
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Fill in your details and we'll call you back within 24hrs.
                            </p>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        Phone Number
                                    </label>
                                    <div className="flex gap-3">
                                        <div className="w-20 px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-bold flex items-center justify-center">
                                            🇮🇳 +91
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="98765 43210"
                                            className="flex-1 px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 text-lg font-medium text-gray-900 transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-200 transition-all transform active:scale-[0.98]"
                                >
                                    Get a Call Back
                                </button>
                            </form>
                            <p className="text-[10px] text-gray-400 mt-4 text-center">
                                No spam. Your data is safe with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blogs Section - Refined */}
            <div className="bg-white py-12">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-4">
                        <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                        Latest from the Blog
                    </h2>

                    <div className="relative group">
                        {/* Scroll Container */}
                        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
                            {category.blogs?.map((blog, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[350px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group/card cursor-pointer snap-start"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors z-10"></div>
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm">
                                            {blog.date}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">Guide</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover/card:text-orange-600 transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                                            {blog.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                            <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                                                ⏱ {blog.readTime}
                                            </span>
                                            <span className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                                                Read Now →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section - Reusable Component */}
            <FAQSection
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about the course."
                faqs={category.faqs}
            />

            <Footer />
        </div>
    );
};

export default CourseCategory;
