import React from 'react';

import { RoundButton, ConfigInput, HeaderWithReturn } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

const Main: React.FC<MainProps> = ({
    name,
    setName,
    description,
    setDescription,
    date,
    setDate,
    value,
    setValue,
}) => {
  return (
    <S.Container>
      <S.InnerContainer>

      <HeaderWithReturn title='Adicionar'/>

        <ConfigInput
          label='Nome'
          placeholder='Nome'
          onChange={setName}
          value={name}
        />

        <ConfigInput
          label='Descrição'
          placeholder='Descrição'
          onChange={setDescription}
          value={description}
        />

        <ConfigInput
          label='Data'
          placeholder='DD/MM/YYYY'
          onChange={setDate}
          value={date}
        />

        <ConfigInput
          label='Valor'
          placeholder='R$2.000,00'
          onChange={setValue}
          value={value}
          keyBoardType='numeric'
        />

        <RoundButton id='config-btn' mode='light' label='Salvar' />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
