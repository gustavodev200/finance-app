import React from "react";
import { Text, View } from "react-native";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import { TransactionCalendar } from "../../components/TransactionCalendar";

import { styles } from "./styles";

export function AcquisitionsScreen() {
  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <TransactionCalendar />
      </View>
    </BackgroundContainer>
  );
}
