import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { ControlScreen } from "../screens/ControlScreen";
import { AcquisitionsScreen } from "../screens/AcquisitionsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

import { Feather, Entypo } from "@expo/vector-icons";

import { THEME } from "../themes";
import { ButtonNew } from "../components/ButtonNew";

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.TEXT,
        tabBarActiveBackgroundColor: THEME.COLORS.BACKGROUND_900,
        tabBarInactiveTintColor: THEME.COLORS.BACKGROUND_900,

        tabBarStyle: {
          backgroundColor: THEME.COLORS.BACKGROUND_600,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Controle"
        component={ControlScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Adicionar"
        component={ButtonNew}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <ButtonNew size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Aquisições"
        component={AcquisitionsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
