import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { THEME } from "../themes";

interface Props {
  size: number;
  color: string;
  focused: boolean;
}

export function ButtonNew({ focused, size, color }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: focused
            ? THEME.COLORS.SECUNDARY
            : THEME.COLORS.PRIMARY,
        },
      ]}
    >
      <Entypo name="plus" size={24} color={THEME.COLORS.BACKGROUND_900} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
