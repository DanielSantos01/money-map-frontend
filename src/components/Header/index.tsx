import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { HeaderProps } from './interfaces';
import * as S from './styles';

const Header: React.FC<HeaderProps> = ({ money, profilePictureUrl, username, testID }) => {

  const { navigate } = useNavigation<any>();

  const navigateScreen = useCallback(async () => {
    navigate('Configuration');
  }, []);

  const navigateFAQ = useCallback(async () => {
    // TODO
  }, []);

  return (
    <S.Container>
      <S.VerticalView>
        <S.Profile source={{ url: profilePictureUrl }} id={testID} />
        <S.Username>Olá, {username}</S.Username>
      </S.VerticalView>

      <S.VerticalView alignRight={true}>
        <S.IconsContainer>
          <S.Button>
            <S.Icon name='dollar-sign' style={{ marginRight: 20 }} onPress={navigateScreen}/>
          </S.Button>

          <S.Button>
            <S.Icon name='help-circle' style={{ fontSize: 25 }} onPress={navigateFAQ}/>
          </S.Button>
        </S.IconsContainer>

        <S.Value>R$ {money.toString().replace('.', ',')}</S.Value>
      </S.VerticalView>
    </S.Container>
  );
};

export default Header;