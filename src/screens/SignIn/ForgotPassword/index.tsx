import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Main from './main';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { goBack } = useNavigation();

  const handleSetEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSetPassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const redefinePassword = useCallback(async () => {
    //TODO
  }, []);

  const handleBackToSignIn = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Main
      email={email}
      password={password}
      redefinePassword={redefinePassword}
      handleBackToSignIn={handleBackToSignIn}
      handleSetEmail={handleSetEmail}
      handleSetPassword={handleSetPassword}
    />
  );
};

export default ForgotPassword;
