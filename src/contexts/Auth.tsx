import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ChildrenProps } from "../@types/children-props";

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
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem("@AuthData");
    if (auth) {
      setAuth(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  }

  const signIn = async (email: string, password: string) => {
    try {
      const auth = await authService.signIn(email, password);

      setAuth(auth);
      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));

      return auth;
    } catch (error) {
      Alert.alert("Tente Novamente");
    }
  };

  async function signOut(): Promise<void> {
    setAuth(undefined);
    AsyncStorage.removeItem("@AuthData");

    return;
  }

  async function register() {}

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
