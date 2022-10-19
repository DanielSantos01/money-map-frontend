export interface HeaderProps {
  profilePictureUrl: string;
  username: string;
  money: number;
  testID?: string;
  navigation: () => Promise<void>;
}