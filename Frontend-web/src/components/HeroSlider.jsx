import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = ({
    slides = [],
    autoPlayInterval = 5000,
    showSecondaryButton = true,
    secondaryButtonText = "View Path",
    secondaryButtonLink = "#"
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        if (slides.length <= 1) return; // Don't auto-play if only one slide

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [activeIndex, slides.length, autoPlayInterval]);

    if (!slides || slides.length === 0) {
        return null; // Return nothing if no slides provided
    }

    return (
        <div className="relative w-full h-[400px] md:h-[480px] bg-gray-900 overflow-hidden font-sans group">

            {/* Background Layer */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`
                        absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out
                        ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                    `}
                >
                    <img
                        src={slide.bgImage}
                        alt={slide.headline}
                        className="w-full h-full object-cover object-center md:object-right opacity-80"
                    />
                    {/* Standard Linear Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                </div>
            ))}

            {/* Content Layer */}
            <div className="relative z-20 h-full w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">

                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`
                            max-w-xl
                            transition-all duration-500 ease-out transform
                            ${index === activeIndex
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4 absolute pointer-events-none'
                            }
                        `}
                    >
                        {/* 1. Badge - Clean & Simple */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-8 bg-[color:var(--color-primary)]"></div>
                            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[color:var(--color-primary)]">
                                {slide.primaryValues}
                            </span>
                        </div>

                        {/* 2. Headline - Professional Sans-Serif */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-nowrap">
                            {slide.headline}
                        </h1>

                        {/* 3. Description - Readable Gray */}
                        <p className="text-sm text-gray-300 mb-8 leading-relaxed font-normal opacity-90 max-w-lg">
                            {slide.subHeadline}
                        </p>

                        {/* 4. Buttons - Standard & Reliable */}
                        <div className="flex items-center gap-4">
                            <Link
                                to={slide.link}
                                className="px-6 py-2.5 bg-[color:var(--color-primary)] text-white font-medium rounded-md hover:bg-[color:var(--color-primary-dark)] transition-colors shadow-sm text-sm"
                            >
                                {slide.ctaText}
                            </Link>

                            {showSecondaryButton && (
                                <Link
                                    to={secondaryButtonLink}
                                    className="px-6 py-2.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors text-sm"
                                >
                                    {secondaryButtonText}
                                </Link>
                            )}
                        </div>

                    </div>
                ))}
            </div>

            {/* Simple Dots Navigation - Bottom Left */}
            {slides.length > 1 && (
                <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 z-30 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                h-1.5 rounded-full transition-all duration-300
                                ${index === activeIndex
                                    ? 'w-8 bg-[color:var(--color-primary)]'
                                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                                }
                            `}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default HeroSlider;
