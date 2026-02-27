import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FAQSection from "../../components/FAQSection";
import { navLinks, categories as headerCategories } from "../../data/mock";
import { mockBlogs } from "../Blog/mockData";

export default function BlogDetails() {
    const { slug } = useParams();
    const currentIndex = mockBlogs.findIndex(b => b.slug === slug);
    const blog = mockBlogs[currentIndex];

    const prevBlog = currentIndex > 0 ? mockBlogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < mockBlogs.length - 1 ? mockBlogs[currentIndex + 1] : null;

    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeHeaderCategory, setActiveHeaderCategory] = useState("individuals");

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Header
                    categories={headerCategories}
                    activeCategory={activeHeaderCategory}
                    onCategoryChange={setActiveHeaderCategory}
                    navLinks={navLinks}
                />
                <div className="flex-1 flex items-center justify-center p-20 pt-32">
                    <h2 className="text-2xl font-bold">Blog not found.</h2>
                </div>
                <Footer />
            </div>
        );
    }

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white font-montserrat relative">
            <Header
                categories={headerCategories}
                activeCategory={activeHeaderCategory}
                onCategoryChange={setActiveHeaderCategory}
                navLinks={navLinks}
            />

            {/* Reading Progress Bar */}
            <div className="fixed top-[72px] md:top-20 left-0 w-full h-1.5 bg-gray-100 z-40">
                <div
                    className="h-full bg-(--color-primary) transition-all duration-100 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                ></div>
            </div>

            <main className="flex-1 pt-0 pb-6">
                {/* Hero Section */}
                <div className="relative w-full lg:pb-0 bg-linear-to-b from-orange-50/50 via-white to-white">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm text-gray-500 mb-2 overflow-x-auto whitespace-nowrap">
                            <Link to="/" className="hover:text-(--color-primary) transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link to="/blog" className="hover:text-(--color-primary) transition-colors">Blog</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-(--color-primary-dark) font-medium truncate max-w-[200px] md:max-w-md">
                                {blog.title}
                            </span>
                        </nav>

                        {/* Title & Meta */}
                        <div className="text-center space-y-1.5 max-w-4xl mx-auto">
                            <div className="flex items-center justify-center gap-2">
                                <span className="bg-(--color-primary)/10 text-(--color-primary-dark) border border-(--color-primary)/20 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                                    {blog.category?.name || 'Article'}
                                </span>
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-avalors text-gray-900 leading-tight tracking-tight">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm text-gray-500 border-t border-gray-100 py-2 pt-2 mt-1">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden relative flex items-center justify-center">
                                        <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xs">
                                            A
                                        </div>
                                    </div>
                                    <span className="font-medium text-gray-900">Admin</span>
                                </div>
                                <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-(--color-primary)" />
                                    <span>{formatDate(blog.publishedAt)}</span>
                                </div>
                                {blog.readTime && (
                                    <>
                                        <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-(--color-primary)" />
                                            <span>{blog.readTime} min read</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-4">
                    <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
                        <div className="w-full lg:flex-1">
                            {blog.featuredImage?.url && (
                                <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-4xl overflow-hidden shadow-gray-200 mb-6 group w-full">
                                    <img
                                        src={blog.featuredImage.url}
                                        alt={blog.title}
                                        className="absolute inset-0 w-full h-full object-top object-cover"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-4xl" />
                                </div>
                            )}

                            {/* Blog Content Layout */}
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Simulated Content Area */}
                                <div className="flex-1 w-full min-w-0">
                                    <div
                                        className="text-base md:text-lg max-w-none 
                                        font-montserrat text-gray-700 leading-snug md:leading-normal
                                        [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl
                                        [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold
                                        [&_h1]:text-gray-900 [&_h2]:text-gray-900 [&_h3]:text-gray-900
                                        [&_h1]:mt-8 [&_h1]:mb-4
                                        [&_h2]:mt-8 [&_h2]:mb-3
                                        [&_h3]:mt-6 [&_h3]:mb-3
                                        [&_p]:mb-5 [&_p]:text-gray-600
                                        [&_a]:text-(--color-primary) [&_a]:font-semibold [&_a]:underline
                                        [&_blockquote]:border-l-4 [&_blockquote]:border-(--color-primary) [&_blockquote]:bg-orange-50/50 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-xl [&_blockquote]:text-base [&_blockquote]:font-medium [&_blockquote]:text-gray-800 [&_blockquote]:my-6
                                        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_li]:mb-2 [&_li]:marker:text-(--color-primary)
                                        [&_img]:rounded-3xl [&_img]:shadow-xl [&_img]:my-6 [&_img]:w-full [&_img]:object-cover"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                    />

                                    {/* Tags */}
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="mt-8 pt-4 border-t border-gray-100">
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tags</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {blog.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-(--color-primary) hover:text-white transition-colors cursor-pointer">
                                                        #{tag.replace(/\s+/g, '')}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* FAQs Section */}
                                    {blog.faqs && blog.faqs.length > 0 && (
                                        <div className="mt-8 pt-4 lg:mt-8 border-t border-gray-100">
                                            <FAQSection
                                                title="Frequently Asked Questions"
                                                subtitle=""
                                                faqs={blog.faqs}
                                            />
                                        </div>
                                    )}

                                    {/* Prev / Next Blog Navigation */}
                                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-8">
                                        {prevBlog ? (
                                            <Link to={`/blog/${prevBlog.slug}`} className="group flex flex-col gap-1 w-full sm:w-1/2 items-start text-left p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-(--color-primary) transition-colors">
                                                    ← Previous
                                                </span>
                                                <span className="font-bold text-gray-900 group-hover:text-(--color-primary) transition-colors line-clamp-2">
                                                    {prevBlog.title}
                                                </span>
                                            </Link>
                                        ) : <div className="w-full sm:w-1/2"></div>}

                                        {nextBlog ? (
                                            <Link to={`/blog/${nextBlog.slug}`} className="group flex flex-col gap-1 w-full sm:w-1/2 items-end text-right p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-(--color-primary) transition-colors">
                                                    Next →
                                                </span>
                                                <span className="font-bold text-gray-900 group-hover:text-(--color-primary) transition-colors line-clamp-2">
                                                    {nextBlog.title}
                                                </span>
                                            </Link>
                                        ) : <div className="w-full sm:w-1/2"></div>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Mock */}
                        <div className="hidden lg:block w-[340px] shrink-0 space-y-8 sticky top-32">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">Recommended Courses</h3>
                                <p className="text-sm text-gray-500 mb-4">Boost your learning journey with our top-rated courses.</p>
                                <button className="w-full py-2.5 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
                                    Explore Courses
                                </button>
                            </div>
                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 text-center flex flex-col items-center">
                                <h3 className="font-bold text-xl mb-2 text-gray-900">Need Help?</h3>
                                <p className="text-sm text-gray-600 mb-5">Talk to our experts for career guidance.</p>
                                <Link to="/contact" className="px-6 py-2.5 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all text-sm w-full block">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
