import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

type TitleProps = {
  text: string;
};

export function TitleScreens({ text }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 10,
  },
  titleScreen: {
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.BACKGROUND_900,
  },
});
