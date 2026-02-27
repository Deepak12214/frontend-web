import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = ({
    title = "Student Success Stories",
    subtitle = "Hear from our community of learners who transformed their careers.",
    testimonials = []
}) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className="bg-white py-12 relative overflow-hidden group/section">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-500 max-w-xl">
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
                            {testimonials.map((story) => (
                                <div
                                    key={story.id || story.name}
                                    className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group snap-center"
                                >
                                    <div className="text-9xl text-orange-50 absolute -top-8 -right-4 font-serif leading-none select-none group-hover:text-orange-100 transition-colors">"</div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            {story.image ? (
                                                <img
                                                    src={story.image}
                                                    alt={story.name}
                                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl border-2 border-white shadow-md">
                                                    {story.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900">{story.name}</h4>
                                                <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-md w-fit mt-1">
                                                    {story.role || 'Alumni'}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6 leading-relaxed italic relative">
                                            "{story.content || story.testimonial}"
                                        </p>

                                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Works at</span>
                                            <span className="font-bold text-gray-900 flex items-center gap-2">
                                                {story.company || 'Tech Giant'}
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
