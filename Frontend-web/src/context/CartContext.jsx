import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'eguru_cart';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const stored = localStorage.getItem(CART_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    // Sync to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        // Dispatch event so Navbar badge updates across components
        window.dispatchEvent(new Event('cart-change'));
    }, [cart]);

    const addToCart = useCallback((course) => {
        setCart(prev => {
            if (prev.find(item => item.id === course.id)) {
                return prev; // already in cart
            }
            return [...prev, { ...course, addedAt: new Date().toISOString() }];
        });
    }, []);

    const removeFromCart = useCallback((courseId) => {
        setCart(prev => prev.filter(item => item.id !== courseId));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const isInCart = useCallback((courseId) => {
        return cart.some(item => item.id === courseId);
    }, [cart]);

    const cartCount = cart.length;

    const cartTotal = cart.reduce((sum, item) => {
        const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
        return sum + price;
    }, 0);

    const cartOriginalTotal = cart.reduce((sum, item) => {
        const price = typeof item.originalPrice === 'number'
            ? item.originalPrice
            : parseFloat(String(item.originalPrice || item.price).replace(/[^0-9.]/g, '')) || 0;
        return sum + price;
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            isInCart,
            cartCount,
            cartTotal,
            cartOriginalTotal,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used inside CartProvider');
    }
    return context;
};

export default CartContext;
