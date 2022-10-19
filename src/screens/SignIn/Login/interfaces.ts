export interface MainProps {
  email: string;
  password: string;
  isLoading: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  signIn: () => Promise<void>
  createAccount: () => void;
  forgotPassword: () => void;
}

export interface FormularyModel {
  email: string;
  password: string;
}
