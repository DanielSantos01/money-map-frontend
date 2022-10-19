import React from 'react';

import { RoundButton, Input } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
  createAccount,
  email,
  password,
  setEmail,
  setPassword,
  signIn,
  forgotPassword,
  isLoading,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>Entrar</S.Title>

        <Input
          label='E-mail'
          placeholder='E-mail@example.com'
          onChange={setEmail}
          value={email}
        />

        <Input
          label='Senha'
          placeholder='Insira sua senha'
          onChange={setPassword}
          value={password}
          isPassword
        />

        <S.ForgotPasswordButton onPress={forgotPassword}>
          <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
        </S.ForgotPasswordButton>

        <RoundButton
          id='login-btn'
          mode='light'
          label='Entrar'
          onPress={signIn}
          isLoading={isLoading}
        />

        <S.NoAccountLabel>Não possui conta?</S.NoAccountLabel>

        <RoundButton mode='dark' label='Criar uma conta' onPress={createAccount} />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
