export interface MainProps {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  togglePasswordVisibility: () => void;
  signIn: () => Promise<void>
  createAccount: () => void;
  forgotPassword: () => void;
}