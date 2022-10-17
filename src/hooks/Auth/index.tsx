import React, { useContext, useState, useCallback } from 'react';

import * as U from './utils';
import * as I from './interfaces';

export const AuthProvider: React.FC<I.IAuthProvider> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({});

  const handleAuth = useCallback(async (params: I.IAuthData) => {
    // TODO (login logic)
    setIsAuthenticated(true);
    setUserData({});
  }, []);

  return (
    <U.AuthContext.Provider value={{ isAuthenticated, userData, handleAuth }}>
      {children}
    </U.AuthContext.Provider>
  );
};

export function useAuth(): I.AuthContextData {
  const context: I.AuthContextData = useContext(U.AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}
