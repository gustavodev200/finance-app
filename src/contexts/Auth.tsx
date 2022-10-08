import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";

export interface AuthData {
  token: string;
  name: string;
  email: string;
  //   password: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData | undefined>;
  //   register: (
  //     name: string,
  //     email: string,
  //     password: string
  //   ) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: Props) => {
  const [authData, setAuth] = useState<AuthData>();

  const signIn = async (
    email: string,
    password: string
  ): Promise<AuthData | undefined> => {
    try {
      const auth = await authService.signIn(email, password);

      setAuth(auth);

      return auth;
    } catch (error) {
      Alert.alert("Tente Novamente");
    }
  };

  async function signOut(): Promise<void> {
    setAuth(undefined);

    return;
  }

  async function register() {}

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
