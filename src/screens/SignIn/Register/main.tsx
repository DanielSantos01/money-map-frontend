import React from 'react';

import { RoundButton, Input, HeaderWithReturn } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
  onChange,
  formulary,
  handleAgreement,
  hasAgreed,
  handleBackToSignIn,
  handleCreateAccount,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <HeaderWithReturn title='Cadastro' />

        <Input
          label='E-mail *'
          placeholder='E-mail@example.com'
          onChange={onChange('email')}
          value={formulary.email}
          labelFont='bold'
          containerStyle={{ marginTop: 25 }}
        />

        <Input
          label='Primeiro nome *'
          placeholder='Ex.: Ana'
          onChange={onChange('firstName')}
          value={formulary.firstName}
          labelFont='bold'
          containerStyle={{ marginTop: 25 }}
        />

        <Input
          label='Último nome *'
          placeholder='Ex.: Santos'
          onChange={onChange('lastName')}
          value={formulary.lastName}
          labelFont='bold'
          containerStyle={{ marginTop: 25 }}
        />

        <Input
          label='Senha *'
          placeholder='Escolha uma senha'
          onChange={onChange('password')}
          value={formulary.password}
          labelFont='bold'
          isPassword
          containerStyle={{ marginTop: 25 }}
        />

        <Input
          label='Confirme sua senha *'
          placeholder='Digite novamente sua senha'
          onChange={onChange('passwordConfirmation')}
          value={formulary.passwordConfirmation}
          labelFont='bold'
          isPassword
          containerStyle={{ marginTop: 25 }}
        />

        <S.TermsContainer>
          <S.Check
            value={hasAgreed}
            onValueChange={handleAgreement}
            color={hasAgreed ? '#BB86FC' : null}
          />

          <S.TermsTextContainer>
            <S.TermsText>Você concorda com nossos</S.TermsText>
            <S.TermsText space underline>termos e condições</S.TermsText>
            <S.TermsText space>e política</S.TermsText>
            <S.TermsText space underline>de privacidade</S.TermsText>
          </S.TermsTextContainer>
        </S.TermsContainer>

        <RoundButton
          mode='light'
          label='Criar conta'
          disabled={!hasAgreed}
          style={{ marginBottom: 25 }}
          onPress={handleCreateAccount}
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
