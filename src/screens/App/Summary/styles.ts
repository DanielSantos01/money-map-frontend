import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0px 40px;
`;

export const GraphContainer = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.surface};
  margin-top: 10px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const AuxContainer = styled.View`
  width: 50%;
`;

export const DisclaimerContainer = styled.View``;

export const LabelContainer = styled.View``;
