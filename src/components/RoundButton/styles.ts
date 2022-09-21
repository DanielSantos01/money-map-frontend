import styled from 'styled-components/native';

interface StyleProps {
  mode: 'light' | 'dark';
  id?: string;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<StyleProps>`
  width: 100%;
  height: 56px;
  border-radius: 30.5px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => disabled ? 0.6 : 1 };
  background-color: ${({ theme, mode }) => mode === 'light' ? theme.colors.onSurface : theme.colors.primaryGray};
`;

export const Label = styled.Text<StyleProps>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.raleway.regular};
  color: ${({ theme, mode }) => mode === 'light' ? theme.colors.surface : theme.colors.onSurface};
`;