import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

import { useAuth } from '@/hooks';
import { Header, MonthsList, LogList, FloatingButton } from '@/components';
import { capitalize } from '@/utils/capitalize';

import { CostModel } from './interfaces';

import * as S from './styles';

dayjs.extend(localeData);
dayjs.locale('pt-br');

const MainScreen: React.FC = () => {
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
    try {
      const { data } = await axios.get<{ data: CostModel[] }>(
        'http://localhost:8080/costs',
      );

      setCosts(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchCosts();
  }, [fetchCosts]);

  return (
    <S.Container>
      <Header
        profilePictureUrl='https://instagram.frec15-1.fna.fbcdn.net/v/t51.2885-19/280098943_171767098555967_7051005647906309588_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.frec15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AOZg9Dz-NaYAX_59a_G&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-sHNgFAeB6QszNwaGXElYgxhtXqU8v_ISKWBsF81zyew&oe=633AE57D&_nc_sid=8fd12b'
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
        <LogList month={selectedMonth} costs={costs} />
      </S.LogsContainer>

      <FloatingButton />
    </S.Container>
  );
};

export default MainScreen;
