import React from 'react';

import { RoundButton } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
  createAccount,
  email,
  isPasswordVisible,
  password,
  setEmail,
  setPassword,
  signIn,
  togglePasswordVisibility,
  forgotPassword,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>Entrar</S.Title>

        <S.InputContainer>
          <S.InputLabel>E-mail</S.InputLabel>
          <S.Input
            placeholder='E-mail@example.com'
            placeholderTextColor='rgba(255, 255, 255, 0.1)'
            onChangeText={setEmail}
            value={email}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>Senha</S.InputLabel>
          <S.Input
            secureTextEntry={!isPasswordVisible}
            placeholder='Insira sua senha'
            placeholderTextColor='rgba(255, 255, 255, 0.1)'
            onChangeText={setPassword}
            value={password}
          />

          <S.TogglePasswordVisibilityButton onPress={togglePasswordVisibility}>
            <S.Icon name={ isPasswordVisible ? 'eye' : 'eye-off' } />
          </S.TogglePasswordVisibilityButton>
        </S.InputContainer>

        <S.ForgotPasswordButton onPress={forgotPassword}>
          <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
        </S.ForgotPasswordButton>

        <RoundButton mode='light' label='Entrar' onPress={signIn} />

        <S.NoAccountLabel>Não possui conta?</S.NoAccountLabel>

        <RoundButton mode='dark' label='Criar uma conta' onPress={createAccount} />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
