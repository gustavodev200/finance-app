import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

type ListProps = {
  color: string;
};

export function TransactionList({ color }: ListProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>ENERGIA</Text>
      </View>
      <View>
        <Text style={styles.data}>23/10/2022</Text>
      </View>
      <View style={stylesColorCard(color).containerCardBalance}>
        <Text style={styles.textBalance}>-R$ 95,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    borderRadius: 10,
    marginTop: 10,
  },

  text: {
    color: THEME.COLORS.BACKGROUND_900,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
  },
  data: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.SM,
  },

  textBalance: {
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
  },
});

const stylesColorCard = (color: any) =>
  StyleSheet.create({
    containerCardBalance: {
      width: "35%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      borderRadius: 5,
      height: "100%",
    },
  });
