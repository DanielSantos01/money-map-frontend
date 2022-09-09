import React, { useState, useCallback } from 'react';

import { InputProps } from './interfaces';
import * as S from './styles';

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  labelFont,
  isPassword,
  label
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <S.Container>
      <S.Label font={labelFont}>{label}</S.Label>
      <S.TextInput
        secureTextEntry={!isPasswordVisible}
        placeholder={placeholder}
        placeholderTextColor='rgba(255, 255, 255, 0.1)'
        onChangeText={onChange}
        value={value}
      />

      {isPassword && (
        <S.TogglePasswordVisibilityButton onPress={togglePasswordVisibility}>
          <S.Icon name={ isPasswordVisible ? 'eye' : 'eye-off' } />
        </S.TogglePasswordVisibilityButton>
      )}
    </S.Container>
  );
};

export default Input;