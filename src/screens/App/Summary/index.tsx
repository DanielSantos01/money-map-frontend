import React, { useState, useCallback } from 'react';
import { HeaderWithReturn, SpendCategoriesList } from '@/components';

import { CategoryModel } from './interfaces';
import { Graph, Viewer } from './components';
import { graphData, viewerData } from './data';
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

        <Graph size={120} metrics={graphData} />

        <Viewer data={viewerData} />
      </S.ContentContainer>
    </S.Container>
  );
};

export default Summary;
