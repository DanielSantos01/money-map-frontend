import { formatMoney } from '@/utils/formatMoney';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { DayLogsProps, ItemModel } from './interfaces';
import * as S from './styles';

const DayLogs: React.FC<DayLogsProps> = ({ data }) => {
  const renderItem: ListRenderItem<ItemModel> = useCallback(({ item }) => {
    const isExpanse: boolean = item.category === 'expanse';
    return (
      <S.Item>
        <S.Icon
          name={isExpanse ? 'arrow-down' : 'arrow-up'}
          style={{
            color: isExpanse ? '#CF6679' : '#03DAC4'
          }}
        />
        <S.DayLabel>{item.label}: {formatMoney(item.value)}</S.DayLabel>
      </S.Item>
    );
  }, []);

  return (
    <S.Container>
      <FlatList<ItemModel>
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.label}:${index}`}
      />
    </S.Container>
  );
};

export default DayLogs;