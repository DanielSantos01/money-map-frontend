import React, { useState, useCallback } from 'react';

import { InputProps } from './interfaces';
import * as S from './styles';

const Input: React.FC<InputProps> = ({
  onChange,
  containerStyle,
  value,
  placeholder,
  labelFont,
  label,
  icon,
  keyBoardType
}) => {

  return (
    <S.Container style={containerStyle}>
      <S.Label font={labelFont}>{label}</S.Label>
      <S.TextInput
        placeholder={placeholder}
        placeholderTextColor='rgba(255, 255, 255, 0.1)'
        onChangeText={onChange}
        value={value}
        autoCapitalize={false}
        icon={icon}
        keyBoardType='numeric'
      />
    </S.Container>
  );
};

export default Input;