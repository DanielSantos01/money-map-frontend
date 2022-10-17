import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormularyModel } from './interfaces';
import { useAxios } from '@/utils/useAxios';

import Main from './main';

const Login: React.FC = () => {
  const [formulary, setFormulary] = useState<FormularyModel>({} as FormularyModel);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [axiosPost] = useAxios('post');

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
    // navigate('Home');
    console.log(formulary);

    await axiosPost({
      url: '/user/login',
      body: {
        email: formulary.email,
        password: formulary.email,
      },
      success: () => {
        console.log('gigante!');
      },
      error: (error: any) => {
        console.log('algo deu errado');
        console.log(error);
      },
    });
  }, [formulary]);

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
