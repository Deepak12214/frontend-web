import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FAQSection from '../../components/FAQSection';
import { PlayCircle, Quote, Star, ArrowRight } from 'lucide-react';
import {
    categories,
    navLinks,
    faqs,
    testimonials
} from '../../data/mock';

// Extend the mock testimonials with some formatting and extra fields for masonry layout
const extendedTestimonials = testimonials.map((t, idx) => ({
    ...t,
    // Add varying content lengths or simulated metadata to make masonry look authentic
    masonryHeight: idx % 3 === 0 ? 'large' : idx % 2 === 0 ? 'medium' : 'small',
}));

// Additional mock data for the 3-column layout at the bottom
const bottomReviews = [
    {
        id: 'b1',
        name: 'Arjun Verma',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        text: "The practical approach to learning really helped me transition from a non-tech background to a developer role seamlessly."
    },
    {
        id: 'b2',
        name: 'Neha Kapoor',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        text: "Incredible support and top-notch materials. I highly recommend Learning For Career to anyone looking to skill up."
    },
    {
        id: 'b3',
        name: 'Simran Kaur',
        image: 'https://randomuser.me/api/portraits/women/7.jpg',
        text: "The interactive projects were game-changing. I finally felt confident enough to tackle real-world challenges!"
    }
];

const TestimonialsPage = () => {
    const [activeCategory, setActiveCategory] = useState('individuals');

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Navigation Header */}
            <Header
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                navLinks={navLinks}
            />

            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="relative w-full pt-16 pb-10 overflow-hidden bg-white">
                    {/* Background Pattern / Floating Elements (Abstract representations of images) */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        {/* Simulating the "floating images" from wireframe with abstract rectangles */}
                        <div className="absolute top-[10%] left-[5%] w-24 h-32 bg-gray-200 rounded-lg transform -rotate-6 blur-[2px]"></div>
                        <div className="absolute top-[5%] left-[20%] w-32 h-24 bg-gray-300 rounded-lg transform rotate-3 blur-[1px]"></div>
                        <div className="absolute top-[25%] left-[12%] w-28 h-40 bg-gray-200 rounded-lg transform -rotate-2"></div>
                        <div className="absolute top-[15%] right-[25%] w-32 h-32 bg-gray-300 rounded-lg transform -rotate-3 blur-[1px]"></div>
                        <div className="absolute top-[5%] right-[10%] w-24 h-28 bg-gray-200 rounded-lg transform rotate-6 blur-[2px]"></div>
                        <div className="absolute top-[28%] right-[5%] w-36 h-24 bg-gray-200 rounded-lg transform -rotate-3"></div>
                        <div className="absolute top-[40%] left-[2%] w-24 h-24 bg-gray-300 rounded-lg transform rotate-12 blur-[2px]"></div>
                        <div className="absolute top-[50%] right-[3%] w-28 h-36 bg-gray-300 rounded-lg transform rotate-2 blur-[1px]"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
                        {/* Pill text */}
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-sm font-semibold text-(--color-primary-dark) bg-orange-100 rounded-full border border-orange-200">
                            Testimonials
                        </div>

                        {/* Main Headings */}
                        <h1 className="text-[36px] md:text-[45px] lg:text-[54px] font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
                            Stuck Yesterday. <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-orange-400">Skilled Today.</span>
                            <br className="hidden md:block" /> Hired Tomorrow.
                        </h1>

                        <p className="mt-3 text-[18px] text-gray-600 max-w-2xl mx-auto">
                            From confusion to confidence — hear how our learners changed their future.
                        </p>

                        <div className="mt-6">
                            <button className="flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <PlayCircle className="w-5 h-5" />
                                Watch Their Stories
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </section>

                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

                <section className="py-10 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 relative inline-flex flex-col items-center">
                                inspiring stories
                                <div className="absolute -bottom-2 w-2/3 h-1 bg-(--color-primary) rounded-full"></div>
                            </h2>
                        </div>

                        {/* Masonry Layout Container */}
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                            {extendedTestimonials.map((testimonial, idx) => (
                                <div
                                    key={testimonial.id}
                                    className="break-inside-avoid bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col group"
                                >
                                    {/* Variation based on idx to simulate the wireframe's varied masonry */}
                                    {idx % 3 === 0 ? (
                                        // Type 1: Icon + Name + Text (Focus on role/course)
                                        <>
                                            <div className="mb-4 text-orange-500">
                                                <Quote size={32} className="opacity-50" />
                                            </div>
                                            <p className="text-gray-700 italic mb-6 leading-relaxed">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-gray-700">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-xs text-gray-500">{testimonial.course}</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : idx % 2 === 0 ? (
                                        // Type 2: Big Image + Text
                                        <>
                                            <div className="mb-4 overflow-hidden rounded-xl bg-gray-100 aspect-video relative">
                                                {testimonial.image ? (
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">Image</div>
                                                )}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                                                <div className="absolute bottom-3 left-3 right-3 text-white">
                                                    <h4 className="font-bold truncate">{testimonial.name}</h4>
                                                    <p className="text-xs text-gray-200 truncate">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                "{testimonial.content}"
                                            </p>
                                        </>
                                    ) : (
                                        // Type 3: Simple Text Focus
                                        <>
                                            <div className="flex items-center gap-4 mb-5">
                                                {testimonial.image && (
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 outline-2 outline-orange-100 outline-offset-2 rounded-full object-cover" />
                                                )}
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                    <p className="text-xs text-(--color-primary) font-medium">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed font-medium">
                                                {testimonial.content}
                                            </p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT OUR LEARNERS ARE SAYING (3-column layout) */}
                <section className="py-10 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            What our learners<br />Are Saying
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {bottomReviews.map((review) => (
                                <div key={review.id} className="relative bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center mt-5 pt-8">
                                    {/* Floating Avatar */}
                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                        <div className="p-1.5 bg-white rounded-full shadow-sm">
                                            <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-5 italic leading-relaxed">
                                        "{review.text}"
                                    </p>
                                    <div className="mt-auto">
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <div className="flex justify-center gap-1 mt-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <button className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:border-(--color-primary) hover:text-(--color-primary) transition-all">
                                View more Review
                            </button>
                        </div>
                    </div>
                </section>

                <FAQSection
                    title="Frequently Asked Questions"
                    subtitle="Quick answers to your most common questions about our platform and learning process."
                    faqs={faqs}
                />
            </main>

            <Footer />
        </div >
    );
};

export default TestimonialsPage;
