export interface MainProps {
    futureGoal: string;
    setFutureGoal: (email: string) => void;
    fixedGoal: string;
    setFixedGoal: (email: string) => void;
    variableGoal: string;
    setVariableGoal: (email: string) => void;
    setPassword: (password: string) => void;
    signIn: () => Promise<void>
    createAccount: () => void;
    forgotPassword: () => void;
  }