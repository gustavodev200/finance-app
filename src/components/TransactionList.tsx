import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";
import { formatAmount } from "../utils/format-amount";

type ListProps = {
  id: number;
  typeTransaction: string;
  title: string;
  date: string;
  current: string;
};

export function TransactionList({
  typeTransaction,
  title,
  date,
  current,
  id,
}: ListProps) {
  return (
    <View style={styles.container} key={id}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={stylesColorCard(typeTransaction).containerCardBalance}>
        <Text style={styles.textCurrencyType}>
          {typeTransaction === "Entrada"
            ? "+R$"
            : typeTransaction === "Saida"
            ? "-R$"
            : typeTransaction === "Assinatura"
            ? "-R$"
            : "Error"}
        </Text>
        <Text style={styles.textBalance}>{formatAmount(current)}</Text>
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

  textCurrencyType: {
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
  },
  textBalance: {
    color: THEME.COLORS.TEXT,
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
    marginLeft: 5,
  },
});

const stylesColorCard = (typeTransaction: any) =>
  StyleSheet.create({
    containerCardBalance: {
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        typeTransaction === "Assinatura"
          ? THEME.COLORS.PRIMARY
          : typeTransaction === "Entrada"
          ? THEME.COLORS.SUCCESS
          : typeTransaction === "Saida"
          ? THEME.COLORS.ALERT
          : "",
      borderRadius: 5,
      height: "100%",
      flexDirection: "row",
    },
  });
