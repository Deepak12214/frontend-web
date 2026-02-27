import React from 'react';
import { Phone, Mail, MapPin, Globe, LifeBuoy, ArrowRight, MessageCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { categories, navLinks } from '../../data/mock';

const Contact = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us', active: true },
    ];

    const offices = [
        {
            city: 'Noida (Headquarters)',
            address: 'NetEdge Tower, C-56, A/28, Sector 62, Noida, Uttar Pradesh 201309',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600'
        },
        {
            city: 'Bangalore',
            address: 'Prestige Meridian, MG Road, Yellappa Garden, Ashok Nagar, Bengaluru, Karnataka 560001',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600'
        },
        {
            city: 'Pune',
            address: 'World Trade Center, Kharadi, Pune, Maharashtra 411014',
            image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=600'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Header categories={categories} navLinks={navLinks} />

            <main className="pb-20">
                {/* Breadcrumb Section */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-4">
                        <Breadcrumb items={breadcrumbItems} simple={true} />
                    </div>
                </div>

                {/* Hero / Contact Us Main Section */}
                <section className="bg-white py-8 lg:py-12">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-6 animate-slideDown">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                    Contact <span className="text-(--color-primary)">Us</span>
                                </h1>
                                <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                                    We're here to help and answer any question you might have. We look forward to hearing from you.
                                </p>

                                <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-(--color-primary) border border-transparent rounded-full hover:bg-(--color-primary-dark) focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-primary) shadow-lg shadow-(--color-primary)/30 hover:shadow-(--color-primary)/50 hover:-translate-y-1">
                                    Connect with a Career Expert
                                    <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="relative lg:h-[350px] w-full flex items-center justify-center animate-fadeIn">
                                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-yellow-50 rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1596524430615-b46476ddc820?auto=format&fit=crop&q=80&w=800"
                                    alt="Contact Support"
                                    className="relative rounded-3xl shadow-2xl object-cover h-full w-[80%] mx-auto z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get in Touch Section */}
                <section className="py-12 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] pointer-events-none">
                        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                        <div className="text-center mb-10 space-y-3">
                            <span className="text-(--color-primary) font-bold tracking-wider uppercase text-xs">Reach Out</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get in Touch</h2>
                            <p className="text-gray-500 text-sm max-w-2xl mx-auto">Have a question regarding our courses or need career guidance? Choose how you want to reach out.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1: Sales / General Inquiry */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Talk to Sales</h3>
                                <p className="text-gray-500 mb-4 text-xs leading-relaxed">Interested in our courses? Just pick up the phone to chat with a member of our sales team.</p>
                                <a href="tel:+918882880880" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 text-xs">
                                    +91-8882-880-880 <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Card 2: Email Support */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                                    <MessageCircle className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Support</h3>
                                <p className="text-gray-500 mb-4 text-xs leading-relaxed">Need help with your current course or facing technical issues? Our support team is here for you.</p>
                                <a href="mailto:support@learningforcareer.com" className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 text-xs">
                                    support@learningforcareer.com <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Card 3: Complaints */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                                    <LifeBuoy className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Feedback & Complaints</h3>
                                <p className="text-gray-500 mb-4 text-xs leading-relaxed">Have something to say? We value your feedback and are committed to improving your experience.</p>
                                <a href="mailto:complaints@learningforcareer.com" className="text-green-600 font-bold hover:text-green-700 flex items-center gap-2 text-xs">
                                    complaints@learningforcareer.com <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* We've Got Your Back Section */}
                <section className="bg-gray-900 py-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">We've Got Your Back</h2>
                        <p className="text-gray-400 mb-8 text-base">From enrollment to completion, we are with you at every step of your journey.</p>

                        <div className="grid md:grid-cols-2 gap-8 md:divide-x divide-gray-800">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="flex items-center gap-3">
                                    <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-6 h-auto shadow-sm rounded" />
                                    <span className="text-gray-300 font-medium text-sm">Calling from India</span>
                                </div>
                                <a href="tel:+919876543210" className="text-xl font-bold hover:text-(--color-primary) transition-colors">
                                    +91 987 654 3210
                                </a>
                            </div>

                            <div className="flex flex-col items-center space-y-3">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300 font-medium text-sm">Calling from Outside India</span>
                                </div>
                                <a href="tel:+15551234567" className="text-xl font-bold hover:text-(--color-primary) transition-colors">
                                    +1 555 123 4567
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where We Work From Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Where We Work From</h2>
                            <p className="text-gray-500 text-sm">Our offices across the country</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {offices.map((office, index) => (
                                <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="h-40 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                        <img
                                            src={office.image}
                                            alt={office.city}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gray-900 flex items-center gap-1 shadow-sm">
                                            <MapPin className="w-3 h-3 text-(--color-primary)" />
                                            {office.city}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{office.city} Office</h3>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                            {office.address}
                                        </p>
                                        <a
                                            href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-xs font-bold text-(--color-primary) hover:underline"
                                        >
                                            View on Map <ArrowRight className="w-3 h-3 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Disclaimer / Important Note Section */}
                <section className="bg-gray-50 border-t border-gray-200 py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Important Note / Disclaimer</h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-3">
                            Please note that Learning For Career creates outcomes-based courses that guarantee skill acquisition. However, individual results may vary based on effort and background. We do not guarantee jobs or placements unless explicitly stated in a specific program's terms.
                        </p>
                        <a href="/terms" className="text-(--color-primary) font-bold text-xs hover:underline">Read full terms & conditions</a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
