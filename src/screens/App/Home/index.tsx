import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

import API_BASE_URL from '@/utils/constants';
import { Header, MonthsList, LogList, FloatingButton } from '@/components';
import { capitalize } from '@/utils/capitalize';
import { useAuth } from '@/hooks';

import { CostModel } from './interfaces';

import * as S from './styles';

dayjs.extend(localeData);
dayjs.locale('pt-br');

const MainScreen: React.FC = () => {
  const [fetching, setFetching] = useState(false);
  const [costs, setCosts] = useState<CostModel[]>();
  const months = dayjs.months();
  const [selectedMonth, setSelectedMonth] = useState<string>(
    months[dayjs().month()],
  );

  const { userData } = useAuth();

  const handleSelectMonth = useCallback(async (month: string) => {
    setSelectedMonth(month);
  }, []);

  const fetchCosts = useCallback(async () => {
    setFetching(true);
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/costs/findUser/${userData?.id}`,
      );

      setCosts(data.data);
    } catch (e) {
      console.log(e);
    }
    setFetching(false);
  }, []);

  useEffect(() => {
    fetchCosts();
  }, [fetchCosts]);

  return (
    <S.Container>
      <Header
        username={capitalize(userData?.firstName)}
        money={Number(userData?.value)}
        navigation={function (): Promise<void> {
          throw new Error('Function not implemented.');
        }}
      />

      <MonthsList
        months={dayjs.months()}
        selectedMonth={selectedMonth}
        onSelectItem={handleSelectMonth}
      />

      <S.LogsContainer>
        <LogList
          month={selectedMonth}
          costs={costs}
          fetching={fetching}
          fetchCosts={fetchCosts}
        />
      </S.LogsContainer>

      <FloatingButton />
    </S.Container>
  );
};

export default MainScreen;
