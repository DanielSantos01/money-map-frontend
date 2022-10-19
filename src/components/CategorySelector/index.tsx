import React from 'react';

import { InputProps } from './interfaces';
import * as S from './styles';

const CategoryBtn: React.FC<InputProps> = ({
  onChange,
  containerStyle,
  value,
  labelFont,
  label,
  toggle,
  id,
}) => {

  const handleOnPress = () => {
    onChange(id);
  };

  return (
    <S.ContentContainer>
      <S.Container style={containerStyle} onPress={handleOnPress} toggle={!toggle}>
        <S.Icon name={value} />
      </S.Container>
      <S.Label font={labelFont}>{label}</S.Label>
    </S.ContentContainer>
  );
};

export default CategoryBtn;
