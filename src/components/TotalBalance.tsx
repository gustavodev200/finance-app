import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

export function TotalBalance() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.balanceText}>SALDO</Text>
      </View>
      <View style={styles.balanceTotalContent}>
        <Text style={styles.balanceValue}>R$</Text>
        <Text style={styles.balanceValue}>1.215,10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  balanceText: {
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    color: THEME.COLORS.BACKGROUND_900,
  },
  balanceTotalContent: {
    width: "60%",
    height: "100%",
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
  },

  balanceValue: {
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    color: THEME.COLORS.BACKGROUND_900,
  },
});
