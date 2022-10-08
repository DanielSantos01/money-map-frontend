import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FormularyModel } from './interfaces';
import Main from './main';

const Register: React.FC = () => {
  const [formulary, setFormulary] = useState<FormularyModel>({} as FormularyModel);
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  const { goBack } = useNavigation();

  const handleChange = useCallback((key: string) => (value: string) => {
    const parsedFormulary: FormularyModel = { ...formulary };
    parsedFormulary[key] = value;
    setFormulary(parsedFormulary);
  }, [formulary]);

  const handleAgreement = useCallback(() => {
    setHasAgreed(!hasAgreed);
  }, [hasAgreed]);

  const handleCreateAccount = useCallback(async () => {
    console.log(formulary);
  }, [formulary]);

  const handleBackToSignIn = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Main
      formulary={formulary}
      onChange={handleChange}
      handleAgreement={handleAgreement}
      hasAgreed={hasAgreed}
      handleBackToSignIn={handleBackToSignIn}
      handleCreateAccount={handleCreateAccount}
    />
  );
};

export default Register;
