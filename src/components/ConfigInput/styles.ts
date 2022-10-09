import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface LabelProps {
  font?: 'regular' | 'medium' | 'semibold' | 'bold' | 'thin';
}

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Label = styled.Text<LabelProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme, font }) => theme.fonts.raleway[font || 'regular']};
  margin-bottom: 5px;
  font-weight: 700;
  margin-left: 17.27px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  border-radius: 6px;
  height: 50px;
  font-size: 12px;
  padding-left: 15px;
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  color: ${({ theme }) => theme.colors.onSurface};
  background-color: ${({ theme }) => theme.colors.primaryGray};
`;

export const TogglePasswordVisibilityButton = styled.TouchableOpacity`
  top: 55%;
  right: 6%;
  position: absolute;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.onSurface};
`;
