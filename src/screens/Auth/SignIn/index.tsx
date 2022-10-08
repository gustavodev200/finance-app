import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { NavParams } from "../../../@types/navigation";

import { AccountText } from "../../../components/AccountText";
import { Background } from "../../../components/Background";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useAuth } from "../../../contexts/Auth";

import { styles } from "./styles";

export function SignIn() {
  const { signIn } = useAuth();
  const navigation = useNavigation<NavParams>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Digite seu e-mail"
          type="email-address"
          icon="email-outline"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Digite sua senha"
          type="default"
          icon="account-lock"
          password={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button text="ENTRAR" onPress={() => signIn(email, password)} />
        <AccountText
          textInfo="Não tem conta?"
          textStatus="Cadastre-se"
          navigation={() => navigation.navigate("Register")}
        />
      </SafeAreaView>
    </Background>
  );
}
