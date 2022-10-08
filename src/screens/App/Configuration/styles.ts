import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InnerContainer = styled.View`
  align-items: center;
  padding: 0px 40px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 25%;
  color: #f6f6f6;
  margin-left: -270px;
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
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

