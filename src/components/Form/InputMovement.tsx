import { Feather } from "@expo/vector-icons";
import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import { THEME } from "../../themes";

interface InputProps {
  placeholder: string;
  type?: KeyboardTypeOptions;
  icon: React.ComponentProps<typeof Feather>["name"];
  password?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
}

export function InputMovement({ icon, placeholder, type, value }: InputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={icon} size={24} color={THEME.COLORS.BACKGROUND_900} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
        // onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    borderRadius: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: THEME.COLORS.TEXT,
    padding: 5,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: THEME.FONT_SIZE.MD,
    paddingRight: 15,
    paddingLeft: 15,
    color: THEME.COLORS.BACKGROUND_900,
    fontWeight: "bold",
  },
});
