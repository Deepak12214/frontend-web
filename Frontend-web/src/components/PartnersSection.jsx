import React from 'react';

const PartnersSection = ({
    title = "Trusted by our Partners",
    partners = []
}) => {
    return (
        <section className="py-12 bg-white border-b border-gray-100 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 flex items-center justify-center gap-4">
                    <span className="w-10 h-1 bg-(--color-primary) rounded-full"></span>
                    {title}
                    <span className="w-10 h-1 bg-(--color-primary) rounded-full"></span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center group">
                            {partner.logo ? (
                                <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" />
                            ) : (
                                <span className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-(--color-primary) transition-colors cursor-default select-none">
                                    {partner.name || partner}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
