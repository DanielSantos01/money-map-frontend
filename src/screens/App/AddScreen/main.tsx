import React from 'react';

import { RoundButton, ConfigInput, HeaderWithReturn, CategorySelector } from '../../../components';
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

          <S.Title>Categoria</S.Title>
          <S.InnerContainerCategory>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
          </S.InnerContainerCategory>

          <S.Title>Sub Categoria</S.Title>
          <S.InnerContainerCategory>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
            <CategorySelector label='oi' value='teste'/>
          </S.InnerContainerCategory>

          <RoundButton id='config-btn' mode='light' label='Adicionar' />

      </S.InnerContainer>
    </S.Container>
  );
};

export default Main;
