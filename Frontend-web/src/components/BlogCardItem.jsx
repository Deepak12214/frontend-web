import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ blog }) {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    };

    return (
        <Link to={`/blog/${blog.slug}`} className="group block h-full">
            <div className="relative bg-white rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="relative overflow-hidden aspect-video w-full">
                    {blog.featuredImage?.url ? (
                        <img
                            src={blog.featuredImage.url}
                            alt={blog.title || "Blog Image"}
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold font-montserrat uppercase tracking-wider rounded-full shadow-sm">
                            {blog.category?.name || 'Article'}
                        </span>
                    </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-gray-500 text-[11px] md:text-xs font-montserrat">
                        <div className="flex items-center gap-1.5 font-bold text-gray-700 bg-gray-100/80 px-2 py-0.5 rounded-md">
                            <svg className="w-3 h-3 text-(--color-primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            {blog.author?.name || 'Admin'}
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{formatDate(blog.publishedAt || new Date())}</span>
                            <span>•</span>
                            <span>{Math.ceil((blog.content?.split(' ').length || 200) / 200)} min read</span>
                        </div>
                    </div>

                    <h4 className="text-secondary font-bold text-lg md:text-xl mb-2 line-clamp-2 group-hover:text-(--color-primary) transition-colors leading-tight">
                        {blog.title}
                    </h4>

                    <p className="text-gray-600 font-montserrat text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                        {blog.excerpt}
                    </p>

                    <div className="flex items-center text-(--color-primary) font-bold font-montserrat text-xs uppercase tracking-wider mt-auto group/btn">
                        Read Article
                        <ArrowUpRight className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
