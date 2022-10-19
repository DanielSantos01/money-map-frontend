import styled from 'styled-components/native';
import Collapsible from 'react-native-collapsible';
import { Feather } from '@expo/vector-icons';

interface EnhanceProps {
  children: JSX.Element;
}

interface PreviewValueProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const ItemContainer = styled.View``;

export const DayButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled(Feather)`
  font-size: 15px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const DayLabel = styled.Text`
  font-size: 12px;
  width: 25%;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
`;

export const Enhance = styled(Collapsible)<EnhanceProps>`
  padding: 0px 10px;
`;

export const PreviewContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const PreviewValue = styled.Text<PreviewValueProps>`
  font-size: 10px;
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
`;

export const EmptyText = styled.Text<PreviewValueProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onBackground};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
  margin-top: 24px;
  text-align: center;
`;
