import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type CardColorProps = {
  typeCard: string;
  statusCard: string;
  moneyValue: number;
  currencyType: "+R$" | "-R$";
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export function CardMoneyInfo({
  typeCard,
  statusCard,
  moneyValue,
  currencyType,
  icon,
}: CardColorProps) {
  return (
    <View style={styles[typeCard]}>
      <Text style={styles.textStatusCard}>{statusCard}</Text>
      <View style={styles.contentMoneyInfo}>
        <MaterialCommunityIcons name={icon} size={32} color="#ffffff" />
        <View style={styles.moneyInsights}>
          <Text style={styles.moneyInsightsText}>{currencyType}</Text>
          <Text style={styles.moneyInsightsText}>{moneyValue}</Text>
        </View>
      </View>
    </View>
  );
}
