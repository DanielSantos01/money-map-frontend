import { StyleProp, ViewStyle } from 'react-native';

export interface RoundButtonProps {
  mode: 'light' | 'dark';
  label: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void | Promise<void>;
}