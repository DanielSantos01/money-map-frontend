import React from 'react';

import { Header } from '@/components';
import * as S from './styles';

const MainScreen: React.FC = () => {
  return (
    <S.Container>
      <Header
        profilePictureUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'
        username='Paulinha'
        money={50.00}
      />
    </S.Container>
  );
};

export default MainScreen;
