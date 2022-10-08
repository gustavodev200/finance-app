import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Register } from "../screens/Auth/Register";
import { SignIn } from "../screens/Auth/SignIn";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Register" component={Register} /> */}
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
