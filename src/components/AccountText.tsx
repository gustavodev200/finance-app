import React from "react";
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

interface Props {
  textInfo: string;
  textStatus: string;
  navigation: (event: GestureResponderEvent) => void;
}

export function AccountText({ textStatus, textInfo, navigation }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={navigation}>
      <Text style={styles.textInfo}>{textInfo}</Text>
      <Text style={styles.textStatus}>{textStatus}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flexDirection: "row",
  },
  textInfo: {
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.SM,
    marginRight: 5,
  },
  textStatus: {
    color: THEME.COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.SM,
  },
});
