import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

export function TotalBalance() {
  return (
    <View style={styles.container}>
      <View>
        <Text>SALDO</Text>
      </View>
      <View>
        <Text>1200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 20,
    paddingLeft: 20,
  },
});
