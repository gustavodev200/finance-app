import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TransactionContext } from "../contexts/TransactionsContext/TransactionContext";
import { THEME } from "../themes";
import { formatAmount } from "../utils/format-amount";

export function TotalBalance() {
  const { transactions } = useContext(TransactionContext);

  const arrAmount: number[] = transactions.map((transaction) =>
    parseFloat(transaction.amount)
  );
  const total: string = arrAmount
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const sign: string = parseFloat(total) < 0 ? "-" : "";
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.balanceText}>SALDO</Text>
      </View>
      <View style={styles.balanceTotalContent}>
        <Text style={styles.balanceValue}>R$</Text>
        <Text style={styles.balanceValue}>
          {sign}
          {total[0] === "-"
            ? formatAmount(total).substring(1)
            : formatAmount(total)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
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
