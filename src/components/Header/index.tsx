import React from 'react';

import { HeaderProps } from './interfaces';
import * as S from './styles';

const Header: React.FC<HeaderProps> = ({ money, profilePictureUrl, username, testID }) => {
  return (
    <S.Container>
      <S.VerticalView>
        <S.Profile source={{ url: profilePictureUrl }} id={testID} />
        <S.Username>Olá, {username}</S.Username>
      </S.VerticalView>

      <S.VerticalView alignRight={true}>
        <S.IconsContainer>
          <S.Button>
            <S.Icon name='dollar-sign' style={{ marginRight: 20 }} />
          </S.Button>

          <S.Button>
            <S.Icon name='help-circle' style={{ fontSize: 25 }} />
          </S.Button>
        </S.IconsContainer>

        <S.Value>R$ {money.toString().replace('.', ',')}</S.Value>
      </S.VerticalView>
    </S.Container>
  );
};

export default Header;