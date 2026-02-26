import React from 'react';
import { useLocation } from 'react-router-dom';
import CategorySwitcher from './CategorySwitcher';
import Navbar from './Navbar';

const Header = ({ categories = [], activeCategory, onCategoryChange, navLinks = [] }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {isHomePage && categories.length > 0 && (
                <CategorySwitcher
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={onCategoryChange}
                />
            )}
            <Navbar links={navLinks} />
        </header>
    );
};

export default Header;
