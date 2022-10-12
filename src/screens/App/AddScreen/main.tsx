import React from 'react';

import { RoundButton, ConfigInput, HeaderWithReturn, CategorySelector } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';

// import {shoppingBag2} from '../../../assets';
// import {Cart} from '../../../assets';
// import {shoppingBag2} from '../../../assets';
import * as A from '../../../assets';

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
      <S.ScrollArea>  
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
              <CategorySelector label='Futuro' value={A.Database}/>
              <CategorySelector label='Fixo' value={A.shoppingBag2}/>
              <CategorySelector label='Variável' value={A.Cart}/>
            </S.InnerContainerCategory>

            <S.TitleSubCat>Sub Categoria</S.TitleSubCat>
            <S.InnerContainerCategory>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
              <CategorySelector label='oi' value={A.shoppingBag2}/>
            </S.InnerContainerCategory>

            <RoundButton id='config-btn' mode='light' label='Adicionar' style={{marginBottom:'10%'}}/>

        </S.InnerContainer>
      </S.ScrollArea>
    </S.Container>
  );
};

export default Main;
