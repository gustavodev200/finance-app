import { Image, ImageBackground, View } from "react-native";

import backgroundImg from "../../assets/fundo.png";
import Logo from "../../assets/logo.svg";

import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      <Logo width="270" height="270" style={styles.logo} />
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
}
