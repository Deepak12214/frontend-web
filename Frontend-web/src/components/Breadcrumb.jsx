import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items, simple = false }) => {
    const navContent = (
        <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {/* Separator */}
                        {index > 0 && (
                            <svg
                                className="w-4 h-4 text-gray-400 mx-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        )}

                        {item.link ? (
                            <Link
                                to={item.link}
                                className="inline-flex items-center gap-2 hover:text-(--color-primary) transition-colors"
                            >
                                {/* Icon */}
                                {item.icon && (
                                    <span className="shrink-0">
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.label}</span>
                            </Link>
                        ) : (
                            <span className="inline-flex items-center gap-2 font-medium text-gray-900">
                                {/* Icon */}
                                {item.icon && (
                                    <span className="shrink-0 text-gray-400">
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.label}</span>
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );

    if (simple) {
        return navContent;
    }

    return (
        <div className="bg-transparent">
            <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-3">
                {navContent}
            </div>
        </div>
    );
};

export default Breadcrumb;
