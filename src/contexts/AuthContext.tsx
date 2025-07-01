import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserProfile } from '../data/mockCollegeData';
import { mockUsers } from '../data/mockCollegeData';


interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>; // Placeholder for Google OAuth
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  isAdmin: boolean;
  isStudent: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, _password: string): Promise<void> => {
    void _password; // ignore unused parameter
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, find user in mockUsers
    const foundUser = mockUsers.find(u => u.email === email);

    if (foundUser) {
      // In a real app, you'd verify password here
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo, log in as a student user
    const googleUser = mockUsers.find(u => u.role === 'student') || mockUsers[0];
    setUser(googleUser);
    localStorage.setItem('user', JSON.stringify(googleUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updates: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const isAdmin = user?.role === 'admin';
  const isStudent = user?.role === 'student';

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      loginWithGoogle,
      logout,
      updateUser,
      isAdmin,
      isStudent,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
