import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

const FloatingButton: React.FC = () => {
  const { navigate } = useNavigation<any>();

  const navigateAdd = useCallback(async () => {
    navigate('Add');
  }, []);

  return (
    <S.Container onPress={navigateAdd}>
      <S.Icon name="plus" />
    </S.Container>
  );
};

export default FloatingButton;
