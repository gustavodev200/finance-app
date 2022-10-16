import React from "react";
import { Text, View } from "react-native";
import { BackgroundContainer } from "../../components/BackgroundContainer";

import { styles } from "./styles";

export function ProfileScreen() {
  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <Text>Perfil</Text>
      </View>
    </BackgroundContainer>
  );
}
