export interface MainProps {
  formulary: FormularyModel;
  hasAgreed: boolean;
  onChange: (key: string) => (value: string) => void;
  handleCreateAccount: () => Promise<void>;
  handleBackToSignIn: () => void;
  handleAgreement: () => void;
}

export interface FormularyModel {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}