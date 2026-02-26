import React, { useState } from 'react';
import { FileText, CreditCard, Award, RotateCcw, Headphones, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { categories, navLinks } from '../../data/mock';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full py-4 text-left flex items-start justify-between gap-4 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-medium text-sm transition-colors ${isOpen ? 'text-(--color-primary)' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {question}
                </span>
                <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus className={`w-4 h-4 ${isOpen ? 'text-(--color-primary)' : 'text-gray-400'}`} />
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="text-sm text-gray-500 leading-relaxed pr-8">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQCategoryCard = ({ title, icon: Icon, questions }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary)">
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <div className="space-y-1">
                {questions.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

const FAQ = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'FAQ', active: true },
    ];

    const faqData = [
        {
            title: 'Enrollment',
            icon: FileText,
            questions: [
                {
                    question: 'How do I enroll in a course?',
                    answer: 'You can enroll by selecting a course, clicking the "Enroll Now" button, and completing the checkout process.'
                },
                {
                    question: 'Can I start instantly?',
                    answer: 'Yes! Once your payment is confirmed, you will get immediate access to the course materials.'
                },
                {
                    question: 'Is there any eligibility criteria?',
                    answer: 'Most of our courses are beginner-friendly. Specific prerequisites, if any, are listed on the course details page.'
                },
                {
                    question: 'Do you offer corporate training?',
                    answer: 'Yes, we provide tailored corporate training programs. Please contact our sales team for more details.'
                }
            ]
        },
        {
            title: 'Payment',
            icon: CreditCard,
            questions: [
                {
                    question: 'What payment methods determine accepted?',
                    answer: 'We accept credit/debit cards, UPI, net banking, and major digital wallets.'
                },
                {
                    question: 'Is EMI available?',
                    answer: 'Yes, No-Cost EMI options are available for selected credit cards on courses above ₹5,000.'
                },
                {
                    question: 'Is my payment secure?',
                    answer: 'Absolutely. We use industry-standard encryption and trusted payment gateways to ensure your data is safe.'
                },
                {
                    question: 'Can I pay in installments?',
                    answer: 'We offer split payment options for our long-term mentorship programs. Check the course page for details.'
                }
            ]
        },
        {
            title: 'Certificate',
            icon: Award,
            questions: [
                {
                    question: 'When will I get the certificate?',
                    answer: 'You will receive your certificate immediately upon completing all course modules and the final assessment.'
                },
                {
                    question: 'Is the certificate valid internationally?',
                    answer: 'Our certificates are industry-recognized and can be added to your LinkedIn profile and resume.'
                },
                {
                    question: 'Can I get a hard copy?',
                    answer: 'We primarily provide digital certificates. Hard copies can be requested for a small additional fee.'
                },
                {
                    question: 'How do I download my certificate?',
                    answer: 'Go to your Dashboard > My Courses > Completed, and you will see a download button next to the course.'
                }
            ]
        },
        {
            title: 'Refunds',
            icon: RotateCcw,
            questions: [
                {
                    question: 'What is the refund policy?',
                    answer: 'We offer a 7-day money-back guarantee if you are not satisfied with the course content, provided you haven\'t completed more than 20%.'
                },
                {
                    question: 'How long does a refund take?',
                    answer: 'Refunds are typically processed within 5-7 business days and credited back to the original payment method.'
                },
                {
                    question: 'Can I transfer my course fee?',
                    answer: 'Course fees are non-transferable to other students but can sometimes be adjusted against another course for the same user.'
                },
                {
                    question: 'Are partial refunds available?',
                    answer: 'Partial refunds are not available. Please refer to our detailed Refund Policy page for specific scenarios.'
                }
            ]
        },
        {
            title: 'Support',
            icon: Headphones,
            questions: [
                {
                    question: 'How do I contact support?',
                    answer: 'You can reach us via the Contact page, email us at support@learningforcareer.com, or use the live chat feature.'
                },
                {
                    question: 'What are the support hours?',
                    answer: 'Our support team is available Mon-Sat from 9 AM to 7 PM IST.'
                },
                {
                    question: 'Do you provide 1-on-1 mentorship?',
                    answer: 'Yes, our premium courses include weekly 1-on-1 mentorship sessions with industry experts.'
                },
                {
                    question: 'Where can I report a bug?',
                    answer: 'If you encounter technical issues, please email screenshots and details to tech-support@learningforcareer.com.'
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <Header categories={categories} navLinks={navLinks} />

            <main className="grow pb-20">
                {/* Breadcrumb Section */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <Breadcrumb items={breadcrumbItems} simple={true} />
                    </div>
                </div>

                {/* Hero / Title Section */}
                <section className="bg-white pt-8 pb-6 text-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 relative inline-block">
                            Frequently Asked Questions
                            <span className="absolute bottom-[-10px] left-1/4 right-1/4 h-1 bg-(--color-primary) rounded-full opacity-80"></span>
                        </h1>
                        <p className="text-gray-500 text-base max-w-2xl mx-auto mt-2">
                            Everything you need to know about our courses, payment, and platform.
                        </p>
                    </div>
                </section>

                {/* FAQ Grid Section */}
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 masonry-grid">
                            {faqData.map((category, index) => (
                                <div key={index} className="h-full">
                                    <FAQCategoryCard
                                        title={category.title}
                                        icon={category.icon}
                                        questions={category.questions}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Still have questions banner */}
                <section className="mt-4 mb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-linear-to-r from-(--color-primary) to-orange-600 rounded-2xl p-6 md:p-8 text-center text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10">
                                <h2 className="text-xl md:text-2xl font-bold mb-3">Still have questions?</h2>
                                <p className="text-orange-50 mb-6 max-w-xl mx-auto text-sm">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                                <a href="/contact" className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-bold rounded-lg text-orange-700 bg-white hover:bg-orange-50 transition-colors">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default FAQ;
