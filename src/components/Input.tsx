import React from "react";
import { TextInput, KeyboardTypeOptions, View } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface InputProps {
  placeholder: string;
  type?: KeyboardTypeOptions;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  password?: boolean;
  onChangeText: (text: string) => void;
  value?: string;
}

export function Input({
  placeholder,
  type,
  icon,
  password,
  value,
  onChangeText,
}: InputProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={THEME.COLORS.CAPTION_500}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={password}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 55,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginBottom: "5%",
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
