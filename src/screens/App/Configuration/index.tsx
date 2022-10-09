import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Main from './main';

const Configuration: React.FC = () => {
  const [fixedGoal, setFixedGoal] = useState<string>('');
  const [variableGoal, setVariableGoal] = useState<string>('');
  const [futureGoal, setFutureGoal] = useState<string>('');
  const [income, setIncome] = useState<string>('');

  const { navigate } = useNavigation<any>();

  const handleFixedGoal = useCallback((value: string) => {
    setFixedGoal(value);
  }, []);

  const handlesetVariableGoal = useCallback((value: string) => {
    setVariableGoal(value);
  }, []);

  const handlesetFutureGoal = useCallback((value: string) => {
    setFutureGoal(value);
  }, []);

  const handlesetIncome = useCallback((value: string) => {
    setIncome(value);
  }, []);

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
    />
  );
};

export default Configuration;
