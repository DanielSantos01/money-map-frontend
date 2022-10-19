export interface MainProps {
    name: string;
    setName: (name: string) => void;
    description: string;
    setDescription: (description: string) => void;
    date: Date;
    setDate: (date: Date) => void;
    value: number;
    setValue: (value: number) => void;
  };
