import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
    email: string;
    username: string;
    profile_picture?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (user: User, tokens: { access: string; refresh: string }) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://ai.brainito.com/api";

    useEffect(() => {
        const initializeAuth = async () => {
            const access = localStorage.getItem("access_token");
            const refresh = localStorage.getItem("refresh_token");
            const email = localStorage.getItem("user_email");
            const username = localStorage.getItem("username");
            const profile_picture = localStorage.getItem("profile_picture");

            if (!access || !email) {
                setLoading(false);
                return;
            }

            try {
                // 1. Verify the current access token
                const verifyRes = await fetch(`${API_BASE_URL}/auth/verify-token/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: access })
                });

                if (verifyRes.ok) {
                    // Token is valid
                    setUser({ email, username: username || "", profile_picture: profile_picture || "" });
                } else {
                    // Token invalid/expired, try to refresh
                    if (refresh) {
                        const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh/`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ refresh: refresh })
                        });

                        const refreshData = await refreshRes.json();

                        if (refreshRes.ok && refreshData.success && refreshData.access) {
                            // Refresh successful
                            localStorage.setItem("access_token", refreshData.access);
                            setUser({ email, username: username || "", profile_picture: profile_picture || "" });
                        } else {
                            // Refresh failed - Clear everything and force login
                            console.warn("Session expired, logging out.");
                            localStorage.clear();
                            setUser(null);
                        }
                    } else {
                        // No refresh token available
                        localStorage.clear();
                        setUser(null);
                    }
                }
            } catch (error) {
                console.error("Auth initialization error:", error);
                // In case of network error, we might want to keep the user logged in 
                // or logout depending on security policy. 
                // For now, if we can't verify, we assume it's risky or impossible to fetch data anyway.
                // However, preserving the session might be better for offline checks.
                // But given the "saas" context, better to fail safe if we can't reach auth server?
                // Actually, if network error, maybe keep user but they will face fetch errors later.
                // Let's keep the user if it was just a network error, but here we can't distinguish easily without more logic.
                // Safest approach for "Next day" issue is usually aggressive cleanup if something looks wrong.

                // If we assume the error is "server unreachable", maybe keeping the local state is OK?
                // But if the error is 401 (caught above mostly), we cleared it.
                // If fetch throws (network), let's optimistically set user so they see *something* rather than blank screen,
                // and let the individual page fetches fail gracefully?
                // actually, let's just set the user if we have the data, blindly, if verifying throws (e.g. offline).
                setUser({ email, username: username || "", profile_picture: profile_picture || "" });
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = (user: User, tokens: { access: string; refresh: string }) => {
        localStorage.setItem("access_token", tokens.access);
        localStorage.setItem("refresh_token", tokens.refresh);
        localStorage.setItem("user_email", user.email);
        localStorage.setItem("username", user.username);
        if (user.profile_picture) localStorage.setItem("profile_picture", user.profile_picture);

        setUser(user);
    };

    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
