import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textButton}>ENTRAR</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  textButton: {
    color: THEME.COLORS.BACKGROUND_900,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
  },
});
