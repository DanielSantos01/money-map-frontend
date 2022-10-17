import React, { useState, useCallback } from 'react';

import { InputProps } from './interfaces';
import * as S from './styles';

const CategoryBtn: React.FC<InputProps> = ({
  onChange,
  containerStyle,
  value,
  placeholder,
  labelFont,
  label,
  icon,
  keyBoardType,
  toggle,
  id,
  setCat,
}) => {

  const handleOnPress = () => {
    onChange(id);
  };

  console.log(toggle)
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
