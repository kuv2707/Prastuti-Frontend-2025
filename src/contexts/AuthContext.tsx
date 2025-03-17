import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (arg0: User) => void;
    logout: () => void;
    user: User | null;
}

export type User = {
    _id: string;
    email: string;
    name: string;
    id: string;
}

export const emptyUser: User = {
    _id: '',
    email: '',
    name: '',
    id: '',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User|null>(null);

    const login = (u: User) => {
        setIsAuthenticated(true);
        u.id = u._id;
        setUser(u);
        console.log("User", u);
        localStorage.setItem('user', JSON.stringify(u));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            login(JSON.parse(user));
        }
    }
    , []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};