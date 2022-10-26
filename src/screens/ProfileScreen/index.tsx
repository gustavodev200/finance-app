import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import { useAuth } from "../../contexts/Auth";

import { styles } from "./styles";
export function ProfileScreen() {
  const { signOut } = useAuth();

  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
}
