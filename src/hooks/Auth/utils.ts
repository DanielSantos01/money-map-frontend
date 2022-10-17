import { createContext } from 'react';
import { AuthContextData } from './interfaces';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
