import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import { AccountText } from "../../../components/AccountText";
import { Background } from "../../../components/Background";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { styles } from "./styles";

import { NavParams } from "../../../@types/navigation";
import { useAuth } from "../../../contexts/Auth";

export function Register() {
  const { signIn } = useAuth();
  const navigation = useNavigation<NavParams>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Digite seu nome"
          icon="account"
          value={name}
          onChangeText={setName}
        />
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

        <Button text="CADASTRAR" onPress={() => signIn(email, password)} />
        <AccountText
          textInfo="Já tem conta?"
          textStatus="Entrar"
          navigation={() => navigation.navigate("SignIn")}
        />
      </SafeAreaView>
    </Background>
  );
}
