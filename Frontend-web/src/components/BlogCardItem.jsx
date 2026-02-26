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
            <div className="relative bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
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

                <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm font-montserrat">
                        <span>{formatDate(blog.publishedAt || new Date())}</span>
                        <span>•</span>
                        <span>{Math.ceil((blog.content?.split(' ').length || 200) / 200)} min read</span>
                    </div>

                    <h4 className="text-secondary font-bold text-xl md:text-2xl mb-3 line-clamp-2 group-hover:text-(--color-primary) transition-colors">
                        {blog.title}
                    </h4>

                    <p className="text-gray-600 font-montserrat text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {blog.excerpt}
                    </p>

                    <div className="flex items-center text-(--color-primary) font-bold font-montserrat text-sm uppercase tracking-wider mt-auto group/btn">
                        Read Article
                        <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
