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

    // Use mock data for now
    const categories = mockCategories;
    const allBlogs = mockBlogs;

    const filteredBlogs = activeCategory === 'All'
        ? allBlogs
        : allBlogs.filter(blog => blog.category?.name === activeCategory);

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

            <main className="flex-1 font-montserrat pt-2 mb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* HERO SECTION - Full Width Card */}
                    {recentBlog && (
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-4xl overflow-hidden group shadow-2xl shadow-gray-200">
                            {/* Background Image */}
                            <img
                                src={recentBlog.featuredImage?.url || '/placeholder-blog.jpg'}
                                alt={recentBlog.title}
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90" />

                            {/* View Icon Top Right */}
                            <Link to={`/blog/${recentBlog.slug}`}>
                                <div className="absolute top-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-(--color-primary) hover:border-(--color-primary) transition-all cursor-pointer">
                                    <ArrowUpRight className="h-6 w-6" />
                                </div>
                            </Link>

                            {/* Content Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
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
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 mt-4 ">
                        {/* Categories Tabs */}
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
