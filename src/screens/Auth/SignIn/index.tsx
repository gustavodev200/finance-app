import { SafeAreaView, Text, View } from "react-native";
import { AccountText } from "../../../components/AccountText";
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
        <Input
          placeholder="Digite sua senha"
          type="default"
          icon="account-lock"
          password={true}
        />

        <Button text="ENTRAR" />
        <AccountText textInfo="Não tem conta?" textStatus="Cadastre-se" />
      </SafeAreaView>
    </Background>
  );
}
