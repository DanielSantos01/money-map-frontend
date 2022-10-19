import React, { useContext, useState, useCallback } from 'react';
import axios from 'axios';

import * as U from './utils';
import * as I from './interfaces';
import { BASE_URL } from '@/constants';

export const AuthProvider: React.FC<I.IAuthProvider> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({});

  const handleAuth = useCallback(async ({ email, password }: I.IAuthData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/user/login`,
        { email, password },
      );
      setUserData(response.data.data);
      setIsAuthenticated(true);
    } catch(err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  return (
    <U.AuthContext.Provider value={{
      isAuthenticated,
      userData,
      handleAuth,
      isLoading,
    }}>
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
