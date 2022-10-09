import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../contexts/Auth";
import { Background } from "../components/Background";
import { Loading } from "../components/Loading";

export function Router() {
  const { authData, loading } = useAuth();

  if (loading) {
    return (
      <Background>
        <Loading />
      </Background>
    );
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
