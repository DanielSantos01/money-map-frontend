import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useAxios } from '@/utils/useAxios';

import Main from './main';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [axiosPost] = useAxios('post');
  const [userData, setUserData] = useState();

  const { goBack } = useNavigation();

  const handleSetEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSetPassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const redefinePassword = useCallback(async () => {
    console.log(email);
    console.log(password); 

    await axios.post('http://192.168.15.35:8080/user/forgot-password', 
      {email: email}).then((data) => {setUserData(data.data.data.id)});
    
    console.log(userData);

    await axios.patch(`http://192.168.15.35:8080/user/${userData}`, {
      password: password,
    });
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
