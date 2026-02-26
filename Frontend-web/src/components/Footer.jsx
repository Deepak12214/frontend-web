import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">

                {/* Brand */}
                <div>
                    <Link to="/" className="inline-block mb-4">
                        <img
                            src="/images/lfc-e1699336877330.png"
                            alt="Learning For Career"
                            className="h-12 w-auto object-contain bg-white/90 rounded-lg px-2 py-1"
                        />
                    </Link>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Empowering careers through world-class online education.
                    </p>
                    <div className="flex gap-4">
                        {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(platform => (
                            <a key={platform} href="#" className="hover:text-white transition-colors">{platform}</a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'About Us', path: '/about' },
                            { name: 'Careers', path: '#' },
                            { name: 'Blog', path: '/blog' },
                            { name: 'Contact Us', path: '/contact' },
                            { name: 'Testimonials', path: '/testimonials' }
                        ].map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} className="hover:text-white transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Explore</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'All Courses', path: '/courses' },
                            { name: 'FAQ', path: '/faq' },
                            { name: 'Help Center', path: '#' },
                            { name: 'Terms of Service', path: '#' },
                            { name: 'Privacy Policy', path: '/privacy-policy' }
                        ].map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} className="hover:text-white transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Subscribe</h3>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-(--color-primary)"
                        />
                        <button className="bg-(--color-primary) text-white font-bold py-2 rounded-lg hover:bg-(--color-primary-dark) transition-colors cursor-pointer">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                &copy; 2026 Learning For Career. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
