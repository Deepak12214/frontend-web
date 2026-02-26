import React, { useState } from 'react';

const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div
            className={`group rounded-xl border transition-all duration-300 ${isOpen ? 'bg-white border-gray-200 shadow-lg' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm'}`}
        >
            <button
                className="w-full px-6 py-5 flex justify-between items-start text-left focus:outline-none gap-4"
                onClick={onToggle}
            >
                <span className={`text-base font-bold transition-colors duration-300 ${isOpen ? 'text-[color:var(--color-primary)]' : 'text-gray-900'}`}>
                    {faq.question}
                </span>
                <span className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${isOpen ? 'bg-[color:var(--color-primary)] text-white rotate-45' : 'bg-gray-200 text-gray-500 group-hover:bg-[color:var(--color-primary)]/10 group-hover:text-[color:var(--color-primary)]'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQSection = ({
    title = "Frequently Asked Questions",
    subtitle = "Quick answers to your most common questions.",
    faqs = [],
    defaultOpenIndex = 0
}) => {
    const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

    if (!faqs || faqs.length === 0) {
        return null;
    }

    // Split title to style the last word
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');

    return (
        <section className="bg-white py-6 mb-6">
            <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                        {firstPart} <span className="text-[color:var(--color-primary)]">{lastWord}</span>
                    </h2>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </div>

                {/* FAQ Columns Layout - Independent Vertical Stacking */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {faqs.filter((_, i) => i % 2 === 0).map((faq, index) => {
                            const originalIndex = index * 2;
                            return (
                                <FAQItem
                                    key={faq.id || index}
                                    faq={faq}
                                    isOpen={openIndex === originalIndex}
                                    onToggle={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                                />
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {faqs.filter((_, i) => i % 2 !== 0).map((faq, index) => {
                            const originalIndex = index * 2 + 1;
                            return (
                                <FAQItem
                                    key={faq.id || index}
                                    faq={faq}
                                    isOpen={openIndex === originalIndex}
                                    onToggle={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
