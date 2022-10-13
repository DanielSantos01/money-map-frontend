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
  margin-top: 12%;
  color: #f6f6f6;
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
  font-weight: 700;
  opacity: 0.6;
  text-align: left;
  width: 100%;
  margin-bottom: -7%;
`;
