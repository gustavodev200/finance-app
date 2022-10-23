import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { THEME } from "../../themes";

type PropsButtonRadio = {
  width: string;
  borderRadius: number;
  padding: number;
  flexDirection: string;
  alignItems: string;
};

const styleDefaultButtonRadio: PropsButtonRadio = {
  width: "45%",
  borderRadius: 5,
  padding: 10,
  flexDirection: "row",
  alignItems: "center",
};

export function Select() {
  const [checked, setChecked] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.textInfoButtonRadioContainer}>
        <Text style={styles.titleScreen}>SELECIONE UMA CATEGORIA:</Text>
      </View>

      <View style={styles.radioInputContainer}>
        <View style={styles.checkGreen}>
          <RadioButton
            uncheckedColor="#ffffff"
            color="#ffffff"
            value={"1"}
            status={checked === 1 ? "checked" : "unchecked"}
            onPress={() => setChecked(1)}
          />

          <MaterialCommunityIcons
            name="trending-up"
            size={24}
            color={THEME.COLORS.TEXT}
          />

          <Text style={styles.textButtonRadio}>Entradas</Text>
        </View>
        <View style={styles.checkRed}>
          <RadioButton
            uncheckedColor="#ffffff"
            color="#ffffff"
            value={"2"}
            status={checked === 2 ? "checked" : "unchecked"}
            onPress={() => setChecked(2)}
          />

          <MaterialCommunityIcons
            name="trending-down"
            size={24}
            color={THEME.COLORS.TEXT}
          />

          <Text style={styles.textButtonRadio}>Entradas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
    padding: 10,
  },

  textInfoButtonRadioContainer: {
    width: "100%",
    paddingLeft: 20,
    justifyContent: "center",
    height: 40,
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 5,
  },
  titleScreen: {
    fontWeight: "bold",
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.BACKGROUND_900,
  },
  checkGreen: {
    ...styleDefaultButtonRadio,
    backgroundColor: THEME.COLORS.SUCCESS,
  },
  checkRed: {
    ...styleDefaultButtonRadio,
    backgroundColor: THEME.COLORS.ALERT,
  },
  radioInputContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textButtonRadio: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
