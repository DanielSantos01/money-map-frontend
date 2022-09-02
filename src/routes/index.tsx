import React from 'react';
import AppRoutes from './app.routes';
import SignInRoutes from './signIn.routes';

const Routes: React.FC = () => {
  const isLogged: boolean = false;

  return isLogged ? <AppRoutes /> : <SignInRoutes />;
};

export default Routes;