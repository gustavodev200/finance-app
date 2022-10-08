import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Background } from "./src/components/Background";
import { Router } from "./src/routes/Router";
import { AuthProvider } from "./src/contexts/Auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return <AuthProvider>{fontsLoaded ? <Router /> : <Loading />}</AuthProvider>;
}
