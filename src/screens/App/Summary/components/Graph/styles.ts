import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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
  max-width: 100%;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DisclaimerContainer = styled.View`
  flex-direction: row;
  width: 50%;
  height: 100%;
`;

export const LabelContainer = styled.View`
  width: 50%;
  height: 100%;
  text-align: right;
`;

export const Icon = styled(Feather)`
  font-size: 15px;
  margin-right: 8px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
`;

export const Value = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.raleway.semibold};
  text-align: right;
`;

export const TotalLabel = styled.Text`
  font-size: 10px;
  margin-bottom: 3px;
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const TotalValue = styled.Text`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const TotalContainer = styled.View`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 10.5%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
