import React from "react";
import { Text, View } from "react-native";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import { MyAcquisition } from "../../components/MyAcquisition";
import { TitleScreens } from "../../components/TitleScreens";

import { styles } from "./styles";

export function AcquisitionsScreen() {
  return (
    <BackgroundContainer>
      <View style={styles.containerTitle}>
        <TitleScreens text="METAS DE AQUISIÇÃO" />
        <ButtonWithIcon icon="plus" />
      </View>
      <View>
        <MyAcquisition />
        <MyAcquisition />
        <MyAcquisition />
      </View>
    </BackgroundContainer>
  );
}
