import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormularyModel } from './interfaces';
import { useAxios } from '@/utils/useAxios';

import Main from './main';
import { useAuth } from '@/hooks';

const Login: React.FC = () => {
  const [formulary, setFormulary] = useState<FormularyModel>({} as FormularyModel);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [axiosPost] = useAxios('post');

  const { handleAuth } = useAuth();

  const { navigate } = useNavigation<any>();

  const handleChange = useCallback((key: string) => (value: string) => {
    const parsedFormulary: FormularyModel = { ...formulary };
    parsedFormulary[key] = value;
    setFormulary(parsedFormulary);
  }, [formulary]);

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
      formulary={formulary}
      onChange={handleChange}
    />
  );
};

export default Login;
