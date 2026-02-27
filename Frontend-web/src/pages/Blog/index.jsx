import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, User } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCardItem';
import { navLinks, categories as headerCategories } from '../../data/mock';
import { mockBlogs, mockCategories } from './mockData';

const Blogs = () => {
    const [activeHeaderCategory, setActiveHeaderCategory] = useState('individuals');
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Use mock data for now
    const categories = mockCategories;
    const allBlogs = mockBlogs;

    const filteredBlogs = allBlogs
        .filter(blog => activeCategory === 'All' || blog.category?.name === activeCategory)
        .filter(blog => {
            const q = searchQuery.toLowerCase();
            return (
                blog.title?.toLowerCase().includes(q) ||
                blog.excerpt?.toLowerCase().includes(q) ||
                blog.category?.name?.toLowerCase().includes(q) ||
                (blog.author?.name || 'admin').toLowerCase().includes(q)
            );
        });

    const recentBlog = allBlogs.find(b => b.isFeatured) || allBlogs[0];

    const handleCategoryChange = (val) => {
        setActiveCategory(val);
    };

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header
                categories={headerCategories}
                activeCategory={activeHeaderCategory}
                onCategoryChange={setActiveHeaderCategory}
                navLinks={navLinks}
            />

            <main className="flex-1 font-montserrat pt-2 mb-10 overflow-hidden w-full">
                <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">

                    {/* HERO SECTION - Full Width Card */}
                    {recentBlog && (
                        <div className="relative w-full h-[260px] md:h-[340px] rounded-3xl overflow-hidden group shadow-xl shadow-gray-200">
                            {/* Background Image */}
                            <img
                                src={recentBlog.featuredImage?.url || `${import.meta.env.BASE_URL}placeholder-blog.jpg`}
                                alt={recentBlog.title}
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                            {/* View Icon Top Right */}
                            <Link to={`/blog/${recentBlog.slug}`}>
                                <div className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-(--color-primary) hover:border-(--color-primary) transition-all cursor-pointer">
                                    <ArrowUpRight className="h-5 w-5" />
                                </div>
                            </Link>

                            {/* Content Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                                <div className="max-w-3xl space-y-4">
                                    {/* Title */}
                                    <h1 className="text-3xl md:text-5xl font-bold text-white font-avalors leading-tight">
                                        {recentBlog.title}
                                    </h1>

                                    {/* Excerpt */}
                                    <p className="text-gray-300 text-lg md:text-xl line-clamp-2 max-w-2xl font-light">
                                        {recentBlog.excerpt}
                                    </p>

                                    <div className="flex items-center gap-6 pt-4">
                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-(--color-primary)/20 flex items-center justify-center border border-white/10">
                                                <User className="h-5 w-5 text-white" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-medium text-sm">Admin</span>
                                            </div>
                                        </div>

                                        {/* Date */}
                                        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm">
                                            {formatDate(recentBlog.publishedAt)}
                                        </span>
                                    </div>
                                </div>

                                {/* Categories Pills */}
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium backdrop-blur-sm hover:bg-(--color-primary) hover:border-(--color-primary) transition-colors">
                                        {recentBlog.category?.name || 'Featured'}
                                    </span>
                                    {recentBlog.isFeatured && (
                                        <span className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FILTERS & SEARCH */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 mt-6">
                        {/* Categories Tabs on Left */}
                        <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <div className="flex items-center gap-8 border-b border-gray-100 min-w-max px-2">
                                {categories.map((cat, idx) => {
                                    const isActive = activeCategory === cat.name;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleCategoryChange(cat.name)}
                                            className={`pb-4 text-sm font-semibold transition-all relative ${isActive
                                                ? "text-(--color-primary)"
                                                : "text-gray-400 hover:text-gray-600"
                                                }`}
                                        >
                                            {cat.name}
                                            {isActive && (
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-(--color-primary) rounded-t-full transition-all" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Search Input on Right */}
                        <div className="w-full md:w-1/3 relative">
                            <input
                                type="text"
                                placeholder="Search by topic, author, etc..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) bg-gray-50/50"
                            />
                            <svg className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    {filteredBlogs.length > 0 ? (
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                            {filteredBlogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-4xl">
                            <h3 className="text-xl font-bold text-(--color-primary-dark) mb-2">No articles found</h3>
                            <p className="text-gray-500">Try adjusting your category filter.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blogs;
