import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Main from './main';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
    navigate('Home');
  }, []);

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
    />
  );
};

export default Login;
