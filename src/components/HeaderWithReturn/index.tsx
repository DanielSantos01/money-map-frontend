import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { HeaderWithIconProps } from './interfaces';
import * as S from './styles';

const HeaderWithReturn: React.FC<HeaderWithIconProps> = ({ title }) => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.BackButtonContainer onPress={goBack}>
        <S.Icon name='chevron-left' />
      </S.BackButtonContainer>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default HeaderWithReturn;