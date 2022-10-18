import React, { useState, useCallback, useEffect } from 'react';

import { Header, MonthsList, LogList, FloatingButton } from '@/components';
import { MonthModel } from './interfaces';
import * as S from './styles';
import { useAxios } from '@/utils/useAxios';
import axios from 'axios';

const MainScreen: React.FC = () => {
  const [month, setMonth] = useState<MonthModel>({ index: 0, label: 'Janeiro' });

  const handleSelectMonth = useCallback(async (index: number, label: string) => {
    setMonth({ index, label });
  }, []);

  const [userData, setUserData] = useState();
  const [costsData, setCostsData] = useState();

  useEffect(() => {
      axios.get(`http://172.22.72.43:8080/user/000e758f-8eb6-457c-bfb1-37c0bccb0c65`).then((data) => setUserData(data.data.data));
  }, [axios]);
  console.log(userData);
  
  useEffect(() => {
    axios.get(`http://172.22.72.43:8080/costs/findUser/000e758f-8eb6-457c-bfb1-37c0bccb0c65`).then((data) => setCostsData(data.data.data));
  }, [axios]);
  console.log(costsData);

  return (
    <S.Container>
      <Header
        profilePictureUrl='https://instagram.frec15-1.fna.fbcdn.net/v/t51.2885-19/280098943_171767098555967_7051005647906309588_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.frec15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AOZg9Dz-NaYAX_59a_G&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-sHNgFAeB6QszNwaGXElYgxhtXqU8v_ISKWBsF81zyew&oe=633AE57D&_nc_sid=8fd12b'
        username={userData?.firstName}
        money={Number(userData?.value)}
        navigation={function (): Promise<void> {
          throw new Error('Function not implemented.');
        }}
      />
      <MonthsList onSelectItem={handleSelectMonth} />

      <S.LogsContainer>
        <LogList index={month.index} label={month.label} />
      </S.LogsContainer>

      <FloatingButton />
    </S.Container>
  );
};

export default MainScreen;
