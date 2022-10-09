export interface MainProps {
    futureGoal: string;
    setFutureGoal: (email: string) => void;
    fixedGoal: string;
    setFixedGoal: (email: string) => void;
    variableGoal: string;
    setVariableGoal: (email: string) => void;
    setIncome: () => void;
    income: string;
  }