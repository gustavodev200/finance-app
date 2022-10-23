import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Router } from "./src/routes/Router";
import { AuthProvider } from "./src/contexts/Auth";
import { TransactionContextProvider } from "./src/contexts/TransactionsContext/TransactionContext";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return (
    <AuthProvider>
      <PaperProvider>
        <TransactionContextProvider>
          {fontsLoaded ? <Router /> : <Loading />}
        </TransactionContextProvider>
      </PaperProvider>
    </AuthProvider>
  );
}
