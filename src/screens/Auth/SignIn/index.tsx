import { SafeAreaView, Text, View } from "react-native";
import { Background } from "../../../components/Background";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { styles } from "./styles";

export function SignIn() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Digite seu e-mail"
          type="email-address"
          icon="email-outline"
        />
        <Button text="ENTRAR" />
      </SafeAreaView>
    </Background>
  );
}
