import { StyleProp, ViewStyle } from 'react-native';

export interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  labelFont?: 'regular' | 'medium' | 'semibold' | 'bold' | 'thin';
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>
}