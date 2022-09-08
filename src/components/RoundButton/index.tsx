import React from 'react';
import { RoundButtonProps } from './interfaces';
import * as S from './styles';

const RoundButton: React.FC<RoundButtonProps> = ({ label, mode, onPress, style }) => {
  return (
    <S.Container mode={mode} onPress={onPress} style={style}>
      <S.Label mode={mode}>{ label }</S.Label>
    </S.Container>
  );
};

export default RoundButton;