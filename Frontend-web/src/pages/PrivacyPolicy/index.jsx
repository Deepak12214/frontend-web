import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { categories, navLinks } from '../../data/mock';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Privacy Policy', active: true },
    ];

    const lastUpdated = 'February 18, 2026';

    const sections = [
        {
            title: "Information We Collect",
            icon: FileText,
            content: (
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information when you register or purchase a course.</li>
                    <li><strong>Usage Data:</strong> Information on how you access and use the service, including your browser type, device details, and pages visited.</li>
                    <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze site traffic.</li>
                </ul>
            )
        },
        {
            title: "How We Use Your Information",
            icon: Eye,
            content: (
                <p className="text-gray-600 leading-relaxed">
                    We use your data to provide and improve our services, process transactions, communicate with you about updates or offers, and ensure the security of our platform. We do not sell your personal data to third parties.
                </p>
            )
        },
        {
            title: "Data Security",
            icon: Lock,
            content: (
                <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
            )
        },
        {
            title: "Your Rights",
            icon: Shield,
            content: (
                <p className="text-gray-600 leading-relaxed">
                    You have the right to access, correct, or delete your personal information. You can manage your communication preferences or opt-out of marketing emails at any time.
                </p>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Header categories={categories} navLinks={navLinks} />

            <main className="pb-20">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <Breadcrumb items={breadcrumbItems} simple={true} />
                    </div>
                </div>

                {/* Hero / Header */}
                <section className="bg-white py-8 text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                            Privacy <span className="text-(--color-primary)">Policy</span>
                        </h1>
                        <p className="text-gray-500 text-base mb-2">
                            Your privacy is important to us. This policy explains how we handle your data.
                        </p>
                        <p className="text-xs text-gray-400">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 p-2 bg-(--color-primary)/10 rounded-lg text-(--color-primary)">
                                    <section.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h2>
                                    <div className="text-gray-600 text-xs leading-relaxed">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-sm">
                            If you have any questions about this Privacy Policy, please contact us at{' '}
                            <a href="mailto:privacy@learningforcareer.com" className="text-(--color-primary) font-bold hover:underline">
                                privacy@learningforcareer.com
                            </a>
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
