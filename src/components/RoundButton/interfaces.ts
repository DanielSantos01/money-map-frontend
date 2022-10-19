import { StyleProp, ViewStyle } from 'react-native';

export interface RoundButtonProps {
  mode: 'light' | 'dark';
  label: string;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  id?: string;
  onPress?: () => void | Promise<void>;
}