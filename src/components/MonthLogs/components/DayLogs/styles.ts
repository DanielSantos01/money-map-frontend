import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View``;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const Icon = styled(Feather)`
  font-size: 15px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const DayLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
`;
