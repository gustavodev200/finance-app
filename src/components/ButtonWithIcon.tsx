import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { THEME } from "../themes";

interface Props {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export function ButtonWithIcon({ icon }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={40}
        color={THEME.COLORS.BACKGROUND_900}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 50,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
