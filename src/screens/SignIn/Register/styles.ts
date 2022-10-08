import styled from 'styled-components/native';
import Checkbox from 'expo-checkbox';

interface TermsTextProps {
  space?: boolean;
  underline: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InnerContainer = styled.View`
  align-items: center;
  padding: 0px 40px;
`;

export const TermsContainer = styled.View`
  width: 100%;
  min-height: 40px;
  margin: 15px 0px;
  flex-direction: row;
`;

export const TermsTextContainer = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 5px;
`;

export const TermsText = styled.Text<TermsTextProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurface};
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  margin-left: ${({ space }) => space ? 4 : 0}px;
  text-decoration-line: ${({ underline }) => underline ? 'underline' : 'none'};
`;

export const Check = styled(Checkbox)`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.onSurface};
`;
