import React from 'react';

const StatsSection = ({
    title = "Our Impact",
    subtitle = "Numbers that tell our story.",
    stats = []
}) => {
    return (
        <section className="py-8 bg-gray-900 text-white relative overflow-hidden group/stats">
            {/* Background Texture & Animation */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
                <div className="mb-10">
                    <span className="text-(--color-primary) font-bold tracking-wider uppercase text-xs animate-pulse">Global Scale</span>
                    <h2 className="text-2xl md:text-4xl font-extrabold mt-3 mb-3 leading-tight">{title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">{subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group/item text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-(--color-primary) group-hover/item:bg-(--color-primary) group-hover/item:text-white transition-all duration-300 transform group-hover/item:scale-110 shadow-lg shadow-black/20">
                                {item.icon && <item.icon className="w-6 h-6" />}
                            </div>
                            <div className="text-2xl md:text-3xl font-extrabold mb-1 bg-linear-to-r from-white to-gray-300 bg-clip-text group-hover/item:text-white transition-all">
                                {item.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider group-hover/item:text-gray-300 transition-colors">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
