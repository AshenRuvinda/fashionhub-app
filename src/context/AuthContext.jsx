import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = () => {
      const savedUser = localStorage.getItem('fashionhub_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Simulate API call - in a real app, you'd validate the password here
      console.log('Authenticating user:', email, password);
      
      const userData = {
        id: 1,
        name: 'John Doe',
        email: email,
        avatar: null
      };
      
      setUser(userData);
      localStorage.setItem('fashionhub_user', JSON.stringify(userData));
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    try {
      // Simulate API call - in a real app, you'd create account with the password
      console.log('Creating account for:', name, email, password);
      
      const userData = {
        id: 1,
        name: name,
        email: email,
        avatar: null
      };
      
      setUser(userData);
      localStorage.setItem('fashionhub_user', JSON.stringify(userData));
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fashionhub_user');
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};