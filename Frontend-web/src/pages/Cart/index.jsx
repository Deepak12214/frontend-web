import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight, Tag, Shield, RotateCcw, BookOpen } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { navLinks } from '../../data/mock';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const categories = [
    { name: 'Development', path: '/courses?category=development' },
    { name: 'Business', path: '/courses?category=business' },
    { name: 'Design', path: '/courses?category=design' },
];

const CartPage = () => {
    const { cart, removeFromCart, clearCart, cartCount, cartTotal, cartOriginalTotal } = useCart();
    const navigate = useNavigate();

    const discount = cartOriginalTotal - cartTotal;
    const discountPercent = cartOriginalTotal > 0
        ? Math.round((discount / cartOriginalTotal) * 100)
        : 0;

    const formatPrice = (val) => {
        if (typeof val === 'number') return val.toLocaleString('en-IN');
        const num = parseFloat(String(val || '0').replace(/[^0-9.]/g, ''));
        return isNaN(num) ? '0' : num.toLocaleString('en-IN');
    };

    // Empty cart state
    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header categories={categories} navLinks={navLinks} />
                <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 max-w-md w-full text-center">
                        <div className="w-24 h-24 bg-(--color-primary)/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingCart className="w-10 h-10 text-(--color-primary)" />
                        </div>
                        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Your cart is empty</h1>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Looks like you haven't added any courses yet.<br />
                            Explore our courses and start learning today!
                        </p>
                        <Link
                            to="/courses"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-(--color-primary-dark) transition-all shadow-md shadow-(--color-primary)/20 hover:-translate-y-0.5"
                        >
                            <BookOpen className="w-4 h-4" />
                            Browse Courses
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header categories={categories} navLinks={navLinks} />

            <main className="flex-1 py-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

                    {/* Page Title & Clear Cart */}
                    <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-4">
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Shopping Cart</h1>
                            <p className="text-gray-500 mt-2 text-sm">
                                You have <span className="font-bold text-(--color-primary)">{cartCount}</span> {cartCount === 1 ? 'course' : 'courses'} in your cart
                            </p>
                        </div>
                        {cartCount > 0 && (
                            <button
                                onClick={clearCart}
                                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-500 font-semibold transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                                Clear Cart
                            </button>
                        )}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 items-start">

                        {/* ── LEFT: Cart Items ── */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 group"
                                >
                                    {/* Course Thumbnail */}
                                    <div
                                        className="w-full sm:w-36 sm:h-24 rounded-xl bg-linear-to-br from-gray-100 to-gray-200 shrink-0 flex items-center justify-center text-3xl cursor-pointer overflow-hidden relative"
                                        onClick={() => navigate(`/courses/${course.id}`)}
                                    >
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                        {course.image
                                            ? <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            : <span>👨‍💻</span>
                                        }
                                    </div>

                                    {/* Course Info */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <h3
                                                    className="font-bold text-gray-900 text-base leading-snug line-clamp-2 cursor-pointer hover:text-(--color-primary) transition-colors"
                                                    onClick={() => navigate(`/courses/${course.id}`)}
                                                >
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1 font-medium">By <span className="text-gray-700">{course.instructor}</span></p>
                                            </div>

                                            <div className="text-right shrink-0">
                                                <p className="text-xl font-black text-(--color-primary)">
                                                    ₹{formatPrice(course.price)}
                                                </p>
                                                {course.originalPrice && (
                                                    <p className="text-xs text-gray-400 line-through mt-0.5">
                                                        ₹{formatPrice(course.originalPrice)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-3 flex items-center justify-between">
                                            {/* Labels/Meta */}
                                            <div className="flex items-center gap-2.5 flex-wrap">
                                                {course.rating && (
                                                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-600 font-bold text-xs">
                                                        <span>{course.rating}</span>
                                                        <span className="text-[10px]">★</span>
                                                    </div>
                                                )}
                                                {course.duration && (
                                                    <div className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                                                        {course.duration} total
                                                    </div>
                                                )}
                                                {course.category && (
                                                    <div className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-600 uppercase tracking-wider">
                                                        {course.category}
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(course.id)}
                                                className="text-sm font-bold text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors"
                                                aria-label="Remove course"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── RIGHT: Order Summary ── */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
                                <h2 className="text-lg font-extrabold text-gray-900 mb-5">Order Summary</h2>

                                {/* Price breakdown */}
                                <div className="space-y-3 text-sm border-b border-gray-100 pb-5 mb-5">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Original Price</span>
                                        <span className="font-semibold text-gray-900">₹{formatPrice(cartOriginalTotal)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green-600">
                                            <span className="flex items-center gap-1.5">
                                                <Tag className="w-4 h-4" />
                                                Discount
                                            </span>
                                            <span className="font-bold">- ₹{formatPrice(discount)}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-base font-bold text-gray-900">Total:</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-extrabold text-(--color-primary) leading-none">₹{formatPrice(cartTotal > 0 ? cartTotal : cartOriginalTotal)}</span>
                                        {discount > 0 && <span className="block text-xs text-green-600 font-medium mt-1">You save ₹{formatPrice(discount)}</span>}
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    className="w-full relative group overflow-hidden bg-(--color-primary) text-white font-extrabold py-3.5 rounded-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-(--color-primary)/20 hover:bg-(--color-primary-dark)"
                                    onClick={() => alert('Checkout coming soon! Payment gateway integration in progress.')}
                                >
                                    <span className="relative z-10 flex items-center gap-2 text-base">
                                        Proceed to Checkout
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                {/* Trust Signals */}
                                <div className="mt-6 pt-5 border-t border-gray-50 space-y-3">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Buy with confidence</h4>
                                    <div className="flex items-start gap-3 text-sm text-gray-600">
                                        <div className="bg-green-50 p-2 rounded-lg shrink-0">
                                            <Shield className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">30-Day Money-Back</p>
                                            <p className="text-xs mt-0.5 opacity-80">Not satisfied? Get a full refund.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm text-gray-600">
                                        <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                                            <RotateCcw className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Lifetime Access</p>
                                            <p className="text-xs mt-0.5 opacity-80">Learn on your schedule.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Continue Shopping */}
                                <Link
                                    to="/courses"
                                    className="block text-center mt-5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    Explore more courses
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CartPage;
