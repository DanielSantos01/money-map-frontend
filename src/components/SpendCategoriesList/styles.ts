import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ItemProps {
  width: number;
}

interface BarProps {
  isSelected: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 5px;
`;

export const CommonView = styled.View``;

export const LabelButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<ItemProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.medium};
  width: ${({ width }) => width}px;
  text-align: center;
`;

export const Bar = styled.View<BarProps>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.primary : theme.colors.primaryGray};
  margin-top: 5px;
`;

export const PaginationButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.onSurface};
`;
