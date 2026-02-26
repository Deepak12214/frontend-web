import React from 'react';
import CourseCard from './CourseCard';

const CoursesSection = ({
    title = "Trending Courses",
    subtitle = "Explore our highest-rated courses and start your learning journey today.",
    courses = [],
    showViewAllButton = true,
    onViewAllClick
}) => {
    // Split title to style the last word
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');

    return (
        <section className="bg-white py-4">
            <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                        {firstPart} <span className="text-[color:var(--color-primary)]">{lastWord}</span>
                    </h2>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="h-full">
                            <CourseCard course={course} className="h-full border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300" />
                        </div>
                    ))}
                </div>

                {showViewAllButton && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={onViewAllClick}
                            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md hover:shadow-xl"
                        >
                            View All Courses
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CoursesSection;
