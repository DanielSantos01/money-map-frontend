import { useAuth } from '@/hooks';
import React from 'react';
import AppRoutes from './app.routes';
import SignInRoutes from './signIn.routes';

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppRoutes /> : <SignInRoutes />;
};

export default Routes;