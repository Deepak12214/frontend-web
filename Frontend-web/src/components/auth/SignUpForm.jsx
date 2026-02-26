import React, { useState, useRef } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Loader2, CheckCircle2, Circle } from 'lucide-react';
import { authAPI } from '../../services/api/apiService';
import ReCAPTCHA from 'react-google-recaptcha';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' }); // type: 'error' | 'success'
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage({ text: '', type: '' });
    };

    const getPasswordRequirements = (pwd) => ({
        length: pwd.length >= 8,
        uppercase: /[A-Z]/.test(pwd),
        lowercase: /[a-z]/.test(pwd),
        number: /[0-9]/.test(pwd),
        special: /[^A-Za-z0-9]/.test(pwd),
    });

    const pwdReqs = getPasswordRequirements(formData.password);
    const isPasswordValid = Object.values(pwdReqs).every(Boolean);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        if (!isPasswordValid) {
            setMessage({ text: 'Please ensure your password meets all requirements.', type: 'error' });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage({ text: 'Passwords do not match.', type: 'error' });
            return;
        }

        setLoading(true);

        if (!captchaToken) {
            setMessage({ text: 'Please complete the CAPTCHA verification.', type: 'error' });
            setLoading(false);
            return;
        }

        try {
            await authAPI.register({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
            });

            setMessage({
                text: '✅ Account created! Please check your email to verify your account before logging in.',
                type: 'success',
            });

            // Reset form on success
            setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

        } catch (err) {
            const msg = err.response?.data?.message || 'Registration failed. Please try again.';
            setMessage({ text: msg, type: 'error' });
            // Reset captcha on error
            if (recaptchaRef.current) recaptchaRef.current.reset();
            setCaptchaToken(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2.5">

            {/* Response Message */}
            {message.text && (
                <div className={`p-3 rounded-lg border text-sm font-medium leading-relaxed ${message.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-red-50 border-red-200 text-red-600'
                    }`}>
                    {message.text}
                </div>
            )}

            {/* First Name + Last Name */}
            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    <label htmlFor="reg-firstName" className="block text-sm font-semibold text-gray-700">
                        First Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="reg-firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            autoComplete="given-name"
                            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                            placeholder="Rahul"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="reg-lastName" className="block text-sm font-semibold text-gray-700">
                        Last Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="reg-lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            autoComplete="family-name"
                            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                            placeholder="Sharma"
                        />
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
                <label htmlFor="reg-email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        id="reg-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
                <label htmlFor="reg-password" className="block text-sm font-semibold text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="reg-password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        onCopy={(e) => e.preventDefault()}
                        onPaste={(e) => e.preventDefault()}
                        required
                        autoComplete="new-password"
                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Min. 8 characters"
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

                {/* Real-time Password Validation */}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${(isPasswordFocused || formData.password.length > 0)
                        ? 'max-h-48 opacity-100 mt-2'
                        : 'max-h-0 opacity-0 m-0'
                        }`}
                >
                    <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        <p className="text-[11px] font-semibold text-gray-700 mb-1.5">Password must contain:</p>
                        <ul className="text-[11px] grid grid-cols-2 gap-x-2 gap-y-1.5">
                            <li className={`flex items-center gap-1.5 ${pwdReqs.length ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                {pwdReqs.length ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                                8+ characters
                            </li>
                            <li className={`flex items-center gap-1.5 ${pwdReqs.uppercase ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                {pwdReqs.uppercase ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                                Uppercase
                            </li>
                            <li className={`flex items-center gap-1.5 ${pwdReqs.lowercase ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                {pwdReqs.lowercase ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                                Lowercase
                            </li>
                            <li className={`flex items-center gap-1.5 ${pwdReqs.number ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                {pwdReqs.number ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                                Number
                            </li>
                            <li className={`flex items-center gap-1.5 col-span-2 ${pwdReqs.special ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                                {pwdReqs.special ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <Circle className="w-3.5 h-3.5 shrink-0" />}
                                Special character (e.g., @, #, $)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
                <label htmlFor="reg-confirmPassword" className="block text-sm font-semibold text-gray-700">
                    Confirm Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="reg-confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onCopy={(e) => e.preventDefault()}
                        onPaste={(e) => e.preventDefault()}
                        required
                        autoComplete="new-password"
                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-200 outline-none text-sm"
                        placeholder="Confirm password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        aria-label="Toggle confirm password visibility"
                    >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center my-2">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                id="register-submit-btn"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-linear-to-r from-(--color-primary) to-(--color-primary-dark) text-white font-bold rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm mt-1"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Creating account…</span>
                    </>
                ) : (
                    'Create Account'
                )}
            </button>
        </form>
    );
};

export default SignUpForm;
