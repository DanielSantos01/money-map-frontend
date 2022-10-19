import { StyleProp, ViewStyle } from 'react-native';

export interface InputProps {
  label: string;
  value: string | Date | number;
  onChange: (value: string | Date | number) => void;
  labelFont?: 'regular' | 'medium' | 'semibold' | 'bold' | 'thin';
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>
  icon?: string;
  keyBoardType?: string;
};
