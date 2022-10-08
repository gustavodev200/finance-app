import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";
import { THEME } from "../themes";

interface Props {
  textInfo: string;
  textStatus: string;
}

export function AccountText({ textStatus, textInfo }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
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
