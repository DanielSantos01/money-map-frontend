import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 112px;
  right: 26px;
`;

export const Icon = styled(Feather)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.background};
`;
