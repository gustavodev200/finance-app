import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

interface Props {
  text: string;
}

export function Button({ text }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    marginTop: "5%",
  },
  textButton: {
    color: THEME.COLORS.BACKGROUND_900,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
  },
});
