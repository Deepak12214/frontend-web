import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import { Menu, X, User as UserIcon, LogOut, LayoutDashboard, UserCircle, ChevronDown, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = ({ links }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');
    const [verifyBanner, setVerifyBanner] = useState(null);
    const [resetToken, setResetToken] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const { user, logout } = useAuth();
    const { cartCount } = useCart();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        setIsProfileDropdownOpen(false);
        window.location.href = '/';
    };

    // Auto-open modals based on URL query params
    useEffect(() => {
        const params = new URLSearchParams(location.search);

        // 1. Email Verification
        if (params.get('verified') === 'true') {
            setVerifyBanner('success');
            setAuthMode('login');
            setIsAuthModalOpen(true);
            navigate('/', { replace: true });
        }
        else if (params.get('verify_error') === 'true') {
            setVerifyBanner('error');
            navigate('/', { replace: true });
            setTimeout(() => setVerifyBanner(null), 6000);
        }

        // 2. Reset Password
        const rToken = params.get('resetToken');
        if (rToken) {
            setResetToken(rToken);
            setAuthMode('reset');
            setIsAuthModalOpen(true);
            navigate('/', { replace: true });
        }

    }, [location.search, navigate]);

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    return (
        <>
            {/* Verification success banner */}
            {verifyBanner === 'success' && (
                <div className="fixed top-0 left-0 right-0 z-9999 bg-green-500 text-white text-center py-3 px-4 text-sm font-semibold shadow-lg animate-slideDown">
                    ✅ Email verified successfully! You can now log in.
                    <button
                        onClick={() => setVerifyBanner(null)}
                        className="ml-4 underline opacity-80 hover:opacity-100"
                    >
                        Dismiss
                    </button>
                </div>
            )}

            {/* Verification error banner */}
            {verifyBanner === 'error' && (
                <div className="fixed top-0 left-0 right-0 z-9999 bg-red-500 text-white text-center py-3 px-4 text-sm font-semibold shadow-lg animate-slideDown">
                    ❌ Verification link is invalid or has expired. Please register again.
                    <button
                        onClick={() => setVerifyBanner(null)}
                        className="ml-4 underline opacity-80 hover:opacity-100"
                    >
                        Dismiss
                    </button>
                </div>
            )}

            <nav className="border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all duration-300">
                <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative overflow-hidden p-1">
                            <img
                                src="/images/lfc-e1699336877330.png"
                                alt="Learning For Career"
                                className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links && links.map((link) => (
                            <Link
                                key={link.id}
                                to={link.path}
                                className="relative text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors group py-2"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--color-primary) transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons, Cart & Mobile Menu Toggle */}
                    <div className="flex items-center gap-3">

                        {/* Cart Icon */}
                        <Link
                            to="/cart"
                            className="relative p-2 rounded-xl text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                            aria-label="Shopping Cart"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                                    {cartCount > 99 ? '99+' : cartCount}
                                </span>
                            )}
                        </Link>

                        <div className="hidden md:flex items-center gap-4">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                        className="flex items-center gap-2.5 p-1.5 pr-4 rounded-full border border-gray-200 hover:border-orange-300 hover:bg-orange-50 bg-white shadow-sm transition-all duration-200 cursor-pointer"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-(--color-primary) flex items-center justify-center text-white font-bold text-sm shadow-inner">
                                            {user.firstName?.charAt(0).toUpperCase() || <UserIcon size={16} />}
                                        </div>
                                        <span className="text-sm font-extrabold text-gray-700 hidden lg:block">
                                            {user.firstName}
                                        </span>
                                        <ChevronDown size={16} className={`text-gray-500 hidden lg:block transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown */}
                                    {isProfileDropdownOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-40"
                                                onClick={() => setIsProfileDropdownOpen(false)}
                                            />
                                            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-slideDown overflow-hidden">
                                                <div className="px-4 py-3 border-b border-gray-50 flex flex-col">
                                                    <span className="text-sm font-bold text-gray-900">{user.firstName} {user.lastName}</span>
                                                    <span className="text-xs text-gray-500 truncate">{user.email}</span>
                                                </div>
                                                <div className="py-1">
                                                    <a
                                                        href="https://www.google.com"
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-(--color-primary) transition-colors font-medium"
                                                    >
                                                        <LayoutDashboard size={16} />
                                                        My Dashboard
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-(--color-primary) transition-colors font-medium"
                                                    >
                                                        <UserCircle size={16} />
                                                        My Profile
                                                    </a>
                                                </div>
                                                <div className="py-1 border-t border-gray-50">
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-bold cursor-pointer"
                                                    >
                                                        <LogOut size={16} />
                                                        Log Out
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => openAuthModal('login')}
                                        className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:text-(--color-primary) transition-colors cursor-pointer"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        onClick={() => openAuthModal('signup')}
                                        className="px-6 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-full hover:bg-(--color-primary) transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        Sign up
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-(--color-primary) cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out border-t border-gray-100 ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-4 pb-8' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
                    <div className="px-4 flex flex-col gap-2">
                        {links && links.map((link) => (
                            <Link
                                key={link.id}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base font-semibold text-gray-700 hover:text-(--color-primary) py-3 border-b border-gray-50 flex items-center gap-3"
                            >
                                {link.icon && <span className="text-xl">{link.icon}</span>}
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-6 pb-4">
                            {user ? (
                                <>
                                    <div className="px-5 py-3 rounded-xl bg-orange-50 mb-2 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-linear-to-r from-(--color-primary) to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                                            {user.firstName?.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{user.firstName} {user.lastName}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.google.com"
                                        className="w-full px-5 py-3 text-base font-bold text-gray-700 bg-gray-50 rounded-xl hover:text-(--color-primary) hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <LayoutDashboard size={18} /> My Dashboard
                                    </a>
                                    <a
                                        href="#"
                                        className="w-full px-5 py-3 text-base font-bold text-gray-700 bg-gray-50 rounded-xl hover:text-(--color-primary) hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <UserCircle size={18} /> My Profile
                                    </a>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-5 py-3 text-base font-bold text-red-600 border border-red-100 bg-red-50 rounded-xl hover:bg-red-100 transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
                                    >
                                        <LogOut size={18} /> Log out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => { setIsMobileMenuOpen(false); openAuthModal('login'); }}
                                        className="w-full px-5 py-3 text-base font-bold text-gray-600 border border-gray-200 rounded-xl hover:text-(--color-primary) transition-colors cursor-pointer"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        onClick={() => { setIsMobileMenuOpen(false); openAuthModal('signup'); }}
                                        className="w-full px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-(--color-primary) transition-all cursor-pointer"
                                    >
                                        Sign up
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Auth Modal */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => { setIsAuthModalOpen(false); setVerifyBanner(null); setResetToken(null); }}
                initialMode={authMode}
                resetToken={resetToken}
            />
        </>
    );
};

export default Navbar;
