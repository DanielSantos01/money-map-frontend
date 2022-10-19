import React from 'react';

import { RoundButton, ConfigInput, HeaderWithReturn } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
  setFutureGoal,
  futureGoal,
  setFixedGoal,
  setVariableGoal,
  variableGoal,
  fixedGoal,
  setIncome,
  income,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <HeaderWithReturn title='Configurações'/>

        <S.Title>Banco</S.Title>

        <ConfigInput
          label='Futuro'
          placeholder='30%'
          onChange={setFutureGoal}
          value={futureGoal}
        />

        <ConfigInput
          label='Fixo'
          placeholder='30%'
          onChange={setFixedGoal}
          value={fixedGoal}
        />

        <ConfigInput
          label='Variável'
          placeholder='30%'
          onChange={setVariableGoal}
          value={variableGoal}
        />

        <S.Title>Renda</S.Title>

        <ConfigInput
          label='Total'
          placeholder='R$2.000,00'
          onChange={setIncome}
          value={income}
          keyBoardType='numeric'
        />

        <RoundButton id='config-btn' mode='light' label='Salvar' />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
