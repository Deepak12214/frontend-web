import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { authAPI } from '../../services/api/apiService';

const ResetPasswordForm = ({ token, onSuccess }) => {
    const [formData, setFormData] = useState({ password: '', confirm: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters.');
            return;
        }
        if (formData.password !== formData.confirm) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            await authAPI.resetPassword(token, formData.password);
            // On success, trigger the callback (which will switch to login)
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Link is invalid or has expired.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
                <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-sm font-medium text-red-600">
                    {error}
                </div>
            )}

            {/* New Password */}
            <div className="space-y-1.5">
                <label htmlFor="reset-password" className="block text-sm font-semibold text-gray-700">
                    New Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="reset-password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Min. 8 characters"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
                <label htmlFor="reset-confirm" className="block text-sm font-semibold text-gray-700">
                    Confirm Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showConfirm ? 'text' : 'password'}
                        id="reset-confirm"
                        name="confirm"
                        value={formData.confirm}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Re-enter password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                        {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-linear-to-r from-(--color-primary) to-(--color-primary-dark) text-white font-bold rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Updating Password…</span>
                    </>
                ) : (
                    'Set New Password'
                )}
            </button>
        </form>
    );
};

export default ResetPasswordForm;
