import React, { useState } from 'react';
import { Mail, Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import { authAPI } from '../../services/api/apiService';

const ForgotPasswordForm = ({ onBack }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await authAPI.forgotPassword(email);
            setSent(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Success state
    if (sent) {
        return (
            <div className="text-center space-y-5 py-4">
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Check your inbox!</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        We've sent a password reset link to <span className="font-semibold text-gray-700">{email}</span>.
                        Check your spam folder if you don't see it.
                    </p>
                </div>
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-dark)] transition-colors mx-auto"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Login
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
                Enter your registered email and we'll send you a link to reset your password.
            </p>

            {/* Error */}
            {error && (
                <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-sm font-medium text-red-600">
                    {error}
                </div>
            )}

            {/* Email Input */}
            <div className="space-y-1.5">
                <label htmlFor="forgot-email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        id="forgot-email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                        required
                        autoComplete="email"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Enter your email"
                    />
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                id="forgot-password-submit-btn"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-linear-to-r from-(--color-primary) to-(--color-primary-dark) text-white font-bold rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending link…</span>
                    </>
                ) : (
                    'Send Reset Link'
                )}
            </button>

            {/* Back */}
            <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mx-auto"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
            </button>
        </form>
    );
};

export default ForgotPasswordForm;
