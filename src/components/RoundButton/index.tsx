import React from 'react';
import { RoundButtonProps } from './interfaces';
import * as S from './styles';

const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  mode,
  onPress, 
  style,
  disabled,
}) => {
  return (
    <S.Container
      mode={mode}
      onPress={onPress}
      style={style}
      disabled={disabled}
    >
      <S.Label mode={mode}>{ label }</S.Label>
    </S.Container>
  );
};

export default RoundButton;