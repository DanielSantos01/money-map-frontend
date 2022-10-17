export interface MainProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  signIn: () => Promise<void>
  createAccount: () => void;
  forgotPassword: () => void;
  formulary: FormularyModel;
  onChange: (key: string) => (value: string) => void;
};

export interface FormularyModel {
  email: string;
  password: string;
};
