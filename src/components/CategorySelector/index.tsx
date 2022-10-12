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
  keyBoardType
}) => {

  const [touch, setTouch] = useState(false);

  const toggleCategory = ({toggle}) => {
    touch === true ? setTouch(false) : setTouch(true);
  };

  return (
    <S.ContentContainer>
      {touch ?
        <S.Container style={containerStyle} onPress={toggleCategory}>
          <S.Img source={value}/>
        </S.Container>
        :  
        <S.Container2 style={containerStyle} onPress={toggleCategory}>
          <S.Img source={value}/>
        </S.Container2>
      }
      <S.Label font={labelFont}>{label}</S.Label>
    </S.ContentContainer>
  );
};

export default CategoryBtn;
