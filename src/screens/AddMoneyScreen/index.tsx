import React from "react";
import { View, Text } from "react-native";

import { BackgroundContainer } from "../../components/BackgroundContainer";
import { Button } from "../../components/Button";
import { InputMovement } from "../../components/Form/InputMovement";
import { Select } from "../../components/Form/Select";
import { TitleScreens } from "../../components/TitleScreens";
import { styles } from "./styles";

export function AddMoneyScreen() {
  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <TitleScreens text="ADICIONAR MOVIMENTAÇÃO" />
        <View style={styles.formContainer}>
          <InputMovement placeholder="Título da movimentação" icon="box" />
          <Select />
          <InputMovement
            placeholder="Valor"
            icon="dollar-sign"
            type="numeric"
          />
          <InputMovement
            placeholder="00/00/00"
            icon="calendar"
            type="ascii-capable"
          />
          <Button text="ADICIONAR" onPress={() => console.log("ADICIONAR")} />
        </View>
      </View>
    </BackgroundContainer>
  );
}
