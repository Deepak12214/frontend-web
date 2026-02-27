import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import ForgotPasswordForm from './auth/ForgotPasswordForm';
import ResetPasswordForm from './auth/ResetPasswordForm';

const AuthModal = ({ isOpen, onClose, initialMode = 'login', resetToken = null }) => {
    const [mode, setMode] = useState(initialMode); // 'login' | 'signup' | 'forgot' | 'reset'

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Sync mode with initialMode when opening
            setMode(initialMode);
        } else {
            document.body.style.overflow = 'unset';
            // Optional: Reset mode when closing, but not strictly necessary
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, initialMode]);

    if (!isOpen) return null;

    const titles = {
        login: 'Welcome Back!',
        signup: 'Create Account',
        forgot: 'Forgot Password',
        reset: 'Reset Password',
    };

    const subtitles = {
        login: { question: 'New here?', action: 'Sign up', target: 'signup' },
        signup: { question: 'Already have an account?', action: 'Log in', target: 'login' },
        forgot: { question: 'Remembered?', action: 'Log in', target: 'login' },
        reset: null,
    };

    const handleResetSuccess = () => {
        setMode('login');
        // Optional: you could trigger a toast here in Navbar via callback, but switching to login is clear enough
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300 animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-[900px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-auto animate-modalSlideIn">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    id="auth-modal-close"
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Side — Visual (Always visible now) */}
                <div className="hidden md:flex md:w-5/12 relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 flex-col items-center justify-center p-8">
                    <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-(--color-primary) opacity-10 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-(--color-secondary) opacity-10 rounded-full blur-3xl" />

                    <div className="relative w-full aspect-square max-w-[280px] mb-8">
                        <img
                            src={`${import.meta.env.BASE_URL}images/lfc-e1699336877330.png`}
                            alt="Learning For Career"
                            className="w-full h-full object-contain drop-shadow-xl relative z-10"
                        />
                        {/* Floating badges code... same as before */}
                        <div className="absolute top-0 right-[-10px] bg-white/90 backdrop-blur-sm p-2 px-3 rounded-xl shadow-lg flex items-center gap-2 z-20 border border-white/50">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs font-bold text-gray-700">Salary Hike</span>
                        </div>
                        <div className="absolute bottom-10 left-[-10px] bg-white/90 backdrop-blur-sm p-2 px-3 rounded-xl shadow-lg flex items-center gap-2 z-20 border border-white/50">
                            <span className="text-blue-500 text-xs">🚀</span>
                            <span className="text-xs font-bold text-gray-700">Promotion</span>
                        </div>
                        <div className="absolute top-1/2 right-[-40px] bg-white/90 backdrop-blur-sm p-2 px-3 rounded-xl shadow-lg flex items-center gap-2 z-20 border border-white/50">
                            <span className="text-orange-500 text-xs">⚡</span>
                            <span className="text-xs font-bold text-gray-700">Career Switch</span>
                        </div>
                    </div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {mode === 'login' ? 'Welcome Back!' :
                                mode === 'forgot' ? 'Forgot Password?' :
                                    mode === 'reset' ? 'Set New Password' :
                                        'Master Your Skills'}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                            {mode === 'login' ? 'Continue your learning journey.' :
                                mode === 'forgot' ? 'No worries, we’ll help you reset it.' :
                                    mode === 'reset' ? 'Make it secure and memorable.' :
                                        'Join our community and take your career to the next level.'}
                        </p>
                    </div>
                </div>

                {/* Right Side — Forms */}
                <div className="w-full md:w-7/12 bg-white flex flex-col">
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        <div className="flex flex-col justify-center px-8 md:px-12 py-10">
                            <div className="max-w-[400px] mx-auto w-full">

                                {/* Header */}
                                <div className="mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                        {titles[mode]}
                                    </h2>
                                    {subtitles[mode] && (
                                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                            <span>{subtitles[mode].question}</span>
                                            <button
                                                id={`switch-to-${subtitles[mode].target}`}
                                                onClick={() => setMode(subtitles[mode].target)}
                                                className="font-semibold text-(--color-primary) hover:text-(--color-primary-dark) transition-colors"
                                            >
                                                {subtitles[mode].action}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Forms */}
                                {mode === 'login' && (
                                    <LoginForm
                                        onClose={onClose}
                                        onForgot={() => setMode('forgot')}
                                    />
                                )}
                                {mode === 'signup' && <SignUpForm />}
                                {mode === 'forgot' && (
                                    <ForgotPasswordForm onBack={() => setMode('login')} />
                                )}
                                {mode === 'reset' && (
                                    <ResetPasswordForm
                                        token={resetToken}
                                        onSuccess={handleResetSuccess}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AuthModal;
