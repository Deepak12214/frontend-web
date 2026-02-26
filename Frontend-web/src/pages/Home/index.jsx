import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import HeroSlider from '../../components/HeroSlider';
import CoursesSection from '../../components/CoursesSection';
import CareersSection from '../../components/CareersSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import FacultySection from '../../components/FacultySection';
import TestimonialsSection from '../../components/TestimonialsSection';
import FAQSection from '../../components/FAQSection';
import { heroSlides } from '../../data/heroSlides';
import { trendingCourses } from '../../data/coursesData';
import {
    categories,
    navLinks,
    exploreCareers,
    whyChooseUsPoints,
    facultyMembers,
    testimonials,
    faqs
} from '../../data/mock';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('individuals');

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                navLinks={navLinks}
            />

            <main className="flex-1">
                <HeroSlider slides={heroSlides} />

                {/* Breadcrumb Navigation */}
                <Breadcrumb
                    items={[
                        {
                            label: activeCategory === 'individuals' ? 'For Individuals' :
                                activeCategory === 'businesses' ? 'For Businesses' :
                                    activeCategory === 'universities' ? 'For Universities' :
                                        'For Governments',
                            link: null,
                            icon: (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            )
                        },
                        {
                            label: 'Home',
                            link: '/',
                            icon: (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                            )
                        }
                    ]}
                />

                <CoursesSection
                    title="Trending Courses"
                    subtitle="Explore our highest-rated courses and start your learning journey today."
                    courses={trendingCourses}
                />

                <CareersSection
                    title="Explore Careers"
                    subtitle="Find the right path for your future."
                    careers={exploreCareers}
                />

                <WhyChooseUsSection
                    title="Why Choose Learning For Career?"
                    subtitle="World-class learning experience designed for your success."
                    points={whyChooseUsPoints}
                />

                <FacultySection
                    title="Our Faculty"
                    faculty={facultyMembers}
                />

                <TestimonialsSection
                    title="Student Success Stories"
                    subtitle="Hear from our community of learners who transformed their careers."
                    testimonials={testimonials}
                />

                <FAQSection
                    title="Frequently Asked Questions"
                    subtitle="Quick answers to your most common questions."
                    faqs={faqs}
                />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
