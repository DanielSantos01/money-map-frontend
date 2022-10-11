import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface LabelProps {
  font?: 'regular' | 'medium' | 'semibold' | 'bold' | 'thin';
}

export const ContentContainer = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  margin-top: 40px;
  background-color: #BB86FC;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container2 = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center
`;

export const Label = styled.Text<LabelProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme, font }) => theme.fonts.raleway[font || 'regular']};
  margin-bottom: 5px;
  font-weight: 400;
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
