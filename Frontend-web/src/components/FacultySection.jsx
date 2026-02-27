import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FacultySection = ({
    title = "Our Faculty",
    subtitle = "Learn from industry experts with real-world experience.",
    faculty = []
}) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!faculty || faculty.length === 0) {
        return null;
    }

    return (
        <section className="bg-slate-50 py-12 relative overflow-hidden group/section">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-(--color-primary) hover:border-(--color-primary) shadow-sm hover:shadow-md transition-all cursor-pointer"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-(--color-primary) hover:border-(--color-primary) shadow-sm hover:shadow-md transition-all cursor-pointer"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative">
                        {/* Scroll Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {faculty.map((member) => (
                                <div
                                    key={member.id}
                                    className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 border border-gray-100 group snap-center"
                                >
                                    <Link to={`/instructor/${member.id}`} className="block">
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-orange-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm font-medium text-gray-500 mb-2">{member.title || member.role}</p>
                                                <div className="flex items-center gap-1.5 bg-orange-50 w-fit px-2 py-1 rounded-md">
                                                    <span className="text-yellow-500 text-sm">★</span>
                                                    <span className="text-sm font-bold text-gray-800">{member.rating ? member.rating : '4.9'}</span>
                                                    <span className="text-xs text-gray-400">/ 5.0</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-50">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-gray-900">
                                                    {member.students ? member.students.toLocaleString() : '10k+'}
                                                </div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Students</div>
                                            </div>
                                            <div className="text-center border-x border-gray-100">
                                                <div className="text-lg font-bold text-gray-900">
                                                    {member.courses ? member.courses : '12'}
                                                </div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Courses</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-gray-900">
                                                    {member.reviews ? member.reviews.toLocaleString() : '500+'}
                                                </div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Reviews</div>
                                            </div>
                                        </div>
                                        <div className="w-full mt-2 py-2.5 rounded-xl bg-gray-50 text-gray-700 text-sm font-bold group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors text-center">
                                            View Profile
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultySection;
