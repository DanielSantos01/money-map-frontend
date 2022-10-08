import React from 'react';

import { RoundButton, Input, HeaderWithReturn } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
  email,
  password,
  handleSetEmail,
  handleSetPassword,
  handleBackToSignIn,
  redefinePassword,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <HeaderWithReturn title='Esqueci minha senha' />

        <Input
          label='E-mail'
          placeholder='E-mail@example.com'
          onChange={handleSetEmail}
          value={email}
          labelFont='bold'
          containerStyle={{ marginTop: 25 }}
        />

        <Input
          label='Nova senha'
          placeholder='Insira sua nova senha'
          onChange={handleSetPassword}
          value={password}
          isPassword
          labelFont='bold'
          containerStyle={{ marginTop: 25 }}
        />

        <RoundButton
          mode='light'
          label='Redefinir senha'
          disabled={!password || !email}
          style={{ marginBottom: 25, marginTop: 25 }}
          onPress={redefinePassword}
        />

        <RoundButton
          mode='dark'
          label='Voltar ao login'
          onPress={handleBackToSignIn}
        />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
