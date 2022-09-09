export interface MainProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  signIn: () => Promise<void>
  createAccount: () => void;
  forgotPassword: () => void;
}