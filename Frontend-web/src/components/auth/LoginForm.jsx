import React, { useState, useRef } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { authAPI } from '../../services/api/apiService';
import { useAuth } from '../../context/AuthContext';

const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || 'https://google.com';

const LoginForm = ({ onClose, onForgot }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage({ text: '', type: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });
        setLoading(true);

        try {
            const response = await authAPI.login(formData);

            // ✅ Use AuthContext — no more manual localStorage writes
            login(response.data?.user, response.data?.accessToken);

            setMessage({ text: 'Login successful!', type: 'success' });
            setTimeout(() => { if (onClose) onClose(); }, 800);

        } catch (err) {
            const msg = err.response?.data?.message || 'Login failed. Please try again.';
            setMessage({ text: msg, type: 'error' });
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* Response Message */}
            {message.text && (
                <div className={`p-3 rounded-lg border text-sm font-medium ${message.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-red-50 border-red-200 text-red-600'
                    }`}>
                    {message.text}
                </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
                <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        id="login-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Enter your email"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
                <label htmlFor="login-password" className="block text-sm font-semibold text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="login-password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="current-password"
                        className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        aria-label="Toggle password visibility"
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onForgot}
                    className="text-xs font-semibold text-(--color-primary) hover:text-(--color-primary-dark) transition-colors"
                >
                    Forgot password?
                </button>
            </div>

            {/* Submit */}
            <button
                type="submit"
                id="login-submit-btn"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-linear-to-r from-(--color-primary) to-(--color-primary-dark) text-white font-bold rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Signing in…</span>
                    </>
                ) : (
                    'Log In'
                )}
            </button>
        </form>
    );
};

export default LoginForm;
