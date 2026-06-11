import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = useCallback((email, password) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({
        id: '1',
        email,
        name: 'John Doe',
        company: 'Fleetora Transport',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
        role: 'Admin',
      });
      setIsAuthenticated(true);
      setLoading(false);
      localStorage.setItem('fleetora_user', JSON.stringify({
        id: '1',
        email,
        name: 'John Doe',
        company: 'Fleetora Transport',
        role: 'Admin',
      }));
    }, 1000);
  }, []);

  const register = useCallback((email, password, companyName) => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: '1',
        email,
        name: 'John Doe',
        company: companyName,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
        role: 'Admin',
      });
      setIsAuthenticated(true);
      setLoading(false);
      localStorage.setItem('fleetora_user', JSON.stringify({
        id: '1',
        email,
        name: 'John Doe',
        company: companyName,
        role: 'Admin',
      }));
    }, 1000);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('fleetora_user');
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      login,
      register,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
