import React, { useState, useCallback } from 'react';

import Main from './main';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSetEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSetPassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const handleCreateAccount = useCallback(() => {
    //TODO
  }, []);

  const handleSignIn = useCallback(async () => {
    //TODO
  }, []);

  const handleForgotPassword = useCallback(async () => {
    //TODO
  }, []);

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
