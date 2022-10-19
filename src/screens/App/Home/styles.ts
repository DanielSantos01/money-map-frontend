import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogsContainer = styled.View`
  flex: 1;
  padding: 5px 30px;
`;
