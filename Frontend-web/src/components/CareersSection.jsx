import React from 'react';
import { Link } from 'react-router-dom';

const CareersSection = ({
    title = "Explore Careers",
    subtitle = "Find the right path for your future.",
    careers = []
}) => {
    if (!careers || careers.length === 0) {
        return null;
    }

    // Split title to style the last word
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');

    return (
        <section className="relative py-4 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
            {/* Ambient Background globs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                        {firstPart} <span className="text-[color:var(--color-primary)]">{lastWord}</span>
                    </h2>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {careers.map((career) => {
                        const slug = career.title.toLowerCase().replace(/ /g, '-');
                        return (
                            <Link
                                key={career.id}
                                to={`/category/${slug}`}
                                className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1 block"
                            >
                                {/* Top Accent Bar */}
                                <div className="h-1.5 w-full bg-gray-100 group-hover:bg-[color:var(--color-primary)] transition-colors duration-300"></div>

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Header: Icon + Title */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-xl group-hover:bg-[color:var(--color-primary)]/10 group-hover:text-[color:var(--color-primary)] transition-colors">
                                            💼
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${career.jobAvailability === 'High' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-yellow-50 text-yellow-700 border-yellow-100'}`}>
                                            {career.jobAvailability}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[color:var(--color-primary)] transition-colors">
                                        {career.title}
                                    </h3>

                                    <p className="text-xs text-gray-500 mb-6 leading-relaxed flex-1">
                                        {career.description}
                                    </p>

                                    {/* Bottom Info */}
                                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-semibold uppercase">Avg. Salary</div>
                                            <div className="text-sm font-bold text-gray-900">{career.medianSalary}</div>
                                        </div>

                                        <div className="text-[color:var(--color-primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
