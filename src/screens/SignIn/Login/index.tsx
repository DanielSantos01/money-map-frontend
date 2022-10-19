import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Main from './main';
import { useAuth } from '@/hooks';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { handleAuth, isLoading } = useAuth();

  const { navigate } = useNavigation<any>();

  const handleSetEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSetPassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const handleCreateAccount = useCallback(() => {
    navigate('Register');
  }, [navigate]);

  const handleSignIn = useCallback(async () => {
    handleAuth({ email, password });
  }, [handleAuth]);

  const handleForgotPassword = useCallback(async () => {
    navigate('ForgotPassword');
  }, [navigate]);

  return (
    <Main
      email={email}
      password={password}
      setEmail={handleSetEmail}
      setPassword={handleSetPassword}
      createAccount={handleCreateAccount}
      signIn={handleSignIn}
      forgotPassword={handleForgotPassword}
      isLoading={isLoading}
    />
  );
};

export default Login;
