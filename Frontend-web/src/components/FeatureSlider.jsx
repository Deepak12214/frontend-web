import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeatureSlider = ({
    title = "Our Vision",
    subtitle = "See what drives us forward.",
    items = []
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    if (!items || items.length === 0) return null;

    const currentItem = items[currentIndex];

    return (
        <section className="py-8 bg-gray-50 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--color-primary)/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 relative inline-block">
                        {title}
                        <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-(--color-primary) rounded-full"></span>
                    </h2>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100/50 backdrop-blur-sm relative group">
                    <div className="grid md:grid-cols-2 min-h-[400px]">
                        {/* Left: Image Container */}
                        <div className="relative h-full overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105"
                            />

                            {/* Slide Counter on Image (Mobile only usually, but good here) */}
                            <div className="absolute bottom-6 left-6 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest border border-white/20">
                                {currentIndex + 1} / {items.length}
                            </div>
                        </div>

                        {/* Right: Content Container */}
                        <div className="p-6 md:p-12 flex flex-col justify-center bg-white relative">
                            {/* Decoration */}
                            <div className="absolute top-8 right-8 text-9xl text-gray-100 font-serif leading-none select-none z-0">
                                "
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text">
                                    {currentItem.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium max-w-lg">
                                    {currentItem.description}
                                </p>

                                {/* Navigation Controls */}
                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={prevSlide}
                                        className="p-4 rounded-full border-2 border-gray-100 text-gray-500 hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-primary)"
                                        aria-label="Previous slide"
                                    >
                                        <ArrowLeft className="w-6 h-6" />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="flex gap-3">
                                        {items.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentIndex(i)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex
                                                    ? 'w-8 bg-(--color-primary) scale-110'
                                                    : 'bg-gray-200 hover:bg-gray-300'
                                                    }`}
                                                aria-label={`Go to slide ${i + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        className="p-4 rounded-full border-2 border-gray-100 text-gray-500 hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-primary)"
                                        aria-label="Next slide"
                                    >
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSlider;
