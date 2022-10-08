import React from 'react';

import { RoundButton, Input, HeaderWithReturn } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
  setFutureGoal,
  futureGoal,
  setFixedGoal,
  setVariableGoal,
  variableGoal,
  fixedGoal,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>

      <HeaderWithReturn title='Configurações'/>

        <S.Title>banco</S.Title>

        <Input
          label='Futuro'
          placeholder='30%'
          onChange={setFutureGoal}
          value={futureGoal}
        />

        <Input
          label='Fixo'
          placeholder='30%'
          onChange={setFixedGoal}
          value={fixedGoal}
        />

        <Input
          label='Variável'
          placeholder='30%'
          onChange={setVariableGoal}
          value={variableGoal}
        />

        {/* <S.ForgotPasswordButton onPress={forgotPassword}>
          <S.ForgotPasswordLabel>Esqueci minha senha</S.ForgotPasswordLabel>
        </S.ForgotPasswordButton>

        <RoundButton id='login-btn' mode='light' label='Entrar' onPress={signIn} />

        <S.NoAccountLabel>Não possui conta?</S.NoAccountLabel>

        <RoundButton mode='dark' label='Criar uma conta' onPress={createAccount} /> */}
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
