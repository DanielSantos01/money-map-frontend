export interface IAuthProvider {
  children: React.ReactNode;
}

export interface AuthContextData {
  isAuthenticated: boolean;
  userData: any;
  isLoading: boolean;
  handleAuth: (params: IAuthData) => Promise<void>;
}

export interface IAuthData {
  email: string;
  password: string;
}