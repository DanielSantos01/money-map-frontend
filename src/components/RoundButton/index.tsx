import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RoundButtonProps } from './interfaces';
import * as S from './styles';

const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  mode,
  onPress, 
  style,
  disabled,
  id,
  isLoading,
}) => {
  return (
    <S.Container
      id={id}
      mode={mode}
      onPress={onPress}
      style={style}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <S.Label mode={mode}>{ label }</S.Label>
      )}
    </S.Container>
  );
};

export default RoundButton;