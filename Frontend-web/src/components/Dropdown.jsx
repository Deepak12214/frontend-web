import React, { useState, useRef, useEffect } from 'react';

/**
 * Custom Dropdown Component
 * Professional dropdown with icons and smooth animations
 * 
 * Usage:
 * <Dropdown
 *   value={sortBy}
 *   onChange={setSortBy}
 *   options={sortOptions}
 *   label="Sort by"
 * />
 */

const Dropdown = ({
    value,
    onChange,
    options,
    label,
    placeholder = "Select an option",
    icon,
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {label && (
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}

            {/* Dropdown Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all shadow-sm"
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    {icon && <span className="text-gray-400 shrink-0">{icon}</span>}
                    {selectedOption?.icon && <span className="text-base shrink-0">{selectedOption.icon}</span>}
                    <span className="text-gray-900 whitespace-nowrap truncate block">
                        {selectedOption?.label || placeholder}
                    </span>
                </div>

                <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 min-w-[240px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-slideDown origin-top-right">
                    <div className="max-h-80 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-start gap-3 px-3 py-2 text-left transition-colors ${value === option.value
                                    ? 'bg-(--color-primary)/5'
                                    : 'hover:bg-gray-50'
                                    }`}
                            >
                                <div className={`mt-0.5 text-lg shrink-0 ${value === option.value ? 'opacity-100' : 'opacity-100'}`}>
                                    {option.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className={`text-sm font-semibold truncate ${value === option.value ? 'text-(--color-primary)' : 'text-gray-700'}`}>
                                        {option.label}
                                    </div>
                                    {option.description && (
                                        <div className="text-[10px] text-gray-400 mt-0 leading-tight truncate">
                                            {option.description}
                                        </div>
                                    )}
                                </div>
                                {value === option.value && (
                                    <svg className="w-4 h-4 text-(--color-primary) shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
