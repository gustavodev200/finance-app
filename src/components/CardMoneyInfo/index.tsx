import React from "react";
import { Text, View } from "react-native";
import { styles, stylesContent } from "./styles";

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
    <View style={styles(typeCard).container}>
      <Text style={stylesContent.textStatusCard}>{statusCard}</Text>
      <View style={stylesContent.contentMoneyInfo}>
        <MaterialCommunityIcons name={icon} size={36} color="#ffffff" />
        <View style={stylesContent.moneyInsights}>
          <Text style={stylesContent.moneyInsightsText}>{currencyType}</Text>
          <Text style={stylesContent.moneyInsightsText}>{moneyValue}</Text>
        </View>
      </View>
    </View>
  );
}
