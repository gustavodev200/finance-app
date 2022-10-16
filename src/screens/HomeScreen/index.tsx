import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/Auth";

import { styles } from "./styles";

export function HomeScreen() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
