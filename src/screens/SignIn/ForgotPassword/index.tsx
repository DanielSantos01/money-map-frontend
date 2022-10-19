import React, { useState, useCallback, useEffect } from 'react';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useAxios } from '@/utils/useAxios';

import Main from './main';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [axiosPost] = useAxios('post');
  const [userData, setUserData] = useState<string>('');

  const { goBack } = useNavigation();

  const { navigate } = useNavigation<any>();

  const handleSetEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSetPassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const redefinePassword = useCallback(async () => {
    console.log(email);
    console.log(password); 

    await axios.patch(`http://172.22.72.43:8080/user/forgot-password`, {
      email: email,
      password: password,
    }).then(() => navigate('Login'));

  }, [email, password]);

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
