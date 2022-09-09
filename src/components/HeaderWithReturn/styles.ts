import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  min-height: 50px;
  margin-top: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
`;

export const BackButtonContainer = styled.TouchableOpacity`
  top: 20%;
  left: 0%;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primaryGray};
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.onSurface};
`;
