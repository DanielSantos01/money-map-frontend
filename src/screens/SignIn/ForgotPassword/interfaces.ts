export interface MainProps {
  email: string;
  password: string;
  handleSetEmail: (email: string) => void;
  handleSetPassword: (password: string) => void;
  redefinePassword: () => Promise<void>;
  handleBackToSignIn: () => void;
}