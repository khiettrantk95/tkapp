import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Mock authentication logic
    if (username === 'admin' && password === 'admin') {
      setUser({ username: 'admin', role: 'admin' });
    } else if (username === 'user' && password === 'user') {
      setUser({ username: 'user', role: 'user' });
    } else {
      return false;
    }
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
