import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import dayjs from 'dayjs';

import { formatMoney } from '@/utils/formatMoney';

import { DayLogs } from './components';
import { DateSection, ExpensesListProps, PreviewModel } from './interfaces';

import * as S from './styles';
import { CostModel } from '@/screens/App/Home/interfaces';

const ExpensesList: React.FC<ExpensesListProps> = ({
  costs,
  month,
  fetching,
}) => {
  const [opened, setOpened] = useState<number[]>([]);

  const organizeByDate = useMemo(() => {
    if (!costs) return undefined;

    const organized = costs.reduce((acc: DateSection[], cur) => {
      if (dayjs(cur.date).month() !== dayjs.months().indexOf(month)) return acc;

      const isSameDay = (d?: string, c?: string) =>
        dayjs(d).isSame(dayjs(c), 'day');

      if (acc.some((a) => isSameDay(a.date, cur.date))) {
        const updatedSection = acc.map((a) =>
          isSameDay(a.date, cur.date) ? { ...a, costs: [...a.costs, cur] } : a,
        );
        return updatedSection;
      }

      return [...acc, { date: dayjs(cur.date).toISOString(), costs: [cur] }];
    }, []);

    return organized;
  }, [costs, month]);

  const handleSelect = useCallback(
    (index: number) => () => {
      if (opened.indexOf(index) !== -1) {
        setOpened(opened.filter((item) => item !== index));
      } else {
        setOpened([...opened, index]);
      }
    },
    [opened],
  );

  const calculatePreview = useCallback((costs: CostModel[]) => {
    const currentPreview = { expanse: 0, gain: 0 };
    costs.forEach((c) => {
      if (c.value > 0) currentPreview.gain += c.value;
      if (c.value < 0) currentPreview.expanse += c.value;
    });
    return currentPreview;
  }, []);

  return (
    <S.Container>
      <FlatList
        data={organizeByDate}
        ListEmptyComponent={<S.EmptyText>Nenhum gasto nesse mês</S.EmptyText>}
        refreshControl={
          <RefreshControl refreshing={fetching} tintColor="white" />
        }
        renderItem={({ item, index: current }) => {
          const isOpen: boolean = opened.indexOf(current) !== -1;
          const { expanse, gain }: PreviewModel = calculatePreview(item.costs);
          return (
            <S.ItemContainer>
              <S.DayButton onPress={handleSelect(current)}>
                <S.DayLabel numberOfLines={1}>
                  {dayjs(item.date).format('DD MMMM')}
                </S.DayLabel>
                <S.RowContainer>
                  {!!expanse && (
                    <S.PreviewContainer>
                      <S.Icon
                        name="arrow-down-circle"
                        style={{ color: '#CF6679' }}
                      />
                      <S.PreviewValue color="#CF6679">
                        {formatMoney(expanse)}
                      </S.PreviewValue>
                    </S.PreviewContainer>
                  )}

                  {!!gain && (
                    <S.PreviewContainer>
                      <S.Icon
                        name="arrow-up-circle"
                        style={{ color: '#03DAC4' }}
                      />
                      <S.PreviewValue color="#03DAC4">
                        {formatMoney(gain)}
                      </S.PreviewValue>
                    </S.PreviewContainer>
                  )}

                  {!!expanse && !!gain && (
                    <S.PreviewContainer>
                      <S.Icon name="activity" style={{ color: '#BB86FC' }} />
                      <S.PreviewValue color="#BB86FC">
                        {formatMoney(gain + expanse)}
                      </S.PreviewValue>
                    </S.PreviewContainer>
                  )}

                  <S.Icon
                    name={isOpen ? 'chevron-down' : 'chevron-right'}
                    style={{ marginLeft: 10 }}
                  />
                </S.RowContainer>
              </S.DayButton>
              <S.Enhance collapsed={!isOpen}>
                <DayLogs
                  data={item.costs.map((c) => ({
                    category: c.value > 0 ? 'gain' : 'expanse',
                    label: c.name,
                    value: c.value,
                  }))}
                />
              </S.Enhance>
            </S.ItemContainer>
          );
        }}
        style={{
          flexGrow: 1,
        }}
      />
    </S.Container>
  );
};

export default ExpensesList;
