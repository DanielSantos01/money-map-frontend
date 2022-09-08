import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InnerContainer = styled.View`
  align-items: center;
  padding: 0px 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 25%;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-top: 50px;
`;

export const InputLabel = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
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

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin: 20px 0px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  text-decoration-line: underline;
`;

export const NoAccountLabel = styled.Text`
  font-size: 12px;
  margin: 15px 0px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
`;
