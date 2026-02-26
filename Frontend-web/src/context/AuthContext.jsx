import React, { createContext, useContext, useState, useCallback } from 'react';
import { authAPI } from '../services/api/apiService';

const AuthContext = createContext(null);

const TOKEN_KEY = 'accessToken';
const USER_KEY = 'user';

export const AuthProvider = ({ children }) => {
    // Initialize state directly from localStorage (no useEffect needed — runs once on mount)
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem(USER_KEY);
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    const isAuthenticated = Boolean(user);

    /**
     * Called after a successful login API response.
     * Saves token + user to localStorage and updates state.
     */
    const login = useCallback((userData, accessToken) => {
        if (accessToken) {
            localStorage.setItem(TOKEN_KEY, accessToken);
        }
        if (userData) {
            localStorage.setItem(USER_KEY, JSON.stringify(userData));
            setUser(userData);
        }
    }, []);

    /**
     * Clears everything — state, localStorage, and calls logout API.
     */
    const logout = useCallback(async () => {
        try {
            await authAPI.logout();
        } catch {
            // Silent fail — still clear local state
        } finally {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
            setUser(null);
        }
    }, []);

    /**
     * Update user profile info (e.g., after profile edit).
     */
    const updateUser = useCallback((updatedData) => {
        setUser(prev => {
            const merged = { ...prev, ...updatedData };
            localStorage.setItem(USER_KEY, JSON.stringify(merged));
            return merged;
        });
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            updateUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
};

export default AuthContext;
