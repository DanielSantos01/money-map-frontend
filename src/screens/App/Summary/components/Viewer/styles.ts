import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  max-height: 40%;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
  margin: 10px 0px;
`;

export const Item = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-color: #FFFFFF1A;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  width: 65%;
  height: 100%;
  align-items: center;
`;

export const ColumnContainer = styled.View`
  width: 35%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-right: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Value = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.raleway.semibold};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Percentage = styled.Text`
  font-size: 9px;
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.raleway.semibold};
  color: #FFFFFF99;
`;
