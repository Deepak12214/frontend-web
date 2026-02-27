import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = ({
    title = "Our Team",
    subtitle = "Meet the minds behind our mission.",
    members = []
}) => {
    return (
        <section className="bg-slate-50 py-6 lg:py-8 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center"
                        >
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-orange-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover border-3 border-white shadow-md relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-(--color-primary) transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-xs font-bold text-(--color-primary) uppercase tracking-wide mb-2">
                                {member.role}
                            </p>

                            <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                                {member.bio || "Passionate about education and technology, helping learners achieve their dreams through innovative solutions."}
                            </p>

                            <div className="mt-auto flex gap-4">
                                {member.social?.linkedin && (
                                    <a href={member.social.linkedin} className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {member.social?.twitter && (
                                    <a href={member.social.twitter} className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-400 transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                )}
                                <a href={`mailto:${member.email || '#'}`} className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
