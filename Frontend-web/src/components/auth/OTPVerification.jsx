import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { authAPI } from '../../services/api/apiService';

const OTPVerification = ({ authData, onSuccess, onBack }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [resendTimer, setResendTimer] = useState(60);
    const inputRefs = useRef([]);

    useEffect(() => {
        // Focus first input on mount
        inputRefs.current[0]?.focus();

        // Start countdown timer
        const timer = setInterval(() => {
            setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (index, value) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Take only last character
        setOtp(newOtp);
        setError('');

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        // Auto-submit when all fields are filled
        if (index === 5 && value) {
            const fullOtp = [...newOtp.slice(0, 5), value].join('');
            if (fullOtp.length === 6) {
                handleSubmit(fullOtp);
            }
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);

        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = pastedData.split('');
        setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);

        // Focus last filled input
        const lastIndex = Math.min(pastedData.length, 5);
        inputRefs.current[lastIndex]?.focus();

        // Auto-submit if complete
        if (pastedData.length === 6) {
            handleSubmit(pastedData);
        }
    };

    const handleSubmit = async (otpValue = otp.join('')) => {
        if (otpValue.length !== 6) {
            setError('Please enter all 6 digits');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await authAPI.verifyOTP({
                email: authData.email,
                otp: otpValue
            });

            if (response.data && response.data.success) {
                // Show success state briefly before redirect
                setTimeout(() => {
                    onSuccess();
                }, 1000);
            } else {
                setError('Invalid OTP. Please try again.');
                setOtp(['', '', '', '', '', '']);
                inputRefs.current[0]?.focus();
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Verification failed. Please try again.');
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (resendTimer > 0) return;

        setLoading(true);
        setError('');

        try {
            await authAPI.resendOTP({ email: authData.email });
            setResendTimer(60);
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
        } catch (err) {
            setError('Failed to resend OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full flex flex-col">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 m-6 transition-colors self-start"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back</span>
            </button>

            {/* Header */}
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Verify Your Email
                </h2>
                <p className="text-gray-600 text-sm">
                    We've sent a 6-digit code to<br />
                    <span className="font-semibold text-gray-900">{authData?.email}</span>
                </p>
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600 text-center">{error}</p>
                </div>
            )}

            {/* OTP Input */}
            <div className="mb-6">
                <div className="flex gap-2 sm:gap-3 justify-center" onPaste={handlePaste}>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            disabled={loading}
                            className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-(--color-primary) focus:ring-2 focus:ring-orange-100 transition-all duration-200 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    ))}
                </div>
            </div>

            {/* Verify Button */}
            <button
                onClick={() => handleSubmit()}
                disabled={loading || otp.join('').length !== 6}
                className="w-full py-3 px-4 bg-linear-to-r from-(--color-primary) to-(--color-primary-dark) text-white font-semibold rounded-lg hover:shadow-lg hover:to-(--color-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Verifying...</span>
                    </>
                ) : (
                    <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Verify OTP</span>
                    </>
                )}
            </button>

            {/* Resend OTP */}
            <div className="text-center">
                <p className="text-sm text-gray-600">
                    Didn't receive the code?{' '}
                    {resendTimer > 0 ? (
                        <span className="text-gray-500">
                            Resend in {resendTimer}s
                        </span>
                    ) : (
                        <button
                            onClick={handleResend}
                            disabled={loading}
                            className="text-(--color-primary) font-semibold hover:text-(--color-primary-dark) disabled:opacity-50"
                        >
                            Resend OTP
                        </button>
                    )}
                </p>
            </div>
        </div>
    );
};

export default OTPVerification;
