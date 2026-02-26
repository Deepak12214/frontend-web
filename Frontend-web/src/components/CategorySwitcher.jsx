import React from 'react';

const CategorySwitcher = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="border-b border-gray-100  bg-(--color-accent)/5">
            <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-30">
                <div className="flex gap-8 overflow-x-auto no-scrollbar">
                    {categories.map((category) => {
                        const isActive = activeCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => onCategoryChange(category.id)}
                                className={`
                                    relative whitespace-nowrap py-2 text-sm font-medium transition-colors outline-none
                                    ${isActive
                                        ? 'text-[color:var(--color-primary)] font-bold'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }
                                `}
                            >
                                {category.label}
                                {/* Animated Underline */}
                                <span
                                    className={`
                                        absolute bottom-0 left-0 h-[3px] rounded-t-sm bg-[color:var(--color-primary)] transition-all duration-500 ease-out
                                        ${isActive ? 'w-full' : 'w-0'}
                                    `}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategorySwitcher;
