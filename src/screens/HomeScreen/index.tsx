import React from "react";
import { View, Text, SafeAreaView, Button, Platform } from "react-native";

import { BackgroundContainer } from "../../components/BackgroundContainer";
import { CardMoneyInfo } from "../../components/CardMoneyInfo";
import { TotalBalance } from "../../components/TotalBalance";
import { TransactionCalendar } from "../../components/TransactionCalendar";
import { TransactionList } from "../../components/TransactionList";
import { THEME } from "../../themes";

import { styles } from "./styles";

export function HomeScreen() {
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
        <View style={styles.searchContainer}>
          <View style={styles.textSearchStyleContainer}>
            <Text style={styles.textSearchStyle}>TRANSAÇÕES:</Text>
          </View>
          <View></View>
        </View>
        <SafeAreaView>
          <TransactionList typeTransaction="Entrada" />
          <TransactionList typeTransaction="Assinatura" />
          <TransactionList typeTransaction="Saida" />
        </SafeAreaView>
      </View>
    </BackgroundContainer>
  );
}
