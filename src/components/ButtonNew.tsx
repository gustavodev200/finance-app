import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  size: number;
  color: string;
};

export function ButtonNew({ size, color }: Props) {
  return (
    <View style={styles.container}>
      <Entypo name="plus" size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
