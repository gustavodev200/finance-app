import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import { CardMoneyInfo } from "../../components/CardMoneyInfo";
import { TotalBalance } from "../../components/TotalBalance";
import { useAuth } from "../../contexts/Auth";
import { THEME } from "../../themes";

import { styles } from "./styles";

export function HomeScreen() {
  const { signOut } = useAuth();
  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <TotalBalance />
        <View style={styles.cardsInfoView}>
          <CardMoneyInfo
            icon="trending-up"
            typeCard={THEME.COLORS.SUCCESS}
            statusCard="Entradas"
            moneyValue={1.355}
            currencyType="+R$"
          />
          <CardMoneyInfo
            icon="trending-down"
            typeCard={THEME.COLORS.ALERT}
            statusCard="Saidas"
            moneyValue={1.232}
            currencyType="-R$"
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </BackgroundContainer>
  );
}
