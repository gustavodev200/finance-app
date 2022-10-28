import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

export function MyAcquisition() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>BMW iX3 M Sport </Text>
      </View>

      <View style={styles.containerBalanceInfo}>
        <Text style={styles.currentBalance}>R$ 70.000</Text>
        <Text style={styles.balanceToArrive}>Meta: R$ 400.000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    height: 85,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  containerTitle: {
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    color: THEME.COLORS.BACKGROUND_900,
  },
  containerBalanceInfo: {
    width: "45%",
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  currentBalance: {
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    color: THEME.COLORS.SUCCESS,
  },
  balanceToArrive: {
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: "bold",
    color: THEME.COLORS.ALERT,
  },
});
