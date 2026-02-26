import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import TeamSection from '../../components/TeamSection';
import StatsSection from '../../components/StatsSection';
import PartnersSection from '../../components/PartnersSection';
import FeatureSlider from '../../components/FeatureSlider';
import { categories, navLinks } from '../../data/mock';
import { Users, BookOpen, Briefcase, Award, Globe, Building2 } from 'lucide-react';

const About = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'About Us', active: true },
    ];

    const founders = [
        {
            name: "Dr. Aditi Verma",
            role: "Co-Founder & CEO",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            bio: "Former Educational Policy Advisor with a PhD in Learning Sciences. Dedicated to bridging the gap between academia and industry."
        },
        {
            name: "Rajesh Kumar",
            role: "Co-Founder & CTO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            bio: "Tech veteran with 15 years at top Silicon Valley firms. Passionate about building scalable platforms that reach millions."
        },
        {
            name: "Michael Chang",
            role: "Head of Content",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
            bio: "Award-winning curriculum designer who believes in identifying and nurturing talent from every corner of the globe."
        }
    ];

    const impacts = [
        { label: "Learners", value: "81M", icon: Users },
        { label: "Instructors", value: "60K", icon: BookOpen },
        { label: "Careers Advanced", value: "210K+", icon: Briefcase },
        { label: "Course Enrollments", value: "1M", icon: Award },
        { label: "Languages", value: "20+", icon: Globe },
        { label: "Enterprise Customers", value: "150K+", icon: Building2 },
    ];

    const partners = [
        "Google", "Amazon", "Microsoft", "IBM", "Meta", "Tesla", "Adobe"
    ];

    const thoughts = [
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            title: "Empowering the Future",
            description: "We believe that education is the most powerful weapon which you can use to change the world. Our mission is to make quality education accessible to everyone, everywhere."
        },
        {
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
            title: "Learning Without Limits",
            description: "Technology has broken down the barriers of traditional classrooms. We are building a global community of lifelong learners who are constantly evolving."
        },
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            title: "Skills Over Degrees",
            description: "In today's fast-paced economy, skills matter more than ever. We focus on practical, job-ready skills that help your career reach new heights."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Header categories={categories} navLinks={navLinks} />

            <main className="pb-0">
                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <Breadcrumb items={breadcrumbItems} simple={true} />
                    </div>
                </div>

                {/* 1. HERO SECTION (Custom for Page) */}
                <section className="py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* Abstract Decoration */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -mr-20 -mt-20 -z-10"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text & Key Stats */}
                        <div className="relative z-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                                About <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-purple-600">Us</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                We are on a mission to transform lives through education. Learning for Career provides high-quality, flexible, and affordable online learning to individuals and organizations worldwide.
                            </p>

                            <div className="flex flex-wrap gap-8 md:gap-12 border-t border-gray-100 pt-8">
                                <div>
                                    <h3 className="text-3xl font-extrabold text-(--color-primary)">7 M+</h3>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Careers Advanced</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-extrabold text-gray-900">1k+</h3>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Live Classes</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-extrabold text-gray-900">300+</h3>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Courses</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Hero Image */}
                        <div className="relative group perspective-1000 w-[80%]">
                            <div className="absolute inset-0 bg-linear-to-tr from-(--color-primary)/20 to-purple-500/20 rounded-4xl transform rotate-6 scale-95 group-hover:rotate-3 transition-transform duration-500"></div>
                            <img
                                src="/assets/images/about-hero.png"
                                alt="Team working together"
                                className="relative rounded-4xl shadow-2xl w-full h-auto object-cover aspect-4/3 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border-4 border-white"
                            />
                        </div>
                    </div>
                </section>

                {/* 2. FOUNDERS SECTION (Reusable) */}
                <TeamSection
                    title="Meet Our Founders"
                    subtitle="Visionaries leading the revolution in education."
                    members={founders}
                />

                {/* 3. SKILLS UNLOCK POTENTIAL (Reusable Slider) */}
                <FeatureSlider
                    title="Skills are the key to Unlocking Potential"
                    subtitle="Continuous learning is the only way to stay ahead."
                    items={thoughts}
                />

                {/* 4. IMPACT SECTION (Reusable) */}
                <StatsSection
                    title="Creating Impact around the World"
                    subtitle="We are proud of the numbers that represent our global community."
                    stats={impacts}
                />

                {/* 5. PARTNERS SECTION (Reusable) */}
                <PartnersSection
                    partners={partners}
                />

                {/* 6. HISTORY / STORY SECTION (Custom Layout) */}
                <section className="py-8 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-4">Our Journey</span>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">How It All Started?</h2>
                        <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
                            <p>
                                It started with a simple idea: <strong className="text-gray-900 bg-yellow-100 px-1">Education should be accessible to everyone</strong>. In 2020, amidst a rapidly changing world, our founders realized that traditional education systems were struggling to keep up with the demands of the modern workforce.
                            </p>
                            <p>
                                What began in a small shared office has now grown into a global movement. We started with just 5 courses and a handful of passionate instructors. Today, we are proud to support <strong className="text-(--color-primary)">millions of learners</strong> across the globe.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
