import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.VerticalView>
        <S.Profile source={{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png' }} />
        <S.Username>Olá, Daniel</S.Username>
      </S.VerticalView>

      <S.VerticalView right>
        <S.IconsContainer>
          <S.Button>
            <S.Icon name='dollar-sign' style={{ marginRight: 20 }} />
          </S.Button>

          <S.Button>
            <S.Icon name='help-circle' style={{ fontSize: 25 }} />
          </S.Button>
        </S.IconsContainer>

        <S.Value>R$ 50,00</S.Value>
      </S.VerticalView>
    </S.Container>
  );
};

export default Header;