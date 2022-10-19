export interface MainProps {
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
  date: Date;
  setDate: (date: Date) => void;
  value: number;
  setValue: (value: number) => void;
  formulary: FormularyModel;
  onChange: (key: string) => (value: string) => void;
}

export interface FormularyModel {
  name: string;
  description: string;
  date: string;
  value: number;
  category: string;
  subCategory: string;
}
