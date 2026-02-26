import React from 'react';

const WhyChooseUsSection = ({
    title = "Why Choose Learning for Career?",
    subtitle = "World-class learning experience designed for your success.",
    points = []
}) => {
    if (!points || points.length === 0) {
        return null;
    }

    // Split title to style the last word
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');

    return (
        <section className="relative py-6 bg-slate-50/50 overflow-hidden">
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="relative z-10 max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header - Kept Consistent for Section Hierarchy */}
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                        {firstPart} <span className="text-[color:var(--color-primary)]">{lastWord}</span>
                    </h2>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </div>

                {/* Creative Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((point) => (
                        <div
                            key={point.id}
                            className="relative group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >
                            {/* Creative Background decoration on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-primary)]/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:bg-[color:var(--color-primary)]/10"></div>

                            {/* Icon Container with Glassmorphism/Glow */}
                            <div className="relative w-16 h-16 mb-6 rounded-2xl bg-[color:var(--color-primary)]/10 flex items-center justify-center text-3xl text-[color:var(--color-primary)] group-hover:bg-[color:var(--color-primary)] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                                {point.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[color:var(--color-primary)] transition-colors">
                                    {point.heading}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600">
                                    {point.subtitle}
                                </p>
                            </div>

                            {/* Bottom visual accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[color:var(--color-primary)] transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
