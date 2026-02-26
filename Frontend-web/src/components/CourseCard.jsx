import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CourseCard = ({ course, className }) => {
    const { id, title, instructor, rating, students, price, originalPrice } = course;
    const navigate = useNavigate();

    return (
        // Use a div + onClick instead of <Link> so we can have a nested <Link> for instructor
        <div
            className={`block h-full cursor-pointer ${className || ''}`}
            onClick={() => navigate(`/courses/${id}`)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/courses/${id}`)}
        >
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden hover:-translate-y-1">

                {/* Image Section */}
                <div className="h-44 bg-gray-50 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-linear-to-br from-(--color-primary) to-[color:var(--color-primary-dark)] opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        👨‍💻
                    </div>
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[color:var(--color-primary)] shadow-sm uppercase tracking-wider">
                        Best Seller
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug min-h-[2.5rem] group-hover:text-[color:var(--color-primary)] transition-colors">
                        {title}
                    </h3>

                    {/* Instructor — stop propagation so clicking it doesn't also navigate to course */}
                    <Link
                        to={`/instructor/${course.instructorId || 1}`}
                        className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-4 hover:text-[color:var(--color-primary)] transition-colors w-fit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px]">
                            👨‍🏫
                        </span>
                        {instructor}
                    </Link>

                    {/* Rating & Students Row */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-50">
                        <div className="flex items-center gap-1.5">
                            <span className="text-amber-500 text-sm">★</span>
                            <span className="text-sm font-bold text-gray-900">{rating}</span>
                        </div>
                        <div className="text-xs text-gray-400 font-medium">
                            {students.toLocaleString()} students
                        </div>
                    </div>

                    {/* Footer: Price & Action */}
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-[color:var(--color-primary)] leading-none">₹{price.toLocaleString()}</span>
                            {originalPrice && (
                                <span className="text-[10px] text-gray-400 line-through mt-1">₹{originalPrice.toLocaleString()}</span>
                            )}
                        </div>

                        <button
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[color:var(--color-primary)]/30"
                            onClick={(e) => { e.stopPropagation(); navigate(`/courses/${id}`); }}
                            aria-label="View course"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
