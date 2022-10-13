import React, { useState, useCallback } from 'react';
import { HeaderWithReturn, SpendCategoriesList } from '@/components';

import { CategoryModel } from './interfaces';
import { Graph } from './components';
import * as S from './styles';

const Summary: React.FC = () => {
  const [category, setCategory] = useState<CategoryModel>({ index: 1, label: 'Variável' });

  const handleSelectCategory = useCallback(async (index: number, label: string) => {
    setCategory({ index, label });
  }, []);

  return (
    <S.Container>
      <S.ContentContainer>
        <HeaderWithReturn title='Sumário' />
        <SpendCategoriesList onSelectItem={handleSelectCategory} />

        <Graph
          size={120}
          metrics={[
            {
              color: '#CF6679',
              value: 33,
              label: 'Gastos',
              icon: 'arrow-down-circle'
            },
            {
              color: '#03DAC4',
              value: 33,
              label: 'Ganhos',
              icon: 'arrow-up-circle'
            },
            {
              color: '#BB86FC',
              value: 33,
              label: 'Saldo',
              icon: 'activity'
            }
          ]}
        />
      </S.ContentContainer>
    </S.Container>
  );
};

export default Summary;
