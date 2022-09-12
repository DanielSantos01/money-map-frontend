import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface VerticalViewProps {
  right?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 20px 15px;
  flex-direction: row;
`;

export const Profile = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.onSurface};
`;

export const VerticalView = styled.View<VerticalViewProps>`
  width: 50%;
  height: 100%;
  justify-content: space-between;
  align-items: ${({ right }) => right ? 'flex-end' : 'flex-start'};
`;

export const Username = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
`;

export const Button = styled.TouchableOpacity``;

export const IconsContainer = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Value = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.semibold};
`;
