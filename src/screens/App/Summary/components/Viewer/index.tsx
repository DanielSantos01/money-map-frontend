import { formatMoney } from '@/utils/formatMoney';
import { formatValue } from '@/utils/formatValue';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import * as I from './interfaces';
import * as S from './styles';

const Viewer: React.FC<I.IViewer> = ({ data }) => {
  const total: number = data.reduce((prev, curr) => {
    return prev + curr.value;
  }, 0);

  const renderItem: ListRenderItem<I.IVisuaizerData> = useCallback(({ item }) => (
    <S.Item>
      <S.RowContainer>
        <S.Icon name="tag" />
        <S.Label numberOfLines={1}>{item.label}</S.Label>
      </S.RowContainer>

      <S.ColumnContainer>
        <S.Value>{formatMoney(item.value)}</S.Value>
        <S.Percentage>{formatValue((item.value/total)*100, 1)}%</S.Percentage>
      </S.ColumnContainer>
    </S.Item>
  ), []);

  return (
    <S.Container>
      <FlatList<I.IVisuaizerData>
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ label }, idx) => `${label}-${idx}`}
      />
    </S.Container>
  );
};

export default Viewer;
