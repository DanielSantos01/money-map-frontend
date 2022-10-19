import { useAuth } from '@/hooks';
import { useAxios } from '@/utils/useAxios';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';

import Main from './main';

const Configuration: React.FC = () => {
  const [fixedGoal, setFixedGoal] = useState<string>('');
  const [variableGoal, setVariableGoal] = useState<string>('');
  const [futureGoal, setFutureGoal] = useState<string>('');
  const [income, setIncome] = useState<string>('');
  const [axiosPatch] = useAxios('patch');
  const [axiosPost] = useAxios('post');

  const { userData } = useAuth();
  const userId = userData.id;
  const userCurrentMoney = userData.value;

  const { navigate } = useNavigation();

  const handleFixedGoal = useCallback((value: string) => {
    setFixedGoal(value);
  }, [setFixedGoal]);

  const handlesetVariableGoal = useCallback((value: string) => {
    setVariableGoal(value);
  }, [setVariableGoal]);

  const handlesetFutureGoal = useCallback((value: string) => {
    setFutureGoal(value);
  }, [setFutureGoal]);

  const handlesetIncome = useCallback((value: string) => {
    setIncome(value);
  }, [setIncome]);

  const handleConfig = useCallback(async () => {
    await axiosPatch({
      url: `/user/${userId}`,
      body: {
        fixedGoal: fixedGoal,
        variableGoal: variableGoal,
        futureGoal: futureGoal,
        income: income,
        value: Number(income) + Number(userCurrentMoney),
      },
    });

    navigate('Home');
  }, [axiosPatch]);

  return (
    <Main
      fixedGoal={fixedGoal}
      variableGoal={variableGoal}
      futureGoal={futureGoal}
      income={income}
      setFixedGoal={handleFixedGoal}
      setFutureGoal={handlesetFutureGoal}
      setVariableGoal={handlesetVariableGoal}
      setIncome={handlesetIncome}
      handleConfig={handleConfig}
    />
  );
};

export default Configuration;
