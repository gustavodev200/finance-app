import { Image, ImageBackground } from "react-native";

import backgroundImg from "../../assets/slash.png";
import logo from "../../assets/logo.png";

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
      <Image source={logo} defaultSource={backgroundImg} style={styles.logo} />
      {children}
    </ImageBackground>
  );
}
