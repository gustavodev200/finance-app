import React from "react";
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

export function Button({ text, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    marginTop: "4%",
  },
  textButton: {
    color: THEME.COLORS.BACKGROUND_900,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
  },
});
