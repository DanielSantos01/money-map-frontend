import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { ExpensesListProps, PreviewModel} from './interfaces';
import { DayLogs } from './components';
import data from './mockData';
import * as S from './styles';
import { formatMoney } from '@/utils/formatMoney';

const ExpensesList: React.FC<ExpensesListProps> = ({ index, label }) => {
  const [openeds, setOpened] = useState<number[]>([]);

  const handleSelect = useCallback((index: number) => () => {
    if(openeds.indexOf(index) !== -1) {
      setOpened(openeds.filter((item) => item !== index));
    } else {
      setOpened([...openeds, index]);
    }
  }, [openeds]);

  const calculatePreview = useCallback((day: string): PreviewModel => {
    const currentPreview: PreviewModel = { expanse: 0, gain: 0 };
    data[2022][index][day].forEach(({ category, value }) => {
      currentPreview[category] += value;
    });
    return currentPreview;
  }, []);

  const renderItem: ListRenderItem<string> = useCallback(({ item, index: current }) => {
    const isOpen: boolean = openeds.indexOf(current) !== -1;
    const { expanse, gain }: PreviewModel = calculatePreview(item);
    return (
      <S.ItemContainer>
        <S.DayButton onPress={handleSelect(current)}>
          <S.DayLabel numberOfLines={1}>{item} {label.slice(0, 3).toLowerCase()}</S.DayLabel>
          <S.RowContainer>
            {expanse && (
              <S.PreviewContainer>
                <S.Icon name='arrow-down-circle' style={{ color: '#CF6679' }} />
                <S.PreviewValue color='#CF6679'>{formatMoney(expanse)}</S.PreviewValue>
              </S.PreviewContainer>
            )}

            {gain && (
              <S.PreviewContainer>
                <S.Icon name='arrow-up-circle' style={{ color: '#03DAC4' }} />
                <S.PreviewValue color='#03DAC4'>{formatMoney(gain)}</S.PreviewValue>
              </S.PreviewContainer>
            )}

            <S.PreviewContainer>
              <S.Icon name='activity' style={{ color: '#BB86FC' }} />
              <S.PreviewValue color='#BB86FC'>{formatMoney((gain - expanse))}</S.PreviewValue>
            </S.PreviewContainer>

            <S.Icon name={isOpen ? 'chevron-down' : 'chevron-right'} style={{ marginLeft: 10 }} />
          </S.RowContainer>
        </S.DayButton>
        <S.Enhance collapsed={!isOpen}>
          <DayLogs data={data[2022][index][item]} />
        </S.Enhance>
      </S.ItemContainer>
    );
  }, [handleSelect, openeds, label, index, calculatePreview]);

  return (
    <S.Container>
      <FlatList<string>
        data={Object.keys(data[2022][index]).sort().reverse()}
        keyExtractor={(item, index) => `${item}:${index}`}
        renderItem={renderItem}
        style={{
          flex: 1
        }}
      />
    </S.Container>
  );
};

export default ExpensesList;