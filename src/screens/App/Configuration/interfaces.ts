export interface MainProps {
    futureGoal: string;
    setFutureGoal: (futureGoal: string) => void;
    fixedGoal: string;
    setFixedGoal: (fixedGoal: string) => void;
    variableGoal: string;
    setVariableGoal: (variableGoal: string) => void;
    setIncome: (income: string) => void;
    income: string;
  }