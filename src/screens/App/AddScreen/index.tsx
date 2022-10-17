import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormularyModel } from './interfaces';

import Main from './main';

const Add: React.FC = () => {
  
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [value, setValue] = useState<number>();
  const [formulary, setFormulary] = useState<FormularyModel>({} as FormularyModel);

  const { navigate } = useNavigation<any>();

  const handleChange = useCallback((key: string) => (value: string) => {
    const parsedFormulary: FormularyModel = { ...formulary };
    parsedFormulary[key] = value;
    setFormulary(parsedFormulary);
  }, [formulary]);

  const handleSetName = useCallback((value: string) => {
    setName(value);
  }, []);

  const handleSetDescription = useCallback((value: string) => {
    setDescription(value);
  }, []);

  const handleSetDate = useCallback((value: Date) => {
    setDate(value);
  }, []);

  const handleSetValue = useCallback((value: number) => {
    setValue(value);
  }, []);

  return (
    <Main
      name={name}
      description={description}
      date={date}
      value={value}
      setName={handleSetName}
      setDescription={handleSetDescription}
      setDate={handleSetDate}
      setValue={handleSetValue}
      formulary={formulary}
      onChange={handleChange}
    />
  );
};

export default Add;
