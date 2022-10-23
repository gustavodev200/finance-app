import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { ControlScreen } from "../screens/ControlScreen";
import { AcquisitionsScreen } from "../screens/AcquisitionsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { AddMoneyScreen } from "../screens/AddMoneyScreen";

import { Feather, Entypo } from "@expo/vector-icons";

import { THEME } from "../themes";
import { ButtonNew } from "../components/ButtonNew";

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: THEME.COLORS.BACKGROUND_900,
        tabBarInactiveTintColor: THEME.COLORS.CAPTION_500,
        tabBarLabelStyle: {
          fontWeight: "bold",
        },

        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          backgroundColor: THEME.COLORS.TEXT,
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
        component={AddMoneyScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => (
            <ButtonNew focused={focused} color={color} size={size} />
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
