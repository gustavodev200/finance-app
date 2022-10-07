import React from "react";
import { TextInput, KeyboardTypeOptions, View } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

interface InputProps {
  placeholder: string;
  type?: KeyboardTypeOptions;
  icon: string;
}

export function Input({ placeholder, type, icon }: InputProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        // name={icon}
        size={24}
        color={THEME.COLORS.CAPTION_500}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 60,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: THEME.FONT_SIZE.MD,
    paddingRight: 15,
    paddingLeft: 15,
    color: THEME.COLORS.CAPTION_500,
    fontWeight: "bold",
  },
});
