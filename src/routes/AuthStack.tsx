import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register } from "../screens/Auth/Register";
import { SignIn } from "../screens/Auth/SignIn";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen options={{}} name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
